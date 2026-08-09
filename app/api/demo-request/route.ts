import { createHash, randomUUID } from "node:crypto";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import {
  createDemoRequestSchema,
  demoSchemaMessages,
  type DemoRequestPayload,
} from "@/lib/contact/demoRequestSchema";
import {
  getSupabaseAnonKey,
  getSupabaseServiceRoleKey,
  getSupabaseUrl,
} from "@/lib/supabase/env";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 12_000;
const MIN_FILL_MS = 2_500;
const MAX_FILL_MS = 1000 * 60 * 60 * 6;

type RequestBody = DemoRequestPayload & {
  website?: string;
  formStartedAt?: number;
  locale?: "en" | "tr";
};

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function hashIp(ip: string): string {
  return createHash("sha256").update(`lawyn-contact:${ip}`).digest("hex");
}

function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!origin) {
    // Same-origin navigations / some browsers may omit Origin on same-site POSTs
    return true;
  }
  try {
    const originHost = new URL(origin).host;
    if (host && originHost === host) return true;
  } catch {
    return false;
  }

  const allowed = (process.env.CONTACT_ALLOWED_ORIGINS || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);

  return allowed.includes(origin);
}

async function submitViaServiceRole(args: {
  payload: DemoRequestPayload;
  locale?: string;
  ipHash: string;
  userAgent: string;
}) {
  const serviceKey = getSupabaseServiceRoleKey();
  if (!serviceKey) return null;

  const supabase = createClient(getSupabaseUrl(), serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data, error } = await supabase.rpc("submit_demo_request", {
    p_full_name: args.payload.fullName,
    p_company: args.payload.company,
    p_email: args.payload.email,
    p_phone: args.payload.phone,
    p_team_size: args.payload.teamSize,
    p_solution_interest: args.payload.solutionInterest,
    p_message: args.payload.message,
    p_preferred_contact: args.payload.preferredContact,
    p_consent: args.payload.consent,
    p_locale: args.locale ?? null,
    p_ip_hash: args.ipHash,
    p_user_agent: args.userAgent,
  });

  if (error) {
    console.error("submit_demo_request service-role error", error);
    return { ok: false as const, error: "server_error" };
  }

  return data as { ok: boolean; error?: string; id?: string };
}

async function submitViaEdgeFunction(args: {
  body: RequestBody;
  request: Request;
}) {
  const url = `${getSupabaseUrl()}/functions/v1/submit-demo-request`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getSupabaseAnonKey()}`,
      apikey: getSupabaseAnonKey(),
      "x-forwarded-for": clientIp(args.request),
      "user-agent": args.request.headers.get("user-agent") || "",
    },
    body: JSON.stringify(args.body),
  });

  let data: { ok?: boolean; error?: string; id?: string } = {};
  try {
    data = await response.json();
  } catch {
    data = { ok: false, error: "server_error" };
  }

  return {
    status: response.status,
    data: {
      ok: Boolean(data.ok),
      error: data.error,
      id: data.id,
    },
  };
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  }

  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { ok: false, error: "unsupported_media_type" },
      { status: 415 },
    );
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return NextResponse.json(
      { ok: false, error: "payload_too_large" },
      { status: 413 },
    );
  }

  let body: RequestBody;
  try {
    body = JSON.parse(raw) as RequestBody;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: pretend success so bots think it worked
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true, id: randomUUID() });
  }

  if (typeof body.formStartedAt === "number") {
    const elapsed = Date.now() - body.formStartedAt;
    if (elapsed >= 0 && elapsed < MIN_FILL_MS) {
      return NextResponse.json({ ok: false, error: "too_fast" }, { status: 429 });
    }
    if (elapsed > MAX_FILL_MS) {
      return NextResponse.json(
        { ok: false, error: "form_expired" },
        { status: 400 },
      );
    }
  }

  const locale = body.locale === "tr" ? "tr" : "en";
  const parsed = createDemoRequestSchema(demoSchemaMessages[locale]).safeParse({
    fullName: body.fullName,
    company: body.company,
    email: body.email,
    phone: body.phone ?? "",
    teamSize: body.teamSize,
    solutionInterest: body.solutionInterest,
    message: body.message ?? "",
    preferredContact: body.preferredContact,
    consent: body.consent,
  });

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "validation_failed" },
      { status: 400 },
    );
  }

  const ipHash = hashIp(clientIp(request));
  const userAgent = (request.headers.get("user-agent") || "").slice(0, 500);

  try {
    const viaService = await submitViaServiceRole({
      payload: parsed.data,
      locale,
      ipHash,
      userAgent,
    });

    if (viaService) {
      if (!viaService.ok) {
        const code = viaService.error || "validation_failed";
        const status = code === "rate_limited" ? 429 : 400;
        return NextResponse.json({ ok: false, error: code }, { status });
      }
      return NextResponse.json({ ok: true, id: viaService.id });
    }

    const viaEdge = await submitViaEdgeFunction({
      body: {
        ...parsed.data,
        locale,
        formStartedAt: body.formStartedAt,
        website: "",
      },
      request,
    });

    if (!viaEdge.data.ok) {
      const code = viaEdge.data.error || "server_error";
      const status =
        viaEdge.status === 429 || code === "rate_limited" || code === "too_fast"
          ? 429
          : viaEdge.status >= 400 && viaEdge.status < 500
            ? viaEdge.status
            : 500;
      return NextResponse.json({ ok: false, error: code }, { status });
    }

    return NextResponse.json({ ok: true, id: viaEdge.data.id });
  } catch (error) {
    console.error("demo-request route failed", error);
    return NextResponse.json(
      { ok: false, error: "server_error" },
      { status: 500 },
    );
  }
}

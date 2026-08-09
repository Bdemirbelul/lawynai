import type { DemoRequestPayload } from "@/lib/contact/demoRequestSchema";
import type { Locale } from "@/lib/i18n/translations";

export type DemoRequestClientPayload = DemoRequestPayload & {
  locale: Locale;
  website: string;
  formStartedAt: number;
};

export type DemoRequestResult =
  | { ok: true; mode: "connected" }
  | {
      ok: false;
      mode: "error";
      code:
        | "error"
        | "rate_limited"
        | "spam_detected"
        | "too_fast"
        | "unconnected";
    };

export async function submitDemoRequest(
  payload: DemoRequestClientPayload,
): Promise<DemoRequestResult> {
  try {
    const response = await fetch("/api/demo-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    let data: { ok?: boolean; error?: string } = {};
    try {
      data = await response.json();
    } catch {
      data = {};
    }

    if (response.ok && data.ok) {
      return { ok: true, mode: "connected" };
    }

    const code = data.error;
    if (code === "rate_limited" || code === "too_fast") {
      return { ok: false, mode: "error", code: "rate_limited" };
    }
    if (code === "spam_detected") {
      return { ok: false, mode: "error", code: "spam_detected" };
    }

    return { ok: false, mode: "error", code: "error" };
  } catch {
    return { ok: false, mode: "error", code: "error" };
  }
}

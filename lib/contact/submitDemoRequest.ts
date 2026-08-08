import type { DemoRequestPayload } from "@/lib/contact/demoRequestSchema";

export type DemoRequestResult =
  | { ok: true; mode: "connected" }
  | { ok: false; mode: "unconnected"; messageKey: "unconnected" }
  | { ok: false; mode: "error"; messageKey: "error" };

/**
 * Integration point for a future demo-request backend
 * (API route, Resend, Supabase, CRM, etc.).
 * Currently validates that the payload arrived and reports
 * that no delivery channel has been connected yet.
 */
export async function submitDemoRequest(
  payload: DemoRequestPayload,
): Promise<DemoRequestResult> {
  void payload;

  await new Promise((resolve) => {
    window.setTimeout(resolve, 700);
  });

  return {
    ok: false,
    mode: "unconnected",
    messageKey: "unconnected",
  };
}

"use client";

import { AlertTriangle, CalendarDays, FileText, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

function ProductFrame() {
  const { t } = useLanguage();
  const p = t.aiShowcase.product;

  return (
    <div className="mx-auto w-full max-w-[880px]">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B1220] shadow-[0_30px_60px_-28px_rgba(0,0,0,0.65)]">
        <div className="flex items-center gap-2 border-b border-white/10 bg-[#111827] px-4 py-3">
          <span className="size-2.5 rounded-full bg-[#FF5F57]" aria-hidden="true" />
          <span className="size-2.5 rounded-full bg-[#FEBC2E]" aria-hidden="true" />
          <span className="size-2.5 rounded-full bg-[#28C840]" aria-hidden="true" />
          <div className="ml-3 flex-1 truncate rounded-md bg-white/5 px-3 py-1.5 text-center text-[11px] text-white/55">
            app.lawyn.ai / workspace
          </div>
        </div>

        <div className="grid gap-4 bg-[#0F172A] p-4 sm:p-5 md:grid-cols-[0.9fr_1.1fr] md:gap-5 md:p-6">
          <div className="space-y-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-[12px] font-medium text-white/50">{p.subtitle}</p>
              <h3 className="mt-1 font-serif text-lg text-white">{p.title}</h3>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {[
                { label: p.activeMatters, value: "24", icon: FileText },
                { label: p.deadlines, value: "7", icon: CalendarDays },
                { label: p.riskFlags, value: "3", icon: AlertTriangle },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
                >
                  <metric.icon
                    className="mb-2 size-3.5 text-[#93A4FF]"
                    aria-hidden="true"
                  />
                  <p className="text-lg font-semibold text-white">{metric.value}</p>
                  <p className="mt-0.5 text-[10px] leading-snug text-white/50">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-[13px] font-medium text-white">{p.analysisTitle}</p>
                <span className="rounded-full bg-[#3154D5]/20 px-2 py-0.5 text-[10px] font-medium text-[#AAB8FF]">
                  AI
                </span>
              </div>
              <p className="text-[12px] leading-relaxed text-white/60">{p.analysisBody}</p>
              <div className="mt-4 space-y-2" aria-hidden="true">
                <div className="h-2 rounded-sm bg-white/10" />
                <div className="h-2 w-5/6 rounded-sm bg-[#3154D5]/35" />
                <div className="h-2 w-4/5 rounded-sm bg-white/10" />
                <div className="h-2 w-2/3 rounded-sm bg-[#F97066]/30" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex-1 rounded-xl border border-[#3154D5]/30 bg-gradient-to-b from-[#3154D5]/15 to-transparent p-4 sm:p-5">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-[#C7D2FE]">
                <Sparkles className="size-3.5" aria-hidden="true" />
                {p.summaryLabel}
              </div>
              <p className="text-[13.5px] leading-relaxed text-white/85">
                {p.summaryBody}
              </p>

              <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
                {[
                  { label: p.clauseLabel, value: "48" },
                  { label: p.deadlineLabel, value: "12d" },
                  { label: p.riskLabel, value: "3" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-white/10 bg-[#0B1220]/40 px-3 py-2.5"
                  >
                    <p className="text-base font-semibold text-white">{item.value}</p>
                    <p className="mt-0.5 text-[10px] text-white/50">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4" aria-hidden="true">
              <div className="mb-3 flex items-center justify-between">
                <div className="h-2 w-24 rounded-sm bg-white/15" />
                <div className="h-6 w-16 rounded-md bg-[#12B76A]/20" />
              </div>
              <div className="space-y-2">
                <div className="h-2 rounded-sm bg-white/10" />
                <div className="h-2 w-4/5 rounded-sm bg-white/10" />
                <div className="h-2 w-3/5 rounded-sm bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AIShowcase() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden bg-[#0B1220]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-dot-grid-dark opacity-[0.18]"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-[1180px] px-5 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-[clamp(1.75rem,3.2vw,2.65rem)] font-medium leading-[1.15] tracking-[-0.015em] text-white">
            {t.aiShowcase.heading}
          </h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-white/65 sm:text-[15px]">
            {t.aiShowcase.description}
          </p>
        </div>

        <div className="mt-10 lg:mt-12">
          <ProductFrame />
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-[12px] leading-relaxed text-white/40 sm:mt-10">
          {t.aiShowcase.disclaimer}
        </p>
      </div>
    </section>
  );
}

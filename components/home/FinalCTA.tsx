"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-10 md:px-8 md:py-12 lg:px-10 lg:py-14">
        <div className="relative overflow-hidden rounded-[28px] bg-[#4B6FE8] px-6 py-14 text-center shadow-[0_24px_48px_-28px_rgba(49,84,213,0.55)] sm:px-10 sm:py-16 md:rounded-[32px] lg:px-16 lg:py-20">
          <div
            className="pointer-events-none absolute inset-0 bg-dot-grid-light opacity-25"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.15] tracking-[-0.015em] text-[#0B1220]">
              {t.finalCta.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[14.5px] leading-relaxed text-[#101828]/75 sm:text-[15px]">
              {t.finalCta.supporting}
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-md bg-[#050505] px-6 text-[13.5px] font-medium text-white shadow-[0_1px_2px_rgba(16,24,40,0.18)] transition-[background-color,transform] hover:bg-[#1a1a1a] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {t.finalCta.primary}
              </a>
              <a
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-md border border-white/70 bg-white px-6 text-[13.5px] font-medium text-[#101828] transition-colors hover:bg-[#F8FAFC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {t.finalCta.secondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

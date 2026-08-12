"use client";

import { ArrowRight, CircleCheck } from "lucide-react";
import { DashboardMockup } from "@/components/home/DashboardMockup";
import { FloatingNotifications } from "@/components/home/FloatingNotifications";
import { TrustIndicator } from "@/components/home/TrustIndicator";
import { WindowsDownloadCta } from "@/components/home/WindowsDownloadCta";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-x-hidden bg-[#F5F7FB]">
      <div className="mx-auto grid min-h-[calc(100svh-60px)] w-full max-w-[1180px] items-center gap-8 px-5 py-8 md:gap-10 md:px-8 md:py-10 min-[900px]:grid-cols-[0.92fr_1.08fr] min-[900px]:gap-8 min-[900px]:px-10 min-[900px]:py-8 xl:gap-12 xl:py-14">
        <div className="relative z-10 flex min-w-0 flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#E4E7EC] bg-[#EEF1F6] px-2.5 py-1 text-[11.5px] font-medium text-[#344054]">
            <CircleCheck
              className="size-3.5 text-[#3154D5]"
              aria-hidden="true"
              strokeWidth={2.25}
            />
            <span>{t.hero.badge}</span>
          </div>

          <h1 className="mt-3.5 max-w-[18ch] font-serif text-[clamp(1.75rem,3.8vw,3.4rem)] font-medium leading-[1.12] tracking-[-0.015em] text-[#101828] sm:max-w-[16ch] min-[900px]:mt-4 min-[900px]:max-w-[15ch] xl:max-w-none">
            {t.hero.headlineBefore ? (
              <>
                {t.hero.headlineBefore}{" "}
                <span className="text-[#3154D5]">{t.hero.headlineHighlight}</span>
              </>
            ) : (
              <>
                <span className="text-[#3154D5]">{t.hero.headlineHighlight}</span>
                {t.hero.headlineAfter}
              </>
            )}
          </h1>

          <p className="mt-3.5 max-w-[34rem] text-[14px] leading-relaxed text-[#475467] sm:text-[15px] min-[900px]:mt-4">
            {t.hero.description}
          </p>

          <p className="mt-2.5 max-w-[34rem] font-serif text-[13.5px] italic leading-relaxed text-[#667085] sm:text-[14.5px]">
            {t.hero.supporting}
          </p>

          <div className="mt-5 flex w-full flex-col gap-3 sm:mt-6 sm:flex-row sm:items-center">
            <a
              href="/contact"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#050505] px-5 text-[13.5px] font-medium text-white shadow-[0_1px_2px_rgba(16,24,40,0.18)] transition-[background-color,transform,box-shadow] hover:bg-[#1a1a1a] hover:shadow-[0_4px_10px_-4px_rgba(16,24,40,0.35)] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5] sm:w-auto"
            >
              {t.hero.primaryCta}
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#solutions"
              className="inline-flex h-11 w-full items-center justify-center rounded-md border border-[#D0D5DD] bg-white px-5 text-[13.5px] font-medium text-[#101828] transition-colors hover:border-[#98A2B3] hover:bg-[#F8FAFC] active:bg-[#F2F4F7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5] sm:w-auto"
            >
              {t.hero.secondaryCta}
            </a>
          </div>

          <WindowsDownloadCta />

          <div className="mt-7 sm:mt-8">
            <TrustIndicator />
          </div>
        </div>

        <div className="relative z-0 min-w-0 overflow-visible px-2 pb-10 sm:px-4 sm:pb-12 min-[900px]:px-6 min-[900px]:pb-10 xl:px-8">
          <div className="relative isolate overflow-visible">
            <div className="relative z-10">
              <DashboardMockup />
            </div>
            <div className="pointer-events-none absolute inset-0 z-30 overflow-visible">
              <FloatingNotifications />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

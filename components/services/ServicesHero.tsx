"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { servicesHeroVideo } from "@/data/services";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function ServicesHero() {
  const { locale, t } = useLanguage();

  return (
    <section className="bg-[#F5F7FB]">
      <div className="mx-auto grid w-full max-w-[1180px] items-center gap-10 px-5 py-12 md:px-8 md:py-14 min-[960px]:grid-cols-[0.9fr_1.15fr] min-[960px]:gap-12 lg:px-10 lg:py-16">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E9EDFF] px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-[#3154D5] uppercase">
            <Sparkles className="size-3.5" aria-hidden="true" />
            {t.servicesPage.badge}
          </div>

          <h1 className="mt-5 max-w-[14ch] font-serif text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.12] tracking-[-0.015em] text-[#101828]">
            {t.servicesPage.heading}
          </h1>

          <p className="mt-5 max-w-lg text-[14.5px] leading-relaxed text-[#667085]">
            {t.servicesPage.description}
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#050505] px-5 text-[13.5px] font-medium text-white transition-colors hover:bg-[#1a1a1a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5] sm:w-auto"
            >
              {t.servicesPage.primaryCta}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href="#services"
              className="inline-flex h-11 w-full items-center justify-center rounded-md border border-[#D0D5DD] bg-white px-5 text-[13.5px] font-medium text-[#101828] transition-colors hover:border-[#98A2B3] hover:bg-[#F8FAFC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5] sm:w-auto"
            >
              {t.servicesPage.secondaryCta}
            </a>
          </div>
        </div>

        <div className="relative min-w-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#E4E7EC] shadow-[0_24px_48px_-28px_rgba(16,24,40,0.45)] sm:aspect-[5/4]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={servicesHeroVideo.src}
              aria-label={servicesHeroVideo.alt[locale]}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>

          <div className="relative z-10 mt-4 grid grid-cols-1 divide-y divide-[#E4E7EC] rounded-xl border border-[#E4E7EC] bg-white p-4 shadow-[0_16px_32px_-20px_rgba(16,24,40,0.35)] sm:absolute sm:right-5 sm:bottom-5 sm:left-5 sm:mt-0 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:p-0 min-[960px]:-bottom-5">
            {t.servicesPage.capabilities.map((item) => (
              <div
                key={item.label}
                className="px-4 py-3 text-center sm:py-4"
              >
                <p className="text-[11px] font-medium tracking-wide text-[#98A2B3] uppercase">
                  {item.label}
                </p>
                <p className="mt-1 text-[15px] font-semibold text-[#101828]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden h-6 min-[960px]:block" aria-hidden="true" />
    </section>
  );
}

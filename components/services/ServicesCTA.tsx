"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function ServicesCTA() {
  const { t } = useLanguage();

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-10 md:px-8 md:py-12 lg:px-10 lg:py-14">
        <div className="overflow-hidden rounded-[28px] border border-[#E4E7EC] bg-[#F2F4F7] md:rounded-[32px]">
          <div className="grid min-[900px]:grid-cols-[1.4fr_0.55fr]">
            <div className="px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
              <h2 className="max-w-[18ch] font-serif text-[clamp(1.7rem,3vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.015em] text-[#101828]">
                {t.servicesPage.ctaHeading}
              </h2>
              <p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-[#667085]">
                {t.servicesPage.ctaDescription}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-[#050505] px-5 text-[13.5px] font-medium text-white transition-colors hover:bg-[#1a1a1a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
                >
                  {t.servicesPage.ctaPrimary}
                </Link>
                <Link
                  href="/#solutions"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-[#D0D5DD] bg-white px-5 text-[13.5px] font-medium text-[#101828] transition-colors hover:border-[#98A2B3] hover:bg-[#F8FAFC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
                >
                  {t.servicesPage.ctaSecondary}
                </Link>
              </div>
            </div>
            <div
              className="min-h-[120px] bg-[#D6E0FF] min-[900px]:min-h-full"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import {
  FolderSync,
  Headset,
  PenTool,
  Search,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const stepIcons = [Search, PenTool, FolderSync, Headset] as const;

export function OnboardingSteps() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[#EEF1F6]">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(16,24,40,0.06)_1px,transparent_1px)] bg-[length:72px_100%] opacity-[0.35]"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-[1180px] px-5 py-14 md:px-8 md:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[clamp(1.7rem,3vw,2.4rem)] font-medium tracking-[-0.015em] text-[#101828]">
            {t.contactPage.nextHeading}
          </h2>
          <p className="mt-3 text-[14.5px] leading-relaxed text-[#667085]">
            {t.contactPage.nextDescription}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5">
          {t.contactPage.steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <article
                key={step.title}
                className="relative overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white p-5 shadow-[0_10px_24px_-20px_rgba(16,24,40,0.35)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_16px_28px_-18px_rgba(16,24,40,0.4)] sm:p-6"
              >
                <Icon
                  className="pointer-events-none absolute -right-2 -bottom-2 size-24 text-[#0B1220]/[0.04]"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
                <span className="relative inline-flex size-9 items-center justify-center rounded-lg bg-[#E9EDFF] text-[13px] font-semibold text-[#3154D5]">
                  {index + 1}
                </span>
                <h3 className="relative mt-4 text-[15px] font-semibold text-[#101828]">
                  {step.title}
                </h3>
                <p className="relative mt-2 text-[13px] leading-relaxed text-[#667085]">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

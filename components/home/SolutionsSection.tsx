"use client";

import {
  BarChart3,
  Briefcase,
  Clock3,
  FileStack,
  ScanSearch,
  UserPlus,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const solutionIcons = [
  ScanSearch,
  Briefcase,
  FileStack,
  UserPlus,
  Clock3,
  BarChart3,
] as const;

export function SolutionsSection() {
  const { t } = useLanguage();

  return (
    <section id="solutions" className="scroll-mt-20 bg-[#F7F8FA]">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-14 md:px-8 md:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-[clamp(1.7rem,3vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.015em] text-[#101828]">
            {t.solutions.heading}
          </h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-[#667085]">
            {t.solutions.supporting}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3">
          {t.solutions.items.map((item, index) => {
            const Icon = solutionIcons[index];
            return (
              <article
                key={item.title}
                className="flex h-full flex-col rounded-2xl border border-[#E4E7EC] bg-white p-5 shadow-[0_8px_20px_-16px_rgba(16,24,40,0.35)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_16px_28px_-18px_rgba(16,24,40,0.4)] sm:p-6"
              >
                <span className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-[#E9EDFF] text-[#3154D5]">
                  <Icon className="size-[18px]" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="font-serif text-[17px] font-medium leading-snug text-[#101828]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#667085]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

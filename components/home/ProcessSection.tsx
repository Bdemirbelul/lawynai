"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

const stepStyles = [
  "bg-[#050505] text-white",
  "bg-[#3154D5] text-white",
  "bg-[#E4E7EC] text-[#344054]",
  "bg-[#F2F4F7] text-[#475467]",
] as const;

export function ProcessSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-14 md:px-8 md:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-[clamp(1.7rem,3vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.015em] text-[#101828]">
            {t.process.heading}
          </h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-[#667085]">
            {t.process.supporting}
          </p>
        </div>

        <ol className="relative mt-12 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-2 md:gap-x-8 md:gap-y-10 min-[1000px]:grid-cols-4 min-[1000px]:gap-6">
          <div
            className="pointer-events-none absolute top-5 bottom-5 left-5 w-px bg-[#E4E7EC] min-[1000px]:top-[1.35rem] min-[1000px]:right-[12.5%] min-[1000px]:bottom-auto min-[1000px]:left-[12.5%] min-[1000px]:h-px min-[1000px]:w-auto md:hidden min-[1000px]:block"
            aria-hidden="true"
          />

          {t.process.steps.map((step, index) => (
            <li
              key={step.title}
              className="relative z-10 flex gap-4 pl-2 md:flex-col md:items-center md:pl-0 md:text-center"
            >
              <span
                className={`inline-flex size-10 shrink-0 items-center justify-center rounded-xl text-sm font-semibold shadow-sm ${stepStyles[index]}`}
              >
                {index + 1}
              </span>
              <div className="min-w-0 pt-0.5 md:pt-4">
                <h3 className="text-[15px] font-semibold text-[#101828]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#667085]">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

"use client";

import { ArrowDown, FileX2, Hourglass, Users } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const challengeIcons = [FileX2, Hourglass, Users] as const;

function WorkflowVisual() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-[#E4E7EC] bg-[#EEF1F6] p-6 shadow-[0_20px_40px_-24px_rgba(16,24,40,0.35)] sm:p-8"
      aria-hidden="true"
    >
      <div className="relative mx-auto flex min-h-[320px] max-w-[360px] flex-col items-center justify-between py-2">
        <div className="relative z-10 flex w-full justify-center gap-3">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`h-16 w-[72px] rounded-lg border border-[#D0D5DD] bg-[#F8FAFC] shadow-sm motion-safe:animate-[float-soft_5s_ease-in-out_infinite] ${
                index === 0
                  ? "-rotate-6 motion-safe:[animation-delay:0s]"
                  : index === 1
                    ? "rotate-3 motion-safe:[animation-delay:0.4s]"
                    : "rotate-6 motion-safe:[animation-delay:0.8s]"
              }`}
            >
              <div className="space-y-1.5 p-2.5">
                <div className="h-1.5 w-10 rounded-sm bg-[#D0D5DD]" />
                <div className="h-1.5 w-8 rounded-sm bg-[#E4E7EC]" />
                <div className="h-1.5 w-6 rounded-sm bg-[#E4E7EC]" />
              </div>
            </div>
          ))}
        </div>

        <div className="my-5 flex size-11 items-center justify-center rounded-full bg-[#3154D5] text-white shadow-[0_10px_20px_-10px_rgba(49,84,213,0.8)]">
          <ArrowDown className="size-5" strokeWidth={2.5} />
        </div>

        <div className="relative z-10 grid w-full grid-cols-3 gap-2.5">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`rounded-lg border border-[#E4E7EC] bg-white p-2.5 shadow-[0_8px_16px_-12px_rgba(16,24,40,0.35)] motion-safe:animate-[float-soft_5.5s_ease-in-out_infinite] ${
                index === 0
                  ? "motion-safe:[animation-delay:0.2s]"
                  : index === 1
                    ? "motion-safe:[animation-delay:0.45s]"
                    : "motion-safe:[animation-delay:0.7s]"
              }`}
            >
              <div className="mb-2 h-5 w-5 rounded-md bg-[#E9EDFF]" />
              <div className="space-y-1.5">
                <div className="h-1.5 w-full rounded-sm bg-[#E4E7EC]" />
                <div className="h-1.5 w-4/5 rounded-sm bg-[#F2F4F7]" />
                <div className="h-1.5 w-3/5 rounded-sm bg-[#F2F4F7]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProblemsSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="scroll-mt-20 bg-[#F7F8FA]">
      <div className="mx-auto grid w-full max-w-[1180px] items-center gap-10 px-5 py-14 md:px-8 md:py-16 min-[900px]:grid-cols-2 min-[900px]:gap-12 lg:px-10 lg:py-20">
        <div className="min-w-0">
          <h2 className="max-w-[18ch] font-serif text-[clamp(1.7rem,3vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.015em] text-[#101828]">
            {t.problems.heading}
          </h2>
          <p className="mt-4 max-w-[34rem] text-[14.5px] leading-relaxed text-[#667085]">
            {t.problems.introduction}
          </p>

          <ul className="mt-8 space-y-5">
            {t.problems.challenges.map((challenge, index) => {
              const Icon = challengeIcons[index];
              return (
                <li key={challenge.title} className="flex gap-3.5">
                  <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#FCE8E8] text-[#B42318]">
                    <Icon className="size-[18px]" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-semibold text-[#101828]">
                      {challenge.title}
                    </h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-[#667085]">
                      {challenge.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <WorkflowVisual />
      </div>
    </section>
  );
}

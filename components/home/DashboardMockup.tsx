"use client";

import { Search } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

function SkeletonBar({ className = "" }: { className?: string }) {
  return <div className={`rounded-sm bg-[#E8ECF2] ${className}`} />;
}

function SummaryCard({
  accent,
  icon,
}: {
  accent: string;
  icon: string;
}) {
  return (
    <div className={`rounded-lg border border-white/70 p-2.5 shadow-[0_1px_2px_rgba(16,24,40,0.04)] ${accent}`}>
      <div className="mb-2.5 flex items-center justify-between">
        <span
          className={`size-5 rounded-md ${icon}`}
          aria-hidden="true"
        />
        <SkeletonBar className="h-1.5 w-8 bg-white/70" />
      </div>
      <SkeletonBar className="mb-1.5 h-2 w-3/4 bg-white/80" />
      <SkeletonBar className="h-1.5 w-1/2 bg-white/65" />
    </div>
  );
}

export function DashboardMockup() {
  const { t } = useLanguage();

  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
      <div className="overflow-hidden rounded-xl border border-[#E4E7EC] bg-[#F8FAFC] shadow-[0_18px_40px_-20px_rgba(16,24,40,0.28),0_8px_16px_-12px_rgba(16,24,40,0.12)]">
        <div className="flex items-center gap-3 border-b border-[#E4E7EC] bg-white px-3.5 py-2.5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-[#FF5F57]" />
            <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="size-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="mx-auto flex h-7 w-full max-w-[220px] items-center gap-2 rounded-md border border-[#E4E7EC] bg-[#F2F4F7] px-2.5 text-[#98A2B3]">
            <Search className="size-3.5 shrink-0" aria-hidden="true" />
            <span className="truncate text-[11px]">{t.mockup.searchPlaceholder}</span>
          </div>
          <div className="hidden w-10 sm:block" aria-hidden="true" />
        </div>

        <div className="grid min-h-[280px] grid-cols-[56px_1fr] sm:min-h-[320px] sm:grid-cols-[68px_1fr] md:min-h-[340px]">
          <aside
            className="flex flex-col gap-2.5 border-r border-[#E4E7EC] bg-[#FCFCFD] px-2.5 py-3"
            aria-hidden="true"
          >
            <SkeletonBar className="mx-auto mb-1 size-7 rounded-lg bg-[#E4E7EC]" />
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonBar
                key={index}
                className={`mx-auto h-2.5 w-8 ${index === 1 ? "bg-[#C7D2FE]" : ""}`}
              />
            ))}
            <div className="mt-auto space-y-2 pt-4">
              <SkeletonBar className="mx-auto h-2.5 w-8" />
              <SkeletonBar className="mx-auto size-6 rounded-full" />
            </div>
          </aside>

          <div className="space-y-3 bg-[#F5F7FB] p-3 sm:p-4">
            <div className="grid grid-cols-3 gap-2 sm:gap-2.5" aria-hidden="true">
              <SummaryCard
                accent="bg-[#E9EDFF]"
                icon="bg-[#3154D5]/70"
              />
              <SummaryCard
                accent="bg-[#EEF2F6]"
                icon="bg-[#98A2B3]/70"
              />
              <SummaryCard
                accent="bg-[#FCE8E8]"
                icon="bg-[#E07A7A]/75"
              />
            </div>

            <div
              className="rounded-lg border border-[#E4E7EC] bg-white p-3 shadow-[0_1px_2px_rgba(16,24,40,0.04)] sm:p-3.5"
              aria-hidden="true"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <SkeletonBar className="h-2.5 w-28" />
                <SkeletonBar className="h-6 w-16 rounded-md bg-[#EEF2FF]" />
              </div>
              <div className="space-y-2.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <SkeletonBar className="size-6 shrink-0 rounded-md" />
                    <div className="min-w-0 flex-1 space-y-1.5">
                      <SkeletonBar
                        className={`h-2 ${index % 2 === 0 ? "w-4/5" : "w-3/5"}`}
                      />
                      <SkeletonBar className="h-1.5 w-2/5" />
                    </div>
                    <SkeletonBar className="hidden h-2 w-10 sm:block" />
                  </div>
                ))}
              </div>
            </div>

            <div
              className="hidden grid-cols-2 gap-2.5 sm:grid"
              aria-hidden="true"
            >
              <div className="rounded-lg border border-[#E4E7EC] bg-white p-3">
                <SkeletonBar className="mb-2 h-2 w-20" />
                <SkeletonBar className="h-16 rounded-md bg-[#F2F4F7]" />
              </div>
              <div className="rounded-lg border border-[#E4E7EC] bg-white p-3">
                <SkeletonBar className="mb-2 h-2 w-16" />
                <div className="space-y-2">
                  <SkeletonBar className="h-2 w-full" />
                  <SkeletonBar className="h-2 w-5/6" />
                  <SkeletonBar className="h-2 w-2/3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

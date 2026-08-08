"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import type { InsightItem } from "@/data/insights";
import { formatInsightDate } from "@/lib/i18n/format";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

type ReportCardProps = {
  item: InsightItem;
};

export function ReportCard({ item }: ReportCardProps) {
  const { locale, t } = useLanguage();
  const title = item.title[locale];
  const excerpt = item.excerpt[locale];

  return (
    <article className="flex h-full flex-col rounded-2xl border border-[#E4E7EC] bg-[#F8FAFC] p-5 shadow-[0_8px_20px_-18px_rgba(16,24,40,0.35)] sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-md bg-[#E4E7EC] px-2 py-1 text-[10px] font-semibold tracking-[0.08em] text-[#475467] uppercase">
          {t.insightsPage.reportLabel}
        </span>
        <time dateTime={item.date} className="text-[12px] text-[#98A2B3]">
          {formatInsightDate(item.date, locale)}
        </time>
      </div>

      <h3 className="mt-5 font-serif text-[1.25rem] leading-snug font-medium text-[#101828]">
        <Link
          href={`/insights/${item.slug}`}
          className="transition-colors hover:text-[#3154D5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
        >
          {title}
        </Link>
      </h3>

      <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-[#667085]">
        {excerpt}
      </p>

      <button
        type="button"
        disabled={item.comingSoon}
        className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-[#D0D5DD] bg-white px-4 text-[13px] font-medium text-[#101828] transition-colors hover:border-[#98A2B3] hover:bg-[#F2F4F7] disabled:cursor-not-allowed disabled:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
      >
        <Download className="size-4" aria-hidden="true" />
        {item.comingSoon
          ? t.insightsPage.comingSoon
          : t.insightsPage.downloadReport}
      </button>
    </article>
  );
}

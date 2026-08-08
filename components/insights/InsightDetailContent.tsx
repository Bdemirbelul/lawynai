"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { InsightItem } from "@/data/insights";
import { formatInsightDate } from "@/lib/i18n/format";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

type InsightDetailContentProps = {
  item: InsightItem;
};

export function InsightDetailContent({ item }: InsightDetailContentProps) {
  const { locale, t } = useLanguage();
  const title = item.title[locale];
  const excerpt = item.excerpt[locale];
  const introduction = item.introduction?.[locale] ?? excerpt;
  const alt = item.imageAlt?.[locale] ?? title;

  const typeLabel =
    item.type === "podcast"
      ? t.insightsPage.podcastLabel
      : item.type === "report"
        ? t.insightsPage.reportLabel
        : t.insightsPage.categories[item.category];

  return (
    <article>
      <Link
        href="/insights"
        className="inline-flex items-center gap-2 text-[13px] font-medium text-[#475467] transition-colors hover:text-[#3154D5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        {t.insightsPage.detail.back}
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="text-[11px] font-semibold tracking-[0.08em] text-[#3154D5] uppercase">
          {typeLabel}
        </span>
        <time dateTime={item.date} className="text-[13px] text-[#667085]">
          {formatInsightDate(item.date, locale)}
        </time>
        {item.readTimeMinutes ? (
          <span className="text-[13px] text-[#98A2B3]">
            {item.readTimeMinutes} {t.insightsPage.minRead}
          </span>
        ) : null}
      </div>

      <h1 className="mt-4 font-serif text-[clamp(1.85rem,3.5vw,2.85rem)] font-medium leading-[1.15] tracking-[-0.015em] text-[#101828]">
        {title}
      </h1>

      <p className="mt-4 text-[15px] leading-relaxed text-[#475467]">{excerpt}</p>

      {item.image ? (
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-[#E4E7EC] bg-[#EEF1F6]">
          <Image
            src={item.image}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 900px) 100vw, 820px"
            priority
          />
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-[#D0D5DD] bg-white px-5 py-10 text-center text-[13px] text-[#667085]">
          {item.comingSoon ? t.insightsPage.comingSoon : null}
        </div>
      )}

      <div className="mt-8 rounded-2xl border border-[#E4E7EC] bg-white p-6 sm:p-8">
        <p className="text-[12px] font-semibold tracking-[0.06em] text-[#3154D5] uppercase">
          {t.insightsPage.detail.underPreparation}
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-[#344054]">
          {introduction}
        </p>
        <p className="mt-6 border-t border-[#EEF1F6] pt-5 text-[13px] leading-relaxed text-[#667085]">
          {t.insightsPage.detail.disclaimer}
        </p>
      </div>
    </article>
  );
}

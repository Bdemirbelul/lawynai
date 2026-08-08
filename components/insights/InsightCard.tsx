"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { InsightItem } from "@/data/insights";
import { formatInsightDate } from "@/lib/i18n/format";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

type InsightCardProps = {
  item: InsightItem;
};

export function InsightCard({ item }: InsightCardProps) {
  const { locale, t } = useLanguage();
  const title = item.title[locale];
  const excerpt = item.excerpt[locale];
  const alt = item.imageAlt?.[locale] ?? title;
  const isImageLed = item.variant === "image-led";

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white shadow-[0_8px_20px_-18px_rgba(16,24,40,0.35)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_16px_28px_-18px_rgba(16,24,40,0.4)]">
      {item.image ? (
        <Link
          href={`/insights/${item.slug}`}
          className={`relative block overflow-hidden bg-[#EEF1F6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5] ${
            isImageLed ? "aspect-[4/5] sm:aspect-[3/4]" : "aspect-[16/10]"
          }`}
        >
          <Image
            src={item.image}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
          />
        </Link>
      ) : null}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-[11px] font-semibold tracking-[0.08em] text-[#3154D5] uppercase">
            {t.insightsPage.categories[item.category]}
          </span>
          <time dateTime={item.date} className="text-[12px] text-[#98A2B3]">
            {formatInsightDate(item.date, locale)}
          </time>
        </div>

        <h3 className="mt-3 font-serif text-[1.15rem] leading-snug font-medium text-[#101828]">
          <Link
            href={`/insights/${item.slug}`}
            className="transition-colors hover:text-[#3154D5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
          >
            {title}
          </Link>
        </h3>

        <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-[#667085]">
          {excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#EEF1F6] pt-4">
          <Link
            href={`/insights/${item.slug}`}
            className="inline-flex items-center gap-1 text-[13px] font-medium text-[#101828] transition-colors hover:text-[#3154D5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
          >
            {t.insightsPage.readArticle}
            <ChevronRight className="size-3.5" aria-hidden="true" />
          </Link>
          {item.readTimeMinutes ? (
            <span className="text-[12px] text-[#98A2B3]">
              {item.readTimeMinutes} {t.insightsPage.minRead}
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}

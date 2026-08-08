"use client";

import { Mic, Play } from "lucide-react";
import type { InsightItem } from "@/data/insights";
import { formatInsightDate } from "@/lib/i18n/format";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

type PodcastCardProps = {
  item: InsightItem;
};

export function PodcastCard({ item }: PodcastCardProps) {
  const { locale, t } = useLanguage();
  const title = item.title[locale];
  const excerpt = item.excerpt[locale];

  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-[#0B1220] p-5 text-white shadow-[0_16px_32px_-20px_rgba(11,18,32,0.65)] sm:p-6">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 opacity-30"
        aria-hidden="true"
      >
        <svg viewBox="0 0 320 64" className="h-full w-full" preserveAspectRatio="none">
          {Array.from({ length: 42 }).map((_, index) => {
            const height = 10 + ((index * 17) % 40);
            return (
              <rect
                key={index}
                x={index * 7.5}
                y={32 - height / 2}
                width="3"
                height={height}
                rx="1.5"
                fill="currentColor"
                className="text-[#3154D5]"
              />
            );
          })}
        </svg>
      </div>

      <div className="relative flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2">
          <span className="inline-flex size-8 items-center justify-center rounded-full bg-white/10">
            <Mic className="size-4" aria-hidden="true" />
          </span>
          <span className="rounded-md bg-white/10 px-2 py-1 text-[10px] font-semibold tracking-[0.08em] uppercase">
            {t.insightsPage.podcastLabel}
          </span>
        </div>
        <time dateTime={item.date} className="text-[12px] text-white/55">
          {formatInsightDate(item.date, locale)}
        </time>
      </div>

      <h3 className="relative mt-6 font-serif text-[1.25rem] leading-snug font-medium">
        {title}
      </h3>
      <p className="relative mt-3 flex-1 text-[13.5px] leading-relaxed text-white/65">
        {excerpt}
      </p>

      <button
        type="button"
        disabled={item.comingSoon}
        className="relative mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#3154D5] px-4 text-[13.5px] font-medium text-white transition-colors hover:bg-[#2746b8] disabled:cursor-not-allowed disabled:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <span className="inline-flex size-6 items-center justify-center rounded-full bg-white/15">
          <Play className="size-3.5 fill-current" aria-hidden="true" />
        </span>
        {item.comingSoon ? t.insightsPage.comingSoon : t.insightsPage.listenNow}
      </button>
    </article>
  );
}

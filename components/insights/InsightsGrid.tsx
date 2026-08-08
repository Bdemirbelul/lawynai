"use client";

import { useMemo, useState } from "react";
import { getListingInsights } from "@/data/insights";
import { InsightCard } from "@/components/insights/InsightCard";
import {
  InsightFilters,
  matchesInsightCategory,
  type FilterId,
} from "@/components/insights/InsightFilters";
import { PodcastCard } from "@/components/insights/PodcastCard";
import { ReportCard } from "@/components/insights/ReportCard";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const INITIAL_COUNT = 6;

export function InsightsGrid() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<FilterId>("all");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const listing = useMemo(() => getListingInsights(), []);

  const filtered = useMemo(
    () =>
      listing.filter((item) => matchesInsightCategory(item.category, filter)),
    [listing, filter],
  );

  const visibleItems = filtered.slice(0, visibleCount);
  const canLoadMore = visibleCount < filtered.length;

  function handleFilterChange(next: FilterId) {
    setFilter(next);
    setVisibleCount(INITIAL_COUNT);
  }

  return (
    <section className="bg-[#F7F8FA]">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-12 md:px-8 md:py-14 lg:px-10 lg:py-16">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.25rem)] font-medium tracking-[-0.015em] text-[#101828]">
            {t.insightsPage.latestHeading}
          </h2>
          <InsightFilters active={filter} onChange={handleFilterChange} />
        </div>

        {visibleItems.length === 0 ? (
          <p className="mt-10 text-center text-[14px] text-[#667085]">
            {t.insightsPage.emptyFilter}
          </p>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6">
            {visibleItems.map((item) => {
              if (item.type === "podcast") {
                return <PodcastCard key={item.slug} item={item} />;
              }
              if (item.type === "report") {
                return <ReportCard key={item.slug} item={item} />;
              }
              return <InsightCard key={item.slug} item={item} />;
            })}
          </div>
        )}

        {canLoadMore ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((count) =>
                  Math.min(count + INITIAL_COUNT, filtered.length),
                )
              }
              className="inline-flex h-11 items-center justify-center rounded-md border border-[#D0D5DD] bg-white px-6 text-[13.5px] font-medium text-[#101828] transition-colors hover:border-[#98A2B3] hover:bg-[#F8FAFC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
            >
              {t.insightsPage.loadMore}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}

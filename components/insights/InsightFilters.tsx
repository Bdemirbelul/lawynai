"use client";

import { insightCategories, type InsightCategoryId } from "@/data/insights";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export type FilterId = "all" | (typeof insightCategories)[number];

type InsightFiltersProps = {
  active: FilterId;
  onChange: (next: FilterId) => void;
};

const filterOrder: FilterId[] = ["all", ...insightCategories];

export function InsightFilters({ active, onChange }: InsightFiltersProps) {
  const { t } = useLanguage();

  return (
    <div
      className="flex max-w-full gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      role="group"
      aria-label={t.insightsPage.latestHeading}
    >
      {filterOrder.map((id) => {
        const selected = active === id;
        const label =
          id === "all"
            ? t.insightsPage.filters.all
            : t.insightsPage.filters[id as Exclude<FilterId, "all">];

        return (
          <button
            key={id}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(id)}
            className={`shrink-0 rounded-full px-3.5 py-2 text-[12.5px] font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5] ${
              selected
                ? "bg-[#3154D5] text-white"
                : "bg-[#EEF1F6] text-[#344054] hover:bg-[#E4E7EC]"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

export function matchesInsightCategory(
  category: InsightCategoryId,
  filter: FilterId,
): boolean {
  if (filter === "all") return true;
  if (filter === "legal-tech") {
    return category === "legal-tech" || category === "legal-operations";
  }
  return category === filter;
}

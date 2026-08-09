"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SolutionMenuItem } from "@/data/solutions-menu";
import { getSolutionHref } from "@/data/solutions-menu";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

type SolutionMenuItemLinkProps = {
  item: SolutionMenuItem;
  onNavigate?: () => void;
};

export function SolutionMenuItemLink({
  item,
  onNavigate,
}: SolutionMenuItemLinkProps) {
  const { t } = useLanguage();
  const Icon = item.icon;
  const copy = t.solutionsMenu.items[item.translationKey];

  return (
    <Link
      href={getSolutionHref(item.slug)}
      onClick={onNavigate}
      className="group flex items-start gap-3 rounded-xl px-2.5 py-2.5 transition-colors hover:bg-[#F0F4FF] focus-visible:bg-[#F0F4FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
    >
      <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#E9EDFF] text-[#3154D5] transition-colors group-hover:bg-[#DCE4FF]">
        <Icon className="size-4" strokeWidth={1.85} aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1.5">
          <span className="text-[13.5px] font-medium leading-snug text-[#101828] transition-colors group-hover:text-[#3154D5]">
            {copy.title}
          </span>
          <ArrowRight
            className="size-3.5 shrink-0 text-[#3154D5] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
            strokeWidth={2}
            aria-hidden="true"
          />
        </span>
        <span className="mt-0.5 block text-[12.5px] leading-snug text-[#667085]">
          {copy.description}
        </span>
      </span>
    </Link>
  );
}

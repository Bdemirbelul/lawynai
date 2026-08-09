"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SolutionMenuItemLink } from "@/components/navigation/solution-menu-item";
import {
  SOLUTIONS_DEMO_HREF,
  SOLUTIONS_EXPLORE_HREF,
  solutionsMenuCategories,
} from "@/data/solutions-menu";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

type MobileSolutionsMenuProps = {
  label: string;
  active?: boolean;
  onNavigate?: () => void;
};

export function MobileSolutionsMenu({
  label,
  active,
  onNavigate,
}: MobileSolutionsMenuProps) {
  const { t } = useLanguage();
  const menuCopy = t.solutionsMenu;
  const [isOpen, setIsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(
    solutionsMenuCategories[0]?.id ?? null,
  );
  const reducedMotion = useReducedMotion();
  const panelId = useId();

  function handleNavigate() {
    setIsOpen(false);
    onNavigate?.();
  }

  const transition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <div className="min-w-0">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
        className={`flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5] ${
          active || isOpen
            ? "bg-[#EEF2FF] text-[#3154D5]"
            : "text-[#344054] hover:bg-[#F8FAFC]"
        }`}
      >
        <span>{label}</span>
        <ChevronDown
          className={`size-4 opacity-70 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={panelId}
            key="mobile-solutions"
            initial={reducedMotion ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={transition}
            className="overflow-hidden"
          >
            <div
              id="solutions-mega-menu-mobile"
              className="mt-1 max-h-[min(62vh,520px)] overflow-y-auto overscroll-contain rounded-xl border border-[#E4E7EC] bg-white"
            >
              <div className="border-b border-[#EEF0F4] px-3.5 py-3.5">
                <p className="text-[10.5px] font-semibold tracking-[0.08em] text-[#3154D5]">
                  {menuCopy.eyebrow}
                </p>
                <p className="mt-1 font-serif text-[16px] font-medium leading-snug text-[#101828]">
                  {menuCopy.title}
                </p>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#667085]">
                  {menuCopy.description}
                </p>
                <Link
                  href={SOLUTIONS_EXPLORE_HREF}
                  onClick={handleNavigate}
                  className="mt-2.5 inline-flex text-[13px] font-medium text-[#3154D5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
                >
                  {menuCopy.exploreAll}
                </Link>
              </div>

              <div className="px-1.5 py-1.5">
                {solutionsMenuCategories.map((category) => {
                  const categoryOpen = openCategory === category.id;
                  const categoryPanelId = `${panelId}-${category.id}`;

                  return (
                    <div key={category.id} className="border-b border-[#F2F4F7] last:border-b-0">
                      <button
                        type="button"
                        aria-expanded={categoryOpen}
                        aria-controls={categoryPanelId}
                        onClick={() =>
                          setOpenCategory((current) =>
                            current === category.id ? null : category.id,
                          )
                        }
                        className="flex w-full items-center justify-between rounded-md px-2.5 py-2.5 text-left text-[12.5px] font-semibold tracking-[0.04em] text-[#344054] uppercase transition-colors hover:bg-[#F8FAFC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
                      >
                        {menuCopy.categories[category.categoryKey]}
                        <ChevronDown
                          className={`size-3.5 opacity-70 transition-transform duration-200 ${
                            categoryOpen ? "rotate-180" : "rotate-0"
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {categoryOpen ? (
                          <motion.ul
                            id={categoryPanelId}
                            key={category.id}
                            initial={
                              reducedMotion
                                ? { height: "auto", opacity: 1 }
                                : { height: 0, opacity: 0 }
                            }
                            animate={{ height: "auto", opacity: 1 }}
                            exit={
                              reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }
                            }
                            transition={transition}
                            className="overflow-hidden pb-1"
                          >
                            {category.items.map((item) => (
                              <li key={item.slug}>
                                <SolutionMenuItemLink
                                  item={item}
                                  onNavigate={handleNavigate}
                                />
                              </li>
                            ))}
                          </motion.ul>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-[#EEF0F4] bg-[#F8FAFC] px-3.5 py-3.5">
                <p className="text-[13px] font-medium text-[#101828]">
                  {menuCopy.cta.title}
                </p>
                <p className="mt-0.5 text-[12px] leading-relaxed text-[#667085]">
                  {menuCopy.cta.description}
                </p>
                <Link
                  href={SOLUTIONS_DEMO_HREF}
                  onClick={handleNavigate}
                  className="mt-3 inline-flex h-10 w-full items-center justify-center rounded-md bg-[#050505] px-4 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
                >
                  {menuCopy.cta.button}
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

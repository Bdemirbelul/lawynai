"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SolutionMenuItemLink } from "@/components/navigation/solution-menu-item";
import {
  SOLUTIONS_DEMO_HREF,
  SOLUTIONS_EXPLORE_HREF,
  solutionsMenuCategories,
} from "@/data/solutions-menu";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

type SolutionsMegaMenuProps = {
  label: string;
  active?: boolean;
};

export function SolutionsMegaMenu({ label, active }: SolutionsMegaMenuProps) {
  const { t } = useLanguage();
  const menuCopy = t.solutionsMenu;
  const [isOpen, setIsOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const openMenu = useCallback(() => {
    clearCloseTimer();
    setIsOpen(true);
  }, [clearCloseTimer]);

  const closeMenu = useCallback(() => {
    clearCloseTimer();
    setIsOpen(false);
  }, [clearCloseTimer]);

  const scheduleClose = useCallback(() => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 180);
  }, [clearCloseTimer]);

  useEffect(() => {
    return () => clearCloseTimer();
  }, [clearCloseTimer]);

  useEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (containerRef.current && target && !containerRef.current.contains(target)) {
        closeMenu();
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        const trigger = containerRef.current?.querySelector<HTMLElement>(
          '[data-solutions-trigger="true"]',
        );
        trigger?.focus();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeMenu]);

  function handleTriggerKeyDown(event: ReactKeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Enter" || event.key === " " || event.key === "ArrowDown") {
      event.preventDefault();
      openMenu();
    }
    if (event.key === "Escape") {
      closeMenu();
    }
  }

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    const next = event.relatedTarget as Node | null;
    if (next && containerRef.current?.contains(next)) return;
    scheduleClose();
  }

  const enterTransition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const };
  const exitTransition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.16, ease: [0.4, 0, 1, 1] as const };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
      onFocus={openMenu}
      onBlur={handleBlur}
    >
      <button
        type="button"
        data-solutions-trigger="true"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="solutions-mega-menu"
        onKeyDown={handleTriggerKeyDown}
        onClick={() => setIsOpen((open) => !open)}
        className={`inline-flex items-center gap-0.5 text-[12.5px] font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5] min-[1100px]:text-[13px] ${
          active || isOpen
            ? "text-[#3154D5]"
            : "text-[#344054] hover:text-[#101828]"
        }`}
      >
        {label}
        <ChevronDown
          className={`size-3.5 opacity-70 transition-transform duration-200 motion-reduce:transition-none ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          aria-hidden="true"
          strokeWidth={2}
        />
      </button>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.div
              key="solutions-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={exitTransition}
              className="fixed inset-x-0 bottom-0 top-[60px] z-40 bg-[#101828]/[0.08]"
              aria-hidden="true"
              onMouseEnter={closeMenu}
            />

            {/* Hover bridge: keeps menu open while moving from trigger to panel */}
            <div
              className="fixed inset-x-0 top-[60px] z-50 h-3"
              aria-hidden="true"
              onMouseEnter={openMenu}
            />

            <motion.div
              key="solutions-panel"
              id="solutions-mega-menu"
              role="region"
              aria-label={label}
              initial={
                reducedMotion
                  ? false
                  : { opacity: 0, y: -8, scale: 0.98 }
              }
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: enterTransition,
              }}
              exit={
                reducedMotion
                  ? { opacity: 0, transition: exitTransition }
                  : { opacity: 0, y: -5, scale: 0.99, transition: exitTransition }
              }
              onMouseEnter={openMenu}
              className="fixed left-1/2 top-[63px] z-50 w-[min(calc(100vw-2rem),1020px)] -translate-x-1/2 overflow-hidden rounded-[18px] border border-[#E4E7EC] bg-white shadow-[0_24px_48px_-24px_rgba(16,24,40,0.35),0_8px_16px_-12px_rgba(16,24,40,0.12)]"
            >
              <div className="border-b border-[#EEF0F4] px-6 py-5 lg:px-7 lg:py-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div className="max-w-xl">
                    <p className="text-[11px] font-semibold tracking-[0.08em] text-[#3154D5]">
                      {menuCopy.eyebrow}
                    </p>
                    <h2 className="mt-1.5 font-serif text-[20px] font-medium leading-snug tracking-[-0.015em] text-[#101828] lg:text-[22px]">
                      {menuCopy.title}
                    </h2>
                    <p className="mt-2 text-[13px] leading-relaxed text-[#667085]">
                      {menuCopy.description}
                    </p>
                  </div>
                  <Link
                    href={SOLUTIONS_EXPLORE_HREF}
                    onClick={closeMenu}
                    className="shrink-0 text-[13px] font-medium text-[#3154D5] transition-colors hover:text-[#2544B8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
                  >
                    {menuCopy.exploreAll}
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 px-4 py-4 lg:px-5">
                {solutionsMenuCategories.map((category) => (
                  <div key={category.id} className="min-w-0 px-1">
                    <p className="px-2.5 pb-1.5 pt-1 text-[11px] font-semibold tracking-[0.06em] text-[#667085] uppercase">
                      {menuCopy.categories[category.categoryKey]}
                    </p>
                    <ul className="flex flex-col">
                      {category.items.map((item) => (
                        <li key={item.slug}>
                          <SolutionMenuItemLink
                            item={item}
                            onNavigate={closeMenu}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 border-t border-[#EEF0F4] bg-[#F8FAFC] px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-7">
                <div className="max-w-md">
                  <p className="text-[13.5px] font-medium text-[#101828]">
                    {menuCopy.cta.title}
                  </p>
                  <p className="mt-0.5 text-[12.5px] leading-relaxed text-[#667085]">
                    {menuCopy.cta.description}
                  </p>
                </div>
                <Link
                  href={SOLUTIONS_DEMO_HREF}
                  onClick={closeMenu}
                  className="inline-flex h-9 shrink-0 items-center justify-center rounded-md bg-[#050505] px-4 text-[12.5px] font-medium text-white shadow-[0_1px_2px_rgba(16,24,40,0.16)] transition-[background-color,transform] hover:bg-[#1a1a1a] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
                >
                  {menuCopy.cta.button}
                </Link>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

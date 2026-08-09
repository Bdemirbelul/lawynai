"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Menu, User, X } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { SolutionsMegaMenu } from "@/components/navigation/solutions-mega-menu";
import { MobileSolutionsMenu } from "@/components/navigation/mobile-solutions-menu";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

type NavKey = "home" | "solutions" | "services" | "about" | "insights" | "contact";

type NavItem = {
  key: NavKey;
  href: string;
};

const LOGIN_URL =
  "https://lawynai-dashboard-git-main-demirkan.vercel.app/login";

const navItems: NavItem[] = [
  { key: "home", href: "/" },
  { key: "solutions", href: "/#solutions" },
  { key: "services", href: "/services" },
  { key: "about", href: "/#about" },
  { key: "insights", href: "/insights" },
  { key: "contact", href: "/contact" },
];

const userLinkClassName =
  "hidden size-8 items-center justify-center rounded-full bg-[#101828] text-white transition-colors hover:bg-[#1D2939] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5] sm:inline-flex";

export function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  const isInsights = pathname.startsWith("/insights");
  const isContact = pathname.startsWith("/contact");
  const isServices = pathname.startsWith("/services");
  const isHome = pathname === "/";

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function isActive(key: NavKey): boolean {
    if (key === "insights") return isInsights;
    if (key === "contact") return isContact;
    if (key === "services") return isServices;
    if (key === "home") return isHome;
    return false;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#E4E7EC] bg-white">
      <div className="mx-auto flex h-[60px] w-full max-w-[1180px] items-center justify-between gap-4 px-5 md:px-8 lg:px-10">
        <Logo />

        <nav
          className="hidden items-center gap-3 min-[900px]:flex min-[1100px]:gap-5 xl:gap-6"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const label = t.nav[item.key];
            const active = isActive(item.key);

            if (item.key === "solutions") {
              return (
                <SolutionsMegaMenu
                  key={item.key}
                  label={label}
                  active={active}
                />
              );
            }

            return (
              <Link
                key={item.key}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`inline-flex items-center gap-0.5 text-[12.5px] font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5] min-[1100px]:text-[13px] ${
                  active
                    ? "text-[#3154D5]"
                    : "text-[#344054] hover:text-[#101828]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>

          <Link
            href="/contact"
            className="hidden h-9 items-center justify-center rounded-md bg-[#050505] px-3.5 text-[12.5px] font-medium text-white shadow-[0_1px_2px_rgba(16,24,40,0.16)] transition-[background-color,transform] hover:bg-[#1a1a1a] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5] sm:inline-flex"
          >
            {t.nav.requestDemo}
          </Link>

          <a
            href={LOGIN_URL}
            className={userLinkClassName}
            aria-label="Sign in to LAWYN AI"
          >
            <User className="size-3.5" strokeWidth={2.25} aria-hidden="true" />
          </a>

          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-md border border-[#E4E7EC] text-[#101828] transition-colors hover:bg-[#F8FAFC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5] min-[900px]:hidden"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id={menuId}
          className="border-t border-[#E4E7EC] bg-white min-[900px]:hidden"
        >
          <div className="mx-auto flex max-h-[calc(100dvh-60px)] max-w-[1180px] flex-col gap-1 overflow-y-auto overscroll-contain px-5 py-4 md:px-8">
            <div className="mb-3 sm:hidden">
              <LanguageSwitcher />
            </div>

            {navItems.map((item) => {
              const label = t.nav[item.key];
              const active = isActive(item.key);

              if (item.key === "solutions") {
                return (
                  <MobileSolutionsMenu
                    key={item.key}
                    label={label}
                    active={active}
                    onNavigate={() => setMenuOpen(false)}
                  />
                );
              }

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`inline-flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5] ${
                    active
                      ? "bg-[#EEF2FF] text-[#3154D5]"
                      : "text-[#344054] hover:bg-[#F8FAFC]"
                  }`}
                >
                  <span>{label}</span>
                </Link>
              );
            })}

            <div className="mt-3 flex flex-col gap-2 border-t border-[#E4E7EC] pt-3 sm:hidden">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-11 items-center justify-center rounded-md bg-[#050505] px-4 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
              >
                {t.nav.requestDemo}
              </Link>
              <a
                href={LOGIN_URL}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-[#E4E7EC] text-sm font-medium text-[#101828] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
                aria-label="Sign in to LAWYN AI"
                onClick={() => setMenuOpen(false)}
              >
                <User className="size-4" aria-hidden="true" />
                {t.nav.userAccount}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

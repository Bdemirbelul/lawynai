"use client";

import Link from "next/link";
import { Globe, Mail, MapPin, Phone, Share2 } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { getContactValue, siteConfig } from "@/config/site";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Footer() {
  const { locale, t } = useLanguage();
  const placeholders =
    locale === "tr"
      ? {
          address: "[Ofis adresi eklenecek]",
          phone: "[Telefon numarası eklenecek]",
          email: "[E-posta adresi eklenecek]",
        }
      : {
          address: "[Office address to be added]",
          phone: "[Phone number to be added]",
          email: "[Email address to be added]",
        };

  return (
    <footer className="bg-[#0B1220] text-white">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-14 md:px-8 md:py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-white/60">
              {t.footer.description}
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {siteConfig.social.map((channel) => {
                const Icon =
                  channel.id === "linkedin"
                    ? Share2
                    : channel.id === "x"
                      ? Globe
                      : Mail;
                const label =
                  t.footer[
                    channel.id === "linkedin"
                      ? "socialLinkedin"
                      : channel.id === "x"
                        ? "socialX"
                        : "socialEmail"
                  ];
                const hasUrl = Boolean(channel.url.trim());

                if (!hasUrl) {
                  return (
                    <span
                      key={channel.id}
                      aria-label={label}
                      className="inline-flex size-9 items-center justify-center rounded-full border border-white/15 text-white/25"
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                  );
                }

                return (
                  <a
                    key={channel.id}
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex size-9 items-center justify-center rounded-full border border-white/15 text-white/55 transition-colors hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
            <div className="mt-5 lg:hidden">
              <LanguageSwitcher />
            </div>
          </div>

          <div>
            <h2 className="text-[13px] font-semibold tracking-wide text-white">
              {t.footer.solutionsTitle}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {t.footer.solutions.map((item) => (
                <li key={item}>
                  <Link
                    href="/#solutions"
                    className="text-[13px] text-white/55 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[13px] font-semibold tracking-wide text-white">
              {t.footer.resourcesTitle}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {t.footer.resources.map((item, index) => (
                <li key={item}>
                  <Link
                    href={index === 0 ? "/insights" : "/contact"}
                    className="text-[13px] text-white/55 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 hidden justify-end lg:flex">
              <LanguageSwitcher />
            </div>
            <h2 className="text-[13px] font-semibold tracking-wide text-white">
              {t.footer.contactTitle}
            </h2>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-2.5 text-[13px] text-white/55">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>{getContactValue("address", placeholders)}</span>
              </li>
              <li className="flex gap-2.5 text-[13px] text-white/55">
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>{getContactValue("phone", placeholders)}</span>
              </li>
              <li className="flex gap-2.5 text-[13px] text-white/55">
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>{getContactValue("email", placeholders)}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-white/45">{t.footer.copyright}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {[
              t.footer.privacy,
              t.footer.cookies,
              t.footer.kvkk,
              t.footer.aiNotice,
            ].map((label) => (
              <Link
                key={label}
                href="/contact"
                className="text-[12px] text-white/45 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

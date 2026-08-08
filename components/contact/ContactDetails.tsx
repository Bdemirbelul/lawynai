"use client";

import { Globe, Mail, MapPin, Phone, Share2 } from "lucide-react";
import { getContactValue, siteConfig } from "@/config/site";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function ContactDetails() {
  const { t } = useLanguage();
  const placeholders = t.contactPage.placeholders;

  const rows = [
    {
      key: "address" as const,
      label: t.contactPage.officeLabel,
      value: getContactValue("address", placeholders),
      Icon: MapPin,
    },
    {
      key: "phone" as const,
      label: t.contactPage.phoneLabel,
      value: getContactValue("phone", placeholders),
      Icon: Phone,
    },
    {
      key: "email" as const,
      label: t.contactPage.emailLabel,
      value: getContactValue("email", placeholders),
      Icon: Mail,
    },
  ];

  const socialIcons = {
    linkedin: Share2,
    x: Globe,
    email: Mail,
  } as const;

  return (
    <div>
      <ul className="space-y-5">
        {rows.map((row) => (
          <li key={row.key} className="flex gap-3.5">
            <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-[#EEF1F6] text-[#475467]">
              <row.Icon className="size-4" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-[14px] font-semibold text-[#101828]">
                {row.label}
              </p>
              <p className="mt-0.5 text-[13.5px] leading-relaxed text-[#667085]">
                {row.value}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 border-t border-[#E4E7EC] pt-6">
        <div className="flex items-center gap-2.5">
          {siteConfig.social.map((channel) => {
            const Icon = socialIcons[channel.id];
            const hasUrl = Boolean(channel.url.trim());
            const label =
              t.footer[
                channel.id === "linkedin"
                  ? "socialLinkedin"
                  : channel.id === "x"
                    ? "socialX"
                    : "socialEmail"
              ];

            if (!hasUrl) {
              return (
                <span
                  key={channel.id}
                  title={t.contactPage.socialUnavailable}
                  aria-label={`${label}: ${t.contactPage.socialUnavailable}`}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-[#E4E7EC] text-[#D0D5DD]"
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
                className="inline-flex size-9 items-center justify-center rounded-full border border-[#E4E7EC] text-[#667085] transition-colors hover:border-[#3154D5] hover:text-[#3154D5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

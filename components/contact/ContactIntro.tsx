"use client";

import { Logo } from "@/components/shared/Logo";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function ContactIntro() {
  const { t } = useLanguage();

  return (
    <div className="min-w-0">
      <div className="mb-6">
        <Logo />
      </div>
      <h1 className="max-w-[14ch] font-serif text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[1.12] tracking-[-0.015em] text-[#101828]">
        {t.contactPage.heading}
      </h1>
      <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-[#667085]">
        {t.contactPage.description}
      </p>
      <div className="mt-8">
        <ContactDetails />
      </div>
    </div>
  );
}

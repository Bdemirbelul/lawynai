"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { Locale } from "@/lib/i18n/translations";

const options: Locale[] = ["en", "tr"];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className="inline-flex items-center rounded-full border border-[#E4E7EC] bg-[#F8FAFC] px-2.5 py-1 text-[11px] font-medium tracking-wide text-[#667085]"
      role="group"
      aria-label="Language"
    >
      {options.map((code, index) => {
        const isActive = locale === code;
        return (
          <span key={code} className="inline-flex items-center">
            {index > 0 ? (
              <span className="mx-1.5 text-[#D0D5DD]" aria-hidden="true">
                |
              </span>
            ) : null}
            <button
              type="button"
              onClick={() => setLocale(code)}
              aria-pressed={isActive}
              className={`rounded-sm px-0.5 uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5] ${
                isActive
                  ? "text-[#3154D5]"
                  : "text-[#667085] hover:text-[#101828]"
              }`}
            >
              {code}
            </button>
          </span>
        );
      })}
    </div>
  );
}

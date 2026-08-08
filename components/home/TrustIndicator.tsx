"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

const avatars = [
  { initials: "AY", className: "z-40 bg-[#D6E0FF] text-[#3154D5]" },
  { initials: "MK", className: "z-30 -ml-2.5 bg-[#E4E7EC] text-[#344054]" },
  { initials: "SD", className: "z-20 -ml-2.5 bg-[#F2E8DE] text-[#8A5A2B]" },
];

export function TrustIndicator() {
  const { t } = useLanguage();

  return (
    <div className="flex items-center gap-3">
      <div className="flex shrink-0 items-center" aria-hidden="true">
        {avatars.map((avatar) => (
          <span
            key={avatar.initials}
            className={`relative inline-flex size-8 items-center justify-center rounded-full border-2 border-white text-[10px] font-semibold ${avatar.className}`}
          >
            {avatar.initials}
          </span>
        ))}
        <span className="relative z-50 -ml-2.5 inline-flex size-7 items-center justify-center rounded-md bg-[#3154D5] text-[9px] font-semibold tracking-wide text-white shadow-sm">
          AI
        </span>
      </div>
      <p className="min-w-0 text-[12.5px] leading-snug text-[#475467] sm:text-[13px]">
        {t.hero.trust}
      </p>
    </div>
  );
}

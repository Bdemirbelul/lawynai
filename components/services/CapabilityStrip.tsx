"use client";

import { CloudCog, Handshake, LockKeyhole, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const icons = [ShieldCheck, LockKeyhole, CloudCog, Handshake] as const;

export function CapabilityStrip() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#0B1220]" aria-label={t.servicesPage.badge}>
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-4 px-5 py-5 sm:grid-cols-2 sm:gap-5 md:px-8 min-[960px]:grid-cols-4 min-[960px]:gap-6 lg:px-10">
        {t.servicesPage.strip.map((label, index) => {
          const Icon = icons[index];
          return (
            <div
              key={label}
              className="flex items-center gap-3 min-[960px]:justify-center min-[960px]:border-l min-[960px]:border-white/10 min-[960px]:first:border-l-0"
            >
              <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#AAB8FF]">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <p className="text-[13px] font-medium text-white/90">{label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

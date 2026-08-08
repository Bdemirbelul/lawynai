"use client";

import {
  BadgeCheck,
  CheckCircle2,
  Lock,
  Shield,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function SecuritySection() {
  const { t } = useLanguage();
  const rows = [
    {
      label: t.security.rows.systemStatus,
      value: t.security.rows.systemValue,
      emphasized: true,
    },
    {
      label: t.security.rows.accessMonitoring,
      value: t.security.rows.accessValue,
      emphasized: false,
    },
    {
      label: t.security.rows.latestBackup,
      value: t.security.rows.backupValue,
      emphasized: false,
    },
  ];

  return (
    <section className="bg-[#F7F8FA]">
      <div className="mx-auto grid w-full max-w-[1180px] items-center gap-10 px-5 py-14 md:px-8 md:py-16 min-[900px]:grid-cols-2 min-[900px]:gap-12 lg:px-10 lg:py-20">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#E4E7EC] bg-white px-2.5 py-1 text-[11.5px] font-medium text-[#344054]">
            <Lock className="size-3.5 text-[#3154D5]" aria-hidden="true" />
            {t.security.badge}
          </div>

          <h2 className="mt-4 max-w-[16ch] font-serif text-[clamp(1.7rem,3vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.015em] text-[#101828]">
            {t.security.heading}
          </h2>
          <p className="mt-4 max-w-[34rem] text-[14.5px] leading-relaxed text-[#667085]">
            {t.security.introduction}
          </p>

          <ul className="mt-8 space-y-4">
            {t.security.points.map((point) => (
              <li key={point.title} className="flex gap-3">
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-[#12B76A]"
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <h3 className="text-[14.5px] font-semibold text-[#101828]">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-[#667085]">
                    {point.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-[420px] min-[900px]:mx-0 min-[900px]:justify-self-end">
          <div className="rounded-2xl border border-[#E4E7EC] bg-white p-5 shadow-[0_24px_48px_-28px_rgba(16,24,40,0.4)] sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-3">
              <h3 className="text-[15px] font-semibold text-[#101828]">
                {t.security.overviewTitle}
              </h3>
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-[#DCFAE6] text-[#12B76A]">
                <ShieldCheck className="size-4" aria-hidden="true" />
              </span>
            </div>

            <div className="divide-y divide-[#E4E7EC]">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-3 py-3.5 first:pt-0 last:pb-0"
                >
                  <span className="text-[13px] text-[#667085]">{row.label}</span>
                  {row.emphasized ? (
                    <span className="rounded-full bg-[#DCFAE6] px-2.5 py-1 text-[12px] font-medium text-[#027A48]">
                      {row.value}
                    </span>
                  ) : (
                    <span className="text-[13px] font-medium text-[#101828]">
                      {row.value}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div
              className="mt-5 flex items-center justify-center gap-5 border-t border-[#E4E7EC] pt-4 text-[#98A2B3]"
              aria-hidden="true"
            >
              <Shield className="size-4" strokeWidth={1.75} />
              <BadgeCheck className="size-4" strokeWidth={1.75} />
              <Lock className="size-4" strokeWidth={1.75} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

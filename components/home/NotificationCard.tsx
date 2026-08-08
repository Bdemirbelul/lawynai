"use client";

import {
  AlertTriangle,
  CalendarDays,
  Check,
  Clock3,
  FileCheck2,
} from "lucide-react";
import type { FloatingNotification } from "@/data/floatingNotifications";
import type { Locale } from "@/lib/i18n/translations";

const iconMap = {
  check: Check,
  calendar: CalendarDays,
  warning: AlertTriangle,
  clock: Clock3,
  file: FileCheck2,
} as const;

const typeStyles = {
  reminder: {
    shell: "border-[#E4E7EC]",
    iconWrap: "bg-[#E9EDFF] text-[#3154D5]",
  },
  urgent: {
    shell: "border-[#F9D2D2]",
    iconWrap: "bg-[#FCE8E8] text-[#B42318]",
  },
  success: {
    shell: "border-[#E4E7EC]",
    iconWrap: "bg-[#DCFAE6] text-[#027A48]",
  },
} as const;

type NotificationCardProps = {
  item: FloatingNotification;
  locale: Locale;
};

export function NotificationCard({ item, locale }: NotificationCardProps) {
  const Icon = iconMap[item.icon];
  const styles = typeStyles[item.type];

  return (
    <div
      className={`flex w-[220px] items-start gap-2.5 rounded-[14px] border bg-white p-3 shadow-[0_12px_28px_-14px_rgba(16,24,40,0.32)] sm:w-[250px] sm:gap-3 sm:p-3.5 ${styles.shell}`}
    >
      <span
        className={`mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full ${styles.iconWrap}`}
      >
        <Icon
          className="size-3.5"
          strokeWidth={item.icon === "check" ? 2.75 : 2}
          aria-hidden="true"
        />
      </span>
      <div className="min-w-0">
        <p className="text-[12.5px] font-semibold leading-tight text-[#101828] sm:text-[13px]">
          {item.title[locale]}
        </p>
        <p className="mt-1 text-[11px] leading-snug text-[#667085] sm:text-[11.5px]">
          {item.description[locale]}
        </p>
      </div>
    </div>
  );
}

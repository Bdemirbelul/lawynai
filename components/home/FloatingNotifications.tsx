"use client";

import { floatingNotifications } from "@/data/floatingNotifications";
import { NotificationCard } from "@/components/home/NotificationCard";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const visibilityClass = {
  always: "flex",
  md: "hidden md:flex",
  xl: "hidden min-[1200px]:flex",
} as const;

const floatClass = {
  a: "animate-notify-float-a",
  b: "animate-notify-float-b",
  c: "animate-notify-float-c",
  d: "animate-notify-float-d",
  e: "animate-notify-float-e",
} as const;

export function FloatingNotifications() {
  const { locale } = useLanguage();

  return (
    <>
      {floatingNotifications.map((item) => (
        <div
          key={item.id}
          className={`absolute z-[31] ${item.positionClass} ${visibilityClass[item.visibility]}`}
        >
          <div
            className={floatClass[item.floatVariant]}
            style={{
              animationDuration: `${item.floatDuration}s`,
              animationDelay: `${item.enterDelay + 0.85}s`,
            }}
          >
            <div
              className="animate-notify-enter opacity-0"
              style={{
                animationDelay: `${item.enterDelay}s`,
              }}
            >
              <NotificationCard item={item} locale={locale} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

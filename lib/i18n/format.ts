import type { Locale } from "@/lib/i18n/translations";

const dateFormatters: Record<Locale, Intl.DateTimeFormat> = {
  en: new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }),
  tr: new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }),
};

export function formatInsightDate(date: string, locale: Locale): string {
  return dateFormatters[locale].format(new Date(`${date}T12:00:00`));
}

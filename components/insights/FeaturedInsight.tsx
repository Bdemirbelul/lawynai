"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedInsight } from "@/data/insights";
import { formatInsightDate } from "@/lib/i18n/format";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function FeaturedInsight() {
  const { locale, t } = useLanguage();
  const featured = getFeaturedInsight();
  const title = featured.title[locale];
  const excerpt = featured.excerpt[locale];
  const alt = featured.imageAlt?.[locale] ?? title;

  return (
    <section className="relative isolate min-h-[420px] overflow-hidden bg-[#0B1220] md:min-h-[520px] lg:min-h-[560px]">
      {featured.image ? (
        <Image
          src={featured.image}
          alt={alt}
          fill
          priority
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
      ) : null}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/92 via-[#0B1220]/72 to-[#0B1220]/35"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/90 via-[#0B1220]/35 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[420px] w-full max-w-[1180px] items-end px-5 py-12 md:min-h-[520px] md:px-8 md:py-14 lg:min-h-[560px] lg:px-10 lg:py-16">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex rounded-md bg-[#3154D5] px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] text-white uppercase">
              {t.insightsPage.featuredBadge}
            </span>
            <time
              dateTime={featured.date}
              className="text-[13px] font-medium text-white/75"
            >
              {formatInsightDate(featured.date, locale)}
            </time>
          </div>

          <h1 className="mt-4 font-serif text-[clamp(1.85rem,4vw,3.15rem)] font-medium leading-[1.12] tracking-[-0.015em] text-white">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-white/80 sm:text-[15px]">
            {excerpt}
          </p>
          <Link
            href={`/insights/${featured.slug}`}
            className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-white px-5 text-[13.5px] font-medium text-[#101828] transition-colors hover:bg-[#F2F4F7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {t.insightsPage.featuredCta}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

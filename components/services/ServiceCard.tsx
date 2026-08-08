"use client";

import Image from "next/image";
import {
  BrainCircuit,
  Check,
  Cloud,
  Code2,
  GitBranch,
  PenTool,
  Shield,
} from "lucide-react";
import type { ServiceItem } from "@/data/services";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const icons = {
  code: Code2,
  brain: BrainCircuit,
  workflow: GitBranch,
  cloud: Cloud,
  shield: Shield,
  pen: PenTool,
} as const;

type ServiceCardProps = {
  service: ServiceItem;
  emphasized?: boolean;
  onLearnMore: (service: ServiceItem) => void;
};

export function ServiceCard({
  service,
  emphasized = false,
  onLearnMore,
}: ServiceCardProps) {
  const { locale, t } = useLanguage();
  const Icon = icons[service.icon];
  const title = service.title[locale];
  const description = service.description[locale];
  const features = service.features[locale];
  const isDark = service.variant === "dark";
  const isMuted = service.variant === "muted";
  const isFeatured = service.variant === "featured";
  const isVisual = service.variant === "visual";

  const shellClass = [
    "group relative flex h-full flex-col overflow-hidden rounded-2xl border transition-[transform,box-shadow]",
    emphasized ? "ring-2 ring-[#3154D5]/35" : "",
    isDark
      ? "border-[#1D2939] bg-[#0B1220] text-white shadow-[0_16px_32px_-20px_rgba(11,18,32,0.7)]"
      : isMuted
        ? "border-[#E4E7EC] bg-[#F7F8FA] text-[#101828] shadow-[0_10px_24px_-20px_rgba(16,24,40,0.3)]"
        : "border-[#E4E7EC] bg-white text-[#101828] shadow-[0_10px_24px_-20px_rgba(16,24,40,0.3)]",
    "hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-18px_rgba(16,24,40,0.4)]",
  ].join(" ");

  if (isFeatured) {
    return (
      <article className={`${shellClass} lg:col-span-2`}>
        <div className="grid h-full min-h-[280px] lg:grid-cols-2">
          <div className="flex flex-col p-6 sm:p-7">
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-[#E9EDFF] text-[#3154D5]">
              <Icon className="size-[18px]" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-serif text-[1.35rem] leading-snug font-medium">
              {title}
            </h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-[#667085]">
              {description}
            </p>
            <ul className="mt-4 space-y-2">
              {features.slice(0, 4).map((feature) => (
                <li
                  key={feature}
                  className="flex gap-2 text-[13px] leading-relaxed text-[#344054]"
                >
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-[#3154D5]"
                    aria-hidden="true"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => onLearnMore(service)}
              className="mt-auto inline-flex items-center gap-1 pt-5 text-[13px] font-medium text-[#101828] transition-colors hover:text-[#3154D5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
            >
              {t.servicesPage.learnMore}
              <span aria-hidden="true">→</span>
            </button>
          </div>
          <div
            className="relative hidden overflow-hidden bg-[#0B1220] lg:block"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(49,84,213,0.35),transparent_55%)]" />
            <div className="absolute inset-6 space-y-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="h-2 w-24 rounded-sm bg-white/20" />
              <div className="h-2 w-full rounded-sm bg-[#3154D5]/40" />
              <div className="h-2 w-5/6 rounded-sm bg-white/15" />
              <div className="mt-6 grid grid-cols-2 gap-2">
                <div className="h-16 rounded-lg bg-white/5" />
                <div className="h-16 rounded-lg bg-[#3154D5]/20" />
              </div>
              <div className="space-y-2 pt-2 font-mono text-[10px] text-[#93A4FF]/70">
                <p>secure.architecture()</p>
                <p>modernize.legacy()</p>
                <p>matter.workspace.build()</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (isVisual) {
    return (
      <article className={shellClass}>
        {service.image ? (
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={service.image}
              alt={service.imageAlt?.[locale] ?? title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/75 via-transparent to-transparent" />
          </div>
        ) : null}
        <div className="flex flex-1 flex-col p-6">
          <span className="inline-flex size-10 items-center justify-center rounded-xl bg-[#E9EDFF] text-[#3154D5]">
            <Icon className="size-[18px]" aria-hidden="true" />
          </span>
          <h3 className="mt-4 font-serif text-[1.2rem] leading-snug font-medium">
            {title}
          </h3>
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#667085]">
            {description}
          </p>
          {service.disclaimer ? (
            <p className="mt-3 text-[11.5px] leading-relaxed text-[#98A2B3]">
              {service.disclaimer[locale]}
            </p>
          ) : null}
          <button
            type="button"
            onClick={() => onLearnMore(service)}
            className="mt-auto inline-flex items-center gap-1 pt-5 text-[13px] font-medium text-[#101828] transition-colors hover:text-[#3154D5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
          >
            {t.servicesPage.learnMore}
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </article>
    );
  }

  return (
    <article className={shellClass}>
      <div className="flex h-full flex-col p-6">
        <span
          className={`inline-flex size-10 items-center justify-center rounded-xl ${
            isDark ? "bg-white/10 text-[#AAB8FF]" : "bg-[#E9EDFF] text-[#3154D5]"
          }`}
        >
          <Icon className="size-[18px]" aria-hidden="true" />
        </span>
        <h3 className="mt-4 font-serif text-[1.2rem] leading-snug font-medium">
          {title}
        </h3>
        <p
          className={`mt-2 text-[13.5px] leading-relaxed ${
            isDark ? "text-white/65" : "text-[#667085]"
          }`}
        >
          {description}
        </p>

        <div
          className={`mt-4 rounded-xl border p-3.5 ${
            isDark
              ? "border-white/10 bg-white/[0.04]"
              : "border-[#E4E7EC] bg-white/70"
          }`}
        >
          <p
            className={`text-[10px] font-semibold tracking-[0.08em] uppercase ${
              isDark ? "text-white/45" : "text-[#98A2B3]"
            }`}
          >
            {t.servicesPage.whatWeProvide}
          </p>
          <ul className="mt-2.5 space-y-1.5">
            {features.slice(0, 4).map((feature) => (
              <li
                key={feature}
                className={`flex gap-2 text-[12.5px] leading-relaxed ${
                  isDark ? "text-white/75" : "text-[#344054]"
                }`}
              >
                <span
                  className={`mt-1.5 size-1.5 shrink-0 rounded-full ${
                    isDark ? "bg-[#AAB8FF]" : "bg-[#3154D5]"
                  }`}
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          onClick={() => onLearnMore(service)}
          className={`mt-auto inline-flex items-center gap-1 pt-5 text-[13px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5] ${
            isDark
              ? "text-white hover:text-[#C7D2FE]"
              : "text-[#101828] hover:text-[#3154D5]"
          }`}
        >
          {t.servicesPage.learnMore}
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}

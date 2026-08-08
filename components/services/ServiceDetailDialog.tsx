"use client";

import { useEffect, useId, useRef } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { ServiceItem } from "@/data/services";

type ServiceDetailDialogProps = {
  service: ServiceItem | null;
  open: boolean;
  onClose: () => void;
};

export function ServiceDetailDialog({
  service,
  open,
  onClose,
}: ServiceDetailDialogProps) {
  const { locale, t } = useLanguage();
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const previous = document.activeElement;
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      if (previous instanceof HTMLElement) previous.focus();
    };
  }, [open, onClose]);

  if (!open || !service) return null;

  const title = service.title[locale];
  const description = service.description[locale];
  const features = service.features[locale];
  const disclaimer = service.disclaimer?.[locale];

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-[#0B1220]/55"
        aria-label={t.servicesPage.closeDetail}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-[#E4E7EC] bg-white p-6 shadow-[0_24px_48px_-20px_rgba(16,24,40,0.45)] sm:p-8"
      >
        <h2 id={titleId} className="font-serif text-2xl text-[#101828]">
          {title}
        </h2>
        <p className="mt-3 text-[14px] leading-relaxed text-[#667085]">
          {description}
        </p>

        <p className="mt-6 text-[11px] font-semibold tracking-[0.08em] text-[#3154D5] uppercase">
          {t.servicesPage.whatWeProvide}
        </p>
        <ul className="mt-3 space-y-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex gap-2 text-[13.5px] leading-relaxed text-[#344054]"
            >
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#3154D5]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {disclaimer ? (
          <p className="mt-5 text-[12px] leading-relaxed text-[#667085]">
            {disclaimer}
          </p>
        ) : null}

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-[#050505] px-4 text-[13px] font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
        >
          {t.servicesPage.closeDetail}
        </button>
      </div>
    </div>
  );
}

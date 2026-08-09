"use client";

import { useEffect, useId, useRef } from "react";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

type DemoSuccessDialogProps = {
  open: boolean;
  onClose: () => void;
};

export function DemoSuccessDialog({ open, onClose }: DemoSuccessDialogProps) {
  const { t } = useLanguage();
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descriptionId = useId();

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

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-[#0B1220]/55"
        aria-label={t.contactPage.successDialog.close}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="relative z-10 w-full max-w-md rounded-2xl border border-[#E4E7EC] bg-white p-6 shadow-[0_24px_48px_-20px_rgba(16,24,40,0.45)] sm:p-8"
      >
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#EEF2FF]">
          <Check className="size-6 text-[#3154D5]" aria-hidden="true" strokeWidth={2.25} />
        </div>
        <h2
          id={titleId}
          className="mt-5 text-center font-serif text-[1.5rem] text-[#101828]"
        >
          {t.contactPage.successDialog.title}
        </h2>
        <p
          id={descriptionId}
          className="mt-3 text-center text-[14px] leading-relaxed text-[#475467]"
        >
          {t.contactPage.success}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="mt-7 inline-flex h-11 w-full items-center justify-center rounded-md bg-[#050505] px-4 text-[13.5px] font-medium text-white transition-colors hover:bg-[#1a1a1a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
        >
          {t.contactPage.successDialog.close}
        </button>
      </div>
    </div>
  );
}

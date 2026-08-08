"use client";

import { useEffect, useId, useRef } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

type LegalNoticeDialogProps = {
  open: boolean;
  onClose: () => void;
  kind: "notice" | "policy";
};

export function LegalNoticeDialog({
  open,
  onClose,
  kind,
}: LegalNoticeDialogProps) {
  const { t } = useLanguage();
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

  if (!open) return null;

  const label =
    kind === "notice"
      ? t.contactPage.fields.privacyNotice
      : t.contactPage.fields.privacyPolicy;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-[#0B1220]/55"
        aria-label={t.contactPage.legalDialog.close}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-lg rounded-2xl border border-[#E4E7EC] bg-white p-6 shadow-[0_24px_48px_-20px_rgba(16,24,40,0.45)]"
      >
        <h2 id={titleId} className="font-serif text-xl text-[#101828]">
          {label}
        </h2>
        <p className="mt-2 text-[12px] font-semibold tracking-[0.06em] text-[#3154D5] uppercase">
          {t.contactPage.legalDialog.title}
        </p>
        <p className="mt-3 text-[14px] leading-relaxed text-[#475467]">
          {t.contactPage.legalDialog.body}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-[#050505] px-4 text-[13px] font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
        >
          {t.contactPage.legalDialog.close}
        </button>
      </div>
    </div>
  );
}

"use client";

import { Download } from "lucide-react";
import { WindowsIcon } from "@/components/shared/WindowsIcon";
import { getWindowsDownloadUrl } from "@/lib/download/windows";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function WindowsDownloadCta() {
  const { t } = useLanguage();
  const downloadUrl = getWindowsDownloadUrl();

  return (
    <div className="mt-4 w-full sm:mt-5">
      <a
        href={downloadUrl}
        download
        aria-label={t.download.ariaLabel}
        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-[#D0D5DD] bg-white px-5 text-[13.5px] font-medium text-[#101828] transition-colors hover:border-[#98A2B3] hover:bg-[#F8FAFC] active:bg-[#F2F4F7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5] sm:w-auto"
      >
        <WindowsIcon className="size-4 shrink-0" />
        <span>{t.download.cta}</span>
        <Download className="size-4 shrink-0" aria-hidden="true" />
      </a>

      <p className="mt-2 text-[12px] leading-relaxed text-[#667085]">
        {t.download.meta}
      </p>

      <p className="mt-1.5 text-[12px] leading-relaxed text-[#98A2B3] sm:hidden">
        {t.download.mobileNote}
      </p>
    </div>
  );
}

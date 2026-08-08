"use client";

import { BrainCircuit, Scale, Shield, Wrench } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const icons = [Scale, Shield, BrainCircuit, Wrench] as const;

export function ValueStrip() {
  const { t } = useLanguage();

  return (
    <section className="bg-white" aria-label={t.values.label}>
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-2 sm:gap-8 md:px-8 md:py-16 min-[900px]:grid-cols-4 min-[900px]:gap-6 lg:px-10 lg:py-20">
        {t.values.items.map((item, index) => {
          const Icon = icons[index];
          return (
            <article
              key={item.title}
              className="flex flex-col items-center text-center"
            >
              <span className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-[#E9EDFF] text-[#3154D5]">
                <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="text-[15px] font-semibold tracking-tight text-[#101828]">
                {item.title}
              </h3>
              <p className="mt-2 max-w-[16rem] text-[13px] leading-relaxed text-[#667085] min-[900px]:max-w-none">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

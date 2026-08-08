"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ServiceDetailDialog } from "@/components/services/ServiceDetailDialog";
import { services, type ServiceItem } from "@/data/services";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function ServicesGrid() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [selected, setSelected] = useState<ServiceItem | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < services.length - 1;

  function goPrev() {
    if (!canGoPrev) return;
    const nextIndex = activeIndex - 1;
    setActiveIndex(nextIndex);
    scrollToCard(nextIndex);
  }

  function goNext() {
    if (!canGoNext) return;
    const nextIndex = activeIndex + 1;
    setActiveIndex(nextIndex);
    scrollToCard(nextIndex);
  }

  function scrollToCard(index: number) {
    const container = scrollerRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }

  return (
    <section id="services" className="scroll-mt-20 bg-white">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-14 md:px-8 md:py-16 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-serif text-[clamp(1.7rem,3vw,2.5rem)] font-medium tracking-[-0.015em] text-[#101828]">
              {t.servicesPage.introHeading}
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-[#667085]">
              {t.servicesPage.introDescription}
            </p>
          </div>

          <div className="flex items-center gap-2 self-end">
            <button
              type="button"
              onClick={goPrev}
              disabled={!canGoPrev}
              aria-label={t.servicesPage.previous}
              className="inline-flex size-10 items-center justify-center rounded-full border border-[#E4E7EC] text-[#101828] transition-colors hover:bg-[#F8FAFC] disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={!canGoNext}
              aria-label={t.servicesPage.next}
              className="inline-flex size-10 items-center justify-center rounded-full border border-[#E4E7EC] text-[#101828] transition-colors hover:bg-[#F8FAFC] disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
            >
              <ChevronRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:mt-12 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden"
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`min-w-[85%] snap-center sm:min-w-[70%] md:min-w-0 ${
                service.variant === "featured" ? "lg:col-span-2" : ""
              }`}
            >
              <ServiceCard
                service={service}
                emphasized={index === activeIndex}
                onLearnMore={setSelected}
              />
            </div>
          ))}
        </div>
      </div>

      <ServiceDetailDialog
        service={selected}
        open={selected !== null}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}

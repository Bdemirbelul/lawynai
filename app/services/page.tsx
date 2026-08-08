import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicesHero } from "@/components/services/ServicesHero";
import { CapabilityStrip } from "@/components/services/CapabilityStrip";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ServicesCTA } from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Legal Technology Services | Lawyn AI",
  description:
    "Explore Lawyn AI services for custom software development, legal workflow automation, AI integration, cloud migration, cybersecurity, and technical consulting.",
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        <ServicesHero />
        <CapabilityStrip />
        <ServicesGrid />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FeaturedInsight } from "@/components/insights/FeaturedInsight";
import { InsightsGrid } from "@/components/insights/InsightsGrid";
import { NewsletterSection } from "@/components/insights/NewsletterSection";

export const metadata: Metadata = {
  title: "Insights — Lawyn AI",
  description:
    "Editorial insights on legal technology, responsible AI, cybersecurity, and digital transformation from Lawyn AI.",
};

export default function InsightsPage() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        <FeaturedInsight />
        <InsightsGrid />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}

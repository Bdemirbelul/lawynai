import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InsightDetailContent } from "@/components/insights/InsightDetailContent";
import { getInsightBySlug, insights } from "@/data/insights";

type InsightDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insights.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: InsightDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getInsightBySlug(slug);
  if (!item) {
    return { title: "Insight — Lawyn AI" };
  }

  return {
    title: `${item.title.en} — Lawyn AI`,
    description: item.excerpt.en,
  };
}

export default async function InsightDetailPage({
  params,
}: InsightDetailPageProps) {
  const { slug } = await params;
  const item = getInsightBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="flex min-h-full flex-col bg-white">
      <Header />
      <main className="flex-1 bg-[#F7F8FA]">
        <div className="mx-auto w-full max-w-[820px] px-5 py-10 md:px-8 md:py-14 lg:px-10">
          <InsightDetailContent item={item} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

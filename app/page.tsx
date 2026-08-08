import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ValueStrip } from "@/components/home/ValueStrip";
import { ProblemsSection } from "@/components/home/ProblemsSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { AIShowcase } from "@/components/home/AIShowcase";
import { ProcessSection } from "@/components/home/ProcessSection";
import { SecuritySection } from "@/components/home/SecuritySection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <ValueStrip />
        <ProblemsSection />
        <SolutionsSection />
        <AIShowcase />
        <ProcessSection />
        <SecuritySection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactIntro } from "@/components/contact/ContactIntro";
import { DemoRequestForm } from "@/components/contact/DemoRequestForm";
import { OnboardingSteps } from "@/components/contact/OnboardingSteps";

export const metadata: Metadata = {
  title: "Contact & Request a Demo | Lawyn AI",
  description:
    "Request a personalized Lawyn AI demonstration and discover software solutions designed for modern legal professionals.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section id="contact" className="scroll-mt-20 bg-[#F7F8FA]">
          <div className="mx-auto grid w-full max-w-[1180px] items-start gap-10 px-5 py-12 md:px-8 md:py-14 min-[960px]:grid-cols-[0.9fr_1.2fr] min-[960px]:gap-12 lg:px-10 lg:py-16">
            <ContactIntro />
            <DemoRequestForm />
          </div>
        </section>
        <OnboardingSteps />
      </main>
      <Footer />
    </div>
  );
}

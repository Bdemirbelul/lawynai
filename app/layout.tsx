import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lawyn AI — AI Solutions for Legal Practice",
  description:
    "Digitize your operations, automate complex workflows, and manage sensitive legal data through a secure, AI-powered platform.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${manrope.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-[#101828]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

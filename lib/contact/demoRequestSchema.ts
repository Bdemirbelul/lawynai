import { z } from "zod";
import type { Locale } from "@/lib/i18n/translations";

export const teamSizeValues = [
  "1-5",
  "6-20",
  "21-50",
  "51-100",
  "101+",
] as const;

export const solutionInterestValues = [
  "ai-document-analysis",
  "case-management",
  "document-automation",
  "secure-client-portal",
  "reporting-analytics",
  "custom-software",
  "system-integration",
  "not-sure",
] as const;

export const contactMethodValues = [
  "email",
  "phone",
  "online-meeting",
] as const;

type DemoSchemaMessages = {
  fullName: string;
  company: string;
  email: string;
  teamSize: string;
  solution: string;
  contactMethod: string;
  consent: string;
  messageMax: string;
  phoneInvalid: string;
};

function isOneOf<T extends string>(
  values: readonly T[],
  value: string,
): value is T {
  return (values as readonly string[]).includes(value);
}

export function createDemoRequestSchema(messages: DemoSchemaMessages) {
  return z.object({
    fullName: z.string().trim().min(2, messages.fullName),
    company: z.string().trim().min(2, messages.company),
    email: z.string().trim().email(messages.email),
    phone: z
      .string()
      .trim()
      .refine(
        (value) => value === "" || /^[+]?[\d\s().-]{7,20}$/.test(value),
        messages.phoneInvalid,
      ),
    teamSize: z
      .string()
      .refine((value) => isOneOf(teamSizeValues, value), messages.teamSize),
    solutionInterest: z
      .string()
      .refine(
        (value) => isOneOf(solutionInterestValues, value),
        messages.solution,
      ),
    message: z.string().trim().max(1000, messages.messageMax),
    preferredContact: z
      .string()
      .refine(
        (value) => isOneOf(contactMethodValues, value),
        messages.contactMethod,
      ),
    consent: z.boolean().refine((value) => value, messages.consent),
  });
}

export type DemoRequestSchema = ReturnType<typeof createDemoRequestSchema>;
export type DemoRequestPayload = z.infer<DemoRequestSchema>;

export const demoSchemaMessages: Record<Locale, DemoSchemaMessages> = {
  en: {
    fullName: "Please enter your full name.",
    company: "Please enter your law firm or company name.",
    email: "Please enter a valid email address.",
    teamSize: "Please select your team size.",
    solution: "Please select a solution.",
    contactMethod: "Please select a preferred contact method.",
    consent: "You must accept the privacy notice.",
    messageMax: "Please keep your message under 1000 characters.",
    phoneInvalid: "Please enter a valid phone number.",
  },
  tr: {
    fullName: "Lütfen adınızı ve soyadınızı girin.",
    company: "Lütfen hukuk bürosu veya şirket adını girin.",
    email: "Lütfen geçerli bir e-posta adresi girin.",
    teamSize: "Lütfen ekip büyüklüğünü seçin.",
    solution: "Lütfen ilgilendiğiniz çözümü seçin.",
    contactMethod: "Lütfen tercih ettiğiniz iletişim yöntemini seçin.",
    consent: "Devam etmek için aydınlatma metnini kabul etmelisiniz.",
    messageMax: "Lütfen mesajınızı 1000 karakterin altında tutun.",
    phoneInvalid: "Lütfen geçerli bir telefon numarası girin.",
  },
};

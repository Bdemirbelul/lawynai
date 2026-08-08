export type SocialChannel = {
  id: "linkedin" | "x" | "email";
  url: string;
};

export const siteConfig = {
  brand: "Lawyn AI",
  contact: {
    address: "",
    phone: "",
    email: "",
  },
  social: [
    { id: "linkedin", url: "" },
    { id: "x", url: "" },
    { id: "email", url: "" },
  ] as SocialChannel[],
} as const;

export function getContactValue(
  key: keyof typeof siteConfig.contact,
  placeholders: { address: string; phone: string; email: string },
): string {
  const value = siteConfig.contact[key].trim();
  return value || placeholders[key];
}

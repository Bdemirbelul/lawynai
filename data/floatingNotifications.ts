export type NotificationType = "reminder" | "urgent" | "success";

export type FloatingNotification = {
  id: string;
  type: NotificationType;
  icon: "check" | "calendar" | "warning" | "clock" | "file";
  title: {
    tr: string;
    en: string;
  };
  description: {
    tr: string;
    en: string;
  };
  /** Absolute positioning utility classes */
  positionClass: string;
  /** Entrance delay in seconds */
  enterDelay: number;
  /** Continuous float duration in seconds */
  floatDuration: number;
  /** Float animation variant key */
  floatVariant: "a" | "b" | "c" | "d" | "e";
  /** Visibility breakpoint: always | from-md | from-xl */
  visibility: "always" | "md" | "xl";
};

export const floatingNotifications: FloatingNotification[] = [
  {
    id: "contract-analyzed",
    type: "success",
    icon: "check",
    title: {
      tr: "Sözleşme Analiz Edildi",
      en: "Contract Analyzed",
    },
    description: {
      tr: "YZ, incelenmesi gereken 3 potansiyel sorumluluk maddesi tespit etti.",
      en: "AI detected 3 potential liability clauses requiring review.",
    },
    positionClass:
      "top-2 right-2 sm:top-[2%] sm:right-[2%] md:top-[-4%] md:right-[-4%] xl:top-[-5%] xl:right-[-5%]",
    enterDelay: 0.3,
    floatDuration: 14,
    floatVariant: "a",
    visibility: "always",
  },
  {
    id: "hearing-reminder",
    type: "reminder",
    icon: "calendar",
    title: {
      tr: "Duruşma Hatırlatması",
      en: "Hearing Reminder",
    },
    description: {
      tr: "Ticaret davası duruşması yarın saat 10.30’da.",
      en: "The commercial case hearing is tomorrow at 10:30.",
    },
    positionClass:
      "top-auto bottom-2 left-2 sm:bottom-3 sm:left-3 md:top-[12%] md:bottom-auto md:left-[-6%] xl:left-[-8%]",
    enterDelay: 0.7,
    floatDuration: 17,
    floatVariant: "b",
    visibility: "always",
  },
  {
    id: "urgent-review",
    type: "urgent",
    icon: "warning",
    title: {
      tr: "Acil İnceleme Gerekiyor",
      en: "Urgent Review Required",
    },
    description: {
      tr: "Kritik fesih hükmü için hukuk profesyonelinin incelemesi bekleniyor.",
      en: "A critical termination clause is awaiting professional review.",
    },
    positionClass:
      "top-[42%] right-[-4%] md:right-[-6%] xl:right-[-7%]",
    enterDelay: 1.1,
    floatDuration: 15,
    floatVariant: "c",
    visibility: "md",
  },
  {
    id: "upcoming-deadline",
    type: "reminder",
    icon: "clock",
    title: {
      tr: "Yaklaşan Son Tarih",
      en: "Upcoming Deadline",
    },
    description: {
      tr: "Cevap dilekçesinin tamamlanmasına 2 gün kaldı.",
      en: "The response petition is due in 2 days.",
    },
    positionClass:
      "bottom-[12%] left-[-6%] xl:left-[-8%]",
    enterDelay: 1.5,
    floatDuration: 19,
    floatVariant: "d",
    visibility: "md",
  },
  {
    id: "new-documents",
    type: "success",
    icon: "file",
    title: {
      tr: "Yeni Belgeler Eklendi",
      en: "New Documents Added",
    },
    description: {
      tr: "Dosyaya 4 yeni müvekkil belgesi güvenli şekilde yüklendi.",
      en: "4 new client documents were securely added to the matter.",
    },
    positionClass:
      "bottom-[-2%] right-[3%]",
    enterDelay: 1.9,
    floatDuration: 16,
    floatVariant: "e",
    visibility: "xl",
  },
];

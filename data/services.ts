export type LocalizedText = {
  tr: string;
  en: string;
};

export type ServiceVariant = "light" | "muted" | "dark" | "visual" | "featured";

export type ServiceItem = {
  id: string;
  icon:
    | "code"
    | "brain"
    | "workflow"
    | "cloud"
    | "shield"
    | "pen";
  title: LocalizedText;
  description: LocalizedText;
  features: {
    tr: string[];
    en: string[];
  };
  variant: ServiceVariant;
  image?: string;
  imageAlt?: LocalizedText;
  disclaimer?: LocalizedText;
};

export const servicesHeroVideo = {
  src: "/insights/198890-909564521_medium.mp4",
  alt: {
    en: "Modern technology workspace with a professional reviewing a digital dashboard",
    tr: "Dijital bir panoyu inceleyen profesyonelin bulunduğu modern teknoloji çalışma alanı",
  } satisfies LocalizedText,
};

export const services: ServiceItem[] = [
  {
    id: "custom-software",
    icon: "code",
    variant: "featured",
    title: {
      en: "Custom Software Development",
      tr: "Özel Yazılım Geliştirme",
    },
    description: {
      en: "Bespoke applications designed around your firm’s workflows, operational model, and long-term technology strategy.",
      tr: "Büronuzun iş akışlarına, operasyonel yapısına ve uzun vadeli teknoloji stratejisine göre geliştirilen özel uygulamalar.",
    },
    features: {
      en: [
        "Secure backend and frontend architecture",
        "Legacy system modernization",
        "Client and matter management platforms",
        "Custom reporting and dashboards",
      ],
      tr: [
        "Güvenli frontend ve backend mimarisi",
        "Eski sistemlerin modernleştirilmesi",
        "Müvekkil ve dosya yönetimi platformları",
        "Özel raporlama ve yönetim panoları",
      ],
    },
  },
  {
    id: "ai-integration",
    icon: "brain",
    variant: "visual",
    image: "/services/ai-integration.jpg",
    imageAlt: {
      en: "Abstract network visualization representing AI systems integration",
      tr: "Yapay zekâ sistem entegrasyonunu temsil eden soyut ağ görseli",
    },
    title: {
      en: "AI Systems Integration",
      tr: "Yapay Zekâ Sistem Entegrasyonu",
    },
    description: {
      en: "Integrate artificial intelligence into legal document review, information retrieval, internal knowledge management, and operational workflows.",
      tr: "Yapay zekâyı hukuki belge inceleme, bilgiye erişim, kurumsal bilgi yönetimi ve operasyonel iş akışlarına entegre edin.",
    },
    features: {
      en: [
        "Document classification",
        "Information extraction",
        "Semantic search",
        "Summarization assistance",
        "Internal knowledge systems",
      ],
      tr: [
        "Belge sınıflandırma",
        "Bilgi çıkarımı",
        "Anlamsal arama",
        "Özetleme desteği",
        "Kurumsal bilgi sistemleri",
      ],
    },
    disclaimer: {
      en: "AI-generated outputs support professional review and do not constitute standalone legal advice.",
      tr: "Yapay zekâ tarafından üretilen çıktılar mesleki incelemeyi destekler ve tek başına hukuki görüş niteliği taşımaz.",
    },
  },
  {
    id: "workflow-automation",
    icon: "workflow",
    variant: "muted",
    title: {
      en: "Legal Workflow Automation",
      tr: "Hukuki İş Akışı Otomasyonu",
    },
    description: {
      en: "Reduce repetitive administrative work through intelligent routing, document workflows, task automation, and deadline tracking.",
      tr: "Akıllı yönlendirme, belge süreçleri, görev otomasyonu ve son tarih takibiyle tekrarlayan idari işleri azaltın.",
    },
    features: {
      en: [
        "Document approval workflows",
        "Recurring task automation",
        "Deadline and obligation tracking",
        "Notifications and escalation rules",
      ],
      tr: [
        "Belge onay süreçleri",
        "Tekrarlayan görev otomasyonu",
        "Son tarih ve yükümlülük takibi",
        "Bildirim ve yönlendirme kuralları",
      ],
    },
  },
  {
    id: "cloud-migration",
    icon: "cloud",
    variant: "light",
    title: {
      en: "Cloud Migration and Hosting",
      tr: "Bulut Geçişi ve Barındırma",
    },
    description: {
      en: "Plan and implement a controlled transition from local or legacy infrastructure to scalable cloud environments.",
      tr: "Yerel veya eski altyapılardan ölçeklenebilir bulut ortamlarına kontrollü geçişi planlayın ve uygulayın.",
    },
    features: {
      en: [
        "Infrastructure assessment",
        "Secure migration planning",
        "Backup and recovery design",
        "Performance and cost optimization",
      ],
      tr: [
        "Altyapı değerlendirmesi",
        "Güvenli geçiş planlaması",
        "Yedekleme ve kurtarma tasarımı",
        "Performans ve maliyet optimizasyonu",
      ],
    },
  },
  {
    id: "cybersecurity",
    icon: "shield",
    variant: "dark",
    title: {
      en: "Cybersecurity Assessment",
      tr: "Siber Güvenlik Değerlendirmesi",
    },
    description: {
      en: "Identify security risks in applications, access models, data flows, infrastructure, and third-party integrations.",
      tr: "Uygulamalardaki, erişim modellerindeki, veri akışlarındaki, altyapıdaki ve üçüncü taraf entegrasyonlarındaki güvenlik risklerini belirleyin.",
    },
    features: {
      en: [
        "Security architecture review",
        "Role and permission assessment",
        "Data flow analysis",
        "Integration risk review",
        "Remediation roadmap",
      ],
      tr: [
        "Güvenlik mimarisi incelemesi",
        "Rol ve yetki değerlendirmesi",
        "Veri akışı analizi",
        "Entegrasyon risk incelemesi",
        "İyileştirme yol haritası",
      ],
    },
  },
  {
    id: "ux-consulting",
    icon: "pen",
    variant: "muted",
    title: {
      en: "UX/UI Design and Technical Consulting",
      tr: "UX/UI Tasarımı ve Teknik Danışmanlık",
    },
    description: {
      en: "Design clear legal software experiences and make better technology decisions through structured technical guidance.",
      tr: "Anlaşılır hukuk yazılımı deneyimleri tasarlayın ve yapılandırılmış teknik rehberlikle daha doğru teknoloji kararları alın.",
    },
    features: {
      en: [
        "User and workflow research",
        "Information architecture",
        "Interface prototyping",
        "Usability review",
        "Technology strategy",
      ],
      tr: [
        "Kullanıcı ve iş akışı araştırması",
        "Bilgi mimarisi",
        "Arayüz prototipleme",
        "Kullanılabilirlik değerlendirmesi",
        "Teknoloji stratejisi",
      ],
    },
  },
];

export function getServiceById(id: string): ServiceItem | undefined {
  return services.find((service) => service.id === id);
}

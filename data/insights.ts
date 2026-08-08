export type LocalizedText = {
  tr: string;
  en: string;
};

export type InsightCategoryId =
  | "legal-tech"
  | "ai-automation"
  | "cybersecurity"
  | "digital-transformation"
  | "legal-operations";

export type InsightItem = {
  slug: string;
  type: "article" | "podcast" | "report";
  category: InsightCategoryId;
  title: LocalizedText;
  excerpt: LocalizedText;
  date: string;
  readTimeMinutes?: number;
  image?: string;
  imageAlt?: LocalizedText;
  featured?: boolean;
  variant?: "standard" | "image-led";
  comingSoon?: boolean;
  introduction?: LocalizedText;
};

export const insightCategories = [
  "legal-tech",
  "ai-automation",
  "cybersecurity",
  "digital-transformation",
] as const;

export const insights: InsightItem[] = [
  {
    slug: "future-of-ai-in-legal-discovery",
    type: "article",
    category: "ai-automation",
    featured: true,
    date: "2026-03-18",
    readTimeMinutes: 12,
    image: "/insights/featured.png",
    imageAlt: {
      en: "Legal professional reviewing documents on a tablet in a modern office",
      tr: "Modern bir ofiste tablet üzerinden belgeleri inceleyen hukuk profesyoneli",
    },
    title: {
      en: "The Future of AI in Legal Discovery: Efficiency vs. Ethical Boundaries",
      tr: "Hukuki İncelemede Yapay Zekânın Geleceği: Verimlilik ve Etik Sınırlar",
    },
    excerpt: {
      en: "Explore how advanced AI tools are transforming legal discovery while raising important questions about transparency, professional judgment, and responsible use.",
      tr: "Gelişmiş yapay zekâ araçlarının hukuki inceleme süreçlerini nasıl dönüştürdüğünü; şeffaflık, mesleki değerlendirme ve sorumlu kullanım açısından ortaya çıkan sorularla birlikte keşfedin.",
    },
    introduction: {
      en: "This editorial overview outlines how AI-assisted discovery tools can support legal review workflows while reinforcing the need for human oversight, clear accountability, and carefully designed guardrails. Full article content is under preparation.",
      tr: "Bu editoryal özet, yapay zekâ destekli inceleme araçlarının hukuki inceleme iş akışlarını nasıl destekleyebileceğini; insan denetimi, açık hesap verebilirlik ve dikkatle tasarlanmış güvencelerin önemini vurgulayarak ele alır. Tam makale içeriği hazırlık aşamasındadır.",
    },
  },
  {
    slug: "securing-client-data-in-the-cloud",
    type: "article",
    category: "cybersecurity",
    date: "2026-02-28",
    readTimeMinutes: 8,
    image: "/insights/cybersecurity.jpg",
    imageAlt: {
      en: "Abstract secure network infrastructure visualization",
      tr: "Güvenli ağ altyapısını temsil eden soyut görsel",
    },
    title: {
      en: "Securing Client Data in the Cloud Era: A Practical Guide for Modern Law Firms",
      tr: "Bulut Çağında Müvekkil Verilerini Koruma: Modern Hukuk Büroları İçin Rehber",
    },
    excerpt: {
      en: "Key considerations for protecting confidential legal information while benefiting from cloud-based workflows.",
      tr: "Bulut tabanlı çalışma süreçlerinden yararlanırken gizli hukuki bilgilerin korunmasına yönelik temel noktalar.",
    },
    introduction: {
      en: "Cloud platforms can improve collaboration and continuity for legal teams, but confidential matter data requires deliberate access design, monitoring, and operational discipline. This guide introduces practical starting points. Full article content is under preparation.",
      tr: "Bulut platformları hukuk ekipleri için iş birliğini ve sürekliliği güçlendirebilir; ancak gizli dosya verileri bilinçli erişim tasarımı, izleme ve operasyonel disiplin gerektirir. Bu rehber pratik başlangıç noktalarını sunar. Tam makale içeriği hazırlık aşamasındadır.",
    },
  },
  {
    slug: "modernizing-legacy-legal-systems",
    type: "article",
    category: "digital-transformation",
    date: "2026-02-12",
    readTimeMinutes: 9,
    image: "/insights/digital-transformation.jpg",
    imageAlt: {
      en: "Professional reviewing digital workflow plans on a laptop",
      tr: "Dijital iş akışı planlarını dizüstü bilgisayarda inceleyen profesyonel",
    },
    title: {
      en: "Modernizing Legacy Legal Systems: Where Should a Firm Begin?",
      tr: "Eski Hukuk Sistemlerini Modernleştirmek: Bir Büro Nereden Başlamalı?",
    },
    excerpt: {
      en: "A structured approach to evaluating existing systems and planning a manageable digital transformation roadmap.",
      tr: "Mevcut sistemleri değerlendirmek ve uygulanabilir bir dijital dönüşüm yol haritası hazırlamak için yapılandırılmış bir yaklaşım.",
    },
    introduction: {
      en: "Successful modernization usually starts with clarity: which workflows create friction, which systems hold critical data, and which changes can be delivered without disrupting active matters. Full article content is under preparation.",
      tr: "Başarılı modernleşme genellikle netlikle başlar: hangi iş akışları sürtünme yaratıyor, kritik veriler hangi sistemlerde tutuluyor ve hangi değişiklikler aktif dosyaları aksatmadan hayata geçirilebilir. Tam makale içeriği hazırlık aşamasındadır.",
    },
  },
  {
    slug: "automation-paradox-in-contract-law",
    type: "podcast",
    category: "ai-automation",
    date: "2026-01-30",
    comingSoon: true,
    title: {
      en: "Episode 42: The Automation Paradox in Contract Law",
      tr: "42. Bölüm: Sözleşme Hukukunda Otomasyon Paradoksu",
    },
    excerpt: {
      en: "A discussion on balancing automation, professional oversight, and the responsibilities of legal teams.",
      tr: "Otomasyon, mesleki denetim ve hukuk ekiplerinin sorumlulukları arasındaki denge üzerine bir değerlendirme.",
    },
    introduction: {
      en: "This upcoming conversation explores where contract automation creates real efficiency and where professional judgment remains essential. The audio episode is coming soon.",
      tr: "Bu yaklaşan sohbet, sözleşme otomasyonunun gerçek verimlilik yarattığı noktaları ve mesleki değerlendirmenin vazgeçilmez kaldığı alanları ele alır. Ses kaydı yakında yayınlanacaktır.",
    },
  },
  {
    slug: "predictive-analytics-in-litigation-strategy",
    type: "article",
    category: "ai-automation",
    date: "2026-01-18",
    readTimeMinutes: 7,
    image: "/insights/predictive-analytics.jpg",
    imageAlt: {
      en: "Data analytics charts on a modern workstation display",
      tr: "Modern bir iş istasyonu ekranında veri analitiği grafikleri",
    },
    title: {
      en: "Predictive Analytics in Litigation Strategy",
      tr: "Dava Stratejisinde Öngörüsel Analitik",
    },
    excerpt: {
      en: "How structured data and analytical tools can support preparation, resource planning, and strategic legal review.",
      tr: "Yapılandırılmış verilerin ve analitik araçların hazırlık, kaynak planlaması ve stratejik hukuki incelemeyi nasıl destekleyebileceği.",
    },
    introduction: {
      en: "Analytical models can help teams organize historical patterns and prepare more deliberately, but they should inform—not replace—legal strategy and professional judgment. Full article content is under preparation.",
      tr: "Analitik modeller ekiplerin tarihsel örüntüleri düzenlemesine ve daha bilinçli hazırlık yapmasına yardımcı olabilir; ancak hukuki stratejinin ve mesleki değerlendirmenin yerini almamalı, yalnızca desteklemelidir. Tam makale içeriği hazırlık aşamasındadır.",
    },
  },
  {
    slug: "turning-legal-data-into-better-decisions",
    type: "article",
    category: "legal-operations",
    variant: "image-led",
    date: "2025-12-20",
    readTimeMinutes: 6,
    image: "/insights/legal-operations.jpg",
    imageAlt: {
      en: "Operational dashboard showing legal performance metrics",
      tr: "Hukuki performans metriklerini gösteren operasyon panosu",
    },
    title: {
      en: "Turning Legal Data into Better Operational Decisions",
      tr: "Hukuki Verileri Daha İyi Operasyonel Kararlara Dönüştürmek",
    },
    excerpt: {
      en: "A practical look at dashboards, reporting, and the role of reliable data in legal operations.",
      tr: "Hukuk operasyonlarında panoların, raporlamanın ve güvenilir verinin rolüne pratik bir bakış.",
    },
    introduction: {
      en: "Reliable operational data helps legal teams prioritize work, understand capacity, and communicate progress with clarity. This piece introduces the foundations of useful reporting. Full article content is under preparation.",
      tr: "Güvenilir operasyonel veri, hukuk ekiplerinin işleri önceliklendirmesine, kapasiteyi anlamasına ve ilerlemeyi net biçimde aktarmasına yardımcı olur. Bu yazı, faydalı raporlamanın temellerini tanıtır. Tam makale içeriği hazırlık aşamasındadır.",
    },
  },
  {
    slug: "2026-state-of-legal-operations-report",
    type: "report",
    category: "legal-operations",
    date: "2025-12-05",
    comingSoon: true,
    title: {
      en: "The 2026 State of Legal Operations Report",
      tr: "2026 Hukuk Operasyonları Raporu",
    },
    excerpt: {
      en: "A practical framework for evaluating legal workflows, technology priorities, data governance, and operational maturity.",
      tr: "Hukuki iş akışlarını, teknoloji önceliklerini, veri yönetişimini ve operasyonel olgunluğu değerlendirmeye yönelik pratik bir çerçeve.",
    },
    introduction: {
      en: "This forthcoming report will outline a practical framework for assessing legal operations maturity across workflow design, technology priorities, and data governance. The PDF will be available soon.",
      tr: "Yakında yayınlanacak bu rapor; iş akışı tasarımı, teknoloji öncelikleri ve veri yönetişimi üzerinden hukuk operasyonları olgunluğunu değerlendirmeye yönelik pratik bir çerçeve sunacaktır. PDF yakında erişilebilir olacaktır.",
    },
  },
  {
    slug: "building-responsible-ai-review-workflows",
    type: "article",
    category: "legal-tech",
    date: "2025-11-22",
    readTimeMinutes: 8,
    image: "/insights/load-more-1.jpg",
    imageAlt: {
      en: "Modern office workspace prepared for collaborative legal technology work",
      tr: "İş birlikçi hukuk teknolojisi çalışmaları için hazırlanmış modern ofis alanı",
    },
    title: {
      en: "Building Responsible AI Review Workflows Inside Law Firms",
      tr: "Hukuk Bürolarında Sorumlu Yapay Zekâ İnceleme Süreçleri Oluşturmak",
    },
    excerpt: {
      en: "Practical steps for introducing AI-assisted review without weakening professional oversight or client confidentiality.",
      tr: "Mesleki denetimi ve müvekkil gizliliğini zayıflatmadan yapay zekâ destekli incelemeyi devreye almak için pratik adımlar.",
    },
    introduction: {
      en: "Responsible adoption depends on clear ownership, documented review steps, and explicit boundaries for what AI systems may support. Full article content is under preparation.",
      tr: "Sorumlu benimseme; net sahiplik, belgelenmiş inceleme adımları ve yapay zekâ sistemlerinin destekleyebileceği konulara dair açık sınırlar gerektirir. Tam makale içeriği hazırlık aşamasındadır.",
    },
  },
  {
    slug: "designing-secure-client-collaboration-spaces",
    type: "article",
    category: "cybersecurity",
    date: "2025-11-08",
    readTimeMinutes: 7,
    image: "/insights/load-more-2.jpg",
    imageAlt: {
      en: "Professional working securely on a laptop in a quiet office",
      tr: "Sakin bir ofiste dizüstü bilgisayarında güvenli biçimde çalışan profesyonel",
    },
    title: {
      en: "Designing Secure Client Collaboration Spaces",
      tr: "Güvenli Müvekkil İş Birliği Alanları Tasarlamak",
    },
    excerpt: {
      en: "How firms can structure document sharing, permissions, and communication for clearer and more controlled collaboration.",
      tr: "Büroların belge paylaşımı, yetkilendirme ve iletişimi daha net ve kontrollü bir iş birliği için nasıl yapılandırabileceği.",
    },
    introduction: {
      en: "Secure collaboration is as much about process design as it is about technology. This article introduces a practical way to think about permissions, sharing, and accountability. Full article content is under preparation.",
      tr: "Güvenli iş birliği yalnızca teknolojiden ibaret değildir; süreç tasarımı da en az o kadar önemlidir. Bu yazı; yetkiler, paylaşım ve hesap verebilirlik üzerine pratik bir bakış sunar. Tam makale içeriği hazırlık aşamasındadır.",
    },
  },
];

export function getInsightBySlug(slug: string): InsightItem | undefined {
  return insights.find((item) => item.slug === slug);
}

export function getFeaturedInsight(): InsightItem {
  const featured = insights.find((item) => item.featured);
  if (!featured) {
    throw new Error("Featured insight is missing from insights data.");
  }
  return featured;
}

export function getListingInsights(): InsightItem[] {
  return insights.filter((item) => !item.featured);
}

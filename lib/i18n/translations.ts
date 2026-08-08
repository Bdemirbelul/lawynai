export type Locale = "en" | "tr";

export type ValueItem = {
  title: string;
  description: string;
};

export type ChallengeItem = {
  title: string;
  description: string;
};

export type SolutionItem = {
  title: string;
  description: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type SecurityPoint = {
  title: string;
  description: string;
};

export type Translations = {
  nav: {
    home: string;
    solutions: string;
    services: string;
    about: string;
    insights: string;
    contact: string;
    requestDemo: string;
    openMenu: string;
    closeMenu: string;
    userAccount: string;
  };
  hero: {
    badge: string;
    headlineBefore: string;
    headlineHighlight: string;
    headlineAfter: string;
    description: string;
    supporting: string;
    primaryCta: string;
    secondaryCta: string;
    trust: string;
  };
  mockup: {
    searchPlaceholder: string;
    analyzedTitle: string;
    analyzedMessage: string;
  };
  values: {
    label: string;
    items: [ValueItem, ValueItem, ValueItem, ValueItem];
  };
  problems: {
    heading: string;
    introduction: string;
    challenges: [ChallengeItem, ChallengeItem, ChallengeItem];
  };
  solutions: {
    heading: string;
    supporting: string;
    items: [
      SolutionItem,
      SolutionItem,
      SolutionItem,
      SolutionItem,
      SolutionItem,
      SolutionItem,
    ];
  };
  aiShowcase: {
    heading: string;
    description: string;
    disclaimer: string;
    product: {
      title: string;
      subtitle: string;
      activeMatters: string;
      deadlines: string;
      riskFlags: string;
      analysisTitle: string;
      analysisBody: string;
      summaryLabel: string;
      summaryBody: string;
      clauseLabel: string;
      deadlineLabel: string;
      riskLabel: string;
    };
  };
  process: {
    heading: string;
    supporting: string;
    steps: [ProcessStep, ProcessStep, ProcessStep, ProcessStep];
  };
  security: {
    badge: string;
    heading: string;
    introduction: string;
    points: [SecurityPoint, SecurityPoint, SecurityPoint, SecurityPoint];
    overviewTitle: string;
    rows: {
      systemStatus: string;
      systemValue: string;
      accessMonitoring: string;
      accessValue: string;
      latestBackup: string;
      backupValue: string;
    };
  };
  finalCta: {
    heading: string;
    supporting: string;
    primary: string;
    secondary: string;
  };
  footer: {
    description: string;
    solutionsTitle: string;
    resourcesTitle: string;
    contactTitle: string;
    solutions: [string, string, string, string];
    resources: [string, string, string, string];
    address: string;
    phone: string;
    email: string;
    copyright: string;
    privacy: string;
    cookies: string;
    kvkk: string;
    aiNotice: string;
    socialLinkedin: string;
    socialX: string;
    socialEmail: string;
  };
};

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      home: "Home",
      solutions: "Solutions",
      services: "Services",
      about: "About Us",
      insights: "Insights",
      contact: "Contact",
      requestDemo: "Request a Demo",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      userAccount: "User account",
    },
    hero: {
      badge: "Lawyn AI is now live",
      headlineBefore: "AI Solutions Built for the",
      headlineHighlight: "Future of Legal Practice",
      headlineAfter: "",
      description:
        "Digitize your operations, automate complex workflows, and manage sensitive legal data through a secure, AI-powered platform.",
      supporting: "Technology designed for modern legal professionals.",
      primaryCta: "Request a Demo",
      secondaryCta: "Explore Solutions",
      trust: "Secure and scalable technology built for legal professionals.",
    },
    mockup: {
      searchPlaceholder: "Search matters, contracts…",
      analyzedTitle: "Contract Analyzed",
      analyzedMessage: "AI detected 3 potential liability clauses.",
    },
    values: {
      label: "Core capabilities",
      items: [
        {
          title: "Legal-Focused Technology",
          description:
            "Solutions designed specifically for the workflows and operational needs of legal professionals.",
        },
        {
          title: "Secure Data Management",
          description:
            "Security-focused infrastructure designed to support controlled management of sensitive client and case data.",
        },
        {
          title: "AI-Powered Analysis",
          description:
            "AI-powered tools that support faster review of contracts, legal documents, and case materials.",
        },
        {
          title: "Tailored Solutions",
          description:
            "Software solutions that adapt to your firm’s size, workflows, and existing systems.",
        },
      ],
    },
    problems: {
      heading: "Overcoming the Bottlenecks of Modern Legal Practice",
      introduction:
        "Legal practice continues to evolve, yet disconnected systems and manual processes still limit many firms. Lawyn AI helps legal professionals reduce operational friction and focus on their expertise.",
      challenges: [
        {
          title: "Scattered Document Management",
          description:
            "Manage files, emails, and legal documents through a centralized and secure workspace instead of disconnected systems.",
        },
        {
          title: "Manual and Repetitive Tasks",
          description:
            "Reduce repetitive steps in document creation, task tracking, deadline monitoring, and data entry.",
        },
        {
          title: "Communication Gaps",
          description:
            "Manage team and client communication through a more transparent, organized, and secure structure.",
        },
      ],
    },
    solutions: {
      heading: "Comprehensive Legal Technology Solutions",
      supporting:
        "Everything you need to manage your practice, analyze documents, and serve clients more effectively through one integrated platform.",
      items: [
        {
          title: "AI Document Analysis",
          description:
            "Support faster identification of important clauses, dates, obligations, and potential risks.",
        },
        {
          title: "Case Management",
          description:
            "Manage matters, tasks, deadlines, and related documents through a centralized workspace.",
        },
        {
          title: "Document Automation",
          description:
            "Simplify the creation of standard legal documents through intelligent and customizable templates.",
        },
        {
          title: "Secure Client Portal",
          description:
            "Provide a secure digital environment for document sharing, status updates, and client communication.",
        },
        {
          title: "Task and Time Tracking",
          description:
            "Track tasks, time, expenses, and workload through a more organized process.",
        },
        {
          title: "Advanced Reporting",
          description:
            "Create customizable reports covering operations, matters, and team performance.",
        },
      ],
    },
    aiShowcase: {
      heading: "Augmenting Legal Expertise with Artificial Intelligence",
      description:
        "Lawyn AI supports legal professionals with AI-powered tools that review documents, highlight important clauses, extract critical information, and summarize complex content.",
      disclaimer:
        "Outputs generated by Lawyn AI are designed to support legal review. They do not replace professional judgment and do not constitute standalone legal advice.",
      product: {
        title: "Lawyn AI Workspace",
        subtitle: "Document analysis overview",
        activeMatters: "Active Matters",
        deadlines: "Upcoming Deadlines",
        riskFlags: "Risk Flags",
        analysisTitle: "Contract Review",
        analysisBody:
          "Key obligations, termination windows, and liability language highlighted for attorney review.",
        summaryLabel: "AI Summary",
        summaryBody:
          "Draft summary prepared for counsel. Three clauses may require closer review before negotiation.",
        clauseLabel: "Clauses reviewed",
        deadlineLabel: "Next deadline",
        riskLabel: "Priority flags",
      },
    },
    process: {
      heading: "A Seamless Transition to Modern Legal Technology",
      supporting:
        "Our structured implementation approach helps you adopt a system designed around your needs with minimal disruption.",
      steps: [
        {
          title: "Discovery",
          description:
            "We analyze your current workflows, priorities, challenges, and requirements.",
        },
        {
          title: "Solution Design",
          description:
            "We design a solution aligned with your team’s workflows and operational needs.",
        },
        {
          title: "Integration and Implementation",
          description:
            "We securely configure the system, complete the required integrations, and prepare it for use.",
        },
        {
          title: "Training and Ongoing Support",
          description:
            "We train your team and provide ongoing technical support after implementation.",
        },
      ],
    },
    security: {
      badge: "Enterprise-Grade Security Approach",
      heading: "Uncompromising Protection for Client Confidentiality",
      introduction:
        "Trust is fundamental to legal practice. Lawyn AI solutions are designed with a security-focused architecture that supports sensitive data protection and controlled access.",
      points: [
        {
          title: "End-to-End Data Protection",
          description:
            "Architecture prepared to support encryption in transit and at rest, depending on deployment requirements.",
        },
        {
          title: "Role-Based Access Control",
          description:
            "Access can be configured so teams only reach the matters and documents they need.",
        },
        {
          title: "Data Hosting Options",
          description:
            "Hosting approaches can be planned around your firm’s operational and residency preferences.",
        },
        {
          title: "Logging and Audit Trails",
          description:
            "Designed to support activity logging that helps teams review access and operational events.",
        },
      ],
      overviewTitle: "Security Overview",
      rows: {
        systemStatus: "System Status",
        systemValue: "Operational",
        accessMonitoring: "Access Monitoring",
        accessValue: "Active",
        latestBackup: "Latest Backup",
        backupValue: "Completed",
      },
    },
    finalCta: {
      heading: "Ready to Modernize Your Legal Practice?",
      supporting:
        "Let’s evaluate your needs and plan the right Lawyn AI solution for your legal practice.",
      primary: "Request a Demo",
      secondary: "Contact Us",
    },
    footer: {
      description:
        "We develop secure, efficient, and AI-powered software solutions for legal professionals.",
      solutionsTitle: "Solutions",
      resourcesTitle: "Resources",
      contactTitle: "Contact",
      solutions: [
        "Document Analysis",
        "Case Management",
        "Document Automation",
        "Secure Client Portal",
      ],
      resources: [
        "Insights",
        "Documentation",
        "AI Usage Principles",
        "FAQ",
      ],
      address: "[Company address to be added]",
      phone: "[Phone number to be added]",
      email: "[Email address to be added]",
      copyright: "© 2026 Lawyn AI. All rights reserved.",
      privacy: "Privacy Policy",
      cookies: "Cookie Policy",
      kvkk: "KVKK Information Notice",
      aiNotice: "AI Usage Notice",
      socialLinkedin: "LinkedIn (coming soon)",
      socialX: "X (coming soon)",
      socialEmail: "Email (coming soon)",
    },
  },
  tr: {
    nav: {
      home: "Ana Sayfa",
      solutions: "Çözümler",
      services: "Hizmetler",
      about: "Hakkımızda",
      insights: "İçgörüler",
      contact: "İletişim",
      requestDemo: "Demo Talep Et",
      openMenu: "Menüyü aç",
      closeMenu: "Menüyü kapat",
      userAccount: "Kullanıcı hesabı",
    },
    hero: {
      badge: "Lawyn AI artık yayında",
      headlineBefore: "",
      headlineHighlight: "Hukukun Geleceği",
      headlineAfter: " İçin Geliştirilen Yapay Zekâ Çözümleri",
      description:
        "Operasyonlarınızı dijitalleştirin, karmaşık iş akışlarını otomatikleştirin ve hassas hukuki verileri güvenli, yapay zekâ destekli bir platform üzerinden yönetin.",
      supporting: "Modern hukuk profesyonelleri için geliştirilen teknoloji.",
      primaryCta: "Demo Talep Et",
      secondaryCta: "Çözümleri İncele",
      trust: "Hukuk profesyonelleri için geliştirilen güvenli ve ölçeklenebilir teknoloji.",
    },
    mockup: {
      searchPlaceholder: "Dosya, sözleşme ara…",
      analyzedTitle: "Sözleşme Analiz Edildi",
      analyzedMessage: "YZ 3 potansiyel sorumluluk maddesi tespit etti.",
    },
    values: {
      label: "Temel yetkinlikler",
      items: [
        {
          title: "Hukuk Odaklı Teknoloji",
          description:
            "Hukuk profesyonellerinin iş akışlarına ve operasyonel ihtiyaçlarına özel geliştirilen çözümler.",
        },
        {
          title: "Güvenli Veri Yönetimi",
          description:
            "Hassas müvekkil ve dosya verilerinin kontrollü şekilde yönetilmesine yardımcı olan güvenlik odaklı altyapı.",
        },
        {
          title: "Yapay Zekâ Destekli Analiz",
          description:
            "Sözleşmeleri, hukuki belgeleri ve dosya içeriklerini daha hızlı incelemeyi destekleyen yapay zekâ araçları.",
        },
        {
          title: "İhtiyaca Özel Çözümler",
          description:
            "Büronuzun büyüklüğüne, çalışma modeline ve mevcut sistemlerine uyarlanabilen yazılım çözümleri.",
        },
      ],
    },
    problems: {
      heading: "Modern Hukuk Süreçlerindeki Engelleri Aşın",
      introduction:
        "Hukuk hizmetleri sürekli gelişirken, dağınık sistemler ve manuel süreçler birçok büronun verimliliğini sınırlandırıyor. Lawyn AI, hukuk profesyonellerinin operasyonel yükünü azaltmasına ve uzmanlıklarına odaklanmasına yardımcı olur.",
      challenges: [
        {
          title: "Dağınık Belge Yönetimi",
          description:
            "Dosyaları, e-postaları ve belgeleri birbirinden kopuk sistemlerde aramak yerine merkezi ve güvenli bir çalışma alanında yönetin.",
        },
        {
          title: "Manuel ve Tekrarlayan İşler",
          description:
            "Belge oluşturma, görev takibi, son tarih kontrolü ve veri girişindeki tekrarlayan adımları azaltın.",
        },
        {
          title: "İletişim Kopuklukları",
          description:
            "Ekip ve müvekkil iletişimini daha şeffaf, düzenli ve güvenli bir yapı üzerinden yönetin.",
        },
      ],
    },
    solutions: {
      heading: "Kapsamlı Hukuk Teknolojisi Çözümleri",
      supporting:
        "Büronuzu yönetmek, belgeleri incelemek ve müvekkillerinize daha etkili hizmet sunmak için ihtiyaç duyduğunuz araçlar tek bir bütünleşik platformda.",
      items: [
        {
          title: "Yapay Zekâ Destekli Doküman Analizi",
          description:
            "Önemli hükümleri, tarihleri, yükümlülükleri ve potansiyel riskleri daha hızlı belirlemeyi destekleyin.",
        },
        {
          title: "Dava ve Dosya Yönetimi",
          description:
            "Dosyaları, görevleri, son tarihleri ve ilgili belgeleri merkezi bir çalışma alanında yönetin.",
        },
        {
          title: "Doküman Otomasyonu",
          description:
            "Akıllı ve özelleştirilebilir şablonlarla standart belgelerin oluşturulma sürecini kolaylaştırın.",
        },
        {
          title: "Güvenli Müvekkil Portalı",
          description:
            "Belge paylaşımı, durum güncellemeleri ve müvekkil iletişimi için güvenli bir dijital ortam sağlayın.",
        },
        {
          title: "Görev ve Zaman Takibi",
          description:
            "Görevleri, süreleri, masrafları ve iş yükünü daha düzenli biçimde takip edin.",
        },
        {
          title: "Gelişmiş Raporlama",
          description:
            "Operasyonlar, dosyalar ve ekip performansı hakkında özelleştirilebilir raporlar oluşturun.",
        },
      ],
    },
    aiShowcase: {
      heading: "Hukuki Uzmanlığı Yapay Zekâ ile Güçlendirin",
      description:
        "Lawyn AI; belgeleri hızla inceleyen, önemli maddeleri işaretleyen, kritik bilgileri çıkaran ve karmaşık içerikleri özetleyen yapay zekâ destekli araçlarla hukuk profesyonellerine yardımcı olur.",
      disclaimer:
        "Lawyn AI tarafından üretilen çıktılar hukuki değerlendirmeyi desteklemek amacıyla sunulur; hukuk profesyonelinin incelemesinin yerine geçmez ve tek başına hukuki görüş niteliği taşımaz.",
      product: {
        title: "Lawyn AI Çalışma Alanı",
        subtitle: "Doküman analizi özeti",
        activeMatters: "Aktif Dosyalar",
        deadlines: "Yaklaşan Son Tarihler",
        riskFlags: "Risk İşaretleri",
        analysisTitle: "Sözleşme İncelemesi",
        analysisBody:
          "Temel yükümlülükler, fesih süreleri ve sorumluluk maddeleri avukat incelemesi için vurgulanır.",
        summaryLabel: "YZ Özeti",
        summaryBody:
          "Mütalaa için hazırlanan taslak özet. Müzakere öncesi daha yakından incelenmesi gereken üç madde belirlendi.",
        clauseLabel: "İncelenen maddeler",
        deadlineLabel: "Sonraki tarih",
        riskLabel: "Öncelikli işaretler",
      },
    },
    process: {
      heading: "Modern Hukuk Teknolojisine Sorunsuz Geçiş",
      supporting:
        "Planlı uygulama yaklaşımımız, mevcut işlerinizi aksatmadan ihtiyaçlarınıza uygun bir sisteme geçmenize yardımcı olur.",
      steps: [
        {
          title: "İhtiyaç Analizi",
          description:
            "Mevcut iş akışlarınızı, önceliklerinizi, sorunlarınızı ve ihtiyaçlarınızı birlikte analiz ederiz.",
        },
        {
          title: "Çözüm Tasarımı",
          description:
            "Ekibinizin çalışma biçimine ve operasyonel ihtiyaçlarına uygun çözümü tasarlarız.",
        },
        {
          title: "Entegrasyon ve Uygulama",
          description:
            "Sistemi güvenli biçimde yapılandırır, gerekli entegrasyonları gerçekleştirir ve kullanıma hazırlarız.",
        },
        {
          title: "Eğitim ve Sürekli Destek",
          description:
            "Ekibinize eğitim verir ve uygulama sonrasında sürekli teknik destek sağlarız.",
        },
      ],
    },
    security: {
      badge: "Kurumsal Düzeyde Güvenlik Yaklaşımı",
      heading: "Müvekkil Gizliliği İçin Tavizsiz Koruma",
      introduction:
        "Güven, hukuk hizmetlerinin temelidir. Lawyn AI çözümleri, hassas verilerin korunmasını ve kontrollü erişimi destekleyen güvenlik odaklı bir mimari yaklaşımıyla tasarlanır.",
      points: [
        {
          title: "Uçtan Uca Veri Koruması",
          description:
            "Dağıtım gereksinimlerine bağlı olarak aktarım ve saklama sırasında şifrelemeyi destekleyecek şekilde hazırlanan mimari.",
        },
        {
          title: "Rol Bazlı Erişim Kontrolü",
          description:
            "Ekiplerin yalnızca ihtiyaç duydukları dosya ve belgelere ulaşmasını sağlayacak şekilde yapılandırılabilir erişim.",
        },
        {
          title: "Veri Saklama Seçenekleri",
          description:
            "Barındırma yaklaşımları, büronuzun operasyonel ve yerleşiklik tercihleri doğrultusunda planlanabilir.",
        },
        {
          title: "Kayıt ve Denetim İzleri",
          description:
            "Erişim ve operasyonel olayların incelenmesine yardımcı olacak aktivite kayıtlarını destekleyecek şekilde tasarlanır.",
        },
      ],
      overviewTitle: "Güvenlik Özeti",
      rows: {
        systemStatus: "Sistem Durumu",
        systemValue: "Çalışıyor",
        accessMonitoring: "Erişim İzleme",
        accessValue: "Aktif",
        latestBackup: "Son Yedekleme",
        backupValue: "Tamamlandı",
      },
    },
    finalCta: {
      heading: "Hukuk Büronuzu Modernleştirmeye Hazır mısınız?",
      supporting:
        "İhtiyaçlarınızı değerlendirelim ve hukuk büronuza uygun Lawyn AI çözümünü birlikte planlayalım.",
      primary: "Demo Talep Et",
      secondary: "İletişime Geç",
    },
    footer: {
      description:
        "Hukuk profesyonelleri için güvenli, verimli ve yapay zekâ destekli yazılım çözümleri geliştiriyoruz.",
      solutionsTitle: "Çözümler",
      resourcesTitle: "Kaynaklar",
      contactTitle: "İletişim",
      solutions: [
        "Doküman Analizi",
        "Dava ve Dosya Yönetimi",
        "Doküman Otomasyonu",
        "Güvenli Müvekkil Portalı",
      ],
      resources: [
        "İçgörüler",
        "Dokümantasyon",
        "Yapay Zekâ Kullanım İlkeleri",
        "Sık Sorulan Sorular",
      ],
      address: "[Şirket adresi eklenecek]",
      phone: "[Telefon numarası eklenecek]",
      email: "[E-posta adresi eklenecek]",
      copyright: "© 2026 Lawyn AI. Tüm hakları saklıdır.",
      privacy: "Gizlilik Politikası",
      cookies: "Çerez Politikası",
      kvkk: "KVKK Aydınlatma Metni",
      aiNotice: "Yapay Zekâ Kullanım Bildirimi",
      socialLinkedin: "LinkedIn (yakında)",
      socialX: "X (yakında)",
      socialEmail: "E-posta (yakında)",
    },
  },
};

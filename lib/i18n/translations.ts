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
  insightsPage: {
    metaTitle: string;
    metaDescription: string;
    featuredBadge: string;
    featuredCta: string;
    latestHeading: string;
    filters: {
      all: string;
      "legal-tech": string;
      "ai-automation": string;
      cybersecurity: string;
      "digital-transformation": string;
    };
    categories: {
      "legal-tech": string;
      "ai-automation": string;
      cybersecurity: string;
      "digital-transformation": string;
      "legal-operations": string;
    };
    readArticle: string;
    listenNow: string;
    downloadReport: string;
    comingSoon: string;
    loadMore: string;
    minRead: string;
    podcastLabel: string;
    reportLabel: string;
    emptyFilter: string;
    newsletter: {
      heading: string;
      description: string;
      placeholder: string;
      button: string;
      notice: string;
      invalid: string;
      loading: string;
      success: string;
    };
    detail: {
      back: string;
      underPreparation: string;
      disclaimer: string;
    };
  };
  contactPage: {
    metaTitle: string;
    metaDescription: string;
    heading: string;
    description: string;
    officeLabel: string;
    phoneLabel: string;
    emailLabel: string;
    placeholders: {
      address: string;
      phone: string;
      email: string;
    };
    socialUnavailable: string;
    formTitle: string;
    formDescription: string;
    fields: {
      fullName: string;
      company: string;
      email: string;
      phone: string;
      teamSize: string;
      teamSizePlaceholder: string;
      solutionInterest: string;
      solutionPlaceholder: string;
      message: string;
      preferredContact: string;
      consentPrefix: string;
      privacyNotice: string;
      privacyPolicy: string;
      consentSuffix: string;
      and: string;
      noticeParticle: string;
      policyParticle: string;
    };
    teamSizes: {
      "1-5": string;
      "6-20": string;
      "21-50": string;
      "51-100": string;
      "101+": string;
    };
    solutions: {
      "ai-document-analysis": string;
      "case-management": string;
      "document-automation": string;
      "secure-client-portal": string;
      "reporting-analytics": string;
      "custom-software": string;
      "system-integration": string;
      "not-sure": string;
    };
    contactMethods: {
      email: string;
      phone: string;
      "online-meeting": string;
    };
    messageHint: string;
    submit: string;
    submitting: string;
    unconnected: string;
    error: string;
    nextHeading: string;
    nextDescription: string;
    steps: [
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string },
    ];
    legalDialog: {
      title: string;
      body: string;
      close: string;
    };
  };
  servicesPage: {
    metaTitle: string;
    metaDescription: string;
    badge: string;
    heading: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    capabilities: [
      { label: string; value: string },
      { label: string; value: string },
      { label: string; value: string },
    ];
    strip: [string, string, string, string];
    introHeading: string;
    introDescription: string;
    previous: string;
    next: string;
    whatWeProvide: string;
    learnMore: string;
    closeDetail: string;
    ctaHeading: string;
    ctaDescription: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  solutionsMenu: {
    eyebrow: string;
    title: string;
    description: string;
    exploreAll: string;
    categories: {
      documentIntelligence: string;
      legalWork: string;
      practiceManagement: string;
    };
    items: {
      contractReview: { title: string; description: string };
      documentAnalysis: { title: string; description: string };
      clauseComparison: { title: string; description: string };
      riskDetection: { title: string; description: string };
      documentSummarization: { title: string; description: string };
      legalResearch: { title: string; description: string };
      petitionDrafting: { title: string; description: string };
      legalWritingAssistant: { title: string; description: string };
      caseLawDiscovery: { title: string; description: string };
      citationVerification: { title: string; description: string };
      caseManagement: { title: string; description: string };
      deadlineTracking: { title: string; description: string };
      clientWorkspace: { title: string; description: string };
      teamCollaboration: { title: string; description: string };
      complianceMonitoring: { title: string; description: string };
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
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
    insightsPage: {
      metaTitle: "Insights — Lawyn AI",
      metaDescription:
        "Editorial insights on legal technology, responsible AI, cybersecurity, and digital transformation from Lawyn AI.",
      featuredBadge: "FEATURED",
      featuredCta: "Read Full Report",
      latestHeading: "Latest Insights",
      filters: {
        all: "All Topics",
        "legal-tech": "Legal Technology",
        "ai-automation": "AI & Automation",
        cybersecurity: "Cybersecurity",
        "digital-transformation": "Digital Transformation",
      },
      categories: {
        "legal-tech": "Legal Technology",
        "ai-automation": "AI & Automation",
        cybersecurity: "Cybersecurity",
        "digital-transformation": "Digital Transformation",
        "legal-operations": "Legal Operations",
      },
      readArticle: "Read Article",
      listenNow: "Listen Now",
      downloadReport: "Download Report (PDF)",
      comingSoon: "Coming Soon",
      loadMore: "Load More Articles",
      minRead: "min read",
      podcastLabel: "PODCAST",
      reportLabel: "WHITE PAPER",
      emptyFilter: "No insights match this category yet.",
      newsletter: {
        heading: "Stay Ahead of Legal Innovation",
        description:
          "Receive a carefully selected weekly briefing on legal technology, responsible AI, cybersecurity, and digital transformation.",
        placeholder: "Enter your work email",
        button: "Subscribe",
        notice:
          "By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.",
        invalid: "Please enter a valid work email address.",
        loading: "Checking…",
        success:
          "Thanks. Our newsletter subscription system will be available soon.",
      },
      detail: {
        back: "Back to Insights",
        underPreparation: "Editorial content under preparation",
        disclaimer:
          "Lawyn AI editorial content is intended for general informational purposes and does not constitute legal advice.",
      },
    },
    contactPage: {
      metaTitle: "Contact & Request a Demo | Lawyn AI",
      metaDescription:
        "Request a personalized Lawyn AI demonstration and discover software solutions designed for modern legal professionals.",
      heading: "Transform Your Legal Practice",
      description:
        "Request a personalized demonstration to discover how Lawyn AI can streamline your workflows, support secure document management, and help your team work more efficiently.",
      officeLabel: "Office",
      phoneLabel: "Direct Line",
      emailLabel: "Email",
      placeholders: {
        address: "[Office address to be added]",
        phone: "[Phone number to be added]",
        email: "[Email address to be added]",
      },
      socialUnavailable: "Link unavailable",
      formTitle: "Request a Demo",
      formDescription:
        "Complete the form and tell us about your needs. Our team will contact you to discuss the most suitable Lawyn AI solution.",
      fields: {
        fullName: "Full Name",
        company: "Law Firm / Company Name",
        email: "Work Email",
        phone: "Phone Number (Optional)",
        teamSize: "Team Size",
        teamSizePlaceholder: "Select Team Size",
        solutionInterest: "Solution Interest",
        solutionPlaceholder: "Select Primary Interest",
        message: "How can we help you? (Optional)",
        preferredContact: "Preferred Contact Method",
        consentPrefix: "I have read the",
        privacyNotice: "Privacy Notice",
        privacyPolicy: "Privacy Policy",
        consentSuffix:
          "and consent to the processing of my personal data for my demo request.",
        and: "and",
        noticeParticle: "",
        policyParticle: "",
      },
      teamSizes: {
        "1-5": "1–5",
        "6-20": "6–20",
        "21-50": "21–50",
        "51-100": "51–100",
        "101+": "101+",
      },
      solutions: {
        "ai-document-analysis": "AI Document Analysis",
        "case-management": "Case Management",
        "document-automation": "Document Automation",
        "secure-client-portal": "Secure Client Portal",
        "reporting-analytics": "Reporting and Analytics",
        "custom-software": "Custom Software Development",
        "system-integration": "System Integration",
        "not-sure": "Not Sure Yet",
      },
      contactMethods: {
        email: "Email",
        phone: "Phone",
        "online-meeting": "Online Meeting",
      },
      messageHint: "Maximum 1000 characters",
      submit: "Request Demo",
      submitting: "Submitting…",
      unconnected:
        "The demo request service has not been connected yet. Your form was validated, but no data was submitted.",
      error: "Something went wrong while preparing your request. Please try again.",
      nextHeading: "What Happens Next?",
      nextDescription:
        "Our structured onboarding process helps your team adopt Lawyn AI with minimal disruption to existing workflows.",
      steps: [
        {
          title: "Discovery",
          description:
            "We discuss your workflows, priorities, operational challenges, and technical requirements.",
        },
        {
          title: "Solution Design",
          description:
            "We prepare a solution plan designed around your firm’s working model and objectives.",
        },
        {
          title: "Integration",
          description:
            "We configure the platform and prepare the necessary data and system integrations.",
        },
        {
          title: "Ongoing Support",
          description:
            "We support your team with training, technical assistance, and continuous product improvements.",
        },
      ],
      legalDialog: {
        title: "Temporary draft notice",
        body: "This is temporary draft wording for Lawyn AI’s privacy materials. Final policy pages require legal review before production use.",
        close: "Close",
      },
    },
    servicesPage: {
      metaTitle: "Legal Technology Services | Lawyn AI",
      metaDescription:
        "Explore Lawyn AI services for custom software development, legal workflow automation, AI integration, cloud migration, cybersecurity, and technical consulting.",
      badge: "OUR EXPERTISE",
      heading: "The Preferred Technology Partner for Legal Innovators",
      description:
        "We design secure, scalable, and intuitive digital solutions for the operational needs of modern legal practices. From custom software and workflow automation to artificial intelligence integration, Lawyn AI turns complex requirements into practical technology.",
      primaryCta: "Discuss a Project",
      secondaryCta: "Explore Services",
      capabilities: [
        { label: "Delivery Model", value: "Modular" },
        { label: "Security Approach", value: "Security-First" },
        { label: "Platform Design", value: "Scalable" },
      ],
      strip: [
        "Security-First Architecture",
        "Privacy-Conscious Design",
        "Integration-Ready Systems",
        "Continuous Technical Partnership",
      ],
      introHeading: "Comprehensive Technical Solutions",
      introDescription:
        "We do more than write code. We analyze legal workflows, design reliable system architecture, and create technology that helps legal teams operate more efficiently and securely.",
      previous: "Previous service",
      next: "Next service",
      whatWeProvide: "What we provide",
      learnMore: "Learn More",
      closeDetail: "Close",
      ctaHeading: "Ready to Modernize Your Firm’s Technical Infrastructure?",
      ctaDescription:
        "Schedule a consultation to discuss your workflows, technical requirements, and the most suitable Lawyn AI services for your organization.",
      ctaPrimary: "Book Consultation",
      ctaSecondary: "Explore Solutions",
    },
    solutionsMenu: {
      eyebrow: "LAWYN AI SOLUTIONS",
      title: "AI-powered tools for every stage of legal work",
      description:
        "Review documents, research legal sources, manage matters and create stronger legal work in less time.",
      exploreAll: "Explore all solutions →",
      categories: {
        documentIntelligence: "Document Intelligence",
        legalWork: "Legal Work",
        practiceManagement: "Practice Management",
      },
      items: {
        contractReview: {
          title: "Contract Review",
          description: "Identify risks, obligations and unusual clauses.",
        },
        documentAnalysis: {
          title: "Document Analysis",
          description: "Turn complex legal documents into clear insights.",
        },
        clauseComparison: {
          title: "Clause Comparison",
          description: "Compare clauses across contracts and versions.",
        },
        riskDetection: {
          title: "Risk Detection",
          description: "Highlight legal, financial and compliance risks.",
        },
        documentSummarization: {
          title: "Document Summarization",
          description: "Create concise summaries of lengthy documents.",
        },
        legalResearch: {
          title: "Legal Research",
          description: "Research legislation, case law and legal sources.",
        },
        petitionDrafting: {
          title: "Petition Drafting",
          description: "Create structured first drafts for legal filings.",
        },
        legalWritingAssistant: {
          title: "Legal Writing Assistant",
          description: "Improve clarity, consistency and legal language.",
        },
        caseLawDiscovery: {
          title: "Case Law Discovery",
          description: "Find decisions related to your legal question.",
        },
        citationVerification: {
          title: "Citation Verification",
          description: "Check citations and supporting legal references.",
        },
        caseManagement: {
          title: "Case Management",
          description: "Organize matters, documents and case activity.",
        },
        deadlineTracking: {
          title: "Deadline Tracking",
          description: "Monitor hearings, filings and critical dates.",
        },
        clientWorkspace: {
          title: "Client Workspace",
          description: "Manage client information in one secure place.",
        },
        teamCollaboration: {
          title: "Team Collaboration",
          description: "Collaborate securely across legal teams.",
        },
        complianceMonitoring: {
          title: "Compliance Monitoring",
          description: "Track regulatory obligations and compliance tasks.",
        },
      },
      cta: {
        title: "Not sure which solution fits your team?",
        description:
          "Tell us about your legal workflow and we’ll help you find the right setup.",
        button: "Request a Demo",
      },
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
    insightsPage: {
      metaTitle: "İçgörüler — Lawyn AI",
      metaDescription:
        "Lawyn AI’den hukuk teknolojileri, sorumlu yapay zekâ, siber güvenlik ve dijital dönüşüm üzerine editoryal içerikler.",
      featuredBadge: "ÖNE ÇIKAN",
      featuredCta: "Raporu İncele",
      latestHeading: "Güncel İçgörüler",
      filters: {
        all: "Tüm Konular",
        "legal-tech": "Hukuk Teknolojileri",
        "ai-automation": "Yapay Zekâ ve Otomasyon",
        cybersecurity: "Siber Güvenlik",
        "digital-transformation": "Dijital Dönüşüm",
      },
      categories: {
        "legal-tech": "Hukuk Teknolojileri",
        "ai-automation": "Yapay Zekâ ve Otomasyon",
        cybersecurity: "Siber Güvenlik",
        "digital-transformation": "Dijital Dönüşüm",
        "legal-operations": "Hukuk Operasyonları",
      },
      readArticle: "Makaleyi Oku",
      listenNow: "Şimdi Dinle",
      downloadReport: "Raporu İndir (PDF)",
      comingSoon: "Yakında",
      loadMore: "Daha Fazla İçerik Yükle",
      minRead: "dk okuma",
      podcastLabel: "PODCAST",
      reportLabel: "RAPOR",
      emptyFilter: "Bu kategoriye ait içerik henüz bulunmuyor.",
      newsletter: {
        heading: "Hukuk Teknolojisindeki Yenilikleri Takip Edin",
        description:
          "Hukuk teknolojileri, sorumlu yapay zekâ, siber güvenlik ve dijital dönüşüm hakkında özenle seçilmiş haftalık içerikleri alın.",
        placeholder: "İş e-posta adresiniz",
        button: "Abone Ol",
        notice:
          "Abone olarak Gizlilik Politikamızı kabul etmiş olursunuz. Dilediğiniz zaman abonelikten ayrılabilirsiniz.",
        invalid: "Lütfen geçerli bir iş e-posta adresi girin.",
        loading: "Kontrol ediliyor…",
        success:
          "Teşekkürler. Bülten abonelik sistemimiz yakında kullanıma açılacaktır.",
      },
      detail: {
        back: "İçgörülere Dön",
        underPreparation: "Editoryal içerik hazırlık aşamasında",
        disclaimer:
          "Lawyn AI editoryal içerikleri genel bilgilendirme amaçlıdır ve hukuki tavsiye niteliği taşımaz.",
      },
    },
    contactPage: {
      metaTitle: "İletişim ve Demo Talebi | Lawyn AI",
      metaDescription:
        "Lawyn AI çözümlerini keşfetmek ve kişiselleştirilmiş bir demo talep etmek için bizimle iletişime geçin.",
      heading: "Hukuk Büronuzu Dönüştürün",
      description:
        "Lawyn AI’ın iş akışlarınızı nasıl kolaylaştırabileceğini, güvenli belge yönetimini nasıl destekleyebileceğini ve ekibinizin daha verimli çalışmasına nasıl yardımcı olabileceğini görmek için kişiselleştirilmiş bir demo talep edin.",
      officeLabel: "Ofis",
      phoneLabel: "Telefon",
      emailLabel: "E-posta",
      placeholders: {
        address: "[Ofis adresi eklenecek]",
        phone: "[Telefon numarası eklenecek]",
        email: "[E-posta adresi eklenecek]",
      },
      socialUnavailable: "Bağlantı henüz yok",
      formTitle: "Demo Talep Edin",
      formDescription:
        "Formu doldurarak ihtiyaçlarınızı bizimle paylaşın. Ekibimiz, size en uygun Lawyn AI çözümünü görüşmek üzere sizinle iletişime geçsin.",
      fields: {
        fullName: "Ad Soyad",
        company: "Hukuk Bürosu / Şirket Adı",
        email: "İş E-postası",
        phone: "Telefon Numarası (İsteğe Bağlı)",
        teamSize: "Ekip Büyüklüğü",
        teamSizePlaceholder: "Ekip Büyüklüğünü Seçin",
        solutionInterest: "İlgilenilen Çözüm",
        solutionPlaceholder: "Öncelikli İlgi Alanınızı Seçin",
        message: "Size nasıl yardımcı olabiliriz? (İsteğe Bağlı)",
        preferredContact: "Tercih Edilen İletişim Yöntemi",
        consentPrefix: "",
        privacyNotice: "KVKK Aydınlatma Metni",
        privacyPolicy: "Gizlilik Politikası",
        consentSuffix:
          "’nı okudum; demo talebim kapsamında kişisel verilerimin işlenmesini kabul ediyorum.",
        and: "ve",
        noticeParticle: "’ni",
        policyParticle: "’nı",
      },
      teamSizes: {
        "1-5": "1–5",
        "6-20": "6–20",
        "21-50": "21–50",
        "51-100": "51–100",
        "101+": "101+",
      },
      solutions: {
        "ai-document-analysis": "Yapay Zekâ Destekli Doküman Analizi",
        "case-management": "Dava ve Dosya Yönetimi",
        "document-automation": "Doküman Otomasyonu",
        "secure-client-portal": "Güvenli Müvekkil Portalı",
        "reporting-analytics": "Raporlama ve Analitik",
        "custom-software": "Özel Yazılım Geliştirme",
        "system-integration": "Sistem Entegrasyonu",
        "not-sure": "Henüz Emin Değilim",
      },
      contactMethods: {
        email: "E-posta",
        phone: "Telefon",
        "online-meeting": "Çevrim İçi Görüşme",
      },
      messageHint: "En fazla 1000 karakter",
      submit: "Demo Talep Et",
      submitting: "Gönderiliyor…",
      unconnected:
        "Demo talebi sistemi henüz bağlanmadı. Formunuz doğrulandı ancak herhangi bir veri gönderilmedi.",
      error: "Talebiniz hazırlanırken bir sorun oluştu. Lütfen tekrar deneyin.",
      nextHeading: "Sonraki Adımlar Neler?",
      nextDescription:
        "Planlı başlangıç sürecimiz, mevcut iş akışlarınızı mümkün olduğunca az etkileyerek ekibinizin Lawyn AI’a geçişini kolaylaştırır.",
      steps: [
        {
          title: "İhtiyaç Analizi",
          description:
            "İş akışlarınızı, önceliklerinizi, operasyonel sorunlarınızı ve teknik ihtiyaçlarınızı birlikte değerlendiririz.",
        },
        {
          title: "Çözüm Tasarımı",
          description:
            "Büronuzun çalışma biçimine ve hedeflerine uygun bir çözüm planı hazırlarız.",
        },
        {
          title: "Entegrasyon",
          description:
            "Platformu yapılandırır, gerekli veri ve sistem entegrasyonlarını kullanıma hazırlarız.",
        },
        {
          title: "Sürekli Destek",
          description:
            "Eğitim, teknik yardım ve sürekli ürün iyileştirmeleriyle ekibinizi destekleriz.",
        },
      ],
      legalDialog: {
        title: "Geçici taslak bildirim",
        body: "Bu metin, Lawyn AI gizlilik belgelerine ait geçici bir taslaktır. Nihai politika sayfaları üretim öncesi hukuki inceleme gerektirir.",
        close: "Kapat",
      },
    },
    servicesPage: {
      metaTitle: "Hukuk Teknolojisi Hizmetleri | Lawyn AI",
      metaDescription:
        "Özel yazılım geliştirme, hukuki iş akışı otomasyonu, yapay zekâ entegrasyonu, bulut geçişi, siber güvenlik ve teknik danışmanlık hizmetlerimizi keşfedin.",
      badge: "UZMANLIĞIMIZ",
      heading: "Hukukta Yenilik Üretenlerin Teknoloji Ortağı",
      description:
        "Modern hukuk uygulamalarının operasyonel ihtiyaçları için güvenli, ölçeklenebilir ve kullanıcı dostu dijital çözümler tasarlıyoruz. Özel yazılım geliştirmeden iş akışı otomasyonuna ve yapay zekâ entegrasyonuna kadar karmaşık ihtiyaçları uygulanabilir teknolojilere dönüştürüyoruz.",
      primaryCta: "Projenizi Konuşalım",
      secondaryCta: "Hizmetleri İncele",
      capabilities: [
        { label: "Teslimat Modeli", value: "Modüler" },
        { label: "Güvenlik Yaklaşımı", value: "Güvenlik Öncelikli" },
        { label: "Platform Tasarımı", value: "Ölçeklenebilir" },
      ],
      strip: [
        "Güvenlik Öncelikli Mimari",
        "Veri Gizliliği Odaklı Tasarım",
        "Entegrasyona Hazır Sistemler",
        "Sürekli Teknik İş Ortaklığı",
      ],
      introHeading: "Kapsamlı Teknik Çözümler",
      introDescription:
        "Yalnızca kod yazmıyoruz. Hukuki iş akışlarını analiz ediyor, güvenilir sistem mimarileri tasarlıyor ve hukuk ekiplerinin daha verimli ve güvenli çalışmasını destekleyen teknolojiler geliştiriyoruz.",
      previous: "Önceki hizmet",
      next: "Sonraki hizmet",
      whatWeProvide: "Neler sunuyoruz",
      learnMore: "Detayları Gör",
      closeDetail: "Kapat",
      ctaHeading: "Büronuzun Teknolojik Altyapısını Modernleştirmeye Hazır mısınız?",
      ctaDescription:
        "İş akışlarınızı, teknik ihtiyaçlarınızı ve kurumunuza en uygun Lawyn AI hizmetlerini görüşmek için bir danışmanlık görüşmesi planlayın.",
      ctaPrimary: "Görüşme Planla",
      ctaSecondary: "Çözümleri İncele",
    },
    solutionsMenu: {
      eyebrow: "LAWYN AI ÇÖZÜMLERİ",
      title: "Hukuki çalışmaların her aşaması için yapay zekâ destekli araçlar",
      description:
        "Belgeleri inceleyin, hukuki kaynaklarda araştırma yapın, dosyalarınızı yönetin ve daha güçlü hukuki çalışmalar oluşturun.",
      exploreAll: "Tüm çözümleri keşfedin →",
      categories: {
        documentIntelligence: "Belge Zekâsı",
        legalWork: "Hukuki Çalışmalar",
        practiceManagement: "Hukuk Bürosu Yönetimi",
      },
      items: {
        contractReview: {
          title: "Sözleşme İncelemesi",
          description:
            "Riskleri, yükümlülükleri ve olağan dışı maddeleri belirleyin.",
        },
        documentAnalysis: {
          title: "Belge Analizi",
          description:
            "Karmaşık hukuki belgeleri anlaşılır içgörülere dönüştürün.",
        },
        clauseComparison: {
          title: "Madde Karşılaştırması",
          description:
            "Farklı sözleşme ve versiyonlardaki maddeleri karşılaştırın.",
        },
        riskDetection: {
          title: "Risk Tespiti",
          description: "Hukuki, finansal ve uyumluluk risklerini belirleyin.",
        },
        documentSummarization: {
          title: "Belge Özetleme",
          description:
            "Uzun belgeler için kısa ve anlaşılır özetler oluşturun.",
        },
        legalResearch: {
          title: "Hukuki Araştırma",
          description: "Mevzuat, içtihat ve hukuki kaynaklarda araştırma yapın.",
        },
        petitionDrafting: {
          title: "Dilekçe Hazırlama",
          description:
            "Hukuki başvurular için düzenli ilk taslaklar oluşturun.",
        },
        legalWritingAssistant: {
          title: "Hukuki Yazım Asistanı",
          description:
            "Metinlerin açıklığını, tutarlılığını ve hukuki dilini geliştirin.",
        },
        caseLawDiscovery: {
          title: "İçtihat Keşfi",
          description: "Hukuki sorunuzla ilgili mahkeme kararlarını bulun.",
        },
        citationVerification: {
          title: "Atıf Doğrulama",
          description:
            "Atıfları ve destekleyici hukuki kaynakları kontrol edin.",
        },
        caseManagement: {
          title: "Dava ve Dosya Yönetimi",
          description: "Dosyaları, belgeleri ve dava faaliyetlerini düzenleyin.",
        },
        deadlineTracking: {
          title: "Son Tarih Takibi",
          description:
            "Duruşmaları, başvuruları ve kritik tarihleri takip edin.",
        },
        clientWorkspace: {
          title: "Müvekkil Çalışma Alanı",
          description: "Müvekkil bilgilerini güvenli bir alanda yönetin.",
        },
        teamCollaboration: {
          title: "Ekip İş Birliği",
          description:
            "Hukuk ekipleri arasında güvenli şekilde birlikte çalışın.",
        },
        complianceMonitoring: {
          title: "Uyumluluk Takibi",
          description:
            "Düzenleyici yükümlülükleri ve uyumluluk görevlerini takip edin.",
        },
      },
      cta: {
        title: "Ekibiniz için hangi çözümün uygun olduğundan emin değil misiniz?",
        description:
          "Hukuki çalışma sürecinizi anlatın, size en uygun yapıyı birlikte belirleyelim.",
        button: "Demo Talep Et",
      },
    },
  },
};

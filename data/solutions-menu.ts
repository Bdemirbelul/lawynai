import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  CalendarClock,
  FileSearch,
  FileText,
  Files,
  PenLine,
  Scale,
  ScanText,
  ShieldAlert,
  ShieldCheck,
  UserRoundCheck,
  Users,
  WandSparkles,
} from "lucide-react";
import type { Translations } from "@/lib/i18n/translations";

export type SolutionMenuItemKey = keyof Translations["solutionsMenu"]["items"];

export type SolutionMenuCategoryKey =
  keyof Translations["solutionsMenu"]["categories"];

export type SolutionMenuItem = {
  slug: string;
  icon: LucideIcon;
  translationKey: SolutionMenuItemKey;
};

export type SolutionMenuCategory = {
  id: string;
  categoryKey: SolutionMenuCategoryKey;
  items: SolutionMenuItem[];
};

/** Base path for solution links — `/services` exists in this project. */
export const SOLUTIONS_BASE_PATH = "/services";

export const SOLUTIONS_EXPLORE_HREF = "/#solutions";

export const SOLUTIONS_DEMO_HREF = "/contact#contact";

export const solutionsMenuCategories: SolutionMenuCategory[] = [
  {
    id: "document-intelligence",
    categoryKey: "documentIntelligence",
    items: [
      {
        slug: "contract-review",
        icon: FileSearch,
        translationKey: "contractReview",
      },
      {
        slug: "document-analysis",
        icon: ScanText,
        translationKey: "documentAnalysis",
      },
      {
        slug: "clause-comparison",
        icon: Files,
        translationKey: "clauseComparison",
      },
      {
        slug: "risk-detection",
        icon: ShieldAlert,
        translationKey: "riskDetection",
      },
      {
        slug: "document-summarization",
        icon: FileText,
        translationKey: "documentSummarization",
      },
    ],
  },
  {
    id: "legal-work",
    categoryKey: "legalWork",
    items: [
      {
        slug: "legal-research",
        icon: BookOpen,
        translationKey: "legalResearch",
      },
      {
        slug: "petition-drafting",
        icon: PenLine,
        translationKey: "petitionDrafting",
      },
      {
        slug: "legal-writing-assistant",
        icon: WandSparkles,
        translationKey: "legalWritingAssistant",
      },
      {
        slug: "case-law-discovery",
        icon: Scale,
        translationKey: "caseLawDiscovery",
      },
      {
        slug: "citation-verification",
        icon: BadgeCheck,
        translationKey: "citationVerification",
      },
    ],
  },
  {
    id: "practice-management",
    categoryKey: "practiceManagement",
    items: [
      {
        slug: "case-management",
        icon: BriefcaseBusiness,
        translationKey: "caseManagement",
      },
      {
        slug: "deadline-tracking",
        icon: CalendarClock,
        translationKey: "deadlineTracking",
      },
      {
        slug: "client-workspace",
        icon: Users,
        translationKey: "clientWorkspace",
      },
      {
        slug: "team-collaboration",
        icon: UserRoundCheck,
        translationKey: "teamCollaboration",
      },
      {
        slug: "compliance-monitoring",
        icon: ShieldCheck,
        translationKey: "complianceMonitoring",
      },
    ],
  },
];

export function getSolutionHref(slug: string): string {
  return `${SOLUTIONS_BASE_PATH}#${slug}`;
}

import { Guide } from "@/types/content";

export const guides: Guide[] = [
  {
    id: "example-study-abroad-guide",
    contentType: "guide",

    title: "How to Study Abroad",
    description:
      "A temporary guide explaining the main steps for Moroccan students who want to study abroad.",

    mainCategory: "Guides & Resources",
    subCategory: "Study Abroad",
    tags: ["Study Abroad", "Students", "Example"],

    locationType: "Abroad",
    country: "Multiple Countries",

    targetAudience: ["Students"],
    language: ["English"],

    sourceUrl: "https://example.com",
    officialUrl: "https://example.com",

    verificationStatus: "Verified",
    lastVerified: "2026-08-10",

    guideType: "Study Abroad",

    content:
      "This is placeholder guide content used for development and testing.",

    relatedOpportunityIds: ["example-scholarship"],
  },
];
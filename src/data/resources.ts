import { Resource } from "@/types/content";

export const resources: Resource[] = [
  {
    id: "example-official-resource",
    contentType: "resource",

    title: "Example Official Resource",
    description:
      "A temporary example resource used to test the Resources & Useful Links content system.",

    mainCategory: "Guides & Resources",
    subCategory: "Useful Links",
    tags: ["Official", "Resource", "Example"],

    locationType: "International",
    country: "Multiple Countries",

    targetAudience: ["Students", "Job Seekers"],
    language: ["English"],

    sourceUrl: "https://example.com",
    officialUrl: "https://example.com",

    verificationStatus: "Verified",
    lastVerified: "2026-08-10",

    resourceType: "Official Website",

    resourceUrl: "https://example.com",

    relatedGuideIds: ["example-study-abroad-guide"],
    relatedOpportunityIds: ["example-scholarship"],
  },
];
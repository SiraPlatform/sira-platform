import { Opportunity } from "@/types/content";

export const opportunities: Opportunity[] = [
  {
    id: "example-scholarship",
    contentType: "opportunity",

    title: "Example Scholarship",
    organization: "Example Organization",
    description:
      "This is a temporary example opportunity used for development and testing.",

    mainCategory: "Studies",
    subCategory: "Scholarships",
    tags: ["Scholarship", "Example"],

    locationType: "Abroad",
    country: "Germany",
    city: "Berlin",

    targetAudience: ["Students"],
    language: ["English"],

    sourceUrl: "https://example.com",
    officialUrl: "https://example.com",

    verificationStatus: "Verified",
    lastVerified: "2026-08-09",

    opportunityType: "Scholarship",

    eligibility:
      "This is placeholder eligibility information.",
    eligibleNationalities: ["Morocco"],

    ageRequirement: "18–30",
    educationRequirement: "Bachelor's degree",
    experienceRequirement: "Not required",

    benefits: [
      "Tuition coverage",
      "Monthly stipend",
    ],

    funding: "Fully funded",

    costType: "Fully Funded",

    applicationOpenDate: "2026-08-01",
    deadline: "2026-12-31",

    applicationMethod: "Online application",

    applicationRequirements: [
      "Example requirement 1",
      "Example requirement 2",
    ],

    applicationUrl: "https://example.com",
  },
];
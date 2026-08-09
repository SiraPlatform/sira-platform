import { Community } from "@/types/content";

export const communities: Community[] = [
  {
    id: "example-moroccan-students-community",
    contentType: "community",

    title: "Example Moroccan Students Community",
    description:
      "A temporary example community used to test the Communities & Networks content system.",

    mainCategory: "Studies",
    subCategory: "Communities & Networks",
    tags: ["Moroccan Students", "Community", "Example"],

    locationType: "Abroad",
    country: "Germany",

    targetAudience: ["Students"],
    language: ["English", "French"],

    sourceUrl: "https://example.com",
    officialUrl: "https://example.com",

    verificationStatus: "Verified",
    lastVerified: "2026-08-10",

    platform: "Facebook",
    communityType: "Independent",

    communityUrl: "https://example.com",

    membershipInfo: "Open to Moroccan students interested in Germany.",
  },
];
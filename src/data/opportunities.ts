export type Opportunity = {
  id: string;
  title: string;
  category: string;
  organization: string;
  country: string;
  opportunityType: string;
  description: string;
  eligibility: string;
  requirements: string[];
  deadline: string;
  cost: string;
  language: string;
  officialUrl: string;
  sourceUrl: string;
  verifiedDate: string;
};

export const opportunities: Opportunity[] = [
  {
    id: "example-scholarship",
    title: "Example Scholarship",
    category: "Scholarships",
    organization: "Example Organization",
    country: "International",
    opportunityType: "Scholarship",
    description:
      "This is a temporary example opportunity used for development and testing.",
    eligibility:
      "This is placeholder eligibility information.",
    requirements: [
      "Example requirement 1",
      "Example requirement 2",
    ],
    deadline: "2026-12-31",
    cost: "Free",
    language: "English",
    officialUrl: "https://example.com",
    sourceUrl: "https://example.com",
    verifiedDate: "2026-08-08",
  },
];
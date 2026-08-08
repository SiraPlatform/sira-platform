export type Opportunity = {
  id: string;
  title: string;
  category: string;
  organization: string;
  country: string;
  description: string;
  deadline: string;
  officialUrl: string;
  verifiedDate: string;
};

export const opportunities: Opportunity[] = [
  {
    id: "example-scholarship",
    title: "Example Scholarship",
    category: "Scholarships",
    organization: "Example Organization",
    country: "International",
    description:
      "This is a temporary example opportunity. We will replace it with a real verified opportunity later.",
    deadline: "2026-12-31",
    officialUrl: "https://example.com",
    verifiedDate: "2026-08-08",
  },
];
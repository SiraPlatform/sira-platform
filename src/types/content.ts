export type ContentType =
  | "opportunity"
  | "guide"
  | "community"
  | "resource";

export type MainCategory =
  | "Studies"
  | "Jobs"
  | "Remote Work"
  | "Entrepreneurship"
  | "Volunteering"
  | "Guides & Resources";

export type LocationType =
  | "Morocco"
  | "Abroad"
  | "Remote"
  | "International"
  | "Multiple Countries";

export type VerificationStatus =
  | "Verified"
  | "Needs Verification"
  | "Expired"
  | "Archived";

export type Audience =
  | "Students"
  | "Graduates"
  | "Job Seekers"
  | "Professionals"
  | "Entrepreneurs"
  | "Researchers"
  | "Volunteers";

export type ContentItem = {
  id: string;
  contentType: ContentType;

  title: string;
  description: string;

  mainCategory: MainCategory;
  subCategory: string;
  tags: string[];

  locationType: LocationType;
  country?: string;
  city?: string;

  targetAudience: Audience[];
  language: string[];

  sourceUrl: string;
  officialUrl?: string;

  verificationStatus: VerificationStatus;
  lastVerified: string;
};

export type Opportunity = ContentItem & {
  contentType: "opportunity";
  organization: string;
  opportunityType: string;

  eligibility: string;
  eligibleNationalities: string[];

  ageRequirement?: string;
  educationRequirement?: string;
  experienceRequirement?: string;

  benefits: string[];
  funding?: string;

  costType:
    | "Free"
    | "Paid"
    | "Partially Funded"
    | "Fully Funded"
    | "Varies";

  applicationOpenDate?: string;
  deadline?: string;

  applicationMethod?: string;
  applicationRequirements: string[];
  applicationUrl: string;
};

export type Guide = ContentItem & {
  contentType: "guide";

  guideType:
    | "Study Abroad"
    | "Finding a Job Abroad"
    | "Legal Migration"
    | "Practical Guide";

  content: string;

  relatedOpportunityIds?: string[];
  relatedCommunityIds?: string[];
  relatedResourceIds?: string[];
};
export type Community = ContentItem & {
  contentType: "community";

  platform:
    | "Facebook"
    | "LinkedIn"
    | "WhatsApp"
    | "Telegram"
    | "Discord"
    | "Other";

  communityType:
    | "Official"
    | "Recognized"
    | "Independent"
    | "Public Community";

  communityUrl: string;

  membershipInfo?: string;
};

export type Resource = ContentItem & {
  contentType: "resource";

  resourceType:
    | "Official Website"
    | "Government Portal"
    | "University Portal"
    | "Application Portal"
    | "Career Platform"
    | "Information Website"
    | "Tool"
    | "Other";

  resourceUrl: string;

  relatedOpportunityIds?: string[];
  relatedGuideIds?: string[];
};


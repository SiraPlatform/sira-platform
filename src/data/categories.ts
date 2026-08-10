export type CategoryNode = {
  name: string;
  slug: string;
  description?: string;
  children?: CategoryNode[];
};

export const categories: CategoryNode[] = [
  {
    name: "Studies",
    slug: "studies",
    description:
      "Explore study opportunities in Morocco and abroad.",
    children: [
      {
        name: "Morocco",
        slug: "morocco",
        children: [
          {
            name: "Scholarships",
            slug: "scholarships",
          },
          {
            name: "Fellowships",
            slug: "fellowships",
          },
          {
            name: "Study Opportunities",
            slug: "study-opportunities",
          },
        ],
      },
      {
        name: "Abroad",
        slug: "abroad",
        children: [
          {
            name: "Scholarships",
            slug: "scholarships",
          },
          {
            name: "Fellowships",
            slug: "fellowships",
          },
          {
            name: "Study Opportunities",
            slug: "study-opportunities",
          },
        ],
      },
    ],
  },

  {
    name: "Jobs",
    slug: "jobs",
    description:
      "Explore employment, internships, and work pathways.",
    children: [
      {
        name: "Morocco",
        slug: "morocco",
        children: [
          {
            name: "Jobs",
            slug: "jobs",
          },
          {
            name: "Internships",
            slug: "internships",
          },
        ],
      },
      {
        name: "Abroad",
        slug: "abroad",
        children: [
          {
            name: "Jobs",
            slug: "jobs",
          },
          {
            name: "Internships",
            slug: "internships",
          },
          {
            name: "Legal Migration",
            slug: "legal-migration",
          },
          {
            name: "Work Visas",
            slug: "work-visas",
          },
          {
            name: "Study-to-Work Pathways",
            slug: "study-to-work-pathways",
          },
        ],
      },
    ],
  },

  {
    name: "Remote Work",
    slug: "remote-work",
    description:
      "Explore remote employment and freelancing opportunities.",
    children: [
      {
        name: "Remote Jobs",
        slug: "remote-jobs",
      },
      {
        name: "Freelancing",
        slug: "freelancing",
      },
    ],
  },

  {
    name: "Entrepreneurship",
    slug: "entrepreneurship",
    description:
      "Discover support for starting and growing a business.",
    children: [
      {
        name: "Grants",
        slug: "grants",
      },
      {
        name: "Incubators",
        slug: "incubators",
      },
      {
        name: "Accelerators",
        slug: "accelerators",
      },
    ],
  },

  {
    name: "Volunteering",
    slug: "volunteering",
    description:
      "Find volunteering opportunities in Morocco and internationally.",
    children: [
      {
        name: "Morocco",
        slug: "morocco",
        children: [
          {
            name: "Projects",
            slug: "projects",
          },
          {
            name: "Associations",
            slug: "associations",
          },
          {
            name: "Other",
            slug: "other",
          },
        ],
      },
      {
        name: "International",
        slug: "international",
        children: [
          {
            name: "Programs",
            slug: "programs",
          },
          {
            name: "Associations",
            slug: "associations",
          },
          {
            name: "Other",
            slug: "other",
          },
        ],
      },
    ],
  },

  {
    name: "Guides & Resources",
    slug: "guides-resources",
    description:
      "Practical guides and useful information for making informed decisions.",
    children: [
      {
        name: "How to Study Abroad",
        slug: "study-abroad",
      },
      {
        name: "How to Find a Job Abroad",
        slug: "job-abroad",
      },
      {
        name: "How Legal Migration Works",
        slug: "legal-migration",
      },
      {
        name: "Practical Guides",
        slug: "practical-guides",
      },
    ],
  },

  {
    name: "Communities",
    slug: "communities",
    description:
      "Discover communities and networks where Moroccan youth can connect.",
    children: [
      {
        name: "Studies",
        slug: "studies",
      },
      {
        name: "Jobs",
        slug: "jobs",
      },
      {
        name: "Remote Work",
        slug: "remote-work",
      },
      {
        name: "Entrepreneurship",
        slug: "entrepreneurship",
      },
      {
        name: "Volunteering",
        slug: "volunteering",
      },
    ],
  },
];
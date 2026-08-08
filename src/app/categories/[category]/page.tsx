import { opportunities } from "@/data/opportunities";
import { notFound } from "next/navigation";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

const categoryNames: Record<string, string> = {
  scholarships: "Scholarships",
  internships: "Internships",
  jobs: "Jobs",
  "remote-jobs": "Remote Jobs",
  "legal-migration": "Legal Migration",
  entrepreneurship: "Entrepreneurship",
  fellowships: "Fellowships",
  volunteering: "Volunteering",
  education: "Education",
};

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { category } = await params;

  const categoryName = categoryNames[category];

  if (!categoryName) {
    notFound();
  }

  const categoryOpportunities = opportunities.filter(
    (opportunity) => opportunity.category === categoryName
  );

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <a
            href="/"
            className="text-xl font-bold hover:text-blue-600"
          >
            Opportunity Platform
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <a
          href="/categories"
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          ← Back to categories
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          {categoryName}
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Explore verified opportunities and information in this
          category.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categoryOpportunities.map((opportunity) => (
            <a
              key={opportunity.id}
              href={`/opportunities/${opportunity.id}`}
              className="block rounded-xl border border-gray-200 p-6 transition hover:border-blue-400 hover:shadow-md"
            >
              <p className="text-sm font-medium text-blue-600">
                {opportunity.category}
              </p>

              <h2 className="mt-2 text-xl font-semibold">
                {opportunity.title}
              </h2>

              <p className="mt-3 text-sm text-gray-600">
                {opportunity.description}
              </p>

              <div className="mt-4 text-sm text-gray-500">
                <p>
                  Organization: {opportunity.organization}
                </p>

                <p>
                  Country: {opportunity.country}
                </p>

                <p>
                  Deadline: {opportunity.deadline}
                </p>
              </div>

              <span className="mt-5 inline-block font-medium text-blue-600">
                View opportunity →
              </span>
            </a>
          ))}
        </div>

        {categoryOpportunities.length === 0 && (
          <div className="mt-12 rounded-xl border border-dashed border-gray-300 p-10 text-center">
            <p className="text-gray-500">
              No opportunities available in this category yet.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
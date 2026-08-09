import { opportunities } from "@/data/opportunities";
import { notFound } from "next/navigation";

type OpportunityPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OpportunityPage({
  params,
}: OpportunityPageProps) {
  const { id } = await params;

  const opportunity = opportunities.find(
    (item) => item.id === id
  );

  if (!opportunity) {
    notFound();
  }

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

      <div className="mx-auto max-w-4xl px-6 py-16">
        <a
          href="/"
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          ← Back to home
        </a>

        <div className="mt-8">
          <p className="text-sm font-medium text-blue-600">
            {opportunity.subCategory}
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            {opportunity.title}
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            {opportunity.organization}
          </p>

          {/* Key information */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-gray-50 p-5">
              <p className="text-sm text-gray-500">
                Opportunity type
              </p>
              <p className="mt-1 font-medium">
                {opportunity.opportunityType}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5">
              <p className="text-sm text-gray-500">
                Country / Location
              </p>
              <p className="mt-1 font-medium">
                {opportunity.country}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5">
              <p className="text-sm text-gray-500">
                Deadline
              </p>
              <p className="mt-1 font-medium">
                {opportunity.deadline}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5">
              <p className="text-sm text-gray-500">
                Cost
              </p>
              <p className="mt-1 font-medium">
                {opportunity.costType}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5">
              <p className="text-sm text-gray-500">
                Language
              </p>
              <p className="mt-1 font-medium">
                {opportunity.language}
              </p>
            </div>
          </div>

          {/* Description */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold">
              About this opportunity
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              {opportunity.description}
            </p>
          </section>

          {/* Eligibility */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold">
              Eligibility
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              {opportunity.eligibility}
            </p>
          </section>

          {/* Requirements */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold">
              Requirements
            </h2>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              {opportunity.applicationRequirements.map(
                (requirement) => (
                  <li key={requirement}>
                    {requirement}
                  </li>
                )
              )}
            </ul>
          </section>

          {/* Verification */}
          <section className="mt-12 rounded-xl border border-green-200 bg-green-50 p-6">
            <h2 className="font-bold text-green-800">
              ✓ Verified information
            </h2>

            <p className="mt-2 text-sm text-green-700">
              Last verified: {opportunity.lastVerified}
            </p>

            <a
              href={opportunity.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-medium text-green-800 underline"
            >
              View information source
            </a>
          </section>

          {/* Application */}
          <div className="mt-10">
            <a
              href={opportunity.applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              Visit official website →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
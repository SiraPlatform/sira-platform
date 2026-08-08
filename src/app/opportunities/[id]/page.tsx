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
      <div className="mx-auto max-w-4xl px-6 py-16">
        <a
          href="/"
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          ← Back to opportunities
        </a>

        <div className="mt-8">
          <p className="text-sm font-medium text-blue-600">
            {opportunity.category}
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            {opportunity.title}
          </h1>

          <div className="mt-6 grid gap-4 rounded-xl bg-gray-50 p-6 sm:grid-cols-2">
            <div>
              <p className="text-sm text-gray-500">
                Organization
              </p>
              <p className="font-medium">
                {opportunity.organization}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Country
              </p>
              <p className="font-medium">
                {opportunity.country}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Deadline
              </p>
              <p className="font-medium">
                {opportunity.deadline}
              </p>
            </div>
          </div>

          <section className="mt-10">
            <h2 className="text-2xl font-bold">
              About this opportunity
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              {opportunity.description}
            </p>
          </section>

          <section className="mt-10 rounded-xl border border-green-200 bg-green-50 p-6">
            <h2 className="font-bold text-green-800">
              ✓ Verified information
            </h2>

            <p className="mt-2 text-sm text-green-700">
              Last verified: {opportunity.verifiedDate}
            </p>
          </section>

          <div className="mt-10">
            <a
              href={opportunity.officialUrl}
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
import Link from "next/link";
import { guides } from "@/data/guides";
import { opportunities } from "@/data/opportunities";

type GuidePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function GuidePage({
  params,
}: GuidePageProps) {
  const { id } = await params;

  const guide = guides.find((item) => item.id === id);

  const relatedOpportunities = opportunities.filter((opportunity) =>
  guide?.relatedOpportunityIds?.includes(opportunity.id)
  );

  if (!guide) {
    return (
      <main className="min-h-screen bg-white p-8 text-gray-900">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold">
            Guide not found
          </h1>

          <Link
            href="/guides"
            className="text-blue-600 hover:underline"
          >
            ← Back to guides
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white p-8 text-gray-900">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/guides"
          className="mb-6 inline-block text-blue-600 hover:underline"
        >
          ← Back to guides
        </Link>

        <p className="mb-2 text-sm text-blue-600">
          {guide.guideType}
        </p>

        <h1 className="mb-4 text-4xl font-bold">
          {guide.title}
        </h1>

        <p className="mb-6 text-lg text-gray-600">
          {guide.description}
        </p>

        <div className="mb-8 rounded-lg border p-6">
          <p>
            <strong>Location:</strong>{" "}
            {guide.country ?? "Not specified"}
          </p>

          <p className="mt-2">
            <strong>Audience:</strong>{" "}
            {guide.targetAudience.join(", ")}
          </p>

          <p className="mt-2">
            <strong>Languages:</strong>{" "}
            {guide.language.join(", ")}
          </p>
        </div>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            Guide
          </h2>

          <p className="whitespace-pre-line text-gray-700">
            {guide.content}
          </p>
        </section>

        {relatedOpportunities.length > 0 && (
        <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">
            Related Opportunities
            </h2>

            <div className="grid gap-4">
            {relatedOpportunities.map((opportunity) => (
                <Link
                key={opportunity.id}
                href={`/opportunities/${opportunity.id}`}
                className="block rounded-lg border p-5 transition hover:shadow-md"
                >
                <h3 className="text-xl font-semibold">
                    {opportunity.title}
                </h3>

                <p className="mt-2 text-gray-600">
                    {opportunity.description}
                </p>

                <p className="mt-3 text-sm text-blue-600">
                    View opportunity →
                </p>
                </Link>
            ))}
            </div>
        </section>
        )}



        <section className="rounded-lg border p-6">
          <p>
            <strong>Verification:</strong>{" "}
            {guide.verificationStatus}
          </p>

          <p className="mt-2">
            <strong>Last verified:</strong>{" "}
            {guide.lastVerified}
          </p>

          <a
            href={guide.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            View source →
          </a>
        </section>
      </div>
    </main>
  );
}
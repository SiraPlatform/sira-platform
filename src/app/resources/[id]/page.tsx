import Link from "next/link";
import { resources } from "@/data/resources";

type ResourcePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ResourcePage({
  params,
}: ResourcePageProps) {
  const { id } = await params;

  const resource = resources.find((item) => item.id === id);

  if (!resource) {
    return (
      <main className="min-h-screen bg-white p-8 text-gray-900">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold">
            Resource not found
          </h1>

          <Link
            href="/resources"
            className="text-blue-600 hover:underline"
          >
            ← Back to resources
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white p-8 text-gray-900">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/resources"
          className="mb-6 inline-block text-blue-600 hover:underline"
        >
          ← Back to resources
        </Link>

        <p className="mb-2 text-sm text-blue-600">
          {resource.resourceType}
        </p>

        <h1 className="mb-4 text-4xl font-bold">
          {resource.title}
        </h1>

        <p className="mb-8 text-lg text-gray-600">
          {resource.description}
        </p>

        <div className="mb-8 rounded-lg border p-6">
          <p>
            <strong>Type:</strong>{" "}
            {resource.resourceType}
          </p>

          <p className="mt-2">
            <strong>Location:</strong>{" "}
            {resource.country ?? "Not specified"}
          </p>

          <p className="mt-2">
            <strong>Languages:</strong>{" "}
            {resource.language.join(", ")}
          </p>

          <p className="mt-2">
            <strong>Audience:</strong>{" "}
            {resource.targetAudience.join(", ")}
          </p>
        </div>

        <a
          href={resource.resourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          Visit resource →
        </a>

        <section className="mt-10 rounded-lg border p-6">
          <p>
            <strong>Verification:</strong>{" "}
            {resource.verificationStatus}
          </p>

          <p className="mt-2">
            <strong>Last verified:</strong>{" "}
            {resource.lastVerified}
          </p>

          <a
            href={resource.sourceUrl}
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
import Link from "next/link";
import { communities } from "@/data/communities";

type CommunityPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CommunityPage({
  params,
}: CommunityPageProps) {
  const { id } = await params;

  const community = communities.find((item) => item.id === id);

  if (!community) {
    return (
      <main className="min-h-screen bg-white p-8 text-gray-900">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold">
            Community not found
          </h1>

          <Link
            href="/communities"
            className="text-blue-600 hover:underline"
          >
            ← Back to communities
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white p-8 text-gray-900">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/communities"
          className="mb-6 inline-block text-blue-600 hover:underline"
        >
          ← Back to communities
        </Link>

        <p className="mb-2 text-sm text-blue-600">
          {community.platform}
        </p>

        <h1 className="mb-4 text-4xl font-bold">
          {community.title}
        </h1>

        <p className="mb-8 text-lg text-gray-600">
          {community.description}
        </p>

        <div className="mb-8 rounded-lg border p-6">
          <p>
            <strong>Platform:</strong>{" "}
            {community.platform}
          </p>

          <p className="mt-2">
            <strong>Community type:</strong>{" "}
            {community.communityType}
          </p>

          <p className="mt-2">
            <strong>Location:</strong>{" "}
            {community.country ?? "Not specified"}
          </p>

          <p className="mt-2">
            <strong>Languages:</strong>{" "}
            {community.language.join(", ")}
          </p>

          {community.membershipInfo && (
            <p className="mt-2">
              <strong>Membership:</strong>{" "}
              {community.membershipInfo}
            </p>
          )}
        </div>

        <a
          href={community.communityUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          Visit community →
        </a>

        <section className="mt-10 rounded-lg border p-6">
          <p>
            <strong>Verification:</strong>{" "}
            {community.verificationStatus}
          </p>

          <p className="mt-2">
            <strong>Last verified:</strong>{" "}
            {community.lastVerified}
          </p>

          <a
            href={community.sourceUrl}
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
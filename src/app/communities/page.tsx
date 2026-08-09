import Link from "next/link";
import { communities } from "@/data/communities";

export default function CommunitiesPage() {
  return (
    <main className="min-h-screen bg-white p-8 text-gray-900">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-2 text-3xl font-bold">
          Communities & Networks
        </h1>

        <p className="mb-8 text-gray-600">
          Discover communities where Moroccan youth can connect,
          exchange experiences, and support each other.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {communities.map((community) => (
            <Link
              key={community.id}
              href={`/communities/${community.id}`}
              className="block rounded-lg border p-6 transition hover:shadow-md"
            >
              <p className="mb-2 text-sm text-blue-600">
                {community.platform}
              </p>

              <h2 className="mb-2 text-xl font-semibold">
                {community.title}
              </h2>

              <p className="mb-4 text-gray-600">
                {community.description}
              </p>

              <div className="text-sm text-gray-500">
                {community.country}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
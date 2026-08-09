import Link from "next/link";
import { resources } from "@/data/resources";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white p-8 text-gray-900">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-2 text-3xl font-bold">
          Resources & Useful Links
        </h1>

        <p className="mb-8 text-gray-600">
          Useful websites, portals, tools, and information sources
          to help you explore your opportunities.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((resource) => (
            <Link
              key={resource.id}
              href={`/resources/${resource.id}`}
              className="block rounded-lg border p-6 transition hover:shadow-md"
            >
              <p className="mb-2 text-sm text-blue-600">
                {resource.resourceType}
              </p>

              <h2 className="mb-2 text-xl font-semibold">
                {resource.title}
              </h2>

              <p className="mb-4 text-gray-600">
                {resource.description}
              </p>

              <div className="text-sm text-gray-500">
                {resource.country}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
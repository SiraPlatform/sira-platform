import Link from "next/link";
import { guides } from "@/data/guides";

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-white p-8 text-gray-900">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-2 text-3xl font-bold">
          Guides & Resources
        </h1>

        <p className="mb-8 text-gray-600">
          Practical guides to help you understand your options and make
          informed decisions.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {guides.map((guide) => (
            <Link
              key={guide.id}
              href={`/guides/${guide.id}`}
              className="block rounded-lg border p-6 transition hover:shadow-md"
            >
              <p className="mb-2 text-sm text-blue-600">
                {guide.guideType}
              </p>

              <h2 className="mb-2 text-xl font-semibold">
                {guide.title}
              </h2>

              <p className="mb-4 text-gray-600">
                {guide.description}
              </p>

              <div className="text-sm text-gray-500">
                {guide.country}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
import Link from "next/link";
import { categories } from "@/data/categories";

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/"
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          ← Back to home
        </Link>

        <h1 className="mt-8 text-4xl font-bold">
          Explore your options
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Explore opportunities, information, communities, and
          resources across different paths.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="block rounded-xl border border-gray-200 p-6 transition hover:border-blue-400 hover:shadow-md"
            >
              <h2 className="text-xl font-semibold">
                {category.name}
              </h2>

              {category.description && (
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {category.description}
                </p>
              )}

              {category.children &&
                category.children.length > 0 && (
                  <p className="mt-5 text-sm text-gray-500">
                    {category.children.length} sections
                  </p>
                )}

              <span className="mt-5 inline-block font-medium text-blue-600">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
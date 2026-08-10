import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, CategoryNode } from "@/data/categories";
import { opportunities } from "@/data/opportunities";

type CategoryPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

function findCategory(
  nodes: CategoryNode[],
  slugs: string[]
): CategoryNode | null {
  if (slugs.length === 0) {
    return null;
  }

  const current = nodes.find((node) => node.slug === slugs[0]);

  if (!current) {
    return null;
  }

  if (slugs.length === 1) {
    return current;
  }

  if (!current.children) {
    return null;
  }

  return findCategory(current.children, slugs.slice(1));
}

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { slug } = await params;

  const category = findCategory(categories, slug);

  if (!category) {
    notFound();
  }

  const hasChildren =
    category.children && category.children.length > 0;

  const categoryOpportunities = opportunities.filter(
    (opportunity) =>
      opportunity.subCategory === category.name
  );

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
          {category.name}
        </h1>

        {category.description && (
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            {category.description}
          </p>
        )}

        {hasChildren ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {category.children!.map((child) => {
              const childPath = [...slug, child.slug].join("/");

              return (
                <Link
                  key={childPath}
                  href={`/categories/${childPath}`}
                  className="block rounded-xl border border-gray-200 p-6 transition hover:border-blue-400 hover:shadow-md"
                >
                  <h2 className="text-xl font-semibold">
                    {child.name}
                  </h2>

                  {child.description && (
                    <p className="mt-3 text-sm text-gray-600">
                      {child.description}
                    </p>
                  )}

                  {child.children &&
                    child.children.length > 0 && (
                      <p className="mt-4 text-sm text-blue-600">
                        Explore options →
                      </p>
                    )}
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="mt-12">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categoryOpportunities.map((opportunity) => (
                <Link
                  key={opportunity.id}
                  href={`/opportunities/${opportunity.id}`}
                  className="block rounded-xl border border-gray-200 p-6 transition hover:border-blue-400 hover:shadow-md"
                >
                  <p className="text-sm font-medium text-blue-600">
                    {opportunity.subCategory}
                  </p>

                  <h2 className="mt-2 text-xl font-semibold">
                    {opportunity.title}
                  </h2>

                  <p className="mt-3 text-sm text-gray-600">
                    {opportunity.description}
                  </p>

                  <div className="mt-4 space-y-1 text-sm text-gray-500">
                    <p>
                      Organization:{" "}
                      {opportunity.organization}
                    </p>

                    <p>
                      Country: {opportunity.country}
                    </p>

                    <p>
                      Deadline: {opportunity.deadline}
                    </p>

                    <p>
                      Cost: {opportunity.costType}
                    </p>
                  </div>

                  <span className="mt-5 inline-block font-medium text-blue-600">
                    View opportunity →
                  </span>
                </Link>
              ))}
            </div>

            {categoryOpportunities.length === 0 && (
              <div className="rounded-xl border border-dashed border-gray-300 p-10 text-center">
                <p className="text-gray-500">
                  No opportunities available in this category yet.
                </p>
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
const categories = [
  {
    name: "Scholarships",
    description:
      "Find scholarships and funding opportunities for education.",
  },
  {
    name: "Internships",
    description:
      "Discover internships and practical work experiences.",
  },
  {
    name: "Jobs",
    description:
      "Explore employment opportunities in Morocco and abroad.",
  },
  {
    name: "Remote Jobs",
    description:
      "Find opportunities that can be done remotely.",
  },
  {
    name: "Legal Migration",
    description:
      "Learn about legal pathways to study, work, or live abroad.",
  },
  {
    name: "Entrepreneurship",
    description:
      "Discover resources, programs, and opportunities for entrepreneurs.",
  },
  {
    name: "Fellowships",
    description:
      "Explore fellowships, leadership programs, and professional development.",
  },
  {
    name: "Volunteering",
    description:
      "Find volunteering opportunities and international programs.",
  },
  {
    name: "Education",
    description:
      "Explore educational programs, courses, and learning resources.",
  },
];

export default function CategoriesPage() {
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

      <section className="mx-auto max-w-6xl px-6 py-16">
        <a
          href="/"
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          ← Back to home
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          Explore your options
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Explore opportunities and trusted information across
          different paths.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <a
              key={category.name}
              href={`/categories/${category.name.toLowerCase().replaceAll(" ", "-")}`}
              className="rounded-xl border border-gray-200 p-6 transition hover:border-blue-400 hover:shadow-md"
            >
              <h2 className="text-xl font-semibold">
                {category.name}
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {category.description}
              </p>

              <span className="mt-5 inline-block font-medium text-blue-600">
                Explore →
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
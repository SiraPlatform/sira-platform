import { opportunities } from "@/data/opportunities";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <header className="border-b border-gray-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <h1 className="text-xl font-bold">
            Opportunity Platform
          </h1>

          <nav className="flex gap-6 text-sm">
            <a href="#" className="hover:text-blue-600">
              Opportunities
            </a>
            <a href="#" className="hover:text-blue-600">
              Guides
            </a>
            <a href="#" className="hover:text-blue-600">
              About
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-blue-50">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Know your options.
            <br />
            Choose your future.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            A free knowledge base helping Moroccan youth discover
            scholarships, internships, jobs, migration options,
            entrepreneurship opportunities, and more.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#opportunities"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              Explore opportunities
            </a>

            <a
              href="#categories"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium hover:bg-gray-50"
            >
              Browse categories
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">
            Explore your options
          </h2>

          <p className="mt-2 text-gray-600">
            Discover different paths and opportunities.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Scholarships",
            "Internships",
            "Jobs",
            "Remote Jobs",
            "Legal Migration",
            "Entrepreneurship",
            "Fellowships",
            "Volunteering",
            "Education",
          ].map((category) => (
            <a
              key={category}
              href="#"
              className="rounded-xl border border-gray-200 p-6 transition hover:border-blue-400 hover:shadow-sm"
            >
              <h3 className="text-lg font-semibold">
                {category}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Explore verified opportunities and useful information.
              </p>
            </a>
          ))}
        </div>
      </section>

      
      {/* Opportunities */}
      <section
        id="opportunities"
        className="bg-gray-50"
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">
            Latest opportunities
          </h2>

          <p className="mt-2 text-gray-600">
            Discover verified opportunities from trusted sources.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {opportunities.map((opportunity) => (
              <a
                key={opportunity.id}
                href={`/opportunities/${opportunity.id}`}
                className="block rounded-xl border border-gray-200 bg-white p-6 transition hover:border-blue-400 hover:shadow-md"
              >
                <p className="text-sm font-medium text-blue-600">
                  {opportunity.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  {opportunity.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  {opportunity.description}
                </p>

                <div className="mt-4 text-sm text-gray-500">
                  <p>Organization: {opportunity.organization}</p>
                  <p>Country: {opportunity.country}</p>
                  <p>Deadline: {opportunity.deadline}</p>
                </div>

                <span className="mt-5 inline-block font-medium text-blue-600">
                  View opportunity →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-500">
          Opportunity Platform — Free information for Moroccan youth.
        </div>
      </footer>
    </main>
  );
}
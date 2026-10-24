import Link from "next/link";
import seoPages from "@/lib/seo-pages.json";

export const metadata = {
  title: "SEO Resources & Guides — LeadOS",
  description: "Browse all LeadOS SEO guides: CRM SEO, AI SEO tools, local SEO for Dubai & UAE, clinic SEO, salon SEO and more.",
};

// Group pages by first word of keyword
function groupPages(pages: typeof seoPages) {
  const groups: Record<string, typeof seoPages> = {};
  for (const p of pages) {
    const key = p.keyword.split(" ")[0];
    if (!groups[key]) groups[key] = [];
    groups[key].push(p);
  }
  return groups;
}

export default function SeoIndexPage() {
  const groups = groupPages(seoPages);
  const sortedKeys = Object.keys(groups).sort();

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">SEO Resources & Guides</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          Learn how LeadOS helps businesses across every industry rank on Google with AI-powered SEO.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition"
        >
          Get Started with LeadOS
        </Link>
      </section>

      {/* Page grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-gray-500 mb-10 text-center">{seoPages.length} guides across SEO, CRM, AI tools and local business marketing</p>

        {sortedKeys.map((key) => (
          <div key={key} className="mb-10">
            <h2 className="text-lg font-semibold text-gray-800 capitalize mb-4 border-b pb-2">
              {key.toUpperCase()} topics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {groups[key].map((page) => (
                <Link
                  key={page.slug}
                  href={`/seo/${page.slug}`}
                  className="block p-4 rounded-lg border border-gray-100 hover:border-blue-300 hover:bg-blue-50 transition group"
                >
                  <span className="text-sm font-medium text-gray-800 group-hover:text-blue-700 leading-tight block">
                    {page.keyword.replace(/\b\w/g, (c) => c.toUpperCase())}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Footer CTA */}
      <section className="bg-gray-50 border-t py-12 text-center px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to rank on Google?</h2>
        <p className="text-gray-600 mb-6">LeadOS publishes SEO articles for your business automatically — every week.</p>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Start Ranking on Google
        </Link>
      </section>
    </main>
  );
}

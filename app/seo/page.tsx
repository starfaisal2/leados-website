import Link from "next/link";
import type { Metadata } from "next";
import SEO_PAGES from "@/lib/seo-pages.json";

export const metadata: Metadata = {
  title: "SEO Resources & Guides — LeadOS",
  description: "Browse all LeadOS SEO guides: CRM SEO, AI SEO tools, local SEO for Dubai & UAE, clinic SEO, salon SEO and more.",
  alternates: { canonical: "https://myleados.ai/seo" },
};

type PageDef = { slug: string; title: string; keyword: string; metaDescription: string };
const pages: PageDef[] = SEO_PAGES as PageDef[];

// Group pages by first keyword word
function groupPages(list: PageDef[]) {
  const groups: Record<string, PageDef[]> = {};
  for (const p of list) {
    const key = p.keyword.split(" ")[0].toUpperCase();
    if (!groups[key]) groups[key] = [];
    groups[key].push(p);
  }
  return groups;
}

function toTitleCase(str: string) {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function SeoIndexPage() {
  const groups = groupPages(pages);
  const sortedKeys = Object.keys(groups).sort();

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#111", lineHeight: 1.6 }}>

      {/* Nav */}
      <nav style={{ borderBottom: "1px solid #e5e7eb", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 1100, margin: "0 auto" }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: 18, color: "#111", textDecoration: "none" }}>LeadOS</Link>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <Link href="/auto-seo" style={{ color: "#6366f1", textDecoration: "none", fontWeight: 500, fontSize: 14 }}>Auto SEO</Link>
          <Link href="/blog" style={{ color: "#555", textDecoration: "none", fontSize: 14 }}>Blog</Link>
          <Link href="/get-started" style={{ background: "#6366f1", color: "#fff", padding: "8px 20px", borderRadius: 8, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>Get Started</Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #eef2ff 0%, #f0fdf4 100%)", padding: "64px 24px 56px", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: "#6366f1", color: "#fff", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 20, marginBottom: 20, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            LeadOS SEO Hub
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 800, lineHeight: 1.15, marginBottom: 16, color: "#0f172a" }}>
            SEO Resources &amp; Guides
          </h1>
          <p style={{ fontSize: 18, color: "#475569", marginBottom: 32, lineHeight: 1.7 }}>
            Learn how LeadOS helps businesses across every industry rank on Google with AI-powered SEO. {pages.length} guides and counting.
          </p>
          <Link href="/auto-seo" style={{ background: "#6366f1", color: "#fff", padding: "14px 32px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 16 }}>
            Get Started with Auto SEO
          </Link>
        </div>
      </section>

      {/* Topic groups */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
        <p style={{ color: "#64748b", marginBottom: 48, fontSize: 15 }}>
          {pages.length} guides across SEO, CRM, AI tools and local business marketing
        </p>

        {sortedKeys.map((key) => (
          <div key={key} style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", marginBottom: 16, paddingBottom: 10, borderBottom: "2px solid #e5e7eb", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {key} Topics
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
              {groups[key].map((page) => (
                <Link
                  key={page.slug}
                  href={`/seo/${page.slug}`}
                  style={{ display: "block", padding: "12px 16px", borderRadius: 8, border: "1px solid #e5e7eb", textDecoration: "none", color: "#1e293b", fontSize: 14, fontWeight: 500, background: "#fff", transition: "border-color 0.15s" }}
                >
                  {toTitleCase(page.keyword)}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Footer CTA */}
      <section style={{ background: "#f8fafc", borderTop: "1px solid #e5e7eb", padding: "56px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0f172a", marginBottom: 12 }}>Ready to rank on Google?</h2>
        <p style={{ color: "#475569", fontSize: 16, marginBottom: 28 }}>
          LeadOS publishes SEO articles for your business automatically — every week. Plans from $29/mo.
        </p>
        <Link href="/auto-seo" style={{ background: "#6366f1", color: "#fff", padding: "14px 32px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 16 }}>
          Start Ranking on Google
        </Link>
      </section>
    </div>
  );
}

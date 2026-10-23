import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SEO_PAGES from "@/lib/seo-pages.json";

type PageDef = { slug: string; title: string; keyword: string; metaDescription: string };
const pages: PageDef[] = SEO_PAGES as PageDef[];
const pageMap = new Map(pages.map((p) => [p.slug, p]));

export async function generateStaticParams() {
  return pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pageMap.get(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical: `https://myleados.ai/seo/${slug}` },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url: `https://myleados.ai/seo/${slug}`,
      siteName: "LeadOS",
      type: "website",
    },
  };
}

const RELATED_SLUGS: Record<string, string[]> = {
  "auto-seo": ["auto-seo-tool", "automated-seo", "ai-seo-tool", "seo-autopilot", "auto-seo-pricing"],
  "auto-seo-tool": ["auto-seo", "automated-seo", "seo-automation-software", "auto-seo-free-trial"],
  "automated-seo": ["auto-seo-tool", "ai-powered-seo", "seo-content-automation", "seo-done-for-you"],
  "ai-seo-tool": ["ai-seo-writer", "ai-article-writer-for-seo", "ai-blog-writer", "ai-seo-content"],
};

function getRelated(slug: string): PageDef[] {
  const explicit = (RELATED_SLUGS[slug] ?? []).map((s) => pageMap.get(s)).filter(Boolean) as PageDef[];
  if (explicit.length >= 4) return explicit.slice(0, 4);
  const same = pages
    .filter((p) => p.slug !== slug && !explicit.find((e) => e.slug === p.slug))
    .filter((p) => {
      const words = slug.split("-");
      return words.some((w) => w.length > 3 && p.slug.includes(w));
    })
    .slice(0, 4 - explicit.length);
  return [...explicit, ...same].slice(0, 4);
}

function faqsForPage(page: PageDef): { q: string; a: string }[] {
  return [
    {
      q: `What is ${page.keyword}?`,
      a: `${page.keyword.charAt(0).toUpperCase() + page.keyword.slice(1)} refers to using AI-powered tools to automatically research keywords, write SEO articles and publish them to your website — so your business ranks on Google without manual effort. LeadOS is built specifically for this.`,
    },
    {
      q: "How quickly will I see results?",
      a: "Most businesses see measurable ranking improvements within 30–90 days of consistent weekly article publishing. The more competitive your market, the longer it takes — but LeadOS keeps publishing automatically so rankings compound over time.",
    },
    {
      q: "Do I need any technical skills to use LeadOS?",
      a: "No. Setup takes under 5 minutes. You connect your website, describe your business, and LeadOS starts publishing articles automatically. No coding, no SEO expertise required.",
    },
    {
      q: "Is AI-written content safe for Google?",
      a: "Yes. Google rewards quality, relevant content regardless of who or what wrote it. LeadOS produces long-form, expert articles that follow Google's Helpful Content guidelines — not spammy, low-quality AI filler.",
    },
    {
      q: "What does LeadOS Auto SEO cost?",
      a: "Plans start at $29/mo for 15 articles per month. A Growth plan at $59/mo gives you 30 articles, and the Enterprise plan at $99/mo delivers 45 articles plus 13 backlinks. All plans include a 14-day free trial.",
    },
  ];
}

function howItWorks() {
  return [
    { step: "1", title: "Connect Your Website", desc: "Add two lines of embed code to your site — or connect via Google Search Console. Takes 2 minutes." },
    { step: "2", title: "AI Researches Your Keywords", desc: "LeadOS analyses your business, niche and competitors to identify the highest-value keywords for your industry." },
    { step: "3", title: "Articles Published Every Week", desc: "Our AI writes long-form, expert articles targeting your keywords and publishes them to your website automatically." },
    { step: "4", title: "Google Indexes Your Content", desc: "Every new article is submitted directly to Google's Indexing API so it gets crawled and indexed within 24 hours." },
    { step: "5", title: "Rankings Grow Over Time", desc: "Each article builds topical authority. As more articles accumulate, your site ranks for more keywords and gets more traffic." },
  ];
}

export default async function SeoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pageMap.get(slug);
  if (!page) notFound();

  const related = getRelated(slug);
  const faqs = faqsForPage(page);
  const steps = howItWorks();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://myleados.ai/seo/${slug}`,
        url: `https://myleados.ai/seo/${slug}`,
        name: page.title,
        description: page.metaDescription,
        isPartOf: { "@id": "https://myleados.ai" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "SoftwareApplication",
        name: "LeadOS Auto SEO",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "29", priceCurrency: "USD" },
        description: "AI-powered SEO tool that automatically publishes weekly articles to rank your business on Google.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#111", lineHeight: 1.6 }}>

        {/* Nav */}
        <nav style={{ borderBottom: "1px solid #e5e7eb", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 1100, margin: "0 auto" }}>
          <Link href="/" style={{ fontWeight: 700, fontSize: 18, color: "#111", textDecoration: "none" }}>LeadOS</Link>
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <Link href="/auto-seo" style={{ color: "#6366f1", textDecoration: "none", fontWeight: 500, fontSize: 14 }}>Auto SEO</Link>
            <Link href="/blog" style={{ color: "#555", textDecoration: "none", fontSize: 14 }}>Blog</Link>
            <Link href="/get-started" style={{ background: "#6366f1", color: "#fff", padding: "8px 20px", borderRadius: 8, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>Start Free Trial</Link>
          </div>
        </nav>

        {/* Hero */}
        <section style={{ background: "linear-gradient(135deg, #eef2ff 0%, #f0fdf4 100%)", padding: "72px 24px 64px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
            <div style={{ display: "inline-block", background: "#6366f1", color: "#fff", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 20, marginBottom: 20, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Auto SEO by LeadOS
            </div>
            <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, lineHeight: 1.15, marginBottom: 20, color: "#0f172a" }}>
              {page.title}
            </h1>
            <p style={{ fontSize: 18, color: "#475569", maxWidth: 640, margin: "0 auto 36px", lineHeight: 1.7 }}>
              {page.metaDescription}
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/get-started" style={{ background: "#6366f1", color: "#fff", padding: "14px 32px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 16 }}>
                Start Free Trial — No Card Required
              </Link>
              <Link href="/auto-seo" style={{ background: "#fff", color: "#6366f1", border: "2px solid #6366f1", padding: "14px 28px", borderRadius: 10, textDecoration: "none", fontWeight: 600, fontSize: 16 }}>
                See How It Works
              </Link>
            </div>
            <p style={{ fontSize: 13, color: "#94a3b8", marginTop: 16 }}>5 free articles included · No credit card · Cancel anytime</p>
          </div>
        </section>

        {/* Stats bar */}
        <section style={{ background: "#0f172a", padding: "28px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 24, textAlign: "center" }}>
            {[
              { n: "15–45", label: "Articles/Month" },
              { n: "5–13", label: "Backlinks/Month" },
              { n: "30–90", label: "Days to Results" },
              { n: "$29", label: "Starting Price" },
              { n: "24hr", label: "Google Indexing" },
            ].map(({ n, label }) => (
              <div key={label}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#a5b4fc" }}>{n}</div>
                <div style={{ fontSize: 13, color: "#94a3b8", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section style={{ padding: "72px 24px", background: "#fff" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, textAlign: "center", marginBottom: 8, color: "#0f172a" }}>How LeadOS Auto SEO Works</h2>
            <p style={{ textAlign: "center", color: "#64748b", marginBottom: 52, fontSize: 16 }}>Five steps from setup to Google rankings — all automated.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 28 }}>
              {steps.map((s) => (
                <div key={s.step} style={{ background: "#f8fafc", borderRadius: 12, padding: 28, borderLeft: "4px solid #6366f1" }}>
                  <div style={{ width: 36, height: 36, background: "#6366f1", borderRadius: "50%", color: "#fff", fontWeight: 800, fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>{s.step}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, color: "#0f172a" }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section style={{ padding: "72px 24px", background: "#f8fafc" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, textAlign: "center", marginBottom: 48, color: "#0f172a" }}>Everything Included in Auto SEO</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {[
                { icon: "🔍", t: "AI Keyword Research", d: "Finds the highest-value keywords for your exact business niche automatically." },
                { icon: "✍️", t: "Expert Article Writing", d: "Long-form, 1,500–3,000 word articles written by AI trained on your industry." },
                { icon: "📤", t: "Automatic Publishing", d: "Articles appear on your website automatically every week — no manual upload." },
                { icon: "⚡", t: "Google Indexing API", d: "Every article submitted to Google's Indexing API within 24 hours of publishing." },
                { icon: "🔗", t: "Backlink Building", d: "Monthly directory submissions to high-authority sites to grow your domain authority." },
                { icon: "📊", t: "GSC Monitoring", d: "Connected to Google Search Console to track rankings and clicks in real time." },
                { icon: "🖼️", t: "Featured Images", d: "AI selects and adds relevant featured images to every article automatically." },
                { icon: "🌐", t: "Any Website", d: "Works on WordPress, Wix, Squarespace, Shopify, Site123 — any website with custom HTML." },
                { icon: "📍", t: "Local SEO", d: "Articles target your city, suburb and region to rank in local Google searches." },
              ].map(({ icon, t, d }) => (
                <div key={t} style={{ background: "#fff", borderRadius: 12, padding: 24, border: "1px solid #e2e8f0" }}>
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: "#0f172a" }}>{t}</h3>
                  <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section style={{ padding: "72px 24px", background: "#fff" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, textAlign: "center", marginBottom: 8, color: "#0f172a" }}>Simple, Transparent Pricing</h2>
            <p style={{ textAlign: "center", color: "#64748b", marginBottom: 48, fontSize: 16 }}>All plans include a 14-day free trial. No credit card required to start.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
              {[
                { name: "Starter", price: "$29", freq: "/mo", arts: 15, links: 5, highlight: false },
                { name: "Growth", price: "$59", freq: "/mo", arts: 30, links: 10, highlight: true },
                { name: "Enterprise", price: "$99", freq: "/mo", arts: 45, links: 13, highlight: false },
              ].map((plan) => (
                <div key={plan.name} style={{ borderRadius: 14, border: plan.highlight ? "2px solid #6366f1" : "1px solid #e2e8f0", padding: 32, textAlign: "center", background: plan.highlight ? "#eef2ff" : "#fff", position: "relative" }}>
                  {plan.highlight && <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#6366f1", color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 12px", borderRadius: 20, whiteSpace: "nowrap" }}>MOST POPULAR</div>}
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>{plan.name}</div>
                  <div style={{ fontSize: 40, fontWeight: 800, color: "#6366f1" }}>{plan.price}<span style={{ fontSize: 16, color: "#94a3b8", fontWeight: 400 }}>{plan.freq}</span></div>
                  <div style={{ margin: "20px 0", fontSize: 14, color: "#475569", lineHeight: 2 }}>
                    <div>✅ {plan.arts} SEO articles/month</div>
                    <div>✅ {plan.links} backlinks/month</div>
                    <div>✅ AI keyword research</div>
                    <div>✅ Google Indexing API</div>
                    <div>✅ GSC monitoring</div>
                  </div>
                  <Link href="/get-started" style={{ display: "block", background: plan.highlight ? "#6366f1" : "#0f172a", color: "#fff", padding: "12px 24px", borderRadius: 8, textDecoration: "none", fontWeight: 600, fontSize: 15 }}>
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "72px 24px", background: "#f8fafc" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, textAlign: "center", marginBottom: 48, color: "#0f172a" }}>Frequently Asked Questions</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {faqs.map((faq) => (
                <div key={faq.q} style={{ background: "#fff", borderRadius: 12, padding: 28, border: "1px solid #e2e8f0" }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0f172a", marginBottom: 10 }}>{faq.q}</h3>
                  <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related pages */}
        {related.length > 0 && (
          <section style={{ padding: "56px 24px", background: "#fff" }}>
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24, color: "#0f172a" }}>Related Pages</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
                {related.map((r) => (
                  <Link key={r.slug} href={`/seo/${r.slug}`} style={{ display: "block", padding: "14px 18px", background: "#f8fafc", borderRadius: 10, border: "1px solid #e2e8f0", textDecoration: "none", color: "#374151", fontSize: 14, fontWeight: 500, lineHeight: 1.4 }}>
                    {r.title}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section style={{ padding: "80px 24px", background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)", textAlign: "center" }}>
          <div style={{ maxWidth: 620, margin: "0 auto" }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
              Start Ranking on Google This Week
            </h2>
            <p style={{ fontSize: 17, color: "#c7d2fe", marginBottom: 36, lineHeight: 1.6 }}>
              Join businesses already using LeadOS to publish weekly SEO articles and grow their organic traffic automatically.
            </p>
            <Link href="/get-started" style={{ display: "inline-block", background: "#fff", color: "#6366f1", padding: "16px 40px", borderRadius: 12, textDecoration: "none", fontWeight: 800, fontSize: 18 }}>
              Get 5 Free Articles Now
            </Link>
            <p style={{ color: "#a5b4fc", fontSize: 13, marginTop: 16 }}>No credit card · 5 free articles · Cancel anytime</p>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ background: "#0f172a", color: "#94a3b8", padding: "40px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "center", gap: 32, marginBottom: 24, flexWrap: "wrap" }}>
              <Link href="/auto-seo" style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14 }}>Auto SEO</Link>
              <Link href="/seo/auto-seo-pricing" style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14 }}>Pricing</Link>
              <Link href="/seo/what-is-auto-seo" style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14 }}>What Is Auto SEO?</Link>
              <Link href="/seo/auto-seo-free-trial" style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14 }}>Free Trial</Link>
              <Link href="/blog" style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14 }}>Blog</Link>
              <Link href="/get-started" style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14 }}>Get Started</Link>
            </div>
            <p style={{ fontSize: 13 }}>© {new Date().getFullYear()} Leados Technologies FZC · <Link href="/privacy" style={{ color: "#64748b", textDecoration: "none" }}>Privacy</Link> · <Link href="/terms" style={{ color: "#64748b", textDecoration: "none" }}>Terms</Link></p>
          </div>
        </footer>

      </div>
    </>
  );
}

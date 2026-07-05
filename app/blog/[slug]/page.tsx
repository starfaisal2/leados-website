import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 3600;

async function getArticle(slug: string) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;

  const headers = {
    apikey: key,
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
  };

  const businessId = process.env.LEADOS_BUSINESS_ID;
  const businessFilter = businessId ? `&business_id=eq.${businessId}` : "";

  const res = await fetch(
    `${url}/rest/v1/seo_articles?slug=eq.${encodeURIComponent(slug)}&status=eq.published${businessFilter}&limit=1`,
    { headers, next: { revalidate: 3600 } }
  );
  if (!res.ok) return null;
  const articles = await res.json();
  return articles?.[0] ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return { title: "Article not found | LeadOS" };
  return {
    title: article.meta_title || article.title,
    description: article.meta_description,
    openGraph: {
      title: article.meta_title || article.title,
      description: article.meta_description,
      type: "article",
      publishedTime: article.published_at,
    },
  };
}

function markdownToHtml(md: string): string {
  if (!md) return "";
  return md
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .split("\n\n")
    .map((block) => {
      if (block.startsWith("<h") || block.startsWith("<li")) return block;
      if (block.trim()) return `<p>${block.replace(/\n/g, " ")}</p>`;
      return "";
    })
    .join("\n");
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const htmlContent = markdownToHtml(article.content || "");
  const publishDate = new Date(
    article.published_at || article.created_at
  ).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const readMins =
    article.reading_time_mins ?? Math.ceil((article.word_count ?? 800) / 200);

  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #0f172a 100%)",
          padding: "80px 24px 64px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* glow */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-60px", left: "50%", transform: "translateX(-50%)", width: 800, height: 400, background: "radial-gradient(ellipse, rgba(79,70,229,.2) 0%, transparent 70%)" }} />
        </div>

        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,.4)", marginBottom: 28 }}>
            <Link href="/" style={{ color: "rgba(255,255,255,.4)", textDecoration: "none" }}>Home</Link>
            <span>›</span>
            <Link href="/blog" style={{ color: "rgba(255,255,255,.4)", textDecoration: "none" }}>Blog</Link>
            <span>›</span>
            <span style={{ color: "rgba(255,255,255,.6)" }}>{article.target_keyword}</span>
          </div>

          {/* Keyword badge */}
          <span
            style={{
              display: "inline-block",
              background: "rgba(165,180,252,.15)",
              border: "1px solid rgba(165,180,252,.25)",
              color: "#a5b4fc",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              borderRadius: 20,
              padding: "4px 14px",
              marginBottom: 20,
            }}
          >
            {article.target_keyword}
          </span>

          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            {article.title}
          </h1>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              fontSize: 13,
              color: "rgba(255,255,255,.45)",
              flexWrap: "wrap",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              {publishDate}
            </span>
            <span>·</span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {readMins} min read
            </span>
            {article.word_count && (
              <>
                <span>·</span>
                <span>{article.word_count.toLocaleString()} words</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── Article body ── */}
      <section style={{ background: "#f8f8f6", padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>

          {/* Excerpt pull-quote */}
          {article.excerpt && (
            <div
              style={{
                background: "white",
                border: "1px solid rgba(0,0,0,.07)",
                borderLeft: "4px solid #4f46e5",
                borderRadius: "0 12px 12px 0",
                padding: "20px 24px",
                margin: "40px 0 8px",
                fontSize: 16,
                color: "#334155",
                lineHeight: 1.7,
                fontStyle: "italic",
                boxShadow: "0 2px 8px rgba(0,0,0,.04)",
              }}
            >
              {article.excerpt}
            </div>
          )}

          {/* Body */}
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            style={{ paddingTop: article.excerpt ? 8 : 40 }}
          />

          {/* Back link */}
          <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid #e2e8f0" }}>
            <Link
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 14,
                fontWeight: 600,
                color: "#4f46e5",
                textDecoration: "none",
              }}
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a, #1e1b4b)",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 38px)",
              fontWeight: 800,
              color: "white",
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            Ready to automate your business?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,.55)", marginBottom: 36, lineHeight: 1.7 }}>
            LeadOS replies to every enquiry instantly, books appointments, and tracks every dollar of revenue — on autopilot.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/971568350424?text=Hi%20LeadOS%2C%20I%20read%20your%20blog%20and%20want%20a%20demo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #4f46e5, #2563eb)",
                color: "white",
                fontWeight: 700,
                fontSize: 15,
                padding: "14px 32px",
                borderRadius: 12,
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(79,70,229,.4)",
              }}
            >
              Book a Demo →
            </a>
            <a
              href="/get-started"
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,.08)",
                color: "rgba(255,255,255,.8)",
                fontWeight: 600,
                fontSize: 15,
                padding: "14px 32px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,.15)",
                textDecoration: "none",
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .article-body { font-family: var(--font-sans, 'Plus Jakarta Sans', sans-serif); }
        .article-body h1 { font-size: 32px; font-weight: 800; color: #0f172a; margin: 48px 0 18px; line-height: 1.25; }
        .article-body h2 { font-size: 24px; font-weight: 700; color: #0f172a; margin: 40px 0 14px; line-height: 1.3; padding-bottom: 10px; border-bottom: 2px solid #f1f5f9; }
        .article-body h3 { font-size: 18px; font-weight: 700; color: #1e293b; margin: 32px 0 10px; }
        .article-body p { font-size: 16px; color: #334155; line-height: 1.85; margin-bottom: 20px; }
        .article-body ul, .article-body ol { padding-left: 0; margin: 0 0 20px; list-style: none; }
        .article-body li { font-size: 15px; color: #334155; line-height: 1.75; margin-bottom: 10px; padding-left: 24px; position: relative; }
        .article-body li::before { content: ''; position: absolute; left: 0; top: 10px; width: 7px; height: 7px; border-radius: 50%; background: linear-gradient(135deg, #4f46e5, #2563eb); }
        .article-body strong { font-weight: 700; color: #0f172a; }
        .article-body em { color: #475569; }
        .article-body a { color: #4f46e5; text-decoration: underline; text-underline-offset: 3px; }
        .article-body a:hover { color: #2563eb; }
      `}</style>
    </>
  );
}

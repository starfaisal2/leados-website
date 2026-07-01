// LeadOS Blog — individual article page
// Renders full markdown content from the Auto SEO module.

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

export const revalidate = 3600;

async function getArticle(slug: string) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;

  const supabase = createClient(url, key);

  const { data: business } = await supabase
    .from("businesses")
    .select("id")
    .eq("slug", "leados")
    .maybeSingle();

  if (!business) return null;

  const { data } = await supabase
    .from("seo_articles")
    .select("*")
    .eq("business_id", business.id)
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  return data;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
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

// Very simple markdown → HTML converter (no external deps)
function markdownToHtml(md: string): string {
  return md
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>[\s\S]+?<\/li>)/g, "<ul>$1</ul>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[h|u|l])/gm, "")
    .split("\n")
    .map((line) => (line.startsWith("<h") || line.startsWith("<ul") || line.startsWith("<li") ? line : line ? `<p>${line}</p>` : ""))
    .join("\n");
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const htmlContent = markdownToHtml(article.content || "");
  const publishDate = new Date(article.published_at || article.created_at).toLocaleDateString("en-AU", {
    day: "numeric", month: "long", year: "numeric",
  });

  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px 120px" }}>
      {/* Breadcrumb */}
      <div style={{ fontSize: 13, color: "#94a3b8", marginBottom: 32 }}>
        <Link href="/" style={{ color: "#94a3b8", textDecoration: "none" }}>Home</Link>
        <span style={{ margin: "0 8px" }}>→</span>
        <Link href="/blog" style={{ color: "#94a3b8", textDecoration: "none" }}>Blog</Link>
        <span style={{ margin: "0 8px" }}>→</span>
        <span style={{ color: "#64748b" }}>{article.target_keyword}</span>
      </div>

      {/* Keyword tag */}
      <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, color: "#4f46e5", background: "rgba(79,70,229,.08)", border: "1px solid rgba(79,70,229,.12)", borderRadius: 20, padding: "3px 12px", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.04em" }}>
        {article.target_keyword}
      </span>

      {/* Title */}
      <h1 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.2, marginBottom: 16 }}>
        {article.title}
      </h1>

      {/* Meta */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 13, color: "#94a3b8", marginBottom: 40, paddingBottom: 32, borderBottom: "1px solid #f1f5f9" }}>
        <span>📅 {publishDate}</span>
        <span>·</span>
        <span>⏱ {article.reading_time_mins || Math.ceil((article.word_count || 800) / 200)} min read</span>
        <span>·</span>
        <span>📝 {article.word_count?.toLocaleString()} words</span>
      </div>

      {/* Excerpt / intro callout */}
      {article.excerpt && (
        <div style={{ background: "rgba(79,70,229,.04)", border: "1px solid rgba(79,70,229,.1)", borderLeft: "3px solid #4f46e5", borderRadius: "0 8px 8px 0", padding: "16px 20px", marginBottom: 32, fontSize: 15, color: "#334155", lineHeight: 1.65, fontStyle: "italic" }}>
          {article.excerpt}
        </div>
      )}

      {/* Article content */}
      <div
        className="article-body"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      {/* CTA */}
      <div style={{ marginTop: 64, padding: 32, background: "linear-gradient(135deg, #0f172a, #1e1b4b)", borderRadius: 16, textAlign: "center" }}>
        <h3 style={{ fontSize: 22, fontWeight: 800, color: "white", marginBottom: 8 }}>
          Ready to automate your business?
        </h3>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,.6)", marginBottom: 24, lineHeight: 1.6 }}>
          LeadOS replies to every enquiry instantly, books appointments, and tracks every dollar of revenue — on autopilot.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="https://wa.me/61451095700?text=Hi%20LeadOS%2C%20I%20read%20your%20blog%20and%20want%20a%20demo"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", background: "linear-gradient(135deg, #4f46e5, #2563eb)", color: "white", fontWeight: 700, fontSize: 14, padding: "12px 28px", borderRadius: 10, textDecoration: "none" }}
          >
            Book a Demo →
          </a>
          <a
            href="/get-started"
            style={{ display: "inline-block", background: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.8)", fontWeight: 600, fontSize: 14, padding: "12px 28px", borderRadius: 10, border: "1px solid rgba(255,255,255,.15)", textDecoration: "none" }}
          >
            Get Started
          </a>
        </div>
      </div>

      <div style={{ marginTop: 32, textAlign: "center" }}>
        <Link href="/blog" style={{ fontSize: 13, color: "#4f46e5", textDecoration: "none", fontWeight: 600 }}>
          ← Back to all articles
        </Link>
      </div>

      <style>{`
        .article-body h1 { font-size: 28px; font-weight: 800; color: #0f172a; margin: 36px 0 16px; line-height: 1.3; }
        .article-body h2 { font-size: 22px; font-weight: 700; color: #0f172a; margin: 36px 0 14px; line-height: 1.35; }
        .article-body h3 { font-size: 17px; font-weight: 700; color: #1e293b; margin: 28px 0 10px; }
        .article-body p { font-size: 16px; color: #334155; line-height: 1.8; margin-bottom: 18px; }
        .article-body ul { padding-left: 24px; margin-bottom: 18px; }
        .article-body li { font-size: 15px; color: #334155; line-height: 1.7; margin-bottom: 6px; }
        .article-body strong { font-weight: 700; color: #0f172a; }
        .article-body a { color: #4f46e5; text-decoration: underline; }
      `}</style>
    </main>
  );
}

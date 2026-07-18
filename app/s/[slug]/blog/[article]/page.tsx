import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 3600;
export const dynamicParams = true;

const SB_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SB_KEY = (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)!;
const hdrs = { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}` };

async function getData(bizSlug: string, articleSlug: string) {
  const bizRes = await fetch(
    `${SB_URL}/rest/v1/businesses?slug=eq.${encodeURIComponent(bizSlug)}&select=id,name,slug,logo_url,industry,whatsapp,email,settings&limit=1`,
    { headers: hdrs, next: { revalidate: 3600 } }
  );
  if (!bizRes.ok) return null;
  const bizArr = await bizRes.json();
  const biz = bizArr?.[0];
  if (!biz) return null;

  const articleRes = await fetch(
    `${SB_URL}/rest/v1/seo_articles?business_id=eq.${biz.id}&slug=eq.${encodeURIComponent(articleSlug)}&status=eq.published&limit=1`,
    { headers: hdrs, next: { revalidate: 3600 } }
  );
  if (!articleRes.ok) return null;
  const articleArr = await articleRes.json();
  const article = articleArr?.[0];
  if (!article) return null;

  const hosted: Record<string, any> = biz.settings?.hosted_site ?? {};
  return { biz, article, hosted };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; article: string }> }): Promise<Metadata> {
  const { slug, article: articleSlug } = await params;
  const data = await getData(slug, articleSlug);
  if (!data) return { title: "Not Found" };
  const { article, biz } = data;
  return {
    title: article.meta_title || article.title,
    description: article.meta_description,
    openGraph: {
      title: article.meta_title || article.title,
      description: article.meta_description,
      type: "article",
      publishedTime: article.published_at,
      siteName: biz.name,
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

function initials(name: string) {
  return name.split(" ").slice(0, 2).map((w: string) => w[0]).join("").toUpperCase();
}

export default async function TenantArticlePage({ params }: { params: Promise<{ slug: string; article: string }> }) {
  const { slug, article: articleSlug } = await params;
  const data = await getData(slug, articleSlug);
  if (!data) notFound();

  const { biz, article, hosted } = data;
  const accent = hosted.accent_color || "#4f46e5";
  const accentDark = hosted.accent_color_dark || accent;
  const html = markdownToHtml(article.content || "");
  const date = new Date(article.published_at || article.created_at).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
  const readMins = article.reading_time_mins ?? Math.ceil((article.word_count ?? 800) / 200);
  const contactUrl = biz.whatsapp
    ? `https://wa.me/${biz.whatsapp.replace(/\D/g, "")}?text=Hi%20${encodeURIComponent(biz.name)}`
    : `mailto:${biz.email}`;

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0a0a0f; color: #f1f5f9; }
        .body h1 { font-size: 30px; font-weight: 800; color: #f1f5f9; margin: 48px 0 16px; line-height: 1.25; }
        .body h2 { font-size: 22px; font-weight: 700; color: #e2e8f0; margin: 40px 0 12px; padding-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,.08); line-height: 1.3; }
        .body h3 { font-size: 17px; font-weight: 700; color: #cbd5e1; margin: 32px 0 10px; }
        .body p { font-size: 16px; color: rgba(255,255,255,.6); line-height: 1.9; margin-bottom: 22px; }
        .body ul, .body ol { margin: 0 0 22px; padding-left: 0; list-style: none; }
        .body li { font-size: 15px; color: rgba(255,255,255,.55); line-height: 1.8; margin-bottom: 10px; padding-left: 22px; position: relative; }
        .body li::before { content: ''; position: absolute; left: 0; top: 10px; width: 6px; height: 6px; border-radius: 50%; background: ${accent}; }
        .body strong { font-weight: 700; color: rgba(255,255,255,.9); }
        .body em { color: rgba(255,255,255,.5); }
        .body a { color: ${accent}; text-decoration: underline; text-underline-offset: 3px; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(20px)", background: "rgba(10,10,15,.9)", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px", height: 56, display: "flex", alignItems: "center", gap: 8 }}>
          <Link href={`/s/${slug}`} style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            {biz.logo_url ? (
              <img src={biz.logo_url} alt={biz.name} style={{ height: 26, width: "auto" }} />
            ) : (
              <div style={{ width: 26, height: 26, borderRadius: 6, background: `linear-gradient(135deg, ${accent}, ${accentDark})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 800, color: "white" }}>
                {initials(biz.name)}
              </div>
            )}
            <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,.7)" }}>{biz.name}</span>
          </Link>
          <span style={{ color: "rgba(255,255,255,.2)" }}>/</span>
          <Link href={`/s/${slug}/blog`} style={{ fontSize: 12, color: "rgba(255,255,255,.35)", textDecoration: "none" }}>Blog</Link>
          <span style={{ color: "rgba(255,255,255,.15)" }}>/</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,.2)", maxWidth: 200, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{article.title}</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "72px 24px 56px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${accent}0f, transparent)`, pointerEvents: "none" }} />
        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
            <Link href={`/s/${slug}/blog`} style={{ fontSize: 12, color: "rgba(255,255,255,.3)", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
              ← Blog
            </Link>
            <span style={{ color: "rgba(255,255,255,.15)", fontSize: 12 }}>/</span>
            <span style={{ display: "inline-block", background: `${accent}18`, color: accent, fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: 20, padding: "2px 10px", border: `1px solid ${accent}33` }}>
              {article.target_keyword}
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 900, color: "white", lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 24 }}>
            {article.title}
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 13, color: "rgba(255,255,255,.35)", flexWrap: "wrap" }}>
            <span>📅 {date}</span>
            <span>·</span>
            <span>⏱ {readMins} min read</span>
            {article.word_count && <><span>·</span><span>{article.word_count.toLocaleString()} words</span></>}
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {article.excerpt && (
            <div style={{ borderLeft: `3px solid ${accent}`, paddingLeft: 20, marginBottom: 40, color: "rgba(255,255,255,.55)", fontSize: 17, lineHeight: 1.7, fontStyle: "italic" }}>
              {article.excerpt}
            </div>
          )}
          <div className="body" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "#0d0d16", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 60% 80% at 50% 50%, ${accent}0c, transparent)`, pointerEvents: "none" }} />
        <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 900, color: "white", letterSpacing: "-0.025em", marginBottom: 14, lineHeight: 1.2 }}>
            Interested in working with us?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,.45)", marginBottom: 36, lineHeight: 1.65 }}>
            Get in touch with {biz.name} today — we'd love to help.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {(biz.whatsapp || biz.email) && (
              <a
                href={contactUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `linear-gradient(135deg, ${accent}, ${accentDark})`, color: "white", fontWeight: 700, fontSize: 15, padding: "14px 28px", borderRadius: 14, textDecoration: "none", boxShadow: `0 8px 24px ${accent}33` }}
              >
                {biz.whatsapp ? "💬 WhatsApp Us" : "✉ Email Us"}
              </a>
            )}
            <Link
              href={`/s/${slug}/blog`}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.07)", color: "rgba(255,255,255,.7)", fontWeight: 600, fontSize: 15, padding: "14px 28px", borderRadius: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,.1)" }}
            >
              ← More Articles
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "24px", borderTop: "1px solid rgba(255,255,255,.06)", background: "#080810", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <Link href={`/s/${slug}`} style={{ fontSize: 12, color: "rgba(255,255,255,.3)", textDecoration: "none" }}>← {biz.name}</Link>
        <a href="https://www.myleados.ai" target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: "rgba(255,255,255,.18)", textDecoration: "none" }}>
          Powered by <strong style={{ color: "rgba(255,255,255,.28)" }}>LeadOS</strong>
        </a>
      </footer>
    </>
  );
}

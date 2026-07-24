import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 3600;
export const dynamicParams = true;

const SB_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SB_KEY = (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)!;
const hdrs = { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}` };

async function getData(slug: string) {
  const bizRes = await fetch(
    `${SB_URL}/rest/v1/businesses?slug=eq.${encodeURIComponent(slug)}&select=id,name,slug,logo_url,industry,settings&limit=1`,
    { headers: hdrs, next: { revalidate: 3600 } }
  );
  if (!bizRes.ok) return null;
  const bizArr = await bizRes.json();
  const biz = bizArr?.[0];
  if (!biz) return null;

  const [articlesRes, seoRes] = await Promise.all([
    fetch(
      `${SB_URL}/rest/v1/seo_articles?business_id=eq.${biz.id}&status=eq.published&select=id,title,slug,excerpt,target_keyword,reading_time_mins,word_count,published_at&order=published_at.desc&limit=50`,
      { headers: hdrs, next: { revalidate: 3600 } }
    ),
    fetch(
      `${SB_URL}/rest/v1/seo_settings?business_id=eq.${biz.id}&select=niche&limit=1`,
      { headers: hdrs, next: { revalidate: 3600 } }
    ),
  ]);

  const articles = (await articlesRes.json()) ?? [];
  const seo = (await seoRes.json())?.[0] ?? {};
  const hosted: Record<string, any> = biz.settings?.hosted_site ?? {};

  return { biz, articles, hosted, seo };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = await getData(slug);
  if (!data) return { title: "Not Found" };
  return {
    title: `Blog — ${data.biz.name}`,
    description: `Expert insights and guides from ${data.biz.name}`,
  };
}

function initials(name: string) {
  return name.split(" ").slice(0, 2).map((w: string) => w[0]).join("").toUpperCase();
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });
}

export default async function TenantBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getData(slug);
  if (!data) notFound();

  const { biz, articles, hosted } = data;
  const accent = hosted.accent_color || "#4f46e5";
  const accentDark = hosted.accent_color_dark || accent;
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0a0a0f; color: #f1f5f9; }
        @keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
        .article-card:hover { border-color: ${accent}55 !important; transform: translateY(-3px); }
        .article-card { transition: border-color .3s, transform .3s; }
        @media (max-width: 720px) {
          .blog-grid { grid-template-columns: 1fr !important; }
          .featured-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(20px)", background: "rgba(10,10,15,.9)", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 60, display: "flex", alignItems: "center", gap: 12 }}>
          <Link href={`/s/${slug}`} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            {biz.logo_url ? (
              <img src={biz.logo_url} alt={biz.name} style={{ height: 28, width: "auto", borderRadius: 5 }} />
            ) : (
              <div style={{ width: 28, height: 28, borderRadius: 7, background: `linear-gradient(135deg, ${accent}, ${accentDark})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "white" }}>
                {initials(biz.name)}
              </div>
            )}
            <span style={{ fontWeight: 700, fontSize: 14, color: "rgba(255,255,255,.8)" }}>{biz.name}</span>
          </Link>
          <span style={{ color: "rgba(255,255,255,.2)", fontSize: 14 }}>/</span>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,.4)", fontWeight: 500 }}>Blog</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "80px 24px 60px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 60% 80% at 50% 0%, ${accent}12, transparent)`, pointerEvents: "none" }} />
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <span style={{ display: "inline-block", background: `${accent}18`, color: accent, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: 20, padding: "4px 14px", marginBottom: 24, border: `1px solid ${accent}33` }}>
            ✦ Insights & Guides
          </span>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, color: "white", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
            {biz.name} Blog
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,.45)", lineHeight: 1.6 }}>
            {articles.length} expert article{articles.length !== 1 ? "s" : ""} — stay ahead with the latest insights
          </p>
        </div>
      </section>

      {/* FEATURED */}
      {featured && (
        <section style={{ padding: "0 24px 60px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <Link href={`/s/${slug}/blog/${featured.slug}`} style={{ textDecoration: "none", display: "block" }}>
              <div className="featured-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, background: "linear-gradient(135deg, rgba(255,255,255,.05), rgba(255,255,255,.02))", border: `1px solid ${accent}33`, borderRadius: 24, padding: "40px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
                <div>
                  <span style={{ display: "inline-block", background: `${accent}20`, color: accent, fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: 20, padding: "3px 12px", marginBottom: 20, border: `1px solid ${accent}44` }}>
                    ✦ Featured
                  </span>
                  <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: "white", lineHeight: 1.25, marginBottom: 16, letterSpacing: "-0.02em" }}>
                    {featured.title}
                  </h2>
                  {featured.excerpt && (
                    <p style={{ fontSize: 15, color: "rgba(255,255,255,.5)", lineHeight: 1.7, marginBottom: 24 }}>
                      {featured.excerpt}
                    </p>
                  )}
                  <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 12, color: "rgba(255,255,255,.3)" }}>
                    <span>{formatDate(featured.published_at)}</span>
                    <span>·</span>
                    <span>{featured.reading_time_mins ?? Math.ceil((featured.word_count ?? 800) / 200)} min read</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 160, height: 160, borderRadius: "50%", background: `${accent}14`, border: `2px solid ${accent}33`, display: "flex", alignItems: "center", justifyContent: "center", animation: "float 5s ease-in-out infinite" }}>
                    <span style={{ fontSize: 64 }}>✦</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* GRID */}
      {rest.length > 0 && (
        <section style={{ padding: "0 24px 100px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {rest.map((a: any) => (
                <Link key={a.id} href={`/s/${slug}/blog/${a.slug}`} style={{ textDecoration: "none", display: "block" }}>
                  <div className="article-card" style={{ background: "linear-gradient(135deg, rgba(255,255,255,.04), rgba(255,255,255,.015))", border: "1px solid rgba(255,255,255,.07)", borderRadius: 20, padding: "24px", height: "100%" }}>
                    <span style={{ display: "inline-block", background: `${accent}14`, color: accent, fontSize: 10, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", borderRadius: 20, padding: "2px 10px", marginBottom: 14, border: `1px solid ${accent}2a` }}>
                      {a.target_keyword}
                    </span>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "rgba(255,255,255,.88)", lineHeight: 1.45, marginBottom: 10 }}>{a.title}</h3>
                    {a.excerpt && (
                      <p style={{ fontSize: 13, color: "rgba(255,255,255,.38)", lineHeight: 1.6, marginBottom: 18, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                        {a.excerpt}
                      </p>
                    )}
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,.25)", display: "flex", gap: 10 }}>
                      <span>{formatDate(a.published_at)}</span>
                      <span>·</span>
                      <span>{a.reading_time_mins ?? Math.ceil((a.word_count ?? 800) / 200)} min</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer style={{ padding: "28px 24px", borderTop: "1px solid rgba(255,255,255,.06)", background: "#080810", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <Link href={`/s/${slug}`} style={{ fontSize: 13, color: "rgba(255,255,255,.35)", textDecoration: "none" }}>
          ← {biz.name}
        </Link>
        <a href="https://myleados.ai" target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: "rgba(255,255,255,.2)", textDecoration: "none" }}>
          Powered by <span style={{ fontWeight: 700, color: "rgba(255,255,255,.3)" }}>LeadOS</span>
        </a>
      </footer>
    </>
  );
}

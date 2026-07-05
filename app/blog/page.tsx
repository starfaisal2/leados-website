// LeadOS Blog — auto-populated from the CRM's Auto SEO module
// Uses Supabase REST API directly — no supabase-js package required.

import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog | LeadOS — AI CRM Insights",
  description: "Expert guides on AI CRM, WhatsApp automation, booking systems and revenue intelligence for clinics, real estate and service businesses.",
};

async function getArticles() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return [];

  const headers = {
    "apikey": key,
    "Authorization": `Bearer ${key}`,
    "Content-Type": "application/json",
  };

  // LEADOS_BUSINESS_ID must be set in Vercel env vars to the LeadOS business UUID.
  // Find it in Supabase → seo_articles → copy any article's business_id.
  const businessId = process.env.LEADOS_BUSINESS_ID;
  const businessFilter = businessId ? `&business_id=eq.${businessId}` : "";

  const artRes = await fetch(
    `${url}/rest/v1/seo_articles?status=eq.published${businessFilter}&select=id,title,slug,excerpt,meta_description,target_keyword,word_count,reading_time_mins,published_at,created_at&order=published_at.desc&limit=50`,
    { headers, next: { revalidate: 3600 } }
  );
  if (!artRes.ok) return [];
  return await artRes.json() ?? [];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPage() {
  const articles = await getArticles();

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 120px" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(79,70,229,.07)", border: "1px solid rgba(79,70,229,.12)", borderRadius: 20, padding: "5px 14px", fontSize: 12, fontWeight: 700, color: "#4f46e5", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 20 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4f46e5", display: "inline-block" }} />
          LeadOS Blog
        </div>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.15, marginBottom: 16 }}>
          AI, CRM &amp; Revenue Insights
        </h1>
        <p style={{ fontSize: 18, color: "#64748b", maxWidth: 540, margin: "0 auto", lineHeight: 1.65 }}>
          Practical guides for clinics, real estate teams and service businesses on using AI to capture more leads and book more appointments.
        </p>
      </div>

      {articles.length === 0 ? (
        <div style={{ textAlign: "center", padding: "80px 0", color: "#94a3b8" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>✍️</div>
          <p style={{ fontWeight: 600, color: "#64748b" }}>First articles coming soon.</p>
          <p style={{ fontSize: 14, marginTop: 8 }}>Our AI employee is writing content right now.</p>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
          {articles.map((article: any) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              style={{ textDecoration: "none", display: "block", background: "white", border: "1px solid #e2e8f0", borderRadius: 16, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,.06)" }}
              className="blog-card"
            >
              <div style={{ background: "linear-gradient(135deg, rgba(79,70,229,.06), rgba(37,99,235,.04))", padding: "18px 20px 0" }}>
                <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, color: "#4f46e5", background: "rgba(79,70,229,.08)", border: "1px solid rgba(79,70,229,.12)", borderRadius: 20, padding: "3px 10px", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  {article.target_keyword}
                </span>
              </div>
              <div style={{ padding: "12px 20px 20px" }}>
                <h2 style={{ fontSize: 17, fontWeight: 700, color: "#0f172a", lineHeight: 1.4, marginBottom: 10 }}>
                  {article.title}
                </h2>
                <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.6, marginBottom: 16, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {article.excerpt || article.meta_description}
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 12, color: "#94a3b8" }}>
                  <span>{formatDate(article.published_at || article.created_at)}</span>
                  <span>{article.reading_time_mins || Math.ceil((article.word_count || 800) / 200)} min read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .blog-card:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,.1);
          transform: translateY(-2px);
          transition: box-shadow .2s, transform .2s;
        }
      `}</style>
    </main>
  );
}

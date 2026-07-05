import type { Metadata } from "next";
import Link from "next/link";

function isArabic(text: string) {
  return /[؀-ۿ]/.test(text);
}

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog | LeadOS — AI CRM Insights",
  description:
    "Expert guides on AI CRM, WhatsApp automation, booking systems and revenue intelligence for clinics, real estate and service businesses.",
  openGraph: {
    title: "Blog | LeadOS — AI CRM Insights",
    description:
      "Expert guides on AI CRM, WhatsApp automation, booking systems and revenue intelligence for clinics, real estate and service businesses.",
    type: "website",
  },
};

async function getArticles() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return [];

  const headers = {
    apikey: key,
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
  };

  const businessId = process.env.LEADOS_BUSINESS_ID;
  const businessFilter = businessId ? `&business_id=eq.${businessId}` : "";

  const res = await fetch(
    `${url}/rest/v1/seo_articles?status=eq.published${businessFilter}&select=id,title,slug,excerpt,meta_description,target_keyword,word_count,reading_time_mins,published_at,created_at&order=published_at.desc&limit=50`,
    { headers, next: { revalidate: 3600 } }
  );
  if (!res.ok) return [];
  return (await res.json()) ?? [];
}

function readTime(article: { reading_time_mins?: number; word_count?: number }) {
  return article.reading_time_mins ?? Math.ceil((article.word_count ?? 800) / 200);
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const articles = await getArticles();
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
          padding: "100px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* background glow orbs */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)", width: 700, height: 400, background: "radial-gradient(ellipse, rgba(79,70,229,.18) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", bottom: 0, right: 0, width: 400, height: 300, background: "radial-gradient(ellipse, rgba(37,99,235,.12) 0%, transparent 70%)" }} />
        </div>

        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(79,70,229,.15)",
              border: "1px solid rgba(79,70,229,.3)",
              borderRadius: 20,
              padding: "6px 16px",
              fontSize: 12,
              fontWeight: 700,
              color: "#a5b4fc",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#818cf8", display: "inline-block" }} />
            LeadOS Blog
          </div>

          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 58px)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 20,
              background: "linear-gradient(135deg, #ffffff 0%, #a5b4fc 50%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AI, CRM &amp; Revenue Insights
          </h1>

          <p style={{ fontSize: 18, color: "rgba(255,255,255,.6)", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            Practical guides for clinics, real estate teams and service businesses on using AI to capture more leads and book more appointments.
          </p>
        </div>
      </section>

      <section style={{ background: "#f8f8f6", padding: "64px 24px 100px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>

          {articles.length === 0 ? (
            <div style={{ textAlign: "center", padding: "100px 0" }}>
              <div style={{ fontSize: 56, marginBottom: 20 }}>✍️</div>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: "#0f172a", marginBottom: 12 }}>
                First articles coming soon
              </h2>
              <p style={{ color: "#64748b", fontSize: 16 }}>
                Our AI employee is writing content right now — check back shortly.
              </p>
            </div>
          ) : (
            <>
              {/* ── Featured article ── */}
              {featured && (
                <Link
                  href={`/blog/${featured.slug}`}
                  style={{ textDecoration: "none", display: "block", marginBottom: 48 }}
                >
                  <article
                    style={{
                      background: "white",
                      border: "1px solid rgba(0,0,0,.07)",
                      borderRadius: 20,
                      overflow: "hidden",
                      boxShadow: "0 4px 24px rgba(0,0,0,.06)",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      minHeight: 320,
                      transition: "box-shadow .2s, transform .2s",
                    }}
                    className="featured-card"
                  >
                    {/* left: gradient visual */}
                    <div
                      style={{
                        background: "linear-gradient(135deg, #0f172a, #1e1b4b)",
                        padding: "48px 40px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
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
                            padding: "4px 12px",
                            marginBottom: 20,
                          }}
                        >
                          Featured
                        </span>
                        <h2
                          style={{
                            fontSize: "clamp(20px, 2.5vw, 28px)",
                            fontWeight: 800,
                            color: "white",
                            lineHeight: 1.3,
                            marginBottom: 16,
                          }}
                        >
                          {featured.title}
                        </h2>
                        <p style={{ color: "rgba(255,255,255,.55)", fontSize: 14, lineHeight: 1.7 }}>
                          {featured.excerpt || featured.meta_description}
                        </p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 32, fontSize: 12, color: "rgba(255,255,255,.4)" }}>
                        <span>{formatDate(featured.published_at || featured.created_at)}</span>
                        <span>·</span>
                        <span>{readTime(featured)} min read</span>
                      </div>
                    </div>

                    {/* right: keyword + cta */}
                    <div
                      style={{
                        padding: "48px 40px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        background: "white",
                      }}
                    >
                      <div>
                        <span
                          style={{
                            display: "inline-block",
                            background: "rgba(79,70,229,.07)",
                            border: "1px solid rgba(79,70,229,.15)",
                            color: "#4f46e5",
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            borderRadius: 20,
                            padding: "4px 12px",
                            marginBottom: 24,
                          }}
                        >
                          {featured.target_keyword}
                        </span>
                        <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.75 }}>
                          {featured.excerpt || featured.meta_description}
                        </p>
                      </div>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          background: "linear-gradient(135deg, #4f46e5, #2563eb)",
                          color: "white",
                          fontWeight: 700,
                          fontSize: 14,
                          padding: "12px 24px",
                          borderRadius: 10,
                          alignSelf: "flex-start",
                        }}
                      >
                        Read article →
                      </span>
                    </div>
                  </article>
                </Link>
              )}

              {/* ── Grid ── */}
              {rest.length > 0 && (
                <>
                  <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0f172a", marginBottom: 24 }}>
                    All Articles
                  </h2>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                      gap: 24,
                    }}
                  >
                    {rest.map((article: any) => (
                      <Link
                        key={article.id}
                        href={`/blog/${article.slug}`}
                        style={{ textDecoration: "none", display: "block" }}
                      >
                        <article
                          dir={isArabic(article.title || "") ? "rtl" : "ltr"}
                          style={{
                            background: "white",
                            border: "1px solid rgba(0,0,0,.07)",
                            borderRadius: 16,
                            overflow: "hidden",
                            boxShadow: "0 1px 4px rgba(0,0,0,.05)",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            transition: "box-shadow .2s, transform .2s",
                          }}
                          className="article-card"
                        >
                          {/* top accent bar */}
                          <div style={{ height: 4, background: "linear-gradient(90deg, #4f46e5, #2563eb, #00c8f0)" }} />

                          <div style={{ padding: "24px 24px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
                            <span
                              style={{
                                display: "inline-block",
                                background: "rgba(79,70,229,.07)",
                                border: "1px solid rgba(79,70,229,.12)",
                                color: "#4f46e5",
                                fontSize: 10,
                                fontWeight: 700,
                                letterSpacing: "0.07em",
                                textTransform: "uppercase",
                                borderRadius: 20,
                                padding: "3px 10px",
                                marginBottom: 14,
                                alignSelf: "flex-start",
                              }}
                            >
                              {article.target_keyword}
                            </span>

                            <h3
                              style={{
                                fontSize: 16,
                                fontWeight: 700,
                                color: "#0f172a",
                                lineHeight: 1.45,
                                marginBottom: 10,
                                flex: 1,
                              }}
                            >
                              {article.title}
                            </h3>

                            <p
                              style={{
                                fontSize: 13.5,
                                color: "#64748b",
                                lineHeight: 1.65,
                                marginBottom: 20,
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                              }}
                            >
                              {article.excerpt || article.meta_description}
                            </p>

                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                fontSize: 12,
                                color: "#94a3b8",
                                borderTop: "1px solid #f1f5f9",
                                paddingTop: 16,
                              }}
                            >
                              <span>{formatDate(article.published_at || article.created_at)}</span>
                              <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                {readTime(article)} min
                              </span>
                            </div>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a, #1e1b4b)",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "white", marginBottom: 16, lineHeight: 1.2 }}>
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
        .featured-card:hover { box-shadow: 0 12px 40px rgba(0,0,0,.12) !important; transform: translateY(-3px); }
        .article-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,.1) !important; transform: translateY(-2px); }
        @media (max-width: 768px) {
          .featured-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

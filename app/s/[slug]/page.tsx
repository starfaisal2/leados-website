import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 3600;
export const dynamicParams = true;

const SB_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SB_KEY = (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)!;
const hdrs = { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}` };

async function getTenantData(slug: string) {
  const bizRes = await fetch(
    `${SB_URL}/rest/v1/businesses?slug=eq.${encodeURIComponent(slug)}&select=id,name,slug,industry,logo_url,phone,whatsapp,email,website,settings&limit=1`,
    { headers: hdrs, next: { revalidate: 3600 } }
  );
  if (!bizRes.ok) return null;
  const bizArr = await bizRes.json();
  const biz = bizArr?.[0];
  if (!biz) return null;

  const [seoRes, articlesRes] = await Promise.all([
    fetch(
      `${SB_URL}/rest/v1/seo_settings?business_id=eq.${biz.id}&select=niche,target_locations,brand_voice,website_url&limit=1`,
      { headers: hdrs, next: { revalidate: 3600 } }
    ),
    fetch(
      `${SB_URL}/rest/v1/seo_articles?business_id=eq.${biz.id}&status=eq.published&select=id,title,slug,excerpt,target_keyword,reading_time_mins,word_count,published_at&order=published_at.desc&limit=3`,
      { headers: hdrs, next: { revalidate: 3600 } }
    ),
  ]);

  const seo = (await seoRes.json())?.[0] ?? {};
  const articles = (await articlesRes.json()) ?? [];
  const hosted: Record<string, any> = biz.settings?.hosted_site ?? {};

  return { biz, seo, articles, hosted };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = await getTenantData(slug);
  if (!data) return { title: "Not Found" };
  const { biz, hosted, seo } = data;
  const desc = hosted.description || seo.niche || `${biz.name} — ${biz.industry}`;
  return {
    title: `${biz.name} — ${hosted.tagline || biz.industry || "Welcome"}`,
    description: desc,
    openGraph: { title: biz.name, description: desc, type: "website" },
  };
}

function initials(name: string) {
  return name.split(" ").slice(0, 2).map((w: string) => w[0]).join("").toUpperCase();
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });
}

export default async function TenantSitePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getTenantData(slug);
  if (!data) notFound();

  const { biz, seo, articles, hosted } = data;
  const accent = hosted.accent_color || "#4f46e5";
  const accentDark = hosted.accent_color_dark || accent;
  const tagline = hosted.tagline || seo.niche || biz.industry || "";
  const description = hosted.description || seo.niche || "";
  const services: string[] = hosted.services || [];
  const locations: string[] = seo.target_locations || [];
  const contactUrl = biz.whatsapp
    ? `https://wa.me/${biz.whatsapp.replace(/\D/g, "")}?text=Hi%20${encodeURIComponent(biz.name)}%2C%20I%27d%20like%20to%20know%20more`
    : biz.website || "#";
  const hasContact = biz.whatsapp || biz.phone || biz.email;

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0a0a0f; color: #f1f5f9; }
        @keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-18px) } }
        @keyframes pulse-ring { 0% { transform: scale(.95); opacity:.7 } 70% { transform: scale(1.15); opacity:0 } 100% { transform: scale(.95); opacity:0 } }
        @keyframes fade-up { from { opacity:0; transform:translateY(28px) } to { opacity:1; transform:translateY(0) } }
        @keyframes shimmer { 0% { background-position: -200% center } 100% { background-position: 200% center } }
        .fade-up { animation: fade-up .7s ease both; }
        .fade-up-1 { animation-delay: .1s }
        .fade-up-2 { animation-delay: .22s }
        .fade-up-3 { animation-delay: .36s }
        .fade-up-4 { animation-delay: .5s }
        @media (max-width: 720px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-cta { justify-content: center !important; }
          .services-grid { grid-template-columns: 1fr 1fr !important; }
          .blog-grid { grid-template-columns: 1fr !important; }
          .contact-row { flex-direction: column !important; align-items: center !important; text-align: center; }
          .stats-row { gap: 24px !important; }
        }
        @media (max-width: 480px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .stats-row { flex-direction: column !important; align-items: center !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, backdropFilter: "blur(20px)", background: "rgba(10,10,15,.85)", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {biz.logo_url ? (
              <img src={biz.logo_url} alt={biz.name} style={{ height: 32, width: "auto", borderRadius: 6 }} />
            ) : (
              <div style={{ width: 32, height: 32, borderRadius: 8, background: `linear-gradient(135deg, ${accent}, ${accentDark})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "white" }}>
                {initials(biz.name)}
              </div>
            )}
            <span style={{ fontWeight: 700, fontSize: 15, color: "white" }}>{biz.name}</span>
          </div>
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            {articles.length > 0 && (
              <Link href={`/s/${slug}/blog`} style={{ fontSize: 13, color: "rgba(255,255,255,.55)", textDecoration: "none", fontWeight: 500, transition: "color .2s" }}>
                Blog
              </Link>
            )}
            <a
              href={contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 13, fontWeight: 700, color: "white", background: `linear-gradient(135deg, ${accent}, ${accentDark})`, padding: "8px 18px", borderRadius: 20, textDecoration: "none" }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 24px 80px", position: "relative", overflow: "hidden" }}>
        {/* Background orbs */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "15%", left: "10%", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${accent}22 0%, transparent 70%)`, filter: "blur(40px)", animation: "float 8s ease-in-out infinite" }} />
          <div style={{ position: "absolute", bottom: "10%", right: "5%", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${accent}15 0%, transparent 70%)`, filter: "blur(60px)", animation: "float 10s ease-in-out infinite reverse" }} />
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 800, height: 800, borderRadius: "50%", background: `radial-gradient(circle, ${accent}08 0%, transparent 60%)`, pointerEvents: "none" }} />
          {/* Grid pattern */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)`, backgroundSize: "60px 60px", maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)" }} />
        </div>

        <div className="hero-grid" style={{ maxWidth: 1100, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", position: "relative" }}>
          {/* Left — text */}
          <div>
            {biz.industry && (
              <div className="fade-up" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${accent}44`, background: `${accent}15`, borderRadius: 20, padding: "5px 14px", fontSize: 11, fontWeight: 700, color: accent, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 28 }}>
                <span>✦</span> {biz.industry}
              </div>
            )}
            <h1 className="fade-up fade-up-1" style={{ fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.03em", color: "white", marginBottom: 20, textWrap: "balance" }}>
              {biz.name}
            </h1>
            {tagline && (
              <p className="fade-up fade-up-2" style={{ fontSize: "clamp(16px, 2vw, 22px)", color: "rgba(255,255,255,.6)", lineHeight: 1.55, marginBottom: 36, fontWeight: 400, maxWidth: 480 }}>
                {tagline}
              </p>
            )}
            <div className="hero-cta fade-up fade-up-3" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a
                href={contactUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `linear-gradient(135deg, ${accent}, ${accentDark})`, color: "white", fontWeight: 700, fontSize: 15, padding: "14px 28px", borderRadius: 14, textDecoration: "none", boxShadow: `0 8px 30px ${accent}44` }}
              >
                {biz.whatsapp ? "💬 WhatsApp Us" : "✉ Get in Touch"}
              </a>
              {articles.length > 0 && (
                <Link
                  href={`/s/${slug}/blog`}
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.07)", color: "rgba(255,255,255,.8)", fontWeight: 600, fontSize: 15, padding: "14px 28px", borderRadius: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,.12)" }}
                >
                  Read our Blog →
                </Link>
              )}
            </div>
            {locations.length > 0 && (
              <p className="fade-up fade-up-4" style={{ marginTop: 28, fontSize: 12, color: "rgba(255,255,255,.3)", letterSpacing: "0.05em" }}>
                📍 Serving {locations.slice(0, 4).join(" · ")}
              </p>
            )}
          </div>

          {/* Right — logo card */}
          <div className="fade-up fade-up-2" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "relative" }}>
              {/* Pulse rings */}
              <div style={{ position: "absolute", inset: -40, borderRadius: "50%", border: `2px solid ${accent}33`, animation: "pulse-ring 3s ease-out infinite" }} />
              <div style={{ position: "absolute", inset: -20, borderRadius: "50%", border: `2px solid ${accent}22`, animation: "pulse-ring 3s ease-out infinite .8s" }} />
              {/* Main card */}
              <div style={{ width: 220, height: 220, borderRadius: "50%", background: `linear-gradient(135deg, #1a1a2e, #16213e)`, border: `3px solid ${accent}33`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 80px ${accent}22, 0 0 140px ${accent}11`, animation: "float 6s ease-in-out infinite" }}>
                {biz.logo_url ? (
                  <img src={biz.logo_url} alt={biz.name} style={{ width: "70%", height: "70%", objectFit: "contain", borderRadius: 12 }} />
                ) : (
                  <span style={{ fontSize: 72, fontWeight: 900, background: `linear-gradient(135deg, white, ${accent})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {initials(biz.name)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      {description && (
        <section style={{ padding: "100px 24px", background: "#0d0d16", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 1, height: "100%", background: `linear-gradient(to bottom, transparent, ${accent}44, transparent)` }} />
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative" }}>
            <div style={{ display: "inline-block", width: 40, height: 2, background: accent, borderRadius: 2, marginBottom: 24 }} />
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "white", marginBottom: 24, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              About Us
            </h2>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,.6)", lineHeight: 1.8, maxWidth: 640, margin: "0 auto" }}>
              {description}
            </p>
          </div>
        </section>
      )}

      {/* ── SERVICES ── */}
      {services.length > 0 && (
        <section style={{ padding: "100px 24px", background: "#0a0a0f" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <div style={{ display: "inline-block", width: 40, height: 2, background: accent, borderRadius: 2, marginBottom: 24 }} />
              <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "white", letterSpacing: "-0.02em" }}>
                What We Do
              </h2>
            </div>
            <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {services.map((s: string, i: number) => (
                <div
                  key={i}
                  style={{ background: "linear-gradient(135deg, rgba(255,255,255,.04), rgba(255,255,255,.02))", border: "1px solid rgba(255,255,255,.08)", borderRadius: 20, padding: "28px 24px", position: "relative", overflow: "hidden", transition: "border-color .3s" }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${accent}18`, border: `1px solid ${accent}33`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, fontSize: 20 }}>
                    ✦
                  </div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: "rgba(255,255,255,.9)", lineHeight: 1.5 }}>{s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BLOG PREVIEW ── */}
      {articles.length > 0 && (
        <section style={{ padding: "100px 24px", background: "#0d0d16" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56, flexWrap: "wrap", gap: 16 }}>
              <div>
                <div style={{ display: "inline-block", width: 40, height: 2, background: accent, borderRadius: 2, marginBottom: 20 }} />
                <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "white", letterSpacing: "-0.02em" }}>Latest Insights</h2>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,.4)", marginTop: 8 }}>Expert guides from our team</p>
              </div>
              <Link href={`/s/${slug}/blog`} style={{ fontSize: 13, fontWeight: 700, color: accent, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
                View all articles →
              </Link>
            </div>
            <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {articles.map((a: any, i: number) => (
                <Link key={a.id} href={`/s/${slug}/blog/${a.slug}`} style={{ textDecoration: "none", display: "block" }}>
                  <div style={{ background: "linear-gradient(135deg, rgba(255,255,255,.045), rgba(255,255,255,.02))", border: "1px solid rgba(255,255,255,.07)", borderRadius: 20, padding: "28px 24px", height: "100%", transition: "border-color .3s, transform .3s", position: "relative", overflow: "hidden" }}>
                    {i === 0 && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />}
                    <span style={{ display: "inline-block", background: `${accent}18`, color: accent, fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: 20, padding: "3px 10px", marginBottom: 16, border: `1px solid ${accent}33` }}>
                      {a.target_keyword}
                    </span>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,.9)", lineHeight: 1.4, marginBottom: 12 }}>{a.title}</h3>
                    {a.excerpt && <p style={{ fontSize: 13, color: "rgba(255,255,255,.4)", lineHeight: 1.65, marginBottom: 20, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{a.excerpt}</p>}
                    <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 11, color: "rgba(255,255,255,.28)" }}>
                      <span>{formatDate(a.published_at || a.created_at)}</span>
                      <span>·</span>
                      <span>{a.reading_time_mins ?? Math.ceil((a.word_count ?? 800) / 200)} min read</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CONTACT ── */}
      {hasContact && (
        <section style={{ padding: "100px 24px", background: "#0a0a0f", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${accent}0d, transparent)`, pointerEvents: "none" }} />
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative" }}>
            <div style={{ display: "inline-block", width: 40, height: 2, background: accent, borderRadius: 2, marginBottom: 24 }} />
            <h2 style={{ fontSize: "clamp(30px, 5vw, 52px)", fontWeight: 900, color: "white", marginBottom: 16, letterSpacing: "-0.025em" }}>
              Ready to Work Together?
            </h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,.5)", marginBottom: 44, lineHeight: 1.65 }}>
              Reach out and let's discuss how we can help you.
            </p>
            <div className="contact-row" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
              {biz.whatsapp && (
                <a
                  href={`https://wa.me/${biz.whatsapp.replace(/\D/g, "")}?text=Hi%20${encodeURIComponent(biz.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#25D366", color: "white", fontWeight: 700, fontSize: 16, padding: "16px 32px", borderRadius: 16, textDecoration: "none", boxShadow: "0 8px 30px rgba(37,211,102,.3)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Us
                </a>
              )}
              {biz.email && (
                <a
                  href={`mailto:${biz.email}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,.07)", color: "rgba(255,255,255,.8)", fontWeight: 600, fontSize: 16, padding: "16px 32px", borderRadius: 16, textDecoration: "none", border: "1px solid rgba(255,255,255,.12)" }}
                >
                  ✉ {biz.email}
                </a>
              )}
              {biz.phone && !biz.whatsapp && (
                <a
                  href={`tel:${biz.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: 10, background: `linear-gradient(135deg, ${accent}, ${accentDark})`, color: "white", fontWeight: 700, fontSize: 16, padding: "16px 32px", borderRadius: 16, textDecoration: "none" }}
                >
                  📞 {biz.phone}
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── FOOTER ── */}
      <footer style={{ padding: "32px 24px", borderTop: "1px solid rgba(255,255,255,.06)", background: "#080810" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {biz.logo_url ? (
              <img src={biz.logo_url} alt={biz.name} style={{ height: 24, width: "auto" }} />
            ) : (
              <div style={{ width: 24, height: 24, borderRadius: 6, background: `linear-gradient(135deg, ${accent}, ${accentDark})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 800, color: "white" }}>
                {initials(biz.name)}
              </div>
            )}
            <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,.5)" }}>{biz.name}</span>
          </div>
          {articles.length > 0 && (
            <Link href={`/s/${slug}/blog`} style={{ fontSize: 12, color: "rgba(255,255,255,.3)", textDecoration: "none" }}>
              Blog
            </Link>
          )}
          <a
            href="https://www.myleados.ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 11, color: "rgba(255,255,255,.2)", textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}
          >
            Powered by{" "}
            <span style={{ fontWeight: 700, color: "rgba(255,255,255,.35)" }}>LeadOS</span>
          </a>
        </div>
      </footer>
    </>
  );
}

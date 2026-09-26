import type { Metadata } from "next";
import Link from "next/link";
import WebsiteShowcase from "./WebsiteShowcase";

export const metadata: Metadata = {
  title: "AI Website Builder – LeadOS | Build Your Business Website Free",
  description:
    "Describe your business in plain English and get a complete, professional website in seconds. No code, no designers. Free to build, publish when you're ready.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LeadOS Website Builder",
  applicationCategory: "BusinessApplication",
  description: "AI-powered website builder. Describe your business, get a complete site in seconds. Free to start.",
  url: "https://myleados.ai/website-builder",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free to build and preview" },
  operatingSystem: "Web",
  provider: { "@type": "Organization", name: "LeadOS", url: "https://myleados.ai" },
};

const FEATURES = [
  { icon: "⚡", title: "60-second generation", desc: "Your full website — hero, services, about, contact — built and preview-ready in under a minute." },
  { icon: "✍️", title: "Edit in plain English", desc: "Click any section and say what you want. 'More urgent', 'translate to Arabic', 'add a pricing table'." },
  { icon: "📸", title: "Images sourced for you", desc: "High-quality, industry-matched visuals pulled automatically. No stock photo hunting required." },
  { icon: "📍", title: "Lead capture built in", desc: "Contact forms and WhatsApp CTAs wired up from day one. Every lead goes straight to your CRM." },
  { icon: "🌐", title: "Custom domain, one click", desc: "Connect your own domain or use a free LeadOS subdomain. SSL included, no technical setup." },
  { icon: "📈", title: "Auto SEO articles", desc: "Upgrade and get 15–45 keyword-targeted articles published to your site every month, automatically." },
];

const PRICING = [
  {
    name: "Free",
    price: "$0",
    per: "forever",
    desc: "Build and preview with no commitment.",
    features: ["1 website", "AI site generation", "AI editing", "LeadOS subdomain", "Lead capture forms", "Mobile responsive"],
    cta: "Build for free →",
    href: "https://sites.myleados.ai/signup",
    highlight: false,
  },
  {
    name: "Website Pro",
    price: "$19",
    per: "/ month",
    desc: "Go live on your own domain.",
    features: ["Everything in Free", "Custom domain", "Remove LeadOS branding", "Advanced analytics", "Priority support", "Unlimited edits"],
    cta: "Get Pro →",
    href: "https://sites.myleados.ai/signup",
    highlight: true,
  },
  {
    name: "Pro + Auto SEO",
    price: "$59",
    per: "/ month",
    desc: "Your site + a content machine.",
    features: ["Everything in Pro", "15–45 SEO articles/month", "Keyword research included", "Auto-publish to your site", "Google indexing", "Backlink building"],
    cta: "Get SEO →",
    href: "https://sites.myleados.ai/signup",
    highlight: false,
  },
];

export default function WebsiteBuilderPage() {
  const BUILDER_URL = "https://sites.myleados.ai/signup";
  const BOOK_URL = "https://wa.me/971568350424?text=Hi%20LeadOS%2C%20I%20want%20to%20learn%20about%20the%20Website%20Builder";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        .wb * { box-sizing: border-box; margin: 0; padding: 0; }
        .wb-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: #4f46e5; color: white; font-weight: 700; font-size: 16px;
          padding: 16px 36px; border-radius: 14px; text-decoration: none;
          transition: background 0.15s, transform 0.1s;
        }
        .wb-btn-primary:hover { background: #4338ca; transform: translateY(-1px); }
        .wb-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.7);
          border: 1.5px solid rgba(255,255,255,0.12);
          font-weight: 600; font-size: 15px; padding: 16px 32px;
          border-radius: 14px; text-decoration: none; transition: background 0.15s;
        }
        .wb-btn-ghost:hover { background: rgba(255,255,255,0.13); }
        .wb-feature:hover { box-shadow: 0 16px 48px rgba(0,0,0,0.08); transform: translateY(-2px); }
        @keyframes wb-fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .wb-hero-animate { animation: wb-fade-up 0.7s ease both; }
        .wb-hero-animate-d1 { animation-delay: 0.1s; }
        .wb-hero-animate-d2 { animation-delay: 0.22s; }
        .wb-hero-animate-d3 { animation-delay: 0.36s; }
        @keyframes wb-type {
          0%,20%  { content: "I run a dental clinic in Dubai"; }
          25%,45% { content: "Real estate agency in Abu Dhabi"; }
          50%,70% { content: "Wellness spa in Downtown Dubai"; }
          75%,95% { content: "Restaurant near JBR Marina"; }
          100%    { content: "I run a dental clinic in Dubai"; }
        }
        @keyframes wb-cursor { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        .wb-typewriter::after {
          content: "I run a dental clinic in Dubai";
          animation: wb-type 14s steps(1) infinite;
        }
        .wb-cursor { display:inline-block; width:2px; height:20px; background:#6366f1; border-radius:1px; margin-left:2px; animation: wb-cursor 0.8s step-end infinite; vertical-align:middle; }
        @media (max-width: 768px) {
          .wb-features-grid { grid-template-columns: 1fr !important; }
          .wb-pricing-grid { grid-template-columns: 1fr !important; }
          .wb-steps-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .wb-steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <main className="wb" style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#06061a", color: "white" }}>

        {/* ─── HERO ─── */}
        <section style={{
          padding: "120px 24px 100px",
          textAlign: "center",
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.25) 0%, transparent 70%), #06061a",
        }}>
          <div style={{ maxWidth: 840, margin: "0 auto" }}>

            <div className="wb-hero-animate" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.35)",
              borderRadius: 40, padding: "7px 18px 7px 12px",
              fontSize: 13, fontWeight: 600, color: "#a5b4fc", marginBottom: 40,
            }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block", flexShrink: 0 }} />
              AI Website Builder · Free to start · No credit card
            </div>

            <h1 className="wb-hero-animate wb-hero-animate-d1" style={{
              fontSize: "clamp(48px, 7.5vw, 96px)",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "white",
              marginBottom: 28,
            }}>
              Your business website,<br />
              <span style={{ color: "#818cf8" }}>built by AI.</span>
            </h1>

            <p className="wb-hero-animate wb-hero-animate-d2" style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.7,
              maxWidth: 520,
              margin: "0 auto 52px",
            }}>
              Describe your business in plain English. LeadOS builds a complete, professional website — copy, images, sections — in under 60 seconds.
            </p>

            {/* Input CTA */}
            <div className="wb-hero-animate wb-hero-animate-d3" style={{ marginBottom: 48 }}>
              <a
                href={BUILDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "white",
                  border: "2px solid rgba(255,255,255,0.15)",
                  borderRadius: 20,
                  padding: "18px 18px 18px 24px",
                  maxWidth: 620,
                  margin: "0 auto",
                  textDecoration: "none",
                  boxShadow: "0 0 0 1px rgba(99,102,241,0.2), 0 8px 40px rgba(0,0,0,0.3)",
                  transition: "box-shadow 0.2s",
                  cursor: "text",
                }}
              >
                <div style={{ flex: 1, textAlign: "left" }}>
                  <div style={{ fontSize: 11, color: "#9ca3af", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>
                    Describe your business…
                  </div>
                  <div style={{ fontSize: 16, color: "#374151" }}>
                    <span className="wb-typewriter" />
                    <span className="wb-cursor" />
                  </div>
                </div>
                <div style={{
                  background: "#4f46e5", color: "white", fontWeight: 700, fontSize: 15,
                  padding: "13px 24px", borderRadius: 14, flexShrink: 0, whiteSpace: "nowrap",
                }}>
                  Build free →
                </div>
              </a>
            </div>

            {/* Trust bar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
              <div style={{ display: "flex", gap: 3 }}>
                {[1,2,3,4,5].map(i => <span key={i} style={{ color: "#fbbf24", fontSize: 16 }}>★</span>)}
              </div>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.4)" }}>
                <strong style={{ color: "white" }}>4.9/5</strong> from 200+ businesses
              </span>
              <span style={{ width: 1, height: 14, background: "rgba(255,255,255,0.12)", display: "inline-block" }} />
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.4)" }}>Free forever to build & preview</span>
            </div>
          </div>
        </section>

        {/* ─── STATS ─── */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap" }}>
            {[
              { num: "60s", label: "Average generation time" },
              { num: "$0", label: "To build and preview" },
              { num: "50+", label: "Business categories" },
              { num: "100%", label: "AI-written copy & layout" },
            ].map(({ num, label }) => (
              <div key={num} style={{ flex: "1 1 180px", textAlign: "center", padding: "32px 20px", borderRight: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ fontSize: 40, fontWeight: 900, color: "white", letterSpacing: "-0.03em", lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", marginTop: 6 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── INTERACTIVE SHOWCASE ─── */}
        <section style={{ padding: "100px 24px", background: "#0a0a1a" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#6366f1", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
                Live Preview
              </p>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "white", letterSpacing: "-0.03em", marginBottom: 12 }}>
                See your industry. Built in seconds.
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.4)", maxWidth: 480, margin: "0 auto" }}>
                Pick a category below and see exactly what LeadOS AI generates for that business type.
              </p>
            </div>
            <WebsiteShowcase />
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section style={{ padding: "100px 24px", background: "#06061a" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div style={{ marginBottom: 64 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#6366f1", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
                How It Works
              </p>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "white", letterSpacing: "-0.03em", maxWidth: 520 }}>
                From blank page to live website in 4 steps.
              </h2>
            </div>
            <div className="wb-steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
              {[
                { num: "01", title: "Describe your business", desc: "Your name, type, and what you offer. Plain English — no forms, no templates to fill." },
                { num: "02", title: "AI builds your site", desc: "Full copy, layout, images, and sections — tailored to your industry in under 60 seconds." },
                { num: "03", title: "Edit in plain English", desc: "Click any section and say what you want changed. 'More professional', 'add urgency', 'Arabic please'." },
                { num: "04", title: "Go live on your domain", desc: "One click to publish. Your own domain or a free LeadOS subdomain. SSL included." },
              ].map(({ num, title, desc }) => (
                <div key={num} style={{
                  padding: "32px 24px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 18,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: "#6366f1", letterSpacing: "0.06em" }}>{num}</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "white", lineHeight: 1.3 }}>{title}</div>
                  <div style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FEATURES ─── */}
        <section style={{ padding: "100px 24px", background: "#0a0a1a" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div style={{ marginBottom: 64 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#6366f1", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
                What's included
              </p>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "white", letterSpacing: "-0.03em", maxWidth: 460 }}>
                Not just a website. A growth engine.
              </h2>
            </div>
            <div className="wb-features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {FEATURES.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="wb-feature"
                  style={{
                    padding: "32px 28px",
                    borderRadius: 20,
                    border: "1px solid rgba(255,255,255,0.07)",
                    background: "rgba(255,255,255,0.03)",
                    transition: "box-shadow 0.2s, transform 0.2s",
                  }}
                >
                  <div style={{ fontSize: 28, marginBottom: 20 }}>{icon}</div>
                  <div style={{ fontSize: 17, fontWeight: 800, color: "white", marginBottom: 10 }}>{title}</div>
                  <div style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.75 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PRICING ─── */}
        <section style={{ padding: "100px 24px", background: "#06061a" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#6366f1", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Pricing</p>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "white", letterSpacing: "-0.03em", marginBottom: 12 }}>
                Start free. Grow when you're ready.
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.4)" }}>No credit card to build and preview your site.</p>
            </div>
            <div className="wb-pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, alignItems: "start" }}>
              {PRICING.map(({ name, price, per, desc, features, cta, href, highlight }) => (
                <div key={name} style={{
                  position: "relative",
                  borderRadius: 24,
                  padding: "36px 32px",
                  border: highlight ? "1.5px solid #6366f1" : "1.5px solid rgba(255,255,255,0.08)",
                  background: highlight ? "linear-gradient(135deg, #312e81, #1e1b4b)" : "rgba(255,255,255,0.03)",
                  boxShadow: highlight ? "0 0 0 4px rgba(99,102,241,0.15)" : "none",
                }}>
                  {highlight && (
                    <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: "#6366f1", color: "white", fontWeight: 800, fontSize: 11, borderRadius: 40, padding: "4px 16px", whiteSpace: "nowrap" }}>
                      MOST POPULAR
                    </div>
                  )}
                  <div style={{ fontSize: 12, fontWeight: 700, color: highlight ? "#a5b4fc" : "rgba(255,255,255,0.35)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>{name}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 8 }}>
                    <span style={{ fontSize: 52, fontWeight: 900, color: "white", letterSpacing: "-0.03em", lineHeight: 1 }}>{price}</span>
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.35)" }}>{per}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 24 }}>{desc}</p>
                  <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: 24 }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
                    {features.map(f => (
                      <div key={f} style={{ display: "flex", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.7)", alignItems: "flex-start" }}>
                        <span style={{ color: "#6366f1", fontWeight: 700, marginTop: 1 }}>✓</span>
                        {f}
                      </div>
                    ))}
                  </div>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block", textAlign: "center",
                      background: highlight ? "#6366f1" : "rgba(255,255,255,0.08)",
                      color: "white",
                      border: highlight ? "none" : "1px solid rgba(255,255,255,0.12)",
                      fontWeight: 700, fontSize: 15, padding: "14px 20px",
                      borderRadius: 12, textDecoration: "none", transition: "opacity 0.15s",
                    }}
                  >
                    {cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section style={{ padding: "120px 24px", background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(99,102,241,0.3) 0%, transparent 70%), #06061a", textAlign: "center" }}>
          <div style={{ maxWidth: 620, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 900, color: "white", marginBottom: 20, lineHeight: 0.95, letterSpacing: "-0.04em" }}>
              Your website is<br />60 seconds away.
            </h2>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", marginBottom: 48, lineHeight: 1.65 }}>
              No designers. No code. No templates. Just describe your business and LeadOS builds it — free.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={BUILDER_URL} target="_blank" rel="noopener noreferrer" className="wb-btn-primary">
                Build your website free →
              </a>
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="wb-btn-ghost">
                Book a Demo
              </a>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.2)", marginTop: 24 }}>
              Free forever · No credit card · Setup in minutes
            </p>
          </div>
        </section>

        {/* Footer */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px", textAlign: "center" }}>
          <div style={{ fontSize: 13, color: "#4b5563" }}>
            Website Builder by{" "}
            <Link href="/" style={{ color: "#6b7280", textDecoration: "none", fontWeight: 600 }}>LeadOS</Link>
            {" · "}
            <Link href="/privacy" style={{ color: "#4b5563", textDecoration: "none" }}>Privacy</Link>
            {" · "}
            <Link href="/terms" style={{ color: "#4b5563", textDecoration: "none" }}>Terms</Link>
          </div>
        </div>

      </main>
    </>
  );
}

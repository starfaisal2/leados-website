import type { Metadata } from "next";
import Link from "next/link";
import WebsiteShowcase from "./WebsiteShowcase";

export const metadata: Metadata = {
  title: "Website Builder – LeadOS | Build Your Business Website Free",
  description:
    "Describe your business and LeadOS builds a complete, professional website in seconds. No code, no designers. Free to build, publish when you're ready.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LeadOS Website Builder",
  applicationCategory: "BusinessApplication",
  description: "Website builder. Describe your business, get a complete site in seconds. Free to start.",
  url: "https://myleados.ai/website-builder",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free to build and preview" },
  operatingSystem: "Web",
  provider: { "@type": "Organization", name: "LeadOS", url: "https://myleados.ai" },
};

const FEATURES = [
  { icon: "⚡", title: "Ready in 60 seconds", desc: "Your full website — hero, services, about, contact — built and preview-ready in under a minute." },
  { icon: "✍️", title: "Edit in plain English", desc: "Click any section and say what you want. 'More urgent', 'translate to Arabic', 'add a pricing table'." },
  { icon: "📸", title: "Images sourced for you", desc: "High-quality, industry-matched visuals pulled automatically. No stock photo hunting required." },
  { icon: "📍", title: "Lead capture built in", desc: "Contact forms and WhatsApp CTAs wired up from day one. Every lead goes straight to your CRM." },
  { icon: "🌐", title: "Custom domain, one click", desc: "Connect your own domain or use a free LeadOS subdomain. SSL included, no technical setup." },
  { icon: "📈", title: "Auto SEO content", desc: "Upgrade and get 15–45 keyword-targeted articles published to your site every month, automatically." },
];

const PRICING = [
  {
    name: "Free",
    price: "$0",
    per: "forever",
    desc: "Build and preview with no commitment.",
    features: ["1 website", "LeadOS site generation", "Plain-English editing", "LeadOS subdomain", "Lead capture forms", "Mobile responsive"],
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
    desc: "Your site + a content engine.",
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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        :root { --bg: #f9f8f6; --ink: #0f0f0f; --ink2: #3d3d3d; --ink3: #7a7a7a; --border: #e8e5e0; --blue: #2563eb; --blue-light: #eff4ff; }
        .wb * { box-sizing: border-box; margin: 0; padding: 0; }
        .wb { font-family: 'Inter', system-ui, sans-serif; background: var(--bg); color: var(--ink); }
        .wb-cta {
          display: inline-flex; align-items: center;
          background: var(--ink); color: white;
          font-weight: 600; font-size: 15px; padding: 14px 28px;
          border-radius: 100px; text-decoration: none;
          transition: opacity 0.15s;
        }
        .wb-cta:hover { opacity: 0.85; }
        .wb-cta-outline {
          display: inline-flex; align-items: center;
          background: transparent; color: var(--ink2);
          border: 1.5px solid var(--border);
          font-weight: 500; font-size: 15px; padding: 14px 28px;
          border-radius: 100px; text-decoration: none;
          transition: border-color 0.15s;
        }
        .wb-cta-outline:hover { border-color: #aaa; }
        .wb-feature { transition: box-shadow 0.2s; }
        .wb-feature:hover { box-shadow: 0 4px 24px rgba(0,0,0,0.06); }
        @media (max-width: 768px) {
          .wb-features-grid { grid-template-columns: 1fr 1fr !important; }
          .wb-pricing-grid { grid-template-columns: 1fr !important; }
          .wb-steps-grid { grid-template-columns: 1fr 1fr !important; }
          .wb-hero-btns { flex-direction: column !important; align-items: stretch !important; }
          .wb-hero-btns a { text-align: center; justify-content: center; }
        }
        @media (max-width: 480px) {
          .wb-features-grid { grid-template-columns: 1fr !important; }
          .wb-steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <main className="wb">

        {/* ─── HERO ─── */}
        <section style={{
          padding: "80px 24px 72px",
          textAlign: "center",
          background: "radial-gradient(ellipse 100% 80% at 50% 0%, #ddeeff 0%, #f9f8f6 60%)",
        }}>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>

            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "white", border: "1px solid var(--border)",
              borderRadius: 40, padding: "6px 14px 6px 10px",
              fontSize: 13, fontWeight: 500, color: "var(--ink2)", marginBottom: 36,
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
              Free to start · No credit card
            </div>

            <h1 style={{
              fontSize: "clamp(40px, 7vw, 72px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "var(--ink)",
              marginBottom: 20,
            }}>
              Your business website,<br />built by LeadOS.
            </h1>

            <p style={{
              fontSize: "clamp(16px, 2vw, 19px)",
              color: "var(--ink3)",
              lineHeight: 1.65,
              maxWidth: 480,
              margin: "0 auto 40px",
              fontWeight: 400,
            }}>
              Describe your business in plain English. LeadOS builds a complete, professional website in seconds. No agency, no code.
            </p>

            <div className="wb-hero-btns" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 52 }}>
              <a href={BUILDER_URL} target="_blank" rel="noopener noreferrer" className="wb-cta">
                Build your website free
              </a>
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="wb-cta-outline">
                Book a demo
              </a>
            </div>

            {/* Trust line */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
              <div style={{ display: "flex", gap: 2 }}>
                {[1,2,3,4,5].map(i => <span key={i} style={{ color: "#f59e0b", fontSize: 15 }}>★</span>)}
              </div>
              <span style={{ fontSize: 14, color: "var(--ink3)" }}>
                <strong style={{ color: "var(--ink)", fontWeight: 600 }}>4.9/5</strong> · 200+ LeadOS customers
              </span>
              <span style={{ width: 1, height: 12, background: "var(--border)", display: "inline-block" }} />
              <span style={{ fontSize: 14, color: "var(--ink3)" }}>Free to build &amp; preview</span>
            </div>
          </div>
        </section>

        {/* ─── STATS BAR ─── */}
        <div style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "white" }}>
          <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", flexWrap: "wrap" }}>
            {[
              { num: "60s", label: "Average build time" },
              { num: "$0", label: "To build and preview" },
              { num: "50+", label: "Business categories" },
              { num: "100%", label: "Editable after generation" },
            ].map(({ num, label }) => (
              <div key={num} style={{ flex: "1 1 160px", textAlign: "center", padding: "28px 16px", borderRight: "1px solid var(--border)" }}>
                <div style={{ fontSize: 34, fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.03em", lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: 12, color: "var(--ink3)", marginTop: 5 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── INTERACTIVE SHOWCASE ─── */}
        <section style={{ padding: "88px 24px", background: "var(--bg)" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div style={{ marginBottom: 48 }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: "var(--blue)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
                Live Preview
              </p>
              <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.025em", marginBottom: 10 }}>
                See your industry built by LeadOS.
              </h2>
              <p style={{ fontSize: 16, color: "var(--ink3)", maxWidth: 460 }}>
                Pick a category and see exactly what LeadOS builds for that business type.
              </p>
            </div>
            <WebsiteShowcase />
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section style={{ padding: "88px 24px", background: "white", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "var(--blue)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
              How It Works
            </p>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.025em", marginBottom: 52, maxWidth: 480 }}>
              From blank page to live website in 4 steps.
            </h2>
            <div className="wb-steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
              {[
                { num: "1", title: "Describe your business", desc: "Your name, type, and what you offer. Plain English — no forms or templates." },
                { num: "2", title: "LeadOS builds it", desc: "Full copy, layout, images, and sections tailored to your industry in under 60 seconds." },
                { num: "3", title: "Edit in plain English", desc: "Click any section and say what you want changed. 'More professional', 'in Arabic please'." },
                { num: "4", title: "Go live on your domain", desc: "One click to publish. Your own domain or a free LeadOS subdomain. SSL included." },
              ].map(({ num, title, desc }) => (
                <div key={num} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--blue-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "var(--blue)" }}>
                    {num}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "var(--ink)", lineHeight: 1.3 }}>{title}</div>
                  <div style={{ fontSize: 14, color: "var(--ink3)", lineHeight: 1.7 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FEATURES ─── */}
        <section style={{ padding: "88px 24px", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "var(--blue)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
              What's included
            </p>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.025em", marginBottom: 52, maxWidth: 440 }}>
              Not just a website. A growth engine.
            </h2>
            <div className="wb-features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {FEATURES.map(({ icon, title, desc }) => (
                <div key={title} className="wb-feature" style={{
                  padding: "28px 24px", borderRadius: 16,
                  border: "1px solid var(--border)", background: "white",
                }}>
                  <div style={{ fontSize: 24, marginBottom: 14 }}>{icon}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "var(--ink)", marginBottom: 8 }}>{title}</div>
                  <div style={{ fontSize: 13.5, color: "var(--ink3)", lineHeight: 1.7 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PRICING ─── */}
        <section style={{ padding: "88px 24px", background: "white", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: "var(--blue)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>Pricing</p>
              <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.025em", marginBottom: 10 }}>
                Start free. Grow when you're ready.
              </h2>
              <p style={{ fontSize: 16, color: "var(--ink3)" }}>No credit card to build and preview your site.</p>
            </div>
            <div className="wb-pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, alignItems: "start" }}>
              {PRICING.map(({ name, price, per, desc, features, cta, href, highlight }) => (
                <div key={name} style={{
                  position: "relative",
                  borderRadius: 20,
                  padding: "32px 28px",
                  border: highlight ? "2px solid var(--ink)" : "1.5px solid var(--border)",
                  background: highlight ? "var(--ink)" : "white",
                }}>
                  {highlight && (
                    <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#2563eb", color: "white", fontWeight: 700, fontSize: 10, borderRadius: 40, padding: "3px 14px", whiteSpace: "nowrap", letterSpacing: "0.06em" }}>
                      MOST POPULAR
                    </div>
                  )}
                  <div style={{ fontSize: 11, fontWeight: 700, color: highlight ? "rgba(255,255,255,0.45)" : "var(--ink3)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.07em" }}>{name}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 6 }}>
                    <span style={{ fontSize: 44, fontWeight: 800, color: highlight ? "white" : "var(--ink)", letterSpacing: "-0.03em", lineHeight: 1 }}>{price}</span>
                    <span style={{ fontSize: 13, color: highlight ? "rgba(255,255,255,0.4)" : "var(--ink3)" }}>{per}</span>
                  </div>
                  <p style={{ fontSize: 13, color: highlight ? "rgba(255,255,255,0.5)" : "var(--ink3)", marginBottom: 20 }}>{desc}</p>
                  <div style={{ height: 1, background: highlight ? "rgba(255,255,255,0.1)" : "var(--border)", marginBottom: 20 }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                    {features.map(f => (
                      <div key={f} style={{ display: "flex", gap: 9, fontSize: 13.5, color: highlight ? "rgba(255,255,255,0.75)" : "var(--ink2)", alignItems: "flex-start" }}>
                        <span style={{ color: highlight ? "rgba(255,255,255,0.5)" : "var(--blue)", fontWeight: 700, marginTop: 1 }}>✓</span>
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
                      background: highlight ? "white" : "var(--ink)",
                      color: highlight ? "var(--ink)" : "white",
                      fontWeight: 700, fontSize: 14, padding: "13px 20px",
                      borderRadius: 100, textDecoration: "none", transition: "opacity 0.15s",
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
        <section style={{
          padding: "100px 24px",
          textAlign: "center",
          background: "radial-gradient(ellipse 80% 70% at 50% 100%, #ddeeff 0%, #f9f8f6 60%)",
          borderTop: "1px solid var(--border)",
        }}>
          <div style={{ maxWidth: 560, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(36px, 6vw, 60px)", fontWeight: 700, color: "var(--ink)", marginBottom: 16, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
              Your website is<br />60 seconds away.
            </h2>
            <p style={{ fontSize: 17, color: "var(--ink3)", marginBottom: 40, lineHeight: 1.65 }}>
              No designers. No agency. No code. Just describe your business and LeadOS builds it — free.
            </p>
            <div className="wb-hero-btns" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={BUILDER_URL} target="_blank" rel="noopener noreferrer" className="wb-cta">
                Build your website free
              </a>
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="wb-cta-outline">
                Book a Demo
              </a>
            </div>
            <p style={{ fontSize: 13, color: "var(--ink3)", marginTop: 20, opacity: 0.6 }}>
              Free forever · No credit card · Setup in minutes
            </p>
          </div>
        </section>

        {/* Footer */}
        <div style={{ borderTop: "1px solid var(--border)", padding: "20px 24px", textAlign: "center", background: "white" }}>
          <div style={{ fontSize: 13, color: "var(--ink3)" }}>
            Website Builder by{" "}
            <Link href="/" style={{ color: "var(--ink2)", textDecoration: "none", fontWeight: 600 }}>LeadOS</Link>
            {" · "}
            <Link href="/privacy" style={{ color: "var(--ink3)", textDecoration: "none" }}>Privacy</Link>
            {" · "}
            <Link href="/terms" style={{ color: "var(--ink3)", textDecoration: "none" }}>Terms</Link>
          </div>
        </div>

      </main>
    </>
  );
}

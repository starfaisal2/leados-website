import type { Metadata } from "next";
import Link from "next/link";

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

// Template preview data - realistic looking mini-sites
const TEMPLATES = [
  {
    id: "dental",
    label: "Dental Clinic",
    accentColor: "#0ea5e9",
    bg: "#f0f9ff",
    headerBg: "#0c4a6e",
    headerColor: "white",
    heroTitle: "Dubai's Trusted Dental Clinic",
    heroSub: "Book same-day · 15+ yrs experience",
    ctaText: "Book Appointment",
    sections: ["Services", "Team", "Gallery", "Contact"],
    badge: "42s",
  },
  {
    id: "realestate",
    label: "Real Estate Agency",
    accentColor: "#d4af37",
    bg: "#1a1a2e",
    headerBg: "#16213e",
    headerColor: "white",
    heroTitle: "Luxury Properties in Abu Dhabi",
    heroSub: "Over 500 properties · Free valuation",
    ctaText: "Browse Listings",
    sections: ["Buy", "Rent", "Sell", "About"],
    badge: "38s",
  },
  {
    id: "spa",
    label: "Wellness & Spa",
    accentColor: "#a78bfa",
    bg: "#fdf4ff",
    headerBg: "#4a1d96",
    headerColor: "white",
    heroTitle: "Your Sanctuary in Downtown Dubai",
    heroSub: "Premium treatments · Members only",
    ctaText: "Book a Session",
    sections: ["Treatments", "Packages", "Membership", "Gallery"],
    badge: "51s",
  },
  {
    id: "restaurant",
    label: "Restaurant",
    accentColor: "#f97316",
    bg: "#fff7ed",
    headerBg: "#431407",
    headerColor: "white",
    heroTitle: "Authentic Lebanese Cuisine",
    heroSub: "Open daily 12pm–12am · Reservations",
    ctaText: "Reserve a Table",
    sections: ["Menu", "Reservations", "Events", "Gallery"],
    badge: "44s",
  },
  {
    id: "lawfirm",
    label: "Law Firm",
    accentColor: "#0f766e",
    bg: "#f0fdfa",
    headerBg: "#134e4a",
    headerColor: "white",
    heroTitle: "Trusted Legal Counsel in the UAE",
    heroSub: "Corporate · Civil · Immigration law",
    ctaText: "Free Consultation",
    sections: ["Practice Areas", "Team", "Cases", "Contact"],
    badge: "57s",
  },
  {
    id: "fitness",
    label: "Fitness Studio",
    accentColor: "#22c55e",
    bg: "#0f172a",
    headerBg: "#052e16",
    headerColor: "white",
    heroTitle: "Train Hard. Live Strong.",
    heroSub: "6am–11pm daily · Classes + Personal Training",
    ctaText: "Start Free Trial",
    sections: ["Classes", "Trainers", "Pricing", "Join"],
    badge: "33s",
  },
  {
    id: "consulting",
    label: "Business Consulting",
    accentColor: "#3b82f6",
    bg: "#eff6ff",
    headerBg: "#1e3a5f",
    headerColor: "white",
    heroTitle: "Scale Your Business with Clarity",
    heroSub: "Strategy · Operations · Growth",
    ctaText: "Book Strategy Call",
    sections: ["Services", "Results", "Team", "Contact"],
    badge: "46s",
  },
  {
    id: "cafe",
    label: "Coffee & Café",
    accentColor: "#92400e",
    bg: "#fefce8",
    headerBg: "#451a03",
    headerColor: "white",
    heroTitle: "Specialty Coffee in JBR Marina",
    heroSub: "Ethically sourced · Open 7am–10pm",
    ctaText: "Order Online",
    sections: ["Menu", "Locations", "Events", "Story"],
    badge: "29s",
  },
];

const FEATURES = [
  { icon: "⚡", title: "60-second generation", desc: "Your entire website — hero, services, about, contact — built and ready to preview in under a minute." },
  { icon: "✍️", title: "AI in-line editing", desc: "Click any text and say what you want. 'More urgent' or 'translate to Arabic' — done instantly." },
  { icon: "📸", title: "Images included", desc: "High-quality, industry-matched images sourced automatically. No stock photo hunting." },
  { icon: "📍", title: "Lead capture ready", desc: "Contact forms and WhatsApp CTAs wired up from day one. Leads go straight to your CRM." },
  { icon: "🌐", title: "Custom domain", desc: "Connect your own domain or use a free LeadOS subdomain. SSL included, one click to go live." },
  { icon: "📈", title: "Auto SEO articles", desc: "Upgrade to SEO and get 15–45 keyword-targeted articles published to your site every month." },
];

const PRICING = [
  {
    name: "Free",
    price: "$0",
    per: "forever",
    features: ["1 website", "AI site generation", "AI editing", "LeadOS subdomain", "Lead capture forms", "Mobile responsive"],
    cta: "Build for free →",
    href: "https://sites.myleados.ai/signup",
    highlight: false,
  },
  {
    name: "Website Pro",
    price: "$19",
    per: "/ month",
    features: ["Everything in Free", "Custom domain", "Remove LeadOS branding", "Priority support", "Advanced analytics", "Unlimited edits"],
    cta: "Get Pro →",
    href: "https://sites.myleados.ai/signup",
    highlight: true,
  },
  {
    name: "Pro + Auto SEO",
    price: "$59",
    per: "/ month",
    features: ["Everything in Pro", "15–45 SEO articles/month", "Keyword research included", "Auto-publish to your site", "Google indexing", "Backlink building"],
    cta: "Get SEO →",
    href: "https://sites.myleados.ai/signup",
    highlight: false,
  },
];

function TemplateCard({ t }: { t: typeof TEMPLATES[0] }) {
  const isDark = ["realestate", "fitness"].includes(t.id);
  return (
    <div style={{
      width: 240,
      flexShrink: 0,
      background: t.bg,
      borderRadius: 16,
      overflow: "hidden",
      border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "#e5e7eb"}`,
      boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      fontFamily: "inherit",
    }}>
      {/* Browser chrome */}
      <div style={{ background: "#f3f4f6", borderBottom: "1px solid #e5e7eb", padding: "8px 12px", display: "flex", alignItems: "center", gap: 6 }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840" }} />
        <div style={{ flex: 1, background: "white", borderRadius: 4, padding: "2px 8px", fontSize: 9, color: "#9ca3af", marginLeft: 6 }}>
          yourbusiness.com
        </div>
      </div>
      {/* Header */}
      <div style={{ background: t.headerBg, padding: "12px 14px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <div style={{ width: 60, height: 6, borderRadius: 3, background: t.accentColor, opacity: 0.8 }} />
          <div style={{ display: "flex", gap: 6 }}>
            {["", "", ""].map((_, i) => (
              <div key={i} style={{ width: 28, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.2)" }} />
            ))}
          </div>
        </div>
        <div style={{ fontSize: 13, fontWeight: 800, color: "white", lineHeight: 1.25, marginBottom: 4 }}>{t.heroTitle}</div>
        <div style={{ fontSize: 9, color: "rgba(255,255,255,0.6)", marginBottom: 10 }}>{t.heroSub}</div>
        <div style={{ display: "inline-block", background: t.accentColor, color: "white", borderRadius: 6, padding: "5px 12px", fontSize: 9, fontWeight: 700 }}>
          {t.ctaText}
        </div>
      </div>
      {/* Content sections */}
      <div style={{ padding: "10px 14px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {t.sections.map(s => (
          <div key={s} style={{ background: isDark ? "rgba(255,255,255,0.06)" : "white", border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "#f0f0f0"}`, borderRadius: 8, padding: "8px 10px" }}>
            <div style={{ width: 20, height: 3, borderRadius: 2, background: t.accentColor, opacity: 0.6, marginBottom: 4 }} />
            <div style={{ fontSize: 9, fontWeight: 700, color: isDark ? "rgba(255,255,255,0.8)" : "#374151" }}>{s}</div>
            <div style={{ width: "70%", height: 2, borderRadius: 1, background: isDark ? "rgba(255,255,255,0.1)" : "#e5e7eb", marginTop: 3 }} />
          </div>
        ))}
      </div>
      {/* Footer badge */}
      <div style={{ padding: "0 14px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontSize: 8, color: isDark ? "rgba(255,255,255,0.4)" : "#9ca3af", display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} />
          Published · {t.label}
        </div>
        <div style={{ background: isDark ? "rgba(255,255,255,0.1)" : "#f0f0f0", borderRadius: 6, padding: "2px 8px", fontSize: 8, fontWeight: 700, color: isDark ? "rgba(255,255,255,0.7)" : "#374151" }}>
          ⚡ {t.badge}
        </div>
      </div>
    </div>
  );
}

export default function WebsiteBuilderPage() {
  const BUILDER_URL = "https://sites.myleados.ai/signup";
  const BOOK_URL = "https://wa.me/971568350424?text=Hi%20LeadOS%2C%20I%20want%20to%20learn%20about%20the%20Website%20Builder";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .wb * { box-sizing: border-box; }

        @keyframes wb-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes wb-marquee-rev {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes wb-type {
          0%,18% { content: "I run a dental clinic in Dubai"; }
          24%,40% { content: "Real estate agency in Abu Dhabi"; }
          46%,62% { content: "Wellness spa in Downtown Dubai"; }
          68%,84% { content: "Law firm specialising in contracts"; }
          90%,100% { content: "I run a dental clinic in Dubai"; }
        }
        @keyframes wb-cursor {
          0%,100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes wb-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .wb-marquee-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: wb-marquee 40s linear infinite;
        }
        .wb-marquee-track-rev {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: wb-marquee-rev 44s linear infinite;
        }
        .wb-marquee-wrap:hover .wb-marquee-track,
        .wb-marquee-wrap:hover .wb-marquee-track-rev {
          animation-play-state: paused;
        }

        .wb-input-wrap {
          background: white;
          border: 2px solid #d1d5db;
          border-radius: 20px;
          padding: 18px 18px 18px 22px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 4px 32px rgba(0,0,0,.07);
          transition: border-color 0.2s, box-shadow 0.2s;
          cursor: text;
          max-width: 640px;
          margin: 0 auto;
        }
        .wb-input-wrap:hover {
          border-color: #a5b4fc;
          box-shadow: 0 0 0 4px rgba(99,102,241,.08), 0 4px 32px rgba(0,0,0,.07);
        }
        .wb-typewriter::after {
          content: "I run a dental clinic in Dubai";
          animation: wb-type 16s steps(1) infinite;
        }
        .wb-cursor-blink {
          display: inline-block;
          width: 2px;
          height: 20px;
          background: #111;
          border-radius: 1px;
          margin-left: 2px;
          animation: wb-cursor 0.8s step-end infinite;
          vertical-align: middle;
        }
        .wb-build-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #111;
          color: white;
          font-weight: 700;
          font-size: 15px;
          padding: 13px 28px;
          border-radius: 14px;
          text-decoration: none;
          flex-shrink: 0;
          white-space: nowrap;
          transition: background 0.15s;
        }
        .wb-build-btn:hover { background: #333; }

        .wb-feature-card {
          padding: 32px 28px;
          border-radius: 20px;
          border: 1px solid #e5e7eb;
          background: white;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .wb-feature-card:hover {
          box-shadow: 0 16px 48px rgba(0,0,0,.08);
          transform: translateY(-3px);
        }

        .wb-pricing-card {
          border-radius: 24px;
          padding: 36px 32px;
          border: 1.5px solid #e5e7eb;
          background: white;
        }
        .wb-pricing-card.hot {
          background: #111;
          border-color: #111;
          color: white;
        }
        .wb-pricing-card.hot a { background: white !important; color: #111 !important; }

        .wb-step {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }

        @media (max-width: 768px) {
          .wb-features-grid { grid-template-columns: 1fr !important; }
          .wb-pricing-grid { grid-template-columns: 1fr !important; }
          .wb-steps-grid { grid-template-columns: 1fr 1fr !important; }
          .wb-hero-title { font-size: clamp(48px, 12vw, 88px) !important; }
        }
        @media (max-width: 480px) {
          .wb-steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <main className="wb" style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#f2f0ec", color: "#111", margin: 0 }}>

        {/* ─── HERO ─── */}
        <section style={{ padding: "100px 24px 80px", textAlign: "center" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>

            {/* Pill badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "white", border: "1px solid #e5e7eb", borderRadius: 40, padding: "7px 18px 7px 12px", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 36 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
              AI Website Builder · Free to start
            </div>

            {/* Giant headline */}
            <h1 className="wb-hero-title" style={{
              fontSize: "clamp(56px, 9vw, 108px)",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "#0a0a0a",
              margin: "0 0 28px",
            }}>
              Build your website<br />
              <span style={{ color: "#6366f1" }}>with AI.</span>
            </h1>

            <p style={{ fontSize: "clamp(16px, 2vw, 21px)", color: "#6b7280", lineHeight: 1.65, maxWidth: 540, margin: "0 auto 52px" }}>
              Describe your business in plain English. LeadOS builds your complete website — copy, layout, and images — in under 60 seconds.
            </p>

            {/* Big input */}
            <a href={BUILDER_URL} target="_blank" rel="noopener noreferrer" className="wb-input-wrap" style={{ display: "flex", textDecoration: "none" }}>
              <div style={{ flex: 1, textAlign: "left" }}>
                <div style={{ fontSize: 11, color: "#9ca3af", fontWeight: 600, marginBottom: 5, letterSpacing: "0.04em", textTransform: "uppercase" }}>Describe your business…</div>
                <div style={{ fontSize: 17, color: "#374151", minHeight: 26 }}>
                  <span className="wb-typewriter" />
                  <span className="wb-cursor-blink" />
                </div>
              </div>
              <div className="wb-build-btn">
                Build free →
              </div>
            </a>

            {/* Trust signal */}
            <div style={{ marginTop: 24, display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
              <div style={{ display: "flex", gap: 2 }}>
                {[1,2,3,4,5].map(i => <span key={i} style={{ color: "#fbbf24", fontSize: 15 }}>★</span>)}
              </div>
              <span style={{ fontSize: 14, color: "#6b7280" }}>
                <strong style={{ color: "#111" }}>4.9/5</strong> from 200+ businesses
              </span>
              <span style={{ width: 1, height: 16, background: "#d1d5db", display: "inline-block" }} />
              <span style={{ fontSize: 14, color: "#6b7280" }}>No credit card required</span>
            </div>
          </div>
        </section>

        {/* ─── SCROLLING TEMPLATE GALLERY ─── */}
        <section style={{ paddingBottom: 80, overflow: "hidden" }}>

          {/* Row 1 — forward */}
          <div className="wb-marquee-wrap" style={{ marginBottom: 16, overflow: "hidden" }}>
            <div className="wb-marquee-track">
              {[...TEMPLATES, ...TEMPLATES].map((t, i) => (
                <TemplateCard key={`r1-${i}`} t={t} />
              ))}
            </div>
          </div>

          {/* Row 2 — reverse, offset */}
          <div className="wb-marquee-wrap" style={{ overflow: "hidden" }}>
            <div className="wb-marquee-track-rev">
              {[...TEMPLATES.slice(4), ...TEMPLATES.slice(0,4), ...TEMPLATES.slice(4), ...TEMPLATES.slice(0,4)].map((t, i) => (
                <TemplateCard key={`r2-${i}`} t={t} />
              ))}
            </div>
          </div>

          <p style={{ textAlign: "center", fontSize: 13, color: "#9ca3af", marginTop: 24, fontWeight: 500 }}>
            ↑ Real websites built with LeadOS AI — hover to pause
          </p>
        </section>

        {/* ─── STATS BAR ─── */}
        <section style={{ background: "white", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", flexWrap: "wrap" }}>
            {[
              { num: "60s", label: "site generation time" },
              { num: "$0", label: "to build and preview" },
              { num: "100%", label: "AI-written copy & layout" },
              { num: "15–45", label: "SEO articles/month (Pro)" },
            ].map(({ num, label }) => (
              <div key={num} style={{ flex: "1 1 200px", textAlign: "center", padding: "28px 24px" }}>
                <div style={{ fontSize: 36, fontWeight: 900, color: "#0a0a0a", letterSpacing: "-0.03em" }}>{num}</div>
                <div style={{ fontSize: 13, color: "#9ca3af", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section style={{ padding: "100px 24px", background: "#f2f0ec" }}>
          <div style={{ maxWidth: 1040, margin: "0 auto" }}>
            <div style={{ marginBottom: 64 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#9ca3af", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>How It Works</p>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#0a0a0a", margin: 0, maxWidth: 600 }}>
                From blank page to live website in 4 steps.
              </h2>
            </div>
            <div className="wb-steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
              {[
                { num: "01", title: "Describe your business", desc: "Tell the AI your business name, type, and what you offer. Plain English — no forms, no templates." },
                { num: "02", title: "AI builds your site", desc: "Copy, layout, images, and sections — all built for your specific industry in under 60 seconds." },
                { num: "03", title: "Edit in plain English", desc: "Click any element and rephrase it. 'Make this sound more professional' or 'add urgency'." },
                { num: "04", title: "Go live on your domain", desc: "One click to publish. Use your own domain or a free LeadOS subdomain." },
              ].map(({ num, title, desc }) => (
                <div key={num} className="wb-step" style={{ padding: "32px 28px", background: "white", borderRadius: 20, border: "1px solid #e5e7eb" }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: "#9ca3af", letterSpacing: "0.05em" }}>{num}</div>
                  <div style={{ fontSize: 17, fontWeight: 800, color: "#0a0a0a", lineHeight: 1.2 }}>{title}</div>
                  <div style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FEATURES ─── */}
        <section style={{ padding: "100px 24px", background: "white" }}>
          <div style={{ maxWidth: 1040, margin: "0 auto" }}>
            <div style={{ marginBottom: 64 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#9ca3af", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Capabilities</p>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#0a0a0a", margin: 0, maxWidth: 480 }}>
                Not just a website. A growth engine.
              </h2>
            </div>
            <div className="wb-features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {FEATURES.map(({ icon, title, desc }) => (
                <div key={title} className="wb-feature-card">
                  <div style={{ fontSize: 28, marginBottom: 20 }}>{icon}</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "#0a0a0a", marginBottom: 10 }}>{title}</div>
                  <div style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.75 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PRICING ─── */}
        <section style={{ padding: "100px 24px", background: "#f2f0ec" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#9ca3af", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Pricing</p>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#0a0a0a", marginBottom: 12 }}>
                Start free. Upgrade when you grow.
              </h2>
              <p style={{ fontSize: 16, color: "#6b7280" }}>No credit card required to build and preview.</p>
            </div>
            <div className="wb-pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, alignItems: "start" }}>
              {PRICING.map(({ name, price, per, features, cta, href, highlight }) => (
                <div key={name} className={`wb-pricing-card${highlight ? " hot" : ""}`} style={{ position: "relative" }}>
                  {highlight && (
                    <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: "#6366f1", color: "white", fontWeight: 800, fontSize: 11, borderRadius: 40, padding: "4px 16px", whiteSpace: "nowrap", letterSpacing: "0.04em" }}>
                      MOST POPULAR
                    </div>
                  )}
                  <div style={{ fontSize: 13, fontWeight: 700, color: highlight ? "rgba(255,255,255,0.5)" : "#9ca3af", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{name}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 24 }}>
                    <span style={{ fontSize: 52, fontWeight: 900, color: highlight ? "white" : "#0a0a0a", letterSpacing: "-0.03em", lineHeight: 1 }}>{price}</span>
                    <span style={{ fontSize: 15, color: highlight ? "rgba(255,255,255,0.5)" : "#9ca3af" }}>{per}</span>
                  </div>
                  <div style={{ height: 1, background: highlight ? "rgba(255,255,255,0.12)" : "#f0f0f0", marginBottom: 24 }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
                    {features.map(f => (
                      <div key={f} style={{ display: "flex", gap: 10, fontSize: 14, color: highlight ? "rgba(255,255,255,0.85)" : "#374151", alignItems: "flex-start" }}>
                        <span style={{ color: highlight ? "#a5f3fc" : "#6366f1", fontWeight: 700, marginTop: 1 }}>✓</span>
                        {f}
                      </div>
                    ))}
                  </div>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      textAlign: "center",
                      background: highlight ? "white" : "#111",
                      color: highlight ? "#111" : "white",
                      fontWeight: 700,
                      fontSize: 15,
                      padding: "14px 20px",
                      borderRadius: 12,
                      textDecoration: "none",
                      transition: "opacity 0.15s",
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
        <section style={{ padding: "120px 24px", background: "#0a0a0a", textAlign: "center" }}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(40px, 6vw, 76px)", fontWeight: 900, color: "white", margin: "0 0 20px", lineHeight: 0.95, letterSpacing: "-0.04em" }}>
              Your website is<br />60 seconds away.
            </h2>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", marginBottom: 48, lineHeight: 1.65 }}>
              No designers. No code. No templates. Just describe your business and watch LeadOS build it — free.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href={BUILDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "white", color: "#0a0a0a", fontWeight: 800, fontSize: 17, padding: "18px 40px", borderRadius: 16, textDecoration: "none" }}
              >
                Build your website free →
              </a>
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", fontWeight: 600, fontSize: 15, padding: "18px 32px", borderRadius: 16, textDecoration: "none", border: "1.5px solid rgba(255,255,255,0.12)" }}
              >
                Book a Demo
              </a>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", marginTop: 24 }}>
              Free forever · No credit card required · Setup in minutes
            </p>
          </div>
        </section>

        {/* Footer */}
        <div style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px", textAlign: "center" }}>
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

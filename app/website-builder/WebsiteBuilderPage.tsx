"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const BUILDER = "https://sites.myleados.ai/signup";
const BOOK = "https://wa.me/971568350424?text=Hi%20LeadOS%2C%20I%27d%20love%20to%20see%20a%20demo%20of%20the%20Website%20Builder";

const PROMPTS = [
  "Create a premium dental clinic website in Abu Dhabi",
  "Build a luxury real estate agency in Dubai Marina",
  "Design a fine dining restaurant in Downtown Dubai",
  "Create a wellness spa website in JBR Dubai",
];

const SITES = [
  {
    name: "SmileCare Dental",
    industry: "Dental Clinic",
    location: "Abu Dhabi, UAE",
    img: "https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=900",
    accent: "#38bdf8",
    dark: "#0c2340",
    built: "44s",
  },
  {
    name: "The Terrace",
    industry: "Restaurant",
    location: "Downtown Dubai",
    img: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=900",
    accent: "#fb923c",
    dark: "#1c0a00",
    built: "38s",
  },
  {
    name: "Luxe Properties",
    industry: "Real Estate",
    location: "Dubai, UAE",
    img: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=900",
    accent: "#d4af37",
    dark: "#0d0900",
    built: "51s",
  },
  {
    name: "Form Fitness",
    industry: "Fitness Studio",
    location: "JBR, Dubai",
    img: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=900",
    accent: "#4ade80",
    dark: "#001200",
    built: "33s",
  },
  {
    name: "Serenity Spa",
    industry: "Wellness & Spa",
    location: "Dubai Marina",
    img: "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=900",
    accent: "#c084fc",
    dark: "#0d0014",
    built: "57s",
  },
  {
    name: "Sterling Legal",
    industry: "Law Firm",
    location: "DIFC, Dubai",
    img: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=900",
    accent: "#2dd4bf",
    dark: "#00100f",
    built: "42s",
  },
];

const PRICING = [
  {
    key: "free",
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Build and explore. No commitment.",
    features: ["Generate with LeadOS", "Unlimited edits", "Preview your site", "All templates", "Mobile responsive"],
    note: "No publishing. No credit card.",
    cta: "Start for free",
    highlight: false,
  },
  {
    key: "pro",
    name: "Website Pro",
    price: "$19",
    period: "per month",
    desc: "One published site. Fully yours.",
    features: ["Everything in Free", "Publish to the web", "LeadOS subdomain", "Custom domain", "Contact forms & leads", "SSL included", "AI editing", "SEO fundamentals"],
    note: "Per published website.",
    cta: "Get Website Pro",
    highlight: true,
  },
  {
    key: "seo",
    name: "Pro + Auto SEO",
    price: "$59",
    period: "per month",
    desc: "Your site keeps growing after launch.",
    features: ["Everything in Website Pro", "15–45 SEO articles/month", "Keyword research", "Auto-publish to your site", "Google indexing", "Backlink building", "Monthly performance report"],
    note: "The only website builder with native Auto SEO.",
    cta: "Get Pro + SEO",
    highlight: false,
  },
];

/* ─── MINI DENTAL SITE rendered inside the hero browser mockup ─── */
function DentalSiteMockup() {
  return (
    <div style={{ width: 1320, background: "white", fontFamily: "system-ui, sans-serif" }}>
      {/* Nav */}
      <div style={{ background: "#0c2340", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px" }}>
        <div style={{ color: "white", fontWeight: 800, fontSize: 22, letterSpacing: -0.5 }}>SmileCare</div>
        <div style={{ display: "flex", gap: 36, color: "rgba(255,255,255,0.65)", fontSize: 15 }}>
          {["Services", "Team", "Gallery", "Contact"].map(n => <span key={n}>{n}</span>)}
        </div>
        <div style={{ background: "#38bdf8", color: "white", padding: "10px 28px", borderRadius: 8, fontSize: 14, fontWeight: 700 }}>Book Now</div>
      </div>
      {/* Hero */}
      <div style={{ background: "linear-gradient(105deg, #0c2340 55%, #134170 100%)", minHeight: 340, display: "flex", alignItems: "center", padding: "60px 40px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "42%", backgroundImage: "url(https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=600)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "55%", background: "linear-gradient(to right, #0c2340 0%, transparent 100%)" }} />
        <div style={{ position: "relative", maxWidth: 560, zIndex: 1 }}>
          <div style={{ color: "#38bdf8", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Abu Dhabi's Trusted Dental Clinic</div>
          <div style={{ color: "white", fontSize: 52, fontWeight: 800, lineHeight: 1.05, letterSpacing: -1, marginBottom: 18 }}>Dubai's Premier<br/>Dental Experience</div>
          <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, marginBottom: 32, lineHeight: 1.6 }}>Personalised care · 3 convenient locations<br/>15 years of excellence in UAE</div>
          <div style={{ display: "flex", gap: 14 }}>
            <div style={{ background: "#38bdf8", color: "white", padding: "14px 32px", borderRadius: 10, fontSize: 15, fontWeight: 700 }}>Book Free Consultation</div>
            <div style={{ border: "1.5px solid rgba(255,255,255,0.25)", color: "white", padding: "14px 32px", borderRadius: 10, fontSize: 15 }}>View Services</div>
          </div>
        </div>
      </div>
      {/* Services */}
      <div style={{ background: "#f8fafc", padding: "40px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
        {[
          { t: "Teeth Whitening", d: "Professional results in 45 min" },
          { t: "Dental Implants", d: "Permanent, natural-looking solution" },
          { t: "Orthodontics", d: "Braces & invisible aligners" },
          { t: "Emergency Care", d: "Same-day appointments available" },
        ].map(s => (
          <div key={s.t} style={{ background: "white", borderRadius: 12, padding: "24px 20px", border: "1px solid #e8ecf0" }}>
            <div style={{ width: 36, height: 3, background: "#38bdf8", borderRadius: 2, marginBottom: 14 }} />
            <div style={{ fontSize: 16, fontWeight: 700, color: "#0a0a0a", marginBottom: 6 }}>{s.t}</div>
            <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5 }}>{s.d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── BROWSER CHROME WRAPPER ─── */
function BrowserMockup({ children, url = "smilecare.myleados.ai", badge, scale = 0.5, height = 420 }: {
  children: React.ReactNode; url?: string; badge?: string; scale?: number; height?: number;
}) {
  return (
    <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 40px 120px rgba(0,0,0,0.22)", border: "1px solid rgba(0,0,0,0.07)" }}>
      {/* Chrome bar */}
      <div style={{ background: "#1a1a1a", height: 40, display: "flex", alignItems: "center", gap: 8, padding: "0 14px", flexShrink: 0 }}>
        <div style={{ display: "flex", gap: 6 }}>
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
        </div>
        <div style={{ flex: 1, background: "#2d2d2d", borderRadius: 6, height: 22, display: "flex", alignItems: "center", padding: "0 10px", marginLeft: 8 }}>
          <span style={{ fontSize: 12, color: "#8a8a8a" }}>🔒 {url}</span>
        </div>
        {badge && (
          <div style={{ background: "#22c55e", borderRadius: 5, padding: "3px 10px", fontSize: 11, fontWeight: 700, color: "white", whiteSpace: "nowrap" }}>⚡ {badge}</div>
        )}
      </div>
      {/* Scaled content */}
      <div style={{ height, overflow: "hidden", position: "relative", background: "white" }}>
        <div style={{ transform: `scale(${scale})`, transformOrigin: "top left", width: `${100 / scale}%` }}>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─── */
export default function WebsiteBuilderPage() {
  const [promptIdx, setPromptIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typing, setTyping] = useState(true);
  const [galleryHover, setGalleryHover] = useState<number | null>(null);

  /* typewriter */
  useEffect(() => {
    const prompt = PROMPTS[promptIdx];
    if (typing) {
      if (displayText.length < prompt.length) {
        const t = setTimeout(() => setDisplayText(prompt.slice(0, displayText.length + 1)), 36);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setTyping(false), 2400);
      return () => clearTimeout(t);
    } else {
      if (displayText.length > 0) {
        const t = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 14);
        return () => clearTimeout(t);
      }
      setPromptIdx(i => (i + 1) % PROMPTS.length);
      setTyping(true);
    }
  }, [displayText, typing, promptIdx]);

  return (
    <>
      <style>{PAGE_CSS}</style>
      <main className="wb">

        {/* ══════════════════════════════════════
            HERO
        ══════════════════════════════════════ */}
        <section className="wb-hero">
          <div className="wb-container wb-hero-inner">

            {/* LEFT */}
            <div className="wb-hero-left">
              <div className="wb-badge">
                <span className="wb-badge-dot" />
                Website Builder by LeadOS
              </div>

              <h1 className="wb-hero-h1">
                Build a website that looks like you hired a designer.
              </h1>

              <p className="wb-hero-sub">
                Describe your business and LeadOS creates your complete website. Customise with plain English or visually, then publish when you're ready.
              </p>

              <div className="wb-hero-ctas">
                <a href={BUILDER} target="_blank" rel="noopener noreferrer" className="wb-cta-primary">
                  Build Your Website Free
                </a>
                <a href="#how-it-works" className="wb-cta-ghost">
                  See How It Works ↓
                </a>
              </div>

              <p className="wb-trust-line">Start free · No credit card required</p>
            </div>

            {/* RIGHT — browser mockup */}
            <div className="wb-hero-right">
              {/* Prompt bar floating above */}
              <div className="wb-prompt-bar">
                <div className="wb-prompt-icon">✦</div>
                <div className="wb-prompt-text">
                  {displayText}
                  <span className="wb-cursor" />
                </div>
                <div className="wb-prompt-enter">↵</div>
              </div>

              <BrowserMockup url="smilecare.myleados.ai" badge="Built in 44s" scale={0.47} height={430}>
                <DentalSiteMockup />
              </BrowserMockup>

              {/* Floating stat chips */}
              <div className="wb-hero-chip wb-chip-1">
                <span className="wb-chip-num">60s</span>
                <span className="wb-chip-label">avg. build time</span>
              </div>
              <div className="wb-hero-chip wb-chip-2">
                <span style={{ fontSize: 16 }}>🌐</span>
                <span className="wb-chip-label">50+ industries</span>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            GALLERY — dark immersive
        ══════════════════════════════════════ */}
        <section className="wb-gallery-section">
          <div className="wb-container">
            <div className="wb-gallery-header">
              <p className="wb-eyebrow wb-eyebrow-light">Websites Built by LeadOS</p>
              <h2 className="wb-section-h2 wb-light">
                One idea.<br />Endless possibilities.
              </h2>
              <p className="wb-gallery-sub">
                Every website is generated from a single description. Real businesses. Real results.
              </p>
            </div>
          </div>

          <div className="wb-gallery-grid">
            {SITES.map((site, i) => (
              <div
                key={site.name}
                className="wb-gallery-card"
                onMouseEnter={() => setGalleryHover(i)}
                onMouseLeave={() => setGalleryHover(null)}
                style={{ "--accent": site.accent } as React.CSSProperties}
              >
                <div
                  className="wb-gallery-img"
                  style={{ backgroundImage: `url(${site.img})` }}
                />
                <div className="wb-gallery-overlay" style={{ background: `linear-gradient(to top, ${site.dark} 0%, ${site.dark}aa 40%, transparent 100%)` }} />
                <div className="wb-gallery-content">
                  <div className="wb-gallery-tag" style={{ color: site.accent, borderColor: `${site.accent}44`, background: `${site.accent}18` }}>
                    {site.industry}
                  </div>
                  <div className="wb-gallery-name">{site.name}</div>
                  <div className="wb-gallery-loc">{site.location}</div>
                  <div className="wb-gallery-built" style={{ color: site.accent }}>Built in {site.built}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════
            HOW IT WORKS — generation flow
        ══════════════════════════════════════ */}
        <section className="wb-how" id="how-it-works">
          <div className="wb-container">
            <p className="wb-eyebrow">How It Works</p>
            <h2 className="wb-section-h2">From a sentence<br />to a website.</h2>

            <div className="wb-steps">
              {/* Step 1 */}
              <div className="wb-step">
                <div className="wb-step-num">01</div>
                <div className="wb-step-box wb-step-prompt">
                  <div className="wb-step-label">You write</div>
                  <div className="wb-step-prompt-inner">
                    <div className="wb-step-prompt-icon">✦</div>
                    <p className="wb-step-prompt-text">
                      "Create a premium dental clinic website in Abu Dhabi with a professional tone and teal accents"
                    </p>
                  </div>
                  <div className="wb-step-footer">Plain English · No form to fill</div>
                </div>
                <div className="wb-step-title">Describe</div>
                <div className="wb-step-desc">Tell LeadOS what you do, who you serve, and the feel you want.</div>
              </div>

              <div className="wb-step-arrow">→</div>

              {/* Step 2 */}
              <div className="wb-step">
                <div className="wb-step-num">02</div>
                <div className="wb-step-box wb-step-gen">
                  <div className="wb-step-label">LeadOS builds</div>
                  <div className="wb-gen-progress">
                    <div className="wb-gen-item"><div className="wb-gen-bar" style={{ width: "100%", background: "#22c55e" }} /><span>Copy & messaging</span></div>
                    <div className="wb-gen-item"><div className="wb-gen-bar" style={{ width: "100%", background: "#22c55e" }} /><span>Layout & sections</span></div>
                    <div className="wb-gen-item"><div className="wb-gen-bar wb-gen-anim" /><span>Imagery sourcing</span></div>
                    <div className="wb-gen-item"><div className="wb-gen-bar wb-gen-anim wb-gen-anim-delay" /><span>Mobile optimisation</span></div>
                  </div>
                  <div className="wb-gen-badge">⚡ Generating your website…</div>
                </div>
                <div className="wb-step-title">Generate</div>
                <div className="wb-step-desc">LeadOS writes copy, selects imagery, and builds every section. In under 60 seconds.</div>
              </div>

              <div className="wb-step-arrow">→</div>

              {/* Step 3 */}
              <div className="wb-step">
                <div className="wb-step-num">03</div>
                <div className="wb-step-box wb-step-done">
                  <BrowserMockup url="smilecare.myleados.ai" scale={0.28} height={180}>
                    <DentalSiteMockup />
                  </BrowserMockup>
                </div>
                <div className="wb-step-title">Publish</div>
                <div className="wb-step-desc">Edit in plain English or visually. Go live on your own domain when ready.</div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            EDITOR — make it completely yours
        ══════════════════════════════════════ */}
        <section className="wb-editor-section">
          <div className="wb-container">
            <div className="wb-editor-header">
              <p className="wb-eyebrow">The Editor</p>
              <h2 className="wb-section-h2">Make it completely yours.</h2>
              <p className="wb-editor-sub">
                AI when you want speed. Visual editing when you want control.<br />
                Every element is editable. Nothing is locked.
              </p>
            </div>

            {/* Editor mockup */}
            <div className="wb-editor-mockup">
              {/* Top toolbar */}
              <div className="wb-editor-toolbar">
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <div className="wb-editor-logo">⬡ LeadOS</div>
                  <div className="wb-editor-divider" />
                  <span className="wb-editor-sitename">SmileCare Dental</span>
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  {["Desktop", "Tablet", "Mobile"].map((d, i) => (
                    <button key={d} className={`wb-editor-device-btn${i === 0 ? " active" : ""}`}>{d === "Desktop" ? "⬜" : d === "Tablet" ? "▭" : "▯"} {d}</button>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button className="wb-editor-preview-btn">Preview</button>
                  <button className="wb-editor-publish-btn">Publish →</button>
                </div>
              </div>

              {/* Editor body */}
              <div className="wb-editor-body">
                {/* Left sidebar — pages */}
                <div className="wb-editor-sidebar">
                  <div className="wb-sidebar-section-title">Pages</div>
                  {["Home", "Services", "Team", "Gallery", "Contact"].map((p, i) => (
                    <div key={p} className={`wb-sidebar-page${i === 0 ? " active" : ""}`}>{p}</div>
                  ))}
                  <div className="wb-sidebar-section-title" style={{ marginTop: 20 }}>Sections</div>
                  {["Header", "Hero", "Services", "Team", "Testimonials", "Footer"].map((s, i) => (
                    <div key={s} className={`wb-sidebar-section-item${i <= 1 ? " active" : ""}`}>
                      <span className="wb-sidebar-drag">⋮⋮</span> {s}
                    </div>
                  ))}
                </div>

                {/* Center canvas */}
                <div className="wb-editor-canvas">
                  <div className="wb-canvas-frame">
                    <div style={{ transform: "scale(0.55)", transformOrigin: "top center", width: `${100/0.55}%`, marginLeft: `${-50*(1/0.55-1)}%` }}>
                      <DentalSiteMockup />
                    </div>
                  </div>
                  {/* Selection overlay hint */}
                  <div className="wb-canvas-selection">
                    <div className="wb-selection-label">Hero Section · Selected</div>
                  </div>
                </div>

                {/* Right panel — properties */}
                <div className="wb-editor-props">
                  <div className="wb-props-title">Section Properties</div>
                  <div className="wb-props-group">
                    <div className="wb-props-label">Background</div>
                    <div className="wb-props-color-row">
                      <div style={{ width: 24, height: 24, borderRadius: 5, background: "#0c2340", border: "2px solid #fff", boxShadow: "0 0 0 1px #d0d0d0" }} />
                      <span className="wb-props-val">#0C2340</span>
                    </div>
                  </div>
                  <div className="wb-props-group">
                    <div className="wb-props-label">Headline</div>
                    <div className="wb-props-input">Dubai's Premier Dental Experience</div>
                  </div>
                  <div className="wb-props-group">
                    <div className="wb-props-label">Font</div>
                    <div className="wb-props-select">Inter · 52px · 800</div>
                  </div>
                  <div className="wb-props-group">
                    <div className="wb-props-label">CTA Button</div>
                    <div className="wb-props-input">Book Free Consultation</div>
                  </div>
                  <div className="wb-props-divider" />
                  {/* AI edit bar */}
                  <div className="wb-props-ai-label">✦ Edit with AI</div>
                  <div className="wb-props-ai-bar">
                    <input className="wb-props-ai-input" defaultValue="Make the hero more luxurious" />
                    <button className="wb-props-ai-btn">↵</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            AUTO SEO — major differentiator
        ══════════════════════════════════════ */}
        <section className="wb-seo-section">
          <div className="wb-container wb-seo-inner">

            {/* Left */}
            <div className="wb-seo-left">
              <p className="wb-eyebrow wb-eyebrow-light">Auto SEO — Exclusive to LeadOS</p>
              <h2 className="wb-section-h2 wb-light">
                Don't just launch.<br />Get found.
              </h2>
              <p className="wb-seo-sub">
                Most website builders stop at publish. LeadOS doesn't. Add Auto SEO and your website keeps growing — continuously working on content, rankings, and Google visibility.
              </p>
              <div className="wb-seo-features">
                {[
                  { icon: "✍️", t: "15–45 SEO articles/month", d: "Keyword-targeted content written and published to your site automatically." },
                  { icon: "🔍", t: "Keyword research included", d: "LeadOS finds the exact terms your customers search for in your city." },
                  { icon: "📈", t: "Google indexing", d: "New pages are submitted directly. No waiting for Google to find them." },
                  { icon: "🔗", t: "Backlink building", d: "Authoritative links pointing to your site, built every month." },
                ].map(f => (
                  <div key={f.t} className="wb-seo-feat">
                    <div className="wb-seo-feat-icon">{f.icon}</div>
                    <div>
                      <div className="wb-seo-feat-title">{f.t}</div>
                      <div className="wb-seo-feat-desc">{f.d}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a href={BUILDER} target="_blank" rel="noopener noreferrer" className="wb-cta-primary wb-cta-light">
                Start with Auto SEO →
              </a>
            </div>

            {/* Right — SEO dashboard mockup */}
            <div className="wb-seo-right">
              <div className="wb-seo-dashboard">
                <div className="wb-dash-header">
                  <span className="wb-dash-title">SEO Performance · SmileCare Dental</span>
                  <span className="wb-dash-period">Last 90 days</span>
                </div>

                {/* Metric tiles */}
                <div className="wb-dash-metrics">
                  {[
                    { label: "Organic Visits", val: "4,821", delta: "+312%", up: true },
                    { label: "Keywords Ranking", val: "184", delta: "+97", up: true },
                    { label: "Articles Published", val: "45", delta: "This month", up: true },
                    { label: "Domain Authority", val: "38", delta: "+12 pts", up: true },
                  ].map(m => (
                    <div key={m.label} className="wb-dash-metric">
                      <div className="wb-dash-metric-val">{m.val}</div>
                      <div className="wb-dash-metric-label">{m.label}</div>
                      <div className={`wb-dash-metric-delta ${m.up ? "up" : ""}`}>{m.delta}</div>
                    </div>
                  ))}
                </div>

                {/* Traffic graph */}
                <div className="wb-dash-chart-label">Organic Traffic Growth</div>
                <div className="wb-dash-chart">
                  {[12, 18, 22, 19, 28, 35, 42, 38, 55, 62, 74, 88].map((h, i) => (
                    <div key={i} className="wb-dash-bar" style={{ height: `${h}%`, animationDelay: `${i * 0.06}s` }} />
                  ))}
                </div>
                <div className="wb-dash-chart-axis">
                  {["Oct", "Nov", "Dec", "Jan"].map(m => <span key={m}>{m}</span>)}
                </div>

                {/* Recent articles */}
                <div className="wb-dash-articles-title">Latest Auto SEO Articles</div>
                {[
                  { kw: "dental implants abu dhabi cost", pos: 3 },
                  { kw: "best teeth whitening dubai marina", pos: 1 },
                  { kw: "invisible braces abu dhabi", pos: 5 },
                ].map(a => (
                  <div key={a.kw} className="wb-dash-article">
                    <span className="wb-dash-article-kw">{a.kw}</span>
                    <span className="wb-dash-article-pos" style={{ color: a.pos <= 3 ? "#22c55e" : "#f59e0b" }}>
                      #{a.pos} Google
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            PRICING
        ══════════════════════════════════════ */}
        <section className="wb-pricing-section">
          <div className="wb-container">
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <p className="wb-eyebrow">Pricing</p>
              <h2 className="wb-section-h2">Start free.<br />Grow when you're ready.</h2>
            </div>

            <div className="wb-pricing-grid">
              {PRICING.map((plan) => (
                <div key={plan.key} className={`wb-pricing-card${plan.highlight ? " wb-pricing-highlight" : ""}`}>
                  {plan.highlight && <div className="wb-pricing-badge">Most Popular</div>}
                  <div className="wb-pricing-name">{plan.name}</div>
                  <div className="wb-pricing-price-row">
                    <span className="wb-pricing-price">{plan.price}</span>
                    <span className="wb-pricing-period">{plan.period}</span>
                  </div>
                  <p className="wb-pricing-desc">{plan.desc}</p>
                  <div className="wb-pricing-divider" />
                  <div className="wb-pricing-features">
                    {plan.features.map(f => (
                      <div key={f} className="wb-pricing-feature">
                        <span className="wb-pricing-check">✓</span>
                        {f}
                      </div>
                    ))}
                  </div>
                  <p className="wb-pricing-note">{plan.note}</p>
                  <a href={BUILDER} target="_blank" rel="noopener noreferrer" className={`wb-pricing-cta${plan.highlight ? " wb-pricing-cta-highlight" : ""}`}>
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            FINAL CTA
        ══════════════════════════════════════ */}
        <section className="wb-final-cta">
          <div className="wb-container" style={{ textAlign: "center" }}>
            <h2 className="wb-final-h2">
              Your next website<br />starts with one sentence.
            </h2>
            <p className="wb-final-sub">
              No designers. No agency. No code.<br />Just describe your business and LeadOS builds it.
            </p>
            <div className="wb-final-ctas">
              <a href={BUILDER} target="_blank" rel="noopener noreferrer" className="wb-cta-primary wb-cta-xl">
                Build Your Website Free
              </a>
              <a href={BOOK} target="_blank" rel="noopener noreferrer" className="wb-cta-ghost wb-cta-xl">
                Book a Demo
              </a>
            </div>
            <p className="wb-final-trust">No credit card required to start</p>
          </div>
        </section>

        {/* Footer strip */}
        <div className="wb-footer-strip">
          <span>Website Builder by <Link href="/" className="wb-footer-link">LeadOS</Link></span>
          <span className="wb-footer-sep" />
          <Link href="/privacy" className="wb-footer-link">Privacy</Link>
          <span className="wb-footer-sep" />
          <Link href="/terms" className="wb-footer-link">Terms</Link>
        </div>

      </main>
    </>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE CSS
═══════════════════════════════════════════════════════ */
const PAGE_CSS = `
:root {
  --ink: #0a0a0a;
  --ink2: #3a3a3a;
  --ink3: #6b7280;
  --ink4: #9ca3af;
  --bg: #fafaf9;
  --white: #ffffff;
  --border: #e8e5e0;
  --border2: #f0ede8;
  --blue: #2563eb;
  --blue-light: #eff6ff;
  --accent: #2563eb;
}

.wb * { box-sizing: border-box; margin: 0; padding: 0; }
.wb { font-family: system-ui, -apple-system, 'Inter', sans-serif; background: var(--bg); color: var(--ink); -webkit-font-smoothing: antialiased; overflow-x: hidden; width: 100%; }
.wb-container { max-width: 1240px; margin: 0 auto; padding: 0 32px; width: 100%; }

/* ── HERO ── */
.wb-hero {
  padding: 80px 0 72px;
  background: linear-gradient(180deg, #eef4ff 0%, #fafaf9 100%);
  overflow: hidden;
  width: 100%;
}
.wb-hero-inner {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 56px;
  align-items: center;
}
.wb-hero-left { display: flex; flex-direction: column; gap: 24px; min-width: 0; }

.wb-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: white; border: 1px solid var(--border);
  border-radius: 40px; padding: 7px 16px 7px 10px;
  font-size: 13px; font-weight: 600; color: var(--ink2);
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
  width: fit-content;
}
.wb-badge-dot { width: 8px; height: 8px; border-radius: 50%; background: #22c55e; flex-shrink: 0; }

.wb-hero-h1 {
  font-size: clamp(36px, 4.5vw, 58px);
  font-weight: 800;
  line-height: 1.04;
  letter-spacing: -0.035em;
  color: var(--ink);
}

.wb-hero-sub {
  font-size: clamp(15px, 1.4vw, 18px);
  color: var(--ink3);
  line-height: 1.7;
  font-weight: 400;
  max-width: min(440px, 100%);
}

.wb-hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; }

.wb-trust-line { font-size: 13px; color: var(--ink4); }

.wb-hero-right { position: relative; }

/* Prompt bar */
.wb-prompt-bar {
  display: flex; align-items: center; gap: 10px;
  background: white; border: 1.5px solid var(--border);
  border-radius: 14px; padding: 14px 16px;
  margin-bottom: 14px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}
.wb-prompt-icon { color: #6366f1; font-size: 16px; flex-shrink: 0; }
.wb-prompt-text { flex: 1; font-size: 14px; color: var(--ink2); font-weight: 500; min-height: 20px; }
.wb-prompt-enter {
  background: var(--ink); color: white; border-radius: 8px;
  padding: 4px 10px; font-size: 14px; font-weight: 700; flex-shrink: 0;
}
.wb-cursor {
  display: inline-block; width: 2px; height: 16px;
  background: #6366f1; border-radius: 1px;
  vertical-align: middle; margin-left: 1px;
  animation: wb-blink 0.75s step-end infinite;
}
@keyframes wb-blink { 0%,100%{opacity:1;} 50%{opacity:0;} }

/* Floating chips */
.wb-hero-chip {
  position: absolute; display: flex; align-items: center; gap: 8px;
  background: white; border: 1px solid var(--border);
  border-radius: 40px; padding: 8px 14px;
  font-size: 13px; font-weight: 600;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  animation: wb-float 4s ease-in-out infinite;
}
.wb-chip-1 { bottom: 40px; left: -24px; animation-delay: 0s; }
.wb-chip-2 { bottom: 90px; right: -16px; animation-delay: 1.5s; }
.wb-chip-num { font-size: 18px; font-weight: 900; color: var(--ink); }
.wb-chip-label { color: var(--ink3); }
@keyframes wb-float {
  0%,100%{transform:translateY(0);}
  50%{transform:translateY(-8px);}
}

/* ── GALLERY ── */
.wb-gallery-section { background: #0a0a0a; padding: 120px 0; overflow-x: hidden; width: 100%; }
.wb-gallery-header { margin-bottom: 64px; }
.wb-gallery-sub { font-size: 16px; color: rgba(255,255,255,0.4); margin-top: 16px; max-width: 480px; }

.wb-gallery-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(260px, 1fr));
  gap: 0;
  overflow-x: auto;
  padding: 0 32px;
  max-width: 1600px;
  margin: 0 auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.wb-gallery-grid::-webkit-scrollbar { display: none; }

.wb-gallery-card {
  position: relative; height: 480px; overflow: hidden; cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
  border-right: 1px solid rgba(255,255,255,0.06);
}
.wb-gallery-card:last-child { border-right: none; }
.wb-gallery-card:hover { transform: scaleY(1.03); z-index: 2; }
.wb-gallery-card:hover .wb-gallery-img { transform: scale(1.06); filter: brightness(0.9) saturate(1.2); }

.wb-gallery-img {
  position: absolute; inset: 0;
  background-size: cover; background-position: center;
  transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.4s;
}
.wb-gallery-overlay { position: absolute; inset: 0; }
.wb-gallery-content {
  position: absolute; bottom: 0; left: 0; right: 0; padding: 28px 22px;
  display: flex; flex-direction: column; gap: 6px;
}
.wb-gallery-tag {
  display: inline-flex; align-items: center;
  font-size: 11px; font-weight: 700; letter-spacing: 0.06em;
  text-transform: uppercase; padding: 3px 10px;
  border: 1px solid; border-radius: 20px; width: fit-content;
  margin-bottom: 4px;
}
.wb-gallery-name { font-size: 18px; font-weight: 800; color: white; }
.wb-gallery-loc { font-size: 13px; color: rgba(255,255,255,0.5); }
.wb-gallery-built { font-size: 12px; font-weight: 700; margin-top: 4px; }

/* ── HOW IT WORKS ── */
.wb-how { padding: 120px 0; background: white; border-top: 1px solid var(--border2); }
.wb-steps {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  gap: 24px;
  align-items: start;
  margin-top: 64px;
}
.wb-step { display: flex; flex-direction: column; gap: 16px; }
.wb-step-num { font-size: 11px; font-weight: 800; color: var(--blue); letter-spacing: 0.1em; }
.wb-step-arrow { font-size: 28px; color: var(--border); align-self: center; margin-top: -80px; flex-shrink: 0; }
.wb-step-title { font-size: 20px; font-weight: 800; color: var(--ink); }
.wb-step-desc { font-size: 14px; color: var(--ink3); line-height: 1.7; }

.wb-step-box {
  border-radius: 16px; overflow: hidden;
  border: 1.5px solid var(--border);
  min-height: 200px;
}
.wb-step-prompt { background: white; padding: 24px; display: flex; flex-direction: column; gap: 16px; }
.wb-step-label { font-size: 11px; font-weight: 700; color: var(--ink4); text-transform: uppercase; letter-spacing: 0.08em; }
.wb-step-prompt-inner { background: #f5f4f2; border-radius: 12px; padding: 16px; display: flex; gap: 12px; }
.wb-step-prompt-icon { color: #6366f1; font-size: 16px; flex-shrink: 0; margin-top: 2px; }
.wb-step-prompt-text { font-size: 14px; color: var(--ink2); line-height: 1.6; font-weight: 500; font-style: italic; }
.wb-step-footer { font-size: 12px; color: var(--ink4); margin-top: auto; }

.wb-step-gen { background: var(--bg); padding: 20px; display: flex; flex-direction: column; gap: 12px; }
.wb-gen-progress { display: flex; flex-direction: column; gap: 10px; }
.wb-gen-item { display: flex; flex-direction: column; gap: 4px; font-size: 12px; color: var(--ink3); }
.wb-gen-bar { height: 4px; border-radius: 2px; background: #e5e7eb; overflow: hidden; }
.wb-gen-bar[style*="100%"] { background: #22c55e !important; }
.wb-gen-anim { background: linear-gradient(90deg, #e5e7eb 0%, #2563eb 50%, #e5e7eb 100%) !important; background-size: 200% !important; animation: wb-loading 1.2s infinite; }
.wb-gen-anim-delay { animation-delay: 0.3s; }
@keyframes wb-loading { 0%{background-position:200% 0;} 100%{background-position:-200% 0;} }
.wb-gen-badge { background: #eff6ff; color: var(--blue); font-size: 12px; font-weight: 700; padding: 8px 12px; border-radius: 8px; text-align: center; }

.wb-step-done { padding: 16px; background: var(--bg); }

/* ── EDITOR ── */
.wb-editor-section { padding: 120px 0; background: var(--bg); border-top: 1px solid var(--border2); }
.wb-editor-header { margin-bottom: 56px; }
.wb-editor-sub { font-size: 17px; color: var(--ink3); line-height: 1.7; margin-top: 16px; }

.wb-editor-mockup {
  border-radius: 20px; overflow: hidden;
  border: 1.5px solid var(--border);
  box-shadow: 0 32px 80px rgba(0,0,0,0.1);
  background: #1a1a1a;
}

.wb-editor-toolbar {
  background: #1a1a1a; height: 48px;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 16px; border-bottom: 1px solid rgba(255,255,255,0.08);
}
.wb-editor-logo { color: rgba(255,255,255,0.9); font-size: 14px; font-weight: 700; }
.wb-editor-divider { width: 1px; height: 20px; background: rgba(255,255,255,0.12); margin: 0 12px; }
.wb-editor-sitename { color: rgba(255,255,255,0.5); font-size: 13px; }
.wb-editor-device-btn {
  background: transparent; border: 1px solid rgba(255,255,255,0.12);
  color: rgba(255,255,255,0.4); font-size: 12px; padding: 5px 10px;
  border-radius: 6px; cursor: pointer;
}
.wb-editor-device-btn.active { background: rgba(255,255,255,0.1); color: white; }
.wb-editor-preview-btn { background: transparent; border: 1px solid rgba(255,255,255,0.2); color: rgba(255,255,255,0.7); font-size: 13px; padding: 6px 14px; border-radius: 8px; cursor: pointer; }
.wb-editor-publish-btn { background: #2563eb; color: white; font-size: 13px; font-weight: 700; padding: 6px 16px; border-radius: 8px; border: none; cursor: pointer; }

.wb-editor-body { display: grid; grid-template-columns: 180px 1fr 220px; height: 500px; }

.wb-editor-sidebar {
  background: #141414; border-right: 1px solid rgba(255,255,255,0.07);
  padding: 16px 12px; overflow-y: auto;
}
.wb-sidebar-section-title { font-size: 10px; font-weight: 700; color: rgba(255,255,255,0.3); letter-spacing: 0.1em; text-transform: uppercase; margin: 0 4px 8px; }
.wb-sidebar-page {
  padding: 8px 10px; border-radius: 8px; font-size: 13px; color: rgba(255,255,255,0.5);
  cursor: pointer; margin-bottom: 2px;
}
.wb-sidebar-page.active { background: rgba(255,255,255,0.08); color: white; }
.wb-sidebar-section-item {
  display: flex; align-items: center; gap: 6px;
  padding: 7px 8px; border-radius: 7px; font-size: 12px; color: rgba(255,255,255,0.4);
  cursor: pointer; margin-bottom: 1px;
}
.wb-sidebar-section-item.active { background: rgba(37,99,235,0.2); color: #93c5fd; }
.wb-sidebar-drag { font-size: 10px; color: rgba(255,255,255,0.2); }

.wb-editor-canvas {
  background: #2a2a2a; position: relative; overflow: hidden;
  display: flex; flex-direction: column;
}
.wb-canvas-frame { flex: 1; overflow: hidden; position: relative; }
.wb-canvas-selection {
  position: absolute; top: 16px; left: 50%; transform: translateX(-50%);
  background: #2563eb; color: white; font-size: 11px; font-weight: 700;
  padding: 4px 12px; border-radius: 20px; white-space: nowrap; pointer-events: none;
}
.wb-selection-label {}

.wb-editor-props {
  background: #141414; border-left: 1px solid rgba(255,255,255,0.07);
  padding: 16px; overflow-y: auto; display: flex; flex-direction: column; gap: 14px;
}
.wb-props-title { font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.9); }
.wb-props-group { display: flex; flex-direction: column; gap: 6px; }
.wb-props-label { font-size: 10px; font-weight: 700; color: rgba(255,255,255,0.3); text-transform: uppercase; letter-spacing: 0.08em; }
.wb-props-color-row { display: flex; align-items: center; gap: 8px; }
.wb-props-val { font-size: 12px; color: rgba(255,255,255,0.6); font-family: monospace; }
.wb-props-input {
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 7px; padding: 7px 10px; font-size: 12px; color: white; cursor: text;
}
.wb-props-select {
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 7px; padding: 7px 10px; font-size: 12px; color: rgba(255,255,255,0.6);
}
.wb-props-divider { height: 1px; background: rgba(255,255,255,0.07); margin: 4px 0; }
.wb-props-ai-label { font-size: 11px; font-weight: 700; color: #a78bfa; }
.wb-props-ai-bar { display: flex; gap: 6px; }
.wb-props-ai-input {
  flex: 1; background: rgba(167,139,250,0.1); border: 1px solid rgba(167,139,250,0.3);
  border-radius: 8px; padding: 8px 10px; font-size: 12px; color: white;
  outline: none;
}
.wb-props-ai-btn {
  background: #7c3aed; color: white; border: none; border-radius: 8px;
  padding: 0 12px; cursor: pointer; font-size: 14px;
}

/* ── AUTO SEO ── */
.wb-seo-section { background: #0a0a0a; padding: 140px 0; }
.wb-seo-inner {
  display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start;
}
.wb-seo-left { display: flex; flex-direction: column; gap: 28px; }
.wb-seo-sub { font-size: 17px; color: rgba(255,255,255,0.5); line-height: 1.7; }
.wb-seo-features { display: flex; flex-direction: column; gap: 20px; }
.wb-seo-feat { display: flex; gap: 14px; }
.wb-seo-feat-icon { font-size: 20px; flex-shrink: 0; margin-top: 2px; }
.wb-seo-feat-title { font-size: 15px; font-weight: 700; color: rgba(255,255,255,0.9); margin-bottom: 3px; }
.wb-seo-feat-desc { font-size: 13.5px; color: rgba(255,255,255,0.4); line-height: 1.6; }

.wb-seo-right {}
.wb-seo-dashboard {
  background: #141414; border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px; padding: 28px; display: flex; flex-direction: column; gap: 18px;
}
.wb-dash-header { display: flex; justify-content: space-between; align-items: center; }
.wb-dash-title { font-size: 14px; font-weight: 700; color: rgba(255,255,255,0.8); }
.wb-dash-period { font-size: 12px; color: rgba(255,255,255,0.3); }
.wb-dash-metrics { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
.wb-dash-metric {
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07);
  border-radius: 12px; padding: 14px; display: flex; flex-direction: column; gap: 4px;
}
.wb-dash-metric-val { font-size: 22px; font-weight: 800; color: white; letter-spacing: -0.03em; }
.wb-dash-metric-label { font-size: 11px; color: rgba(255,255,255,0.35); }
.wb-dash-metric-delta { font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.3); }
.wb-dash-metric-delta.up { color: #22c55e; }
.wb-dash-chart-label { font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.3); text-transform: uppercase; letter-spacing: 0.07em; }
.wb-dash-chart {
  display: flex; align-items: flex-end; gap: 5px; height: 80px;
  background: rgba(255,255,255,0.02); border-radius: 10px; padding: 10px 12px 0;
}
.wb-dash-bar {
  flex: 1; border-radius: 3px 3px 0 0;
  background: linear-gradient(to top, #2563eb, #38bdf8);
  animation: wb-bar-rise 0.8s ease both;
}
@keyframes wb-bar-rise { from{height:0!important;} }
.wb-dash-chart-axis { display: flex; justify-content: space-between; font-size: 11px; color: rgba(255,255,255,0.25); padding: 0 12px; }
.wb-dash-articles-title { font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.07em; }
.wb-dash-article { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
.wb-dash-article:last-child { border-bottom: none; }
.wb-dash-article-kw { font-size: 13px; color: rgba(255,255,255,0.6); }
.wb-dash-article-pos { font-size: 12px; font-weight: 700; }

/* ── PRICING ── */
.wb-pricing-section { padding: 120px 0; background: white; border-top: 1px solid var(--border2); }
.wb-pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; align-items: start; }
.wb-pricing-card {
  border-radius: 20px; border: 1.5px solid var(--border);
  padding: 36px 32px; background: white; position: relative;
  transition: box-shadow 0.2s;
}
.wb-pricing-card:hover { box-shadow: 0 8px 40px rgba(0,0,0,0.08); }
.wb-pricing-highlight { background: var(--ink); border-color: var(--ink); }
.wb-pricing-badge {
  position: absolute; top: -13px; left: 50%; transform: translateX(-50%);
  background: #2563eb; color: white; font-size: 10px; font-weight: 800;
  letter-spacing: 0.08em; text-transform: uppercase; padding: 4px 16px; border-radius: 40px;
  white-space: nowrap;
}
.wb-pricing-name { font-size: 11px; font-weight: 800; color: var(--ink4); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px; }
.wb-pricing-highlight .wb-pricing-name { color: rgba(255,255,255,0.4); }
.wb-pricing-price-row { display: flex; align-items: baseline; gap: 6px; margin-bottom: 8px; }
.wb-pricing-price { font-size: 52px; font-weight: 900; color: var(--ink); letter-spacing: -0.04em; line-height: 1; }
.wb-pricing-highlight .wb-pricing-price { color: white; }
.wb-pricing-period { font-size: 13px; color: var(--ink4); }
.wb-pricing-highlight .wb-pricing-period { color: rgba(255,255,255,0.35); }
.wb-pricing-desc { font-size: 13px; color: var(--ink3); margin-bottom: 20px; }
.wb-pricing-highlight .wb-pricing-desc { color: rgba(255,255,255,0.4); }
.wb-pricing-divider { height: 1px; background: var(--border); margin-bottom: 20px; }
.wb-pricing-highlight .wb-pricing-divider { background: rgba(255,255,255,0.1); }
.wb-pricing-features { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }
.wb-pricing-feature { display: flex; gap: 10px; font-size: 13.5px; color: var(--ink2); align-items: flex-start; }
.wb-pricing-highlight .wb-pricing-feature { color: rgba(255,255,255,0.7); }
.wb-pricing-check { color: var(--blue); font-weight: 700; flex-shrink: 0; margin-top: 1px; }
.wb-pricing-highlight .wb-pricing-check { color: rgba(255,255,255,0.5); }
.wb-pricing-note { font-size: 12px; color: var(--ink4); margin-bottom: 24px; line-height: 1.5; }
.wb-pricing-highlight .wb-pricing-note { color: rgba(255,255,255,0.25); }
.wb-pricing-cta {
  display: block; text-align: center; text-decoration: none;
  background: var(--ink); color: white; font-weight: 700; font-size: 14px;
  padding: 14px; border-radius: 100px; transition: opacity 0.15s;
}
.wb-pricing-cta:hover { opacity: 0.8; }
.wb-pricing-cta-highlight { background: white; color: var(--ink); }

/* ── CTAs ── */
.wb-cta-primary {
  display: inline-flex; align-items: center; text-decoration: none;
  background: var(--ink); color: white; font-weight: 700; font-size: 15px;
  padding: 16px 32px; border-radius: 100px; transition: opacity 0.15s;
}
.wb-cta-primary:hover { opacity: 0.85; }
.wb-cta-light { background: white; color: var(--ink); }
.wb-cta-ghost {
  display: inline-flex; align-items: center; text-decoration: none;
  background: transparent; color: var(--ink2); font-weight: 600; font-size: 15px;
  padding: 16px 32px; border-radius: 100px;
  border: 1.5px solid var(--border); transition: border-color 0.15s;
}
.wb-cta-ghost:hover { border-color: #aaa; }
.wb-cta-xl { font-size: 17px; padding: 18px 40px; }

/* ── FINAL CTA ── */
.wb-final-cta {
  padding: 140px 32px;
  background: linear-gradient(180deg, #fafaf9 0%, #eef4ff 100%);
  border-top: 1px solid var(--border2);
  text-align: center;
}
.wb-final-h2 {
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 800; line-height: 1.05; letter-spacing: -0.04em; color: var(--ink);
  margin-bottom: 20px;
}
.wb-final-sub { font-size: 18px; color: var(--ink3); line-height: 1.65; margin-bottom: 44px; }
.wb-final-ctas { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
.wb-final-trust { font-size: 13px; color: var(--ink4); margin-top: 20px; }

/* ── TYPOGRAPHY SHARED ── */
.wb-eyebrow {
  font-size: 12px; font-weight: 700; color: var(--blue);
  letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 14px;
  display: block;
}
.wb-eyebrow-light { color: rgba(255,255,255,0.35); }
.wb-section-h2 {
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 800; line-height: 1.07; letter-spacing: -0.03em; color: var(--ink);
}
.wb-light { color: white !important; }

/* ── FOOTER STRIP ── */
.wb-footer-strip {
  display: flex; align-items: center; justify-content: center; gap: 12px;
  padding: 20px; font-size: 13px; color: var(--ink4);
  background: white; border-top: 1px solid var(--border2);
  flex-wrap: wrap;
}
.wb-footer-link { color: var(--ink3); text-decoration: none; }
.wb-footer-link:hover { color: var(--ink); }
.wb-footer-sep { width: 1px; height: 12px; background: var(--border); display: inline-block; }

/* ── RESPONSIVE ── */
@media (max-width: 1080px) {
  .wb-hero-inner { grid-template-columns: 1fr; gap: 48px; }
  .wb-hero-right { width: 100%; max-width: 680px; }
  .wb-chip-1, .wb-chip-2 { display: none; }
  .wb-seo-inner { grid-template-columns: 1fr; gap: 48px; }
  .wb-editor-body { grid-template-columns: 160px 1fr; }
  .wb-editor-props { display: none; }
  .wb-steps { grid-template-columns: 1fr; }
  .wb-step-arrow { display: none; }
  .wb-dash-metrics { grid-template-columns: repeat(2,1fr); }
  .wb-pricing-grid { grid-template-columns: 1fr; max-width: 440px; margin: 0 auto; }
}

@media (max-width: 768px) {
  .wb-container { padding: 0 20px; }
  .wb-hero { padding: 60px 0 52px; }
  .wb-gallery-section, .wb-how, .wb-editor-section, .wb-pricing-section, .wb-seo-section { padding: 72px 0; }
  .wb-hero-inner { gap: 32px; }
  .wb-hero-right { max-width: 100%; overflow: hidden; }
  .wb-prompt-bar { font-size: 13px; }
  .wb-editor-body { height: auto; }
  .wb-editor-sidebar { display: none; }
  .wb-canvas-frame { height: 300px; overflow: hidden; }
  .wb-final-ctas { flex-direction: column; align-items: center; }
  .wb-hero-ctas { flex-direction: column; align-items: flex-start; }
  .wb-cta-xl { font-size: 16px; padding: 16px 32px; width: 100%; text-align: center; justify-content: center; }
  .wb-seo-dashboard { padding: 18px; }
  .wb-dash-metrics { grid-template-columns: repeat(2,1fr); }
  .wb-dash-chart { height: 64px; }
  .wb-pricing-grid { max-width: 100%; }
  .wb-steps { gap: 40px; }
  .wb-step-box { min-height: auto; }
  .wb-section-h2 { font-size: clamp(28px, 7vw, 40px); }
  .wb-hero-h1 { font-size: clamp(30px, 8vw, 48px); }
}

@media (max-width: 480px) {
  .wb-container { padding: 0 16px; }
  .wb-hero { padding: 48px 0 44px; }
  .wb-gallery-grid { padding: 0 16px; grid-template-columns: repeat(6, 200px); }
  .wb-gallery-card { height: 400px; }
  .wb-dash-metrics { grid-template-columns: repeat(2,1fr); gap: 8px; }
  .wb-dash-metric { padding: 10px; }
  .wb-dash-metric-val { font-size: 18px; }
  .wb-pricing-card { padding: 28px 22px; }
  .wb-editor-mockup { border-radius: 12px; }
  .wb-editor-toolbar { flex-wrap: wrap; height: auto; padding: 10px 12px; gap: 8px; }
  .wb-editor-body { display: none; }
  .wb-editor-toolbar-devices { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  .wb-cursor, .wb-hero-chip, .wb-dash-bar, .wb-gen-anim { animation: none !important; }
  .wb-gallery-card, .wb-gallery-img { transition: none !important; }
}
`;

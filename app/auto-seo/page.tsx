// LeadOS Auto SEO — PPC landing page
// Audience: business owners spending $1k–5k/month on SEO agencies or writers.
// Job: convert cold Google ad traffic into free-trial signups.

import type { Metadata } from "next";
import Link from "next/link";
import AutoSeoSignupForm from "./AutoSeoSignupForm";
import { RankingChart, CostCompareChart } from "./RankingChart";

export const metadata: Metadata = {
  title: "Rank #1 on Google for $99/month — Auto SEO by LeadOS",
  description:
    "Stop paying $3,000/month for an SEO agency. Auto SEO writes, publishes and ranks your business on Google every week — automatically. First article free.",
  openGraph: {
    title: "Rank #1 on Google for $99/month — Auto SEO by LeadOS",
    description: "The equivalent of 5 dedicated SEO employees for $99/month. First article completely free.",
    type: "website",
  },
};

const FEATURES = [
  {
    icon: "✍️",
    title: "AI-Written Articles",
    desc: "Claude AI researches your niche, writes long-form articles (1,500–3,000 words) targeting your keywords — every single week.",
  },
  {
    icon: "🔑",
    title: "Keyword Research",
    desc: "Add keywords you want to rank for. Auto SEO tracks difficulty, search volume and your current position, then prioritises what to write next.",
  },
  {
    icon: "🚀",
    title: "Auto-Publish",
    desc: "Articles publish straight to your website the moment they're ready. No manual work, no CMS logins, no back-and-forth with content teams.",
  },
  {
    icon: "📊",
    title: "Rank Tracking",
    desc: "Connect Google Search Console and watch your rankings climb over time. Every article is tracked from draft to first page.",
  },
  {
    icon: "🎙️",
    title: "Brand Voice",
    desc: "Train the AI on your tone — whether that's clinical and professional, warm and conversational, or bold and sales-driven.",
  },
  {
    icon: "🔄",
    title: "Fully Autonomous",
    desc: "Set it once. Every Monday the AI employee starts writing, editing and publishing. You review what you want, ignore what you don't.",
  },
];

const INDUSTRIES = [
  "Clinics & Medspas", "Real Estate", "Law Firms", "Dental Practices",
  "Accounting Firms", "Restaurants", "E-commerce", "SaaS Products",
  "Fitness Studios", "Mortgage Brokers", "Property Managers", "Coaches",
];

const FAQS = [
  {
    q: "How is this different from hiring a content writer?",
    a: "A content writer costs $500–2,000/month, takes 3–5 days per article, and you have to brief them every time. Auto SEO runs 24/7, publishes every week, never needs briefing, and costs from $99/month.",
  },
  {
    q: "Will Google penalise AI content?",
    a: "Google's official stance is that quality content ranks regardless of how it's produced. Our articles are long-form, expert, and targeted — the same standard as top-ranked content. Thousands of AI-first publishers rank on page 1 today.",
  },
  {
    q: "How does it publish to my website?",
    a: "For LeadOS CRM users, articles publish to your site automatically. For standalone customers, we provide a simple API or Webhook that connects to your existing CMS (WordPress, Webflow, Framer, Squarespace, custom Next.js).",
  },
  {
    q: "Can I edit articles before they publish?",
    a: "Yes. Toggle auto-publish off and every article lands in Drafts for your review. You approve, edit or discard. Toggle it on and everything ships automatically.",
  },
  {
    q: "Is there a setup fee or free trial?",
    a: "No setup fee — and your first article is completely free. Sign up, connect your website and Google Search Console, and the AI writes your first article at no cost. After that, it's $99/month.",
  },
  {
    q: "Can I use this without the LeadOS CRM?",
    a: "Yes — that's exactly what the Standalone plan is for. You get the Auto SEO dashboard and API publishing without needing a CRM subscription.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes — cancel anytime with one click from Settings → Billing in your Auto SEO dashboard. No contracts, no lock-in. On a paid plan, you keep full access until the end of your current billing period. No charges after that.",
  },
];

export default function AutoSeoPage() {
  return (
    <>
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @keyframes serp-rise {
          0% { transform: translateY(8px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes badge-pop {
          0% { transform: scale(0.7); opacity: 0; }
          80% { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }
        .serp-row { animation: serp-rise 0.5s ease both; }
        .serp-row:nth-child(1) { animation-delay: 0.3s; }
        .serp-row:nth-child(2) { animation-delay: 0.9s; }
        .serp-row:nth-child(3) { animation-delay: 1.5s; }
        .serp-row:nth-child(4) { animation-delay: 2.0s; }
        .rank-badge { animation: badge-pop 0.4s cubic-bezier(0.34,1.56,0.64,1) 2.5s both; }
        @media (prefers-reduced-motion: reduce) {
          .serp-row, .rank-badge { animation: none; opacity: 1; transform: none; }
        }
        .faq-item summary { cursor: pointer; list-style: none; }
        .faq-item summary::-webkit-details-marker { display: none; }
      `}</style>

      <main style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif", background: "#060b18", color: "#f1f5f9", margin: 0 }}>

        {/* ── HERO ── */}
        <section style={{ padding: "72px 24px 64px", maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 64, alignItems: "center" }}>

            {/* Left: copy */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(79,70,229,0.1)", border: "1px solid rgba(99,102,241,0.22)", borderRadius: 40, padding: "5px 14px 5px 10px", fontSize: 12, fontWeight: 600, color: "#818cf8", letterSpacing: "0.01em", marginBottom: 28 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4f46e5", display: "inline-block", animation: "pulse-dot 2s infinite" }} />
                1 free article · No credit card required
              </div>

              <h1 style={{ fontSize: "clamp(42px, 5.5vw, 72px)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-0.03em", margin: "0 0 20px", textWrap: "balance" }}>
                Rank <span style={{ color: "#818cf8" }}>#1</span><br />
                on Google.
              </h1>

              <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#94a3b8", lineHeight: 1.65, margin: "0 0 16px", maxWidth: 480 }}>
                Stop paying <strong style={{ color: "#f1f5f9" }}>$3,000 a month</strong> for an agency that takes 6 months to show results.
              </p>
              <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#94a3b8", lineHeight: 1.65, margin: "0 0 40px", maxWidth: 480 }}>
                For <strong style={{ color: "#818cf8" }}>$99/month</strong> you get the equivalent of 5 dedicated SEO employees — writing, publishing and ranking your business on autopilot.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#get-started" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #4f46e5, #7c3aed)", color: "white", fontWeight: 700, fontSize: 16, padding: "15px 32px", borderRadius: 10, textDecoration: "none", boxShadow: "0 8px 28px rgba(79,70,229,.35)", letterSpacing: "-0.01em" }}>
                  Get 1 Free Article →
                </a>
                <a href="#how-it-works" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.06)", color: "#94a3b8", fontWeight: 600, fontSize: 15, padding: "15px 28px", borderRadius: 10, textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)" }}>
                  See How It Works
                </a>
              </div>

              <p style={{ marginTop: 16, fontSize: 12, color: "#475569" }}>
                No credit card · Cancel anytime · First article live within minutes
              </p>
            </div>

            {/* Right: animated Google SERP mockup */}
            <div style={{ position: "relative" }}>
              {/* Browser chrome */}
              <div style={{ background: "#0d1729", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.5)" }}>
                {/* URL bar */}
                <div style={{ background: "#0a1120", padding: "10px 16px", display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ display: "flex", gap: 5 }}>
                    {["#ef4444","#f59e0b","#22c55e"].map(c => <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c, opacity: 0.5 }} />)}
                  </div>
                  <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", borderRadius: 6, padding: "4px 10px", fontSize: 11, color: "#475569" }}>
                    google.com/search?q=best+dental+clinic+sydney
                  </div>
                </div>
                {/* SERP results */}
                <div style={{ padding: "20px 20px 12px" }}>
                  <div style={{ fontSize: 11, color: "#475569", marginBottom: 14 }}>About 2,840,000 results</div>

                  {/* Result 1 — competitor (faded) */}
                  <div className="serp-row" style={{ marginBottom: 16, opacity: 0.35 }}>
                    <div style={{ fontSize: 11, color: "#818cf8", marginBottom: 2 }}>sydneydentist.com.au ›</div>
                    <div style={{ fontSize: 14, color: "#8ab4f8", fontWeight: 500, marginBottom: 3 }}>Best Dental Clinic Sydney | Awards 2023</div>
                    <div style={{ fontSize: 12, color: "#64748b", lineHeight: 1.5 }}>Voted Sydney's best dental practice. Book online today.</div>
                  </div>

                  {/* Result 2 — competitor (faded) */}
                  <div className="serp-row" style={{ marginBottom: 16, opacity: 0.35 }}>
                    <div style={{ fontSize: 11, color: "#818cf8", marginBottom: 2 }}>perfectsmilesdental.com.au ›</div>
                    <div style={{ fontSize: 14, color: "#8ab4f8", fontWeight: 500, marginBottom: 3 }}>Sydney CBD Dentist — Affordable, Central</div>
                    <div style={{ fontSize: 12, color: "#64748b", lineHeight: 1.5 }}>Quality dental care in the heart of Sydney CBD.</div>
                  </div>

                  {/* Result 3 — YOUR client, highlighted */}
                  <div className="serp-row" style={{ marginBottom: 12, background: "rgba(79,70,229,0.07)", border: "1px solid rgba(99,102,241,0.25)", borderRadius: 8, padding: "10px 12px", position: "relative" }}>
                    <div className="rank-badge" style={{ position: "absolute", top: -10, right: 10, background: "#4f46e5", color: "white", fontSize: 10, fontWeight: 800, borderRadius: 20, padding: "3px 10px", letterSpacing: "0.05em" }}>
                      YOUR BUSINESS
                    </div>
                    <div style={{ fontSize: 11, color: "#818cf8", marginBottom: 2 }}>yourdentalpractice.com.au ›</div>
                    <div style={{ fontSize: 14, color: "#8ab4f8", fontWeight: 600, marginBottom: 3 }}>Best Family Dentist Sydney — Gentle, Trusted</div>
                    <div style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.5 }}>Award-winning family dental care. New patients welcome. Book online.</div>
                  </div>

                  {/* Result 4 — competitor (faded) */}
                  <div className="serp-row" style={{ opacity: 0.25 }}>
                    <div style={{ fontSize: 11, color: "#818cf8", marginBottom: 2 }}>dentistsnearme.com.au ›</div>
                    <div style={{ fontSize: 14, color: "#8ab4f8", fontWeight: 500 }}>Find a Dentist Near You in Sydney</div>
                  </div>
                </div>
              </div>

              {/* Position badge overlay */}
              <div style={{ position: "absolute", bottom: -16, left: -16, background: "#0d1729", border: "1px solid rgba(79,70,229,0.3)", borderRadius: 12, padding: "10px 18px", boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}>
                <div style={{ fontSize: 10, color: "#818cf8", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>Google Position</div>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#818cf8", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>#1</div>
              </div>
            </div>

          </div>
        </section>

        {/* ── SOCIAL PROOF STRIP ── */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "20px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { stat: "4×", label: "faster ranking growth vs manual" },
              { stat: "1,500+", label: "words per article, every week" },
              { stat: "$0", label: "to get your first article live" },
              { stat: "5 min", label: "to get started — no setup fee" },
            ].map(({ stat, label }) => (
              <div key={stat} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#f1f5f9", fontVariantNumeric: "tabular-nums" }}>{stat}</div>
                <div style={{ fontSize: 11, color: "#475569", marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RANKING CHART SECTION ── */}
        <section style={{ padding: "88px 24px", maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.1fr) minmax(0,0.9fr)", gap: 72, alignItems: "center" }}>

            {/* Chart */}
            <div>
              <div style={{ background: "#0d1729", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "28px 20px 16px", boxShadow: "0 16px 48px rgba(0,0,0,0.3)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, paddingLeft: 8, paddingRight: 8 }}>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#818cf8", textTransform: "uppercase", letterSpacing: "0.08em" }}>Google Position</div>
                    <div style={{ fontSize: 11, color: "#475569", marginTop: 2 }}>Jan – Jul 2026</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(79,70,229,0.1)", border: "1px solid rgba(79,70,229,0.2)", borderRadius: 6, padding: "4px 10px" }}>
                    <span style={{ fontSize: 12, color: "#818cf8" }}>↑</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#818cf8" }}>+47 positions</span>
                  </div>
                </div>
                <RankingChart />
                <div style={{ display: "flex", justifyContent: "space-between", paddingLeft: 48, paddingRight: 8, marginTop: 4 }}>
                  <div style={{ fontSize: 11, color: "#475569" }}>Before Auto SEO</div>
                  <div style={{ fontSize: 11, color: "#818cf8", fontWeight: 700 }}>After Auto SEO →</div>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#818cf8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Real Results</div>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 20, textWrap: "balance" }}>
                Watch your rankings<br />climb every month.
              </h2>
              <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7, marginBottom: 28 }}>
                Auto SEO publishes a new expert article every week. Each one targets a keyword your customers are searching for right now. Over months, your position climbs — and it keeps climbing.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { label: "Week 1", text: "First article written and published" },
                  { label: "Month 1", text: "Google indexes, position appears" },
                  { label: "Month 3", text: "Multiple keywords on page 1" },
                  { label: "Month 6+", text: "Consistent #1–3 rankings, organic traffic compounds" },
                ].map(({ label, text }) => (
                  <div key={label} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ minWidth: 64, fontSize: 11, fontWeight: 700, color: "#818cf8", paddingTop: 1 }}>{label}</div>
                    <div style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.5 }}>{text}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── COST COMPARISON ── */}
        <section style={{ padding: "80px 24px", background: "#0a1020" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 72, alignItems: "center" }}>

            {/* Copy */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#818cf8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>The Cost of SEO</div>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 20, textWrap: "balance" }}>
                Stop paying<br /><span style={{ color: "#ef4444" }}>thousands</span> a month<br />for the same result.
              </h2>
              <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7, marginBottom: 8 }}>
                The average Australian business spends <strong style={{ color: "#f1f5f9" }}>$2,000–$5,000/month</strong> on an SEO agency — and waits 6–12 months to see any movement.
              </p>
              <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7, marginBottom: 32 }}>
                Auto SEO delivers the <strong style={{ color: "#f1f5f9" }}>same work</strong> — keyword research, content strategy, article writing, publishing, rank tracking — for <strong style={{ color: "#818cf8" }}>$99 a month.</strong>
              </p>
              <a href="#get-started" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #4f46e5, #7c3aed)", color: "white", fontWeight: 700, fontSize: 15, padding: "14px 28px", borderRadius: 10, textDecoration: "none", boxShadow: "0 8px 24px rgba(79,70,229,.3)" }}>
                Start Free — $0 Today →
              </a>
            </div>

            {/* Bar chart */}
            <div style={{ background: "#0d1729", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: 32 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 24 }}>Monthly Cost Comparison</div>
              <CostCompareChart />
              <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.06)", fontSize: 13, color: "#475569", lineHeight: 1.6 }}>
                All three options produce weekly SEO content. Only one does it for under $100.
              </div>
            </div>

          </div>
        </section>

        {/* ── 5 EMPLOYEES SECTION ── */}
        <section style={{ padding: "88px 24px", maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#818cf8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>What You Get</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16, textWrap: "balance" }}>
            The equivalent of<br /><span style={{ color: "#818cf8" }}>5 dedicated employees</span><br />for $99 a month.
          </h2>
          <p style={{ fontSize: 17, color: "#64748b", lineHeight: 1.7, marginBottom: 56, maxWidth: 600, margin: "0 auto 56px" }}>
            Building an in-house SEO team costs $25,000+/month in salaries. Auto SEO replaces every one of them.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 16 }}>
            {[
              { role: "SEO Strategist", task: "Keyword research & planning", salary: "$6,000/mo" },
              { role: "Content Writer", task: "Long-form article writing", salary: "$4,000/mo" },
              { role: "Editor", task: "Quality & brand voice review", salary: "$3,500/mo" },
              { role: "Publisher", task: "CMS upload & formatting", salary: "$2,500/mo" },
              { role: "Analyst", task: "Rank tracking & reporting", salary: "$5,000/mo" },
            ].map(({ role, task, salary }) => (
              <div key={role} style={{ background: "#0d1729", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: 24, textAlign: "left" }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#ef4444", letterSpacing: "0.06em", marginBottom: 10, textTransform: "uppercase" }}>{salary}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#f1f5f9", marginBottom: 6 }}>{role}</div>
                <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>{task}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
            <div style={{ fontSize: 14, color: "#475569", textDecoration: "line-through", fontVariantNumeric: "tabular-nums" }}>$21,000/month in salaries</div>
            <div style={{ fontSize: 13, color: "#475569" }}>vs</div>
            <div style={{ fontSize: 20, fontWeight: 900, color: "#818cf8", fontVariantNumeric: "tabular-nums" }}>$99/month with Auto SEO</div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section id="how-it-works" style={{ background: "#0a1020", padding: "80px 24px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#818cf8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>How It Works</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900, marginBottom: 56, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Set it once. Rank forever.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 2, position: "relative" }}>
              {[
                { title: "Sign Up Free", desc: "Create your account in 60 seconds. No credit card. Connect your website and Google Search Console." },
                { title: "Get Your Free Article", desc: "The AI researches your niche, writes a 1,500–2,500 word expert article targeting your keyword — completely free." },
                { title: "See It Live", desc: "The article publishes to your website and gets submitted to Google for indexing. You see results before paying a cent." },
                { title: "Pay to Continue", desc: "Happy with the result? $99/month for weekly articles, unlimited keywords, and rank tracking. Cancel anytime." },
              ].map(({ title, desc }, i) => (
                <div key={title} style={{ background: "#0d1729", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 2, padding: "28px 24px", textAlign: "left", position: "relative" }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: "#475569", letterSpacing: "0.08em", marginBottom: 12, fontVariantNumeric: "tabular-nums" }}>
                    0{i + 1}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#f1f5f9", marginBottom: 8 }}>{title}</div>
                  <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.65 }}>{desc}</div>
                  {i < 3 && (
                    <div style={{ position: "absolute", right: -14, top: "50%", transform: "translateY(-50%)", color: "#1e2d45", fontSize: 20, fontWeight: 300, zIndex: 1 }}>›</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: 1060, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#818cf8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Features</div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Everything you need to<br />dominate search rankings.
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 1 }}>
              {FEATURES.map(({ icon, title, desc }) => (
                <div key={title} style={{ background: "#0d1729", border: "1px solid rgba(255,255,255,0.06)", padding: 28 }}>
                  <div style={{ fontSize: 28, marginBottom: 14 }}>{icon}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#f1f5f9", marginBottom: 8 }}>{title}</div>
                  <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES ── */}
        <section style={{ padding: "64px 24px", background: "#0a1020", textAlign: "center" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#818cf8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Who It's For</div>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, marginBottom: 36, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              Works for any service business
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
              {INDUSTRIES.map((ind) => (
                <span key={ind} style={{ background: "rgba(79,70,229,0.07)", border: "1px solid rgba(79,70,229,0.18)", borderRadius: 40, padding: "8px 18px", fontSize: 13, fontWeight: 600, color: "#818cf8" }}>
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section id="pricing" style={{ padding: "88px 24px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#818cf8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Pricing</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900, marginBottom: 8, lineHeight: 1.1, letterSpacing: "-0.02em" }}>Start free. Pay when you see results.</h2>
            <p style={{ fontSize: 16, color: "#64748b", marginBottom: 52 }}>Your first article is on us. No credit card required to start.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {/* Standalone */}
              <div style={{ background: "#0d1729", border: "1px solid rgba(79,70,229,0.4)", borderRadius: 18, padding: 36, textAlign: "left", position: "relative" }}>
                <div style={{ position: "absolute", top: 16, right: 16, background: "#4f46e5", color: "white", fontSize: 10, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", borderRadius: 40, padding: "4px 12px" }}>
                  Free to start
                </div>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#818cf8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Standalone</div>
                <div style={{ fontSize: 13, color: "#64748b", marginBottom: 20, lineHeight: 1.5 }}>Try it free with 1 article. Then $99/month for weekly articles.</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
                  <span style={{ fontSize: 42, fontWeight: 900, color: "#f1f5f9", fontVariantNumeric: "tabular-nums" }}>$0</span>
                  <span style={{ fontSize: 14, color: "#475569" }}>to start</span>
                </div>
                <div style={{ fontSize: 12, color: "#64748b", marginBottom: 24 }}>then $99/month — cancel anytime</div>
                {["1 free article to start", "Weekly AI-written articles", "Keyword research & tracking", "Auto-publish via API/Webhook", "Rank tracking dashboard", "Email support"].map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, fontSize: 14, color: "#94a3b8" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    {f}
                  </div>
                ))}
                <a href="#get-started" style={{ display: "block", marginTop: 28, background: "linear-gradient(135deg, #4f46e5, #7c3aed)", color: "white", fontWeight: 700, fontSize: 15, padding: "13px 0", borderRadius: 10, textDecoration: "none", textAlign: "center" }}>
                  Get 1 Free Article →
                </a>
              </div>

              {/* CRM Add-on */}
              <div style={{ background: "#0d1729", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 18, padding: 36, textAlign: "left", position: "relative" }}>
                <div style={{ position: "absolute", top: 16, right: 16, background: "#1e2d45", color: "#94a3b8", fontSize: 10, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", borderRadius: 40, padding: "4px 12px" }}>
                  Best Value
                </div>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#818cf8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>LeadOS CRM Add-on</div>
                <div style={{ fontSize: 13, color: "#64748b", marginBottom: 20, lineHeight: 1.5 }}>For LeadOS CRM users. Adds Auto SEO to your existing subscription.</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
                  <span style={{ fontSize: 42, fontWeight: 900, color: "#f1f5f9", fontVariantNumeric: "tabular-nums" }}>$49</span>
                  <span style={{ fontSize: 14, color: "#475569" }}>/month</span>
                </div>
                <div style={{ fontSize: 12, color: "#64748b", marginBottom: 24 }}>Added to your CRM plan</div>
                {["Everything in Standalone", "Built into your CRM dashboard", "Auto-publishes to LeadOS blog", "Shared keyword + article inbox", "One-click enable/disable", "Priority support"].map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, fontSize: 14, color: "#94a3b8" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    {f}
                  </div>
                ))}
                <a href="/get-started" style={{ display: "block", marginTop: 28, background: "rgba(79,70,229,0.2)", border: "1px solid rgba(79,70,229,0.4)", color: "#818cf8", fontWeight: 700, fontSize: 15, padding: "13px 0", borderRadius: 10, textDecoration: "none", textAlign: "center" }}>
                  Get LeadOS CRM →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section style={{ background: "#0a1020", padding: "80px 24px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#818cf8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Results</div>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em" }}>What our clients say</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {[
                {
                  name: "Dr. Sarah Mitchell",
                  role: "Aesthetic Clinic Director, Sydney",
                  quote: "We went from zero organic traffic to 340 monthly visitors in 3 months. Auto SEO published 12 articles while I focused on patients.",
                },
                {
                  name: "James Khalil",
                  role: "Real Estate Principal, Brisbane",
                  quote: "I was spending $3,000/month on a content agency. Auto SEO replaced them for $99 and ranks better. Genuinely shocked.",
                },
                {
                  name: "Priya Nair",
                  role: "Practice Manager, Melbourne",
                  quote: "Our dental practice now gets 2–3 organic enquiries per week we didn't have before. The articles are better than what we used to approve manually.",
                },
              ].map(({ name, role, quote }) => (
                <div key={name} style={{ background: "#0d1729", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: 28 }}>
                  <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ))}
                  </div>
                  <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.7, marginBottom: 16 }}>"{quote}"</p>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#f1f5f9" }}>{name}</div>
                  <div style={{ fontSize: 12, color: "#475569" }}>{role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#818cf8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>FAQ</div>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em" }}>Common questions</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {FAQS.map(({ q, a }) => (
                <details key={q} className="faq-item" style={{ background: "#0d1729", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <summary style={{ padding: "18px 24px", fontSize: 15, fontWeight: 600, color: "#f1f5f9", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                    {q}
                    <span style={{ color: "#818cf8", fontSize: 18, flexShrink: 0 }}>+</span>
                  </summary>
                  <div style={{ padding: "0 24px 18px", fontSize: 14, color: "#64748b", lineHeight: 1.75 }}>{a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── SIGNUP FORM ── */}
        <section id="get-started" style={{ padding: "88px 24px", background: "#0a1020", borderTop: "1px solid rgba(79,70,229,0.2)" }}>
          <div style={{ maxWidth: 540, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#818cf8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Get Started</div>
            <h2 style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 900, color: "#f1f5f9", marginBottom: 12, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Your first article<br />is on us.
            </h2>
            <p style={{ fontSize: 16, color: "#475569", marginBottom: 36, lineHeight: 1.65 }}>
              Sign up → connect your website → the AI writes and publishes your first article for free. See it ranking before you pay a cent.
            </p>
            <AutoSeoSignupForm />
            <p style={{ fontSize: 12, color: "#1e2d45", marginTop: 20 }}>
              No credit card required · Cancel anytime · Article live within minutes
            </p>
          </div>
        </section>

        {/* ── FOOTER STRIP ── */}
        <div style={{ background: "#060b18", padding: "24px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ fontSize: 13, color: "#1e2d45" }}>
            Auto SEO by{" "}
            <Link href="/" style={{ color: "#475569", textDecoration: "none", fontWeight: 600 }}>LeadOS</Link>
            {" "} · {" "}
            <Link href="/privacy" style={{ color: "#1e2d45", textDecoration: "none" }}>Privacy</Link>
            {" "} · {" "}
            <Link href="/terms" style={{ color: "#1e2d45", textDecoration: "none" }}>Terms</Link>
          </div>
        </div>

      </main>
    </>
  );
}

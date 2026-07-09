// LeadOS Auto SEO — Standalone product landing page
// Also marketed as a CRM add-on. USP: AI employee that writes SEO content 24/7.

import type { Metadata } from "next";
import Link from "next/link";
import AutoSeoSignupForm from "./AutoSeoSignupForm";

export const metadata: Metadata = {
  title: "Auto SEO by LeadOS — 1 Free Article. Then $99/mo.",
  description:
    "Sign up free and generate your first AI SEO article at no cost. Connect your website, see the article live, then pay to keep going. From $99/month.",
  openGraph: {
    title: "Auto SEO by LeadOS — 1 Free Article. Then $99/mo.",
    description: "Try before you pay. Get 1 free AI-written SEO article published to your website — no credit card required.",
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
    a: "For LeadOS CRM users, articles publish to leadoscrm.com/blog automatically. For standalone customers, we provide a simple API or Webhook that connects to your existing CMS (WordPress, Webflow, Framer, Squarespace, custom Next.js).",
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
    <main style={{ fontFamily: "var(--font-sans, system-ui, sans-serif)", color: "#0f172a" }}>

      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e1b4b 60%, #0f172a 100%)", padding: "100px 24px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        {/* Background glow */}
        <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 700, height: 400, background: "radial-gradient(ellipse, rgba(79,70,229,.25) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", maxWidth: 820, margin: "0 auto" }}>
          {/* Pill badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(79,70,229,.15)", border: "1px solid rgba(79,70,229,.3)", borderRadius: 40, padding: "6px 16px", fontSize: 12, fontWeight: 700, color: "#a5b4fc", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4f46e5", display: "inline-block", animation: "pulse 2s infinite" }} />
            Free first article — no credit card needed
          </div>

          <h1 style={{ fontSize: "clamp(36px, 6vw, 68px)", fontWeight: 900, color: "white", lineHeight: 1.08, marginBottom: 24, letterSpacing: "-0.02em" }}>
            Your AI Employee That<br />
            <span style={{ background: "linear-gradient(90deg, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Writes SEO Content 24/7</span>
          </h1>

          <p style={{ fontSize: "clamp(16px, 2.5vw, 20px)", color: "rgba(255,255,255,.65)", lineHeight: 1.7, marginBottom: 40, maxWidth: 620, margin: "0 auto 40px" }}>
            Auto SEO researches keywords, writes expert long-form articles, publishes them to your website and tracks your rankings —
            <strong style={{ color: "rgba(255,255,255,.9)" }}> completely on autopilot.</strong>
          </p>

          {/* Social proof numbers */}
          <div style={{ display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
            {[
              { stat: "4× faster", label: "ranking growth vs manual" },
              { stat: "1,500+", label: "words per article" },
              { stat: "Weekly", label: "new articles published" },
            ].map(({ stat, label }) => (
              <div key={stat} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 24, fontWeight: 800, color: "white" }}>{stat}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,.45)", marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#get-started" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #4f46e5, #7c3aed)", color: "white", fontWeight: 700, fontSize: 15, padding: "14px 32px", borderRadius: 12, textDecoration: "none", boxShadow: "0 8px 24px rgba(79,70,229,.4)" }}>
              Get 1 Free Article →
            </a>
            <a href="#pricing" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.85)", fontWeight: 600, fontSize: 15, padding: "14px 32px", borderRadius: 12, textDecoration: "none", border: "1px solid rgba(255,255,255,.15)" }}>
              See Pricing
            </a>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "80px 24px", maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#4f46e5", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>How It Works</div>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, marginBottom: 48, lineHeight: 1.2 }}>
          Set It Once. Rank Forever.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
          {[
            { step: "01", title: "Sign Up Free", desc: "Create your account in 60 seconds. No credit card. Connect your website and Google Search Console." },
            { step: "02", title: "Get Your Free Article", desc: "The AI researches your niche, writes a 1,500–2,500 word expert article targeting your keyword — completely free." },
            { step: "03", title: "See It Live", desc: "The article publishes to your website and gets submitted to Google for indexing. You see the result before paying a cent." },
            { step: "04", title: "Pay to Continue", desc: "Happy with the result? Upgrade for $99/month to get weekly articles, unlimited keywords, and rank tracking." },
          ].map(({ step, title, desc }) => (
            <div key={step} style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 16, padding: 28, textAlign: "left" }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#4f46e5", letterSpacing: "0.1em", marginBottom: 12 }}>{step}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>{title}</div>
              <div style={{ fontSize: 14, color: "#64748b", lineHeight: 1.65 }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#4f46e5", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Features</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, lineHeight: 1.2 }}>
              Everything You Need to<br />Dominate Search Rankings
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {FEATURES.map(({ icon, title, desc }) => (
              <div key={title} style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 16, padding: 28 }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{icon}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>{title}</div>
                <div style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#4f46e5", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Who It's For</div>
        <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 800, marginBottom: 40, lineHeight: 1.3 }}>
          Works for Any Service Business
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
          {INDUSTRIES.map((ind) => (
            <span key={ind} style={{ background: "rgba(79,70,229,.06)", border: "1px solid rgba(79,70,229,.12)", borderRadius: 40, padding: "8px 18px", fontSize: 14, fontWeight: 600, color: "#4338ca" }}>
              {ind}
            </span>
          ))}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#4f46e5", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Pricing</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, marginBottom: 8, lineHeight: 1.2 }}>Start Free. Pay When You See Results.</h2>
          <p style={{ fontSize: 16, color: "#64748b", marginBottom: 52 }}>Your first article is on us. No credit card required to start.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {/* Standalone */}
            <div style={{ background: "white", border: "2px solid #4f46e5", borderRadius: 20, padding: 36, textAlign: "left", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 16, right: 16, background: "linear-gradient(135deg, #4f46e5, #7c3aed)", color: "white", fontSize: 10, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", borderRadius: 40, padding: "4px 12px" }}>
                Free to start
              </div>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#4f46e5", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Standalone</div>
              <div style={{ fontSize: 13, color: "#64748b", marginBottom: 20, lineHeight: 1.5 }}>Try it free with 1 article. Then $99/month for weekly articles.</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
                <span style={{ fontSize: 42, fontWeight: 900, color: "#0f172a" }}>$0</span>
                <span style={{ fontSize: 14, color: "#94a3b8" }}>to start</span>
              </div>
              <div style={{ fontSize: 12, color: "#64748b", marginBottom: 24 }}>then $99/month — cancel anytime</div>
              {["1 free article to start", "Weekly AI-written articles", "Keyword research & tracking", "Auto-publish via API/Webhook", "Rank tracking dashboard", "Email support"].map(f => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, fontSize: 14, color: "#334155" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  {f}
                </div>
              ))}
              <a href="#get-started" style={{ display: "block", marginTop: 28, background: "linear-gradient(135deg, #4f46e5, #7c3aed)", color: "white", fontWeight: 700, fontSize: 15, padding: "13px 0", borderRadius: 10, textDecoration: "none", textAlign: "center" }}>
                Get 1 Free Article →
              </a>
            </div>

            {/* CRM Add-on */}
            <div style={{ background: "linear-gradient(160deg, #1e1b4b, #0f172a)", border: "2px solid rgba(79,70,229,.4)", borderRadius: 20, padding: 36, textAlign: "left", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 16, right: 16, background: "linear-gradient(135deg, #4f46e5, #7c3aed)", color: "white", fontSize: 10, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", borderRadius: 40, padding: "4px 12px" }}>
                Best Value
              </div>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#a5b4fc", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>LeadOS CRM Add-on</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,.5)", marginBottom: 20, lineHeight: 1.5 }}>For LeadOS CRM users. Adds Auto SEO to your existing subscription.</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
                <span style={{ fontSize: 42, fontWeight: 900, color: "white" }}>$49</span>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,.4)" }}>/month</span>
              </div>
              <div style={{ fontSize: 12, color: "#a5b4fc", marginBottom: 24 }}>Added to your CRM plan</div>
              {["Everything in Standalone", "Built into your CRM dashboard", "Auto-publishes to LeadOS blog", "Shared keyword + article inbox", "One-click enable/disable", "Priority support"].map(f => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, fontSize: 14, color: "rgba(255,255,255,.75)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  {f}
                </div>
              ))}
              <a href="/get-started" style={{ display: "block", marginTop: 28, background: "linear-gradient(135deg, #4f46e5, #7c3aed)", color: "white", fontWeight: 700, fontSize: 15, padding: "13px 0", borderRadius: 10, textDecoration: "none", textAlign: "center" }}>
                Get LeadOS CRM →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#4f46e5", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Results</div>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 800, lineHeight: 1.3 }}>What Our Clients Say</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
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
            <div key={name} style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 16, padding: 28 }}>
              <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <p style={{ fontSize: 14, color: "#334155", lineHeight: 1.7, marginBottom: 16, fontStyle: "italic" }}>"{quote}"</p>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#0f172a" }}>{name}</div>
              <div style={{ fontSize: 12, color: "#94a3b8" }}>{role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#4f46e5", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>FAQ</div>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 800, lineHeight: 1.3 }}>Common Questions</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {FAQS.map(({ q, a }) => (
              <div key={q} style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 14, padding: 24 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", marginBottom: 10 }}>{q}</div>
                <div style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7 }}>{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNUP FORM ── */}
      <section id="get-started" style={{ padding: "80px 24px", background: "linear-gradient(160deg, #0f172a, #1e1b4b)" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900, color: "white", marginBottom: 12, lineHeight: 1.2 }}>
            Try It Free —<br />1 Article on Us
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,.55)", marginBottom: 8, lineHeight: 1.65 }}>
            Sign up free → connect your website → generate your first AI article → see it live.
          </p>
          <p style={{ fontSize: 14, color: "rgba(165,180,252,.8)", marginBottom: 36, lineHeight: 1.5, fontWeight: 600 }}>
            No credit card required. Pay $99/month to keep going.
          </p>
          <AutoSeoSignupForm />
          <p style={{ fontSize: 12, color: "rgba(255,255,255,.3)", marginTop: 20 }}>
            No credit card required · Cancel anytime · Your article is live within minutes
          </p>
        </div>
      </section>

      {/* ── FOOTER STRIP ── */}
      <div style={{ background: "#0f172a", padding: "24px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,.06)" }}>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,.3)" }}>
          Auto SEO by{" "}
          <Link href="/" style={{ color: "#818cf8", textDecoration: "none", fontWeight: 600 }}>LeadOS</Link>
          {" "} · {" "}
          <Link href="/privacy" style={{ color: "rgba(255,255,255,.3)", textDecoration: "none" }}>Privacy</Link>
          {" "} · {" "}
          <Link href="/terms" style={{ color: "rgba(255,255,255,.3)", textDecoration: "none" }}>Terms</Link>
        </div>
      </div>
    </main>
  );
}

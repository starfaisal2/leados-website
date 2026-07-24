// LeadOS Company Brain â€” Standalone product landing page
// Upload any company document and retrieve answers instantly with AI.

import type { Metadata } from "next";
import Link from "next/link";
import BrainSignupForm from "./BrainSignupForm";

export const metadata: Metadata = {
  title: "Company Brain by LeadOS â€” Your Entire Business Knowledge, Answered by AI",
  description:
    "Upload contracts, licenses, policies, visa records, HR documents â€” ask any question and get an instant AI answer with source citations. Like an in-house Claude for your business. From $39/month standalone â€” free with LeadOS CRM.",
  openGraph: {
    title: "Company Brain by LeadOS â€” Your Entire Business Knowledge, Answered by AI",
    description:
      "Upload any company document and retrieve any information with a single prompt. Contracts, licenses, visa records, HR policies â€” all searchable by AI.",
    type: "website",
  },
};

const FEATURES = [
  {
    icon: "ðŸ“„",
    title: "Upload Any Document",
    desc: "PDFs, Word docs, CSV files, JSON, HTML â€” any format. Labor contracts, trade licenses, visa copies, financial records, SOPs, employee handbooks. If it's a file, it goes in.",
  },
  {
    icon: "ðŸ¤–",
    title: "AI Reads & Indexes",
    desc: "Claude AI reads every page, extracts all text and splits it into searchable chunks. Documents are fully indexed and ready to query in seconds.",
  },
  {
    icon: "ðŸ’¬",
    title: "Ask in Plain English",
    desc: "Type a question like \"When does Ahmed's visa expire?\" or \"What's the cancellation policy?\" and get a precise answer instantly â€” no digging through folders.",
  },
  {
    icon: "ðŸ“",
    title: "Source Citations",
    desc: "Every answer cites exactly which document it came from. No hallucinations â€” if the answer isn't in your documents, it says so.",
  },
  {
    icon: "ðŸ”’",
    title: "Confidential Data Flagged",
    desc: "Salaries, passport numbers, visa IDs, bank details â€” the AI automatically flags sensitive information as confidential with every response.",
  },
  {
    icon: "ðŸ§ ",
    title: "Conversation Memory",
    desc: "Each session builds on the previous. Ask follow-up questions naturally. Search through past conversations by topic or date.",
  },
];

const CATEGORIES = [
  { icon: "ðŸ“‹", label: "Labor Contracts" },
  { icon: "ðŸ›‚", label: "Visa & Passport Records" },
  { icon: "ðŸ¢", label: "Trade Licenses" },
  { icon: "âš–ï¸", label: "Legal Agreements" },
  { icon: "ðŸ’°", label: "Financial Records" },
  { icon: "ðŸ‘¥", label: "HR Policies" },
  { icon: "ðŸ“œ", label: "SOPs & Procedures" },
  { icon: "ðŸ›¡ï¸", label: "Insurance Documents" },
  { icon: "ðŸ“Š", label: "Supplier Contracts" },
  { icon: "ðŸ¥", label: "Medical Records" },
  { icon: "ðŸŽ“", label: "Training Manuals" },
  { icon: "ðŸ”§", label: "Technical Specs" },
];

const FAQS = [
  {
    q: "What types of files can I upload?",
    a: "PDF, Word (.docx), plain text (.txt), Markdown, CSV, JSON and HTML files â€” up to 50 MB each. PDF is the most common format for contracts and legal documents, and Company Brain extracts every page automatically.",
  },
  {
    q: "Is my data secure and private?",
    a: "All documents are stored encrypted in your private Supabase bucket â€” isolated per business. Only authenticated users of your company can access your documents. The AI never trains on your data.",
  },
  {
    q: "What happens if the answer isn't in my documents?",
    a: "The AI says clearly: \"I don't have that information in the uploaded company documents.\" It never invents facts. Every response is grounded in the documents you've uploaded.",
  },
  {
    q: "How many documents can I upload?",
    a: "During the 30-day free trial you can upload up to 10 documents (up to 50,000 words of content). After upgrading to the $39/month paid plan, uploads are unlimited â€” no cap on documents or storage.",
  },
  {
    q: "Can multiple team members use it?",
    a: "Yes. Every team member with CRM access can use Company Brain. Each person has their own conversation history. Admins can see all sessions and manage the document library.",
  },
  {
    q: "Can I use this without the LeadOS CRM?",
    a: "Yes â€” the Standalone plan gives you Company Brain as an independent product at $39/month. If you're already a LeadOS CRM customer, Company Brain is completely free â€” included in your subscription.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes â€” cancel anytime with one click from Settings â†’ Billing inside your Company Brain dashboard. There are no lock-in contracts. If you're on a paid plan, you keep full access until the end of your current billing period. After cancellation you can still log in to download or delete your documents for privacy.",
  },
];

const brainSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Company Brain by LeadOS",
  applicationCategory: "BusinessApplication",
  description: "Upload contracts, licenses, policies, visa records, HR documents â€” ask any question and get an instant AI answer with source citations.",
  url: "https://myleados.ai/company-brain",
  offers: { "@type": "Offer", price: "39", priceCurrency: "USD", priceSpecification: { "@type": "UnitPriceSpecification", billingDuration: "P1M" } },
  operatingSystem: "Web",
  provider: { "@type": "Organization", name: "LeadOS", url: "https://myleados.ai" },
};

const brainBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://myleados.ai" },
    { "@type": "ListItem", position: 2, name: "Company Brain" },
  ],
};

export default function CompanyBrainPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(brainSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(brainBreadcrumb) }} />
    <main style={{ fontFamily: "var(--font-sans, system-ui, sans-serif)", color: "#0f172a" }}>

      {/* â”€â”€ HERO â”€â”€ */}
      <section style={{ background: "linear-gradient(160deg, #0f172a 0%, #0c1a3a 50%, #0f172a 100%)", padding: "100px 24px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)", width: 800, height: 500, background: "radial-gradient(ellipse, rgba(59,130,246,.18) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "40%", left: "25%", width: 400, height: 300, background: "radial-gradient(ellipse, rgba(139,92,246,.12) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", maxWidth: 860, margin: "0 auto" }}>
          {/* Free trial badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, rgba(124,58,237,.25), rgba(37,99,235,.2))", border: "1px solid rgba(139,92,246,.4)", borderRadius: 40, padding: "8px 20px", fontSize: 13, fontWeight: 800, color: "#c4b5fd", marginBottom: 16 }}>
            ðŸŽ 30-Day Free Trial â€” No Credit Card Required
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(59,130,246,.12)", border: "1px solid rgba(59,130,246,.25)", borderRadius: 40, padding: "6px 16px", fontSize: 12, fontWeight: 700, color: "#93c5fd", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 28, marginLeft: 10 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#3b82f6", display: "inline-block" }} />
            By LeadOS â€” The AI Business OS
          </div>

          <h1 style={{ fontSize: "clamp(34px, 6vw, 66px)", fontWeight: 900, color: "white", lineHeight: 1.07, marginBottom: 24, letterSpacing: "-0.02em" }}>
            Your Entire Business Knowledge<br />
            <span style={{ background: "linear-gradient(90deg, #60a5fa, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Answered by AI Instantly</span>
          </h1>

          <p style={{ fontSize: "clamp(16px, 2.5vw, 20px)", color: "rgba(255,255,255,.6)", lineHeight: 1.7, marginBottom: 48, maxWidth: 640, margin: "0 auto 48px" }}>
            Upload labor contracts, visas, licenses, HR policies, financial records â€” <strong style={{ color: "rgba(255,255,255,.85)" }}>anything</strong>.
            Ask any question and get an instant answer with the exact source cited.
            Like having an in-house AI that has read your entire company archive.
          </p>

          <div style={{ display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap", marginBottom: 52 }}>
            {[
              { stat: "Instant", label: "answers from any document" },
              { stat: "100%", label: "grounded in your data" },
              { stat: "âˆž", label: "documents supported" },
            ].map(({ stat, label }) => (
              <div key={stat} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 26, fontWeight: 800, color: "white" }}>{stat}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,.4)", marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#get-started" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #2563eb, #7c3aed)", color: "white", fontWeight: 700, fontSize: 15, padding: "14px 32px", borderRadius: 12, textDecoration: "none", boxShadow: "0 8px 24px rgba(37,99,235,.4)" }}>
              Start Free â€” 30 Days Trial â†’
            </a>
            <a href="#how-it-works" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.07)", color: "rgba(255,255,255,.8)", fontWeight: 600, fontSize: 15, padding: "14px 32px", borderRadius: 12, textDecoration: "none", border: "1px solid rgba(255,255,255,.13)" }}>
              See How It Works
            </a>
          </div>
          <div style={{ marginTop: 20, display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            {["âœ“ No credit card", "âœ“ Up to 10 documents free", "âœ“ Then $39/month â€” cancel anytime"].map(t => (
              <span key={t} style={{ fontSize: 13, color: "rgba(255,255,255,.45)", fontWeight: 500 }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ DEMO PREVIEW â”€â”€ */}
      <section style={{ background: "#f1f5f9", padding: "60px 24px 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", background: "#0a0d15", borderRadius: "20px 20px 0 0", border: "1px solid rgba(255,255,255,.08)", overflow: "hidden" }}>
          {/* Fake window bar */}
          <div style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,.06)", display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e" }} />
            <div style={{ flex: 1, textAlign: "center", fontSize: 11, color: "rgba(255,255,255,.3)", fontFamily: "monospace" }}>
              Company Brain â€” Chat
            </div>
          </div>
          {/* Fake chat */}
          <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 20, minHeight: 340 }}>
            {[
              {
                role: "user",
                content: "When does Ahmed Al-Rashidi's visa expire and what's his visa type?",
              },
              {
                role: "assistant",
                content: "Ahmed Al-Rashidi's visa details are as follows:\n\nâ€¢ Visa Type: Employment Visa (Residence Permit)\nâ€¢ Expiry Date: 14 March 2026\nâ€¢ Visa Number: UAE-2024-0047821\nâ€¢ Sponsor: Sydney Royal Clinic LLC\n\nâš ï¸ Confidential â€” handle with care.\n\nðŸ“„ Source: Ahmed Al-Rashidi â€” Employment Contract & Visa Copy 2024",
              },
              {
                role: "user",
                content: "Which staff visas expire before the end of this year?",
              },
              {
                role: "assistant",
                content: "Based on uploaded visa documents, the following staff visas expire before 31 December 2025:\n\nâ€¢ Maria Santos â€” expires 8 June 2025 (Employment Visa)\nâ€¢ Lasha Beridze â€” expires 22 September 2025 (Employment Visa)\nâ€¢ Priya Sharma â€” expires 11 November 2025 (Residence Permit)\n\nRecommend initiating renewal 60 days before each expiry date.\n\nâš ï¸ Confidential â€” handle with care.\nðŸ“„ Source: Staff Visa Records 2024â€“2025",
              },
            ].map((msg, i) => (
              <div key={i} style={{ display: "flex", gap: 12, justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
                {msg.role === "assistant" && (
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(37,99,235,.2)", border: "1px solid rgba(59,130,246,.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0, marginTop: 4 }}>ðŸ§ </div>
                )}
                <div style={{ maxWidth: "78%", background: msg.role === "user" ? "linear-gradient(135deg, #2563eb, #7c3aed)" : "rgba(255,255,255,.05)", border: msg.role === "assistant" ? "1px solid rgba(255,255,255,.08)" : "none", borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px", padding: "12px 16px", fontSize: 13, color: msg.role === "user" ? "white" : "rgba(255,255,255,.85)", lineHeight: 1.65, whiteSpace: "pre-wrap" }}>
                  {msg.content}
                </div>
                {msg.role === "user" && (
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0, marginTop: 4 }}>ðŸ‘¤</div>
                )}
              </div>
            ))}
            {/* Input bar */}
            <div style={{ display: "flex", gap: 10, marginTop: 8, background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 14, padding: "10px 14px", alignItems: "center" }}>
              <span style={{ flex: 1, fontSize: 13, color: "rgba(255,255,255,.25)" }}>Ask anything about your company documents...</span>
              <div style={{ width: 34, height: 34, borderRadius: 10, background: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>âž¤</div>
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ HOW IT WORKS â”€â”€ */}
      <section id="how-it-works" style={{ background: "#f1f5f9", padding: "80px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#2563eb", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>How It Works</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, marginBottom: 48, lineHeight: 1.2 }}>
            Upload. Ask. Done.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {[
              { step: "01", title: "Upload Any Document", desc: "Drag and drop PDFs, Word files, CSVs or any text document. Title it, tag it, categorise it." },
              { step: "02", title: "AI Reads It Instantly", desc: "Claude AI extracts every word, splits it into searchable chunks and indexes it in seconds." },
              { step: "03", title: "Ask in Plain English", desc: "Type your question naturally. No search syntax, no keywords â€” just ask like you'd ask a colleague." },
              { step: "04", title: "Get a Cited Answer", desc: "Receive a precise answer with the exact document name cited. Confidential data is automatically flagged." },
            ].map(({ step, title, desc }) => (
              <div key={step} style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 16, padding: 28, textAlign: "left" }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#2563eb", letterSpacing: "0.1em", marginBottom: 12 }}>{step}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>{title}</div>
                <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.65 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ WHAT YOU CAN UPLOAD â”€â”€ */}
      <section style={{ padding: "80px 24px", maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#2563eb", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Document Types</div>
        <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, marginBottom: 12, lineHeight: 1.2 }}>
          Every Document Your Business Runs On
        </h2>
        <p style={{ fontSize: 16, color: "#64748b", marginBottom: 44, maxWidth: 560, margin: "0 auto 44px" }}>
          Upload any company file. Company Brain handles it all.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 14 }}>
          {CATEGORIES.map(({ icon, label }) => (
            <div key={label} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 14, padding: "18px 14px", display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 20 }}>{icon}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#334155" }}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* â”€â”€ FEATURES â”€â”€ */}
      <section style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#2563eb", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Features</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, lineHeight: 1.2 }}>
              Built for Real Business Operations
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

      {/* â”€â”€ USE CASES â”€â”€ */}
      <section style={{ padding: "80px 24px", maxWidth: 960, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#2563eb", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Real Examples</div>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, lineHeight: 1.2 }}>
            What You Can Ask Company Brain
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {[
            { q: "\"Which staff visas expire in the next 3 months?\"", icon: "ðŸ›‚" },
            { q: "\"What's the notice period in the manager's contract?\"", icon: "ðŸ“‹" },
            { q: "\"What does our cancellation policy say?\"", icon: "âš–ï¸" },
            { q: "\"Does our insurance cover cosmetic procedures?\"", icon: "ðŸ›¡ï¸" },
            { q: "\"What are the payment terms in our supplier agreement?\"", icon: "ðŸ’°" },
            { q: "\"When is the trade license renewal due?\"", icon: "ðŸ¢" },
          ].map(({ q, icon }) => (
            <div key={q} style={{ background: "linear-gradient(135deg, rgba(37,99,235,.04), rgba(124,58,237,.04))", border: "1px solid rgba(37,99,235,.1)", borderRadius: 16, padding: 22, display: "flex", gap: 14, alignItems: "flex-start" }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>{icon}</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#1e3a8a", lineHeight: 1.55, fontStyle: "italic" }}>{q}</span>
            </div>
          ))}
        </div>
      </section>

      {/* â”€â”€ PRICING â”€â”€ */}
      <section id="pricing" style={{ background: "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#2563eb", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Pricing</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, marginBottom: 8, lineHeight: 1.2 }}>Simple, Transparent Pricing</h2>
          <p style={{ fontSize: 16, color: "#64748b", marginBottom: 52 }}>No setup fees. No contracts. Cancel anytime in one click.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {/* Standalone */}
            <div style={{ background: "white", border: "2px solid #e2e8f0", borderRadius: 20, padding: 36, textAlign: "left" }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#94a3b8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Standalone</div>
              <div style={{ fontSize: 13, color: "#64748b", marginBottom: 20, lineHeight: 1.5 }}>For businesses that want Company Brain without the full LeadOS CRM.</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 28 }}>
                <span style={{ fontSize: 42, fontWeight: 900, color: "#0f172a" }}>$39</span>
                <span style={{ fontSize: 14, color: "#94a3b8" }}>/month</span>
              </div>
              {["Unlimited document uploads", "AI-powered Q&A chat", "Source citations on every answer", "Confidential data flagging", "Conversation history", "PDF, Word, CSV, JSON support", "Team access", "Email support"].map(f => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, fontSize: 14, color: "#334155" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  {f}
                </div>
              ))}
              <a href="#get-started" style={{ display: "block", marginTop: 28, background: "white", border: "2px solid #2563eb", color: "#2563eb", fontWeight: 700, fontSize: 15, padding: "13px 0", borderRadius: 10, textDecoration: "none", textAlign: "center" }}>
                Get Started â†’
              </a>
            </div>

            {/* CRM Add-on */}
            <div style={{ background: "linear-gradient(160deg, #0c1a3a, #0f172a)", border: "2px solid rgba(37,99,235,.35)", borderRadius: 20, padding: 36, textAlign: "left", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 16, right: 16, background: "linear-gradient(135deg, #2563eb, #7c3aed)", color: "white", fontSize: 10, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", borderRadius: 40, padding: "4px 12px" }}>
                Best Value
              </div>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#93c5fd", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>LeadOS CRM Add-on</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,.45)", marginBottom: 20, lineHeight: 1.5 }}>Already on LeadOS? Add Company Brain to your subscription.</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
                <span style={{ fontSize: 42, fontWeight: 900, color: "white" }}>FREE</span>
              </div>
              <div style={{ fontSize: 12, color: "#93c5fd", marginBottom: 24 }}>Included with your LeadOS CRM subscription</div>
              {["Everything in Standalone", "Built into your CRM sidebar", "One-click access from any page", "Shared with your whole team", "Syncs with CRM contacts & records", "Priority support"].map(f => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, fontSize: 14, color: "rgba(255,255,255,.7)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  {f}
                </div>
              ))}
              <a href="#get-started" style={{ display: "block", marginTop: 28, background: "linear-gradient(135deg, #2563eb, #7c3aed)", color: "white", fontWeight: 700, fontSize: 15, padding: "13px 0", borderRadius: 10, textDecoration: "none", textAlign: "center" }}>
                Enable Free with CRM â†’
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ FAQ â”€â”€ */}
      <section style={{ padding: "80px 24px", maxWidth: 760, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#2563eb", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>FAQ</div>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 800, lineHeight: 1.3 }}>Common Questions</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {FAQS.map(({ q, a }) => (
            <div key={q} style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 16, padding: 24 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: "#0f172a", marginBottom: 10 }}>{q}</div>
              <div style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7 }}>{a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* â”€â”€ GET STARTED â”€â”€ */}
      <section id="get-started" style={{ background: "linear-gradient(160deg, #0f172a, #0c1a3a, #0f172a)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>ðŸ§ </div>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "white", marginBottom: 12, lineHeight: 1.2 }}>
              Start Your Free 30-Day Trial
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.7, marginBottom: 8 }}>
              No credit card required. Upload up to 10 documents free.<br />
              After 30 days, plans start at <strong style={{ color: "white" }}>$39/month</strong>.
            </p>
          </div>

          <BrainSignupForm />

          <div style={{ textAlign: "center", marginTop: 32 }}>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,.3)", marginBottom: 8 }}>Already have LeadOS CRM?</p>
            <Link href="/get-started?product=company_brain&plan=crm_addon"
              style={{ fontSize: 13, color: "#818cf8", textDecoration: "underline" }}>
              Company Brain is included free with your CRM plan â†’
            </Link>
          </div>
        </div>
      </section>

    </main>
    </>
  );
}

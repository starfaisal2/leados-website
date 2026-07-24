import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Voice AI â€” LeadOS | AI Phone Agent That Books Appointments 24/7",
  description:
    "Never miss a call again. LeadOS Voice AI answers every call, qualifies leads, and books appointments automatically â€” in any language, around the clock.",
};

const voiceAiSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LeadOS Voice AI",
  applicationCategory: "BusinessApplication",
  description: "AI phone agent that answers every call, qualifies leads, and books appointments automatically â€” in any language, 24/7.",
  url: "https://myleados.ai/voice-ai",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Included with LeadOS CRM" },
  operatingSystem: "Web",
  provider: { "@type": "Organization", name: "LeadOS", url: "https://myleados.ai" },
};

const voiceAiBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://myleados.ai" },
    { "@type": "ListItem", position: 2, name: "Voice AI" },
  ],
};

const USECASES = [
  {
    icon: "ðŸ¥",
    title: "Medical & Aesthetics",
    desc: "Patients call after hours. Voice AI answers, collects their concern, checks availability, and books them in â€” all without a receptionist.",
  },
  {
    icon: "ðŸ ",
    title: "Real Estate",
    desc: "Missed calls from property enquiries cost deals. Voice AI qualifies buyer intent, budget, and timeline, then routes warm leads to your agents.",
  },
  {
    icon: "ðŸ¦·",
    title: "Dental Clinics",
    desc: "New patient bookings 24/7. Voice AI handles appointment scheduling, insurance questions, and pre-visit instructions automatically.",
  },
  {
    icon: "âš–ï¸",
    title: "Law Firms",
    desc: "Intake calls at any hour. Voice AI gathers case type, jurisdiction, and urgency â€” and books a consultation while the caller is still on the line.",
  },
];

const HOW_IT_WORKS = [
  {
    num: "01",
    title: "Call comes in",
    desc: "A lead calls your business number. Instead of ringing out or hitting voicemail, LeadOS Voice AI picks up instantly â€” in your brand voice.",
  },
  {
    num: "02",
    title: "AI qualifies in seconds",
    desc: "The AI asks the right questions: What service? Preferred time? Any notes for the team? It adapts the conversation based on the caller's answers.",
  },
  {
    num: "03",
    title: "Appointment booked",
    desc: "The AI checks your live calendar and books the slot in real time. Confirmation sent to both the caller and your team via WhatsApp or SMS.",
  },
  {
    num: "04",
    title: "Lead logged in CRM",
    desc: "Every call is recorded, transcribed, and logged in LeadOS with source attribution. Your team picks up with full context â€” no handover friction.",
  },
];

export default function VoiceAiPage() {
  const BOOK_URL =
    "https://wa.me/971568350424?text=Hi%20LeadOS%2C%20I%20want%20to%20learn%20about%20Voice%20AI";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(voiceAiSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(voiceAiBreadcrumb) }} />
      <style>{`
        @keyframes voice-ring {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); opacity: 0.85; }
        }
        @keyframes voice-pulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes waveform {
          0%, 100% { height: 6px; }
          50% { height: 28px; }
        }
        .voice-ring { animation: voice-ring 2s ease-in-out infinite; }
        .voice-pulse-1 { animation: voice-pulse 2s ease-out infinite; }
        .voice-pulse-2 { animation: voice-pulse 2s ease-out 0.7s infinite; }
        .wave-bar { animation: waveform 0.6s ease-in-out infinite; }
        .wave-bar:nth-child(2) { animation-delay: 0.1s; }
        .wave-bar:nth-child(3) { animation-delay: 0.2s; }
        .wave-bar:nth-child(4) { animation-delay: 0.3s; }
        .wave-bar:nth-child(5) { animation-delay: 0.2s; }
        .wave-bar:nth-child(6) { animation-delay: 0.1s; }
        .wave-bar:nth-child(7) { animation-delay: 0.25s; }
        @media (max-width: 760px) {
          .vai-hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .vai-steps-grid { grid-template-columns: 1fr !important; }
          .vai-use-grid { grid-template-columns: 1fr !important; }
          .vai-section { padding: 56px 16px !important; }
        }
      `}</style>

      <main style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif", background: "#060b18", color: "#f1f5f9", margin: 0 }}>

        {/* HERO */}
        <section className="vai-section" style={{ padding: "80px 24px 72px", maxWidth: 1160, margin: "0 auto" }}>
          <div className="vai-hero-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 72, alignItems: "center" }}>

            {/* Left: copy */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.22)", borderRadius: 40, padding: "5px 14px 5px 10px", fontSize: 12, fontWeight: 600, color: "#22c55e", marginBottom: 28 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
                Answers every call Â· Books instantly
              </div>

              <h1 style={{ fontSize: "clamp(38px, 5vw, 68px)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-0.03em", margin: "0 0 20px", textWrap: "balance" }}>
                Your AI<br />
                phone agent.<br />
                <span style={{ color: "#22c55e" }}>24/7.</span>
              </h1>

              <p style={{ fontSize: "clamp(16px, 2vw, 19px)", color: "#94a3b8", lineHeight: 1.65, margin: "0 0 16px", maxWidth: 480 }}>
                Every missed call is a missed booking. LeadOS Voice AI answers <strong style={{ color: "#f1f5f9" }}>instantly</strong>, qualifies the lead, and books the appointment â€” while your team sleeps.
              </p>
              <p style={{ fontSize: "clamp(16px, 2vw, 19px)", color: "#94a3b8", lineHeight: 1.65, margin: "0 0 40px", maxWidth: 480 }}>
                Trained on your business. Speaks in your brand voice. Works in <strong style={{ color: "#22c55e" }}>any language</strong>.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #16a34a, #22c55e)", color: "white", fontWeight: 700, fontSize: 16, padding: "15px 32px", borderRadius: 10, textDecoration: "none", boxShadow: "0 8px 28px rgba(34,197,94,.3)" }}>
                  Book a Demo â†’
                </a>
                <a href="/get-started" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.06)", color: "#94a3b8", fontWeight: 600, fontSize: 15, padding: "15px 28px", borderRadius: 10, textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)" }}>
                  Start Free Trial
                </a>
              </div>

              <p style={{ marginTop: 16, fontSize: 12, color: "#475569" }}>
                30-day free trial Â· No credit card Â· Setup in minutes
              </p>
            </div>

            {/* Right: animated phone visual */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{ position: "relative", width: 280, height: 320 }}>
                {/* Pulse rings */}
                <div className="voice-pulse-1" style={{ position: "absolute", inset: "50% auto auto 50%", transform: "translate(-50%,-50%)", width: 120, height: 120, borderRadius: "50%", border: "2px solid rgba(34,197,94,0.4)" }} />
                <div className="voice-pulse-2" style={{ position: "absolute", inset: "50% auto auto 50%", transform: "translate(-50%,-50%)", width: 120, height: 120, borderRadius: "50%", border: "2px solid rgba(34,197,94,0.25)" }} />

                {/* Phone button */}
                <div className="voice-ring" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -60%)", width: 96, height: 96, borderRadius: "50%", background: "linear-gradient(135deg, #16a34a, #22c55e)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 40px rgba(34,197,94,0.4), 0 16px 40px rgba(0,0,0,0.4)", zIndex: 2 }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>

                {/* Waveform below phone */}
                <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: 3 }}>
                  {[1,2,3,4,5,6,7].map(i => (
                    <div key={i} className="wave-bar" style={{ width: 4, borderRadius: 2, background: "#22c55e", opacity: 0.8, animationDelay: `${(i-1) * 0.1}s`, height: 6 }} />
                  ))}
                </div>

                {/* Call info bubble */}
                <div style={{ position: "absolute", top: 16, right: -16, background: "#0d1729", border: "1px solid rgba(34,197,94,0.25)", borderRadius: 12, padding: "10px 16px", minWidth: 160, boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}>
                  <div style={{ fontSize: 10, color: "#22c55e", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>AI answering...</div>
                  <div style={{ fontSize: 13, color: "#f1f5f9", fontWeight: 600 }}>Inbound call</div>
                  <div style={{ fontSize: 11, color: "#475569", marginTop: 2 }}>+971 50 *** ****</div>
                </div>

                {/* Booked bubble */}
                <div style={{ position: "absolute", bottom: 8, left: -24, background: "#0d1729", border: "1px solid rgba(79,70,229,0.3)", borderRadius: 12, padding: "10px 16px", minWidth: 160, boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}>
                  <div style={{ fontSize: 10, color: "#818cf8", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>Just booked âœ…</div>
                  <div style={{ fontSize: 13, color: "#f1f5f9", fontWeight: 600 }}>Thu 3pm Â· Dr. Sarah</div>
                  <div style={{ fontSize: 11, color: "#475569", marginTop: 2 }}>Confirmed via WhatsApp</div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* STATS */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "20px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { stat: "28s", label: "average first response time" },
              { stat: "100%", label: "of calls answered, 24/7" },
              { stat: "3Ã—", label: "more bookings vs missed calls" },
              { stat: "12+", label: "languages supported" },
            ].map(({ stat, label }) => (
              <div key={stat} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#f1f5f9" }}>{stat}</div>
                <div style={{ fontSize: 11, color: "#475569", marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* HOW IT WORKS */}
        <section className="vai-section" id="how-voice-works" style={{ padding: "88px 24px", background: "#0a1020" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#22c55e", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>How It Works</div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Call in. Booked in <span style={{ color: "#22c55e" }}>90 seconds.</span>
              </h2>
            </div>
            <div className="vai-steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
              {HOW_IT_WORKS.map(({ num, title, desc }, i) => (
                <div key={num} style={{ background: "#0d1729", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 2, padding: "28px 20px", position: "relative" }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: "#22c55e", letterSpacing: "0.08em", marginBottom: 12 }}>{num}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#f1f5f9", marginBottom: 8 }}>{title}</div>
                  <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.65 }}>{desc}</div>
                  {i < HOW_IT_WORKS.length - 1 && (
                    <div style={{ position: "absolute", right: -14, top: "50%", transform: "translateY(-50%)", color: "#1e2d45", fontSize: 20 }}>â€º</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="vai-section" style={{ padding: "88px 24px", maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#22c55e", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Capabilities</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              More than just a phone bot.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 1 }}>
            {[
              { icon: "ðŸ—“ï¸", title: "Live calendar booking", desc: "Checks your real-time availability and books the slot during the call. No double-bookings, no manual follow-up." },
              { icon: "ðŸŒ", title: "Multilingual", desc: "Speaks Arabic, English, French, Spanish, Hindi, and more. Detects the caller's language and switches automatically." },
              { icon: "ðŸ§ ", title: "Trained on your business", desc: "Upload your services, pricing, FAQs, and scripts. The AI answers as if it's been on your team for years." },
              { icon: "ðŸ“²", title: "WhatsApp confirmation", desc: "After booking, sends a confirmation to the caller's WhatsApp with appointment details and any prep instructions." },
              { icon: "ðŸ“‹", title: "Call transcripts & summaries", desc: "Every call is transcribed and summarized in your CRM. Your team knows exactly what was discussed before the patient arrives." },
              { icon: "ðŸ”€", title: "Smart escalation", desc: "If the AI can't handle a question, it flags it and routes to a human via WhatsApp â€” no caller left hanging." },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ background: "#0d1729", border: "1px solid rgba(255,255,255,0.06)", padding: 28 }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{icon}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#f1f5f9", marginBottom: 8 }}>{title}</div>
                <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7 }}>{desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* USE CASES */}
        <section className="vai-section" style={{ background: "#0a1020", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#22c55e", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Industries</div>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Built for appointment-driven businesses.
              </h2>
            </div>
            <div className="vai-use-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
              {USECASES.map(({ icon, title, desc }) => (
                <div key={title} style={{ background: "#0d1729", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: 28, display: "flex", gap: 20 }}>
                  <div style={{ fontSize: 32, flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#f1f5f9", marginBottom: 8 }}>{title}</div>
                    <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.65 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="vai-section" style={{ padding: "88px 24px", borderTop: "1px solid rgba(34,197,94,0.15)" }}>
          <div style={{ maxWidth: 580, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#22c55e", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>Get Started</div>
            <h2 style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 900, color: "#f1f5f9", marginBottom: 16, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Stop missing calls.<br />Start booking more.
            </h2>
            <p style={{ fontSize: 16, color: "#475569", marginBottom: 36, lineHeight: 1.65 }}>
              Book a 20-minute demo and see Voice AI answer a live call in your business's voice â€” with your services, your calendar, your brand.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #16a34a, #22c55e)", color: "white", fontWeight: 700, fontSize: 16, padding: "16px 36px", borderRadius: 10, textDecoration: "none", boxShadow: "0 8px 28px rgba(34,197,94,.3)" }}>
                Book a Demo â†’
              </a>
              <a href="/get-started" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.06)", color: "#94a3b8", fontWeight: 600, fontSize: 15, padding: "16px 28px", borderRadius: 10, textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)" }}>
                Start Free Trial
              </a>
            </div>
            <p style={{ fontSize: 12, color: "#1e2d45", marginTop: 20 }}>
              30-day free trial Â· No credit card required Â· Setup in minutes
            </p>
          </div>
        </section>

        {/* FOOTER STRIP */}
        <div style={{ background: "#060b18", padding: "24px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ fontSize: 13, color: "#1e2d45" }}>
            Voice AI by{" "}
            <Link href="/" style={{ color: "#475569", textDecoration: "none", fontWeight: 600 }}>LeadOS</Link>
            {" "} Â· {" "}
            <Link href="/privacy" style={{ color: "#1e2d45", textDecoration: "none" }}>Privacy</Link>
            {" "} Â· {" "}
            <Link href="/terms" style={{ color: "#1e2d45", textDecoration: "none" }}>Terms</Link>
          </div>
        </div>

      </main>
    </>
  );
}

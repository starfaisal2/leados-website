import Link from "next/link";

export const metadata = {
  title: "About LeadOS — Founded by M.Faisal, Australia",
  description: "LeadOS was founded in Australia by M.Faisal, a business owner who built the AI CRM he always needed but could never find.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero — matches site's light hero style ── */}
      <section style={{
        paddingTop: "calc(68px + 80px)",
        paddingBottom: 80,
        paddingLeft: 24,
        paddingRight: 24,
        background: "white",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Subtle radial glow — same as .hero::before */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,99,235,.06) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(79,70,229,.04) 0%, transparent 60%)",
        }} />

        <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", textAlign: "center" }}>
          {/* Badge */}
          <span className="badge badge-blue" style={{ marginBottom: 24 }}>
            Founder Story
          </span>

          {/* Headline */}
          <h1 style={{
            fontFamily: "var(--font-serif, Lora, Georgia, serif)",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 700,
            color: "var(--ink, #0f1117)",
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            marginBottom: 24,
            marginTop: 16,
          }}>
            I was losing leads in my own business.{" "}
            <span style={{
              background: "linear-gradient(135deg, var(--blue, #2563eb) 0%, var(--indigo, #4f46e5) 60%, var(--purple, #7c3aed) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              So I built the fix.
            </span>
          </h1>

          <p className="body-lg" style={{ maxWidth: 600, margin: "0 auto 40px", color: "var(--ink-3, #5a5c6e)" }}>
            LeadOS was founded in Australia by M.Faisal — a business owner turned builder, who got tired of watching potential customers slip through the cracks.
          </p>

          {/* Founder chip */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            background: "var(--blue-50, #eff6ff)",
            border: "1px solid var(--blue-100, #dbeafe)",
            borderRadius: 40, padding: "10px 20px 10px 10px",
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%",
              background: "linear-gradient(135deg, #2563eb, #4f46e5)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "white", fontWeight: 800, fontSize: 16, flexShrink: 0,
            }}>F</div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "var(--ink, #0f1117)", lineHeight: 1.2 }}>M.Faisal</div>
              <div style={{ fontSize: 12, color: "var(--ink-3, #5a5c6e)" }}>Founder & CEO · LeadOS · 🇦🇺 Australia</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Origin Story ── */}
      <section className="section" style={{ background: "var(--bg, #f8f8f6)", paddingLeft: 24, paddingRight: 24 }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>

          <div className="section-header" style={{ marginBottom: 40 }}>
            <span className="badge badge-purple" style={{ marginBottom: 16 }}>Where it started</span>
            <h2 style={{
              fontFamily: "var(--font-serif, Lora, Georgia, serif)",
              fontSize: "clamp(26px, 3.5vw, 40px)",
              fontWeight: 700,
              color: "var(--ink, #0f1117)",
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
            }}>
              The gap wasn&apos;t in the market.<br />It was in my own business.
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              "I was running a service business and the same problem kept appearing: a customer would reach out on WhatsApp, we'd be busy, and by the time someone followed up — they'd already booked somewhere else. The lead was gone. The appointment was gone. The revenue was gone.",
              "I tried every tool I could find. CRMs that needed a full-time admin to operate. Chatbots that couldn't hold a real conversation. Booking systems that lived in isolation from everything else. Nothing was built for the way a real service business runs — fast-moving, WhatsApp-first, team-driven.",
              "So I stopped looking for the right tool and started building it. I wanted one system that could reply the moment a lead arrives, qualify them, book the appointment, follow up if they go quiet, hand off to the right team member, and show me exactly what's driving revenue — all without me having to touch it.",
              "That became LeadOS. Built in Australia, by a business owner, for business owners.",
            ].map((para, i) => (
              <p key={i} className="body-lg" style={{ margin: 0 }}>{para}</p>
            ))}
          </div>

          {/* Pull quote */}
          <blockquote style={{
            margin: "48px 0 0",
            padding: "28px 32px",
            background: "white",
            border: "1px solid rgba(37,99,235,.12)",
            borderLeft: "4px solid var(--blue, #2563eb)",
            borderRadius: "0 16px 16px 0",
            boxShadow: "0 4px 24px rgba(37,99,235,.06)",
          }}>
            <p style={{
              fontFamily: "var(--font-serif, Lora, Georgia, serif)",
              fontSize: "clamp(17px, 2.5vw, 22px)",
              color: "var(--ink, #0f1117)",
              lineHeight: 1.65,
              fontStyle: "italic",
              margin: 0,
            }}>
              &ldquo;I didn&apos;t build LeadOS to compete with software companies. I built it because I was the customer — and nothing out there was good enough.&rdquo;
            </p>
            <cite style={{ display: "block", marginTop: 14, fontSize: 13, color: "var(--ink-3, #5a5c6e)", fontStyle: "normal", fontWeight: 700 }}>
              — M.Faisal, Founder & CEO
            </cite>
          </blockquote>
        </div>
      </section>

      {/* ── What we built ── */}
      <section className="section" style={{ background: "white", paddingLeft: 24, paddingRight: 24 }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <div className="section-header center" style={{ marginBottom: 56 }}>
            <span className="badge badge-blue" style={{ marginBottom: 16 }}>What we built</span>
            <h2 style={{
              fontFamily: "var(--font-serif, Lora, Georgia, serif)",
              fontSize: "clamp(26px, 3.5vw, 42px)",
              fontWeight: 700,
              color: "var(--ink, #0f1117)",
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
              maxWidth: 600,
              margin: "0 auto",
            }}>
              One operating system for every conversation that becomes revenue.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 20 }}>
            {[
              { icon: "⚡", color: "#2563eb", title: "Instant AI response", body: "Every WhatsApp, Instagram, and web enquiry gets a reply within seconds — even at 2am. No lead waits, no lead is lost." },
              { icon: "📅", color: "#7c3aed", title: "Automatic booking", body: "The AI qualifies the lead and books the appointment directly into the calendar. No back-and-forth, no missed slots." },
              { icon: "🔁", color: "#059669", title: "Smart follow-up", body: "If someone goes quiet, LeadOS follows up on schedule. If they cancel, it recovers the booking. All on autopilot." },
              { icon: "🧠", color: "#4f46e5", title: "Company Brain", body: "Upload your price list, FAQs, and services. The AI learns your business and answers questions the way your best staff member would." },
              { icon: "📈", color: "#2563eb", title: "Auto SEO", body: "AI-written articles published to your website every week, targeting the exact keywords your customers search for." },
              { icon: "📊", color: "#7c3aed", title: "Revenue clarity", body: "One dashboard that shows which conversations turned into bookings, which campaigns drove revenue, and where to grow next." },
            ].map(({ icon, color, title, body }) => (
              <div key={title} className="card" style={{ padding: "28px 26px" }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, marginBottom: 16,
                  background: `${color}12`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22,
                }}>{icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--ink, #0f1117)", marginBottom: 8 }}>{title}</h3>
                <p className="body-sm" style={{ margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Australia origin ── */}
      <section className="section-sm" style={{ background: "var(--bg, #f8f8f6)", paddingLeft: 24, paddingRight: 24 }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{
            display: "flex", gap: 28, alignItems: "flex-start", flexWrap: "wrap",
            background: "white",
            border: "1px solid rgba(37,99,235,.1)",
            borderRadius: 20, padding: "32px 36px",
            boxShadow: "0 4px 24px rgba(37,99,235,.06)",
          }}>
            <div style={{ fontSize: 40, flexShrink: 0, lineHeight: 1 }}>🇦🇺</div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{ fontSize: 19, fontWeight: 700, color: "var(--ink, #0f1117)", marginBottom: 10 }}>
                Proudly built in Australia
              </h3>
              <p className="body-md" style={{ margin: "0 0 12px" }}>
                LeadOS was designed, built, and tested against the real operational challenges of running a service business — not engineered in a lab by people who have never managed a front desk, handled a no-show, or chased an unpaid booking.
              </p>
              <p className="body-md" style={{ margin: 0 }}>
                We now serve businesses across Australia and the UAE, with more markets opening as LeadOS grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA — matches site's dark CTA sections ── */}
      <section className="section" style={{
        background: "linear-gradient(135deg, var(--ink, #0f1117) 0%, #0d1340 100%)",
        paddingLeft: 24, paddingRight: 24,
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <span className="badge" style={{ background: "rgba(255,255,255,.07)", color: "rgba(255,255,255,.6)", border: "1px solid rgba(255,255,255,.1)", marginBottom: 24 }}>
            Ready to start?
          </span>
          <h2 style={{
            fontFamily: "var(--font-serif, Lora, Georgia, serif)",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.2,
            letterSpacing: "-0.5px",
            marginBottom: 16,
          }}>
            Run your business the way it should run.
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,.45)", marginBottom: 40, lineHeight: 1.75 }}>
            Book a demo with the team and see what LeadOS does for your specific business in 20 minutes.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/971568350424?text=Hi%20LeadOS%2C%20I%20want%20to%20book%20a%20demo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Book a Demo →
            </a>
            <Link href="/get-started" className="btn btn-secondary btn-lg" style={{ background: "rgba(255,255,255,.07)", color: "rgba(255,255,255,.75)", border: "1px solid rgba(255,255,255,.12)" }}>
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

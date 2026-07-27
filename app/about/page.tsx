import Link from "next/link";

export const metadata = {
  title: "About LeadOS — Built by M.Faisal, Australia",
  description: "LeadOS was founded in Australia by M.Faisal, a business owner who built the AI CRM he always needed but could never find.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        background: "linear-gradient(160deg, #06091a 0%, #0d1340 50%, #06091a 100%)",
        padding: "140px 24px 100px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: 900, height: 500, background: "radial-gradient(ellipse, rgba(37,99,235,.18) 0%, transparent 68%)" }} />
        </div>

        <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", textAlign: "center" }}>
          <span style={{
            display: "inline-block",
            background: "rgba(37,99,235,.15)",
            border: "1px solid rgba(37,99,235,.3)",
            color: "#93c5fd",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            borderRadius: 20,
            padding: "5px 16px",
            marginBottom: 32,
          }}>
            Founder Story
          </span>

          <h1 style={{
            fontFamily: "Lora, Georgia, serif",
            fontSize: "clamp(38px, 5.5vw, 72px)",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-1px",
            marginBottom: 28,
          }}>
            I was losing leads in my own business.<br />
            <span style={{ color: "#93c5fd" }}>So I built the system I wished existed.</span>
          </h1>

          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "rgba(255,255,255,.55)",
            lineHeight: 1.75,
            maxWidth: 620,
            margin: "0 auto 44px",
          }}>
            LeadOS was founded in Australia by M.Faisal — a business owner turned builder, who got tired of watching potential customers slip through the cracks.
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
            <div style={{
              width: 48, height: 48, borderRadius: "50%",
              background: "linear-gradient(135deg, #2563eb, #4f46e5)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "white", fontWeight: 800, fontSize: 18,
              flexShrink: 0,
            }}>F</div>
            <div style={{ textAlign: "left" }}>
              <div style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 15 }}>M.Faisal</div>
              <div style={{ color: "rgba(255,255,255,.4)", fontSize: 13 }}>Founder & CEO · LeadOS · Australia</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Origin Story ── */}
      <section style={{ background: "#ffffff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>

          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2563eb", marginBottom: 20 }}>
            Where it started
          </p>

          <h2 style={{
            fontFamily: "Lora, Georgia, serif",
            fontSize: "clamp(26px, 3.5vw, 42px)",
            fontWeight: 700,
            color: "#0f1117",
            lineHeight: 1.2,
            letterSpacing: "-0.5px",
            marginBottom: 32,
          }}>
            The gap I found wasn't in the market. It was in my own business.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {[
              "I was running a service business and the same problem kept appearing: a customer would reach out on WhatsApp, we'd be busy, and by the time someone followed up — they'd already booked somewhere else. The lead was gone. The appointment was gone. The revenue was gone.",
              "I tried every tool I could find. CRMs that needed a full-time admin to operate. Chatbots that couldn't hold a real conversation. Booking systems that lived in isolation from everything else. Nothing was built for the way a real service business actually runs — fast-moving, WhatsApp-first, team-driven.",
              "So I stopped looking for the right tool and started building it. I wanted one system that could reply the moment a lead arrives, qualify them, book the appointment, follow up if they go quiet, hand off to the right team member, and show me exactly what's driving revenue — all without me having to touch it.",
              "That system became LeadOS. Built in Australia, by a business owner, for business owners.",
            ].map((para, i) => (
              <p key={i} style={{ fontSize: 17, color: "#334155", lineHeight: 1.85, margin: 0 }}>
                {para}
              </p>
            ))}
          </div>

          {/* Pull quote */}
          <blockquote style={{
            margin: "52px 0 0",
            padding: "28px 32px",
            background: "linear-gradient(135deg, #eff6ff, #f5f3ff)",
            borderLeft: "4px solid #2563eb",
            borderRadius: "0 16px 16px 0",
          }}>
            <p style={{
              fontFamily: "Lora, Georgia, serif",
              fontSize: "clamp(18px, 2.5vw, 24px)",
              color: "#0f1117",
              lineHeight: 1.6,
              fontStyle: "italic",
              margin: 0,
            }}>
              "I didn't build LeadOS to compete with software companies. I built it because I was the customer, and nothing out there was good enough."
            </p>
            <cite style={{ display: "block", marginTop: 16, fontSize: 13, color: "#6b7280", fontStyle: "normal", fontWeight: 600 }}>
              — M.Faisal, Founder
            </cite>
          </blockquote>
        </div>
      </section>

      {/* ── What we built ── */}
      <section style={{ background: "#f8f8f6", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2563eb", marginBottom: 14 }}>
              What we built
            </p>
            <h2 style={{
              fontFamily: "Lora, Georgia, serif",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 700,
              color: "#0f1117",
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
              maxWidth: 640,
              margin: "0 auto",
            }}>
              One operating system for every conversation that becomes revenue.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              { icon: "⚡", title: "Instant AI response", body: "Every WhatsApp, Instagram, and web enquiry gets a reply within seconds — even at 2am. No lead waits, no lead is lost." },
              { icon: "📅", title: "Automatic booking", body: "The AI qualifies the lead and books the appointment directly into the calendar. No back-and-forth, no missed slots." },
              { icon: "🔁", title: "Smart follow-up", body: "If someone goes quiet, LeadOS follows up on schedule. If they cancel, it recovers the booking. All on autopilot." },
              { icon: "🧠", title: "Company Brain", body: "Upload your price list, FAQs, and services. The AI learns your business and answers questions the way your best staff member would." },
              { icon: "📈", title: "Auto SEO", body: "AI-written articles published to your website every week, targeting the exact keywords your customers search for." },
              { icon: "📊", title: "Revenue clarity", body: "One dashboard that shows which conversations turned into bookings, which campaigns drove revenue, and where to grow next." },
            ].map(({ icon, title, body }) => (
              <div key={title} style={{
                background: "#ffffff",
                border: "1px solid rgba(37,99,235,.1)",
                borderRadius: 20,
                padding: "28px 26px",
                boxShadow: "0 4px 24px rgba(37,99,235,.06)",
              }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f1117", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, color: "#5a5c6e", lineHeight: 1.7, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Australia origin ── */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", gap: 40, alignItems: "flex-start", flexWrap: "wrap" }}>
          <div style={{
            flexShrink: 0,
            width: 64, height: 64, borderRadius: 16,
            background: "linear-gradient(135deg, #06091a, #1e3a8a)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 30,
          }}>🇦🇺</div>
          <div style={{ flex: 1, minWidth: 240 }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0f1117", marginBottom: 12 }}>
              Built in Australia
            </h3>
            <p style={{ fontSize: 16, color: "#334155", lineHeight: 1.8, margin: 0 }}>
              LeadOS is proudly Australian-founded. The platform was designed, built, and tested against the real operational challenges of running a service business — not engineered in a lab by people who have never managed a front desk, handled a no-show, or chased an unpaid booking.
            </p>
            <p style={{ fontSize: 16, color: "#334155", lineHeight: 1.8, marginTop: 16, marginBottom: 0 }}>
              We now serve businesses across Australia and the UAE, with more markets opening as LeadOS grows.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: "linear-gradient(135deg, #06091a, #0d1340)",
        padding: "96px 24px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "Lora, Georgia, serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            marginBottom: 18,
          }}>
            Ready to run your business the way it should run?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,.5)", marginBottom: 40, lineHeight: 1.7 }}>
            Book a demo with the team and see what LeadOS does for your specific business in 20 minutes.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/971568350424?text=Hi%20LeadOS%2C%20I%20want%20to%20book%20a%20demo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #2563eb, #4f46e5)",
                color: "white",
                fontWeight: 700,
                fontSize: 15,
                padding: "15px 34px",
                borderRadius: 12,
                textDecoration: "none",
                boxShadow: "0 4px 18px rgba(37,99,235,.4)",
              }}
            >
              Book a Demo →
            </a>
            <Link
              href="/get-started"
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,.07)",
                color: "rgba(255,255,255,.8)",
                fontWeight: 600,
                fontSize: 15,
                padding: "15px 34px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,.12)",
                textDecoration: "none",
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ── Intersection-observer fade-in hook ── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function FadeIn({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const { ref, visible } = useFadeIn();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ── Animated counter ── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const { ref, visible } = useFadeIn();
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(target / 40);
    const id = setInterval(() => {
      start = Math.min(start + step, target);
      setVal(start);
      if (start >= target) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, [visible, target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export default function AboutPage() {
  return (
    <>
      {/* ══ HERO — split layout ══ */}
      <section style={{
        paddingTop: "calc(68px + 80px)", paddingBottom: 0,
        background: "white", position: "relative", overflow: "hidden",
      }}>
        {/* Background grid + glow — matches homepage .hero */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(37,99,235,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,99,235,.07) 0%, transparent 60%)",
        }} />

        <div className="container" style={{ position: "relative", paddingBottom: 80 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 64, alignItems: "center" }}>

            {/* Left — story */}
            <div>
              <FadeIn>
                <span className="eyebrow" style={{ marginBottom: 20, display: "inline-block" }}>Founder Story</span>
                <h1 className="display-lg" style={{ marginBottom: 24 }}>
                  I was losing leads<br />in my own business.<br />
                  <span className="gradient-text">So I built the fix.</span>
                </h1>
                <p className="body-lg" style={{ maxWidth: 520, marginBottom: 36 }}>
                  LeadOS was founded in Australia by <strong>M.Faisal</strong> — a business owner who got tired of watching potential customers slip through the cracks and decided to build the system he always needed.
                </p>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <a
                    href="https://wa.me/971568350424?text=Hi%20LeadOS%2C%20I%20want%20to%20book%20a%20demo"
                    target="_blank" rel="noopener noreferrer"
                    className="btn btn-primary btn-lg"
                  >
                    Book a Demo →
                  </a>
                  <Link href="/get-started" className="btn btn-secondary btn-lg">Get Started</Link>
                </div>
              </FadeIn>
            </div>

            {/* Right — founder card */}
            <FadeIn delay={150}>
              <div style={{
                background: "linear-gradient(145deg, #06091a 0%, #0d1340 50%, #0a0d2e 100%)",
                borderRadius: 24,
                padding: 36,
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 32px 80px rgba(37,99,235,.25), 0 0 0 1px rgba(79,70,229,.2)",
              }}>
                {/* Glow orb */}
                <div style={{ position: "absolute", top: -60, right: -60, width: 220, height: 220,
                  background: "radial-gradient(circle, rgba(37,99,235,.35) 0%, transparent 70%)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: -40, left: -40, width: 160, height: 160,
                  background: "radial-gradient(circle, rgba(124,58,237,.25) 0%, transparent 70%)", pointerEvents: "none" }} />

                {/* Avatar */}
                <div style={{ position: "relative", marginBottom: 24 }}>
                  <img
                    src="/founder.jpg"
                    alt="M.Faisal — Founder & CEO, LeadOS"
                    style={{
                      width: 72, height: 72, borderRadius: "50%",
                      objectFit: "cover", objectPosition: "center top",
                      boxShadow: "0 0 0 3px rgba(255,255,255,.12), 0 8px 32px rgba(37,99,235,.4)",
                      display: "block",
                    }}
                  />
                  <div style={{
                    position: "absolute", top: 4, left: 54,
                    width: 20, height: 20, borderRadius: "50%",
                    background: "#22c55e",
                    border: "2px solid #06091a",
                    boxShadow: "0 0 8px #22c55e",
                  }} />
                </div>

                <div style={{ marginBottom: 28 }}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "white", marginBottom: 4 }}>M.Faisal</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,.45)" }}>Founder & CEO · LeadOS</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 10, flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ fontSize: 16 }}>🇦🇺</span>
                      <span style={{ fontSize: 12, color: "rgba(255,255,255,.35)" }}>Built in Australia</span>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/faisalbalushi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        background: "rgba(10,102,194,.25)",
                        border: "1px solid rgba(10,102,194,.4)",
                        borderRadius: 20, padding: "4px 12px",
                        textDecoration: "none",
                        transition: "background .2s",
                      }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="#60a5fa">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span style={{ fontSize: 12, color: "#60a5fa", fontWeight: 600 }}>LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Mini stat row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
                  {[
                    { v: "48h", l: "Go live" },
                    { v: "24/7", l: "AI uptime" },
                    { v: "8+", l: "Channels" },
                    { v: "4+", l: "Languages" },
                  ].map(({ v, l }) => (
                    <div key={l} style={{
                      background: "rgba(255,255,255,.05)",
                      border: "1px solid rgba(255,255,255,.07)",
                      borderRadius: 12, padding: "14px 16px",
                    }}>
                      <div style={{ fontSize: 20, fontWeight: 800, color: "white", lineHeight: 1 }}>{v}</div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,.35)", marginTop: 4 }}>{l}</div>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div style={{
                  background: "rgba(37,99,235,.12)",
                  border: "1px solid rgba(37,99,235,.2)",
                  borderRadius: 12, padding: "16px 18px",
                }}>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,.65)", lineHeight: 1.65, margin: 0, fontStyle: "italic" }}>
                    &ldquo;I didn&apos;t build this to compete with software companies. I built it because I was the customer — and nothing was good enough.&rdquo;
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Bottom fade into next section */}
        <div style={{ height: 1, background: "var(--border, #e5e7eb)" }} />
      </section>

      {/* ══ STATS STRIP ══ */}
      <section style={{ background: "var(--surface-2, #f4f4f2)", padding: "52px 24px", borderBottom: "1px solid var(--border, #e5e7eb)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 0 }}>
            {[
              { target: 48, suffix: "h", label: "Average go-live time" },
              { target: 28, suffix: "s", label: "AI first response" },
              { target: 8, suffix: "+", label: "Channels unified" },
              { target: 4, suffix: "+", label: "Languages spoken" },
              { target: 0, suffix: "", label: "Code needed to run it" },
            ].map(({ target, suffix, label }, i) => (
              <div key={label} style={{
                textAlign: "center", padding: "20px 24px",
                borderRight: i < 4 ? "1px solid var(--border, #e5e7eb)" : "none",
              }}>
                <div style={{ fontSize: 40, fontWeight: 900, color: "var(--ink, #0f1117)", lineHeight: 1, letterSpacing: "-1px" }}>
                  <Counter target={target} suffix={suffix} />
                </div>
                <div style={{ fontSize: 13, color: "var(--ink-3, #5a5c6e)", marginTop: 6 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ORIGIN STORY — dark editorial ══ */}
      <section style={{
        background: "linear-gradient(160deg, #06091a 0%, #0d1340 60%, #06091a 100%)",
        padding: "100px 24px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(37,99,235,.12) 0%, transparent 60%)",
        }} />
        <div className="container" style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

            {/* Left — eyebrow + headline */}
            <FadeIn>
              <span className="eyebrow" style={{
                color: "rgba(165,180,252,.7)",
                borderColor: "rgba(165,180,252,.15)",
                background: "rgba(165,180,252,.08)",
                marginBottom: 24, display: "inline-block",
              }}>Where it started</span>
              <h2 style={{
                fontFamily: "var(--font-serif, Lora, Georgia, serif)",
                fontSize: "clamp(30px, 3.5vw, 48px)",
                fontWeight: 700, color: "white", lineHeight: 1.15,
                letterSpacing: "-1px", marginBottom: 0,
              }}>
                The gap wasn&apos;t in<br />the market. It was<br />
                <span style={{ color: "#93c5fd" }}>in my own business.</span>
              </h2>
            </FadeIn>

            {/* Right — story paragraphs */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                { delay: 0, text: "I was running a service business and the same problem kept appearing: a customer would reach out on WhatsApp, we'd be busy, and by the time someone followed up — they'd already booked somewhere else. The lead was gone. The appointment was gone. The revenue was gone." },
                { delay: 100, text: "I tried every tool I could find. CRMs that needed a full-time admin to operate. Chatbots that couldn't hold a real conversation. Booking systems that lived in isolation from everything else. Nothing was built for the way a real service business runs — fast, WhatsApp-first, team-driven." },
                { delay: 200, text: "So I stopped looking for the right tool and started building it. I wanted one system that could reply the moment a lead arrives, qualify them, book the appointment, follow up if they went quiet, hand off to the right team member, and show me exactly what's driving revenue — all without me having to touch it." },
                { delay: 300, text: "That system became LeadOS. Built in Australia. By a business owner. For business owners." },
              ].map(({ delay, text }, i) => (
                <FadeIn key={i} delay={delay}>
                  <p style={{ fontSize: 16, color: "rgba(255,255,255,.55)", lineHeight: 1.85, margin: 0 }}>{text}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ TIMELINE — founding journey ══ */}
      <section style={{ background: "white", padding: "100px 24px" }}>
        <div className="container">
          <FadeIn>
            <div className="section-header center" style={{ marginBottom: 64 }}>
              <span className="eyebrow">The journey</span>
              <h2 className="display-md">From broken process<br /><span className="gradient-text">to breakthrough product.</span></h2>
            </div>
          </FadeIn>

          <div style={{ maxWidth: 720, margin: "0 auto", position: "relative" }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 2,
              background: "linear-gradient(180deg, #2563eb, #4f46e5, #7c3aed)", borderRadius: 2 }} />

            {[
              { icon: "💼", color: "#2563eb", year: "The problem", title: "Running a business with broken tools", body: "Managing leads manually across WhatsApp, spreadsheets, and phone calls. Losing customers every week to slow follow-ups. The pain was real." },
              { icon: "🔍", color: "#4f46e5", year: "The search", title: "Trying every CRM on the market", body: "Tested GoHighLevel, HubSpot, Salesforce, countless chatbots. None of them worked the way a real service business actually operates. Too complex, too manual, or too generic." },
              { icon: "💡", color: "#7c3aed", year: "The idea", title: "If it doesn't exist, build it", body: "Stopped searching. Started building. The vision: one system that replies, qualifies, books, follows up, and reports — entirely on autopilot." },
              { icon: "🚀", color: "#059669", year: "The launch", title: "LeadOS goes live in Australia", body: "First tenants onboarded. AI handling hundreds of conversations per day. Bookings confirmed automatically. Revenue tracked in real time. The system worked exactly as imagined." },
              { icon: "🌍", color: "#f97316", year: "Today", title: "Expanding across AU & UAE", body: "Serving clinics, agencies, and service businesses across Australia and the UAE. The same tool that fixed one business is now fixing thousands." },
            ].map(({ icon, color, year, title, body }, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div style={{ display: "flex", gap: 32, marginBottom: 48, paddingLeft: 56, position: "relative" }}>
                  {/* Dot */}
                  <div style={{
                    position: "absolute", left: 10, top: 4,
                    width: 22, height: 22, borderRadius: "50%",
                    background: color,
                    border: "3px solid white",
                    boxShadow: `0 0 0 2px ${color}40, 0 4px 12px ${color}40`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11,
                  }} />
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>{year}</div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--ink, #0f1117)", marginBottom: 8 }}>{title}</h3>
                    <p className="body-md" style={{ margin: 0 }}>{body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHAT WE BUILT — product grid ══ */}
      <section style={{ background: "var(--surface-2, #f4f4f2)", padding: "100px 24px" }}>
        <div className="container">
          <FadeIn>
            <div className="section-header center" style={{ marginBottom: 56 }}>
              <span className="eyebrow">The product</span>
              <h2 className="display-md">One OS for every conversation<br /><span className="gradient-text">that becomes revenue.</span></h2>
              <p className="body-lg" style={{ maxWidth: 540, margin: "16px auto 0" }}>
                Built from scratch around how service businesses actually work — not adapted from enterprise software nobody uses.
              </p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {[
              { icon: "⚡", color: "#2563eb", bg: "#eff6ff", title: "Instant AI response", body: "Every WhatsApp, Instagram, and web enquiry gets a reply within 28 seconds — even at 2am. No lead waits, no lead is lost." },
              { icon: "📅", color: "#7c3aed", bg: "#f5f3ff", title: "Automatic booking", body: "The AI qualifies the lead and locks in the appointment directly into the calendar. No back-and-forth. No missed slots." },
              { icon: "🔁", color: "#059669", bg: "#f0fdf4", title: "Smart follow-up", body: "If someone goes quiet, LeadOS follows up on schedule. If they cancel, it recovers the booking. All on autopilot." },
              { icon: "🧠", color: "#4f46e5", bg: "#eef2ff", title: "Company Brain", body: "Upload your services, FAQs, and price list. The AI learns your business and answers questions the way your best staff member would." },
              { icon: "📈", color: "#0891b2", bg: "#ecfeff", title: "Auto SEO", body: "AI-written articles published to your website every week, targeting the exact keywords your customers search for." },
              { icon: "📊", color: "#d97706", bg: "#fffbeb", title: "Revenue clarity", body: "One dashboard that shows which conversations turned into bookings and which campaigns drove real money." },
            ].map(({ icon, color, bg, title, body }, i) => (
              <FadeIn key={title} delay={i * 60}>
                <div className="card" style={{ padding: "28px 26px", height: "100%" }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 14, marginBottom: 18,
                    background: bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
                    border: `1px solid ${color}20`,
                  }}>{icon}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--ink, #0f1117)", marginBottom: 10 }}>{title}</h3>
                  <p className="body-sm" style={{ margin: 0 }}>{body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ AUSTRALIA ORIGIN — premium card ══ */}
      <section style={{ background: "white", padding: "80px 24px" }}>
        <div className="container">
          <FadeIn>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0,
              background: "linear-gradient(135deg, #06091a, #0d1340)",
              borderRadius: 28, overflow: "hidden",
              boxShadow: "0 32px 80px rgba(37,99,235,.2)",
            }}>
              {/* Left text */}
              <div style={{ padding: "60px 52px" }}>
                <div style={{ fontSize: 48, marginBottom: 20 }}>🇦🇺</div>
                <h2 style={{
                  fontFamily: "var(--font-serif, Lora, Georgia, serif)",
                  fontSize: "clamp(26px, 2.5vw, 36px)",
                  fontWeight: 700, color: "white", lineHeight: 1.2,
                  letterSpacing: "-0.5px", marginBottom: 20,
                }}>
                  Proudly built<br />in Australia.
                </h2>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,.5)", lineHeight: 1.8, marginBottom: 20 }}>
                  LeadOS was designed, built, and battle-tested against real operational problems — not engineered in a lab by people who have never managed a front desk or chased an unpaid booking.
                </p>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,.5)", lineHeight: 1.8, margin: 0 }}>
                  Australian-founded. Serving AU & UAE. More markets coming.
                </p>
              </div>

              {/* Right — decorative stats */}
              <div style={{
                padding: "60px 52px",
                borderLeft: "1px solid rgba(255,255,255,.06)",
                display: "flex", flexDirection: "column", justifyContent: "center", gap: 20,
              }}>
                {[
                  { label: "Founded", value: "Australia" },
                  { label: "Markets", value: "AU · UAE" },
                  { label: "Go-live time", value: "48 hours" },
                  { label: "Support", value: "24/7 AI + Team" },
                ].map(({ label, value }) => (
                  <div key={label} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "16px 20px",
                    background: "rgba(255,255,255,.04)",
                    border: "1px solid rgba(255,255,255,.07)",
                    borderRadius: 12,
                  }}>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,.35)" }}>{label}</span>
                    <span style={{ fontSize: 14, fontWeight: 700, color: "white" }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{ background: "var(--surface-2, #f4f4f2)", padding: "100px 24px", textAlign: "center" }}>
        <div className="container">
          <FadeIn>
            <span className="eyebrow" style={{ marginBottom: 20, display: "inline-block" }}>Get started today</span>
            <h2 className="display-md" style={{ marginBottom: 20 }}>
              Run your business<br /><span className="gradient-text">the way it should run.</span>
            </h2>
            <p className="body-lg" style={{ maxWidth: 480, margin: "0 auto 40px" }}>
              Book a 20-minute demo. We&apos;ll show you exactly what LeadOS does for your specific business — live, no slides.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/971568350424?text=Hi%20LeadOS%2C%20I%20want%20to%20book%20a%20demo"
                target="_blank" rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Book a Demo →
              </a>
              <Link href="/get-started" className="btn btn-secondary btn-lg">Get Started Free</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Responsive overrides ── */}
      <style>{`
        @media (max-width: 900px) {
          .about-hero-grid { grid-template-columns: 1fr !important; }
          .about-story-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-au-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

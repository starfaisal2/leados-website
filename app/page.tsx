"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const BOOK_URL =
  "https://wa.me/971568350424?text=Hi%20LeadOS%2C%20I%20would%20like%20to%20book%20a%20demo";
const SALES_URL =
  "https://wa.me/971568350424?text=Hi%20LeadOS%2C%20I%20would%20like%20to%20discuss%20Enterprise";

/* ── Logo SVG ── */
function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <defs>
        <linearGradient id="pg_s" x1="45" y1="20" x2="105" y2="95" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00c8f0" />
          <stop offset="45%" stopColor="#2f6ef5" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="pg_l" x1="10" y1="15" x2="55" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0f1117" />
          <stop offset="100%" stopColor="#2d2f3a" />
        </linearGradient>
      </defs>
      <rect x="6" y="78" width="9" height="9" rx="2" fill="#00c8f0" opacity=".65" />
      <rect x="20" y="88" width="7" height="7" rx="1.5" fill="#00c8f0" opacity=".42" />
      <rect x="32" y="82" width="5" height="5" rx="1.5" fill="#00c8f0" opacity=".3" />
      <rect x="10" y="92" width="5" height="5" rx="1.5" fill="#00c8f0" opacity=".24" />
      <rect x="4" y="65" width="6" height="6" rx="1.5" fill="#00c8f0" opacity=".22" />
      <path d="M52 34 C52 27 57 20 68 20 C79 20 87 26 87 34 C87 41 81 44 73 46 C65 48 58 51 58 59 C58 67 64 73 75 73 C85 73 92 67 92 60 L82 60 C82 63 79 66 75 66 C71 66 68 63 68 59 C68 55 75 52 82 49 C90 46 98 41 98 33 C98 23 89 13 68 13 C47 13 42 24 42 34 Z" fill="url(#pg_s)" />
      <path d="M10 16 L10 68 L46 68 L46 58 L24 58 L24 16 Z" fill="url(#pg_l)" />
    </svg>
  );
}

/* ── Data ── */
const INDUSTRIES = [
  { icon: "💉", name: "Clinics & Aesthetics", desc: "Book consultations, follow up on treatments, collect reviews.", img: "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { icon: "🦷", name: "Dental Clinics", desc: "Reduce no-shows, automate reminders, fill your chair.", img: "https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { icon: "🏥", name: "Medical Centers", desc: "Multi-doctor scheduling, patient intake, AI receptionist.", img: "https://images.pexels.com/photos/7088529/pexels-photo-7088529.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { icon: "🏠", name: "Real Estate", desc: "Qualify buyers, schedule viewings, track agent performance.", img: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { icon: "🍽️", name: "Restaurants", desc: "Take reservations, recover cancellations, generate reviews.", img: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { icon: "⚖️", name: "Professional Services", desc: "Capture enquiries, book consultations, handle intake.", img: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { icon: "🎓", name: "Education", desc: "Student enquiries, enrolment automation, follow-up sequences.", img: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { icon: "🔧", name: "Home Services", desc: "Capture jobs, photo-quote requests, dispatch faster.", img: "https://images.pexels.com/photos/8961251/pexels-photo-8961251.jpeg?auto=compress&cs=tinysrgb&w=900" },
];

const DEMOS: Record<string, Array<{ f: string; t: string }>> = {
  "Aesthetic Clinic": [
    { f: "u", t: "Hi, I want a lip filler consultation" },
    { f: "a", t: "Hi! I'm Aria from Glow Aesthetics ✨ I'd love to help. We have Thursday 3pm or Friday 11am with Dr. Sarah — which works?" },
    { f: "u", t: "Thursday 3pm please" },
    { f: "a", t: "Confirmed for Thursday at 3pm ✅ Sending details to your WhatsApp now. Any questions about the treatment?" },
  ],
  "Real Estate": [
    { f: "u", t: "Is the Bayview Road listing still available?" },
    { f: "a", t: "Yes! Beautiful 3-bed, 2-bath — listed this week 🏡 Ready to book a viewing? I can arrange one as early as tomorrow." },
    { f: "u", t: "Tomorrow afternoon works" },
    { f: "a", t: "Viewing confirmed for tomorrow at 2:30pm ✅ Agent Marcus will meet you there. Full details sent to your number." },
  ],
  "Restaurant": [
    { f: "u", t: "Table for 4 this Saturday?" },
    { f: "a", t: "Welcome to Ember! 🍽️ We have 7pm or 8:30pm Saturday for 4. Any special occasion or dietary needs?" },
    { f: "u", t: "7pm — our anniversary" },
    { f: "a", t: "Confirmed: table for 4 at 7pm Saturday 🎂 Noted your anniversary — the team will make it special!" },
  ],
  "Legal Firm": [
    { f: "u", t: "I need advice on a commercial dispute" },
    { f: "a", t: "Our team handles commercial disputes regularly. I can book a 30-min consultation with a senior partner — this week?" },
    { f: "u", t: "Thursday morning" },
    { f: "a", t: "Thursday 10am confirmed ✅ You'll receive a brief beforehand so we can make the most of your time." },
  ],
};


const INTELLIGENCE_FEATURES = [
  {
    key: "omni",
    badge: "AI Omni Inbox",
    title: "Every channel in one learning inbox.",
    desc: "WhatsApp, Instagram, Messenger, website chat and calls come together in one workspace. LeadOS learns what customers ask, what agents do and which conversations turn into bookings.",
    points: ["Unified conversations", "AI reply suggestions", "Human handoff", "Lead memory"],
    flow: ["Message arrives", "AI understands intent", "Best reply generated", "Booking opportunity detected"],
    metric: "28s",
    metricLabel: "average AI response"
  },
  {
    key: "meta",
    badge: "Meta Brain",
    title: "Ad spend connected to real revenue.",
    desc: "LeadOS connects campaigns, conversations, bookings and revenue so you know which ads deserve more budget and which ones are wasting money.",
    points: ["Campaign ROI", "Cost per booking", "Revenue attribution", "Budget recommendations"],
    flow: ["Ad click", "Lead captured", "Booking tracked", "ROI recommendation"],
    metric: "8.4×",
    metricLabel: "campaign ROAS insight"
  },
  {
    key: "reviews",
    badge: "Auto Reviews",
    title: "Turn completed visits into stronger reputation.",
    desc: "After appointments, LeadOS can trigger review requests, detect satisfied customers and help teams build a stronger online reputation automatically.",
    points: ["Post-visit request", "Review reminders", "Sentiment detection", "Reputation growth"],
    flow: ["Visit completed", "Review request sent", "Positive review received", "Rating improves"],
    metric: "4.9",
    metricLabel: "reputation target"
  },
  {
    key: "seo",
    badge: "SEO Intelligence",
    title: "Growth insights beyond the inbox.",
    desc: "LeadOS can help connect website performance, keyword demand and lead quality so your team sees what content and search traffic create real enquiries.",
    points: ["Keyword opportunities", "Lead-source quality", "Content insights", "Growth recommendations"],
    flow: ["Traffic analyzed", "Lead quality scored", "Keyword gap found", "Action recommended"],
    metric: "+31%",
    metricLabel: "organic opportunity"
  },
  {
    key: "voice",
    badge: "Voice AI",
    title: "An AI receptionist for calls and voice notes.",
    desc: "LeadOS can answer calls, transcribe voice notes, understand language and intent, then book or escalate with full context for your team.",
    points: ["Call answering", "Voice-note transcription", "Arabic/English/Hindi/Urdu", "Transcript timeline"],
    flow: ["Call or voice note", "AI transcribes", "Intent detected", "Booking or handoff"],
    metric: "24/7",
    metricLabel: "AI coverage"
  },
  {
    key: "booking",
    badge: "Booking Intelligence",
    title: "AI that books like a trained receptionist.",
    desc: "LeadOS understands the service, checks the right doctor, therapist or resource, suggests available slots and confirms bookings safely.",
    points: ["Service detection", "Resource matching", "Slot suggestions", "Confirmation flow"],
    flow: ["Service requested", "Resource matched", "Slot offered", "Appointment booked"],
    metric: "3×",
    metricLabel: "booking lift potential"
  },
];

const FAQS = [
  { q: "Do I need technical knowledge to use LeadOS?", a: "Not at all. LeadOS is built for business owners, not developers. Our team handles every aspect of setup — after a guided onboarding and testing process, you go live in 48 hours." },
  { q: "Which channels does LeadOS connect to?", a: "WhatsApp Business, Instagram DMs, Facebook Messenger, and your website live chat — all unified in one inbox. Voice AI handles inbound and outbound calls." },
  { q: "How does the AI learn my business?", a: "During onboarding, we train your AI on your services, pricing, tone, and FAQs. It improves through conversation history, feedback, and safe escalation rules — getting smarter every week." },
  { q: "Does LeadOS support Arabic and other languages?", a: "Yes. LeadOS auto-detects language and responds in Arabic, English, French, Spanish, Hindi, Urdu, and more. Voice AI supports all four major GCC languages natively." },
  { q: "What is Voice AI?", a: "Voice AI is a real AI receptionist that answers inbound phone calls, books appointments, handles after-hours enquiries, and logs full transcripts — in English, Arabic, Hindi, and Urdu." },
  { q: "Is there a long-term contract?", a: "No lock-in. All plans are monthly and can be cancelled anytime. A one-time onboarding fee covers your full AI setup, training, and go-live support." },
  { q: "What is Meta Brain?", a: "Meta Brain connects your Meta ad campaigns to LeadOS — showing which ads generate conversations, bookings, and revenue in one intelligent dashboard." },
  { q: "What counts as an AI chat?", a: "An AI chat is one complete conversation handled end-to-end by your AI — from first message to booking or resolution. Human-handled conversations don't count toward your limit." },
];

export default function HomePage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [activeDemo, setActiveDemo] = useState("Aesthetic Clinic");
  const [demoMsgs, setDemoMsgs] = useState(DEMOS["Aesthetic Clinic"]);
  const [demoInput, setDemoInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [proofTab, setProofTab] = useState(0);
  const [activeIntelligence, setActiveIntelligence] = useState(0);
  const [annual, setAnnual] = useState(false);
  const [mbEmail, setMbEmail] = useState("");
  const [mbJoined, setMbJoined] = useState(false);
  const msgsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
  }, [demoMsgs, typing]);

  useEffect(() => {
    const sequence = DEMOS[activeDemo];
    setTyping(false);
    setDemoMsgs([]);
    const timers = sequence.map((message, index) =>
      window.setTimeout(() => {
        setDemoMsgs((current) => [...current, message]);
      }, 500 + index * 1050)
    );
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [activeDemo]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIntelligence((current) => (current + 1) % INTELLIGENCE_FEATURES.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  const switchDemo = (k: string) => { setActiveDemo(k); };

  const sendDemo = () => {
    if (!demoInput.trim() || typing) return;
    const msgs = [...demoMsgs, { f: "u", t: demoInput }];
    setDemoMsgs(msgs); setDemoInput(""); setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setDemoMsgs([...msgs, { f: "a", t: "Got it — let me find the best option for you right now ✨" }]);
    }, 1700);
  };

  const prices = {
    starter: annual ? 239 : 299,
    growth: annual ? 559 : 699,
    enterprise: annual ? 1199 : 1499,
  };

  const waveH = [8, 14, 22, 30, 36, 28, 20, 32, 18, 26, 34, 22, 16, 28, 12, 24, 32, 20, 14, 30];

  return (
    <>
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="hero">
        <div className="container">
          <div className="hero-content" style={{ textAlign: "center" }}>
            <div className="hero-eyebrow-row">
              <div className="hero-eyebrow-pill">
                <span className="dot" />
                The CRM that learns from conversations, bookings and revenue
              </div>
            </div>
            <h1 className="hero-heading">
              Most CRMs Store Data.<br />
              <em>LeadOS Learns From It.</em>
            </h1>
            <p className="hero-sub">
              Every conversation, booking, follow-up and customer interaction teaches LeadOS how your business sells — helping it perform better tomorrow than it did today.
            </p>
            <div className="hero-channels">
              {[["💚", "WhatsApp"], ["🟣", "Instagram"], ["🔵", "Messenger"], ["🌐", "Web Chat"], ["📞", "Voice AI"]].map(([ic, l]) => (
                <div key={l} className="hero-channel-pill"><span>{ic}</span>{l}</div>
              ))}
            </div>
            <div className="hero-ctas" style={{ marginTop: 32 }}>
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                Book Demo
                <svg className="btn-arrow" width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <button
                className="btn btn-secondary btn-lg"
                onClick={() => document.getElementById("proof")?.scrollIntoView({ behavior: "smooth" })}
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
                </svg>
                See Live Product
              </button>
            </div>
            <p style={{ fontSize: 12, color: "var(--ink-4)", marginTop: 14, fontWeight: 400 }}>
              AI improves over time · Multi-language conversations · Human + AI collaboration · Revenue Operating System · Live in days
            </p>
          </div>

          {/* Dashboard preview */}
          <div className="hero-visual">
            {/* Floating cards */}
            <div className="hero-float" style={{ position: "absolute", top: -16, left: "8%", animationDelay: "0s", zIndex: 2 }}>
              <div className="hero-float-icon" style={{ background: "rgba(34,197,94,.1)" }}>⚡</div>
              <div>
                <div className="hf-label">AI replied in</div>
                <div className="hf-value hf-green">12 seconds</div>
              </div>
            </div>
            <div className="hero-float" style={{ position: "absolute", top: 48, right: "6%", animationDelay: "1s", zIndex: 2 }}>
              <div className="hero-float-icon" style={{ background: "rgba(37,99,235,.1)" }}>📅</div>
              <div>
                <div className="hf-label">Booking confirmed</div>
                <div className="hf-value hf-blue">Thu 3pm — Sarah M.</div>
              </div>
            </div>
            <div className="hero-float" style={{ position: "absolute", bottom: 32, left: "5%", animationDelay: "2s", zIndex: 2 }}>
              <div className="hero-float-icon" style={{ background: "rgba(124,58,237,.1)" }}>📊</div>
              <div>
                <div className="hf-label">Revenue tracked</div>
                <div className="hf-value" style={{ color: "var(--purple)" }}>$8,400 this week</div>
              </div>
            </div>
            <div className="hero-float" style={{ position: "absolute", bottom: 60, right: "5%", animationDelay: "3s", zIndex: 2 }}>
              <div className="hero-float-icon" style={{ background: "rgba(249,115,22,.1)" }}>📞</div>
              <div>
                <div className="hf-label">Voice call handled</div>
                <div className="hf-value" style={{ color: "#ea580c" }}>2:14 · Booked</div>
              </div>
            </div>

            <div className="hero-dash-wrap" style={{ position: "relative" }}>
              <div className="dash-titlebar">
                <div className="dash-dot dash-dot-r" />
                <div className="dash-dot dash-dot-y" />
                <div className="dash-dot dash-dot-g" />
                <div className="dash-url">app.leadoscrm.com — Revenue Dashboard</div>
              </div>
              <div className="dash-body">
                <div className="dash-sb">
                  <div className="dash-sb-logo">
                    <Logo size={20} />
                    <span className="dash-sb-wm">LeadOS</span>
                  </div>
                  {[["📥", "Inbox", true], ["🤖", "AI Brain"], ["📞", "Voice AI"], ["📅", "Bookings"], ["👥", "Contacts"], ["📊", "Reports"], ["🧠", "Meta Brain"], ["⚙️", "Settings"]].map(([ic, lb, on]) => (
                    <div key={lb as string} className={`dash-sbitem${on ? " active" : ""}`}>
                      <span style={{ fontSize: 13 }}>{ic}</span> {lb}
                    </div>
                  ))}
                </div>
                <div className="dash-content">
                  <div className="dash-kpis">
                    {[["Leads Today", "47", "↑ 23%"], ["Bookings", "18", "↑ 31%"], ["Avg Response", "28s", "↓ 94%"], ["Revenue Est.", "$8.4k", "↑ 18%"]].map(([l, v, c]) => (
                      <div key={l as string} className="dash-kpi">
                        <div className="dash-kpi-l">{l}</div>
                        <div className="dash-kpi-v">{v}</div>
                        <div className="dash-kpi-c">{c} today</div>
                      </div>
                    ))}
                  </div>
                  <div className="dash-conv">
                    <div className="dash-conv-hdr">
                      <div className="dash-conv-title">Live Conversations</div>
                      <div className="dash-conv-live"><span className="live-dot" />AI handling 12 now</div>
                    </div>
                    {[
                      { bg: "rgba(34,197,94,.1)", ch: "💚", n: "Sarah M.", p: "Thursday 3pm available?", b: "Booking", bc: "cbadge-blue" },
                      { bg: "rgba(168,85,247,.1)", ch: "🟣", n: "James K.", p: "How much for a full set?", b: "Replied", bc: "cbadge-green" },
                      { bg: "rgba(59,130,246,.1)", ch: "📞", n: "Inbound Call", p: "AI answered — booking in progress", b: "Voice AI", bc: "cbadge-purple" },
                      { bg: "rgba(0,0,0,.04)", ch: "🌐", n: "Tom W.", p: "I'd like to book a consultation", b: "Booking", bc: "cbadge-blue" },
                    ].map((c) => (
                      <div key={c.n} className="dash-conv-row">
                        <div className="dash-conv-ico" style={{ background: c.bg }}>{c.ch}</div>
                        <div style={{ flex: 1 }}>
                          <div className="dash-conv-name">{c.n}</div>
                          <div className="dash-conv-preview">{c.p}</div>
                        </div>
                        <div className={`dash-conv-badge ${c.bc}`}>{c.b}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENTERPRISE TRUST METRICS ── */}
      <section className="hero-trust-metrics" aria-label="LeadOS trust metrics">
        <div className="container">
          <div className="hero-metrics-grid">
            {[
              ["500K+", "Conversation Capacity", "Built for high-volume teams"],
              ["24/7", "AI Receptionist", "Always-on replies and calls"],
              ["99.9%", "Uptime Ready", "Production SaaS architecture"],
              ["4+", "Core Languages", "English, Arabic, Hindi and Urdu"],
              ["Revenue OS", "Intelligence Built In", "Conversations, bookings and revenue together"],
            ].map(([value, label, note]) => (
              <div key={label} className="hero-metric-card">
                <strong>{value}</strong>
                <span>{label}</span>
                <p>{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELF IMPROVING AI ── */}
      <section className="self-learning-section">
        <div className="container">
          <div className="self-learning-grid">
            <div className="self-learning-copy">
              <span className="eyebrow">Self-Improving AI</span>
              <h2 className="display-lg">Every booking makes <span className="text-serif-em" style={{ color: "var(--blue)" }}>LeadOS smarter.</span></h2>
              <p className="body-lg">Most AI tools answer questions. LeadOS learns from what happens next.</p>
              <p className="body-md">Every conversation, booking, campaign result and customer outcome helps improve future recommendations, automations and revenue performance.</p>
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">Book Demo →</a>
            </div>
            <div className="learning-flow-card">
              {[
                ["01", "Conversation", "A customer asks a real question across WhatsApp, Instagram, web chat or voice."],
                ["02", "Booking", "LeadOS understands intent, suggests the right next step and helps confirm the appointment."],
                ["03", "Revenue Outcome", "The result is tracked back to the conversation, source, campaign and team activity."],
                ["04", "LeadOS Learns", "The system learns which messages, offers, services and timings perform better."],
                ["05", "Future Responses Improve", "Your AI becomes more accurate, helpful and revenue-focused over time."],
              ].map(([n, h, p], i) => (
                <div className="learning-flow-step" key={h} style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="learning-flow-number">{n}</div>
                  <div>
                    <h3>{h}</h3>
                    <p>{p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ── INTELLIGENCE SHOWCASE ── */}
      <section id="intelligence" className="intelligence-showcase-section">
        <div className="container">
          <div className="section-header center intelligence-header">
            <span className="eyebrow">LeadOS Intelligence Showcase</span>
            <h2 className="display-lg">One platform. <span className="text-serif-em" style={{ color: "var(--blue)" }}>Multiple AI brains.</span></h2>
            <p className="body-lg" style={{ marginTop: 14, maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>LeadOS is a Revenue Operating System, not just another chatbot or knowledge base. It learns from conversations, bookings, team actions and revenue outcomes to improve how your business sells.</p>
          </div>

          <div className="intelligence-shell">
            <div className="intelligence-tabs" role="tablist" aria-label="LeadOS intelligence features">
              {INTELLIGENCE_FEATURES.map((feature, index) => (
                <button
                  key={feature.key}
                  type="button"
                  className={`intelligence-tab${activeIntelligence === index ? " active" : ""}`}
                  onClick={() => setActiveIntelligence(index)}
                >
                  <span className="intelligence-tab-dot" />
                  <span>{feature.badge}</span>
                </button>
              ))}
            </div>

            <div className="intelligence-stage">
              {(() => {
                const feature = INTELLIGENCE_FEATURES[activeIntelligence];
                return (
                  <div key={feature.key} className="intelligence-panel">
                    <div className="intelligence-copy-card">
                      <div className="intelligence-badge">{feature.badge}</div>
                      <h3>{feature.title}</h3>
                      <p>{feature.desc}</p>
                      <div className="intelligence-points">
                        {feature.points.map((point) => (
                          <span key={point}>✓ {point}</span>
                        ))}
                      </div>
                    </div>

                    <div className="intelligence-visual-card">
                      <div className="intelligence-metric">
                        <small>{feature.metricLabel}</small>
                        <strong>{feature.metric}</strong>
                      </div>
                      <div className="intelligence-flow">
                        {feature.flow.map((step, idx) => (
                          <div key={step} className="flow-step" style={{ animationDelay: `${idx * 0.18}s` }}>
                            <div className="flow-number">0{idx + 1}</div>
                            <div className="flow-label">{step}</div>
                            {idx < feature.flow.length - 1 && <div className="flow-line" />}
                          </div>
                        ))}
                      </div>
                      <div className="intelligence-learning-bar">
                        <div className="learning-label">Learning signal</div>
                        <div className="learning-track"><span /></div>
                        <div className="learning-caption">Future responses improve from real outcomes.</div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY LEADOS IS DIFFERENT ── */}
      <section className="why-different-section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Why LeadOS Is Different</span>
            <h2 className="display-lg">Traditional CRM stores data. <span className="text-serif-em" style={{ color: "var(--ink-3)" }}>LeadOS turns it into intelligence.</span></h2>
          </div>
          <div className="difference-grid">
            <div className="difference-card muted">
              <h3>Traditional CRM</h3>
              {['Stores leads', 'Stores conversations', 'Stores appointments', 'Stores reports', 'Requires manual follow-up'].map((item) => (
                <div className="difference-row" key={item}><span>—</span>{item}</div>
              ))}
            </div>
            <div className="difference-card highlighted">
              <h3>LeadOS</h3>
              {['Answers instantly', 'Books appointments', 'Learns from outcomes', 'Tracks real revenue', 'Improves future performance'].map((item) => (
                <div className="difference-row" key={item}><span>✓</span>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PRODUCT PROOF
      ══════════════════════════════════════ */}
      <section id="proof" style={{ padding: "88px 0", background: "white" }}>
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">See LeadOS in Action</span>
            <h2 className="display-lg">
              Real product.<br />
              <span className="text-serif-em" style={{ color: "var(--ink-3)" }}>Real results.</span>
            </h2>
            <p className="body-lg" style={{ marginTop: 14, maxWidth: 500, marginLeft: "auto", marginRight: "auto" }}>
              Every screen you see is LeadOS working — this is the software your team will use every day.
            </p>
          </div>

          {/* Proof tab nav */}
          <div style={{ display: "flex", gap: 0, border: "1px solid var(--border)", borderRadius: "var(--r-lg)", overflow: "hidden", maxWidth: 640, margin: "0 auto 32px", background: "var(--surface-2)" }}>
            {[["📥", "Omni Inbox"], ["📞", "Voice AI"], ["📊", "Revenue Reports"], ["📅", "Smart Booking"]].map(([ic, l], i) => (
              <button key={i} onClick={() => setProofTab(i)} style={{ flex: 1, padding: "12px 16px", fontSize: 13, fontWeight: proofTab === i ? 600 : 400, color: proofTab === i ? "var(--ink)" : "var(--ink-3)", background: proofTab === i ? "white" : "transparent", border: "none", borderRight: i < 3 ? "1px solid var(--border)" : "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, transition: "all .15s", boxShadow: proofTab === i ? "var(--shadow-sm)" : "none" }}>
                <span style={{ fontSize: 15 }}>{ic}</span>{l}
              </button>
            ))}
          </div>

          <div className="screenshot-frame">
            <div className="screenshot-bar">
              <div className="sf-dot sf-r" /><div className="sf-dot sf-y" /><div className="sf-dot sf-g" />
              <div className="sf-url">
                {["app.leadoscrm.com/inbox", "app.leadoscrm.com/voice", "app.leadoscrm.com/reports", "app.leadoscrm.com/bookings"][proofTab]}
              </div>
            </div>
            <div className="screenshot-content">

              {/* Inbox */}
              {proofTab === 0 && (
                <div style={{ display: "flex", gap: 0, height: 340 }}>
                  <div style={{ width: 200, borderRight: "1px solid var(--border)", padding: 12, flexShrink: 0, overflowY: "auto" }}>
                    <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 8, padding: "7px 10px", fontSize: 12, color: "var(--ink-4)", marginBottom: 10 }}>🔍 Search...</div>
                    {[{ bg: "rgba(34,197,94,.1)", ic: "💚", n: "Sarah M.", p: "Thursday 3pm?", t: "2m", on: true }, { bg: "rgba(168,85,247,.1)", ic: "🟣", n: "James K.", p: "Price for full set?", t: "5m", on: false }, { bg: "rgba(59,130,246,.1)", ic: "🔵", n: "Aisha R.", p: "Payment plans?", t: "8m", on: false }, { bg: "rgba(0,0,0,.05)", ic: "🌐", n: "Tom W.", p: "Book a consult", t: "15m", on: false }].map((c) => (
                      <div key={c.n} style={{ display: "flex", gap: 8, padding: "9px 8px", borderRadius: 8, background: c.on ? "var(--blue-50)" : "transparent", marginBottom: 2, cursor: "default" }}>
                        <div style={{ width: 26, height: 26, borderRadius: "50%", background: c.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, flexShrink: 0 }}>{c.ic}</div>
                        <div style={{ flex: 1, overflow: "hidden" }}>
                          <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--ink-2)" }}>{c.n}</span>
                            <span style={{ fontSize: 10, color: "var(--ink-4)" }}>{c.t}</span>
                          </div>
                          <div style={{ fontSize: 11, color: "var(--ink-4)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.p}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ flex: 1, padding: 16, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 9, paddingBottom: 12, borderBottom: "1px solid var(--border)", marginBottom: 14 }}>
                      <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#22d3ee,#3b78ff)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>👩</div>
                      <div>
                        <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--ink)" }}>Sarah M.</div>
                        <div style={{ fontSize: 11, color: "var(--green)" }}>● Active on WhatsApp</div>
                      </div>
                      <div style={{ marginLeft: "auto", background: "var(--blue-50)", color: "var(--blue)", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>💚 WhatsApp</div>
                    </div>
                    {[{ ai: false, t: "Hi, do you have availability for a lip filler consultation this week?" }, { ai: true, t: "Hi Sarah! I'm Aria from Glow Aesthetics ✨ We have Thursday 3pm or Friday 11am with Dr. Sarah — which works best for you?" }, { ai: false, t: "Thursday 3pm please!" }].map((m, i) => (
                      <div key={i} style={{ display: "flex", gap: 8, marginBottom: 10, flexDirection: m.ai ? "row-reverse" : "row" }}>
                        <div style={{ width: 24, height: 24, borderRadius: "50%", background: m.ai ? "linear-gradient(135deg,#2563eb,#4f46e5)" : "var(--surface-2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: m.ai ? "white" : "var(--ink-3)", flexShrink: 0 }}>{m.ai ? "🤖" : "👩"}</div>
                        <div style={{ fontSize: 13, padding: "8px 12px", borderRadius: 11, maxWidth: 280, lineHeight: 1.5, background: m.ai ? "rgba(37,99,235,.07)" : "var(--surface-2)", color: "var(--ink-2)", border: m.ai ? "1px solid rgba(37,99,235,.1)" : "none" }}>{m.t}</div>
                      </div>
                    ))}
                    <div style={{ display: "flex", gap: 4, padding: "9px 12px", background: "var(--surface-2)", borderRadius: 11, width: "fit-content" }}>
                      {[0, 1, 2].map((i) => <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--ink-4)", animation: `tda 1.2s ${i * 0.2}s infinite` }} />)}
                    </div>
                  </div>
                </div>
              )}

              {/* Voice AI */}
              {proofTab === 1 && (
                <div style={{ display: "flex", gap: 0, height: 340 }}>
                  <div style={{ width: 220, borderRight: "1px solid var(--border)", padding: 14, flexShrink: 0 }}>
                    <div style={{ fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".8px", color: "var(--ink-4)", marginBottom: 12 }}>Recent Calls</div>
                    {[{ n: "Sarah M.", t: "Inbound · Booked", dur: "2:14", on: true }, { n: "Ahmed K.", t: "Inbound · FAQ", dur: "1:32", on: false }, { n: "Unknown", t: "After-hours · AI", dur: "3:05", on: false }, { n: "Layla H.", t: "Outbound follow-up", dur: "1:48", on: false }].map((c, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 9, padding: "10px 9px", borderRadius: 9, background: c.on ? "var(--blue-50)" : "transparent", marginBottom: 3, cursor: "default" }}>
                        <div style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--surface-2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>👤</div>
                        <div style={{ flex: 1 }}><div style={{ fontSize: 12.5, fontWeight: 600, color: "var(--ink-2)" }}>{c.n}</div><div style={{ fontSize: 10.5, color: "var(--ink-4)" }}>{c.t}</div></div>
                        <div style={{ fontSize: 10.5, color: "var(--ink-4)", whiteSpace: "nowrap" }}>{c.dur}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ flex: 1, padding: 20 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                      <div><div style={{ fontSize: 15.5, fontWeight: 600, color: "var(--ink)" }}>Sarah M. — Inbound Call</div><div style={{ fontSize: 11.5, color: "var(--ink-3)" }}>WhatsApp · +971 50 xxx xxxx · 2 min 14 sec</div></div>
                      <div style={{ marginLeft: "auto", background: "var(--green-50)", color: "var(--green)", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20, border: "1px solid rgba(22,163,74,.15)" }}>✓ Appointment Booked</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 3, height: 40, marginBottom: 18 }}>
                      {waveH.map((h, i) => <div key={i} style={{ width: 4, height: h, borderRadius: 2, background: `linear-gradient(to top, rgba(37,99,235,.4), rgba(79,70,229,.7))` }} />)}
                    </div>
                    <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 12, padding: 14 }}>
                      <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".8px", color: "var(--ink-4)", marginBottom: 10 }}>Auto Transcript</div>
                      {[{ role: "Caller", ai: false, t: "Hi, I'd like to book a consultation for lip fillers." }, { role: "AI", ai: true, t: "Hi! I'm Aria, the AI receptionist. We have Thursday 3pm or Friday 11am with Dr. Sarah — which works?" }, { role: "Caller", ai: false, t: "Thursday 3pm, please." }, { role: "AI", ai: true, t: "Confirmed for Thursday at 3pm ✓ Sending WhatsApp confirmation now." }].map((l, i) => (
                        <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                          <div style={{ fontSize: 10.5, fontWeight: 700, width: 30, flexShrink: 0, color: l.ai ? "var(--blue)" : "var(--ink-3)" }}>{l.role}</div>
                          <div style={{ fontSize: 12.5, color: "var(--ink-2)", lineHeight: 1.5 }}>{l.t}</div>
                        </div>
                      ))}
                      <div style={{ display: "flex", gap: 6, marginTop: 12 }}>
                        {[["🇬🇧", "English"], ["🇸🇦", "Arabic"], ["🇮🇳", "Hindi"], ["🇵🇰", "Urdu"]].map(([f, l]) => (
                          <div key={l} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 500, padding: "3px 10px", borderRadius: 20, background: "white", border: "1px solid var(--border)", color: "var(--ink-3)" }}>{f} {l}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Reports */}
              {proofTab === 2 && (
                <div style={{ height: 340, overflowY: "auto" }}>
                  <div className="rd-kpis" style={{ marginBottom: 16 }}>
                    {[{ l: "Total Bookings", v: "247", c: "↑ 34%", up: true }, { l: "Revenue Tracked", v: "$124k", c: "↑ 28%", up: true }, { l: "No-Show Rate", v: "8.2%", c: "↓ 41%", up: false }, { l: "AI Response Rate", v: "99.4%", c: "↑ from 67%", up: true }].map((k) => (
                      <div key={k.l} className="rd-kpi"><div className="rd-kpi-l">{k.l}</div><div className="rd-kpi-v">{k.v}</div><div className={`rd-kpi-c ${k.up ? "rd-kpi-up" : "rd-kpi-down"}`}>{k.c} this month</div></div>
                    ))}
                  </div>
                  <div className="rd-grid">
                    <div className="rd-panel">
                      <div className="rd-panel-title">Bookings by Channel</div>
                      {[["WhatsApp", 78], ["Instagram", 54], ["Voice AI", 42], ["Web Chat", 31], ["Messenger", 18]].map(([l, v]) => (
                        <div key={l} className="rd-bar-row"><div className="rd-bar-label">{l}</div><div className="rd-bar-track"><div className="rd-bar-fill" style={{ width: `${v}%` }} /></div><div className="rd-bar-val">{v}%</div></div>
                      ))}
                      <div className="rd-insight"><strong>AI Insight:</strong> Instagram leads convert 2.1× higher than average. Recommend increasing IG ad spend by 30%.</div>
                    </div>
                    <div className="rd-panel">
                      <div className="rd-panel-title">Revenue by Source</div>
                      {[["Meta Ads", 82], ["Organic WA", 65], ["SEO", 44], ["Referral", 38], ["Direct", 25]].map(([l, v]) => (
                        <div key={l} className="rd-bar-row"><div className="rd-bar-label">{l}</div><div className="rd-bar-track"><div className="rd-bar-fill" style={{ width: `${v}%` }} /></div><div className="rd-bar-val">{v}%</div></div>
                      ))}
                      <div className="rd-insight"><strong>AI Insight:</strong> Meta Ads: cost per booking $23, ROAS 8.1×. Top performer this month.</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Booking */}
              {proofTab === 3 && (
                <div style={{ display: "flex", gap: 0, height: 340 }}>
                  <div style={{ width: 220, borderRight: "1px solid var(--border)", padding: 14, flexShrink: 0 }}>
                    <div style={{ fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".8px", color: "var(--ink-4)", marginBottom: 10 }}>June 2025</div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 2, textAlign: "center" }}>
                      {["M","T","W","T","F","S","S"].map((d, i) => <div key={i} style={{ fontSize: 9, color: "var(--ink-4)", padding: "3px 0", fontWeight: 600 }}>{d}</div>)}
                      {Array.from({ length: 30 }, (_, i) => {
                        const d = i + 1;
                        const hasAppt = [3, 5, 8, 10, 12, 15, 17, 19, 22, 24, 26].includes(d);
                        const isToday = d === 17;
                        return (
                          <div key={i} style={{ fontSize: 11, color: isToday ? "white" : hasAppt ? "var(--ink)" : "var(--ink-4)", background: isToday ? "linear-gradient(135deg,#2563eb,#4f46e5)" : "transparent", borderRadius: 5, padding: "4px 2px", fontWeight: isToday || hasAppt ? 600 : 400, cursor: "default" }}>
                            {d}
                            {hasAppt && !isToday && <div style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--green)", margin: "1px auto 0" }} />}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div style={{ flex: 1, padding: 14, overflowY: "auto" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".8px", color: "var(--ink-4)", marginBottom: 12 }}>Today — 17 June · 5 Appointments</div>
                    {[{ t: "09:00", n: "Sarah M.", type: "Lip Filler Consult", ch: "💚", confirmed: true }, { t: "10:30", n: "Aisha R.", type: "Skin Analysis", ch: "🟣", confirmed: false }, { t: "12:00", n: "James K.", type: "Botox Treatment", ch: "💬", confirmed: true }, { t: "14:30", n: "Layla H.", type: "Consultation", ch: "📞", confirmed: false }, { t: "16:00", n: "Omar S.", type: "Follow-Up", ch: "🌐", confirmed: true }].map((a) => (
                      <div key={a.t} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 11px", background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 9, marginBottom: 7 }}>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--ink-3)", width: 40, flexShrink: 0 }}>{a.t}</div>
                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: a.confirmed ? "var(--green)" : "var(--blue)", flexShrink: 0 }} />
                        <div style={{ flex: 1 }}><div style={{ fontSize: 12.5, fontWeight: 600, color: "var(--ink)" }}>{a.n}</div><div style={{ fontSize: 11, color: "var(--ink-3)" }}>{a.type}</div></div>
                        <div style={{ fontSize: 14 }}>{a.ch}</div>
                        <div style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: a.confirmed ? "var(--green-50)" : "var(--blue-50)", color: a.confirmed ? "var(--green)" : "var(--blue)" }}>{a.confirmed ? "Confirmed" : "AI Booked"}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════ */}
      <section style={{ padding: "88px 0", background: "var(--surface-2)" }}>
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">How It Works</span>
            <h2 className="display-lg">From enquiry to <span className="text-serif-em" style={{ color: "var(--ink-3)" }}>booked revenue.</span></h2>
            <p className="body-md" style={{ marginTop: 14, maxWidth: 500, marginLeft: "auto", marginRight: "auto" }}>
              Every step automated. Every lead captured. Every booking tracked.
            </p>
          </div>
          <div className="how-steps">
            {[
              { n: "01", icon: "💬", h: "Customer Enquires", p: "A lead messages on WhatsApp, Instagram, Messenger, your website — or calls. Anywhere, any time." },
              { n: "02", icon: "🤖", h: "LeadOS AI Responds", p: "Your AI replies in under 3 seconds — in the customer's language — qualifying, answering, and guiding toward booking." },
              { n: "03", icon: "📅", h: "Appointment Booked", p: "The AI books directly — confirmed in chat, synced to your calendar. No human needed." },
              { n: "04", icon: "📊", h: "Revenue Tracked", p: "Every booking and revenue source is logged. You see exactly what's working and where every dirham comes from." },
            ].map((s) => (
              <div key={s.n} className="how-step">
                <span className="how-num">{s.n}</span>
                <span className="how-icon">{s.icon}</span>
                <div className="how-step-h">{s.h}</div>
                <div className="how-step-p">{s.p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHERE REVENUE DISAPPEARS
      ══════════════════════════════════════ */}
      <section className="lead-leak-section" style={{ padding: "88px 0" }}>
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">The Problem</span>
            <h2 className="display-lg">Where revenue <span className="text-serif-em" style={{ color: "var(--red)" }}>disappears.</span></h2>
            <p className="body-md" style={{ marginTop: 14, maxWidth: 500, marginLeft: "auto", marginRight: "auto" }}>
              78% of customers book with the first business that responds. Most businesses reply in hours — or not at all.
            </p>
          </div>
          <div className="leak-flow">
            {[["📣", "Ad Click", "Customer sees your ad"], ["💬", "WhatsApp Message", "They message you"], ["⏳", "Slow Reply", "Hours pass..."], ["🔇", "Missed Follow-up", "No one follows up"], ["❌", "Lost Booking", "They book elsewhere"]].map(([ic, l, s], i) => (
              <div key={l} style={{ display: "flex", alignItems: "center" }}>
                <div className="leak-step">
                  <div className="leak-step-icon" style={{ background: i >= 2 ? "#fef2f2" : "white", borderColor: i >= 2 ? "#fecaca" : "var(--border)" }}>{ic}</div>
                  <div className="leak-step-label" style={{ color: i >= 2 ? "var(--red)" : "var(--ink-2)" }}>{l}</div>
                  <div className="leak-step-sub">{s}</div>
                </div>
                {i < 4 && <div className="leak-arrow" style={{ color: i >= 2 ? "#fca5a5" : "var(--ink-5)" }}>→</div>}
              </div>
            ))}
          </div>
          <div className="leak-divider">
            <div className="leak-divider-line" />
            <div className="leak-divider-label">With LeadOS</div>
            <div className="leak-divider-line" />
          </div>
          <div className="leak-solution">
            {[["⚡", "Captures every lead", "Every message on every channel — instantly captured."], ["🤖", "AI replies in seconds", "Instant, personalised reply in the customer's language."], ["📅", "Books the appointment", "Confirmed appointment, synced to calendar. No human needed."], ["📊", "Tracks every AED", "Revenue, source, and ROI — all visible in your dashboard."]].map(([ic, h, p]) => (
              <div key={h as string} className="leak-sol-card">
                <div className="leak-sol-icon">{ic}</div>
                <div className="leak-sol-h" style={{ color: "var(--blue)" }}>{h}</div>
                <div className="leak-sol-p">{p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURES
      ══════════════════════════════════════ */}
      <section id="features" style={{ padding: "88px 0", background: "white" }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Platform Capabilities</span>
            <h2 className="display-lg">Built to drive revenue.<br /><span className="text-serif-em" style={{ color: "var(--ink-3)" }}>Not just reply to messages.</span></h2>
            <p className="body-lg" style={{ marginTop: 14, maxWidth: 520 }}>Every feature designed around one outcome — converting conversations into booked, tracked appointments.</p>
          </div>
          <div className="features-grid">
            {/* Hero feat */}
            <div className="feature-card featured">
              <div>
                <div className="feat-icon-wrap"><span>📥</span></div>
                <div className="feat-outcome">Never miss another lead</div>
                <div className="feat-h">One Inbox for Every Channel</div>
                <div className="feat-p">WhatsApp, Instagram, Messenger, and your website — all in one place. One team, one inbox, zero missed messages.</div>
                <div className="feat-tags">
                  {["WhatsApp", "Instagram", "Messenger", "Live Chat"].map((t) => <span key={t} className="feat-tag">{t}</span>)}
                </div>
              </div>
              <div style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.07)", borderRadius: 12, padding: 14 }}>
                {[{ ch: "💚", n: "WhatsApp", m: "Is the 3pm slot still available?", b: "Now" }, { ch: "🟣", n: "Instagram DM", m: "Price for a full set?", b: "2m" }, { ch: "🔵", n: "Messenger", m: "Payment plans?", b: "5m" }, { ch: "🌐", n: "Website Chat", m: "Book a consultation", b: "12m" }].map((r) => (
                  <div key={r.ch} style={{ display: "flex", alignItems: "center", gap: 9, padding: "7px 9px", background: "rgba(255,255,255,.05)", borderRadius: 7, marginBottom: 5 }}>
                    <span style={{ fontSize: 15 }}>{r.ch}</span>
                    <div style={{ flex: 1 }}><div style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,.75)" }}>{r.n}</div><div style={{ fontSize: 10, color: "rgba(255,255,255,.35)" }}>{r.m}</div></div>
                    <div style={{ fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 5, background: "rgba(37,99,235,.25)", color: "#93bbff" }}>{r.b}</div>
                  </div>
                ))}
              </div>
            </div>

            {[
              { icon: "🤖", outcome: "Qualify & book without staff", h: "AI Receptionist That Never Sleeps", p: "Replies in seconds, 24/7. Handles FAQs, qualifies leads, and books appointments without any human involvement.", tags: ["24/7", "Multilingual", "Smart Routing"] },
              { icon: "📞", outcome: "Answer every call. Book every lead.", h: "Voice AI Receptionist", p: "Your AI answers calls, books appointments, handles after-hours, and logs full transcripts — in English, Arabic, Hindi, and Urdu.", tags: ["Inbound Calls", "Outbound Follow-up", "Transcripts", "4 Languages"] },
              { icon: "📅", outcome: "Zero back-and-forth. Just bookings.", h: "Smart Booking Automation", p: "Leads book straight from WhatsApp or a voice call — no forms, no waiting. Confirmations land in your calendar automatically.", tags: ["Calendar Sync", "Auto-Reminders", "No-Show Reduction"] },
              { icon: "📊", outcome: "Know exactly where revenue comes from", h: "Revenue Intelligence Dashboard", p: "See leads, replies, bookings, and revenue tracked to their source — by channel, campaign, and team member.", tags: ["ROI Tracking", "Source Attribution", "Team Performance"] },
              { icon: "🔀", outcome: "Your team steps in when it matters", h: "Seamless Human + AI Handoff", p: "When a conversation needs a personal touch, your team is notified instantly with full context. AI steps back.", tags: ["Smart Escalation", "Full Context", "Team Alerts"] },
              { icon: "🌍", outcome: "Speak every customer's language", h: "Multilingual AI — Arabic & Beyond", p: "LeadOS auto-detects language and responds in Arabic, English, French, Spanish, Urdu, Hindi and more.", tags: ["Auto-Detect", "10+ Languages", "Cultural Context"] },
              { icon: "🔁", outcome: "Turn cold leads into bookings", h: "Automated Follow-Up Recovery", p: "Leads that go quiet are re-engaged at exactly the right time — cold prospects become confirmed bookings.", tags: ["Drip Sequences", "Re-engagement", "Timing AI"] },
              { icon: "🏢", outcome: "One CRM for every location", h: "Multi-Location Management", p: "One LeadOS account manages every branch, clinic, or outlet — with separate inboxes and unified reporting.", tags: ["Multi-Branch", "Role Permissions", "Unified Reports"] },
            ].map((f) => (
              <div key={f.h} className="feature-card">
                <div className="feat-icon-wrap"><span>{f.icon}</span></div>
                <div className="feat-outcome">{f.outcome}</div>
                <div className="feat-h">{f.h}</div>
                <div className="feat-p">{f.p}</div>
                <div className="feat-tags">{f.tags.map((t) => <span key={t} className="feat-tag">{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          VOICE AI
      ══════════════════════════════════════ */}
      <section id="voice-ai" style={{ padding: "88px 0", background: "var(--surface-2)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 72, alignItems: "center" }}>
            <div>
              <span className="eyebrow">AI Voice Receptionist</span>
              <h2 className="display-lg" style={{ marginBottom: 14 }}>An AI that answers<br /><span className="text-serif-em" style={{ color: "var(--blue)" }}>every call. Every time.</span></h2>
              <p className="body-md" style={{ marginBottom: 28 }}>While your team is with a patient, your LeadOS AI answers the phone — books appointments, handles after-hours calls, and never puts a lead on hold.</p>
              {[["📱", "Answers inbound calls instantly", "No hold music. No missed calls. AI greets the caller in their language and handles from start to booking."], ["📅", "Books appointments during the call", "Accesses your real-time availability, confirms a slot, and sends a WhatsApp confirmation — all without a human."], ["🌙", "Handles after-hours enquiries", "Calls at 11pm get the same service as 11am. Your AI never clocks off."], ["🔀", "Escalates to humans when needed", "If a call requires personal attention, the AI transfers seamlessly with full context."], ["📋", "Logs full call transcripts", "Every call transcribed, tagged, and stored. Your team sees exactly what was said and what needs follow-up."]].map(([ic, h, p]) => (
                <div key={h as string} style={{ display: "flex", gap: 14, paddingTop: 16, paddingBottom: 16, borderBottom: "1px solid var(--border)" }}>
                  <div style={{ width: 34, height: 34, borderRadius: 9, background: "rgba(79,70,229,.1)", border: "1px solid rgba(79,70,229,.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0, marginTop: 1 }}>{ic}</div>
                  <div>
                    <div style={{ fontSize: 14.5, fontWeight: 600, color: "var(--ink)", marginBottom: 3 }}>{h}</div>
                    <div style={{ fontSize: 13, color: "var(--ink-3)", lineHeight: 1.6 }}>{p}</div>
                  </div>
                </div>
              ))}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 20 }}>
                {[["🇬🇧", "English"], ["🇸🇦", "Arabic"], ["🇮🇳", "Hindi"], ["🇵🇰", "Urdu"]].map(([f, l]) => (
                  <div key={l} className="lang-badge"><span>{f}</span>{l}</div>
                ))}
              </div>
            </div>
            {/* Voice call simulation */}
            <div className="voice-call-sim">
              <div className="vcall-header">
                <div className="vcall-avatar">🤖</div>
                <div><div className="vcall-name">Aria — LeadOS Voice AI</div><div className="vcall-status">● Active Call — Handling Booking</div></div>
                <div className="vcall-live"><span className="live-dot" style={{ animation: "blink 1s infinite" }} />Live</div>
              </div>
              <div className="vcall-body">
                {[
                  { ai: false, t: "Hi, I want to book a HydraFacial for today." },
                  { ai: true, t: "Hi! I'm Aria from Glow Aesthetics. We have availability at 5pm today — would you like me to book it?" },
                  { ai: false, t: "Yes please." },
                  { ai: true, t: "Booked! Your HydraFacial is confirmed for today at 5pm ✓ A WhatsApp confirmation will be sent to you shortly. Is there anything else I can help with?" },
                  { ai: false, t: "No, that's perfect. Thank you!" },
                  { ai: true, t: "Perfect! We look forward to seeing you at 5pm. Have a great day! 😊" },
                ].map((m, i) => (
                  <div key={i} className={`vcall-msg${m.ai ? " ai" : ""}`}>
                    <div className={`vcall-msg-av ${m.ai ? "ai-av" : "caller"}`}>{m.ai ? "🤖" : "👤"}</div>
                    <div className={`vcall-bubble ${m.ai ? "ai-b" : "caller-b"}`}>{m.t}</div>
                  </div>
                ))}
              </div>
              <div className="vcall-footer">
                <div className="lang-badge">🇬🇧 English</div>
                <div className="lang-badge">🇸🇦 Arabic</div>
                <div className="lang-badge">🇮🇳 Hindi</div>
                <div className="lang-badge">🇵🇰 Urdu</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── META BRAIN ── */}
      <section id="meta-brain" className="meta-brain-premium">
        <div className="container">
          <div className="meta-brain-grid">
            <div className="meta-brain-copy">
              <div className="meta-pill">
                <span /> Meta Brain — Campaign Intelligence
              </div>
              <h2 className="meta-title">
                Know which ads create <span>real revenue.</span>
              </h2>
              <p className="meta-lead">
                LeadOS connects ad spend, conversations, bookings and revenue in one clear view — so owners can stop guessing and start scaling what works.
              </p>

              <div className="meta-journey">
                {[
                  ["01", "Campaign starts", "Meta, Google or social campaigns begin bringing new conversations."],
                  ["02", "LeadOS captures the lead", "Every enquiry is tagged with source, service, channel and intent."],
                  ["03", "AI moves the lead", "AI replies, qualifies, follows up and helps convert the conversation."],
                  ["04", "Revenue is tracked", "Bookings and attributed revenue show which campaigns are actually profitable."],
                ].map(([n, h, p]) => (
                  <div className="meta-step" key={h}>
                    <div className="meta-step-num">{n}</div>
                    <div>
                      <div className="meta-step-title">{h}</div>
                      <div className="meta-step-text">{p}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="meta-actions">
                <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">Book Demo →</a>
                <a href="#pricing" className="btn btn-secondary btn-lg">View Pricing</a>
              </div>
            </div>

            <div className="meta-dashboard-card">
              <div className="meta-dashboard-top">
                <div>Meta Brain Dashboard</div>
                <span>Live ROI</span>
              </div>
              <div className="meta-kpis">
                {[
                  ["Ad Spend", "$4,820", "this month"],
                  ["Cost / Booking", "$23", "↓ 34%"],
                  ["Revenue Tracked", "$38.4k", "8× ROAS"],
                ].map(([l, v, c]) => (
                  <div className="meta-kpi" key={l}>
                    <small>{l}</small>
                    <strong>{v}</strong>
                    <span>{c}</span>
                  </div>
                ))}
              </div>

              <div className="meta-campaigns">
                {[
                  ["Lip Filler — Summer Promo", "Top performer", "$1,240", "68%", "11.2×"],
                  ["HydraFacial Offer", "Scaling", "$2,720", "54%", "7.8×"],
                  ["Consultation Retargeting", "Optimise", "$860", "31%", "4.1×"],
                ].map(([name, status, spend, conv, roas]) => (
                  <div className="meta-campaign" key={name}>
                    <div className="meta-campaign-head">
                      <strong>{name}</strong>
                      <span>{status}</span>
                    </div>
                    <div className="meta-campaign-stats">
                      <div><small>Spend</small><b>{spend}</b></div>
                      <div><small>Conv.</small><b>{conv}</b></div>
                      <div><small>ROAS</small><b>{roas}</b></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="meta-insight-premium">
                <b>AI Insight</b>
                <p>HydraFacial leads are converting 2.7× higher from Instagram. Increase budget and pause weak creatives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIVE DEMO ── */}
      <section className="demo-light-section">
        <div className="container demo-container-wide">
          <div className="section-header center">
            <span className="eyebrow">Try It Now</span>
            <h2 className="display-lg">Your AI. <span className="text-serif-em" style={{ color: "var(--blue)" }}>Working right now.</span></h2>
            <p className="body-md" style={{ marginTop: 14, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>Pick your industry and watch LeadOS handle a real conversation.</p>
          </div>
          <div className="demo-wrap">
            <div className="demo-left">
              <div className="demo-slabel">Select Your Industry</div>
              <div className="demo-tabs">
                {Object.keys(DEMOS).map((k) => (
                  <button key={k} className={`d-tab${activeDemo === k ? " on" : ""}`} onClick={() => switchDemo(k)}>{k}</button>
                ))}
              </div>
              <div className="demo-hd">Qualify, answer, book.<br />Automatically.</div>
              <p className="demo-sub">Watch the AI handle a <strong style={{ color: "var(--ink)" }}>{activeDemo}</strong> enquiry — from first message to confirmed booking — without a single human involved.</p>
              <div className="demo-info">✓ Replies in under 3 seconds &nbsp;·&nbsp; ✓ Books in WhatsApp &nbsp;·&nbsp; ✓ Active 24/7, 365</div>
              <button className="demo-cta-btn" onClick={() => window.open(BOOK_URL, "_blank")}>Book a Live Demo →</button>
            </div>
            <div className="demo-right">
              <div className="demo-chat-hdr">
                <div className="demo-ai-av">🤖</div>
                <div><div className="demo-ai-name">Aria — LeadOS AI Receptionist</div><div className="demo-ai-status">● Online · Responding instantly</div></div>
              </div>
              <div className="demo-msgs" ref={msgsRef}>
                {demoMsgs.map((m, i) => (
                  <div key={i} className={`dm${m.f === "u" ? " u" : ""}`}>
                    <div className={`dm-av ${m.f === "a" ? "a-av" : "u-av"}`}>{m.f === "a" ? "🤖" : "👤"}</div>
                    <div className={`dm-b ${m.f === "a" ? "ai-msg" : "user-msg"}`}>{m.t}</div>
                  </div>
                ))}
                {typing && <div className="dm"><div className="dm-av a-av">🤖</div><div className="typing-row"><div className="t-dot" /><div className="t-dot" /><div className="t-dot" /></div></div>}
              </div>
              <div className="demo-input-row">
                <input className="demo-inp" value={demoInput} onChange={(e) => setDemoInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendDemo()} placeholder="Type to test the AI..." />
                <button className="demo-send" onClick={sendDemo}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section id="industries" className="industries-detail-section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Industries</span>
            <h2 className="display-lg">Built for businesses that grow through <span className="text-serif-em" style={{ color: "var(--blue)" }}>conversations.</span></h2>
            <p className="body-lg" style={{ marginTop: 14, maxWidth: 650, marginLeft: "auto", marginRight: "auto" }}>LeadOS adapts to different industries while keeping the same core promise: faster replies, better bookings, smarter follow-up and clearer revenue visibility.</p>
          </div>

          <div className="industries-detail-grid">
            {INDUSTRIES.map((industry) => {
              const details: Record<string, string[]> = {
                "Clinics & Aesthetics": ["AI answers treatment enquiries instantly", "Books consultations with the right doctor or therapist", "Follows up on missed leads, offers and reviews"],
                "Dental Clinics": ["Handles treatment questions and appointment requests", "Reduces no-shows with automated reminders", "Tracks which campaigns bring booked patients"],
                "Medical Centers": ["Routes enquiries by department, doctor and service", "Captures patient intake before the visit", "Keeps managers aware of response and booking performance"],
                "Real Estate": ["Qualifies buyers and tenants by budget, area and timeline", "Schedules viewings from WhatsApp or website chat", "Shows which agents and sources convert best"],
                "Restaurants": ["Takes reservations from social and website messages", "Recovers cancellations and missed booking requests", "Triggers review and repeat-visit follow-ups"],
                "Professional Services": ["Collects enquiry details before consultation", "Routes leads to the right specialist or team", "Tracks source, follow-up and conversion performance"],
                "Education": ["Answers course and admission enquiries", "Automates student follow-up and enrolment reminders", "Shows which campaigns generate qualified applicants"],
                "Home Services": ["Captures job details, location and urgency", "Requests photos or extra details automatically", "Routes jobs and follows up on quotes"],
              };
              return (
                <article className="industry-detail-card" key={industry.name}>
                  <div className="industry-image-wrap">
                    <img src={industry.img} alt={`${industry.name} using LeadOS Revenue Operating System`} />
                    <span>{industry.icon}</span>
                  </div>
                  <div className="industry-detail-body">
                    <h3>{industry.name}</h3>
                    <p>{industry.desc}</p>
                    <ul>
                      {(details[industry.name] || []).map((item) => (
                        <li key={item}>✓ {item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>


      {/* ── ROI STATS ── */}
      <section style={{ padding: "88px 0", background: "white" }}>
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Expected Results</span>
            <h2 className="display-lg">Built to deliver <span className="text-serif-em" style={{ color: "var(--ink-3)" }}>measurable outcomes.</span></h2>
            <p className="body-md" style={{ marginTop: 14, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>Businesses implementing LeadOS typically see these results within the first 30 days.</p>
          </div>
          <div className="roi-grid">
            {[
              { n: "3×", h: "More Appointments Booked", p: "Instant 24/7 responses mean significantly more conversions from the same lead volume." },
              { n: "94%", h: "Faster First Response", p: "Average reply drops from hours to under 28 seconds. First to respond wins the booking." },
              { n: "67%", h: "Cold Leads Recovered", p: "Follow-up automation re-engages leads who went quiet — turning them back into confirmed bookings." },
              { n: "40%", h: "Fewer No-Shows", p: "Automated appointment reminders and confirmation sequences keep your calendar full." },
              { n: "24/7", h: "Always On Receptionist", p: "Your AI handles every enquiry — calls, messages, and after-hours contacts — without staff." },
              { n: "8×", h: "ROAS with Meta Brain", p: "Connecting ad spend to actual bookings delivers unmatched campaign performance visibility." },
            ].map((r) => (
              <div key={r.n} className="roi-card">
                <div className="roi-number">{r.n}</div>
                <div className="roi-h">{r.h}</div>
                <div className="roi-p">{r.p}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", fontSize: 12, color: "var(--ink-4)", marginTop: 18 }}>Results based on anticipated outcomes and early customer data. Individual results may vary.</p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PRICING
      ══════════════════════════════════════ */}
      <section id="pricing" style={{ padding: "88px 0", background: "var(--surface-2)" }}>
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Pricing</span>
            <h2 className="display-lg">Priced for <span className="text-serif-em" style={{ color: "var(--ink-3)" }}>serious businesses.</span></h2>
            <p className="body-md" style={{ marginTop: 14, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>All plans include full onboarding support. Monthly or annual billing. Cancel anytime.</p>
          </div>

          {/* Toggle */}
          <div className="pricing-toggle">
            <span className={`pricing-toggle-label${!annual ? " active" : ""}`}>Monthly</span>
            <div className={`toggle-track${annual ? " on" : ""}`} onClick={() => setAnnual(!annual)}>
              <div className="toggle-thumb" />
            </div>
            <span className={`pricing-toggle-label${annual ? " active" : ""}`}>Annual</span>
            {annual && <span className="save-badge">Save 20%</span>}
          </div>

          <div className="pricing-grid">
            {/* Starter */}
            <div className="pricing-card">
              <div className="p-tier">Starter</div>
              <div className="p-tagline">For small businesses getting started</div>
              <div className="p-price">${prices.starter}</div>
              <div className="p-sub-price">/month · billed {annual ? "annually" : "monthly"}</div>
              <div className="p-aed">≈ AED {(prices.starter * 3.67).toFixed(0)}/month</div>
              <div className="p-highlight">👥 3 Users &nbsp;·&nbsp; 💬 1,000 AI Chats/mo</div>
              <hr className="p-divider" />
              <ul className="p-feats">
                {["3 Team Members", "1,000 AI-handled conversations/month", "WhatsApp Business + Website Chat", "AI Receptionist (24/7)", "Appointment Booking Automation", "Basic Reports Dashboard", "Human Handoff Alerts", "Email & Chat Support"].map((f) => (
                  <li key={f} className="p-feat"><span className="p-check">✓</span>{f}</li>
                ))}
              </ul>
              <button className="p-btn pb-outline" onClick={() => window.open(BOOK_URL, "_blank")}>Book a Demo →</button>
            </div>

            {/* Growth — Popular */}
            <div className="pricing-card popular">
              <div className="popular-pill">Most Popular</div>
              <div className="p-tier">Growth</div>
              <div className="p-tagline" style={{ color: "rgba(255,255,255,.35)" }}>For growing teams that need more power</div>
              <div className="p-price">${prices.growth}</div>
              <div className="p-sub-price">/month · billed {annual ? "annually" : "monthly"}</div>
              <div className="p-aed" style={{ color: "rgba(255,255,255,.28)" }}>≈ AED {(prices.growth * 3.67).toFixed(0)}/month</div>
              <div className="p-highlight">👥 15 Users &nbsp;·&nbsp; 💬 10,000 AI Chats/mo</div>
              <hr className="p-divider" />
              <ul className="p-feats">
                {["15 Team Members", "10,000 AI-handled conversations/month", "All Channels (WA + IG + FB + Web)", "AI Receptionist + Revenue Brain", "Voice AI Receptionist", "Advanced Booking Automation", "Follow-Up & Recovery Sequences", "Full Reports & Revenue Attribution", "Multilingual AI (10+ languages)", "Priority Support", "Meta Brain Access"].map((f) => (
                  <li key={f} className="p-feat"><span className="p-check">✓</span>{f}</li>
                ))}
              </ul>
              <button className="p-btn pb-solid" onClick={() => window.open(BOOK_URL, "_blank")}>Book a Demo →</button>
            </div>

            {/* Enterprise */}
            <div className="pricing-card">
              <div className="p-tier">Enterprise</div>
              <div className="p-tagline">For large operations & multi-location</div>
              <div className="p-price">${prices.enterprise}+</div>
              <div className="p-sub-price">/month · billed {annual ? "annually" : "monthly"}</div>
              <div className="p-aed">≈ AED {(prices.enterprise * 3.67).toFixed(0)}+/month</div>
              <div className="p-highlight">♾️ Unlimited Users &nbsp;·&nbsp; 💬 Unlimited Chats</div>
              <hr className="p-divider" />
              <ul className="p-feats">
                {["Unlimited Team Members", "Unlimited AI conversations (fair use)", "All Channels + Custom Integrations", "Dedicated AI Model Training", "Multi-Location Management", "Voice AI — All Languages", "White-Label Options", "Custom Reporting & Analytics", "Dedicated Account Manager", "API Access", "SLA & Uptime Guarantee", "Full Meta Brain Access"].map((f) => (
                  <li key={f} className="p-feat"><span className="p-check">✓</span>{f}</li>
                ))}
              </ul>
              <button className="p-btn pb-outline" onClick={() => window.open(SALES_URL, "_blank")}>Talk to Sales →</button>
            </div>
          </div>
          <p className="p-note">All plans require a one-time onboarding & setup fee · AI usage billed fairly based on plan · Pricing may vary based on integrations and usage</p>
        </div>
      </section>

      {/* ── SECURITY ── */}
      <section id="security-overview" style={{ padding: "88px 0", background: "white" }}>
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Enterprise Security</span>
            <h2 className="display-lg">Built for <span className="text-serif-em" style={{ color: "var(--ink-3)" }}>secure operations.</span></h2>
            <p className="body-md" style={{ marginTop: 14, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>Enterprise-grade infrastructure so you can trust LeadOS with your most sensitive business data.</p>
          </div>
          <div className="security-grid">
            {[
              { icon: "👤", h: "Role-Based Access Control", p: "Define who can see and do what. Granular permissions for every team member and department." },
              { icon: "📋", h: "Complete Audit Logs", p: "Every action in your account is logged — who did what, when, from where. Full audit trail." },
              { icon: "🏢", h: "Tenant Isolation", p: "Your data is completely isolated from other customers. Strict separation at infrastructure level." },
              { icon: "🔒", h: "Encrypted Infrastructure", p: "All data encrypted at rest and in transit. Industry-standard AES-256 and TLS 1.3." },
              { icon: "🛡️", h: "Secure API Permissions", p: "Fine-grained API token controls. Rotate keys, set expiry, limit scope by endpoint." },
              { icon: "✅", h: "Compliance Ready", p: "Built with GDPR, HIPAA, and regional data residency requirements in mind." },
            ].map((s) => (
              <div key={s.h} className="security-card">
                <div className="sec-icon-wrap"><span>{s.icon}</span></div>
                <div className="sec-card-h">{s.h}</div>
                <div className="sec-card-p">{s.p}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/security" className="btn btn-secondary">
              View Full Security Details →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: "88px 0", background: "var(--surface-2)" }}>
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">FAQ</span>
            <h2 className="display-lg">Questions? <span className="text-serif-em" style={{ color: "var(--ink-3)" }}>We have answers.</span></h2>
          </div>
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <div key={i} className="fq-item" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                <div className="fq-q">{f.q}<span className={`fq-plus${faqOpen === i ? " open" : ""}`}>+</span></div>
                <div className={`fq-a${faqOpen === i ? " open" : ""}`}>{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER VISION ── */}
      <section className="founder-vision-section">
        <div className="container">
          <div className="founder-vision-card">
            <span className="eyebrow">Why LeadOS Exists</span>
            <h2 className="display-lg">Built for businesses that run on conversations.</h2>
            <p className="body-lg">Businesses should not need five different tools to answer customers, manage leads, book appointments and understand revenue.</p>
            <p className="body-md">LeadOS combines AI Receptionist, CRM, Booking Intelligence and Revenue Intelligence into one Revenue Operating System designed to learn and improve over time.</p>
          </div>
        </div>
      </section>


      {/* ── FINAL CTA ── */}
      <section className="final-cta-section">
        <div className="container final-inner">
          <span className="eyebrow" style={{ color: "rgba(255,255,255,.3)", display: "block", marginBottom: 14, textAlign: "center" }}>Ready to grow?</span>
          <h2 className="final-h">
            When a lead messages you,<br />
            <em>what happens next?</em>
          </h2>
          <p className="final-sub">With LeadOS, the answer is always the same: an instant reply, a booked appointment, and tracked revenue — whether it's 9am or 2am, WhatsApp or a phone call.</p>
          <div className="final-ctas">
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              Book a Live Demo
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a href={SALES_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg" style={{ color: "rgba(255,255,255,.7)", borderColor: "rgba(255,255,255,.15)", background: "rgba(255,255,255,.07)" }}>
              Talk to Sales
            </a>
          </div>
          <p className="final-note">No commitment required · Guided setup · Live in 48 hours · No lock-in</p>
          <div className="final-contact-links">
            <a href="mailto:admin@leadoscrm.com">admin@leadoscrm.com</a>
            <span>•</span>
            <a href="tel:+971568350424">+971 56 835 0424</a>
          </div>
        </div>
      </section>

      {/* ── FLOATING PILL (desktop) ── */}
      <div className="float-pill">
        <a href={BOOK_URL} target="_blank" rel="noopener noreferrer">
          Book Demo ↗
        </a>
      </div>

      {/* ── MOBILE STICKY CTA ── */}
      <div className="mobile-cta">
        <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="mobile-cta-primary">Book Demo</a>
        <button className="mobile-cta-secondary" onClick={() => document.getElementById("proof")?.scrollIntoView({ behavior: "smooth" })}>See Product</button>
      </div>
    </>
  );
}

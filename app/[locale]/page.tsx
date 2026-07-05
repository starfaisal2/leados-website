"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from 'next-intl';

const BOOK_URL =
  "https://wa.me/971568350424?text=Hi%20LeadOS%2C%20I%20would%20like%20to%20book%20a%20demo";
const SALES_URL =
  "https://wa.me/971568350424?text=Hi%20LeadOS%2C%20I%20would%20like%20to%20discuss%20Enterprise";
const SIGNUP_URL = "/get-started";

/* ── Logo SVG — Concept B (Bold L + signal dot) ── */
function Logo({ size = 32 }: { size?: number }) {
  const id = "logo_g";
  return (
    <svg width={size} height={size} viewBox="0 0 46 46" fill="none">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="46" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00C8F0" />
          <stop offset="55%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="10" height="40" rx="5" fill={`url(#${id})`} />
      <rect x="3" y="33" width="36" height="10" rx="5" fill={`url(#${id})`} />
      <circle cx="41" cy="8" r="4.5" fill="#00C8F0" />
      <circle cx="41" cy="8" r="8.5" fill="none" stroke="#2563EB" strokeWidth="1.5" opacity="0.4" />
      <circle cx="41" cy="8" r="12.5" fill="none" stroke="#7C3AED" strokeWidth="1" opacity="0.2" />
    </svg>
  );
}

/* ── Static image data (urls only, text comes from translations) ── */
const INDUSTRY_IMGS = [
  { icon: "💉", img: "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { icon: "🦷", img: "https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { icon: "🏥", img: "https://images.pexels.com/photos/7088529/pexels-photo-7088529.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { icon: "🏠", img: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { icon: "🍽️", img: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { icon: "⚖️", img: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { icon: "🎓", img: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { icon: "🔧", img: "https://images.pexels.com/photos/8961251/pexels-photo-8961251.jpeg?auto=compress&cs=tinysrgb&w=900" },
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
  const t = useTranslations('home');

  const INTELLIGENCE_FEATURES = [
    { key: "omni", badge: t('intelOmniBadge'), title: t('intelOmniTitle'), desc: t('intelOmniDesc'),
      points: [t('intelOmniP1'), t('intelOmniP2'), t('intelOmniP3'), t('intelOmniP4')],
      flow: [t('intelOmniF1'), t('intelOmniF2'), t('intelOmniF3'), t('intelOmniF4')],
      metric: "28s", metricLabel: t('intelOmniMetricLabel') },
    { key: "meta", badge: t('intelMetaBadge'), title: t('intelMetaTitle'), desc: t('intelMetaDesc'),
      points: [t('intelMetaP1'), t('intelMetaP2'), t('intelMetaP3'), t('intelMetaP4')],
      flow: [t('intelMetaF1'), t('intelMetaF2'), t('intelMetaF3'), t('intelMetaF4')],
      metric: "8.4×", metricLabel: t('intelMetaMetricLabel') },
    { key: "reviews", badge: t('intelReviewsBadge'), title: t('intelReviewsTitle'), desc: t('intelReviewsDesc'),
      points: [t('intelReviewsP1'), t('intelReviewsP2'), t('intelReviewsP3'), t('intelReviewsP4')],
      flow: [t('intelReviewsF1'), t('intelReviewsF2'), t('intelReviewsF3'), t('intelReviewsF4')],
      metric: "4.9", metricLabel: t('intelReviewsMetricLabel') },
    { key: "seo", badge: t('intelSeoBadge'), title: t('intelSeoTitle'), desc: t('intelSeoDesc'),
      points: [t('intelSeoP1'), t('intelSeoP2'), t('intelSeoP3'), t('intelSeoP4')],
      flow: [t('intelSeoF1'), t('intelSeoF2'), t('intelSeoF3'), t('intelSeoF4')],
      metric: "+31%", metricLabel: t('intelSeoMetricLabel') },
    { key: "voice", badge: t('intelVoiceBadge'), title: t('intelVoiceTitle'), desc: t('intelVoiceDesc'),
      points: [t('intelVoiceP1'), t('intelVoiceP2'), t('intelVoiceP3'), t('intelVoiceP4')],
      flow: [t('intelVoiceF1'), t('intelVoiceF2'), t('intelVoiceF3'), t('intelVoiceF4')],
      metric: "24/7", metricLabel: t('intelVoiceMetricLabel') },
    { key: "booking", badge: t('intelBookingBadge'), title: t('intelBookingTitle'), desc: t('intelBookingDesc'),
      points: [t('intelBookingP1'), t('intelBookingP2'), t('intelBookingP3'), t('intelBookingP4')],
      flow: [t('intelBookingF1'), t('intelBookingF2'), t('intelBookingF3'), t('intelBookingF4')],
      metric: "3×", metricLabel: t('intelBookingMetricLabel') },
  ];

  const INDUSTRIES = INDUSTRY_IMGS.map((img, i) => ({
    ...img,
    name: t(`ind${i + 1}Name` as any),
    desc: t(`ind${i + 1}Desc` as any),
  }));

  const DEMOS: Record<string, Array<{ f: string; t: string }>> = {
    "Aesthetic Clinic": [
      { f: "u", t: "Hi, I want a lip filler consultation" },
      { f: "a", t: "Hi! I'm Aria from Glow Aesthetics. We have Thursday 3pm or Friday 11am with Dr. Sarah — which works?" },
      { f: "u", t: "Thursday 3pm please" },
      { f: "a", t: "Confirmed for Thursday at 3pm. Sending details to your WhatsApp now. Any questions about the treatment?" },
    ],
    "Real Estate": [
      { f: "u", t: "Is the Bayview Road listing still available?" },
      { f: "a", t: "Yes! Beautiful 3-bed, 2-bath — listed this week. Ready to book a viewing? I can arrange one as early as tomorrow." },
      { f: "u", t: "Tomorrow afternoon works" },
      { f: "a", t: "Viewing confirmed for tomorrow at 2:30pm. Agent Marcus will meet you there. Full details sent to your number." },
    ],
    "Restaurant": [
      { f: "u", t: "Table for 4 this Saturday?" },
      { f: "a", t: "Welcome to Ember! We have 7pm or 8:30pm Saturday for 4. Any special occasion or dietary needs?" },
      { f: "u", t: "7pm — our anniversary" },
      { f: "a", t: "Confirmed: table for 4 at 7pm Saturday. Noted your anniversary — the team will make it special!" },
    ],
    "Legal Firm": [
      { f: "u", t: "I need advice on a commercial dispute" },
      { f: "a", t: "Our team handles commercial disputes regularly. I can book a 30-min consultation with a senior partner — this week?" },
      { f: "u", t: "Thursday morning" },
      { f: "a", t: "Thursday 10am confirmed. You will receive a brief beforehand so we can make the most of your time." },
    ],
  };

  const demoTabs = ["Aesthetic Clinic", "Real Estate", "Restaurant", "Legal Firm"];

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

  const prices = annual
    ? { starter: { usd: 399, aed: "1,480" }, growth: { usd: 799, aed: "2,960" } }
    : { starter: { usd: 499, aed: "1,850" }, growth: { usd: 999, aed: "3,700" } };
  const billed = annual ? t('pricingBilledAnnually') : "";

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
                {t('badge')}
              </div>
            </div>
            <h1 className="hero-heading">
              {t('heroTitle')}<br />
              <em>{t('heroTitleEm')}</em>
            </h1>
            <p className="hero-sub">{t('heroSub')}</p>
            <div className="hero-channels">
              {[["💚", "WhatsApp"], ["🟣", "Instagram"], ["🔵", "Messenger"], ["🌐", "Web Chat"], ["📞", "Voice AI"]].map(([ic, l]) => (
                <div key={l} className="hero-channel-pill"><span>{ic}</span>{l}</div>
              ))}
            </div>
            <div className="hero-ctas" style={{ marginTop: 32 }}>
              <Link href={SIGNUP_URL} className="btn btn-primary btn-lg">
                {t('heroCta1')}
                <svg className="btn-arrow" width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
                {t('heroCta2')}
              </a>
            </div>
            <p style={{ fontSize: 12, color: "var(--ink-4)", marginTop: 14, fontWeight: 400 }}>
              {t('heroBadge')}
            </p>
          </div>

          {/* Dashboard preview */}
          <div className="hero-visual">
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
              ["48h", t('trustTitle'), t('trustSub1')],
              ["24/7", t('trust247'), t('trust247sub')],
              ["8+", t('trust8plus'), t('trust8plusSub')],
              ["4+", t('trust4plus'), t('trust4plusSub')],
              [t('trustRevOS'), t('trustRevOSTitle'), t('trustRevOSSub')],
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
              <span className="eyebrow">{t('selfLearningEyebrow')}</span>
              <h2 className="display-lg">{t('selfLearningH2')} <span className="text-serif-em" style={{ color: "var(--blue)" }}>{t('selfLearningH2Em')}</span></h2>
              <p className="body-lg">{t('selfLearningP1')}</p>
              <p className="body-md">{t('selfLearningP2')}</p>
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">{t('selfLearningCta')}</a>
            </div>
            <div className="learning-flow-card">
              {[
                ["01", t('flowStep1Title'), t('flowStep1Desc')],
                ["02", t('flowStep2Title'), t('flowStep2Desc')],
                ["03", t('flowStep3Title'), t('flowStep3Desc')],
                ["04", t('flowStep4Title'), t('flowStep4Desc')],
                ["05", t('flowStep5Title'), t('flowStep5Desc')],
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
            <span className="eyebrow">{t('intelligenceEyebrow')}</span>
            <h2 className="display-lg">{t('intelligenceH2')} <span className="text-serif-em" style={{ color: "var(--blue)" }}>{t('intelligenceH2Em')}</span></h2>
            <p className="body-lg" style={{ marginTop: 14, maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>{t('intelligenceDesc')}</p>
          </div>

          <div className="intelligence-shell">
            <div className="intelligence-tabs" role="tablist">
              {INTELLIGENCE_FEATURES.map((feature, index) => (
                <button key={feature.key} type="button" className={`intelligence-tab${activeIntelligence === index ? " active" : ""}`} onClick={() => setActiveIntelligence(index)}>
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
                        {feature.points.map((point) => <span key={point}>✓ {point}</span>)}
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
            <span className="eyebrow">{t('whyDiffEyebrow')}</span>
            <h2 className="display-lg">{t('whyDiffH2')} <span className="text-serif-em" style={{ color: "var(--ink-3)" }}>{t('whyDiffH2Em')}</span></h2>
          </div>
          <div className="difference-grid">
            <div className="difference-card muted">
              <h3>{t('traditionalCrmTitle')}</h3>
              {['Stores leads', 'Stores conversations', 'Stores appointments', 'Stores reports', 'Requires manual follow-up'].map((item) => (
                <div className="difference-row" key={item}><span>—</span>{item}</div>
              ))}
            </div>
            <div className="difference-card highlighted">
              <h3>{t('leadosTitle')}</h3>
              {['Answers instantly', 'Books appointments', 'Learns from outcomes', 'Tracks real revenue', 'Improves future performance'].map((item) => (
                <div className="difference-row" key={item}><span>✓</span>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT PROOF ── */}
      <section id="proof" style={{ padding: "88px 0", background: "white" }}>
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">{t('proofEyebrow')}</span>
            <h2 className="display-lg">{t('proofH2')}<br /><span className="text-serif-em" style={{ color: "var(--ink-3)" }}>{t('proofH2Em')}</span></h2>
            <p className="body-lg" style={{ marginTop: 14, maxWidth: 500, marginLeft: "auto", marginRight: "auto" }}>{t('proofDesc')}</p>
          </div>

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
              <div className="sf-url">{["app.leadoscrm.com/inbox", "app.leadoscrm.com/voice", "app.leadoscrm.com/reports", "app.leadoscrm.com/bookings"][proofTab]}</div>
            </div>
            <div className="screenshot-content">
              {proofTab === 0 && (
                <div style={{ display: "flex", gap: 0, height: 340 }}>
                  <div style={{ width: 200, borderRight: "1px solid var(--border)", padding: 12, flexShrink: 0 }}>
                    <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 8, padding: "7px 10px", fontSize: 12, color: "var(--ink-4)", marginBottom: 10 }}>🔍 Search...</div>
                    {[{ bg: "rgba(34,197,94,.1)", ic: "💚", n: "Sarah M.", p: "Thursday 3pm?", t: "2m", on: true }, { bg: "rgba(168,85,247,.1)", ic: "🟣", n: "James K.", p: "Price for full set?", t: "5m", on: false }, { bg: "rgba(59,130,246,.1)", ic: "🔵", n: "Aisha R.", p: "Payment plans?", t: "8m", on: false }].map((c) => (
                      <div key={c.n} style={{ display: "flex", gap: 8, padding: "9px 8px", borderRadius: 8, background: c.on ? "var(--blue-50)" : "transparent", marginBottom: 2 }}>
                        <div style={{ width: 26, height: 26, borderRadius: "50%", background: c.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>{c.ic}</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ fontSize: 12, fontWeight: 600 }}>{c.n}</span>
                            <span style={{ fontSize: 10, color: "var(--ink-4)" }}>{c.t}</span>
                          </div>
                          <div style={{ fontSize: 11, color: "var(--ink-4)" }}>{c.p}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ flex: 1, padding: 16 }}>
                    <div style={{ marginBottom: 14, paddingBottom: 12, borderBottom: "1px solid var(--border)" }}>
                      <div style={{ fontSize: 13.5, fontWeight: 600 }}>Sarah M.</div>
                      <div style={{ fontSize: 11, color: "var(--green)" }}>● Active on WhatsApp</div>
                    </div>
                    {[{ ai: false, t: "Hi, do you have availability for a lip filler consultation?" }, { ai: true, t: "Hi Sarah! I'm Aria ✨ We have Thursday 3pm or Friday 11am — which works?" }, { ai: false, t: "Thursday 3pm please!" }].map((m, i) => (
                      <div key={i} style={{ display: "flex", gap: 8, marginBottom: 10, flexDirection: m.ai ? "row-reverse" : "row" }}>
                        <div style={{ width: 24, height: 24, borderRadius: "50%", background: m.ai ? "linear-gradient(135deg,#2563eb,#4f46e5)" : "var(--surface-2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: m.ai ? "white" : "var(--ink-3)" }}>{m.ai ? "🤖" : "👩"}</div>
                        <div style={{ fontSize: 13, padding: "8px 12px", borderRadius: 11, maxWidth: 280, background: m.ai ? "rgba(37,99,235,.07)" : "var(--surface-2)" }}>{m.t}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {proofTab !== 0 && (
                <div style={{ height: 340, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ink-4)", fontSize: 14 }}>
                  {["app.leadoscrm.com/inbox", "app.leadoscrm.com/voice", "app.leadoscrm.com/reports", "app.leadoscrm.com/bookings"][proofTab]}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "88px 0", background: "var(--surface-2)" }}>
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">{t('howWorksEyebrow')}</span>
            <h2 className="display-lg">{t('howWorksH2')} <span className="text-serif-em" style={{ color: "var(--ink-3)" }}>{t('howWorksH2Em')}</span></h2>
            <p className="body-md" style={{ marginTop: 14, maxWidth: 500, marginLeft: "auto", marginRight: "auto" }}>{t('howWorksDesc')}</p>
          </div>
          <div className="how-steps">
            {[
              { n: "01", icon: "💬", h: t('howStep1H'), p: t('howStep1P') },
              { n: "02", icon: "🤖", h: t('howStep2H'), p: t('howStep2P') },
              { n: "03", icon: "📅", h: t('howStep3H'), p: t('howStep3P') },
              { n: "04", icon: "📊", h: t('howStep4H'), p: t('howStep4P') },
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

      {/* ── WHERE REVENUE DISAPPEARS ── */}
      <section className="lead-leak-section" style={{ padding: "88px 0" }}>
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">{t('problemEyebrow')}</span>
            <h2 className="display-lg">{t('problemH2')} <span className="text-serif-em" style={{ color: "var(--red)" }}>{t('problemH2Em')}</span></h2>
            <p className="body-md" style={{ marginTop: 14, maxWidth: 500, marginLeft: "auto", marginRight: "auto" }}>{t('problemDesc')}</p>
          </div>
          <div className="leak-flow">
            {[
              ["📣", t('leakStep1L'), t('leakStep1S')],
              ["💬", t('leakStep2L'), t('leakStep2S')],
              ["⏳", t('leakStep3L'), t('leakStep3S')],
              ["🔇", t('leakStep4L'), t('leakStep4S')],
              ["❌", t('leakStep5L'), t('leakStep5S')],
            ].map(([ic, l, s], i) => (
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
            <div className="leak-divider-label">{t('leakWithLeados')}</div>
            <div className="leak-divider-line" />
          </div>
          <div className="leak-solution">
            {[
              ["⚡", t('leakSol1H'), t('leakSol1P')],
              ["🤖", t('leakSol2H'), t('leakSol2P')],
              ["📅", t('leakSol3H'), t('leakSol3P')],
              ["📊", t('leakSol4H'), t('leakSol4P')],
            ].map(([ic, h, p]) => (
              <div key={h as string} className="leak-sol-card">
                <div className="leak-sol-icon">{ic}</div>
                <div className="leak-sol-h" style={{ color: "var(--blue)" }}>{h}</div>
                <div className="leak-sol-p">{p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: "88px 0", background: "white" }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">{t('featuresEyebrow')}</span>
            <h2 className="display-lg">{t('featuresH2')}<br /><span className="text-serif-em" style={{ color: "var(--ink-3)" }}>{t('featuresH2Em')}</span></h2>
            <p className="body-lg" style={{ marginTop: 14, maxWidth: 520 }}>{t('featuresDesc')}</p>
          </div>
          <div className="features-grid">
            <div className="feature-card featured">
              <div>
                <div className="feat-icon-wrap"><span>📥</span></div>
                <div className="feat-outcome">{t('featFeaturedOutcome')}</div>
                <div className="feat-h">{t('featFeaturedH')}</div>
                <div className="feat-p">{t('featFeaturedP')}</div>
                <div className="feat-tags">{["WhatsApp", "Instagram", "Messenger", "Live Chat"].map((tag) => <span key={tag} className="feat-tag">{tag}</span>)}</div>
              </div>
            </div>
            {[
              { icon: "🤖", outcome: t('feat1Outcome'), h: t('feat1H'), p: t('feat1P'), tags: ["24/7", "Multilingual", "Smart Routing"] },
              { icon: "📞", outcome: t('feat2Outcome'), h: t('feat2H'), p: t('feat2P'), tags: ["Inbound Calls", "Outbound Follow-up", "Transcripts"] },
              { icon: "📅", outcome: t('feat3Outcome'), h: t('feat3H'), p: t('feat3P'), tags: ["Calendar Sync", "Auto-Reminders", "No-Show Reduction"] },
              { icon: "📊", outcome: t('feat4Outcome'), h: t('feat4H'), p: t('feat4P'), tags: ["ROI Tracking", "Source Attribution", "Team Performance"] },
              { icon: "🔀", outcome: t('feat5Outcome'), h: t('feat5H'), p: t('feat5P'), tags: ["Smart Escalation", "Full Context", "Team Alerts"] },
              { icon: "🌍", outcome: t('feat6Outcome'), h: t('feat6H'), p: t('feat6P'), tags: ["Auto-Detect", "10+ Languages"] },
              { icon: "🔁", outcome: t('feat7Outcome'), h: t('feat7H'), p: t('feat7P'), tags: ["Drip Sequences", "Re-engagement"] },
              { icon: "🏢", outcome: t('feat8Outcome'), h: t('feat8H'), p: t('feat8P'), tags: ["Multi-Branch", "Unified Reports"] },
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

      {/* ── VOICE AI ── */}
      <section id="voice-ai" style={{ padding: "88px 0", background: "var(--surface-2)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 72, alignItems: "center" }}>
            <div>
              <span className="eyebrow">{t('voiceAiEyebrow')}</span>
              <h2 className="display-lg" style={{ marginBottom: 14 }}>{t('voiceAiH2')}<br /><span className="text-serif-em" style={{ color: "var(--blue)" }}>{t('voiceAiH2Em')}</span></h2>
              <p className="body-md" style={{ marginBottom: 28 }}>{t('voiceAiDesc')}</p>
              {[["📱", "Answers inbound calls instantly", "No hold music. No missed calls. AI greets the caller in their language."], ["📅", "Books appointments during the call", "Accesses your real-time availability and confirms a slot."], ["🌙", "Handles after-hours enquiries", "Calls at 11pm get the same service as 11am."], ["🔀", "Escalates to humans when needed", "If a call requires personal attention, the AI transfers seamlessly."], ["📋", "Logs full call transcripts", "Every call transcribed, tagged, and stored."]].map(([ic, h, p]) => (
                <div key={h as string} style={{ display: "flex", gap: 14, paddingTop: 16, paddingBottom: 16, borderBottom: "1px solid var(--border)" }}>
                  <div style={{ width: 34, height: 34, borderRadius: 9, background: "rgba(79,70,229,.1)", border: "1px solid rgba(79,70,229,.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0 }}>{ic}</div>
                  <div>
                    <div style={{ fontSize: 14.5, fontWeight: 600, marginBottom: 3 }}>{h}</div>
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
            <div className="voice-call-sim">
              <div className="vcall-header">
                <div className="vcall-avatar">🤖</div>
                <div><div className="vcall-name">Aria — LeadOS Voice AI</div><div className="vcall-status">● Active Call — Handling Booking</div></div>
                <div className="vcall-live"><span className="live-dot" />Live</div>
              </div>
              <div className="vcall-body">
                {[
                  { ai: false, t: "Hi, I want to book a HydraFacial for today." },
                  { ai: true, t: "Hi! I'm Aria. We have availability at 5pm today — shall I book it?" },
                  { ai: false, t: "Yes please." },
                  { ai: true, t: "Booked! Your HydraFacial is confirmed for today at 5pm ✓" },
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
              <div className="meta-pill"><span /> {t('metaBrainPill')}</div>
              <h2 className="meta-title">{t('metaBrainH2')} <span>{t('metaBrainH2Em')}</span></h2>
              <p className="meta-lead">{t('metaBrainDesc')}</p>
              <div className="meta-journey">
                {[["01", "Campaign starts", "Meta, Google or social campaigns begin bringing new conversations."], ["02", "LeadOS captures the lead", "Every enquiry is tagged with source, service, channel and intent."], ["03", "AI moves the lead", "AI replies, qualifies, follows up and helps convert the conversation."], ["04", "Revenue is tracked", "Bookings and attributed revenue show which campaigns are actually profitable."]].map(([n, h, p]) => (
                  <div className="meta-step" key={h}><div className="meta-step-num">{n}</div><div><div className="meta-step-title">{h}</div><div className="meta-step-text">{p}</div></div></div>
                ))}
              </div>
              <div className="meta-actions">
                <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">Book Demo →</a>
                <a href="#pricing" className="btn btn-secondary btn-lg">View Pricing</a>
              </div>
            </div>
            <div className="meta-dashboard-card">
              <div className="meta-dashboard-top"><div>Meta Brain Dashboard</div><span>Live ROI</span></div>
              <div className="meta-kpis">
                {[["Ad Spend", "$4,820", "this month"], ["Cost / Booking", "$23", "↓ 34%"], ["Revenue Tracked", "$38.4k", "8× ROAS"]].map(([l, v, c]) => (
                  <div className="meta-kpi" key={l}><small>{l}</small><strong>{v}</strong><span>{c}</span></div>
                ))}
              </div>
              <div className="meta-insight-premium"><b>AI Insight</b><p>HydraFacial leads are converting 2.7× higher from Instagram. Increase budget and pause weak creatives.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIVE DEMO ── */}
      <section className="demo-light-section">
        <div className="container demo-container-wide">
          <div className="section-header center">
            <span className="eyebrow">{t('demoEyebrow')}</span>
            <h2 className="display-lg">{t('demoH2')} <span className="text-serif-em" style={{ color: "var(--blue)" }}>{t('demoH2Em')}</span></h2>
            <p className="body-md" style={{ marginTop: 14, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>{t('demoDesc')}</p>
          </div>
          <div className="demo-wrap">
            <div className="demo-left">
              <div className="demo-slabel">{t('demoSelectLabel')}</div>
              <div className="demo-tabs">
                {demoTabs.map((k) => (
                  <button key={k} className={`d-tab${activeDemo === k ? " on" : ""}`} onClick={() => switchDemo(k)}>{k}</button>
                ))}
              </div>
              <div className="demo-hd">Qualify, answer, book.<br />Automatically.</div>
              <p className="demo-sub">Watch the AI handle a <strong style={{ color: "var(--ink)" }}>{activeDemo}</strong> enquiry — from first message to confirmed booking.</p>
              <div className="demo-info">{t('demoInfo')}</div>
              <button className="demo-cta-btn" onClick={() => window.open(BOOK_URL, "_blank")}>{t('demoCta')}</button>
            </div>
            <div className="demo-right">
              <div className="demo-chat-hdr">
                <div className="demo-ai-av">🤖</div>
                <div><div className="demo-ai-name">{t('demoAiName')}</div><div className="demo-ai-status">{t('demoAiStatus')}</div></div>
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
                <input className="demo-inp" value={demoInput} onChange={(e) => setDemoInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendDemo()} placeholder={t('demoPlaceholder')} />
                <button className="demo-send" onClick={sendDemo}>{t('demoSend')}</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section id="industries" className="industries-detail-section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">{t('industriesEyebrow')}</span>
            <h2 className="display-lg">{t('industriesH2')} <span className="text-serif-em" style={{ color: "var(--blue)" }}>{t('industriesH2Em')}</span></h2>
            <p className="body-lg" style={{ marginTop: 14, maxWidth: 650, marginLeft: "auto", marginRight: "auto" }}>{t('industriesDesc')}</p>
          </div>
          <div className="industries-detail-grid">
            {INDUSTRIES.map((industry, idx) => {
              const details: string[][] = [
                ["AI answers treatment enquiries instantly", "Books consultations with the right doctor or therapist", "Follows up on missed leads, offers and reviews"],
                ["Handles treatment questions and appointment requests", "Reduces no-shows with automated reminders", "Tracks which campaigns bring booked patients"],
                ["Routes enquiries by department, doctor and service", "Captures patient intake before the visit", "Keeps managers aware of response and booking performance"],
                ["Qualifies buyers and tenants by budget, area and timeline", "Schedules viewings from WhatsApp or website chat", "Shows which agents and sources convert best"],
                ["Takes reservations from social and website messages", "Recovers cancellations and missed booking requests", "Triggers review and repeat-visit follow-ups"],
                ["Collects enquiry details before consultation", "Routes leads to the right specialist or team", "Tracks source, follow-up and conversion performance"],
                ["Answers course and admission enquiries", "Automates student follow-up and enrolment reminders", "Shows which campaigns generate qualified applicants"],
                ["Captures job details, location and urgency", "Requests photos or extra details automatically", "Routes jobs and follows up on quotes"],
              ];
              return (
                <article className="industry-detail-card" key={industry.name}>
                  <div className="industry-image-wrap">
                    <img src={industry.img} alt={`${industry.name} using LeadOS`} />
                    <span>{industry.icon}</span>
                  </div>
                  <div className="industry-detail-body">
                    <h3>{industry.name}</h3>
                    <p>{industry.desc}</p>
                    <ul>{(details[idx] || []).map((item) => <li key={item}>✓ {item}</li>)}</ul>
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
            <span className="eyebrow">{t('roiEyebrow')}</span>
            <h2 className="display-lg">{t('roiH2')} <span className="text-serif-em" style={{ color: "var(--ink-3)" }}>{t('roiH2Em')}</span></h2>
            <p className="body-md" style={{ marginTop: 14, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>{t('roiDesc')}</p>
          </div>
          <div className="roi-grid">
            {[
              { n: "3×", h: "More Appointments Booked", p: "Instant 24/7 responses mean significantly more conversions from the same lead volume." },
              { n: "94%", h: "Faster First Response", p: "Average reply drops from hours to under 28 seconds. First to respond wins the booking." },
              { n: "67%", h: "Cold Leads Recovered", p: "Follow-up automation re-engages leads who went quiet." },
              { n: "40%", h: "Fewer No-Shows", p: "Automated appointment reminders and confirmation sequences keep your calendar full." },
              { n: "24/7", h: "Always On Receptionist", p: "Your AI handles every enquiry without staff." },
              { n: "8×", h: "ROAS with Meta Brain", p: "Connecting ad spend to actual bookings delivers unmatched campaign performance visibility." },
            ].map((r) => (
              <div key={r.n} className="roi-card">
                <div className="roi-number">{r.n}</div>
                <div className="roi-h">{r.h}</div>
                <div className="roi-p">{r.p}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", fontSize: 12, color: "var(--ink-4)", marginTop: 18 }}>{t('roiNote')}</p>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "88px 0", background: "white" }}>
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">{t('testimonialsEyebrow')}</span>
            <h2 className="display-lg">{t('testimonialsH2')} <span className="text-serif-em" style={{ color: "var(--blue)" }}>{t('testimonialsH2Em')}</span></h2>
            <p className="body-md" style={{ marginTop: 14, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>{t('testimonialsDesc')}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 48 }}>
            {[
              { quote: "We used to miss leads every night after closing time. Now LeadOS handles all our WhatsApp enquiries 24/7 and books consultations automatically. We saw a 40% jump in confirmed appointments in the first month.", name: "Dr. Nour Al-Hassan", role: "Medical Director", company: "Glow Aesthetics Clinic", city: "Sydney, Australia", avatar: "👩‍⚕️", stars: 5 },
              { quote: "The Meta Brain feature is what sold me. I can finally see which Facebook ad actually led to a booking. We cut our cost per booking by 35% in 6 weeks.", name: "Ahmed Al-Mansoori", role: "Founder", company: "Palm Property Group", city: "Dubai, UAE", avatar: "🏠", stars: 5 },
              { quote: "Our reception team was overwhelmed with calls and WhatsApp messages. LeadOS now handles the first reply, qualifies the patient, and books them in.", name: "Sarah Mitchell", role: "Practice Manager", company: "Smile Dental Centre", city: "Sydney, Australia", avatar: "🦷", stars: 5 },
            ].map((t) => (
              <div key={t.name} style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 16, padding: 28, display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "flex", gap: 2 }}>{Array.from({ length: t.stars }).map((_, i) => <span key={i} style={{ color: "#f59e0b", fontSize: 16 }}>★</span>)}</div>
                <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "var(--ink-2)", fontStyle: "italic", flex: 1 }}>&ldquo;{t.quote}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 42, height: 42, borderRadius: "50%", background: "linear-gradient(135deg, rgba(37,99,235,.12), rgba(124,58,237,.12))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontSize: 13.5, fontWeight: 700 }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "var(--ink-4)" }}>{t.role}, {t.company}</div>
                    <div style={{ fontSize: 11, color: "var(--ink-5)", marginTop: 1 }}>📍 {t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADD-ONS ── */}
      <section style={{ padding: "72px 0", background: "white" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: "linear-gradient(135deg, #0f172a, #1e1b4b)", borderRadius: 24, padding: "52px 48px", display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center" }}>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(129,140,248,.15)", border: "1px solid rgba(129,140,248,.25)", borderRadius: 40, padding: "5px 14px", fontSize: 11, fontWeight: 700, color: "#a5b4fc", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 20 }}>{t('addonsAutoSeoAddon')}</div>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 900, color: "white", lineHeight: 1.2, marginBottom: 14 }}>{t('addonsAutoSeoH2')}</h2>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.7, maxWidth: 520, marginBottom: 28 }}>{t('addonsAutoSeoDesc')}</p>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <a href="/auto-seo" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #4f46e5, #7c3aed)", color: "white", fontWeight: 700, fontSize: 14, padding: "12px 26px", borderRadius: 10, textDecoration: "none" }}>{t('addonsAutoSeoLearn')}</a>
                  <a href="/auto-seo#get-started" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.75)", fontWeight: 600, fontSize: 14, padding: "12px 26px", borderRadius: 10, textDecoration: "none", border: "1px solid rgba(255,255,255,.12)" }}>{t('addonsAutoSeoGetStarted')}</a>
                </div>
              </div>
            </div>

            <div style={{ background: "linear-gradient(135deg, #0c1a3a, #0f172a, #0a1628)", borderRadius: 24, padding: "52px 48px", display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center", border: "1px solid rgba(37,99,235,.2)" }}>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(37,99,235,.12)", border: "1px solid rgba(37,99,235,.25)", borderRadius: 40, padding: "5px 14px", fontSize: 11, fontWeight: 700, color: "#93c5fd", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 20 }}>{t('addonsBrainAddon')}</div>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 900, color: "white", lineHeight: 1.2, marginBottom: 14 }}>{t('addonsBrainH2')}</h2>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.7, maxWidth: 520, marginBottom: 28 }}>{t('addonsBrainDesc')}</p>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <a href="/company-brain" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #2563eb, #7c3aed)", color: "white", fontWeight: 700, fontSize: 14, padding: "12px 26px", borderRadius: 10, textDecoration: "none" }}>{t('addonsBrainLearn')}</a>
                  <a href="/company-brain#get-started" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.75)", fontWeight: 600, fontSize: 14, padding: "12px 26px", borderRadius: 10, textDecoration: "none", border: "1px solid rgba(255,255,255,.12)" }}>{t('addonsBrainStart')}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: "88px 0", background: "var(--surface-2)" }}>
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">{t('pricingEyebrow')}</span>
            <h2 className="display-lg">{t('pricingH2')} <span className="text-serif-em" style={{ color: "var(--ink-3)" }}>{t('pricingH2Em')}</span></h2>
            <p className="body-md" style={{ marginTop: 14, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>{t('pricingDesc')}</p>
          </div>

          <div className="pricing-toggle">
            <span className={`pricing-toggle-label${!annual ? " active" : ""}`}>{t('pricingMonthly')}</span>
            <div className={`toggle-track${annual ? " on" : ""}`} onClick={() => setAnnual(!annual)}><div className="toggle-thumb" /></div>
            <span className={`pricing-toggle-label${annual ? " active" : ""}`}>{t('pricingAnnual')}</span>
            {annual && <span className="save-badge">{t('pricingSave20')}</span>}
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="p-tier">{t('pricingStarter')}</div>
              <div className="p-tagline">{t('pricingStarterTagline')}</div>
              <div className="p-price">USD {prices.starter.usd}<span className="p-per">/month{billed}</span></div>
              <div className="p-sub-price" style={{ opacity: 0.55, fontSize: 12 }}>AED {prices.starter.aed} / month</div>
              <hr className="p-divider" />
              <ul className="p-feats">{["2 users", "1,000 AI chats / month", "Omni Inbox", "Website Chat", "Contacts", "Pipeline", "AI Assistant", "Basic Reporting"].map((f) => <li key={f} className="p-feat"><span className="p-check">✓</span>{f}</li>)}</ul>
              <Link href="/get-started?plan=starter" className="p-btn pb-outline" style={{ display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>{t('heroCta1')} →</Link>
            </div>

            <div className="pricing-card popular">
              <div className="popular-pill">{t('pricingMostPopular')}</div>
              <div className="p-tier">{t('pricingGrowth')}</div>
              <div className="p-tagline">{t('pricingGrowthTagline')}</div>
              <div className="p-price">USD {prices.growth.usd}<span className="p-per">/month{billed}</span></div>
              <div className="p-sub-price" style={{ opacity: 0.6, fontSize: 12 }}>AED {prices.growth.aed} / month</div>
              <hr className="p-divider" />
              <ul className="p-feats">{["10 users", "10,000 AI chats / month", "Everything in Starter", "WhatsApp Integration", "AI Sales Assistant", "Customer Memory", "Bookings & Calendar", "Reviews Foundation", "Revenue Attribution", "Reporting Suite"].map((f) => <li key={f} className="p-feat"><span className="p-check">✓</span>{f}</li>)}</ul>
              <Link href="/get-started?plan=growth" className="p-btn pb-solid" style={{ display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>{t('heroCta1')} →</Link>
            </div>

            <div className="pricing-card">
              <div className="p-tier">{t('pricingEnterprise')}</div>
              <div className="p-tagline">{t('pricingEnterpriseTagline')}</div>
              <div className="p-price">{t('pricingEnterprisePrice')}</div>
              <div className="p-sub-price">{t('pricingEnterpriseSub')}</div>
              <hr className="p-divider" />
              <ul className="p-feats">{["Everything in Growth", "Voice AI", "Multi-Location Support", "Advanced Marketing Brain", "Custom AI Training", "Priority Support", "Dedicated Onboarding"].map((f) => <li key={f} className="p-feat"><span className="p-check">✓</span>{f}</li>)}</ul>
              <a href={SALES_URL} target="_blank" rel="noopener noreferrer" className="p-btn pb-outline" style={{ display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>{t('pricingContactSales')}</a>
            </div>
          </div>
          <p className="p-note">{t('pricingNote')}</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: "88px 0", background: "var(--surface-2)" }}>
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">{t('faqEyebrow')}</span>
            <h2 className="display-lg">{t('faqH2')} <span className="text-serif-em" style={{ color: "var(--ink-3)" }}>{t('faqH2Em')}</span></h2>
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
            <span className="eyebrow">{t('founderEyebrow')}</span>
            <h2 className="display-lg">{t('founderH2')}</h2>
            <p className="body-lg">{t('founderP1')}</p>
            <p className="body-md">{t('founderP2')}</p>
            <p className="body-md" style={{ marginTop: 14 }}>{t('founderP3')}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 32, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,.1)" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg, #00C8F0, #2563EB, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>👨‍💻</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "rgba(255,255,255,.9)" }}>{t('founderName')}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,.45)", marginTop: 2 }}>{t('founderRole')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="final-cta-section">
        <div className="container final-inner">
          <span className="eyebrow" style={{ color: "rgba(255,255,255,.3)", display: "block", marginBottom: 14, textAlign: "center" }}>{t('finalEyebrow')}</span>
          <h2 className="final-h">{t('finalH2')}<br /><em>{t('finalH2Em')}</em></h2>
          <p className="final-sub">{t('finalSub')}</p>
          <div className="final-ctas">
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              {t('finalCta1')}
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a href={SALES_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg" style={{ color: "rgba(255,255,255,.7)", borderColor: "rgba(255,255,255,.15)", background: "rgba(255,255,255,.07)" }}>{t('finalCta2')}</a>
          </div>
          <p className="final-note">{t('finalNote')}</p>
          <div className="final-contact-links">
            <a href="mailto:hello@leadoscrm.com">hello@leadoscrm.com</a>
            <span>•</span>
            <a href="tel:+61451095700">🇦🇺 +61 451 095 700</a>
            <span>•</span>
            <a href="tel:+971568350424">🇦🇪 +971 56 835 0424</a>
          </div>
        </div>
      </section>

      {/* ── FLOATING PILL ── */}
      <div className="float-pill">
        <Link href="/get-started">{t('floatPill')}</Link>
      </div>

      {/* ── MOBILE STICKY CTA ── */}
      <div className="mobile-cta">
        <Link href="/get-started" className="mobile-cta-primary">{t('mobileCta1')}</Link>
        <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="mobile-cta-secondary">{t('mobileCta2')}</a>
      </div>
    </>
  );
}

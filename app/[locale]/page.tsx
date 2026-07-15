"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from 'next-intl';

const BOOK_URL = "https://wa.me/971568350424?text=Hi%20LeadOS%2C%20I%20would%20like%20to%20book%20a%20demo";
const SALES_URL = "https://wa.me/971568350424?text=Hi%20LeadOS%2C%20I%20would%20like%20to%20discuss%20Enterprise";
const SIGNUP_URL = "/get-started";

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

/* ── Brand SVG Icons ── */
const WHATSAPP_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.979-1.303A9.954 9.954 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fill="#25D366"/>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="white"/>
  </svg>
);

const INSTAGRAM_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="ig-g" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#F58529"/>
        <stop offset="50%" stopColor="#DD2A7B"/>
        <stop offset="100%" stopColor="#8134AF"/>
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#ig-g)"/>
    <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8" fill="none"/>
    <circle cx="17.2" cy="6.8" r="1.1" fill="white"/>
  </svg>
);

const MESSENGER_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#0084FF"/>
    <path d="M12 6C8.686 6 6 8.507 6 11.6c0 1.638.707 3.104 1.838 4.135V18l1.987-1.09A6.5 6.5 0 0012 17.2c3.314 0 6-2.507 6-5.6S15.314 6 12 6z" fill="white"/>
    <path d="M11 13.5l-2.5-2.5 4.8-2.5-2.3 2.5 2.5 2.5-4.8 2.5 2.3-2.5z" fill="#0084FF"/>
  </svg>
);

const WEBCHAT_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#4f46e5"/>
    <path d="M7 9h10M7 12h7M7 15h5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const VOICEAI_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#f97316"/>
    <path d="M9 8a3 3 0 016 0v4a3 3 0 01-6 0V8z" fill="white"/>
    <path d="M7 13a5 5 0 0010 0" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    <line x1="12" y1="18" x2="12" y2="20" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="9" y1="20" x2="15" y2="20" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const CHANNEL_PILLS = [
  { icon: WHATSAPP_ICON, label: "WhatsApp" },
  { icon: INSTAGRAM_ICON, label: "Instagram" },
  { icon: MESSENGER_ICON, label: "Messenger" },
  { icon: WEBCHAT_ICON, label: "Web Chat" },
  { icon: VOICEAI_ICON, label: "Voice AI" },
];

/* ── Animated CRM Flow Diagram ── */
function CrmFlowDiagram() {
  const W = 820, H = 300;
  const HUB_X = W / 2, HUB_Y = H / 2;
  const LEFT_X = 100, RIGHT_X = W - 100;

  const channels = [
    { label: "WhatsApp", color: "#22c55e", y: 54 },
    { label: "Instagram", color: "#a855f7", y: 118 },
    { label: "Phone", color: "#f97316", y: 182 },
    { label: "Website", color: "#3b82f6", y: 246 },
  ];
  const outcomes = [
    { label: "Replied in 28s", color: "#22c55e", y: 54 },
    { label: "Booking Confirmed", color: "#3b82f6", y: 118 },
    { label: "Revenue Tracked", color: "#7c3aed", y: 182 },
    { label: "Review Sent", color: "#f59e0b", y: 246 },
  ];

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 820, margin: "0 auto" }}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", display: "block", overflow: "visible" }}>
        <defs>
          <linearGradient id="hub-g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Lines: channels → hub */}
        {channels.map(ch => (
          <line key={ch.label + "-li"}
            x1={LEFT_X} y1={ch.y} x2={HUB_X} y2={HUB_Y}
            stroke={ch.color} strokeWidth="1.5" strokeDasharray="6 5" opacity="0.3" />
        ))}

        {/* Lines: hub → outcomes */}
        {outcomes.map(out => (
          <line key={out.label + "-lo"}
            x1={HUB_X} y1={HUB_Y} x2={RIGHT_X} y2={out.y}
            stroke={out.color} strokeWidth="1.5" strokeDasharray="6 5" opacity="0.3" />
        ))}

        {/* Particles: channels → hub */}
        {channels.map((ch, i) => (
          <circle key={ch.label + "-p"} r="5" fill={ch.color} filter="url(#glow)">
            <animateMotion
              dur="2.6s" repeatCount="indefinite" begin={`${i * 0.65}s`}
              path={`M ${LEFT_X} ${ch.y} L ${HUB_X} ${HUB_Y}`} />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.85;1"
              dur="2.6s" repeatCount="indefinite" begin={`${i * 0.65}s`} />
          </circle>
        ))}

        {/* Particles: hub → outcomes */}
        {outcomes.map((out, i) => (
          <circle key={out.label + "-p"} r="5" fill={out.color} filter="url(#glow)">
            <animateMotion
              dur="2.6s" repeatCount="indefinite" begin={`${i * 0.65 + 0.35}s`}
              path={`M ${HUB_X} ${HUB_Y} L ${RIGHT_X} ${out.y}`} />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.85;1"
              dur="2.6s" repeatCount="indefinite" begin={`${i * 0.65 + 0.35}s`} />
          </circle>
        ))}

        {/* Hub pulse rings */}
        <circle cx={HUB_X} cy={HUB_Y} r="52" fill="none" stroke="rgba(79,70,229,0.15)" strokeWidth="1">
          <animate attributeName="r" values="48;60;48" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle cx={HUB_X} cy={HUB_Y} r="42" fill="rgba(79,70,229,0.07)" />

        {/* Hub circle */}
        <circle cx={HUB_X} cy={HUB_Y} r="34" fill="url(#hub-g)" />
        <text x={HUB_X} y={HUB_Y - 7} textAnchor="middle" fontSize="22" dominantBaseline="middle">🤖</text>
        <text x={HUB_X} y={HUB_Y + 16} textAnchor="middle" fontSize="8.5" fill="white" fontWeight="700" letterSpacing="0.06em" dominantBaseline="middle">LeadOS AI</text>

        {/* Channel nodes */}
        {channels.map(ch => (
          <g key={ch.label + "-n"}>
            <circle cx={LEFT_X} cy={ch.y} r="22" fill={ch.color} opacity="0.1" />
            <circle cx={LEFT_X} cy={ch.y} r="15" fill={ch.color} />
            {/* Label pill */}
            <rect x={LEFT_X - 72} y={ch.y - 12} width="52" height="24" rx="12"
              fill="white" stroke={ch.color} strokeWidth="1.2" opacity="0.9" />
            <text x={LEFT_X - 46} y={ch.y} textAnchor="middle" fontSize="10" fill={ch.color}
              fontWeight="700" dominantBaseline="middle">{ch.label}</text>
          </g>
        ))}

        {/* Outcome nodes */}
        {outcomes.map(out => (
          <g key={out.label + "-n"}>
            <circle cx={RIGHT_X} cy={out.y} r="22" fill={out.color} opacity="0.1" />
            <circle cx={RIGHT_X} cy={out.y} r="15" fill={out.color} />
            {/* Label pill */}
            <rect x={RIGHT_X + 20} y={out.y - 12} width={out.label.length * 6.2 + 12} height="24" rx="12"
              fill="white" stroke={out.color} strokeWidth="1.2" opacity="0.9" />
            <text x={RIGHT_X + 26 + out.label.length * 3.1} y={out.y} textAnchor="middle" fontSize="10"
              fill={out.color} fontWeight="700" dominantBaseline="middle">{out.label}</text>
          </g>
        ))}

        {/* Channel icons (text in circles) */}
        <text x={LEFT_X} y={channels[0].y} textAnchor="middle" dominantBaseline="middle" fontSize="13">💬</text>
        <text x={LEFT_X} y={channels[1].y} textAnchor="middle" dominantBaseline="middle" fontSize="13">📷</text>
        <text x={LEFT_X} y={channels[2].y} textAnchor="middle" dominantBaseline="middle" fontSize="13">📞</text>
        <text x={LEFT_X} y={channels[3].y} textAnchor="middle" dominantBaseline="middle" fontSize="13">🌐</text>

        {/* Outcome icons */}
        <text x={RIGHT_X} y={outcomes[0].y} textAnchor="middle" dominantBaseline="middle" fontSize="13">⚡</text>
        <text x={RIGHT_X} y={outcomes[1].y} textAnchor="middle" dominantBaseline="middle" fontSize="13">📅</text>
        <text x={RIGHT_X} y={outcomes[2].y} textAnchor="middle" dominantBaseline="middle" fontSize="13">💰</text>
        <text x={RIGHT_X} y={outcomes[3].y} textAnchor="middle" dominantBaseline="middle" fontSize="13">⭐</text>
      </svg>

      {/* Stat strip below diagram */}
      <div style={{ display: "flex", justifyContent: "center", gap: 40, marginTop: 28, flexWrap: "wrap" }}>
        {[["28s", "Avg AI response"], ["3×", "More bookings"], ["24/7", "Always on"], ["8×", "ROAS tracked"]].map(([v, l]) => (
          <div key={l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 22, fontWeight: 900, color: "#2563eb", lineHeight: 1 }}>{v}</div>
            <div style={{ fontSize: 11, color: "#94a3b8", fontWeight: 500, marginTop: 4 }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const DEMOS: Record<string, Array<{ f: string; t: string }>> = {
  "Aesthetic Clinic": [
    { f: "u", t: "Hi, I want a lip filler consultation" },
    { f: "a", t: "Hi! I'm Aria from Glow Aesthetics. We have Thursday 3pm or Friday 11am with Dr. Sarah — which works?" },
    { f: "u", t: "Thursday 3pm please" },
    { f: "a", t: "Confirmed for Thursday at 3pm. Sending details to your WhatsApp now. Any questions?" },
  ],
  "Real Estate": [
    { f: "u", t: "Is the Bayview Road listing still available?" },
    { f: "a", t: "Yes! Beautiful 3-bed, 2-bath listed this week. Ready to book a viewing? I can arrange one tomorrow." },
    { f: "u", t: "Tomorrow afternoon works" },
    { f: "a", t: "Viewing confirmed for tomorrow at 2:30pm. Agent Marcus will meet you there. Details sent." },
  ],
  "Restaurant": [
    { f: "u", t: "Table for 4 this Saturday?" },
    { f: "a", t: "Welcome to Ember! We have 7pm or 8:30pm Saturday for 4. Any special occasion or dietary needs?" },
    { f: "u", t: "7pm — our anniversary" },
    { f: "a", t: "Confirmed: table for 4 at 7pm Saturday. Noted your anniversary — the team will make it special!" },
  ],
  "Hair Clinic": [
    { f: "u", t: "I'm interested in a hair transplant consultation" },
    { f: "a", t: "Great choice! We specialise in FUE hair transplants. I can book a free consultation with Dr. Ahmed — this week?" },
    { f: "u", t: "Yes, Wednesday morning" },
    { f: "a", t: "Wednesday 10am confirmed with Dr. Ahmed. You'll receive a prep guide on WhatsApp before your visit." },
  ],
};

const FAQS = [
  { q: "Do I need technical knowledge to use LeadOS?", a: "Not at all. LeadOS is built for business owners, not developers. Our team handles every aspect of setup — after a guided onboarding and testing process, you go live in 48 hours." },
  { q: "Which channels does LeadOS connect to?", a: "WhatsApp Business, Instagram DMs, Facebook Messenger, and your website live chat — all unified in one inbox. Voice AI handles inbound and outbound calls." },
  { q: "How does the AI learn my business?", a: "During onboarding, we train your AI on your services, pricing, tone, and FAQs. It improves through conversation history, feedback, and safe escalation rules — getting smarter every week." },
  { q: "Does LeadOS support Arabic and other languages?", a: "Yes. LeadOS auto-detects language and responds in Arabic, English, French, Spanish, Hindi, Urdu, and more. Voice AI supports all four major GCC languages natively." },
  { q: "Is there a long-term contract?", a: "No lock-in. All plans are monthly and can be cancelled anytime. A one-time onboarding fee covers your full AI setup, training, and go-live support." },
];

export default function HomePage() {
  const t = useTranslations('home');
  const demoTabs = Object.keys(DEMOS);

  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [activeDemo, setActiveDemo] = useState(demoTabs[0]);
  const [demoMsgs, setDemoMsgs] = useState(DEMOS[demoTabs[0]]);
  const [demoInput, setDemoInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [annual, setAnnual] = useState(false);
  const msgsRef = useRef<HTMLDivElement>(null);

  // Dark hero body class — makes nav transparent over dark hero
  useEffect(() => {
    document.body.classList.add('has-dark-hero');
    return () => document.body.classList.remove('has-dark-hero');
  }, []);

  useEffect(() => {
    if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
  }, [demoMsgs, typing]);

  useEffect(() => {
    const sequence = DEMOS[activeDemo];
    setTyping(false);
    setDemoMsgs([]);
    const timers = sequence.map((msg, i) =>
      window.setTimeout(() => setDemoMsgs(cur => [...cur, msg]), 500 + i * 1050)
    );
    return () => timers.forEach(clearTimeout);
  }, [activeDemo]);

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

  return (
    <>
      {/* ══ HERO ══ */}
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
              {CHANNEL_PILLS.map(({ icon, label }) => (
                <div key={label} className="hero-channel-pill">{icon}{label}</div>
              ))}
            </div>
            <div className="hero-ctas" style={{ marginTop: 32 }}>
              <Link href={SIGNUP_URL} className="btn btn-primary btn-lg">
                {t('heroCta1')}
                <svg className="btn-arrow" width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-white btn-lg">
                {t('heroCta2')}
              </a>
            </div>
            <p className="hero-small-print" style={{ fontSize: 12, marginTop: 14, fontWeight: 400 }}>
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
                <div className="dash-dot dash-dot-r" /><div className="dash-dot dash-dot-y" /><div className="dash-dot dash-dot-g" />
                <div className="dash-url">app.myleados.ai — Revenue Dashboard</div>
              </div>
              <div className="dash-body">
                <div className="dash-sb">
                  <div className="dash-sb-logo"><Logo size={20} /><span className="dash-sb-wm">LeadOS</span></div>
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

      {/* ══ TRUST STRIP ══ */}
      <section className="hero-trust-metrics" aria-label="LeadOS trust metrics">
        <div className="container">
          <div className="hero-metrics-grid">
            {[
              ["48h", "Go-live in 48 hours", "Full setup, training, and launch"],
              ["24/7", "Always-on AI", "Replies when your team sleeps"],
              ["8+", "Channels unified", "WhatsApp, IG, Messenger, Voice, Web"],
              ["4+", "Languages", "EN, AR, Hindi, Urdu + auto-detect"],
              ["0", "Code needed", "Business owners run it themselves"],
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

      {/* ══ HOW LEADOS WORKS (Animated CRM Flow) ══ */}
      <section id="how-it-works" style={{ padding: "88px 0", background: "white" }}>
        <div className="container">
          <div className="section-header center" style={{ marginBottom: 52 }}>
            <span className="eyebrow">How it works</span>
            <h2 className="display-lg">Your AI employee,<br /><span className="text-serif-em" style={{ color: "var(--blue)" }}>working right now</span></h2>
            <p className="body-lg" style={{ marginTop: 14, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
              Every message from any channel hits your AI in milliseconds. It qualifies, replies, books, and tracks revenue — automatically, while you focus on delivering.
            </p>
          </div>
          <div className="leados-crm-wrap"><CrmFlowDiagram /></div>
        </div>
      </section>

      {/* ══ PRODUCT MODULES ══ */}
      <section id="features" style={{ padding: "88px 0", background: "var(--surface-2)" }}>
        <div className="container">
          <div className="section-header center" style={{ marginBottom: 48 }}>
            <span className="eyebrow">The full system</span>
            <h2 className="display-lg">Six modules.<br /><span className="text-serif-em" style={{ color: "var(--ink-3)" }}>One platform.</span></h2>
          </div>
          <div className="leados-modules-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              {
                icon: "📥", color: "#22c55e", metric: "28s",
                title: "Omni Inbox",
                desc: "WhatsApp, Instagram, Messenger, and Web Chat — one unified inbox. AI handles every conversation 24/7, escalates when needed.",
                tags: ["WhatsApp", "Instagram", "Messenger", "Live Chat"],
              },
              {
                icon: "📞", color: "#f97316", metric: "24/7",
                title: "Voice AI",
                desc: "A real AI receptionist that answers calls, books appointments, and logs transcripts in English, Arabic, Hindi, and Urdu.",
                tags: ["Inbound Calls", "Outbound Follow-up", "4 Languages"],
              },
              {
                icon: "📅", color: "#3b82f6", metric: "3×",
                title: "Smart Bookings",
                desc: "AI checks your live calendar, confirms appointments, sends reminders, and reduces no-shows — no human in the loop.",
                tags: ["Calendar Sync", "Auto-Reminders", "No-Show Recovery"],
              },
              {
                icon: "🧠", color: "#7c3aed", metric: "8× ROAS",
                title: "Meta Brain",
                desc: "Connect your ad campaigns. See exactly which ads generate bookings and revenue — not just clicks — in one dashboard.",
                tags: ["ROI Tracking", "Source Attribution", "Ad Insights"],
              },
              {
                icon: "🚀", color: "#4f46e5", metric: "+31%",
                title: "Auto SEO",
                desc: "AI generates SEO-optimised articles for your clinic daily and publishes them directly to your website. Rank without writing.",
                tags: ["Daily Articles", "Auto-Publish", "Google Indexing"],
              },
              {
                icon: "⭐", color: "#f59e0b", metric: "4.9★",
                title: "Reviews & Pipeline",
                desc: "Automated review requests after each visit. Full lead pipeline from first contact to booked, arrived, and reviewed.",
                tags: ["Google Reviews", "Pipeline", "Follow-up Sequences"],
              },
            ].map(mod => (
              <div key={mod.title} className="leados-module-card" style={{
                background: "white", borderRadius: 18, padding: "28px 26px",
                border: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: 14,
                cursor: "default", ["--card-accent" as string]: mod.color,
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, fontSize: 22,
                    background: `${mod.color}18`, display: "flex", alignItems: "center", justifyContent: "center"
                  }}>{mod.icon}</div>
                  <div style={{ fontSize: 18, fontWeight: 900, color: mod.color }}>{mod.metric}</div>
                </div>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#0f172a" }}>{mod.title}</div>
                <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.65, flex: 1 }}>{mod.desc}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {mod.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 20,
                      background: `${mod.color}12`, color: mod.color, letterSpacing: "0.04em"
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LIVE AI DEMO ══ */}
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
                  <button key={k} className={`d-tab${activeDemo === k ? " on" : ""}`} onClick={() => setActiveDemo(k)}>{k}</button>
                ))}
              </div>
              <div className="demo-hd">Qualify, answer, book.<br />Automatically.</div>
              <p className="demo-sub">Watch the AI handle a <strong style={{ color: "var(--ink)" }}>{activeDemo}</strong> enquiry — from first message to confirmed booking.</p>
              <div className="demo-info">{t('demoInfo')}</div>
              <button className="demo-cta-btn" onClick={() => window.open(BOOK_URL, "_blank")}>{t('demoCta')}</button>
            </div>
            <div className="demo-right" dir="ltr">
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

      {/* ══ PROOF: NUMBERS + TESTIMONIALS ══ */}
      <section id="proof" style={{ padding: "88px 0", background: "white" }}>
        <div className="container">
          {/* Stats */}
          <div className="leados-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2, background: "var(--border)", borderRadius: 20, overflow: "hidden", marginBottom: 60 }}>
            {[
              ["3×", "More Appointments Booked", "Instant 24/7 AI responses convert more leads from the same spend."],
              ["94%", "Faster First Response", "Average reply drops from hours to 28 seconds. First to respond wins."],
              ["40%", "Fewer No-Shows", "Automated reminders and confirmations keep your calendar full."],
              ["8×", "ROAS with Meta Brain", "See which ads actually drive bookings and revenue — not just clicks."],
            ].map(([n, h, p]) => (
              <div key={h} style={{ background: "white", padding: "32px 28px" }}>
                <div style={{ fontSize: 36, fontWeight: 900, color: "#2563eb", lineHeight: 1, marginBottom: 8 }}>{n}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 6 }}>{h}</div>
                <div style={{ fontSize: 12, color: "#64748b", lineHeight: 1.6 }}>{p}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="leados-testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { quote: "We used to miss leads every night after closing time. Now LeadOS handles all our WhatsApp enquiries 24/7 and books consultations automatically. 40% jump in confirmed appointments in the first month.", name: "Dr. Nour Al-Hassan", role: "Medical Director, Glow Aesthetics", city: "Sydney, Australia", avatar: "👩‍⚕️" },
              { quote: "The Meta Brain feature is what sold me. I can finally see which Facebook ad actually led to a booking. We cut our cost per booking by 35% in 6 weeks.", name: "Ahmed Al-Mansoori", role: "Founder, Palm Property Group", city: "Dubai, UAE", avatar: "🏠" },
              { quote: "Our reception team was overwhelmed with calls and WhatsApp messages. LeadOS now handles the first reply, qualifies the patient, and books them in.", name: "Sarah Mitchell", role: "Practice Manager, Smile Dental", city: "Sydney, Australia", avatar: "🦷" },
            ].map((t) => (
              <div key={t.name} style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 16, padding: 28, display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ display: "flex", gap: 2 }}>{[1,2,3,4,5].map(i => <span key={i} style={{ color: "#f59e0b", fontSize: 14 }}>★</span>)}</div>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "#475569", fontStyle: "italic", flex: 1 }}>&ldquo;{t.quote}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, rgba(37,99,235,.12), rgba(124,58,237,.12))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700 }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: "#94a3b8" }}>{t.role}</div>
                    <div style={{ fontSize: 11, color: "#94a3b8" }}>📍 {t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRICING ══ */}
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

          {/* ── Onboarding Choice ── */}
          <div className="onboarding-grid">
            {/* Self-serve */}
            <div style={{ background: "white", border: "1.5px solid var(--border-2)", borderRadius: 18, padding: "22px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: "var(--green-50)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>⚡</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)" }}>Self-Onboarding</div>
                  <div style={{ fontSize: 11, color: "var(--ink-4)" }}>Set up yourself</div>
                </div>
                <div style={{ marginLeft: "auto", fontSize: 22, fontWeight: 900, color: "var(--green)", letterSpacing: "-1px" }}>$0</div>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
                {["Step-by-step AI wizard", "Video tutorial library", "Live chat support"].map(f => (
                  <li key={f} style={{ display: "flex", gap: 7, fontSize: 12.5, color: "var(--ink-3)", alignItems: "center" }}>
                    <span style={{ color: "var(--green)", fontWeight: 700 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Assisted */}
            <div style={{ background: "linear-gradient(135deg, #0f172a, #1e1b4b)", border: "1.5px solid rgba(124,58,237,.35)", borderRadius: 18, padding: "22px 24px", display: "flex", flexDirection: "column", gap: 10, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, right: 0, background: "linear-gradient(135deg, #7c3aed, #4f46e5)", color: "white", fontSize: 9.5, fontWeight: 700, padding: "4px 14px", borderRadius: "0 18px 0 12px", letterSpacing: "0.06em" }}>MOST POPULAR</div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(124,58,237,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🚀</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "white" }}>Assisted Onboarding</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,.35)" }}>We build everything for you</div>
                </div>
                <div style={{ marginLeft: "auto", textAlign: "right" }}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#c4b5fd", letterSpacing: "-1px" }}>$1,500</div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,.3)" }}>one-time</div>
                </div>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
                {[
                  { text: "1 month free subscription included", highlight: true },
                  { text: "Full AI training on your services", highlight: false },
                  { text: "All channels connected & tested", highlight: false },
                  { text: "48-hour go-live guarantee", highlight: false },
                ].map(f => (
                  <li key={f.text} style={{ display: "flex", gap: 7, fontSize: 12.5, color: f.highlight ? "#86efac" : "rgba(255,255,255,.45)", alignItems: "center" }}>
                    <span style={{ color: f.highlight ? "#4ade80" : "rgba(255,255,255,.3)", fontWeight: 700 }}>✓</span>{f.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="p-tier">{t('pricingStarter')}</div>
              <div className="p-tagline">{t('pricingStarterTagline')}</div>
              <div className="p-price">USD {prices.starter.usd}<span className="p-per">/month</span></div>
              <div className="p-sub-price" style={{ opacity: 0.55, fontSize: 12 }}>AED {prices.starter.aed} / month</div>
              <hr className="p-divider" />
              <ul className="p-feats">{["2 users", "1,000 AI chats / month", "Omni Inbox", "Website Chat", "Contacts", "Pipeline", "AI Assistant", "Basic Reporting"].map((f) => <li key={f} className="p-feat"><span className="p-check">✓</span>{f}</li>)}</ul>
              <Link href="/get-started?plan=starter" className="p-btn pb-outline" style={{ display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>{t('heroCta1')} →</Link>
            </div>

            <div className="pricing-card popular">
              <div className="popular-pill">{t('pricingMostPopular')}</div>
              <div className="p-tier">{t('pricingGrowth')}</div>
              <div className="p-tagline">{t('pricingGrowthTagline')}</div>
              <div className="p-price">USD {prices.growth.usd}<span className="p-per">/month</span></div>
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
              <ul className="p-feats">{["Everything in Growth", "Voice AI", "Multi-Location Support", "Advanced Meta Brain", "Custom AI Training", "Priority Support", "Dedicated Onboarding"].map((f) => <li key={f} className="p-feat"><span className="p-check">✓</span>{f}</li>)}</ul>
              <a href={SALES_URL} target="_blank" rel="noopener noreferrer" className="p-btn pb-outline" style={{ display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>{t('pricingContactSales')}</a>
            </div>
          </div>
          <p className="p-note">{t('pricingNote')}</p>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section id="faq" style={{ padding: "72px 0", background: "white" }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="section-header center" style={{ marginBottom: 36 }}>
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

      {/* ══ FINAL CTA ══ */}
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
            <a href="mailto:hello@myleados.ai">hello@myleados.ai</a>
            <span>•</span>
            <a href="tel:+971568350424">🇦🇪 +971 56 835 0424</a>
          </div>
        </div>
      </section>

      {/* ══ FLOATING PILL ══ */}
      <div className="float-pill">
        <Link href="/get-started">{t('floatPill')}</Link>
      </div>

      {/* ══ MOBILE STICKY CTA ══ */}
      <div className="mobile-cta">
        <Link href="/get-started" className="mobile-cta-primary">{t('mobileCta1')}</Link>
        <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="mobile-cta-secondary">{t('mobileCta2')}</a>
      </div>
    </>
  );
}

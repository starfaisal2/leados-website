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

/* ── How It Works — 3 Steps ── */
function HowItWorksSteps() {
  const steps = [
    {
      num: "01", icon: "📲", color: "#22c55e",
      title: "Lead arrives from any channel",
      desc: "WhatsApp, Instagram, Facebook, your website, or a phone call — every lead hits one unified inbox. Nothing falls through the cracks.",
      tags: ["WhatsApp", "Instagram", "Voice AI", "Web Chat", "Facebook"],
    },
    {
      num: "02", icon: "🤖", color: "#2563eb",
      title: "AI qualifies & replies in 28 seconds",
      desc: "Your AI reads context, qualifies intent, answers questions in their language, and books the appointment — automatically, 24/7.",
      tags: ["Instant reply", "Multilingual", "Smart booking", "Escalation"],
    },
    {
      num: "03", icon: "📊", color: "#7c3aed",
      title: "Booking confirmed. Revenue tracked.",
      desc: "Every booking, every ad source, every outcome — attributed and tracked in one dashboard. Know exactly what's growing your business.",
      tags: ["Calendar sync", "Meta attribution", "Revenue report", "Reviews"],
    },
  ];
  return (
    <div className="how-steps-wrap">
      {steps.map((s, i) => (
        <>
          <div key={s.num} className="how-step">
            <div className="how-step-num" style={{ color: s.color }}>{s.num}</div>
            <div className="how-step-icon" style={{ background: `${s.color}14` }}>{s.icon}</div>
            <h3 className="how-step-title">{s.title}</h3>
            <p className="how-step-desc">{s.desc}</p>
            <div className="how-step-tags">
              {s.tags.map(tag => (
                <span key={tag} className="how-step-tag" style={{ background: `${s.color}10`, color: s.color }}>{tag}</span>
              ))}
            </div>
          </div>
          {i < steps.length - 1 && <div key={`div-${i}`} className="how-step-divider">→</div>}
        </>
      ))}
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

/* ── Animated Product Showcase ── */
function ProductShowcase() {
  const TABS = [
    { label: "Inbox",      icon: "📥", color: "#22c55e" },
    { label: "Dashboard",  icon: "📊", color: "#2563eb" },
    { label: "Bookings",   icon: "📅", color: "#f97316" },
    { label: "Meta Brain", icon: "🧠", color: "#7c3aed" },
  ];
  const SIDEBAR: [string, string][] = [
    ["📥","Inbox"],["🤖","AI Brain"],["📞","Voice AI"],
    ["📅","Bookings"],["👥","Contacts"],["📊","Reports"],["🧠","Meta Brain"],["⚙️","Settings"],
  ];
  const SIDEBAR_ACTIVE = ["Inbox","Reports","Bookings","Meta Brain"];

  const [tab, setTab] = useState(0);
  const [msgs, setMsgs] = useState<{f:string;t:string}[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [booked, setBooked] = useState(false);
  const [kpis, setKpis] = useState({l:0,b:0,r:0,v:0});
  const [appts, setAppts] = useState<number[]>([]);
  const [chartOn, setChartOn] = useState(false);
  const scMsgsContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scMsgsContainer.current) {
      scMsgsContainer.current.scrollTop = scMsgsContainer.current.scrollHeight;
    }
  }, [msgs, isTyping]);

  useEffect(() => {
    setMsgs([]); setIsTyping(false); setBooked(false);
    setKpis({l:0,b:0,r:0,v:0}); setAppts([]); setChartOn(false);
    const T: ReturnType<typeof setTimeout>[] = [];

    if (tab === 0) {
      const seq: Array<{f:string;t:string}|null> = [
        {f:"u",t:"Hi, I want a lip filler consultation please"},
        null,
        {f:"a",t:"Hi Layla! 👋 We have Thu 3pm or Fri 11am with Dr. Sarah — which works?"},
        {f:"u",t:"Thursday 3pm!"},
        null,
        {f:"a",t:"Booked! ✅ Thu 3pm with Dr. Sarah. Reminder sent to your WhatsApp."},
      ];
      let d = 500;
      for (const m of seq) {
        if (!m) {
          T.push(setTimeout(() => setIsTyping(true), d)); d += 1100;
          T.push(setTimeout(() => setIsTyping(false), d));
        } else {
          const cap = m;
          T.push(setTimeout(() => { setIsTyping(false); setMsgs(c => [...c, cap]); }, d));
          d += cap.f === "u" ? 700 : 900;
        }
      }
      T.push(setTimeout(() => setBooked(true), d + 300));
    }

    if (tab === 1) {
      const tgt = {l:47,b:18,r:28,v:8400};
      for (let i = 1; i <= 50; i++) {
        const p = 1 - Math.pow(1 - i/50, 3);
        T.push(setTimeout(() => setKpis({
          l:Math.round(tgt.l*p), b:Math.round(tgt.b*p),
          r:Math.round(tgt.r*p), v:Math.round(tgt.v*p),
        }), i * 36));
      }
    }

    if (tab === 2) {
      for (let i = 0; i < 8; i++) T.push(setTimeout(() => setAppts(c => [...c, i]), 200 + i * 200));
    }

    if (tab === 3) T.push(setTimeout(() => setChartOn(true), 400));

    return () => T.forEach(clearTimeout);
  }, [tab]);

  const CONVS = [
    {name:"Layla H.", preview:"Hi, I want a lip filler…", ch:"💬", active:true,  time:"now"},
    {name:"Ahmed K.", preview:"What's the price for…",   ch:"🟣", active:false, time:"2m"},
    {name:"Sara M.",  preview:"Can I reschedule my…",    ch:"📞", active:false, time:"8m"},
    {name:"David L.", preview:"Do you offer payment…",   ch:"📘", active:false, time:"15m"},
  ];
  const APPT_DATA = [
    {name:"Layla H.",  svc:"Lip Filler Consultation",  time:"9:00",  col:"#22c55e"},
    {name:"Ahmed K.",  svc:"Rhinoplasty Consult",       time:"10:30", col:"#3b82f6"},
    {name:"Sara M.",   svc:"Skin Booster Session",      time:"11:00", col:"#a855f7"},
    {name:"David L.",  svc:"Hair Analysis",             time:"13:00", col:"#f97316"},
    {name:"Nour A.",   svc:"Filler Touch-up",           time:"14:30", col:"#ec4899"},
    {name:"James K.",  svc:"PRP Treatment",             time:"15:00", col:"#14b8a6"},
    {name:"Emily R.",  svc:"Laser Session",             time:"16:30", col:"#f59e0b"},
    {name:"Omar F.",   svc:"Initial Consultation",      time:"17:00", col:"#6366f1"},
  ];

  return (
    <div style={{ maxWidth: 980, margin: "0 auto" }}>
      {/* Tab selector */}
      <div style={{ display:"flex", gap:8, justifyContent:"center", marginBottom:28, flexWrap:"wrap" }}>
        {TABS.map((tb, i) => (
          <button key={i} onClick={() => setTab(i)} style={{
            display:"flex", alignItems:"center", gap:7,
            padding:"9px 20px", borderRadius:10, fontSize:13.5, fontWeight:600,
            fontFamily:"inherit", cursor:"pointer", transition:"all 0.2s",
            background: tab===i ? tb.color : "white",
            color: tab===i ? "white" : "var(--ink-3)",
            border: tab===i ? `1.5px solid ${tb.color}` : "1.5px solid var(--border-2)",
            boxShadow: tab===i ? `0 4px 14px ${tb.color}40` : "var(--shadow-xs)",
          }}>
            <span style={{fontSize:15}}>{tb.icon}</span>{tb.label}
          </button>
        ))}
      </div>

      {/* Browser frame */}
      <div style={{
        background:"white", border:"1px solid var(--border-2)", borderRadius:18, overflow:"hidden",
        boxShadow:"0 0 0 1px rgba(0,0,0,.03), 0 32px 64px rgba(0,0,0,.09), 0 8px 20px rgba(0,0,0,.05)",
      }}>
        {/* Title bar */}
        <div style={{background:"var(--surface-2)",borderBottom:"1px solid var(--border)",padding:"10px 18px",display:"flex",alignItems:"center",gap:8}}>
          <div style={{width:11,height:11,borderRadius:"50%",background:"#ff5f57"}}/>
          <div style={{width:11,height:11,borderRadius:"50%",background:"#febc2e"}}/>
          <div style={{width:11,height:11,borderRadius:"50%",background:"#28c840"}}/>
          <div style={{flex:1,textAlign:"center",fontSize:11,color:"var(--ink-4)",background:"rgba(0,0,0,.04)",border:"1px solid var(--border)",borderRadius:6,padding:"3px 0",margin:"0 12px"}}>
            app.myleados.ai — {TABS[tab].label}
          </div>
          <div style={{display:"flex",alignItems:"center",gap:5,fontSize:11,color:"var(--green)",fontWeight:600}}>
            <div style={{width:6,height:6,borderRadius:"50%",background:"var(--green)",animation:"blink 2s infinite"}}/>Live
          </div>
        </div>

        {/* Sidebar + content */}
        <div className="sc-frame-grid" style={{display:"grid",gridTemplateColumns:"185px 1fr",minHeight:400}}>
          {/* Sidebar */}
          <div className="sc-sidebar" style={{background:"var(--surface-2)",borderRight:"1px solid var(--border)",padding:"14px 10px"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,padding:"4px 6px 14px",borderBottom:"1px solid var(--border)",marginBottom:10}}>
              <Logo size={18}/>
              <span style={{fontSize:12,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",background:"linear-gradient(90deg,var(--ink),var(--blue))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>LeadOS</span>
            </div>
            {SIDEBAR.map(([ic, lb]) => {
              const on = lb === SIDEBAR_ACTIVE[tab];
              return (
                <div key={lb} style={{display:"flex",alignItems:"center",gap:8,padding:"7px 9px",borderRadius:8,fontSize:12,marginBottom:2,background:on?"white":"transparent",color:on?"var(--ink)":"var(--ink-3)",fontWeight:on?600:400,boxShadow:on?"var(--shadow-xs)":"none"}}>
                  <span style={{fontSize:12}}>{ic}</span>{lb}
                </div>
              );
            })}
          </div>

          {/* Content */}
          <div style={{overflow:"hidden",position:"relative"}}>

            {/* INBOX */}
            {tab === 0 && (
              <div className="sc-inbox-grid" style={{display:"grid",gridTemplateColumns:"220px 1fr",height:"100%"}}>
                <div className="sc-conv-list" style={{borderRight:"1px solid var(--border)",display:"flex",flexDirection:"column"}}>
                  <div style={{padding:"12px 14px",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <span style={{fontSize:12,fontWeight:700,color:"var(--ink)"}}>All Conversations</span>
                    <span style={{fontSize:10,background:"var(--blue)",color:"white",borderRadius:10,padding:"1px 7px",fontWeight:700}}>12</span>
                  </div>
                  {CONVS.map(c => (
                    <div key={c.name} style={{display:"flex",alignItems:"center",gap:9,padding:"10px 14px",borderBottom:"1px solid var(--border)",background:c.active?"var(--blue-50)":"white"}}>
                      <div style={{width:30,height:30,borderRadius:"50%",background:c.active?"rgba(37,99,235,.15)":"var(--surface-2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,flexShrink:0}}>{c.ch}</div>
                      <div style={{flex:1,minWidth:0}}>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                          <span style={{fontSize:12,fontWeight:700,color:c.active?"var(--blue)":"var(--ink-2)"}}>{c.name}</span>
                          <span style={{fontSize:10,color:"var(--ink-4)"}}>{c.time}</span>
                        </div>
                        <div style={{fontSize:11,color:"var(--ink-4)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{c.preview}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
                  <div style={{padding:"12px 16px",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",gap:10}}>
                    <div style={{width:28,height:28,borderRadius:"50%",background:"rgba(37,99,235,.12)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13}}>💬</div>
                    <div>
                      <div style={{fontSize:12,fontWeight:700,color:"var(--ink)"}}>Layla Hassan</div>
                      <div style={{fontSize:10,color:"var(--green)"}}>● WhatsApp · Active now</div>
                    </div>
                    {booked && (
                      <div style={{marginLeft:"auto",background:"var(--green-50)",border:"1px solid rgba(22,163,74,.15)",borderRadius:20,padding:"3px 12px",fontSize:11,fontWeight:700,color:"var(--green)",animation:"fadeInUp 0.3s ease"}}>
                        ✓ Booking Confirmed
                      </div>
                    )}
                  </div>
                  <div ref={scMsgsContainer} style={{flex:1,padding:"14px 16px",display:"flex",flexDirection:"column",gap:10,overflowY:"auto",maxHeight:320}}>
                    {msgs.map((m,i) => (
                      <div key={i} style={{display:"flex",gap:8,alignItems:"flex-end",flexDirection:m.f==="u"?"row-reverse":"row",animation:"fadeInUp 0.3s ease"}}>
                        <div style={{width:22,height:22,borderRadius:"50%",background:m.f==="a"?"linear-gradient(135deg,#2563eb,#4f46e5)":"var(--surface-2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,flexShrink:0,color:m.f==="a"?"white":"var(--ink-3)"}}>
                          {m.f==="a"?"🤖":"👤"}
                        </div>
                        <div style={{fontSize:12.5,padding:"8px 12px",borderRadius:m.f==="a"?"12px 12px 12px 3px":"12px 12px 3px 12px",background:m.f==="a"?"var(--surface-2)":"linear-gradient(135deg,#2563eb,#4f46e5)",color:m.f==="a"?"var(--ink-2)":"white",maxWidth:"75%",lineHeight:1.45}}>
                          {m.t}
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div style={{display:"flex",gap:8,alignItems:"flex-end"}}>
                        <div style={{width:22,height:22,borderRadius:"50%",background:"linear-gradient(135deg,#2563eb,#4f46e5)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10}}>🤖</div>
                        <div style={{display:"flex",gap:4,padding:"10px 14px",background:"var(--surface-2)",borderRadius:"12px 12px 12px 3px"}}>
                          {[0,1,2].map(di => <div key={di} style={{width:5,height:5,borderRadius:"50%",background:"var(--ink-4)",animation:"tda 1.2s infinite",animationDelay:`${di*0.2}s`}}/>)}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* DASHBOARD */}
            {tab === 1 && (
              <div style={{padding:20}}>
                <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10,marginBottom:16}}>
                  {[
                    {l:"Leads Today",   v:String(kpis.l),              s:"↑ 23%", c:"var(--blue)"},
                    {l:"Bookings",      v:String(kpis.b),              s:"↑ 31%", c:"var(--green)"},
                    {l:"Avg Response",  v:`${kpis.r}s`,                s:"↓ 94%", c:"var(--ink)"},
                    {l:"Revenue Est.",  v:`$${kpis.v.toLocaleString()}`, s:"↑ 18%", c:"var(--purple)"},
                  ].map(k => (
                    <div key={k.l} style={{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px"}}>
                      <div style={{fontSize:9.5,color:"var(--ink-4)",fontWeight:700,textTransform:"uppercase",letterSpacing:".5px",marginBottom:5}}>{k.l}</div>
                      <div style={{fontSize:24,fontWeight:800,color:k.c,letterSpacing:"-1px",fontVariantNumeric:"tabular-nums"}}>{k.v}</div>
                      <div style={{fontSize:10.5,color:"var(--green)",fontWeight:700,marginTop:2}}>{k.s} today</div>
                    </div>
                  ))}
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                  <div style={{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px"}}>
                    <div style={{fontSize:10,fontWeight:700,color:"var(--ink-3)",textTransform:"uppercase",letterSpacing:".5px",marginBottom:10}}>Leads This Week</div>
                    <div style={{display:"flex",alignItems:"flex-end",gap:5,height:72}}>
                      {[35,52,41,67,48,71,47].map((h,bi) => (
                        <div key={bi} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:3}}>
                          <div style={{width:"100%",borderRadius:"3px 3px 0 0",background:"linear-gradient(180deg,#2563eb,#4f46e5)",height:kpis.l>0?`${(h/71)*72}px`:"0px",transition:`height 0.7s cubic-bezier(0.34,1.56,0.64,1)`,transitionDelay:`${bi*70}ms`}}/>
                          <div style={{fontSize:8.5,color:"var(--ink-4)"}}>{"SMTWTFS"[bi]}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px"}}>
                    <div style={{fontSize:10,fontWeight:700,color:"var(--ink-3)",textTransform:"uppercase",letterSpacing:".5px",marginBottom:10}}>Lead Sources</div>
                    {[
                      {src:"WhatsApp", pct:34,c:"#22c55e"},
                      {src:"Instagram",pct:28,c:"#a855f7"},
                      {src:"Facebook", pct:19,c:"#3b82f6"},
                      {src:"Voice AI", pct:12,c:"#f97316"},
                      {src:"Website",  pct:7, c:"#64748b"},
                    ].map(s => (
                      <div key={s.src} style={{display:"flex",alignItems:"center",gap:7,marginBottom:7}}>
                        <div style={{fontSize:11,color:"var(--ink-3)",width:66,flexShrink:0}}>{s.src}</div>
                        <div style={{flex:1,height:5,background:"var(--border)",borderRadius:3,overflow:"hidden"}}>
                          <div style={{height:"100%",borderRadius:3,background:s.c,width:kpis.l>0?`${s.pct}%`:"0%",transition:"width 1s ease",transitionDelay:"400ms"}}/>
                        </div>
                        <div style={{fontSize:10.5,fontWeight:700,color:"var(--ink-2)",width:24,textAlign:"right"}}>{s.pct}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* BOOKINGS */}
            {tab === 2 && (
              <div style={{padding:16}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
                  <div style={{fontSize:13,fontWeight:700,color:"var(--ink)"}}>Today — Wednesday 16 Jul</div>
                  <div style={{display:"flex",alignItems:"center",gap:6,background:"var(--green-50)",border:"1px solid rgba(22,163,74,.15)",borderRadius:20,padding:"4px 12px",fontSize:11,fontWeight:700,color:"var(--green)"}}>
                    <div style={{width:6,height:6,borderRadius:"50%",background:"var(--green)",animation:"blink 2s infinite"}}/>{appts.length} bookings today
                  </div>
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:6}}>
                  {APPT_DATA.map((a,ai) => (
                    <div key={ai} style={{display:"flex",alignItems:"center",gap:10,background:appts.includes(ai)?"white":"transparent",border:appts.includes(ai)?`1px solid ${a.col}22`:"1px solid transparent",borderLeft:appts.includes(ai)?`3px solid ${a.col}`:"3px solid transparent",borderRadius:10,padding:"8px 12px",transform:appts.includes(ai)?"translateX(0)":"translateX(-18px)",opacity:appts.includes(ai)?1:0,transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",boxShadow:appts.includes(ai)?"var(--shadow-xs)":"none"}}>
                      <div style={{fontSize:10.5,fontWeight:700,color:"var(--ink-3)",width:32,flexShrink:0}}>{a.time}</div>
                      <div style={{width:26,height:26,borderRadius:"50%",background:`${a.col}18`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,flexShrink:0}}>👤</div>
                      <div style={{flex:1}}>
                        <div style={{fontSize:12,fontWeight:700,color:"var(--ink)"}}>{a.name}</div>
                        <div style={{fontSize:10.5,color:"var(--ink-4)"}}>{a.svc}</div>
                      </div>
                      <div style={{fontSize:9.5,fontWeight:700,padding:"2px 8px",borderRadius:20,background:`${a.col}15`,color:a.col,flexShrink:0}}>Confirmed</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* META BRAIN */}
            {tab === 3 && (
              <div style={{padding:20}}>
                <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10,marginBottom:14}}>
                  {[
                    {l:"Total Ad Spend",     v:"$2,400",  s:"This month",           c:"var(--ink)"},
                    {l:"Revenue Attributed", v:"$19,200", s:"From tracked ads",      c:"var(--green)"},
                    {l:"ROAS",               v:"8×",      s:"vs 2.1× industry avg", c:"var(--purple)"},
                    {l:"Cost Per Booking",   v:"$48",     s:"↓ 35% vs last month",  c:"var(--blue)"},
                  ].map((k,ki) => (
                    <div key={k.l} style={{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:"12px 14px",opacity:chartOn?1:0,transform:chartOn?"translateY(0)":"translateY(8px)",transition:`all 0.5s ease ${ki*80}ms`}}>
                      <div style={{fontSize:9.5,color:"var(--ink-4)",fontWeight:700,textTransform:"uppercase",letterSpacing:".5px",marginBottom:5}}>{k.l}</div>
                      <div style={{fontSize:22,fontWeight:800,color:k.c,letterSpacing:"-1px"}}>{k.v}</div>
                      <div style={{fontSize:10,color:"var(--ink-4)",marginTop:2}}>{k.s}</div>
                    </div>
                  ))}
                </div>
                <div style={{background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:12,padding:"14px 16px",opacity:chartOn?1:0,transition:"opacity 0.5s ease 0.35s"}}>
                  <div style={{fontSize:10,fontWeight:700,color:"var(--ink-3)",textTransform:"uppercase",letterSpacing:".5px",marginBottom:12}}>Revenue vs Ad Spend — Last 7 Days</div>
                  <div style={{position:"relative",height:88}}>
                    <svg width="100%" height="88" viewBox="0 0 500 88" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="sc-rev-g" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#22c55e" stopOpacity=".25"/>
                          <stop offset="100%" stopColor="#22c55e" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      <path d="M0,72 C80,62 160,50 240,40 C320,28 400,18 500,8" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"
                        style={{strokeDasharray:700,strokeDashoffset:chartOn?0:700,transition:"stroke-dashoffset 1.2s ease 0.4s"}}/>
                      <path d="M0,72 C80,62 160,50 240,40 C320,28 400,18 500,8 L500,88 L0,88Z" fill="url(#sc-rev-g)"
                        style={{opacity:chartOn?1:0,transition:"opacity 0.5s ease 1.2s"}}/>
                      <path d="M0,82 C80,78 160,74 240,70 C320,66 400,62 500,58" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"
                        style={{strokeDasharray:700,strokeDashoffset:chartOn?0:700,transition:"stroke-dashoffset 1.2s ease 0.7s"}}/>
                    </svg>
                  </div>
                  <div style={{display:"flex",gap:16,marginTop:8}}>
                    <div style={{display:"flex",alignItems:"center",gap:5,fontSize:11,color:"var(--ink-3)"}}>
                      <div style={{width:12,height:2.5,background:"#22c55e",borderRadius:2}}/> Revenue
                    </div>
                    <div style={{display:"flex",alignItems:"center",gap:5,fontSize:11,color:"var(--ink-3)"}}>
                      <div style={{width:12,height:2.5,background:"#3b82f6",borderRadius:2}}/> Ad Spend
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

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
    ? { starter: 399, growth: 799 }
    : { starter: 499, growth: 999 };

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
                <div className="dash-dot dash-dot-r" /><div className="dash-dot dash-dot-y" /><div className="dash-dot dash-dot-g" />
                <div className="dash-url">app.myleados.ai — Omni Inbox</div>
              </div>
              <div className="dash-body">
                <div className="dash-sb">
                  <div className="dash-sb-logo"><Logo size={20} /><span className="dash-sb-wm">LeadOS</span></div>
                  {[["📥","Inbox",true],["🤖","AI Brain"],["📞","Voice AI"],["📅","Bookings"],["👥","Contacts"],["📊","Reports"],["🧠","Meta Brain"],["⚙️","Settings"]].map(([ic,lb,on]) => (
                    <div key={lb as string} className={`dash-sbitem${on?" active":""}`}>
                      <span style={{fontSize:13}}>{ic}</span> {lb}
                    </div>
                  ))}
                </div>
                {/* Omni Inbox: conversation list + active chat */}
                <div className="hero-omni-wrap">
                  {/* Conversation list */}
                  <div className="hero-omni-convlist">
                    <div className="hero-omni-convlist-hdr">
                      <div className="hero-omni-convlist-title">
                        <span style={{fontSize:12,fontWeight:700,color:"var(--ink)"}}>Omni Inbox</span>
                        <span style={{background:"var(--blue)",color:"white",fontSize:9,fontWeight:700,padding:"1px 6px",borderRadius:10}}>35</span>
                      </div>
                      <div className="hero-omni-filters">
                        {[{l:"All",on:true},{l:"WhatsApp",on:false},{l:"IG",on:false},{l:"Calls",on:false}].map(f=>(
                          <div key={f.l} className={`hero-omni-filter${f.on?" on":" off"}`}>{f.l}</div>
                        ))}
                      </div>
                    </div>
                    {[
                      {name:"Layla H.",   msg:"Hi, I want a lip filler…",      ch:"💬", col:"#22c55e", time:"now", active:true,  badge:"AI"},
                      {name:"Ahmed K.",   msg:"What's the price for…",          ch:"🟣", col:"#a855f7", time:"2m",  active:false, badge:"AI"},
                      {name:"Inbound Call",msg:"AI answered · booking…",       ch:"📞", col:"#f97316", time:"5m",  active:false, badge:"Voice"},
                      {name:"Sara M.",    msg:"Can I reschedule my appt…",      ch:"📘", col:"#3b82f6", time:"12m", active:false, badge:"AI"},
                      {name:"David L.",   msg:"Do you offer payment plans?",    ch:"💬", col:"#22c55e", time:"18m", active:false, badge:"AI"},
                    ].map(c=>(
                      <div key={c.name} className={`hero-omni-conv-row${c.active?" active":""}`}>
                        <div style={{width:28,height:28,borderRadius:"50%",background:`${c.col}18`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,flexShrink:0}}>{c.ch}</div>
                        <div style={{flex:1,minWidth:0}}>
                          <div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}>
                            <span style={{fontSize:11.5,fontWeight:c.active?700:600,color:c.active?"var(--blue)":"var(--ink-2)"}}>{c.name}</span>
                            <span style={{fontSize:9.5,color:"var(--ink-4)"}}>{c.time}</span>
                          </div>
                          <div style={{fontSize:10.5,color:"var(--ink-4)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{c.msg}</div>
                        </div>
                        <div style={{fontSize:9,fontWeight:700,padding:"2px 6px",borderRadius:10,background:c.active?"rgba(37,99,235,.12)":"rgba(0,0,0,.04)",color:c.active?"var(--blue)":"var(--ink-4)",flexShrink:0,marginLeft:4}}>{c.badge}</div>
                      </div>
                    ))}
                  </div>
                  {/* Active chat */}
                  <div className="hero-omni-chat">
                    <div className="hero-omni-chat-hdr">
                      <div style={{width:28,height:28,borderRadius:"50%",background:"rgba(34,197,94,.15)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12}}>💬</div>
                      <div style={{flex:1}}>
                        <div style={{fontSize:12,fontWeight:700,color:"var(--ink)"}}>Layla Hassan</div>
                        <div style={{fontSize:10,color:"var(--green)",display:"flex",alignItems:"center",gap:4}}>
                          <div style={{width:5,height:5,borderRadius:"50%",background:"var(--green)",animation:"blink 2s infinite"}}/> AI Handling · WhatsApp
                        </div>
                      </div>
                      <div style={{fontSize:10,fontWeight:700,padding:"3px 10px",borderRadius:20,background:"rgba(37,99,235,.08)",color:"var(--blue)"}}>HIGH INTENT · 82%</div>
                    </div>
                    <div className="hero-omni-msgs">
                      <div className="hero-omni-bubble">
                        <div className="hero-omni-av" style={{background:"var(--surface-2)"}}>👤</div>
                        <div className="hero-omni-msg user">Hi, I want a lip filler consultation</div>
                      </div>
                      <div className="hero-omni-bubble ai">
                        <div className="hero-omni-av" style={{background:"linear-gradient(135deg,#2563eb,#7c3aed)"}}>🤖</div>
                        <div className="hero-omni-msg ai-msg">Hi Layla! 👋 We have Thu 3pm or Fri 11am with Dr. Sarah — which works?</div>
                      </div>
                      <div className="hero-omni-bubble">
                        <div className="hero-omni-av" style={{background:"var(--surface-2)"}}>👤</div>
                        <div className="hero-omni-msg user">Thursday 3pm!</div>
                      </div>
                      <div className="hero-omni-bubble ai">
                        <div className="hero-omni-av" style={{background:"linear-gradient(135deg,#2563eb,#7c3aed)"}}>🤖</div>
                        <div className="hero-omni-msg ai-msg">Confirmed! ✅ Thu 3pm with Dr. Sarah. Reminder sent to your WhatsApp.</div>
                      </div>
                    </div>
                    <div className="hero-omni-input-bar">
                      <div style={{flex:1,background:"white",border:"1px solid var(--border-2)",borderRadius:8,padding:"6px 10px",fontSize:11,color:"var(--ink-4)"}}>Reply here or let AI handle it…</div>
                      <div style={{fontSize:9.5,fontWeight:700,padding:"5px 10px",borderRadius:8,background:"linear-gradient(135deg,#2563eb,#4f46e5)",color:"white",whiteSpace:"nowrap"}}>AI On</div>
                    </div>
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

      {/* ══ SCROLLING CLIENT LOGOS ══ */}
      <section className="clients-marquee-section">
        <div className="clients-marquee-label">Trusted by clinics, agencies & service businesses</div>
        <div className="clients-marquee-wrap">
          <div className="clients-marquee-track">
            {[
              { name: "Enfield Royal", icon: "👑", sub: "Hair & Aesthetics · UAE" },
              { name: "Visage Sydney", icon: "✨", sub: "Skin Clinic · Australia" },
              { name: "Royal Khalifa", icon: "🏆", sub: "Medical Centre · Abu Dhabi" },
              { name: "Glow Aesthetics", icon: "💎", sub: "Aesthetic Clinic · Dubai" },
              { name: "Palm Property", icon: "🏡", sub: "Real Estate · Dubai" },
              { name: "Smile Dental", icon: "🦷", sub: "Dental Clinic · Sydney" },
              { name: "Aria Wellness", icon: "🌿", sub: "Wellness Spa · Abu Dhabi" },
              { name: "Nova Hair Clinic", icon: "💇", sub: "Hair Restoration · London" },
              { name: "Enfield Royal", icon: "👑", sub: "Hair & Aesthetics · UAE" },
              { name: "Visage Sydney", icon: "✨", sub: "Skin Clinic · Australia" },
              { name: "Royal Khalifa", icon: "🏆", sub: "Medical Centre · Abu Dhabi" },
              { name: "Glow Aesthetics", icon: "💎", sub: "Aesthetic Clinic · Dubai" },
              { name: "Palm Property", icon: "🏡", sub: "Real Estate · Dubai" },
              { name: "Smile Dental", icon: "🦷", sub: "Dental Clinic · Sydney" },
              { name: "Aria Wellness", icon: "🌿", sub: "Wellness Spa · Abu Dhabi" },
              { name: "Nova Hair Clinic", icon: "💇", sub: "Hair Restoration · London" },
            ].map((client, i) => (
              <div key={i} className="clients-logo-pill">
                <span className="clients-logo-icon">{client.icon}</span>
                <div>
                  <div className="clients-logo-name">{client.name}</div>
                  <div className="clients-logo-sub">{client.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS — 3 STEPS ══ */}
      <section id="how-it-works" style={{ padding: "88px 0", background: "white" }}>
        <div className="container">
          <div className="section-header center" style={{ marginBottom: 56 }}>
            <span className="eyebrow">How it works</span>
            <h2 className="display-lg">Three steps.<br /><span className="text-serif-em" style={{ color: "var(--blue)" }}>Zero manual work.</span></h2>
            <p className="body-lg" style={{ marginTop: 14, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
              From first message to confirmed booking to revenue tracked — your AI handles every step, on every channel, around the clock.
            </p>
          </div>
          <HowItWorksSteps />
        </div>
      </section>

      {/* ══ PRODUCT SHOWCASE ══ */}
      <section id="features" style={{ padding: "88px 0", background: "var(--surface-2)" }}>
        <div className="container">
          <div className="section-header center" style={{ marginBottom: 48 }}>
            <span className="eyebrow">See it in action</span>
            <h2 className="display-lg">The real LeadOS platform,<br /><span className="text-serif-em" style={{ color: "var(--blue)" }}>live in your browser.</span></h2>
            <p className="body-md" style={{ marginTop: 14, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
              Switch between modules to see exactly what your team sees — from AI-handled conversations to real-time bookings and ad attribution.
            </p>
          </div>
          <ProductShowcase />
          {/* Feature pills */}
          <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:10, marginTop:40 }}>
            {[
              {icon:"📥",label:"Omni Inbox",    color:"#22c55e"},
              {icon:"📞",label:"Voice AI",       color:"#f97316"},
              {icon:"📅",label:"Smart Bookings", color:"#3b82f6"},
              {icon:"🧠",label:"Meta Brain",     color:"#7c3aed"},
              {icon:"🚀",label:"Auto SEO",       color:"#4f46e5"},
              {icon:"⭐",label:"Reviews & Pipeline",color:"#f59e0b"},
            ].map(f => (
              <div key={f.label} style={{display:"flex",alignItems:"center",gap:7,padding:"8px 16px",borderRadius:10,background:"white",border:"1px solid var(--border-2)",fontSize:13,fontWeight:600,color:"var(--ink-2)",boxShadow:"var(--shadow-xs)"}}>
                <span>{f.icon}</span>{f.label}
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
          <div className="testi-v2-grid">
            {[
              {
                metric: "+40%", metricLbl: "more appointments in 30 days",
                metricBg: "rgba(34,197,94,.07)", metricColor: "#16a34a",
                quote: "We used to miss leads every night after closing. Now LeadOS handles all our WhatsApp enquiries 24/7 and books consultations automatically. The difference was immediate.",
                name: "Dr. Nour Al-Hassan", role: "Medical Director, Glow Aesthetics · Sydney", initials: "NA", avatarBg: "linear-gradient(135deg,#16a34a,#059669)",
              },
              {
                metric: "−35%", metricLbl: "cost per booking in 6 weeks",
                metricBg: "rgba(37,99,235,.07)", metricColor: "#2563eb",
                quote: "Meta Brain is what sold me. I can finally see which Facebook ad actually led to a booking — not just a click. We reallocated budget and results jumped immediately.",
                name: "Ahmed Al-Mansoori", role: "Founder, Palm Property Group · Dubai", initials: "AA", avatarBg: "linear-gradient(135deg,#2563eb,#4f46e5)",
              },
              {
                metric: "28s", metricLbl: "avg first response (was 4 hours)",
                metricBg: "rgba(124,58,237,.07)", metricColor: "#7c3aed",
                quote: "Our reception team was drowning in WhatsApp messages. LeadOS handles the first reply, qualifies the patient, and books them in — before our team even sees the message.",
                name: "Sarah Mitchell", role: "Practice Manager, Smile Dental · Sydney", initials: "SM", avatarBg: "linear-gradient(135deg,#7c3aed,#a855f7)",
              },
            ].map((t) => (
              <div key={t.name} className="testi-v2-card">
                <div className="testi-v2-metric-wrap" style={{ background: t.metricBg }}>
                  <div className="testi-v2-metric" style={{ color: t.metricColor }}>{t.metric}</div>
                  <div className="testi-v2-metric-lbl" style={{ color: t.metricColor }}>{t.metricLbl}</div>
                </div>
                <div className="testi-v2-stars">★★★★★</div>
                <p className="testi-v2-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testi-v2-person">
                  <div className="testi-v2-avatar" style={{ background: t.avatarBg }}>{t.initials}</div>
                  <div>
                    <div className="testi-v2-name">{t.name}</div>
                    <div className="testi-v2-role">{t.role}</div>
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
              <div className="p-price">${prices.starter}<span className="p-per">/month</span></div>
              {annual && <div style={{ fontSize: 12, color: "var(--green)", fontWeight: 700, marginTop: -6 }}>↓ Save 20% vs monthly</div>}
              <hr className="p-divider" />
              <ul className="p-feats">{["2 users", "1,000 AI chats / month", "Omni Inbox", "Website Chat", "Contacts", "Pipeline", "AI Assistant", "Basic Reporting"].map((f) => <li key={f} className="p-feat"><span className="p-check">✓</span>{f}</li>)}</ul>
              <Link href="/get-started?plan=starter" className="p-btn pb-outline" style={{ display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>{t('heroCta1')} →</Link>
            </div>

            <div className="pricing-card popular">
              <div className="popular-pill">{t('pricingMostPopular')}</div>
              <div className="p-tier">{t('pricingGrowth')}</div>
              <div className="p-tagline">{t('pricingGrowthTagline')}</div>
              <div className="p-price">${prices.growth}<span className="p-per">/month</span></div>
              {annual && <div style={{ fontSize: 12, color: "var(--green)", fontWeight: 700, marginTop: -6 }}>↓ Save 20% vs monthly</div>}
              <div style={{ display: "flex", alignItems: "center", gap: 7, background: "rgba(34,197,94,.08)", border: "1px solid rgba(34,197,94,.2)", borderRadius: 8, padding: "7px 11px", marginBottom: 4 }}>
                <span style={{ fontSize: 14 }}>🎁</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: "var(--green)" }}>First month free with Assisted Onboarding</span>
              </div>
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
            <a href="mailto:hello@leadoscrm.com">hello@leadoscrm.com</a>
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

"use client";
import { useState } from "react";

const CATEGORIES = [
  {
    id: "dental",
    label: "Dental Clinic",
    accent: "#0ea5e9",
    dark: "#0c4a6e",
    light: "#f0f9ff",
    headline: "Dubai's Most Trusted Dental Clinic",
    sub: "Book same-day · 15+ years experience · 3 locations",
    cta: "Book Appointment",
    nav: ["Services", "Team", "Gallery", "Contact"],
    sections: [
      { title: "Teeth Whitening", desc: "Professional-grade results in 45 min." },
      { title: "Dental Implants", desc: "Permanent solution. Natural look." },
      { title: "Orthodontics", desc: "Braces & invisible aligners." },
      { title: "Emergency Care", desc: "Same-day appointments available." },
    ],
    badge: "42s",
  },
  {
    id: "realestate",
    label: "Real Estate",
    accent: "#d4af37",
    dark: "#16213e",
    light: "#1a1a2e",
    headline: "Luxury Properties Across the UAE",
    sub: "500+ listings · Free valuation · 12 years in the market",
    cta: "Browse Listings",
    nav: ["Buy", "Rent", "Sell", "About"],
    sections: [
      { title: "Downtown Dubai", desc: "Apartments from AED 1.2M" },
      { title: "Palm Jumeirah", desc: "Villas from AED 8M" },
      { title: "Abu Dhabi", desc: "Off-plan from AED 600K" },
      { title: "Free Valuation", desc: "Know your property's worth." },
    ],
    badge: "38s",
  },
  {
    id: "restaurant",
    label: "Restaurant",
    accent: "#f97316",
    dark: "#431407",
    light: "#fff7ed",
    headline: "Authentic Lebanese Cuisine in Dubai",
    sub: "Open daily 12pm–12am · Reservations recommended",
    cta: "Reserve a Table",
    nav: ["Menu", "Reservations", "Events", "Our Story"],
    sections: [
      { title: "Mezze & Starters", desc: "Hummus, tabbouleh, fattoush." },
      { title: "Grills", desc: "Mixed grills, kofta, shish tawook." },
      { title: "Private Dining", desc: "Events for up to 80 guests." },
      { title: "Catering", desc: "Corporate and home events." },
    ],
    badge: "44s",
  },
  {
    id: "fitness",
    label: "Fitness Studio",
    accent: "#22c55e",
    dark: "#052e16",
    light: "#0f172a",
    headline: "Train Hard. Live Strong.",
    sub: "6am–11pm daily · Classes + Personal Training · JBR Dubai",
    cta: "Start Free Trial",
    nav: ["Classes", "Trainers", "Pricing", "Join"],
    sections: [
      { title: "HIIT Classes", desc: "45-min high-intensity sessions." },
      { title: "Personal Training", desc: "1-on-1 with certified coaches." },
      { title: "Membership Plans", desc: "From AED 299/month." },
      { title: "Nutrition Coaching", desc: "Meal plans + weekly check-ins." },
    ],
    badge: "33s",
  },
  {
    id: "spa",
    label: "Wellness & Spa",
    accent: "#a78bfa",
    dark: "#4a1d96",
    light: "#fdf4ff",
    headline: "Your Sanctuary in Downtown Dubai",
    sub: "Premium treatments · Members-only lounge · Open 7 days",
    cta: "Book a Session",
    nav: ["Treatments", "Packages", "Membership", "Gallery"],
    sections: [
      { title: "Swedish Massage", desc: "60 or 90 minute sessions." },
      { title: "Facial Treatments", desc: "Hydrating, anti-aging, glow." },
      { title: "Couples Package", desc: "Romantic spa retreat." },
      { title: "Membership", desc: "Monthly plans from AED 499." },
    ],
    badge: "51s",
  },
  {
    id: "lawfirm",
    label: "Law Firm",
    accent: "#0f766e",
    dark: "#134e4a",
    light: "#f0fdfa",
    headline: "Trusted Legal Counsel in the UAE",
    sub: "Corporate · Civil · Immigration · 20 years experience",
    cta: "Free Consultation",
    nav: ["Practice Areas", "Our Team", "Cases", "Contact"],
    sections: [
      { title: "Corporate Law", desc: "Company formation, contracts." },
      { title: "Immigration", desc: "Residency, work permits, UAE visas." },
      { title: "Civil Disputes", desc: "Litigation & arbitration." },
      { title: "Free Consult", desc: "30-min initial consultation." },
    ],
    badge: "57s",
  },
];

const isDarkBg = (id: string) => ["realestate", "fitness"].includes(id);

export default function WebsiteShowcase() {
  const [active, setActive] = useState(0);
  const cat = CATEGORIES[active];
  const dark = isDarkBg(cat.id);

  return (
    <div>
      {/* Category pills */}
      <div style={{
        display: "flex",
        gap: 8,
        overflowX: "auto",
        paddingBottom: 4,
        justifyContent: "center",
        flexWrap: "wrap",
        marginBottom: 32,
      }}>
        {CATEGORIES.map((c, i) => (
          <button
            key={c.id}
            onClick={() => setActive(i)}
            style={{
              padding: "9px 18px",
              borderRadius: 40,
              border: active === i ? `2px solid ${c.accent}` : "1.5px solid #e8e5e0",
              background: active === i ? c.accent : "white",
              color: active === i ? "white" : "#3d3d3d",
              fontWeight: 700,
              fontSize: 13,
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.15s",
              boxShadow: active === i ? `0 4px 16px ${c.accent}44` : "none",
            }}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Large preview */}
      <div style={{
        maxWidth: 820,
        margin: "0 auto",
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 32px 80px rgba(0,0,0,0.18)",
        border: "1px solid rgba(0,0,0,0.08)",
        transition: "box-shadow 0.3s",
      }}>
        {/* Browser chrome */}
        <div style={{ background: "#1e1e1e", padding: "12px 16px", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ display: "flex", gap: 6 }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
          </div>
          <div style={{ flex: 1, background: "#2d2d2d", borderRadius: 6, padding: "5px 12px", fontSize: 12, color: "#9ca3af", marginLeft: 8 }}>
            yourbusiness.com
          </div>
          <div style={{ background: "#22c55e", borderRadius: 4, padding: "3px 10px", fontSize: 11, fontWeight: 700, color: "white" }}>
            ⚡ Built in {cat.badge}
          </div>
        </div>

        {/* Website header */}
        <div style={{ background: cat.dark, padding: "0 0 0" }}>
          {/* Nav bar */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 28px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: cat.accent }} />
              <span style={{ color: "white", fontWeight: 800, fontSize: 14 }}>YourBusiness</span>
            </div>
            <div style={{ display: "flex", gap: 20 }}>
              {cat.nav.map(n => (
                <span key={n} style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, fontWeight: 500 }}>{n}</span>
              ))}
            </div>
            <div style={{ background: cat.accent, color: "white", borderRadius: 8, padding: "7px 16px", fontSize: 12, fontWeight: 700 }}>
              {cat.cta}
            </div>
          </div>

          {/* Hero */}
          <div style={{ padding: "48px 28px 52px", textAlign: "center" }}>
            <div style={{ display: "inline-block", background: `${cat.accent}22`, border: `1px solid ${cat.accent}44`, borderRadius: 20, padding: "4px 14px", fontSize: 11, color: cat.accent, fontWeight: 700, marginBottom: 16 }}>
              Built by LeadOS · {cat.label}
            </div>
            <h2 style={{ color: "white", fontSize: "clamp(22px,4vw,36px)", fontWeight: 900, margin: "0 0 10px", lineHeight: 1.2 }}>{cat.headline}</h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, margin: "0 0 28px" }}>{cat.sub}</p>
            <button style={{ background: cat.accent, color: "white", border: "none", borderRadius: 10, padding: "12px 28px", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
              {cat.cta}
            </button>
          </div>
        </div>

        {/* Services grid */}
        <div style={{ background: dark ? "#0f172a" : "#f9fafb", padding: "28px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {cat.sections.map(s => (
            <div key={s.title} style={{
              background: dark ? "#1e293b" : "white",
              border: `1px solid ${dark ? "rgba(255,255,255,0.06)" : "#e5e7eb"}`,
              borderRadius: 12,
              padding: "16px",
            }}>
              <div style={{ width: 28, height: 3, borderRadius: 2, background: cat.accent, marginBottom: 10 }} />
              <div style={{ fontSize: 13, fontWeight: 700, color: dark ? "white" : "#0a0a0a", marginBottom: 4 }}>{s.title}</div>
              <div style={{ fontSize: 11, color: dark ? "rgba(255,255,255,0.45)" : "#9ca3af", lineHeight: 1.5 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <p style={{ textAlign: "center", fontSize: 13, color: "#9ca3af", marginTop: 20 }}>
        Click a category above to preview · Every site is built by LeadOS and fully editable
      </p>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const API = "https://app.myleados.ai/api/public/customers";
const SIGNUP_URL = "/get-started";

interface Customer {
  id: string;
  name: string;
  slug: string;
  websiteUrl: string;
}

function getFavicon(url: string) {
  try {
    const host = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${host}&sz=64`;
  } catch {
    return null;
  }
}

function getDisplayDomain(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function CustomerCard({ c }: { c: Customer }) {
  const favicon = getFavicon(c.websiteUrl);
  const domain = getDisplayDomain(c.websiteUrl);

  return (
    <a
      href={c.websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        padding: "28px 20px",
        borderRadius: 16,
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.03)",
        textDecoration: "none",
        transition: "background 0.2s, border-color 0.2s, transform 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.07)";
        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(99,102,241,0.5)";
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.03)";
        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)";
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
      }}
    >
      {favicon ? (
        <img
          src={favicon}
          alt={c.name}
          width={40}
          height={40}
          style={{ borderRadius: 8, objectFit: "contain" }}
          onError={e => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
      ) : (
        <div style={{
          width: 40, height: 40, borderRadius: 8,
          background: "linear-gradient(135deg,#6366f1,#2563eb)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", fontWeight: 700, fontSize: 16,
        }}>
          {c.name.charAt(0).toUpperCase()}
        </div>
      )}
      <div style={{ textAlign: "center" }}>
        <div style={{ color: "#f1f5f9", fontWeight: 600, fontSize: 14, lineHeight: 1.4, marginBottom: 4 }}>
          {c.name}
        </div>
        <div style={{ color: "#94a3b8", fontSize: 12 }}>{domain}</div>
      </div>
      <div style={{
        marginTop: "auto",
        fontSize: 11,
        color: "#6366f1",
        background: "rgba(99,102,241,0.12)",
        borderRadius: 6,
        padding: "3px 10px",
        fontWeight: 500,
      }}>
        Visit site ↗
      </div>
    </a>
  );
}

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(d => setCustomers(d.customers || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <main style={{
      minHeight: "100vh",
      background: "#060a14",
      color: "#f1f5f9",
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: 1200,
        margin: "0 auto",
      }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <svg width={28} height={28} viewBox="0 0 46 46" fill="none">
            <defs>
              <linearGradient id="lg" x1="0" y1="0" x2="46" y2="46" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00C8F0" />
                <stop offset="55%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
            <rect width={46} height={46} rx={12} fill="url(#lg)" />
            <text x={10} y={32} fontSize={22} fontWeight={800} fill="#fff">L</text>
          </svg>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 18 }}>LeadOS</span>
        </Link>
        <Link href={SIGNUP_URL} style={{
          background: "linear-gradient(135deg,#6366f1,#2563eb)",
          color: "#fff",
          padding: "8px 20px",
          borderRadius: 8,
          fontSize: 14,
          fontWeight: 600,
          textDecoration: "none",
        }}>
          Get started
        </Link>
      </div>

      {/* Hero */}
      <div style={{ textAlign: "center", padding: "72px 24px 48px", maxWidth: 720, margin: "0 auto" }}>
        <div style={{
          display: "inline-block",
          background: "rgba(99,102,241,0.12)",
          border: "1px solid rgba(99,102,241,0.3)",
          borderRadius: 20,
          padding: "6px 16px",
          fontSize: 13,
          color: "#a5b4fc",
          fontWeight: 500,
          marginBottom: 24,
        }}>
          🌍 Global customers
        </div>
        <h1 style={{
          fontSize: "clamp(32px,5vw,52px)",
          fontWeight: 800,
          lineHeight: 1.15,
          margin: "0 0 20px",
          background: "linear-gradient(135deg,#fff 40%,#94a3b8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          Businesses growing with LeadOS AI
        </h1>
        <p style={{ color: "#94a3b8", fontSize: 18, lineHeight: 1.7, margin: 0 }}>
          From clinics in Abu Dhabi to travel agencies in Nepal — these businesses use LeadOS AI to publish content, capture leads, and grow online automatically.
        </p>
      </div>

      {/* Stats bar */}
      {!loading && customers.length > 0 && (
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 48,
          padding: "0 24px 56px",
          flexWrap: "wrap",
        }}>
          {[
            { label: "Active customers", value: customers.length + "+" },
            { label: "Countries", value: "15+" },
            { label: "AI articles published", value: "10,000+" },
          ].map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: "#fff", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: "#64748b", marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Grid */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 96px" }}>
        {loading ? (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
            gap: 16,
          }}>
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} style={{
                height: 160,
                borderRadius: 16,
                background: "rgba(255,255,255,0.04)",
                animation: "pulse 1.5s ease-in-out infinite",
              }} />
            ))}
          </div>
        ) : customers.length === 0 ? (
          <p style={{ textAlign: "center", color: "#64748b" }}>No customers found.</p>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
            gap: 16,
          }}>
            {customers.map(c => <CustomerCard key={c.id} c={c} />)}
          </div>
        )}
      </div>

      {/* CTA footer */}
      <div style={{
        background: "linear-gradient(135deg,rgba(99,102,241,0.15),rgba(37,99,235,0.15))",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "64px 24px",
        textAlign: "center",
      }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: "#fff", margin: "0 0 12px" }}>
          Ready to grow your business with AI?
        </h2>
        <p style={{ color: "#94a3b8", marginBottom: 32, fontSize: 16 }}>
          Join these businesses and start publishing AI-powered content today.
        </p>
        <Link href={SIGNUP_URL} style={{
          background: "linear-gradient(135deg,#6366f1,#2563eb)",
          color: "#fff",
          padding: "14px 36px",
          borderRadius: 10,
          fontSize: 16,
          fontWeight: 700,
          textDecoration: "none",
          display: "inline-block",
        }}>
          Start for free →
        </Link>
      </div>

      <style>{`
        @keyframes pulse {
          0%,100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </main>
  );
}

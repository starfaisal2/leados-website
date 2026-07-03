"use client";

import { useState } from "react";

export default function BrainSignupForm() {
  const [form, setForm] = useState({ full_name: "", company_name: "", email: "", phone: "", country: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://app.leadoscrm.com/api/auth/brain-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Signup failed");
      setDone(true);
    } catch (e: any) {
      setError(e.message || "Something went wrong. Please try again.");
    }
    setLoading(false);
  }

  const inp: React.CSSProperties = {
    width: "100%", padding: "12px 16px", borderRadius: 10, fontSize: 14,
    color: "white", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)",
    outline: "none", boxSizing: "border-box",
  };

  if (done) return (
    <div style={{ background: "rgba(124,58,237,.15)", border: "1px solid rgba(124,58,237,.3)", borderRadius: 16, padding: 32, textAlign: "center" }}>
      <div style={{ fontSize: 40, marginBottom: 12 }}>🧠</div>
      <h3 style={{ fontSize: 20, fontWeight: 800, color: "white", marginBottom: 8 }}>Check your email!</h3>
      <p style={{ fontSize: 14, color: "rgba(255,255,255,.6)", lineHeight: 1.7 }}>
        We've sent a magic link to <strong style={{ color: "white" }}>{form.email}</strong>.<br />
        Click it to open your Company Brain — no password needed.
      </p>
    </div>
  );

  return (
    <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 14, textAlign: "left" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,.5)", display: "block", marginBottom: 6 }}>Your Name *</label>
          <input style={inp} placeholder="Jane Smith" value={form.full_name} onChange={e => update("full_name", e.target.value)} required />
        </div>
        <div>
          <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,.5)", display: "block", marginBottom: 6 }}>Company Name *</label>
          <input style={inp} placeholder="Acme LLC" value={form.company_name} onChange={e => update("company_name", e.target.value)} required />
        </div>
      </div>
      <div>
        <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,.5)", display: "block", marginBottom: 6 }}>Work Email *</label>
        <input style={inp} type="email" placeholder="jane@company.com" value={form.email} onChange={e => update("email", e.target.value)} required />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,.5)", display: "block", marginBottom: 6 }}>Phone</label>
          <input style={inp} placeholder="+971 56 835 0424" value={form.phone} onChange={e => update("phone", e.target.value)} />
        </div>
        <div>
          <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,.5)", display: "block", marginBottom: 6 }}>Country</label>
          <input style={inp} placeholder="UAE" value={form.country} onChange={e => update("country", e.target.value)} />
        </div>
      </div>

      {error && (
        <div style={{ background: "rgba(239,68,68,.12)", border: "1px solid rgba(239,68,68,.2)", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#fca5a5" }}>
          {error}
        </div>
      )}

      <button type="submit" disabled={loading} style={{
        marginTop: 4, padding: "15px 0", borderRadius: 12, fontWeight: 800, fontSize: 16,
        color: "white", border: "none", cursor: loading ? "not-allowed" : "pointer",
        background: loading ? "#4b5563" : "linear-gradient(135deg, #7c3aed, #4f46e5)",
        boxShadow: loading ? "none" : "0 8px 24px rgba(124,58,237,.35)",
      }}>
        {loading ? "Setting up your Brain…" : "Start Free — No Credit Card →"}
      </button>
      <p style={{ fontSize: 11, color: "rgba(255,255,255,.3)", textAlign: "center", margin: 0 }}>
        30-day free trial · Up to 10 documents · No credit card required
      </p>
    </form>
  );
}

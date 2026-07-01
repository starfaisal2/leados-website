"use client";

import { useState } from "react";

export default function AutoSeoSignupForm() {
  const [form, setForm] = useState({ name: "", email: "", business_name: "", website_url: "", plan: "monthly" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://app.leadoscrm.com/api/internal/addons/standalone-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, addon_key: "auto_seo" }),
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    }
    setLoading(false);
  }

  if (success) {
    return (
      <div style={{ background: "rgba(79,70,229,.12)", border: "1px solid rgba(79,70,229,.25)", borderRadius: 16, padding: 36 }}>
        <div style={{ fontSize: 40, marginBottom: 16 }}>🎉</div>
        <div style={{ fontSize: 20, fontWeight: 800, color: "white", marginBottom: 8 }}>You're on the list!</div>
        <div style={{ fontSize: 14, color: "rgba(255,255,255,.6)", lineHeight: 1.65 }}>
          We'll reach out to <strong style={{ color: "rgba(255,255,255,.85)" }}>{form.email}</strong> within 24 hours to set up your Auto SEO account. While you wait, check out the{" "}
          <a href="/blog" style={{ color: "#818cf8" }}>LeadOS blog</a> to see Auto SEO articles in the wild.
        </div>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 16px", borderRadius: 10, fontSize: 14, color: "white",
    background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)",
    outline: "none", boxSizing: "border-box",
  };

  return (
    <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 14, textAlign: "left" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,.5)", display: "block", marginBottom: 6 }}>Your Name</label>
          <input
            style={inputStyle}
            placeholder="Jane Smith"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            required
          />
        </div>
        <div>
          <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,.5)", display: "block", marginBottom: 6 }}>Business Name</label>
          <input
            style={inputStyle}
            placeholder="Acme Clinic"
            value={form.business_name}
            onChange={e => setForm(f => ({ ...f, business_name: e.target.value }))}
          />
        </div>
      </div>
      <div>
        <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,.5)", display: "block", marginBottom: 6 }}>Email Address *</label>
        <input
          style={inputStyle}
          type="email"
          placeholder="jane@yourbusiness.com"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          required
        />
      </div>
      <div>
        <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,.5)", display: "block", marginBottom: 6 }}>Website URL</label>
        <input
          style={inputStyle}
          type="url"
          placeholder="https://yourbusiness.com"
          value={form.website_url}
          onChange={e => setForm(f => ({ ...f, website_url: e.target.value }))}
        />
      </div>

      {/* Plan toggle */}
      <div>
        <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,.5)", display: "block", marginBottom: 10 }}>Choose Your Plan</label>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            { key: "monthly", label: "Standalone", price: "$99/mo" },
            { key: "crm", label: "CRM Add-on", price: "$49/mo" },
          ].map(({ key, label, price }) => (
            <button
              key={key}
              type="button"
              onClick={() => setForm(f => ({ ...f, plan: key }))}
              style={{
                padding: "12px 8px", borderRadius: 10, border: `2px solid ${form.plan === key ? "#4f46e5" : "rgba(255,255,255,.1)"}`,
                background: form.plan === key ? "rgba(79,70,229,.2)" : "rgba(255,255,255,.04)",
                color: form.plan === key ? "white" : "rgba(255,255,255,.5)",
                cursor: "pointer", textAlign: "center",
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 700 }}>{label}</div>
              <div style={{ fontSize: 11, opacity: 0.7, marginTop: 2 }}>{price}</div>
            </button>
          ))}
        </div>
        {form.plan === "crm" && (
          <p style={{ fontSize: 11, color: "rgba(255,255,255,.35)", marginTop: 8 }}>
            Requires a LeadOS CRM subscription. If you don't have one, we'll help you get set up.
          </p>
        )}
      </div>

      {error && (
        <div style={{ background: "rgba(239,68,68,.12)", border: "1px solid rgba(239,68,68,.2)", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#fca5a5" }}>
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        style={{
          marginTop: 4, padding: "15px 0", borderRadius: 12, fontWeight: 800, fontSize: 16,
          color: "white", border: "none", cursor: loading ? "not-allowed" : "pointer",
          background: loading ? "#4b5563" : "linear-gradient(135deg, #4f46e5, #7c3aed)",
          boxShadow: loading ? "none" : "0 8px 24px rgba(79,70,229,.35)",
        }}
      >
        {loading ? "Submitting…" : "Get Started with Auto SEO →"}
      </button>
    </form>
  );
}

"use client";

import { useState } from "react";

export default function AutoSeoSignupForm() {
  const [form, setForm] = useState({ name: "", email: "", business_name: "", website_url: "", plan: "trial" });
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed) { setError("Please agree to the Terms & Conditions to continue."); return; }
    setLoading(true);
    setError("");
    try {
      const appUrl = "https://app.myleados.ai";

      if (form.plan === "trial" || form.plan === "standalone") {
        // → Free trial: redirect to CRM signup with pre-filled fields + addon_trial param
        const params = new URLSearchParams({
          addon_trial: "auto_seo",
          email: form.email,
          name: form.name,
          business_name: form.business_name,
        });
        window.location.href = `${appUrl}/signup?${params.toString()}`;
      } else {
        // CRM add-on — direct them to sign up for full CRM first
        window.location.href = `${appUrl}/signup?plan=crm_addon&email=${encodeURIComponent(form.email)}`;
      }
    } catch {
      setError("Network error. Please try again.");
    }
    setLoading(false);
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
            { key: "trial", label: "Free Trial", price: "$0", desc: "1 free article — no card needed" },
            { key: "crm", label: "CRM Add-on", price: "$49/mo", desc: "Already have LeadOS CRM" },
          ].map(({ key, label, price, desc }) => (
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
              <div style={{ fontSize: 18, fontWeight: 800, color: form.plan === key ? "#a5b4fc" : "inherit", marginTop: 2 }}>{price}</div>
              <div style={{ fontSize: 10, opacity: 0.6, marginTop: 3 }}>{desc}</div>
            </button>
          ))}
        </div>
        {form.plan === "trial" && (
          <p style={{ fontSize: 11, color: "rgba(165,180,252,.7)", marginTop: 8 }}>
            Sign up free, connect your website, generate 1 article on us. Pay $99/mo to continue.
          </p>
        )}
        {form.plan === "crm" && (
          <p style={{ fontSize: 11, color: "rgba(255,255,255,.35)", marginTop: 8 }}>
            Requires a LeadOS CRM subscription. We'll help you add Auto SEO from inside your dashboard.
          </p>
        )}
      </div>

      {/* Terms & Conditions */}
      <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer" }}>
        <input
          type="checkbox"
          checked={agreed}
          onChange={e => { setAgreed(e.target.checked); setError(""); }}
          style={{ marginTop: 2, accentColor: "#4f46e5", width: 15, height: 15, flexShrink: 0 }}
        />
        <span style={{ fontSize: 12, color: "rgba(255,255,255,.45)", lineHeight: 1.6 }}>
          I agree to LeadOS{" "}
          <a href="https://myleados.ai/terms" target="_blank" rel="noopener noreferrer" style={{ color: "#818cf8", textDecoration: "underline" }}>
            Terms of Service
          </a>{" "}and{" "}
          <a href="https://myleados.ai/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#818cf8", textDecoration: "underline" }}>
            Privacy Policy
          </a>. I understand that Auto SEO will publish AI-generated content to my website on my behalf and that I am responsible for reviewing and approving published content.
        </span>
      </label>

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
          background: (loading || !agreed) ? "#4b5563" : "linear-gradient(135deg, #4f46e5, #7c3aed)",
          opacity: !agreed ? 0.6 : 1,
          boxShadow: loading ? "none" : "0 8px 24px rgba(79,70,229,.35)",
        }}
      >
        {loading ? "Setting up your account…" : form.plan === "trial" ? "Start Free — Generate 1 Article →" : "Get CRM Add-on — $49/mo →"}
      </button>
      <p style={{ fontSize: 11, color: "rgba(255,255,255,.3)", textAlign: "center", margin: 0 }}>
        {form.plan === "trial" ? "No credit card required · 1 free article included" : "Secure payment via Stripe · Cancel anytime"}
      </p>
    </form>
  );
}

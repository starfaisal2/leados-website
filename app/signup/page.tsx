"use client";

import { useState } from "react";
import Link from "next/link";

const DEMO_ENDPOINT = "https://app.myleados.ai/api/contact/demo-request";

const INDUSTRIES = [
  "Clinic / Aesthetics",
  "Dental Clinic",
  "Medical Center",
  "Real Estate",
  "Restaurant",
  "Professional Services",
  "Education",
  "Legal",
  "Hospitality",
  "Automotive",
  "Other",
];

const PLANS = [
  { value: "starter",    label: "Starter — $499/mo" },
  { value: "growth",     label: "Growth — $999/mo" },
  { value: "enterprise", label: "Enterprise — Custom" },
];

const TEAM_SIZES = ["1–5", "6–20", "21–50", "51–200", "200+"];

type FormState = {
  full_name: string;
  company_name: string;
  email: string;
  phone: string;
  country: string;
  industry: string;
  plan: string;
  employees: string;
  message: string;
};

const empty: FormState = {
  full_name: "", company_name: "", email: "", phone: "",
  country: "", industry: "", plan: "", employees: "", message: "",
};

export default function DemoRequestPage() {
  const [form, setForm] = useState<FormState>(empty);
  const [loading, setLoading] = useState(false);
  const [error, setError]   = useState("");
  const [done, setDone]     = useState(false);

  const set = (key: keyof FormState, value: string) => {
    setForm(f => ({ ...f, [key]: value }));
    if (error) setError("");
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(DEMO_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Something went wrong. Please try again.");
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="signup-page">
      <div className="signup-bg-orb signup-orb-one" />
      <div className="signup-bg-orb signup-orb-two" />
      <div className="container signup-container">

        <div className="signup-copy">
          <Link href="/" className="signup-back">← Back to LeadOS</Link>
          <span className="eyebrow">Book a Demo</span>
          <h1 className="display-lg">
            Talk to us before you <span className="text-serif-em" style={{ color: "var(--blue)" }}>get started.</span>
          </h1>
          <p className="body-lg" style={{ marginTop: 18 }}>
            LeadOS is set up by our team — not a self-serve tool. Fill in your details and we'll reach out within 24 hours to walk you through the platform and get you onboarded.
          </p>
          <div className="signup-trust-list">
            <div><span>✓</span> Personal onboarding with our team</div>
            <div><span>✓</span> Custom setup for your industry</div>
            <div><span>✓</span> We connect your channels for you</div>
            <div><span>✓</span> Live demo before you pay anything</div>
          </div>
        </div>

        {done ? (
          <div className="signup-card" style={{ justifyContent: "center", alignItems: "center", textAlign: "center", gap: 16 }}>
            <div style={{ fontSize: 48 }}>🎉</div>
            <h2 style={{ margin: 0 }}>Request received!</h2>
            <p style={{ color: "var(--text-muted)", margin: 0, maxWidth: 320 }}>
              Thanks, we'll be in touch within 24 hours to schedule your demo.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: 14, margin: 0 }}>
              Check your inbox at <strong>{form.email}</strong> for a confirmation.
            </p>
          </div>
        ) : (
          <form className="signup-card" onSubmit={submit}>
            <div className="signup-card-header">
              <div>
                <h2>Request a demo</h2>
                <p>We'll contact you within 24 hours.</p>
              </div>
            </div>

            <div className="signup-grid-two">
              <label>
                Full name <span style={{ color: "var(--red, #ef4444)" }}>*</span>
                <input required value={form.full_name} onChange={e => set("full_name", e.target.value)} placeholder="Your name" autoComplete="name" />
              </label>
              <label>
                Company name <span style={{ color: "var(--red, #ef4444)" }}>*</span>
                <input required value={form.company_name} onChange={e => set("company_name", e.target.value)} placeholder="Business name" autoComplete="organization" />
              </label>
            </div>

            <label>
              Work email <span style={{ color: "var(--red, #ef4444)" }}>*</span>
              <input required type="email" value={form.email} onChange={e => set("email", e.target.value)} placeholder="you@company.com" autoComplete="email" />
            </label>

            <div className="signup-grid-two">
              <label>
                Phone number <span style={{ color: "var(--red, #ef4444)" }}>*</span>
                <input required value={form.phone} onChange={e => set("phone", e.target.value)} placeholder="+971 50 000 0000" autoComplete="tel" />
              </label>
              <label>
                Country
                <input value={form.country} onChange={e => set("country", e.target.value)} placeholder="UAE" autoComplete="country-name" />
              </label>
            </div>

            <div className="signup-grid-two">
              <label>
                Industry
                <select value={form.industry} onChange={e => set("industry", e.target.value)}>
                  <option value="">Select industry</option>
                  {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
                </select>
              </label>
              <label>
                Team size
                <select value={form.employees} onChange={e => set("employees", e.target.value)}>
                  <option value="">Select size</option>
                  {TEAM_SIZES.map(s => <option key={s} value={s}>{s} people</option>)}
                </select>
              </label>
            </div>

            <label>
              Plan you're interested in
              <select value={form.plan} onChange={e => set("plan", e.target.value)}>
                <option value="">Not sure yet</option>
                {PLANS.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
              </select>
            </label>

            <label>
              Anything specific you'd like to see in the demo?
              <textarea
                value={form.message}
                onChange={e => set("message", e.target.value)}
                placeholder="E.g. WhatsApp automation, booking management, AI follow-ups..."
                rows={3}
                style={{ resize: "vertical", minHeight: 80 }}
              />
            </label>

            {error && <div className="signup-alert signup-error">{error}</div>}

            <button className="signup-submit" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Request Demo →"}
            </button>

            <p className="signup-smallprint">
              By submitting, you agree to the LeadOS <Link href="/terms">Terms</Link> and <Link href="/privacy">Privacy Policy</Link>.
              We'll never share your details.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

// ─── Endpoints (same as /get-started) ────────────────────────────────────────
const INTENT_ENDPOINT = "https://app.myleados.ai/api/billing/signup-intent";
const CHECKOUT_ENDPOINT = "https://app.myleados.ai/api/billing/checkout-session";
const BOOK_URL = "https://wa.me/971568350424?text=Hi%20LeadOS%2C%20I%20would%20like%20to%20book%20a%20demo";
const TERMS_VERSION = "2026-06-01";

const PLAN_OPTIONS = [
  { value: "starter", label: "Starter — $499/mo" },
  { value: "growth",  label: "Growth — $999/mo" },
] as const;
type PlanValue = "starter" | "growth" | "enterprise";

const INDUSTRY_OPTIONS = [
  { value: "clinic",        label: "Clinic / Aesthetics" },
  { value: "dental",        label: "Dental" },
  { value: "wellness",      label: "Wellness / Spa" },
  { value: "real_estate",   label: "Real Estate" },
  { value: "legal",         label: "Legal" },
  { value: "automotive",    label: "Automotive" },
  { value: "home_services", label: "Home Services" },
  { value: "restaurant",    label: "Restaurant" },
  { value: "other",         label: "Other" },
];

type FormState = {
  full_name: string; company_name: string; email: string;
  phone: string; country: string; industry: string;
  plan: PlanValue; terms_accepted: boolean;
};
const empty: FormState = {
  full_name: "", company_name: "", email: "", phone: "",
  country: "", industry: "", plan: "growth", terms_accepted: false,
};

function messageFor(payload: any): string {
  if (!payload) return "Something went wrong. Please try again.";
  if (payload.code === "rate_limited")     return "Too many attempts. Please wait a minute.";
  if (payload.code === "invalid_email")    return "Please enter a valid email address.";
  if (payload.code === "invalid_phone")    return "Please enter a valid phone number.";
  if (payload.code === "invalid_country")  return "Please enter your country.";
  if (payload.code === "invalid_industry") return "Please choose an industry.";
  if (payload.code === "terms_required")   return "You must accept the Terms & Conditions.";
  if (payload.message) return payload.message;
  if (payload.error)   return payload.error;
  return "We couldn't start your setup. Please check your details and try again.";
}

// ─── Social proof logos (text-based, no external images) ─────────────────────
const LOGOS = ["Sydney Royal Clinic", "Enfield Royal Clinic", "Valour Africa Safaris", "Kids Quran School", "Explore US Now"];

const BENEFITS = [
  { icon: "💬", title: "All messages in one inbox", body: "WhatsApp, Facebook, Instagram, email — replied by AI in seconds." },
  { icon: "🤖", title: "AI that qualifies leads 24/7", body: "Your AI follows up instantly, books appointments, and never sleeps." },
  { icon: "📊", title: "Full pipeline visibility", body: "See every lead, booking, and revenue opportunity in one dashboard." },
  { icon: "🚀", title: "Live in 48 hours", body: "Our team handles your entire onboarding — you don't lift a finger." },
];

export default function CrmLandingPage() {
  const [form, setForm]     = useState<FormState>(empty);
  const [loading, setLoading] = useState(false);
  const [error, setError]   = useState("");
  const [notice, setNotice] = useState<{ kind: "error" | "info"; message: string; showContact?: boolean } | null>(null);

  // Read plan + UTMs from query params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan");
    if (plan === "starter" || plan === "growth") {
      setForm(f => ({ ...f, plan }));
    }
  }, []);

  const update = (key: keyof FormState, value: any) => {
    setForm(f => ({ ...f, [key]: value }));
    if (error || notice) { setError(""); setNotice(null); }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(""); setNotice(null);

    const params = new URLSearchParams(window.location.search);
    const acquisition = {
      utm_source:   params.get("utm_source")   || undefined,
      utm_medium:   params.get("utm_medium")   || undefined,
      utm_campaign: params.get("utm_campaign") || undefined,
      utm_content:  params.get("utm_content")  || undefined,
      referrer:     typeof document !== "undefined" ? document.referrer || undefined : undefined,
      landing_page: typeof window   !== "undefined" ? window.location.href : undefined,
    };

    try {
      const intentRes = await fetch(INTENT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name:     form.full_name.trim(),
          company_name:  form.company_name.trim(),
          email:         form.email.trim(),
          phone:         form.phone.trim(),
          country:       form.country.trim(),
          industry:      form.industry,
          plan:          form.plan,
          terms_accepted: form.terms_accepted,
          terms_version: TERMS_VERSION,
          ...acquisition,
        }),
      });
      const intentData = await intentRes.json().catch(() => null);
      if (!intentRes.ok || !intentData?.ok) {
        if (intentData?.code === "enterprise_requires_demo") {
          setNotice({ kind: "info", message: "Enterprise plans are set up with our team. Please book a demo.", showContact: true });
          return;
        }
        setNotice({ kind: "error", message: messageFor(intentData) });
        return;
      }

      const checkoutRes = await fetch(CHECKOUT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ intent_id: intentData.intent_id }),
      });
      const checkoutData = await checkoutRes.json().catch(() => null);

      if (checkoutData?.ok && checkoutData.checkout_url) {
        window.location.href = checkoutData.checkout_url;
        return;
      }
      if (checkoutData?.code === "stripe_not_configured") {
        setNotice({ kind: "info", message: "Please book a demo and our team will complete your setup.", showContact: true });
        return;
      }
      setNotice({ kind: "error", message: messageFor(checkoutData), showContact: true });
    } catch {
      setNotice({ kind: "error", message: "We couldn't reach the server. Please check your connection." });
    } finally {
      setLoading(false);
    }
  };

  const planLabel = useMemo(() =>
    PLAN_OPTIONS.find(p => p.value === form.plan)?.label ?? "Starter", [form.plan]);

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #f8fafc; color: #0f172a; }

        /* ── Minimal header ── */
        .lp-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 24px; background: #fff; border-bottom: 1px solid #e2e8f0;
          position: sticky; top: 0; z-index: 50;
        }
        .lp-logo { font-size: 20px; font-weight: 900; color: #0f172a; text-decoration: none; }
        .lp-logo span { color: #4f46e5; }
        .lp-header-right { display: flex; align-items: center; gap: 16px; }
        .lp-header-cta {
          background: #4f46e5; color: #fff; border: none; border-radius: 8px;
          padding: 9px 18px; font-size: 14px; font-weight: 600; cursor: pointer;
          text-decoration: none; white-space: nowrap;
        }
        .lp-trust-strip {
          font-size: 13px; color: #64748b;
        }

        /* ── Two-col layout ── */
        .lp-main {
          max-width: 1100px; margin: 0 auto; padding: 48px 24px 80px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: start;
        }

        /* ── Left copy ── */
        .lp-eyebrow {
          display: inline-block; background: #ede9fe; color: #4f46e5;
          font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
          padding: 4px 12px; border-radius: 20px; margin-bottom: 16px;
        }
        .lp-headline { font-size: 40px; font-weight: 900; line-height: 1.15; color: #0f172a; }
        .lp-headline em { font-style: normal; color: #4f46e5; }
        .lp-subhead { font-size: 17px; color: #475569; line-height: 1.7; margin-top: 16px; }

        /* ── Benefits grid ── */
        .lp-benefits { display: grid; gap: 20px; margin-top: 36px; }
        .lp-benefit { display: flex; gap: 14px; align-items: flex-start; }
        .lp-benefit-icon {
          width: 42px; height: 42px; border-radius: 10px; background: #f1f5f9;
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; flex-shrink: 0;
        }
        .lp-benefit-title { font-size: 15px; font-weight: 700; color: #0f172a; }
        .lp-benefit-body  { font-size: 14px; color: #64748b; margin-top: 2px; line-height: 1.5; }

        /* ── Social proof ── */
        .lp-logos { margin-top: 40px; }
        .lp-logos-label { font-size: 12px; color: #94a3b8; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; margin-bottom: 12px; }
        .lp-logos-row { display: flex; flex-wrap: wrap; gap: 8px; }
        .lp-logo-pill {
          font-size: 12px; font-weight: 600; color: #475569;
          background: #fff; border: 1px solid #e2e8f0; border-radius: 20px;
          padding: 5px 12px;
        }

        /* ── Form card ── */
        .lp-card {
          background: #fff; border-radius: 16px; border: 1px solid #e2e8f0;
          box-shadow: 0 4px 32px rgba(0,0,0,.07); padding: 32px;
          position: sticky; top: 84px;
        }
        .lp-card-title { font-size: 20px; font-weight: 800; color: #0f172a; }
        .lp-card-sub   { font-size: 14px; color: #64748b; margin-top: 4px; margin-bottom: 24px; }
        .lp-plan-pill {
          display: inline-block; background: #ede9fe; color: #4f46e5;
          font-size: 12px; font-weight: 700; padding: 3px 10px; border-radius: 20px;
          margin-bottom: 24px;
        }

        .lp-form { display: flex; flex-direction: column; gap: 14px; }
        .lp-row  { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .lp-form label { display: flex; flex-direction: column; gap: 5px; font-size: 13px; font-weight: 600; color: #334155; }
        .lp-form input, .lp-form select {
          padding: 10px 12px; border: 1.5px solid #e2e8f0; border-radius: 8px;
          font-size: 14px; color: #0f172a; background: #f8fafc;
          transition: border-color .15s;
        }
        .lp-form input:focus, .lp-form select:focus { outline: none; border-color: #4f46e5; background: #fff; }
        .lp-checkbox-row { display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: #475569; font-weight: 400; cursor: pointer; }
        .lp-checkbox-row a { color: #4f46e5; }

        .lp-submit {
          width: 100%; background: #4f46e5; color: #fff; border: none;
          border-radius: 10px; padding: 14px; font-size: 16px; font-weight: 700;
          cursor: pointer; transition: background .15s, transform .1s;
          margin-top: 4px;
        }
        .lp-submit:hover:not(:disabled) { background: #4338ca; transform: translateY(-1px); }
        .lp-submit:disabled { opacity: .65; cursor: not-allowed; }

        .lp-alert-error { background: #fef2f2; border: 1px solid #fca5a5; border-radius: 8px; padding: 12px; font-size: 13px; color: #b91c1c; }
        .lp-alert-info  { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 12px; font-size: 13px; color: #1d4ed8; }

        .lp-smallprint { font-size: 12px; color: #94a3b8; text-align: center; margin-top: 12px; line-height: 1.6; }
        .lp-smallprint a { color: #64748b; }

        /* ── Footer ── */
        .lp-footer {
          text-align: center; padding: 24px; font-size: 12px; color: #94a3b8;
          border-top: 1px solid #e2e8f0;
        }
        .lp-footer a { color: #64748b; margin: 0 8px; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .lp-main { grid-template-columns: 1fr; gap: 36px; padding: 32px 16px 64px; }
          .lp-headline { font-size: 28px; }
          .lp-card { position: static; }
          .lp-row { grid-template-columns: 1fr; }
          .lp-trust-strip { display: none; }
        }
      `}</style>

      {/* ── Minimal nav (no exit links) ── */}
      <header className="lp-header">
        <a href="/" className="lp-logo">Lead<span>OS</span></a>
        <div className="lp-header-right">
          <span className="lp-trust-strip">🔒 Secure checkout · Setup in 48 hrs</span>
          <a href="#signup-form" className="lp-header-cta">Get Started</a>
        </div>
      </header>

      <main className="lp-main">
        {/* ── Left: copy + benefits ── */}
        <div>
          <span className="lp-eyebrow">AI-Powered CRM</span>
          <h1 className="lp-headline">
            Turn every lead into a<br />
            <em>paying customer</em> — automatically.
          </h1>
          <p className="lp-subhead">
            LeadOS connects your WhatsApp, Instagram, Facebook &amp; email into one AI inbox
            that qualifies leads, books appointments, and follows up 24/7.
          </p>

          <div className="lp-benefits">
            {BENEFITS.map(b => (
              <div key={b.title} className="lp-benefit">
                <div className="lp-benefit-icon">{b.icon}</div>
                <div>
                  <div className="lp-benefit-title">{b.title}</div>
                  <div className="lp-benefit-body">{b.body}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="lp-logos">
            <div className="lp-logos-label">Trusted by businesses in 10+ countries</div>
            <div className="lp-logos-row">
              {LOGOS.map(name => (
                <span key={name} className="lp-logo-pill">{name}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: signup form ── */}
        <div id="signup-form" className="lp-card">
          <div className="lp-card-title">Start your LeadOS workspace</div>
          <div className="lp-card-sub">Setup in 48 hours · No long-term contract</div>
          <div className="lp-plan-pill">{planLabel}</div>

          <form className="lp-form" onSubmit={submit}>
            <div className="lp-row">
              <label>
                Full name *
                <input required value={form.full_name} onChange={e => update("full_name", e.target.value)} placeholder="Your name" autoComplete="name" />
              </label>
              <label>
                Business name *
                <input required value={form.company_name} onChange={e => update("company_name", e.target.value)} placeholder="Company name" autoComplete="organization" />
              </label>
            </div>

            <label>
              Email *
              <input required type="email" value={form.email} onChange={e => update("email", e.target.value)} placeholder="you@company.com" autoComplete="email" />
            </label>

            <div className="lp-row">
              <label>
                Phone *
                <input required value={form.phone} onChange={e => update("phone", e.target.value)} placeholder="+971 56 000 0000" autoComplete="tel" />
              </label>
              <label>
                Country *
                <input required value={form.country} onChange={e => update("country", e.target.value)} placeholder="UAE" autoComplete="country-name" />
              </label>
            </div>

            <div className="lp-row">
              <label>
                Industry *
                <select required value={form.industry} onChange={e => update("industry", e.target.value)}>
                  <option value="">Select…</option>
                  {INDUSTRY_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </label>
              <label>
                Plan
                <select value={form.plan} onChange={e => update("plan", e.target.value as PlanValue)}>
                  {PLAN_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </label>
            </div>

            <label className="lp-checkbox-row">
              <input type="checkbox" checked={form.terms_accepted} onChange={e => update("terms_accepted", e.target.checked)} />
              <span>
                I agree to the <Link href="/terms" target="_blank">Terms &amp; Conditions</Link> and{" "}
                <Link href="/privacy" target="_blank">Privacy Policy</Link>, including the one-time setup fee.
              </span>
            </label>

            {notice && (
              <div className={notice.kind === "error" ? "lp-alert-error" : "lp-alert-info"}>
                {notice.message}
                {notice.showContact && (
                  <div style={{ marginTop: 8 }}>
                    <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 700 }}>Book a demo →</a>
                  </div>
                )}
              </div>
            )}

            <button className="lp-submit" type="submit" disabled={loading}>
              {loading ? "Setting up…" : "Continue to secure payment →"}
            </button>

            <p className="lp-smallprint">
              🔒 Secure Stripe checkout · Professional onboarding included · First month included after setup<br />
              <Link href="/terms" target="_blank">Terms</Link> · <Link href="/privacy" target="_blank">Privacy</Link>
            </p>
          </form>
        </div>
      </main>

      <footer className="lp-footer">
        © {new Date().getFullYear()} Leados Technologies FZC · UAE ·
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
        <a href="/contact">Contact</a>
      </footer>
    </>
  );
}

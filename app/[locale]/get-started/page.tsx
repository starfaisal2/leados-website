"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from 'next-intl';
import Link from "next/link";

const INTENT_ENDPOINT = "https://app.leadoscrm.com/api/billing/signup-intent";
const CHECKOUT_ENDPOINT = "https://app.leadoscrm.com/api/billing/checkout-session";

const BOOK_URL =
  "https://wa.me/971568350424?text=Hi%20LeadOS%2C%20I%20would%20like%20to%20book%20a%20demo";
const SALES_URL =
  "https://wa.me/971568350424?text=Hi%20LeadOS%2C%20I%20would%20like%20to%20discuss%20Enterprise";

const TERMS_VERSION = "2026-06-01";

const PLAN_OPTIONS = [
  { value: "starter", label: "Starter" },
  { value: "growth", label: "Growth" },
  { value: "enterprise", label: "Enterprise AI" },
] as const;

type PlanValue = (typeof PLAN_OPTIONS)[number]["value"];

const INDUSTRY_OPTIONS = [
  { value: "clinic", label: "Clinic / Aesthetics" },
  { value: "dental", label: "Dental" },
  { value: "wellness", label: "Wellness / Spa" },
  { value: "real_estate", label: "Real Estate" },
  { value: "legal", label: "Legal" },
  { value: "automotive", label: "Automotive" },
  { value: "home_services", label: "Home Services" },
  { value: "restaurant", label: "Restaurant" },
  { value: "other", label: "Other" },
] as const;

type FormState = {
  full_name: string;
  company_name: string;
  email: string;
  phone: string;
  country: string;
  industry: string;
  plan: PlanValue;
  terms_accepted: boolean;
};

const initialState: FormState = {
  full_name: "",
  company_name: "",
  email: "",
  phone: "",
  country: "",
  industry: "",
  plan: "growth",
  terms_accepted: false,
};

type Notice = { kind: "error" | "info"; message: string; showContact?: boolean };

export default function GetStartedPage() {
  const t = useTranslations('getStarted');
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState<Notice | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan")?.toLowerCase();
    if (plan === "starter" || plan === "growth" || plan === "enterprise") {
      setForm((current) => ({ ...current, plan }));
    }
  }, []);

  const selectedPlanLabel = useMemo(
    () => PLAN_OPTIONS.find((option) => option.value === form.plan)?.label || "Growth",
    [form.plan]
  );

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
    if (notice) setNotice(null);
  };

  const fail = (message: string, showContact = false) =>
    setNotice({ kind: "error", message, showContact });

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.terms_accepted) {
      fail("Please accept the Terms & Conditions to continue.");
      return;
    }
    setLoading(true);
    setNotice(null);

    const params = new URLSearchParams(window.location.search);
    const acquisition = {
      utm_source: params.get("utm_source") || undefined,
      utm_medium: params.get("utm_medium") || undefined,
      utm_campaign: params.get("utm_campaign") || undefined,
      utm_content: params.get("utm_content") || undefined,
      referrer: typeof document !== "undefined" ? document.referrer || undefined : undefined,
      landing_page: typeof window !== "undefined" ? window.location.href : undefined,
    };

    try {
      const intentRes = await fetch(INTENT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: form.full_name.trim(),
          company_name: form.company_name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          country: form.country.trim(),
          industry: form.industry,
          plan: form.plan,
          terms_accepted: form.terms_accepted,
          terms_version: TERMS_VERSION,
          ...acquisition,
        }),
      });
      const intentData = await intentRes.json().catch(() => null);

      if (!intentRes.ok || !intentData?.ok) {
        if (intentData?.code === "enterprise_requires_demo") {
          fail(
            intentData.message ||
              "Enterprise plans are set up with our team. Please book a demo or contact sales.",
            true
          );
          return;
        }
        fail(messageFor(intentData));
        return;
      }

      const intentId: string = intentData.intent_id;

      const checkoutRes = await fetch(CHECKOUT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ intent_id: intentId }),
      });
      const checkoutData = await checkoutRes.json().catch(() => null);

      if (checkoutData?.ok && checkoutData.checkout_url) {
        window.location.href = checkoutData.checkout_url;
        return;
      }

      if (checkoutData?.code === "stripe_not_configured") {
        setNotice({
          kind: "info",
          message:
            "Online payment is being configured. Please book a demo or contact sales and we'll complete your onboarding.",
          showContact: true,
        });
        return;
      }

      if (checkoutData?.code === "enterprise_requires_demo") {
        fail(
          checkoutData.message ||
            "Enterprise plans are set up with our team. Please book a demo or contact sales.",
          true
        );
        return;
      }

      fail(messageFor(checkoutData), true);
    } catch {
      fail("We couldn't reach the server. Please check your connection and try again.");
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
          <Link href="/" className="signup-back">{t('back')}</Link>
          <span className="eyebrow">{t('eyebrow')}</span>
          <h1 className="display-lg">
            {t('h1part1')}{" "}
            <span className="text-serif-em" style={{ color: "var(--blue)" }}>{selectedPlanLabel}</span>{" "}
            {t('h1part2')}
          </h1>
          <p className="body-lg" style={{ marginTop: 18 }}>
            {t('subtitle')}
          </p>
          <div className="signup-trust-list">
            <div><span>✓</span> {t('trust1')}</div>
            <div><span>✓</span> {t('trust2')}</div>
            <div><span>✓</span> {t('trust3')}</div>
            <div><span>✓</span> {t('trust4')}</div>
          </div>
        </div>

        <form className="signup-card" onSubmit={submit}>
          <div className="signup-card-header">
            <div>
              <h2>{t('formH2')}</h2>
              <p>{t('formSubtitle')}</p>
            </div>
            <div className="signup-plan-pill">{selectedPlanLabel}</div>
          </div>

          <div className="signup-grid-two">
            <label>
              {t('fullName')}
              <input required value={form.full_name} onChange={(e) => update("full_name", e.target.value)} placeholder={t('fullNamePlaceholder')} autoComplete="name" />
            </label>
            <label>
              {t('companyName')}
              <input required value={form.company_name} onChange={(e) => update("company_name", e.target.value)} placeholder={t('companyNamePlaceholder')} autoComplete="organization" />
            </label>
          </div>

          <label>
            {t('email')}
            <input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder={t('emailPlaceholder')} autoComplete="email" />
          </label>

          <div className="signup-grid-two">
            <label>
              {t('phone')}
              <input value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder={t('phonePlaceholder')} autoComplete="tel" />
            </label>
            <label>
              {t('country')}
              <input value={form.country} onChange={(e) => update("country", e.target.value)} placeholder={t('countryPlaceholder')} autoComplete="country-name" />
            </label>
          </div>

          <div className="signup-grid-two">
            <label>
              {t('industry')}
              <select required value={form.industry} onChange={(e) => update("industry", e.target.value)}>
                <option value="">{t('selectIndustry')}</option>
                {INDUSTRY_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </label>
            <label>
              {t('plan')}
              <select value={form.plan} onChange={(e) => update("plan", e.target.value as PlanValue)}>
                {PLAN_OPTIONS.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
              </select>
            </label>
          </div>

          <label style={{ flexDirection: "row", alignItems: "flex-start", gap: 10, fontWeight: 600, cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={form.terms_accepted}
              onChange={(e) => update("terms_accepted", e.target.checked)}
            />
            <span style={{ fontSize: 13, lineHeight: 1.5, color: "var(--ink-3)" }}>
              {t('termsLabel')}
            </span>
          </label>

          {notice && (
            <div className={`signup-alert ${notice.kind === "error" ? "signup-error" : "signup-success"}`}>
              {notice.message}
              {notice.showContact && (
                <div style={{ marginTop: 8, display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 800 }}>Book a demo →</a>
                  <a href={SALES_URL} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 800 }}>Contact sales →</a>
                </div>
              )}
            </div>
          )}

          <button className="signup-submit" type="submit" disabled={loading}>
            {loading ? t('submitting') : t('submit')}
          </button>

          <p className="signup-smallprint">
            {t('smallprint')}
          </p>
        </form>
      </div>
    </section>
  );
}

function messageFor(payload: any): string {
  if (!payload) return "Something went wrong. Please try again.";
  if (payload.code === "rate_limited") return "Too many attempts. Please wait a minute and try again.";
  if (payload.code === "invalid_email") return "Please enter a valid email address.";
  if (payload.code === "invalid_phone") return "Please enter a valid phone number.";
  if (payload.code === "invalid_country") return "Please enter a valid country.";
  if (payload.code === "invalid_industry") return "Please choose a valid industry.";
  if (payload.code === "invalid_plan") return "Please choose a valid plan.";
  if (payload.code === "terms_required") return "You must accept the Terms & Conditions.";
  if (payload.message) return payload.message;
  if (payload.error) return payload.error;
  return "We couldn't start your setup. Please check your details and try again.";
}

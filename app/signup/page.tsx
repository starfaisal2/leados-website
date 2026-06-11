"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const SIGNUP_ENDPOINT = "https://app.leadoscrm.com/api/auth/signup";

const PLAN_OPTIONS = [
  { value: "starter", label: "Starter" },
  { value: "growth", label: "Growth" },
  { value: "enterprise", label: "Enterprise AI" },
] as const;

type PlanValue = (typeof PLAN_OPTIONS)[number]["value"];

type SignupState = {
  full_name: string;
  company_name: string;
  email: string;
  password: string;
  phone: string;
  country: string;
  industry: string;
  plan: PlanValue;
};

const initialState: SignupState = {
  full_name: "",
  company_name: "",
  email: "",
  password: "",
  phone: "",
  country: "",
  industry: "",
  plan: "growth",
};

function getErrorMessage(payload: any) {
  if (!payload) return "Something went wrong. Please try again.";
  if (payload.message) return payload.message;
  if (payload.error) return payload.error;
  if (payload.code === "invalid_phone") return "Please enter a valid phone number.";
  if (payload.code === "invalid_country") return "Please enter a valid country.";
  if (payload.code === "invalid_plan") return "Please select a valid plan.";
  return "Signup failed. Please check your details and try again.";
}

export default function SignupPage() {
  const [form, setForm] = useState<SignupState>(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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

  const updateField = (key: keyof SignupState, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
    if (error) setError("");
  };

  const submitSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(SIGNUP_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: form.full_name.trim(),
          company_name: form.company_name.trim(),
          email: form.email.trim(),
          password: form.password,
          industry: form.industry.trim(),
          phone: form.phone.trim(),
          country: form.country.trim(),
          plan: form.plan,
        }),
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(getErrorMessage(payload));
      }

      setSuccess("Account created. Redirecting you to LeadOS...");
      const redirectUrl = payload?.onboarding_url || payload?.dashboard_url || "https://app.leadoscrm.com/login?created=true";
      window.location.href = redirectUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Signup failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <section className="signup-page">
        <div className="signup-bg-orb signup-orb-one" />
        <div className="signup-bg-orb signup-orb-two" />
        <div className="container signup-container">
          <div className="signup-copy">
            <Link href="/" className="signup-back">← Back to LeadOS</Link>
            <span className="eyebrow">Start Free Trial</span>
            <h1 className="display-lg">
              Start your LeadOS trial with the <span className="text-serif-em" style={{ color: "var(--blue)" }}>{selectedPlanLabel}</span> plan.
            </h1>
            <p className="body-lg" style={{ marginTop: 18 }}>
              Create your LeadOS workspace and start your AI CRM onboarding. Your selected plan is saved for provisioning and future billing setup.
            </p>
            <div className="signup-trust-list">
              <div><span>✓</span> 7-day free trial</div>
              <div><span>✓</span> No CRM secrets exposed</div>
              <div><span>✓</span> Guided onboarding</div>
              <div><span>✓</span> Human + AI setup support</div>
            </div>
          </div>

          <form className="signup-card" onSubmit={submitSignup}>
            <div className="signup-card-header">
              <div>
                <h2>Create your workspace</h2>
                <p>Tell us about your business.</p>
              </div>
              <div className="signup-plan-pill">{selectedPlanLabel}</div>
            </div>

            <div className="signup-grid-two">
              <label>
                Full name
                <input required value={form.full_name} onChange={(e) => updateField("full_name", e.target.value)} placeholder="Your name" autoComplete="name" />
              </label>
              <label>
                Company / Business name
                <input required value={form.company_name} onChange={(e) => updateField("company_name", e.target.value)} placeholder="Company name" autoComplete="organization" />
              </label>
            </div>

            <label>
              Email
              <input required type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="you@company.com" autoComplete="email" />
            </label>

            <label>
              Password
              <input required type="password" minLength={8} value={form.password} onChange={(e) => updateField("password", e.target.value)} placeholder="Minimum 8 characters" autoComplete="new-password" />
            </label>

            <div className="signup-grid-two">
              <label>
                Phone
                <input value={form.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="+971 56 835 0424" autoComplete="tel" />
              </label>
              <label>
                Country
                <input value={form.country} onChange={(e) => updateField("country", e.target.value)} placeholder="UAE" autoComplete="country-name" />
              </label>
            </div>

            <div className="signup-grid-two">
              <label>
                Industry
                <select required value={form.industry} onChange={(e) => updateField("industry", e.target.value)}>
                  <option value="">Select industry</option>
                  <option value="clinic">Clinic / Aesthetics</option>
                  <option value="dental">Dental Clinic</option>
                  <option value="medical_center">Medical Center</option>
                  <option value="real_estate">Real Estate</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="professional_services">Professional Services</option>
                  <option value="education">Education</option>
                  <option value="legal">Legal</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <label>
                Plan
                <select value={form.plan} onChange={(e) => updateField("plan", e.target.value as PlanValue)}>
                  {PLAN_OPTIONS.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
              </label>
            </div>

            {error && <div className="signup-alert signup-error">{error}</div>}
            {success && <div className="signup-alert signup-success">{success}</div>}

            <button className="signup-submit" type="submit" disabled={loading}>
              {loading ? "Creating workspace..." : "Start Free Trial"}
            </button>

            <p className="signup-smallprint">
              By continuing, you agree to the LeadOS <Link href="/terms">Terms</Link> and <Link href="/privacy">Privacy Policy</Link>.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

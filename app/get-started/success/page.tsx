"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const STATUS_BASE = "https://app.leadoscrm.com/api/billing/signup-intent";

const BOOK_URL =
  "https://wa.me/971568350424?text=Hi%20LeadOS%2C%20I%20would%20like%20to%20book%20a%20demo";

type Phase = "loading" | "provisioning" | "ready" | "slow" | "error";

const POLL_INTERVAL_MS = 4000;
const MAX_ATTEMPTS = 45; // ~3 minutes of polling before we fall back to email.

export default function GetStartedSuccessPage() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [onboardingUrl, setOnboardingUrl] = useState<string | null>(null);
  const attempts = useRef(0);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const intentId = params.get("intent_id");
    if (!intentId) {
      setPhase("error");
      return;
    }

    let active = true;
    let timer: ReturnType<typeof setTimeout>;

    const poll = async () => {
      attempts.current += 1;
      try {
        const res = await fetch(`${STATUS_BASE}/${encodeURIComponent(intentId)}/status`);
        const data = await res.json().catch(() => null);

        if (!active) return;

        if (data?.ok && data.provisioned) {
          const url = data.onboarding_url || data.dashboard_url;
          setOnboardingUrl(url || null);
          setPhase("ready");
          if (url) {
            // Brief pause so the user sees the confirmation before the redirect.
            setTimeout(() => { if (active) window.location.href = url; }, 1500);
          }
          return;
        }

        if (data?.ok && data.status === "error") {
          setPhase("error");
          return;
        }

        if (attempts.current >= MAX_ATTEMPTS) {
          setPhase("slow");
          return;
        }

        setPhase("provisioning");
        timer = setTimeout(poll, POLL_INTERVAL_MS);
      } catch {
        if (!active) return;
        if (attempts.current >= MAX_ATTEMPTS) {
          setPhase("slow");
          return;
        }
        timer = setTimeout(poll, POLL_INTERVAL_MS);
      }
    };

    poll();
    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="signup-page">
      <div className="signup-bg-orb signup-orb-one" />
      <div className="signup-bg-orb signup-orb-two" />
      <div className="container" style={{ maxWidth: 640, textAlign: "center" }}>
        <Link href="/" className="signup-back" style={{ justifyContent: "center" }}>← Back to LeadOS</Link>

        {(phase === "loading" || phase === "provisioning") && (
          <>
            <span className="eyebrow">Payment received</span>
            <h1 className="display-lg" style={{ marginTop: 10 }}>Setting up your workspace…</h1>
            <p className="body-lg" style={{ marginTop: 18 }}>
              Thank you — your payment is confirmed. We’re provisioning your LeadOS workspace and
              starting your professional onboarding. This usually takes a moment; you’ll be redirected
              automatically when it’s ready.
            </p>
          </>
        )}

        {phase === "ready" && (
          <>
            <span className="eyebrow">All set</span>
            <h1 className="display-lg" style={{ marginTop: 10 }}>Your workspace is ready 🎉</h1>
            <p className="body-lg" style={{ marginTop: 18 }}>
              {onboardingUrl
                ? "Redirecting you to your onboarding…"
                : "Your LeadOS workspace has been created. Check your email for your secure setup link."}
            </p>
            {onboardingUrl && (
              <a href={onboardingUrl} className="signup-submit" style={{ display: "inline-flex", marginTop: 22, width: "auto", padding: "14px 28px", textDecoration: "none" }}>
                Continue to onboarding →
              </a>
            )}
          </>
        )}

        {phase === "slow" && (
          <>
            <span className="eyebrow">Almost there</span>
            <h1 className="display-lg" style={{ marginTop: 10 }}>This is taking a little longer</h1>
            <p className="body-lg" style={{ marginTop: 18 }}>
              Your payment is confirmed and your workspace is still being set up. We’ll email you your
              secure onboarding link as soon as it’s ready — no need to wait on this page.
            </p>
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="signup-submit" style={{ display: "inline-flex", marginTop: 22, width: "auto", padding: "14px 28px", textDecoration: "none" }}>
              Talk to our team →
            </a>
          </>
        )}

        {phase === "error" && (
          <>
            <span className="eyebrow">Need a hand?</span>
            <h1 className="display-lg" style={{ marginTop: 10 }}>We couldn’t confirm your setup</h1>
            <p className="body-lg" style={{ marginTop: 18 }}>
              If you’ve been charged, don’t worry — nothing is lost. Please contact our team and we’ll
              complete your onboarding right away.
            </p>
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="signup-submit" style={{ display: "inline-flex", marginTop: 22, width: "auto", padding: "14px 28px", textDecoration: "none" }}>
              Contact support →
            </a>
          </>
        )}
      </div>
    </section>
  );
}

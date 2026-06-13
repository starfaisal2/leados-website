"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const BOOK_URL =
  "https://wa.me/971568350424?text=Hi%20LeadOS%2C%20I%20would%20like%20to%20book%20a%20demo";

export default function GetStartedCancelPage() {
  const [retryHref, setRetryHref] = useState("/get-started");

  useEffect(() => {
    // Preserve the plan selection if it was carried through the checkout URL.
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan");
    if (plan) setRetryHref(`/get-started?plan=${encodeURIComponent(plan)}`);
  }, []);

  return (
    <section className="signup-page">
      <div className="signup-bg-orb signup-orb-one" />
      <div className="signup-bg-orb signup-orb-two" />
      <div className="container" style={{ maxWidth: 640, textAlign: "center" }}>
        <Link href="/" className="signup-back" style={{ justifyContent: "center" }}>← Back to LeadOS</Link>
        <span className="eyebrow">Checkout cancelled</span>
        <h1 className="display-lg" style={{ marginTop: 10 }}>No payment was taken</h1>
        <p className="body-lg" style={{ marginTop: 18 }}>
          Your checkout was cancelled and nothing has been charged. You can pick up where you left off
          whenever you’re ready, or talk to our team first.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 24 }}>
          <Link href={retryHref} className="signup-submit" style={{ display: "inline-flex", width: "auto", padding: "14px 28px", textDecoration: "none" }}>
            Resume setup →
          </Link>
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
            Book a demo
          </a>
        </div>
        <p className="signup-smallprint" style={{ marginTop: 20 }}>
          Professional onboarding included · First month included after setup · Terms &amp; Conditions apply
        </p>
      </div>
    </section>
  );
}

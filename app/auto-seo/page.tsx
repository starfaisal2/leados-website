// Auto SEO landing page — full standalone page served directly.
// The full interactive page lives in /public/auto-seo.html
// This component renders it full-bleed with no nav/footer wrapper.

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto SEO by LeadOS — Rank #1 on Google, Zero Writing",
  description:
    "AI writes SEO articles for your business every week, publishes them automatically, and tracks your rankings. Starts at $29/month. Free site scan — no signup required.",
  openGraph: {
    title: "Auto SEO by LeadOS — Rank #1 on Google, Zero Writing",
    description: "AI writes, publishes and ranks your business on Google every week — automatically. Free site scan. Starts at $29/mo.",
    type: "website",
  },
};

export default function AutoSeoPage() {
  return (
    <iframe
      src="/auto-seo.html"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
        zIndex: 9999,
      }}
      title="Auto SEO by LeadOS"
    />
  );
}

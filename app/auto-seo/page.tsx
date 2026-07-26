// Auto SEO landing page — redirects directly to the static HTML file.
// Previously used an iframe which broke on iOS Safari (fixed viewport, no scroll).
// Now serves the HTML page directly via a permanent redirect.

import { redirect } from "next/navigation";

export const metadata = {
  title: "Auto SEO by LeadOS — Rank #1 on Google, Zero Writing",
  description:
    "AI writes SEO articles for your business every week, publishes them automatically, and tracks your rankings. Starts at $29/month. Free site scan — no signup required.",
};

export default function AutoSeoPage() {
  redirect("/auto-seo.html");
}

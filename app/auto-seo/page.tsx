// Auto SEO landing page â€” full standalone page served directly.
// The full interactive page lives in /public/auto-seo.html
// This component renders it full-bleed with no nav/footer wrapper.

import type { Metadata } from "next";
import AutoSeoIframe from "./AutoSeoIframe";

export const metadata: Metadata = {
  title: "Auto SEO by LeadOS â€” Rank #1 on Google, Zero Writing",
  description:
    "AI writes SEO articles for your business every week, publishes them automatically, and tracks your rankings. Starts at $29/month. Free site scan â€” no signup required.",
  openGraph: {
    title: "Auto SEO by LeadOS â€” Rank #1 on Google, Zero Writing",
    description: "AI writes, publishes and ranks your business on Google every week â€” automatically. Free site scan. Starts at $29/mo.",
    type: "website",
  },
};

const autoSeoSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Auto SEO by LeadOS",
  applicationCategory: "BusinessApplication",
  description: "AI writes SEO articles for your business every week, publishes them automatically, and tracks your rankings.",
  url: "https://myleados.ai/auto-seo",
  offers: { "@type": "Offer", price: "29", priceCurrency: "USD", priceSpecification: { "@type": "UnitPriceSpecification", billingDuration: "P1M" } },
  operatingSystem: "Web",
  provider: { "@type": "Organization", name: "LeadOS", url: "https://myleados.ai" },
};

const autoSeoBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://myleados.ai" },
    { "@type": "ListItem", position: 2, name: "Auto SEO" },
  ],
};

export default function AutoSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(autoSeoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(autoSeoBreadcrumb) }} />
      <AutoSeoIframe />
    </>
  );
}

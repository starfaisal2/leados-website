import type { Metadata } from "next";
import WebsiteBuilderPage from "./WebsiteBuilderPage";

export const metadata: Metadata = {
  title: "Website Builder – LeadOS | Build Your Business Website",
  description:
    "Describe your business and LeadOS builds a complete, professional website in seconds. Free to build. No code, no designers, no agency.",
  openGraph: {
    title: "Website Builder by LeadOS",
    description: "Your business website, built by LeadOS. Describe it. We build it. Free to start.",
    url: "https://myleados.ai/website-builder",
    siteName: "LeadOS",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LeadOS Website Builder",
  applicationCategory: "BusinessApplication",
  description: "Build a complete business website by describing your business in plain English. Free to start.",
  url: "https://myleados.ai/website-builder",
  offers: [
    { "@type": "Offer", price: "0", priceCurrency: "USD", name: "Free Plan" },
    { "@type": "Offer", price: "19", priceCurrency: "USD", name: "Website Pro", billingPeriod: "P1M" },
    { "@type": "Offer", price: "59", priceCurrency: "USD", name: "Pro + Auto SEO", billingPeriod: "P1M" },
  ],
  operatingSystem: "Web",
  provider: { "@type": "Organization", name: "LeadOS", url: "https://myleados.ai" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <WebsiteBuilderPage />
    </>
  );
}

import type React from "react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const siteUrl = "https://www.leadoscrm.com";
const siteTitle = "LeadOS — Most CRMs Store Data. LeadOS Learns From It.";
const siteDescription =
  "AI CRM that learns from conversations, bookings and follow-ups. Capture leads, automate bookings, track revenue and improve over time.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | LeadOS",
  },
  description: siteDescription,
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  keywords: [
    "AI CRM",
    "WhatsApp CRM",
    "clinic CRM",
    "AI receptionist",
    "voice AI CRM",
    "booking CRM",
    "omni inbox CRM",
    "CRM for clinics",
    "revenue intelligence CRM",
    "WhatsApp automation",
    "appointment booking software",
    "GCC CRM",
    "UAE CRM",
    "Saudi Arabia CRM",
  ],
  authors: [{ name: "LeadOS" }],
  creator: "LeadOS",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName: "LeadOS",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "LeadOS — Most CRMs Store Data. LeadOS Learns From It.",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />

        <Script
          id="leados-crm-widget"
          src="https://app.leadoscrm.com/api/widget/embed?tenant=leados"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

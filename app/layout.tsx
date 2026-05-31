import type React from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const siteUrl = "https://leadoscrm.com";
const title = "LeadOS — Most CRMs Store Data. LeadOS Learns From It.";
const description =
  "LeadOS is the AI CRM that learns from conversations, bookings, follow-ups and customer interactions. Capture leads, automate bookings, track revenue and improve over time.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | LeadOS",
  },
  description,
  keywords: [
    "AI CRM",
    "WhatsApp CRM",
    "Clinic CRM",
    "AI Receptionist",
    "Voice AI CRM",
    "Booking CRM",
    "Omni Inbox CRM",
    "CRM for clinics",
    "CRM for medical centers",
    "Revenue intelligence CRM",
    "WhatsApp automation",
    "appointment booking software",
    "LeadOS",
  ],
  authors: [{ name: "LeadOS" }],
  creator: "LeadOS",
  publisher: "LeadOS",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteUrl,
    siteName: "LeadOS",
    title,
    description,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "LeadOS — AI CRM that learns from conversations, bookings and revenue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
      </body>
    </html>
  );
}

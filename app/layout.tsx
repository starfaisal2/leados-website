import type React from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: {
    default: "LeadOS — The Revenue Operating System That Learns",
    template: "%s | LeadOS",
  },
  description:
    "LeadOS is the Revenue Operating System that learns from conversations, bookings and outcomes. AI Receptionist, CRM, Booking Intelligence and Revenue Intelligence in one platform.",
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
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://leadoscrm.com",
    siteName: "LeadOS",
    title: "LeadOS — Most CRMs Store Data. LeadOS Learns From It.",
    description:
      "The Revenue Operating System with omni inbox, AI receptionist, voice AI, booking automation and revenue intelligence.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LeadOS — Most CRMs Store Data. LeadOS Learns From It.",
    description: "The Revenue Operating System that learns.",
  },
  robots: { index: true, follow: true },
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

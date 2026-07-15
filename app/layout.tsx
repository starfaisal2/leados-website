import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.leadoscrm.com'),
  title: {
    default: 'LeadOS — Most CRMs Store Data. LeadOS Learns From It.',
    template: '%s | LeadOS',
  },
  description:
    'AI CRM that learns from conversations, bookings and follow-ups. Capture leads, automate bookings, track revenue and improve over time.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "facebook-domain-verification": "hidaso00wkq7hv2m9zkmut7qorzaai",
  },
};

// Root layout serves /blog/* routes (English-only SEO content).
// Do NOT read request headers here — any call to headers() makes every
// page dynamic, killing ISR and producing Cache-Control: private/no-store
// which prevents Googlebot from indexing.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}

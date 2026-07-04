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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}

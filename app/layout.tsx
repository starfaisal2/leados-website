import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://myleados.ai'),
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
  openGraph: {
    title: 'LeadOS — Most CRMs Store Data. LeadOS Learns From It.',
    description: 'AI CRM that learns from conversations, bookings and follow-ups. Capture leads, automate bookings, track revenue and improve over time.',
    url: 'https://www.myleados.ai',
    siteName: 'LeadOS',
    images: [
      {
        url: 'https://www.myleados.ai/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LeadOS — AI CRM & Business OS',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LeadOS — Most CRMs Store Data. LeadOS Learns From It.',
    description: 'AI CRM that learns from conversations, bookings and follow-ups.',
    images: ['https://www.myleados.ai/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.myleados.ai',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "facebook-domain-verification": "hidaso00wkq7hv2m9zkmut7qorzaai",
    "fb:app_id": "1549756283397373",
  },
};

// Root layout serves /blog/* routes (English-only SEO content).
// Do NOT read request headers here â€” any call to headers() makes every
// page dynamic, killing ISR and producing Cache-Control: private/no-store
// which prevents Googlebot from indexing.
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LeadOS",
  url: "https://myleados.ai",
  logo: "https://myleados.ai/icon.svg",
  sameAs: ["https://www.instagram.com/leados.ai"],
  description: "AI CRM that learns from conversations, bookings and follow-ups. Capture leads, automate bookings, track revenue and improve over time.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "LeadOS",
  url: "https://myleados.ai",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: "https://myleados.ai/blog?q={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        {/* Meta Pixel */}
        <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','4661508774081869');fbq('track','PageView');` }} />
        <noscript><img height="1" width="1" style={{display:'none'}} src="https://www.facebook.com/tr?id=4661508774081869&ev=PageView&noscript=1" /></noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}

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
        <meta property="fb:app_id" content="1549756283397373" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        {/* Meta Pixel */}
        <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','4661508774081869');fbq('track','PageView');` }} />
        <noscript><img height="1" width="1" style={{display:'none'}} src="https://www.facebook.com/tr?id=4661508774081869&ev=PageView&noscript=1" /></noscript>
      </head>
      <body>
        {children}
        {/* Floating WhatsApp button */}
        <a
          href="https://wa.me/971568350424?text=Hi%20LeadOS%2C%20I%20would%20like%20to%20book%20a%20demo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          style={{
            position: "fixed",
            bottom: 96,
            right: 24,
            zIndex: 9999,
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "#25d366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 16px rgba(37,211,102,0.45)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}

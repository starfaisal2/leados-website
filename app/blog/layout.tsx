import { NextIntlClientProvider } from 'next-intl';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import enMessages from '@/messages/en.json';
import Script from 'next/script';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <NextIntlClientProvider locale="en" messages={enMessages}>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Nav />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <Script
          id="leados-crm-widget"
          src="https://app.myleados.ai/api/widget/embed?tenant=leados"
          strategy="afterInteractive"
        />
      </div>
    </NextIntlClientProvider>
  );
}

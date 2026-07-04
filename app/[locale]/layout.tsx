import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const locales = ['en', 'ar', 'fr', 'es', 'hi', 'tr', 'zh', 'ru', 'pt', 'de'];
const rtlLocales = ['ar'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();
  const isRTL = rtlLocales.includes(locale);

  return (
    <NextIntlClientProvider messages={messages}>
      <div style={{ minHeight: '100vh' }}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <Script
          id="leados-crm-widget"
          src="https://app.leadoscrm.com/api/widget/embed?tenant=leados"
          strategy="afterInteractive"
        />
      </div>
    </NextIntlClientProvider>
  );
}

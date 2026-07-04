import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const locales = ['en', 'ar', 'fr', 'es', 'hi', 'tr', 'zh', 'ru', 'pt', 'de'];
const rtlLocales = ['ar'];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();
  const messages = await getMessages();
  const isRTL = rtlLocales.includes(locale);

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Nav />
          <main>{children}</main>
          <Footer />
          <Script
            id="leados-crm-widget"
            src="https://app.leadoscrm.com/api/widget/embed?tenant=leados"
            strategy="afterInteractive"
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

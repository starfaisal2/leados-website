import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ar', 'fr', 'es', 'hi', 'tr', 'zh', 'ru', 'pt', 'de'],
  defaultLocale: 'en',
  localePrefix: 'as-needed'
});

export const config = {
  // Exclude /blog/* from middleware entirely — ANY middleware execution on a route
  // forces Next.js/Vercel to set Cache-Control: private/no-store, killing Googlebot indexing.
  // Blog is English-only SEO content; locale detection is not needed there.
  matcher: ['/((?!api|_next|blog|s/|.*\\..*).*)']
};

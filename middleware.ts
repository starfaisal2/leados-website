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
  // Exclude /auto-seo from middleware for the same reason as /blog:
  // the page is a full-screen standalone HTML iframe with its own nav/footer.
  // Running i18n middleware on it causes the [locale] layout (Nav + Footer) to
  // wrap the iframe, which covers the hero content and makes the page appear blank.
  matcher: ['/((?!api|_next|blog|auto-seo|s/|.*\\..*).*)']
};

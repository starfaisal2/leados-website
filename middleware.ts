import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ar', 'fr', 'es', 'hi', 'tr', 'zh', 'ru', 'pt', 'de'],
  defaultLocale: 'en',
  localePrefix: 'as-needed'
});

export const config = {
  // Exclude /blog/* — blog content is English-only SEO articles.
  // Without this, Arabic/non-English users get redirected to /ar/blog/... which has no page → 404.
  matcher: ['/((?!api|_next|blog|.*\\..*).*)']
};

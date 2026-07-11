import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  locales: ['en', 'ar', 'fr', 'es', 'hi', 'tr', 'zh', 'ru', 'pt', 'de'],
  defaultLocale: 'en',
  localePrefix: 'as-needed'
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Blog and sitemap: English-only SEO content — skip locale detection entirely
  // and explicitly set public Cache-Control so Googlebot can index these pages.
  if (pathname.startsWith('/blog') || pathname === '/sitemap.xml' || pathname === '/robots.txt') {
    const response = NextResponse.next();
    response.headers.set(
      'Cache-Control',
      'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400'
    );
    response.headers.set('X-Robots-Tag', 'index, follow');
    return response;
  }

  return intlMiddleware(request);
}

export const config = {
  // Match all routes except static files, api, and _next internals.
  // Blog is now handled explicitly above (not excluded) so we can set
  // the correct cache headers before the page renders.
  matcher: ['/((?!api|_next|.*\\..*).*)']
};

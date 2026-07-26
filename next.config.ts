import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin('./i18n.ts');

// Hard build-time guard: if LEADOS_BUSINESS_ID is not set the blog will query
// every tenant's articles and expose them publicly. Fail the build loudly so
// this is caught in Vercel's deployment pipeline rather than in production.
if (!process.env.LEADOS_BUSINESS_ID) {
  throw new Error(
    "[leados-website] LEADOS_BUSINESS_ID env var is not set. " +
    "Without it the blog will show ALL tenants' articles publicly. " +
    "Set it to the LeadOS business UUID (b9d9f8ce-090f-4494-a6e3-6e024aaaad50) " +
    "in Vercel → leados-website → Settings → Environment Variables."
  );
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        // Blog index and all article pages — publicly cacheable for Googlebot
        source: "/blog/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
          },
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
        ],
      },
      {
        // Sitemap — publicly cacheable
        source: "/sitemap.xml",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600",
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);

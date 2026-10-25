import type { MetadataRoute } from "next";

const siteUrl = "https://www.myleados.ai";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Tenant mini-site routes are disabled â€” disallow so any previously-indexed
      // /s/ pages are removed from search results.
      disallow: ["/s/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}


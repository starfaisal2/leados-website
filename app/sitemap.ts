import type { MetadataRoute } from "next";
import SEO_PAGES from "@/lib/seo-pages.json";

const BASE = "https://myleados.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                    lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/auto-seo`,      lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/seo`,           lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/blog`,          lastModified: now, changeFrequency: "daily",   priority: 0.7 },
    { url: `${BASE}/pricing`,       lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/about`,         lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/privacy`,       lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/terms`,         lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];

  const seoPages: MetadataRoute.Sitemap = (SEO_PAGES as { slug: string }[]).map((p) => ({
    url: `${BASE}/seo/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...seoPages];
}

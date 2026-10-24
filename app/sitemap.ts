import type { MetadataRoute } from "next";
import SEO_PAGES from "@/lib/seo-pages.json";

const BASE = "https://myleados.ai";

const LOCALES = ["en", "ar", "de", "es", "fr", "hi", "pt", "ru", "tr", "zh"];

const LOCALE_ROUTES = [
  { path: "",              freq: "weekly",  pri: 1.0 },
  { path: "/auto-seo",    freq: "weekly",  pri: 0.9 },
  { path: "/voice-ai",    freq: "monthly", pri: 0.8 },
  { path: "/website-builder", freq: "monthly", pri: 0.8 },
  { path: "/blog",        freq: "daily",   pri: 0.7 },
  { path: "/pricing",     freq: "monthly", pri: 0.7 },
  { path: "/about",       freq: "monthly", pri: 0.5 },
  { path: "/contact",     freq: "monthly", pri: 0.5 },
  { path: "/privacy",     freq: "yearly",  pri: 0.3 },
  { path: "/terms",       freq: "yearly",  pri: 0.3 },
  { path: "/security",    freq: "yearly",  pri: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  // Static pages — English canonical (no locale prefix)
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                        lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/auto-seo`,          lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/seo`,               lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/voice-ai`,          lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/website-builder`,   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`,              lastModified: now, changeFrequency: "daily",   priority: 0.7 },
    { url: `${BASE}/pricing`,           lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/about`,             lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/contact`,           lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/privacy`,           lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/terms`,             lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/security`,          lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];

  // Locale variants (skip en — same as canonical above)
  const localePages: MetadataRoute.Sitemap = LOCALES
    .filter((l) => l !== "en")
    .flatMap((locale) =>
      LOCALE_ROUTES.map(({ path, freq, pri }) => ({
        url: `${BASE}/${locale}${path}`,
        lastModified: now,
        changeFrequency: freq as MetadataRoute.Sitemap[number]["changeFrequency"],
        priority: Math.max(pri - 0.1, 0.3), // locale variants slightly lower priority
      }))
    );

  // SEO hub + all 242 /seo/* pages
  const seoHubPage: MetadataRoute.Sitemap = [
    { url: `${BASE}/seo`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];
  const seoPages: MetadataRoute.Sitemap = (SEO_PAGES as { slug: string }[]).map((p) => ({
    url: `${BASE}/seo/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog posts — fetched from Supabase at build time
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (url && key) {
      const res = await fetch(
        `${url}/rest/v1/seo_articles?status=eq.published&select=slug,published_at&order=published_at.desc&limit=1000`,
        { headers: { apikey: key, Authorization: `Bearer ${key}` }, next: { revalidate: 3600 } }
      );
      if (res.ok) {
        const articles = await res.json() as { slug: string; published_at: string }[];
        blogPages = (articles ?? []).map((a) => ({
          url: `${BASE}/blog/${a.slug}`,
          lastModified: a.published_at || now,
          changeFrequency: "monthly" as const,
          priority: 0.6,
        }));
      }
    }
  } catch { /* blog posts are optional */ }

  return [...staticPages, ...localePages, ...seoPages, ...blogPages];
}

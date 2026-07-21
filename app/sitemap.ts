// Auto-generated sitemap — includes all published blog articles from Auto SEO.
// Revalidates every hour so new articles appear in Google within 60 minutes.

import type { MetadataRoute } from "next";

export const revalidate = 3600;

async function getPublishedArticles() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return [];

  const headers = { apikey: key, Authorization: `Bearer ${key}` };

  const bizRes = await fetch(
    `${url}/rest/v1/businesses?slug=eq.leados&select=id&limit=1`,
    { headers, next: { revalidate: 3600 } }
  );
  if (!bizRes.ok) return [];
  const businesses = await bizRes.json();
  if (!businesses?.length) return [];

  const artRes = await fetch(
    `${url}/rest/v1/seo_articles?business_id=eq.${businesses[0].id}&status=eq.published&select=slug,published_at,updated_at&order=published_at.desc&limit=500`,
    { headers, next: { revalidate: 3600 } }
  );
  if (!artRes.ok) return [];
  return await artRes.json() ?? [];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.myleados.ai";
  const articles = await getPublishedArticles();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/auto-seo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/voice-ai`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/company-brain`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/get-started`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/security`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map((article: any) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.updated_at || article.published_at),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...articlePages];
}

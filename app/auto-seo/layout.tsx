// Standalone layout for the Auto SEO landing page.
// The page renders a full-screen iframe (/auto-seo.html) that includes its
// own nav, hero, sections and footer. We must NOT wrap it in the [locale]
// layout (which adds <Nav> + <Footer>) — that layout would render on top of
// the iframe and cover the hero content, causing the page to appear blank.

export default function AutoSeoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

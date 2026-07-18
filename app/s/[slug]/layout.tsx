// Tenant-hosted site layout — no LeadOS nav, fully tenant-branded.
// Served at myleados.ai/s/[slug]

export default function TenantSiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}

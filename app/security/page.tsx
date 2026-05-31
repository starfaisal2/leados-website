export const metadata = { title: "Security" };

export default function SecurityPage() {
  return (
    <section className="legal-page">
      <div className="legal-shell">
        <span className="eyebrow">Security</span>
        <h1>Built for secure business operations.</h1>
        <p>
          LeadOS is designed for businesses that handle valuable customer conversations,
          bookings, and performance data. Security, access control, and tenant separation
          are core parts of the platform architecture.
        </p>
        <div className="legal-card-grid">
          <div className="legal-card"><h3>Role-based access</h3><p>Teams can be structured with permissions for agents, managers, admins, and owners.</p></div>
          <div className="legal-card"><h3>Tenant isolation</h3><p>Each workspace is designed to keep business data separated and permission-controlled.</p></div>
          <div className="legal-card"><h3>Audit logs</h3><p>Important actions can be tracked to support accountability and operational visibility.</p></div>
          <div className="legal-card"><h3>Encrypted infrastructure</h3><p>LeadOS uses modern cloud infrastructure practices to protect data in transit and at rest where applicable.</p></div>
          <div className="legal-card"><h3>Human handoff controls</h3><p>AI can escalate sensitive, uncertain, or unsupported conversations to authorized humans.</p></div>
          <div className="legal-card"><h3>Secure integrations</h3><p>Connected channels and credentials should be managed using secure environment and access controls.</p></div>
        </div>
      </div>
    </section>
  );
}

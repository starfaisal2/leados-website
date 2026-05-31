export const metadata = { title: "Contact LeadOS" };

const WHATSAPP_URL =
  "https://wa.me/971568350424?text=Hi%20LeadOS%2C%20I%20would%20like%20to%20book%20a%20demo";

export default function ContactPage() {
  return (
    <section className="legal-page">
      <div className="legal-shell">
        <span className="eyebrow">Contact</span>
        <h1>Talk to LeadOS.</h1>
        <p>
          Speak with our team about AI CRM, WhatsApp automation, voice AI, booking automation,
          and revenue intelligence for your business.
        </p>

        <div className="legal-card-grid contact-card-grid">
          <div className="legal-card">
            <h3>Book a demo</h3>
            <p>Message us on WhatsApp and our team will help you arrange a live LeadOS walkthrough.</p>
            <a className="legal-card-link" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Message on WhatsApp →
            </a>
          </div>

          <div className="legal-card">
            <h3>Phone / WhatsApp</h3>
            <p>
              <a href="tel:+971568350424">+971 56 835 0424</a>
            </p>
            <p className="legal-muted">Available for demo requests, onboarding questions, and partner enquiries.</p>
          </div>

          <div className="legal-card">
            <h3>Email</h3>
            <p>
              <a href="mailto:admin@leadoscrm.com">admin@leadoscrm.com</a>
            </p>
            <p className="legal-muted">Use this email for business, support, billing, privacy, or Meta review enquiries.</p>
          </div>

          <div className="legal-card">
            <h3>For businesses</h3>
            <p>
              Discuss setup, pricing, onboarding, integrations, clinic workflows, AI voice calls,
              reporting, and multi-location CRM deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

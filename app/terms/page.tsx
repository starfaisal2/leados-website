export const metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <section className="legal-page">
      <div className="legal-shell legal-document">
        <span className="eyebrow">Terms</span>
        <h1>Terms of Service</h1>
        <p>Last updated: 2026</p>
        <h2>1. Service</h2>
        <p>LeadOS provides AI CRM, communication, automation, booking, reporting, and related business software services.</p>
        <h2>2. Customer responsibilities</h2>
        <p>Customers are responsible for using LeadOS lawfully, providing accurate business information, maintaining account security, and ensuring their connected channels comply with applicable platform rules.</p>
        <h2>3. AI outputs</h2>
        <p>AI-generated responses should be configured, monitored, and reviewed according to the customer’s business requirements. LeadOS is designed to support human escalation for sensitive, uncertain, or unsupported cases.</p>
        <h2>4. Integrations</h2>
        <p>Third-party integrations such as WhatsApp, Meta, voice providers, AI providers, and hosting platforms may be subject to their own rules, availability, and pricing.</p>
        <h2>5. Pricing and billing</h2>
        <p>Subscription fees, onboarding, usage charges, and integration costs may vary based on plan, setup, and usage.</p>
        <h2>6. Contact</h2>
        <p>For questions about these terms, contact <a href="mailto:hello@leadoscrm.com">hello@leadoscrm.com</a> or <a href="tel:+971568350424">+971 56 835 0424</a>.</p>
      </div>
    </section>
  );
}

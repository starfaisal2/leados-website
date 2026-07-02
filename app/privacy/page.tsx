export const metadata = {
  title: "Privacy Policy — LeadOS",
  description: "How LeadOS collects, uses, and protects your personal data.",
};

const EFFECTIVE = "2 July 2026";
const EMAIL = "privacy@leadoscrm.com";

export default function PrivacyPage() {
  return (
    <section className="legal-page">
      <div className="legal-shell legal-document">
        <span className="eyebrow">Legal</span>
        <h1>Privacy Policy</h1>
        <p><strong>Effective date:</strong> {EFFECTIVE}</p>
        <p>
          This Privacy Policy explains how LeadOS Technologies FZE and its affiliates ("<strong>LeadOS</strong>", "<strong>we</strong>", "<strong>us</strong>") collect, use, store, share, and protect information when you use our website, platform, or any of our services (collectively, the "<strong>Services</strong>"). By using the Services, you agree to this Privacy Policy.
        </p>

        <h2>1. Who this policy applies to</h2>
        <p>This policy applies to:</p>
        <ul>
          <li><strong>Business customers</strong> — companies and individuals who subscribe to LeadOS Services.</li>
          <li><strong>End users</strong> — individuals who interact with our customers' businesses through LeadOS-powered channels (e.g. chatbots, booking forms, WhatsApp integrations).</li>
          <li><strong>Website visitors</strong> — anyone visiting leadoscrm.com or any LeadOS-operated domain.</li>
        </ul>
        <p>Our business customers act as independent data controllers for any personal data of their own customers processed through LeadOS. We act as a data processor in those circumstances and process data only on the customer's instructions.</p>

        <h2>2. What information we collect</h2>

        <h3>2.1 Information you provide directly</h3>
        <ul>
          <li>Account registration details: name, email address, phone number, business name, role.</li>
          <li>Billing information: processed securely by Stripe. LeadOS does not store full card numbers.</li>
          <li>Business configuration: website URL, niche, target locations, brand settings, and any content or data you upload or configure within the platform.</li>
          <li>Communications: messages you send to our support team, email correspondence, and any enquiries submitted through our website.</li>
        </ul>

        <h3>2.2 Information collected automatically</h3>
        <ul>
          <li>Usage data: features used, pages visited, actions taken within the platform, session timestamps.</li>
          <li>Device and technical data: IP address, browser type, operating system, referring URLs, device identifiers.</li>
          <li>Log data: server logs, API request logs, error logs retained for security and debugging purposes.</li>
          <li>Cookies and tracking: we use essential cookies to operate the platform and analytics cookies to understand usage. See Section 9 for details.</li>
        </ul>

        <h3>2.3 Information from third-party integrations</h3>
        <p>When you connect third-party platforms to LeadOS (such as WhatsApp Business, Meta, Google, or your website), we may receive data from those platforms as authorised by you. This may include:</p>
        <ul>
          <li>Conversation messages and metadata from connected messaging channels.</li>
          <li>Contact details and interaction history synced from external CRMs.</li>
          <li>Search Console data from Google (when Google Search Console integration is connected).</li>
          <li>Booking, appointment, and transaction data from connected scheduling or payment tools.</li>
        </ul>

        <h3>2.4 AI-generated content and Auto SEO</h3>
        <p>When you use Auto SEO or other AI features, we process your business configuration (niche, location, keywords, website URL) to generate content. Content generation requests are sent to AI model providers (such as Anthropic). Please refer to those providers' policies for information on how they handle inference data.</p>

        <h2>3. How we use your information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, operate, maintain, and improve the Services.</li>
          <li>Process payments and manage subscriptions.</li>
          <li>Generate and publish AI content on your behalf where you have configured Auto SEO or similar features.</li>
          <li>Authenticate users and maintain account security.</li>
          <li>Send transactional communications (account confirmations, invoices, security alerts, service updates).</li>
          <li>Send marketing communications where you have opted in (you may opt out at any time).</li>
          <li>Respond to support enquiries and resolve disputes.</li>
          <li>Comply with legal obligations and enforce our Terms of Service.</li>
          <li>Analyse usage patterns to improve product performance and user experience.</li>
          <li>Detect, prevent, and investigate fraud, abuse, or security incidents.</li>
        </ul>

        <h2>4. Legal basis for processing (GDPR / UAE PDPL)</h2>
        <p>Where applicable data protection law requires a legal basis for processing, we rely on:</p>
        <ul>
          <li><strong>Contract performance</strong> — processing necessary to deliver the Services you have subscribed to.</li>
          <li><strong>Legitimate interests</strong> — security monitoring, fraud prevention, product improvement, and analytics, where these interests are not overridden by your rights.</li>
          <li><strong>Legal obligation</strong> — where we are required to process data to comply with applicable law.</li>
          <li><strong>Consent</strong> — for marketing communications and non-essential cookies, where required by law.</li>
        </ul>

        <h2>5. Data sharing and disclosure</h2>
        <p>We do not sell your personal data. We may share your information with:</p>
        <ul>
          <li><strong>Service providers</strong> — trusted third-party vendors who process data on our behalf to operate the Services (hosting, payments, email delivery, AI model inference, analytics). These providers are bound by data processing agreements.</li>
          <li><strong>Third-party platforms</strong> — when you connect integrations (WhatsApp, Google, Meta, WordPress, etc.), data is shared with those platforms as necessary to provide the integration you requested.</li>
          <li><strong>Legal and regulatory authorities</strong> — where required by law, court order, or to protect the rights and safety of LeadOS, our customers, or the public.</li>
          <li><strong>Business transfers</strong> — in the event of a merger, acquisition, or sale of assets, customer data may be transferred as part of that transaction. We will provide notice before any such transfer takes effect.</li>
        </ul>

        <h2>6. Data retention</h2>
        <p>We retain your data for as long as your account is active or as necessary to provide the Services. After account termination:</p>
        <ul>
          <li>Account data is retained for up to 90 days to allow for reactivation or dispute resolution, then deleted.</li>
          <li>Billing records and transaction logs are retained for up to 7 years to comply with financial record-keeping obligations.</li>
          <li>Conversation and content data may be retained for shorter periods depending on the nature of the data and applicable legal requirements.</li>
        </ul>

        <h2>7. Data security</h2>
        <p>We implement industry-standard technical and organisational security measures to protect your data, including:</p>
        <ul>
          <li>Encryption of data in transit (TLS/HTTPS) and at rest.</li>
          <li>Role-based access controls and tenant data separation.</li>
          <li>Regular security reviews and vulnerability assessments.</li>
          <li>Incident response procedures.</li>
        </ul>
        <p>No method of transmission over the internet or electronic storage is 100% secure. While we take all reasonable precautions, we cannot guarantee absolute security. You are responsible for maintaining the security of your account credentials.</p>

        <h2>8. International data transfers</h2>
        <p>LeadOS operates globally and your data may be transferred to and processed in countries outside your own, including the United Arab Emirates and countries where our service providers are located. Where required by law, we ensure appropriate safeguards are in place for such transfers (such as standard contractual clauses or equivalent mechanisms).</p>

        <h2>9. Cookies</h2>
        <p>We use cookies and similar tracking technologies on our website and platform:</p>
        <ul>
          <li><strong>Essential cookies</strong> — required for authentication, session management, and basic platform functionality. Cannot be disabled.</li>
          <li><strong>Analytics cookies</strong> — help us understand how visitors use the website (e.g. page views, traffic sources). You can opt out via our cookie preferences or browser settings.</li>
          <li><strong>Marketing cookies</strong> — used to deliver relevant advertising where you have consented. You can withdraw consent at any time.</li>
        </ul>

        <h2>10. Your rights</h2>
        <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
        <ul>
          <li><strong>Access</strong> — request a copy of the personal data we hold about you.</li>
          <li><strong>Correction</strong> — request correction of inaccurate or incomplete data.</li>
          <li><strong>Erasure</strong> — request deletion of your personal data, subject to legal retention requirements.</li>
          <li><strong>Portability</strong> — request transfer of your data in a structured, machine-readable format.</li>
          <li><strong>Objection</strong> — object to processing based on legitimate interests.</li>
          <li><strong>Restriction</strong> — request that we restrict processing in certain circumstances.</li>
          <li><strong>Withdraw consent</strong> — where processing is based on consent, withdraw it at any time.</li>
        </ul>
        <p>To exercise any of these rights, contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We will respond within 30 days. We may need to verify your identity before processing your request.</p>

        <h2>11. Children's privacy</h2>
        <p>The Services are not directed to individuals under 18 years of age. We do not knowingly collect personal data from children. If you believe we have inadvertently collected information from a minor, please contact us immediately and we will take steps to delete it.</p>

        <h2>12. Links to third-party websites</h2>
        <p>Our website and platform may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>

        <h2>13. Changes to this policy</h2>
        <p>We may update this Privacy Policy from time to time. Material changes will be communicated by email or a notice within the platform. The updated policy will be effective from the date stated at the top of this page. Continued use of the Services after that date constitutes acceptance of the updated policy.</p>

        <h2>14. Contact us</h2>
        <p>For privacy-related enquiries, data subject requests, or complaints:</p>
        <p>Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        <p>LeadOS Technologies FZE, United Arab Emirates</p>
        <p>If you are located in the EU/EEA and are not satisfied with our response, you have the right to lodge a complaint with your local data protection authority.</p>
      </div>
    </section>
  );
}

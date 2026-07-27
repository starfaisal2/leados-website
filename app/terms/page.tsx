export const metadata = {
  title: "Terms of Service — LeadOS",
  description: "LeadOS Terms of Service governing use of the platform, AI features, Auto SEO, and all related services.",
};

const EFFECTIVE = "2 July 2026";
const COMPANY = "LeadOS Technologies FZE";
const EMAIL = "legal@myleados.ai";
const SUPPORT = "hello@leadoscrm.com";

export default function TermsPage() {
  return (
    <section className="legal-page">
      <div className="legal-shell legal-document">
        <span className="eyebrow">Legal</span>
        <h1>Terms of Service</h1>
        <p><strong>Effective date:</strong> {EFFECTIVE} &nbsp;|&nbsp; <strong>Company:</strong> {COMPANY}</p>
        <p>
          Please read these Terms of Service ("<strong>Terms</strong>") carefully before accessing or using any product, service, platform, or website operated by {COMPANY} and its affiliates (collectively "<strong>LeadOS</strong>", "<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>"). By creating an account, clicking "I agree", completing a purchase, or otherwise using our services, you ("<strong>Customer</strong>", "<strong>you</strong>", or "<strong>your</strong>") agree to be bound by these Terms in their entirety. If you do not agree, do not use our services.
        </p>

        <h2>1. Definitions</h2>
        <p>"<strong>Services</strong>" means all software, platforms, APIs, websites, tools, and features provided by LeadOS, including but not limited to the LeadOS CRM, Auto SEO, Company Brain, AI Agent Centre, Marketing Brain, automation workflows, booking systems, communication integrations, and any associated mobile or web applications.</p>
        <p>"<strong>AI Features</strong>" means any functionality powered by artificial intelligence or large language models, including Auto SEO article generation, keyword research, AI responses, AI agents, and automated content publishing.</p>
        <p>"<strong>Content</strong>" means any text, article, data, image, or other material generated, processed, published, or transmitted through the Services.</p>
        <p>"<strong>Customer Data</strong>" means any data, information, or material submitted by you or your end users to the Services.</p>
        <p>"<strong>Third-Party Platforms</strong>" means external services integrated with LeadOS, including WhatsApp, Meta (Facebook/Instagram), Google, WordPress, Webflow, Stripe, and any other third-party provider.</p>

        <h2>2. Eligibility and account registration</h2>
        <p>You must be at least 18 years of age and legally capable of entering into a binding contract to use our Services. If you are using the Services on behalf of a business entity, you represent and warrant that you have authority to bind that entity to these Terms.</p>
        <p>You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. You must notify us immediately at {SUPPORT} of any unauthorised access or suspected security breach.</p>

        <h2>3. Services and subscriptions</h2>
        <p>LeadOS provides software-as-a-service on a subscription basis. Features, limits, and pricing vary by plan. We reserve the right to modify, suspend, or discontinue any feature or plan at any time with reasonable notice where practicable.</p>
        <p>Certain features (including Auto SEO) are available as add-ons or standalone products and are subject to additional terms set out in these Terms and at the point of purchase.</p>

        <h2>4. Auto SEO — AI content generation and publishing</h2>
        <p>This section specifically governs the Auto SEO product and any AI-powered content generation feature offered by LeadOS.</p>

        <h3>4.1 Nature of the service</h3>
        <p>Auto SEO uses artificial intelligence to research keywords, generate written articles, and — where configured — automatically publish those articles to your website or connected platform (including via WordPress plugin, webhook, or API). You acknowledge and agree that:</p>
        <ul>
          <li>All AI-generated content is produced algorithmically and is not reviewed, verified, or endorsed by LeadOS prior to generation or publication.</li>
          <li>AI-generated content may contain inaccuracies, factual errors, outdated information, or statements that do not reflect your business, industry standards, or applicable law.</li>
          <li>LeadOS does not guarantee that AI-generated content is accurate, complete, suitable for any purpose, or compliant with any professional, regulatory, or industry-specific requirements.</li>
          <li>Auto-publish features, once enabled, will publish content to your website or platform without further approval from LeadOS. You are solely responsible for monitoring, reviewing, and approving all published content.</li>
        </ul>

        <h3>4.2 Your responsibilities as publisher</h3>
        <p>You are the publisher of all content generated and/or published through Auto SEO. You accept sole and full responsibility for:</p>
        <ul>
          <li>Reviewing all AI-generated content before it is published, or implementing your own review processes if auto-publish is enabled.</li>
          <li>Ensuring all published content complies with applicable laws, regulations, and professional standards in your jurisdiction and industry, including (without limitation) consumer protection law, advertising standards, medical or health claim regulations, financial advice regulations, legal professional rules, defamation law, copyright law, and data protection law.</li>
          <li>Ensuring content does not make false, misleading, or unsubstantiated claims about products, services, competitors, or any other matter.</li>
          <li>Removing or correcting any content that is inaccurate, harmful, offensive, defamatory, or otherwise unlawful.</li>
          <li>Any consequences, complaints, claims, penalties, or liabilities arising from content published through your account.</li>
        </ul>

        <h3>4.3 Professional and regulated industries</h3>
        <p>If you operate in a regulated industry (including but not limited to healthcare, medicine, dentistry, law, financial advice, real estate, or pharmaceuticals), you acknowledge that AI-generated content may not meet the specific standards, disclaimers, or regulatory requirements applicable to your profession. You are solely responsible for ensuring all published content complies with your professional obligations and any applicable regulatory framework.</p>

        <h3>4.4 SEO results — no guarantee</h3>
        <p>LeadOS makes no representation, warranty, or guarantee regarding search engine rankings, traffic increases, leads generated, or any other SEO outcome. Search engine algorithms are operated by independent third parties and results may vary significantly depending on factors outside our control. Past performance of the Auto SEO product does not guarantee future results for any individual customer.</p>

        <h3>4.5 Third-party publishing platforms</h3>
        <p>When you connect Auto SEO to a third-party platform (including WordPress, Webflow, Wix, or any other website or CMS), you are solely responsible for ensuring that such use complies with the terms of service of that platform. LeadOS accepts no liability for the suspension, termination, or penalisation of your account on any third-party platform arising from content published through our Services.</p>

        <h2>5. AI features — general terms</h2>
        <p>All AI Features provided by LeadOS are offered as productivity tools to assist your business. You acknowledge that:</p>
        <ul>
          <li>AI outputs are probabilistic and may be incorrect, incomplete, or inappropriate for your specific use case.</li>
          <li>LeadOS AI Features are not a substitute for professional advice (legal, medical, financial, or otherwise).</li>
          <li>You must not use AI Features to generate content that is unlawful, defamatory, discriminatory, harassing, harmful, or violates any third party's rights.</li>
          <li>You are solely responsible for all outputs you publish, share, or act upon.</li>
        </ul>

        <h2>6. Acceptable use</h2>
        <p>You agree not to use the Services to:</p>
        <ul>
          <li>Violate any applicable law or regulation.</li>
          <li>Infringe the intellectual property rights of any person.</li>
          <li>Send spam, unsolicited commercial communications, or messages in violation of applicable messaging regulations (including WhatsApp Business Platform policies).</li>
          <li>Publish false, misleading, or deceptive content.</li>
          <li>Attempt to reverse-engineer, hack, or disrupt the Services.</li>
          <li>Resell or white-label the Services without our prior written consent.</li>
          <li>Use the Services for any illegal purpose, including fraud, money laundering, or circumventing sanctions.</li>
        </ul>
        <p>We reserve the right to suspend or terminate your account immediately if we reasonably believe you have violated this section.</p>

        <h2>7. Third-party integrations</h2>
        <p>The Services may integrate with Third-Party Platforms. LeadOS does not control and is not responsible for the availability, accuracy, content, policies, or practices of any Third-Party Platform. Your use of Third-Party Platforms is governed by their respective terms of service and privacy policies. We recommend you review those policies independently.</p>
        <p>Disruptions, policy changes, or terminations by Third-Party Platforms (including Meta, Google, WhatsApp, or Stripe) may affect the availability of certain features. LeadOS accepts no liability for any losses arising from such disruptions.</p>

        <h2>8. Fees, billing, and cancellation</h2>
        <p>Fees are charged in advance on a monthly or annual basis as selected at the time of purchase. All fees are exclusive of applicable taxes unless stated otherwise. Payments are processed by Stripe or another payment processor and are non-refundable except as expressly required by applicable consumer protection law.</p>
        <p>You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period. No partial refunds are provided for unused portions of a billing period unless required by law.</p>
        <p>We reserve the right to change pricing with at least 30 days' notice. Continued use of the Services after a price change constitutes acceptance of the new pricing.</p>

        <h2>9. Intellectual property</h2>
        <p>LeadOS retains all intellectual property rights in the Services, platform, software, trademarks, and documentation. Nothing in these Terms transfers any intellectual property rights to you.</p>
        <p>You retain ownership of Customer Data you submit to the Services. You grant LeadOS a limited, non-exclusive licence to use Customer Data solely to provide and improve the Services.</p>
        <p>With respect to AI-generated content, you own the output generated for your account and are solely responsible for it as described in Section 4.</p>

        <h2>10. Confidentiality</h2>
        <p>Each party agrees to keep the other's confidential information (including pricing, technical details, and Customer Data) confidential and not to disclose it to third parties without consent, except as required by law.</p>

        <h2>11. Disclaimers — no warranties</h2>
        <p>THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, ACCURACY, OR UNINTERRUPTED AVAILABILITY.</p>
        <p>LEADOS DOES NOT WARRANT THAT: (A) THE SERVICES WILL BE ERROR-FREE OR UNINTERRUPTED; (B) AI-GENERATED CONTENT WILL BE ACCURATE, COMPLETE, OR SUITABLE FOR YOUR PURPOSES; (C) THE SERVICES WILL MEET YOUR SPECIFIC REQUIREMENTS; OR (D) ANY PARTICULAR BUSINESS OUTCOME (INCLUDING SEO RANKINGS, LEADS, OR REVENUE) WILL BE ACHIEVED.</p>

        <h2>12. Limitation of liability</h2>
        <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>
        <ul>
          <li>LEADOS'S TOTAL AGGREGATE LIABILITY TO YOU FOR ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE TOTAL FEES PAID BY YOU TO LEADOS IN THE THREE (3) MONTHS IMMEDIATELY PRECEDING THE CLAIM.</li>
          <li>LEADOS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING LOSS OF PROFITS, REVENUE, DATA, BUSINESS, GOODWILL, OR REPUTATION, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</li>
          <li>LEADOS SHALL NOT BE LIABLE FOR ANY LOSS OR DAMAGE ARISING FROM: (A) AI-GENERATED CONTENT PUBLISHED BY YOU; (B) YOUR FAILURE TO REVIEW OR MONITOR PUBLISHED CONTENT; (C) THIRD-PARTY PLATFORM ACTIONS OR POLICY CHANGES; (D) SEARCH ENGINE ALGORITHM CHANGES; (E) UNAUTHORISED ACCESS TO YOUR ACCOUNT; OR (F) ANY MATTER BEYOND OUR REASONABLE CONTROL.</li>
        </ul>
        <p>Some jurisdictions do not allow the exclusion or limitation of certain types of liability. In such jurisdictions, our liability is limited to the greatest extent permitted by law.</p>

        <h2>13. Indemnification</h2>
        <p>You agree to indemnify, defend, and hold harmless LeadOS and its officers, directors, employees, contractors, and affiliates from and against any and all claims, damages, losses, penalties, liabilities, costs, and expenses (including reasonable legal fees) arising out of or relating to: (a) your use of the Services; (b) content you publish, generate, or distribute using the Services; (c) your violation of these Terms; (d) your violation of any applicable law or third-party right; or (e) any claim by a third party relating to AI-generated content published through your account.</p>

        <h2>14. Data protection</h2>
        <p>Our Privacy Policy (available at myleados.ai/privacy) governs the collection, use, and protection of personal data. By using the Services, you acknowledge and agree to our Privacy Policy.</p>
        <p>Where you use the Services to process personal data of your customers or end users, you act as the data controller and are solely responsible for compliance with applicable data protection laws (including GDPR, UAE PDPL, and any other applicable regulation).</p>

        <h2>15. Force majeure</h2>
        <p>LeadOS shall not be liable for any delay or failure to perform its obligations under these Terms where such delay or failure results from circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, government actions, internet or network outages, third-party platform outages, or pandemic.</p>

        <h2>16. Modifications to Terms</h2>
        <p>We reserve the right to modify these Terms at any time. Material changes will be communicated by email or through the platform with at least 14 days' notice where practicable. Your continued use of the Services after the effective date of any changes constitutes your acceptance of the updated Terms.</p>

        <h2>17. Termination</h2>
        <p>Either party may terminate these Terms at any time. LeadOS may suspend or terminate your access immediately, without notice, if you breach these Terms, fail to pay fees, or if we are required to do so by law.</p>
        <p>Upon termination: (a) your access to the Services will cease; (b) you remain liable for all fees due up to the termination date; (c) we may delete your data after a reasonable retention period in accordance with our Privacy Policy.</p>

        <h2>18. Governing law and disputes</h2>
        <p>These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any dispute arising out of or in connection with these Terms shall first be subject to good-faith negotiation between the parties. If unresolved within 30 days, disputes shall be submitted to the exclusive jurisdiction of the courts of the UAE.</p>

        <h2>19. Entire agreement and severability</h2>
        <p>These Terms, together with our Privacy Policy and any plan-specific or order-specific terms, constitute the entire agreement between you and LeadOS regarding the Services and supersede all prior agreements. If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</p>

        <h2>20. Contact</h2>
        <p>For legal queries: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        <p>For support: <a href={`mailto:${SUPPORT}`}>{SUPPORT}</a></p>
        <p>LeadOS Technologies FZE, United Arab Emirates</p>
      </div>
    </section>
  );
}

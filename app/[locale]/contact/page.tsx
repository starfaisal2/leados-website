'use client';
import { useTranslations } from 'next-intl';

const WHATSAPP_URL =
  "https://wa.me/971568350424?text=Hi%20LeadOS%2C%20I%20would%20like%20to%20book%20a%20demo";

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <section className="legal-page">
      <div className="legal-shell">
        <span className="eyebrow">{t('eyebrow')}</span>
        <h1>{t('h1')}</h1>
        <p>{t('intro')}</p>

        <div className="legal-card-grid contact-card-grid">
          <div className="legal-card">
            <h3>{t('bookDemoTitle')}</h3>
            <p>{t('bookDemoDesc')}</p>
            <a className="legal-card-link" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              {t('bookDemoCta')}
            </a>
          </div>

          <div className="legal-card">
            <h3>{t('phoneTitle')}</h3>
            <p>
              <a href="tel:+971568350424">+971 56 835 0424</a>
            </p>
            <p className="legal-muted">{t('phoneMuted')}</p>
          </div>

          <div className="legal-card">
            <h3>{t('emailTitle')}</h3>
            <p>
              <a href="mailto:hello@leadoscrm.com">hello@leadoscrm.com</a>
            </p>
            <p className="legal-muted">{t('emailMuted')}</p>
          </div>

          <div className="legal-card">
            <h3>{t('businessTitle')}</h3>
            <p>{t('businessDesc')}</p>
          </div>

          <div className="legal-card">
            <h3>Our Address</h3>
            <p style={{ lineHeight: 1.7 }}>
              <strong>LeadOS Technologies FZC</strong><br />
              Sharjah Research Technology and Innovation Park<br />
              Block B-B58-069<br />
              Sharjah, UAE 23227
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

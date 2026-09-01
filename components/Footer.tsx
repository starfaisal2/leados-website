import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <svg width="26" height="26" viewBox="0 0 46 46" fill="none">
                <defs>
                  <linearGradient id="ft_g" x1="0" y1="0" x2="46" y2="46" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#00C8F0"/>
                    <stop offset="55%" stopColor="#2563EB"/>
                    <stop offset="100%" stopColor="#7C3AED"/>
                  </linearGradient>
                </defs>
                <rect x="3" y="3" width="10" height="40" rx="5" fill="url(#ft_g)"/>
                <rect x="3" y="33" width="36" height="10" rx="5" fill="url(#ft_g)"/>
                <circle cx="41" cy="8" r="4.5" fill="#00C8F0"/>
                <circle cx="41" cy="8" r="8.5" fill="none" stroke="#2563EB" strokeWidth="1.5" opacity="0.5"/>
                <circle cx="41" cy="8" r="12.5" fill="none" stroke="#7C3AED" strokeWidth="1" opacity="0.25"/>
              </svg>
              <span className="footer-bot-wm">LeadOS</span>
            </div>
            <p className="footer-brand-desc">
              Your AI Revenue Brain. Turn every conversation into a booked appointment and tracked revenue — on autopilot.
            </p>
            <div className="footer-contact-block">
              <a href="mailto:hello@leadoscrm.com">hello@leadoscrm.com</a>
              <a href="tel:+971568350424">🇦🇪 +971 56 835 0424</a>
              <a href="https://wa.me/971568350424?text=Hi%20LeadOS%2C%20I%20would%20like%20to%20book%20a%20demo" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#25d366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </a>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,.35)", lineHeight: 1.5 }}>
                LeadOS Technologies FZC<br />
                🇦🇪 Sharjah Research Technology and Innovation Park,<br />
                Block B-B58-069, Sharjah, UAE 23227
              </span>
            </div>
            <div className="footer-chips">
              {["WhatsApp", "Instagram", "Messenger", "Web Chat", "Voice AI", "AI Booking", "Follow-Up", "Multilingual", "Meta Brain"].map((c) => (
                <span key={c} className="footer-chip">{c}</span>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <div className="footer-col-h">Product</div>
            <ul className="footer-links">
              {[
                ["/", "Features"],
                ["/#voice-ai", "Voice AI"],
                ["/#meta-brain", "Meta Brain"],
                ["/#pricing", "Pricing"],
                ["/security", "Security"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <div className="footer-col-h">Industries</div>
            <ul className="footer-links">
              {["Aesthetic Clinics", "Dental Clinics", "Medical Centers", "Real Estate", "Restaurants", "Legal"].map((l) => (
                <li key={l}>
                  <a href="#">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="footer-col-h">Company</div>
            <ul className="footer-links">
              {[
                ["/about", "About Us"],
                ["/contact", "Contact"],
                ["#", "Blog"],
                ["#", "Careers"],
                ["#", "Partners"],
              ].map(([href, label]) => (
                <li key={href + label}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="footer-col-h">Legal</div>
            <ul className="footer-links">
              {[
                ["/privacy", "Privacy Policy"],
                ["/terms", "Terms of Service"],
                ["/security", "Security"],
                ["#", "GDPR"],
                ["#", "Cookie Policy"],
                ["#", "Fair Use"],
              ].map(([href, label]) => (
                <li key={href + label}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-clients" style={{ borderTop: "1px solid rgba(255,255,255,.06)", padding: "20px 0 0", marginBottom: 20, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,.3)", textTransform: "uppercase", letterSpacing: "0.08em", marginRight: 4 }}>Trusted by</span>
          <a href="https://enfieldroyalclinics.ae" target="_blank" rel="noopener" style={{ fontSize: 12, color: "rgba(255,255,255,.45)", textDecoration: "none", padding: "3px 10px", border: "1px solid rgba(255,255,255,.1)", borderRadius: 20 }}>Enfield Royal Clinics</a>
          <a href="https://www.fbcdelivery.ae" target="_blank" rel="noopener" style={{ fontSize: 12, color: "rgba(255,255,255,.45)", textDecoration: "none", padding: "3px 10px", border: "1px solid rgba(255,255,255,.1)", borderRadius: 20 }}>FBC Delivery Services</a>
        </div>
        <div className="footer-bottom">
          <div className="footer-bot-logo">
            <span className="footer-bot-wm">LeadOS</span>
          </div>
          <span className="footer-copy">
            © 2026 LeadOS. All rights reserved. Built for revenue-driven businesses.
          </span>
        </div>
      </div>
    </footer>
  );
}

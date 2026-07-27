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

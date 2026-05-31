import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <svg width="26" height="26" viewBox="0 0 120 120" fill="none">
                <defs>
                  <linearGradient id="ft_s" x1="45" y1="20" x2="105" y2="95" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#00c8f0"/><stop offset="45%" stopColor="#2f6ef5"/><stop offset="100%" stopColor="#7c3aed"/>
                  </linearGradient>
                  <linearGradient id="ft_l" x1="10" y1="15" x2="55" y2="90" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="rgba(255,255,255,.7)"/><stop offset="100%" stopColor="rgba(255,255,255,.4)"/>
                  </linearGradient>
                </defs>
                <rect x="6" y="78" width="9" height="9" rx="2" fill="#00c8f0" opacity=".6"/>
                <rect x="20" y="88" width="7" height="7" rx="1.5" fill="#00c8f0" opacity=".38"/>
                <rect x="4" y="65" width="6" height="6" rx="1.5" fill="#00c8f0" opacity=".2"/>
                <path d="M52 34 C52 27 57 20 68 20 C79 20 87 26 87 34 C87 41 81 44 73 46 C65 48 58 51 58 59 C58 67 64 73 75 73 C85 73 92 67 92 60 L82 60 C82 63 79 66 75 66 C71 66 68 63 68 59 C68 55 75 52 82 49 C90 46 98 41 98 33 C98 23 89 13 68 13 C47 13 42 24 42 34 Z" fill="url(#ft_s)"/>
                <path d="M10 16 L10 68 L46 68 L46 58 L24 58 L24 16 Z" fill="url(#ft_l)"/>
              </svg>
              <span className="footer-bot-wm">LeadOS</span>
            </div>
            <p className="footer-brand-desc">
              Your AI Revenue Brain. Turn every conversation into a booked appointment and tracked revenue — on autopilot.
            </p>
            <div className="footer-contact-block">
              <a href="mailto:admin@leadoscrm.com">admin@leadoscrm.com</a>
              <a href="tel:+971568350424">+971 56 835 0424</a>
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

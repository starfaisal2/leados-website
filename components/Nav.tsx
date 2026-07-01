"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import LoginModal from "./LoginModal";

const BOOK_URL =
  "https://wa.me/971568350424?text=Hi%20LeadOS%2C%20I%20would%20like%20to%20book%20a%20demo";
const SIGNUP_URL = "/get-started";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { href: "/#features", label: "Product" },
    { href: "/#voice-ai", label: "Voice AI" },
    { href: "/#industries", label: "Industries" },
    { href: "/auto-seo", label: "Auto SEO ✨" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />

      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          {/* Logo */}
          <Link href="/" className="nav-logo" aria-label="LeadOS home">
            <img src="/leados-logo-full.svg" alt="LeadOS" className="nav-logo-img" />
          </Link>

          {/* Desktop links */}
          <ul className="nav-links">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="nav-link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="nav-right">
            <button className="nav-login" onClick={() => setLoginOpen(true)}>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              Login
            </button>
            <Link href={SIGNUP_URL} className="nav-trial">
              Get Started
            </Link>
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="nav-demo">
              Book Demo
            </a>
            <button
              className="nav-hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "white",
              borderBottom: "1px solid var(--border)",
              boxShadow: "0 8px 24px rgba(0,0,0,.08)",
              padding: "12px 24px 20px",
              zIndex: 99,
            }}
          >
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="nav-link"
                style={{ display: "block", padding: "11px 0", borderBottom: "1px solid var(--border)" }}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div style={{ display: "grid", gap: 10, marginTop: 16 }}>
              <button
                className="nav-login"
                style={{ width: "100%", justifyContent: "center" }}
                onClick={() => { setLoginOpen(true); setMobileOpen(false); }}
              >
                Login
              </button>
              <Link
                href={SIGNUP_URL}
                className="nav-trial"
                style={{ width: "100%", textAlign: "center", justifyContent: "center" }}
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-demo"
                style={{ width: "100%", textAlign: "center" }}
              >
                Book Demo
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

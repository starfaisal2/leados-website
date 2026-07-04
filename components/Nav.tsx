"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "@/lib/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import LoginModal from "./LoginModal";

const BOOK_URL =
  "https://wa.me/971568350424?text=Hi%20LeadOS%2C%20I%20would%20like%20to%20book%20a%20demo";
const SIGNUP_URL = "/get-started";

const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ar", label: "العربية", flag: "🇦🇪" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

const DROPDOWN_CHEVRON = (
  <svg width="11" height="11" fill="none" viewBox="0 0 24 24" style={{ opacity: 0.45, flexShrink: 0 }}>
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("nav");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
      if (productRef.current && !productRef.current.contains(e.target as Node)) setProductOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const switchLocale = (code: string) => {
    router.replace(pathname, { locale: code });
    setLangOpen(false);
    setMobileOpen(false);
  };

  const currentLang = LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0];

  const productItems = [
    { href: "/#features", icon: "⚡", label: t("product"), desc: "AI inbox, CRM, bookings" },
    { href: "/#voice-ai", icon: "🎙️", label: t("voiceAi"), desc: "Answer every call, 24/7" },
    { href: "/#industries", icon: "🏢", label: t("industries"), desc: "Built for service businesses" },
    { href: "/auto-seo", icon: "✨", label: t("autoSeo"), desc: "Auto-publish SEO content" },
    { href: "/company-brain", icon: "🧠", label: t("companyBrain"), desc: "AI-powered knowledge base" },
  ];

  const topLinks = [
    { href: "/#pricing", label: t("pricing") },
    { href: "/blog", label: t("blog") },
    { href: "/contact", label: t("contact") },
  ];

  const dropdownStyle: React.CSSProperties = {
    position: "absolute",
    top: "calc(100% + 10px)",
    left: "50%",
    transform: "translateX(-50%)",
    background: "white",
    border: "1px solid var(--border)",
    borderRadius: 16,
    boxShadow: "0 16px 48px rgba(0,0,0,.12)",
    padding: "8px",
    zIndex: 200,
    minWidth: 260,
  };

  return (
    <>
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />

      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          {/* Logo */}
          <a href="/" className="nav-logo" aria-label="LeadOS home">
            <img src="/leados-logo-full.svg" alt="LeadOS" className="nav-logo-img" />
          </a>

          {/* Desktop links */}
          <ul className="nav-links" style={{ gap: 2 }}>
            {/* Product dropdown */}
            <li>
              <div ref={productRef} style={{ position: "relative" }}>
                <button
                  className="nav-link"
                  onClick={() => setProductOpen(!productOpen)}
                  style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", cursor: "pointer", padding: "6px 10px", borderRadius: 8 }}
                >
                  {t("product")}
                  {DROPDOWN_CHEVRON}
                </button>
                {productOpen && (
                  <div style={dropdownStyle}>
                    {productItems.map(({ href, icon, label, desc }) => (
                      <a
                        key={href}
                        href={href}
                        onClick={() => setProductOpen(false)}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 12,
                          padding: "10px 12px",
                          borderRadius: 10,
                          textDecoration: "none",
                          transition: "background .15s",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.background = "var(--blue-50)")}
                        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                      >
                        <span style={{ fontSize: 18, lineHeight: 1, marginTop: 2 }}>{icon}</span>
                        <span>
                          <span style={{ display: "block", fontSize: 13.5, fontWeight: 600, color: "var(--ink)" }}>{label}</span>
                          <span style={{ display: "block", fontSize: 12, color: "var(--ink-4)", marginTop: 1 }}>{desc}</span>
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </li>

            {topLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="nav-link" style={{ padding: "6px 10px" }}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="nav-right">
            {/* Language Switcher */}
            <div ref={langRef} style={{ position: "relative" }}>
              <button
                className="nav-login"
                onClick={() => setLangOpen(!langOpen)}
                aria-label="Switch language"
                style={{ gap: 5, fontWeight: 500 }}
              >
                <span style={{ fontSize: 15 }}>{currentLang.flag}</span>
                <span style={{ fontSize: 12 }}>{currentLang.label}</span>
                {DROPDOWN_CHEVRON}
              </button>
              {langOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 8px)",
                    right: 0,
                    background: "white",
                    border: "1px solid var(--border)",
                    borderRadius: 14,
                    boxShadow: "0 8px 32px rgba(0,0,0,.12)",
                    padding: "6px 0",
                    zIndex: 200,
                    minWidth: 170,
                  }}
                >
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => switchLocale(lang.code)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        width: "100%",
                        padding: "9px 14px",
                        background: lang.code === locale ? "var(--blue-50)" : "transparent",
                        border: "none",
                        cursor: "pointer",
                        fontSize: 13.5,
                        fontWeight: lang.code === locale ? 700 : 400,
                        color: lang.code === locale ? "var(--blue)" : "var(--ink)",
                        textAlign: "left",
                      }}
                    >
                      <span style={{ fontSize: 16 }}>{lang.flag}</span>
                      {lang.label}
                      {lang.code === locale && (
                        <span style={{ marginLeft: "auto", fontSize: 12, color: "var(--blue)" }}>✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="nav-login" onClick={() => setLoginOpen(true)}>
              {t("login")}
            </button>
            <a href={SIGNUP_URL} className="nav-trial">
              {t("getStarted")}
            </a>
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="nav-demo">
              {t("bookDemo")}
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
              padding: "12px 20px 20px",
              zIndex: 99,
            }}
          >
            {/* Product group */}
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--ink-4)", textTransform: "uppercase", letterSpacing: "0.08em", padding: "10px 0 6px" }}>
              {t("product")}
            </div>
            {productItems.map(({ href, icon, label }) => (
              <a
                key={href}
                href={href}
                className="nav-link"
                style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: "1px solid var(--border)" }}
                onClick={() => setMobileOpen(false)}
              >
                <span style={{ fontSize: 16 }}>{icon}</span>
                {label}
              </a>
            ))}

            {topLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="nav-link"
                style={{ display: "block", padding: "11px 0", borderBottom: "1px solid var(--border)" }}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ))}

            {/* Language switcher */}
            <div style={{ padding: "14px 0", borderBottom: "1px solid var(--border)" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--ink-4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Language</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => switchLocale(lang.code)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      padding: "6px 12px",
                      borderRadius: 20,
                      border: lang.code === locale ? "1.5px solid var(--blue)" : "1px solid var(--border)",
                      background: lang.code === locale ? "var(--blue-50)" : "transparent",
                      cursor: "pointer",
                      fontSize: 12,
                      fontWeight: lang.code === locale ? 700 : 400,
                      color: lang.code === locale ? "var(--blue)" : "var(--ink-3)",
                    }}
                  >
                    <span>{lang.flag}</span>
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: "grid", gap: 10, marginTop: 16 }}>
              <button
                className="nav-login"
                style={{ width: "100%", justifyContent: "center" }}
                onClick={() => { setLoginOpen(true); setMobileOpen(false); }}
              >
                {t("login")}
              </button>
              <a
                href={SIGNUP_URL}
                className="nav-trial"
                style={{ width: "100%", textAlign: "center", justifyContent: "center" }}
                onClick={() => setMobileOpen(false)}
              >
                {t("getStarted")}
              </a>
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-demo"
                style={{ width: "100%", textAlign: "center" }}
              >
                {t("bookDemo")}
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

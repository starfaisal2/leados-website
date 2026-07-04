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

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close lang dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
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
  const t = useTranslations("nav");

  const links = [
    { href: "/#features", label: t("product") },
    { href: "/#voice-ai", label: t("voiceAi") },
    { href: "/#industries", label: t("industries") },
    { href: "/auto-seo", label: `${t("autoSeo")} ✨` },
    { href: "/company-brain", label: `${t("companyBrain")} 🧠` },
    { href: "/#pricing", label: t("pricing") },
    { href: "/blog", label: t("blog") },
    { href: "/contact", label: t("contact") },
  ];

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
          <ul className="nav-links">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="nav-link" style={{ whiteSpace: "nowrap" }}>
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
                style={{ gap: 4, fontWeight: 500, padding: "6px 10px", fontSize: 12 }}
              >
                <span style={{ fontSize: 14 }}>{currentLang.flag}</span>
                <svg width="9" height="9" fill="none" viewBox="0 0 24 24" style={{ opacity: 0.45 }}>
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {langOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 8px)",
                    right: 0,
                    background: "white",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    boxShadow: "0 8px 32px rgba(0,0,0,.12)",
                    padding: "6px 0",
                    zIndex: 200,
                    minWidth: 160,
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
                        <span style={{ marginLeft: "auto", fontSize: 12 }}>✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="nav-login" onClick={() => setLoginOpen(true)}>
              {t("login")}
            </button>
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
              padding: "12px 24px 20px",
              zIndex: 99,
            }}
          >
            {links.map(({ href, label }) => (
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

            {/* Mobile language switcher */}
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
                Login
              </button>
              <a
                href={SIGNUP_URL}
                className="nav-trial"
                style={{ width: "100%", textAlign: "center", justifyContent: "center" }}
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </a>
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

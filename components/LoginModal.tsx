"use client";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function LoginModal({ open, onClose }: Props) {
  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 900,
        background: "rgba(15,17,23,.75)",
        backdropFilter: "blur(16px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 20,
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        style={{
          background: "white", borderRadius: 22, padding: 40,
          width: 400, maxWidth: "95vw",
          boxShadow: "0 40px 100px rgba(0,0,0,.18)",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 14, right: 14,
            background: "var(--surface-2)", border: "none",
            width: 28, height: 28, borderRadius: "50%",
            cursor: "pointer", fontSize: 13,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "var(--ink-3)",
          }}
        >
          ✕
        </button>

        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
          <svg width="28" height="28" viewBox="0 0 120 120" fill="none">
            <defs>
              <linearGradient id="ml_s" x1="45" y1="20" x2="105" y2="95" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00c8f0"/><stop offset="45%" stopColor="#2f6ef5"/><stop offset="100%" stopColor="#7c3aed"/>
              </linearGradient>
              <linearGradient id="ml_l" x1="10" y1="15" x2="55" y2="90" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0f1117"/><stop offset="100%" stopColor="#2d2f3a"/>
              </linearGradient>
            </defs>
            <rect x="6" y="78" width="9" height="9" rx="2" fill="#00c8f0" opacity=".65"/>
            <rect x="20" y="88" width="7" height="7" rx="1.5" fill="#00c8f0" opacity=".42"/>
            <rect x="4" y="65" width="6" height="6" rx="1.5" fill="#00c8f0" opacity=".22"/>
            <path d="M52 34 C52 27 57 20 68 20 C79 20 87 26 87 34 C87 41 81 44 73 46 C65 48 58 51 58 59 C58 67 64 73 75 73 C85 73 92 67 92 60 L82 60 C82 63 79 66 75 66 C71 66 68 63 68 59 C68 55 75 52 82 49 C90 46 98 41 98 33 C98 23 89 13 68 13 C47 13 42 24 42 34 Z" fill="url(#ml_s)"/>
            <path d="M10 16 L10 68 L46 68 L46 58 L24 58 L24 16 Z" fill="url(#ml_l)"/>
          </svg>
          <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 15, letterSpacing: "2px", textTransform: "uppercase", background: "linear-gradient(90deg,#0f1117 0%,#2563eb 60%,#4f46e5 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>LeadOS</span>
        </div>

        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 24, fontWeight: 600, marginBottom: 4, letterSpacing: "-.5px" }}>Welcome back</h2>
        <p style={{ fontSize: 13, color: "var(--ink-3)", marginBottom: 24 }}>Sign in to your LeadOS CRM dashboard</p>

        <label style={{ fontSize: 12, fontWeight: 600, color: "var(--ink-2)", marginBottom: 5, display: "block" }}>Email address</label>
        <input
          type="email" placeholder="you@company.com"
          style={{ width: "100%", padding: "10px 14px", border: "1.5px solid var(--border-2)", borderRadius: 9, fontSize: 14, fontFamily: "inherit", marginBottom: 14, background: "var(--surface-2)", outline: "none", color: "var(--ink)", transition: "border-color .15s" }}
          onFocus={(e) => (e.target.style.borderColor = "rgba(37,99,235,.4)")}
          onBlur={(e) => (e.target.style.borderColor = "var(--border-2)")}
        />
        <label style={{ fontSize: 12, fontWeight: 600, color: "var(--ink-2)", marginBottom: 5, display: "block" }}>Password</label>
        <input
          type="password" placeholder="••••••••"
          style={{ width: "100%", padding: "10px 14px", border: "1.5px solid var(--border-2)", borderRadius: 9, fontSize: 14, fontFamily: "inherit", marginBottom: 4, background: "var(--surface-2)", outline: "none", color: "var(--ink)", transition: "border-color .15s" }}
          onFocus={(e) => (e.target.style.borderColor = "rgba(37,99,235,.4)")}
          onBlur={(e) => (e.target.style.borderColor = "var(--border-2)")}
        />

        <button
          onClick={() => window.open("https://app.myleados.ai/login", "_blank")}
          style={{ width: "100%", padding: 13, borderRadius: 10, fontSize: 14.5, fontWeight: 600, fontFamily: "inherit", cursor: "pointer", border: "none", background: "linear-gradient(135deg,#2563eb,#4f46e5)", color: "white", marginTop: 8, boxShadow: "0 4px 14px rgba(37,99,235,.28)", transition: "all .2s" }}
          onMouseOver={(e) => { e.currentTarget.style.filter = "brightness(1.07)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseOut={(e) => { e.currentTarget.style.filter = ""; e.currentTarget.style.transform = ""; }}
        >
          Sign In to Dashboard →
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "16px 0" }}>
          <hr style={{ flex: 1, border: "none", borderTop: "1px solid var(--border)" }}/>
          <span style={{ fontSize: 12, color: "var(--ink-4)" }}>or</span>
          <hr style={{ flex: 1, border: "none", borderTop: "1px solid var(--border)" }}/>
        </div>

        <button
          style={{ width: "100%", padding: 11, borderRadius: 9, fontSize: 13, fontFamily: "inherit", cursor: "pointer", background: "white", border: "1.5px solid var(--border-2)", color: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "all .15s" }}
          onMouseOver={(e) => (e.currentTarget.style.background = "var(--surface-2)")}
          onMouseOut={(e) => (e.currentTarget.style.background = "white")}
        >
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        <p style={{ textAlign: "center", fontSize: 12, color: "var(--ink-4)", marginTop: 14 }}>
          Forgot password?{" "}
          <a href="#" style={{ color: "var(--blue)", fontWeight: 500 }}>Reset here</a>
        </p>
      </div>
    </div>
  );
}

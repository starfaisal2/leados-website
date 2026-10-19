import { notFound } from "next/navigation";
// Privacy is English-only — served at /privacy (no locale prefix).
// Returning 404 here prevents /en/privacy from creating a redirect loop via next-intl as-needed.
export default function PrivacyLocalePage() { notFound(); }

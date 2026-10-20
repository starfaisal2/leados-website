import { notFound } from "next/navigation";
// Terms is English-only — served at /terms (no locale prefix).
// Returning 404 here prevents /en/terms from creating a redirect loop via next-intl as-needed.
export default function TermsLocalePage() { notFound(); }

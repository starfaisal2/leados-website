import { notFound } from "next/navigation";
// Voice AI page is served at /voice-ai (no locale prefix).
// Returning 404 here prevents /en/voice-ai from creating a redirect loop via next-intl as-needed.
export default function VoiceAiLocalePage() { notFound(); }

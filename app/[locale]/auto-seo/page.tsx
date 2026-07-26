import { redirect } from "next/navigation";

// The canonical auto-seo page is handled by app/auto-seo/route.ts
// which serves the static HTML at the clean /auto-seo URL.
// Locale-prefixed hits (e.g. /en/auto-seo) just redirect there.
export default function AutoSeoLocalePage() {
  redirect("/auto-seo");
}

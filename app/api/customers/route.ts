// GET /api/customers
// Proxies the customer list from the LeadOS app for the public showcase page.
// Keeps the data URL on myleados.ai rather than app.myleados.ai.

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const res = await fetch("https://app.myleados.ai/api/public/customers", {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch {
    return NextResponse.json({ customers: [] });
  }
}

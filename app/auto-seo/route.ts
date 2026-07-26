import fs from "fs";
import path from "path";

export async function GET() {
  const htmlPath = path.join(process.cwd(), "public", "auto-seo.html");
  const html = fs.readFileSync(htmlPath, "utf-8");
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

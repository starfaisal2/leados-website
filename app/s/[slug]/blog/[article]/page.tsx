import { notFound } from "next/navigation";

// Public tenant article route disabled — tenants must host content on their own domain.
export default function TenantArticlePage() {
  notFound();
}

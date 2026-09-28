import { notFound } from "next/navigation";

// Public tenant blog route disabled — tenants must host content on their own domain.
export default function TenantBlogPage() {
  notFound();
}

import { AdminPanelPlaceholder } from "@/components/admin/admin-panel-placeholder";
import { buildMetadata } from "@/lib/seo/build-metadata";

export const metadata = buildMetadata({
  title: "Admin panel base",
  path: "/admin",
  noIndex: true,
});

export default function AdminPage() {
  return <AdminPanelPlaceholder />;
}

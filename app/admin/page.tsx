import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/build-metadata";

export const metadata = buildMetadata({
  title: "Area interna",
  path: "/admin",
  noIndex: true,
});

export default function AdminPage() {
  notFound();
}

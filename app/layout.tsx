import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/build-metadata";
import "./globals.css";

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX" className="antialiased">
      <body className="bg-background text-foreground min-h-screen">
        {children}
      </body>
    </html>
  );
}

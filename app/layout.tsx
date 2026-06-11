import type { Metadata } from "next";
import { Source_Serif_4, Work_Sans } from "next/font/google";
import { buildMetadata } from "@/lib/seo/build-metadata";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-source-serif-4",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-MX"
      className={`${sourceSerif.variable} ${workSans.variable} antialiased`}
    >
      <body className="bg-background text-on-surface min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}

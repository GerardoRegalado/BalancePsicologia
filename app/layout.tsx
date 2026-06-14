import type { Metadata } from "next";
import { Source_Serif_4, Work_Sans } from "next/font/google";
import { buildMetadata } from "@/lib/seo/build-metadata";
import { buildLocalBusinessJsonLd } from "@/lib/seo/build-local-business-json-ld";
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
const localBusinessJsonLd = buildLocalBusinessJsonLd();

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        {children}
      </body>
    </html>
  );
}

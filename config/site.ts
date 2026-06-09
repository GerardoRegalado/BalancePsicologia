import { brandConfig } from "@/config/brand";

export type NavigationItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  locale: process.env.NEXT_PUBLIC_SITE_LOCALE ?? "es_MX",
  defaultTitle: brandConfig.name,
  titleTemplate: `%s | ${brandConfig.name}`,
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
    "Template principal para lanzar landings, sitios institucionales, SPAs ligeras y futuros SaaS con una base limpia, reusable y escalable.",
  keywords: [
    "next.js",
    "template base",
    "landing page",
    "spa",
    "saas ligero",
    "tailwind css",
    "typescript",
  ],
  ogImage: process.env.NEXT_PUBLIC_DEFAULT_OG_IMAGE ?? "/media/og-default.svg",
  navigation: [
    { label: "Inicio", href: "/" },
    { label: "Estructura", href: "/#structure" },
    { label: "Admin", href: "/admin" },
  ] satisfies NavigationItem[],
} as const;

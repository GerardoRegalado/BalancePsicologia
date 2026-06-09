export const brandConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Base Landing Template",
  shortName: process.env.NEXT_PUBLIC_SITE_SHORT_NAME ?? "Repo Base",
  legalName:
    process.env.NEXT_PUBLIC_SITE_LEGAL_NAME ?? "Base Landing Template Studio",
  tagline:
    process.env.NEXT_PUBLIC_SITE_TAGLINE ??
    "Plantilla reusable para proyectos comerciales ligeros.",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "hola@tuestudio.com",
  location: process.env.NEXT_PUBLIC_BRAND_LOCATION ?? "Remote-first",
  social: {
    instagram: "https://instagram.com/tuestudio",
    linkedin: "https://linkedin.com/company/tuestudio",
  },
} as const;

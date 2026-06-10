export const brandConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Balance Psicología",
  shortName: process.env.NEXT_PUBLIC_SITE_SHORT_NAME ?? "Balance",
  legalName: process.env.NEXT_PUBLIC_SITE_LEGAL_NAME ?? "Balance Psicología",
  tagline:
    process.env.NEXT_PUBLIC_SITE_TAGLINE ??
    "Consultorio psicológico en construcción.",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "",
  location: process.env.NEXT_PUBLIC_BRAND_LOCATION ?? "Aguascalientes, México",
  contact: {
    whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "",
  },
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  },
} as const;

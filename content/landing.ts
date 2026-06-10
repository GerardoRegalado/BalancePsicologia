export type LandingNavItem = {
  label: string;
  href: `#${string}`;
};

export type LandingSectionContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  publicNote?: string;
};

export const landingNavigation: LandingNavItem[] = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Costos", href: "#costos" },
  { label: "Contacto", href: "#contacto" },
];

export const landingHeroContent: LandingSectionContent = {
  id: "hero",
  eyebrow: "Terapia psicológica en Aguascalientes",
  title: "Un espacio seguro para tu bienestar emocional.",
  description:
    "Acompañamiento profesional y empático para personas que buscan claridad, contención y equilibrio.",
  publicNote: "Muy pronto compartiremos más detalles sobre este espacio.",
};

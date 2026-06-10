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

export type LandingCardContent = {
  title: string;
  description: string;
  meta?: string;
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

export const landingAboutContent: LandingSectionContent = {
  id: "nosotros",
  eyebrow: "Nosotros",
  title: "Una práctica terapéutica cálida, clara y humana.",
  description:
    "Este espacio reunirá la filosofía de Balance Psicología, su enfoque de atención y la manera en que acompaña cada proceso.",
  publicNote: "Información disponible próximamente.",
};

export const landingServicesContent: LandingSectionContent = {
  id: "servicios",
  eyebrow: "Servicios",
  title: "Servicios terapéuticos",
  description:
    "Muy pronto compartiremos más detalles sobre las modalidades de atención disponibles.",
};

export const landingServiceCards: LandingCardContent[] = [
  {
    title: "Terapia individual",
    description:
      "Un espacio personal para conversar, comprender lo que estás viviendo y comenzar un proceso de cuidado emocional.",
    meta: "Próximamente",
  },
  {
    title: "Terapia de pareja",
    description:
      "Muy pronto compartiremos más detalles sobre este servicio y sus alcances.",
    meta: "Próximamente",
  },
  {
    title: "Terapia familiar",
    description:
      "Información disponible próximamente para familias que buscan acompañamiento claro y cuidadoso.",
    meta: "Próximamente",
  },
];

export const landingPackagesContent: LandingSectionContent = {
  id: "costos",
  eyebrow: "Costos / Paquetes",
  title: "Información comercial clara antes de solicitar una cita.",
  description:
    "Esta sección reunirá costos, paquetes o condiciones de atención de forma clara y fácil de consultar.",
  publicNote: "Información disponible próximamente.",
};

export const landingPackageCards: LandingCardContent[] = [
  {
    title: "Sesión individual",
    description:
      "Aquí se compartirán detalles sobre duración, modalidad y condiciones de una sesión individual.",
    meta: "Próximamente",
  },
  {
    title: "Proceso terapéutico",
    description:
      "Este espacio explicará opciones de continuidad para quienes deseen iniciar un proceso terapéutico.",
    meta: "Próximamente",
  },
  {
    title: "Orientación inicial",
    description:
      "Muy pronto encontrarás la forma más clara de iniciar contacto con Balance Psicología.",
    meta: "Próximamente",
  },
];

export const landingAppointmentContent: LandingSectionContent = {
  id: "agenda",
  eyebrow: "Agenda básica",
  title: "Solicitud de cita",
  description:
    "Este espacio reunirá información clara para iniciar contacto y solicitar orientación sobre una cita.",
  publicNote:
    "Próximamente se integrarán los canales oficiales de contacto.",
};

export const landingTestimonialsContent: LandingSectionContent = {
  id: "testimonios",
  eyebrow: "Testimonios",
  title: "Historias reales solo cuando existan autorizaciones.",
  description:
    "Este espacio reunirá experiencias compartidas con autorización y cuidado de la privacidad.",
  publicNote: "Información disponible próximamente.",
};

export const landingFaqContent: LandingSectionContent = {
  id: "faq",
  eyebrow: "FAQ",
  title: "Preguntas frecuentes",
  description:
    "Preguntas base para orientar a visitantes sin sustituir una conversación directa con Balance Psicología.",
};

export const landingFaqItems: LandingCardContent[] = [
  {
    title: "¿Cómo puedo solicitar información?",
    description:
      "Próximamente se integrarán los canales oficiales para iniciar contacto.",
  },
  {
    title: "¿Dónde será la atención?",
    description:
      "Balance Psicología atiende en Aguascalientes. Muy pronto compartiremos más detalles de ubicación.",
  },
  {
    title: "¿Los costos ya son definitivos?",
    description:
      "La información de costos se publicará de forma clara cuando esté disponible.",
  },
];

export const landingContactContent: LandingSectionContent = {
  id: "contacto",
  eyebrow: "Contacto",
  title: "Canales oficiales de contacto",
  description:
    "Próximamente se integrarán los canales oficiales para solicitar información o iniciar una conversación.",
  publicNote: "Información disponible próximamente.",
};

export const landingLocationContent: LandingSectionContent = {
  id: "ubicacion",
  eyebrow: "Mapa / ubicación",
  title: "Ubicación en Aguascalientes.",
  description:
    "Este espacio reunirá dirección, referencias de llegada y detalles útiles para ubicar el consultorio.",
  publicNote: "Información disponible próximamente.",
};

export const landingFooterLinks = [
  "WhatsApp",
  "Instagram",
  "Aviso de privacidad",
  "Términos y condiciones",
] as const;

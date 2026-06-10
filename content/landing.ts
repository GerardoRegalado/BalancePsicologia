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
  { label: "Inicio", href: "#hero" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Costos", href: "#costos" },
  { label: "Agenda", href: "#agenda" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
  { label: "Ubicacion", href: "#ubicacion" },
];

export const landingHeroContent: LandingSectionContent = {
  id: "hero",
  eyebrow: "Terapia psicologica en Aguascalientes",
  title: "Un espacio seguro para tu bienestar emocional.",
  description:
    "Acompanamiento profesional y empatico para personas que buscan claridad, contencion y equilibrio.",
  publicNote: "Muy pronto compartiremos mas detalles sobre este espacio.",
};

export const landingAboutContent: LandingSectionContent = {
  id: "nosotros",
  eyebrow: "Nosotros",
  title: "Una practica terapeutica calida, clara y humana.",
  description:
    "Este espacio reunira la filosofia de Balance Psicologia, su enfoque de atencion y la manera en que acompana cada proceso.",
  publicNote: "Informacion disponible proximamente.",
};

export const landingServicesContent: LandingSectionContent = {
  id: "servicios",
  eyebrow: "Servicios",
  title: "Servicios terapeuticos",
  description:
    "Muy pronto compartiremos mas detalles sobre las modalidades de atencion disponibles.",
};

export const landingServiceCards: LandingCardContent[] = [
  {
    title: "Terapia individual",
    description:
      "Un espacio personal para conversar, comprender lo que estas viviendo y comenzar un proceso de cuidado emocional.",
    meta: "Proximamente",
  },
  {
    title: "Terapia de pareja",
    description:
      "Muy pronto compartiremos mas detalles sobre este servicio y sus alcances.",
    meta: "Proximamente",
  },
  {
    title: "Terapia familiar",
    description:
      "Informacion disponible proximamente para familias que buscan acompanamiento claro y cuidadoso.",
    meta: "Proximamente",
  },
];

export const landingPackagesContent: LandingSectionContent = {
  id: "costos",
  eyebrow: "Costos / Paquetes",
  title: "Informacion comercial clara antes de solicitar una cita.",
  description:
    "Esta seccion reunira costos, paquetes o condiciones de atencion de forma clara y facil de consultar.",
  publicNote: "Informacion disponible proximamente.",
};

export const landingPackageCards: LandingCardContent[] = [
  {
    title: "Sesion individual",
    description:
      "Aqui se compartiran detalles sobre duracion, modalidad y condiciones de una sesion individual.",
    meta: "Proximamente",
  },
  {
    title: "Proceso terapeutico",
    description:
      "Este espacio explicara opciones de continuidad para quienes deseen iniciar un proceso terapeutico.",
    meta: "Proximamente",
  },
  {
    title: "Orientacion inicial",
    description:
      "Muy pronto encontraras la forma mas clara de iniciar contacto con Balance Psicologia.",
    meta: "Proximamente",
  },
];

export const landingAppointmentContent: LandingSectionContent = {
  id: "agenda",
  eyebrow: "Agenda basica",
  title: "Solicitud de cita",
  description:
    "Este espacio reunira informacion clara para iniciar contacto y solicitar orientacion sobre una cita.",
  publicNote:
    "Proximamente se integraran los canales oficiales de contacto.",
};

export const landingTestimonialsContent: LandingSectionContent = {
  id: "testimonios",
  eyebrow: "Testimonios",
  title: "Historias reales solo cuando existan autorizaciones.",
  description:
    "Este espacio reunira experiencias compartidas con autorizacion y cuidado de la privacidad.",
  publicNote: "Informacion disponible proximamente.",
};

export const landingFaqContent: LandingSectionContent = {
  id: "faq",
  eyebrow: "FAQ",
  title: "Preguntas frecuentes",
  description:
    "Preguntas base para orientar a visitantes sin sustituir una conversacion directa con Balance Psicologia.",
};

export const landingFaqItems: LandingCardContent[] = [
  {
    title: "Como puedo solicitar informacion?",
    description:
      "Proximamente se integraran los canales oficiales para iniciar contacto.",
  },
  {
    title: "Donde sera la atencion?",
    description:
      "Balance Psicologia atiende en Aguascalientes. Muy pronto compartiremos mas detalles de ubicacion.",
  },
  {
    title: "Los costos ya son definitivos?",
    description:
      "La informacion de costos se publicara de forma clara cuando este disponible.",
  },
];

export const landingContactContent: LandingSectionContent = {
  id: "contacto",
  eyebrow: "Contacto",
  title: "Canales oficiales de contacto",
  description:
    "Proximamente se integraran los canales oficiales para solicitar informacion o iniciar una conversacion.",
  publicNote: "Informacion disponible proximamente.",
};

export const landingLocationContent: LandingSectionContent = {
  id: "ubicacion",
  eyebrow: "Mapa / ubicacion",
  title: "Ubicacion en Aguascalientes.",
  description:
    "Este espacio reunira direccion, referencias de llegada y detalles utiles para ubicar el consultorio.",
  publicNote: "Informacion disponible proximamente.",
};

export const landingFooterLinks = [
  "WhatsApp",
  "Instagram",
  "Aviso de privacidad",
  "Terminos y condiciones",
] as const;

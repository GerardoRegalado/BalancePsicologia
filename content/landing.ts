export type LandingNavItem = {
  label: string;
  href: `#${string}`;
};

export type LandingSectionContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  placeholderNote?: string;
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
    "Acompanamiento profesional y empatico para personas que buscan claridad, contencion y equilibrio. Copy editorial pendiente de aprobacion final.",
  placeholderNote:
    "Placeholder editorial: el hero final se implementara en la subfase 1.2.",
};

export const landingAboutContent: LandingSectionContent = {
  id: "nosotros",
  eyebrow: "Nosotros",
  title: "Una practica terapeutica calida, clara y humana.",
  description:
    "Esta seccion queda preparada para presentar la filosofia de Balance Psicologia, el enfoque de atencion y la informacion profesional que el cliente apruebe.",
  placeholderNote:
    "Pendiente de contenido real aprobado; no se declaran credenciales clinicas aun.",
};

export const landingServicesContent: LandingSectionContent = {
  id: "servicios",
  eyebrow: "Servicios",
  title: "Servicios terapeuticos",
  description:
    "Estructura base para explicar las modalidades de atencion sin cerrar textos definitivos antes de la aprobacion del cliente.",
};

export const landingServiceCards: LandingCardContent[] = [
  {
    title: "Terapia individual",
    description:
      "Espacio reservado para describir el acompanamiento individual cuando el contenido final sea validado.",
    meta: "Copy editable",
  },
  {
    title: "Terapia de pareja",
    description:
      "Placeholder para una modalidad que debera confirmarse con el cliente antes de publicarse.",
    meta: "Por confirmar",
  },
  {
    title: "Terapia familiar",
    description:
      "Bloque preparado para una descripcion sobria de alcance, beneficios y formato de atencion.",
    meta: "Por confirmar",
  },
];

export const landingPackagesContent: LandingSectionContent = {
  id: "costos",
  eyebrow: "Costos / Paquetes",
  title: "Informacion comercial clara antes de solicitar una cita.",
  description:
    "La landing reserva este espacio para costos, paquetes o condiciones comerciales, sin publicar precios definitivos hasta contar con aprobacion.",
  placeholderNote: "Precios y paquetes pendientes de confirmacion.",
};

export const landingPackageCards: LandingCardContent[] = [
  {
    title: "Sesion individual",
    description:
      "Espacio para costo, duracion y condiciones de una sesion individual.",
    meta: "Precio por confirmar",
  },
  {
    title: "Proceso terapeutico",
    description:
      "Espacio para explicar paquetes o continuidad de sesiones si el cliente lo define.",
    meta: "Alcance por confirmar",
  },
  {
    title: "Orientacion inicial",
    description:
      "Espacio para indicar como iniciar contacto sin prometer confirmacion automatica.",
    meta: "Flujo no funcional",
  },
];

export const landingAppointmentContent: LandingSectionContent = {
  id: "agenda",
  eyebrow: "Agenda basica",
  title: "Solicitud de cita preparada como bloque editorial.",
  description:
    "Esta seccion queda lista para una futura solicitud de cita o formulario de contacto. En esta subfase no captura datos ni envia mensajes.",
  placeholderNote:
    "No hay formulario funcional, agenda real, WhatsApp funcional ni envio de correo.",
};

export const landingTestimonialsContent: LandingSectionContent = {
  id: "testimonios",
  eyebrow: "Testimonios",
  title: "Historias reales solo cuando existan autorizaciones.",
  description:
    "El bloque se reserva para testimonios proporcionados y autorizados por el cliente. Mientras tanto se muestra un estado editorial pendiente.",
  placeholderNote: "No se inventan testimonios.",
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
      "El canal final de contacto se agregara cuando existan datos aprobados por el cliente.",
  },
  {
    title: "Donde sera la atencion?",
    description:
      "La ubicacion exacta y el mapa se publicaran cuando el dato este confirmado.",
  },
  {
    title: "Los costos ya son definitivos?",
    description:
      "No. Esta estructura solo reserva el espacio para precios o paquetes aprobados.",
  },
];

export const landingContactContent: LandingSectionContent = {
  id: "contacto",
  eyebrow: "Contacto",
  title: "Canales de contacto por confirmar.",
  description:
    "Area preparada para telefono, WhatsApp, correo, redes o instrucciones de contacto cuando el cliente proporcione datos finales.",
  placeholderNote:
    "No se publica telefono, WhatsApp, correo ni enlaces funcionales sin confirmacion.",
};

export const landingLocationContent: LandingSectionContent = {
  id: "ubicacion",
  eyebrow: "Mapa / ubicacion",
  title: "Ubicacion del consultorio pendiente de confirmacion.",
  description:
    "La estructura contempla mapa, direccion y referencias de llegada. Por ahora se muestra un placeholder editorial sin direccion exacta.",
  placeholderNote: "Mapa real pendiente; no se integra proveedor en esta subfase.",
};

export const landingFooterLinks = [
  "WhatsApp pendiente",
  "Instagram pendiente",
  "Aviso de privacidad",
  "Terminos y condiciones",
] as const;

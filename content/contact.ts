import type {
  ContactSectionContent,
  FooterContent,
  LocationSectionContent,
} from "@/types/content";

export const contactSectionContent: ContactSectionContent = {
  id: "contacto",
  eyebrow: "Contacto",
  title: "Canales oficiales de contacto",
  description:
    "Esta sección reunirá los medios oficiales para solicitar información o iniciar una conversación con Balance Psicología.",
  channels: [
    {
      label: "WhatsApp",
      description: "Canal principal para iniciar contacto cuando esté disponible.",
      status: "Disponible próximamente",
      kind: "whatsapp",
    },
    {
      label: "Correo",
      description: "Medio de contacto para dudas generales e información inicial.",
      status: "Disponible próximamente",
      kind: "email",
    },
    {
      label: "Instagram",
      description: "Espacio para futuras actualizaciones de Balance Psicología.",
      status: "Disponible próximamente",
      kind: "instagram",
    },
    {
      label: "Ubicación",
      description: "Información general de atención en Aguascalientes.",
      status: "Aguascalientes, México",
      kind: "general",
    },
  ],
};

export const locationSectionContent: LocationSectionContent = {
  id: "ubicacion",
  eyebrow: "Mapa / ubicación",
  title: "Ubicación en Aguascalientes",
  description:
    "La ubicación exacta se integrará cuando exista información aprobada para publicación.",
  mapLabel: "Área general de atención",
  areaLabel: "Aguascalientes, México",
  note: {
    title: "Referencia general",
    description:
      "Este bloque representa una ubicación general en Aguascalientes sin marcar una dirección exacta.",
  },
};

export const footerContent: FooterContent = {
  navigation: [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Costos", href: "#costos" },
    { label: "Contacto", href: "#contacto" },
  ],
  legal: [
    { label: "Aviso de privacidad" },
    { label: "Términos y condiciones" },
  ],
};

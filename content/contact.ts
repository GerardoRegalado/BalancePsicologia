import type {
  ContactSectionContent,
  FooterContent,
  LocationSectionContent,
} from "@/types/content";
import { brandConfig } from "@/config/brand";

export const contactSectionContent: ContactSectionContent = {
  id: "contacto",
  eyebrow: "Contacto",
  title: "Canales oficiales de contacto",
  description:
    "Encuentra los canales oficiales para solicitar información y conocer más sobre Balance Psicología.",
  channels: [
    {
      label: "WhatsApp",
      description:
        "Escríbenos para solicitar información o iniciar el proceso para agendar una sesión.",
      status: brandConfig.contact.whatsappDisplay,
      kind: "whatsapp",
    },
    {
      label: "Facebook",
      description:
        "Conoce contenido y actualizaciones sobre terapia cognitivo-conductual.",
      status: "Psic. Fernanda Regalado",
      kind: "facebook",
    },
    {
      label: "Instagram",
      description: "Encuentra contenido y actualizaciones de Balance Psicología.",
      status: "@psic.fernandaregalado",
      kind: "instagram",
    },
    {
      label: "Ubicación general",
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
  credit: {
    prefix: "Desarrollado con mucha cafeína ☕️ por:",
    label: "Gerardo Regalado",
    href: "https://www.gerardoregalado.dev/",
  },
};

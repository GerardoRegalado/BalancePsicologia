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
      label: "Ubicación",
      description: brandConfig.address.display,
      status: brandConfig.address.clinicName,
      kind: "location",
    },
  ],
};

export const locationSectionContent: LocationSectionContent = {
  id: "ubicacion",
  eyebrow: "Ubicación",
  title: `Encuéntranos en ${brandConfig.address.clinicName}`,
  description:
    "Consulta la dirección del consultorio y abre la ubicación en Google Maps.",
  clinicName: brandConfig.address.clinicName,
  address: brandConfig.address.display,
  mapsUrl: brandConfig.address.mapsUrl,
  ctaLabel: "Abrir en Google Maps",
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

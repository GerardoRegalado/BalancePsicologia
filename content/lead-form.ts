import { brandConfig } from "@/config/brand";
import type { AppointmentSectionContent } from "@/types/content";

export const appointmentSectionContent: AppointmentSectionContent = {
  id: "agenda",
  eyebrow: "Agenda",
  title: "Solicita tu cita",
  description:
    "Inicia el proceso de contacto por WhatsApp para consultar disponibilidad y coordinar una sesión.",
  publicNote: "El envío de un mensaje no confirma automáticamente una cita.",
  intro: {
    title: "Un primer contacto claro y sencillo",
    description:
      "WhatsApp es el canal principal para solicitar información y comenzar el proceso para agendar.",
  },
  steps: [
    {
      title: "Escríbenos por WhatsApp",
      description: "Inicia el contacto desde el botón de esta sección.",
    },
    {
      title: "Consulta disponibilidad",
      description:
        "Revisa directamente las opciones disponibles para coordinar tu sesión.",
    },
    {
      title: "Confirma tu cita",
      description:
        "La fecha y hora se consideran confirmadas únicamente después de recibir respuesta.",
    },
  ],
  primaryAction: {
    label: "Solicitar cita por WhatsApp",
    mobileLabel: "Solicitar cita por WhatsApp",
    href: brandConfig.contact.whatsappUrl,
    variant: "primary",
    external: true,
  },
  secondaryAction: {
    label: "Ver costos",
    href: "#costos",
    variant: "secondary",
  },
  privacyNote: "Evita compartir información clínica sensible en el primer mensaje.",
};

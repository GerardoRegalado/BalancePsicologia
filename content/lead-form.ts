import type { LeadFormContent } from "@/types/content";

export const leadFormContent: LeadFormContent = {
  id: "agenda",
  eyebrow: "Agenda básica",
  title: "Solicitud de cita",
  description:
    "Este espacio muestra la información básica que ayudará a iniciar contacto con Balance Psicología.",
  publicNote:
    "Próximamente se integrarán los canales oficiales para enviar solicitudes.",
  aside: {
    title: "Primer contacto claro y cuidadoso",
    description:
      "La solicitud se plantea como un primer acercamiento, sin agenda automática ni confirmación inmediata.",
    points: [
      {
        title: "Información esencial",
        description:
          "Solo se consideran datos generales de contacto para orientar el siguiente paso.",
      },
      {
        title: "Sin datos clínicos sensibles",
        description:
          "El primer contacto no requiere información sensible ni detalles personales profundos.",
      },
    ],
  },
  fields: [
    {
      name: "name",
      label: "Nombre",
      type: "text",
      required: true,
      placeholder: "Tu nombre",
    },
    {
      name: "phone",
      label: "Teléfono o WhatsApp",
      type: "text",
      required: true,
      placeholder: "Canal de contacto",
    },
    {
      name: "email",
      label: "Correo opcional",
      type: "email",
      required: false,
      placeholder: "tucorreo@ejemplo.com",
    },
    {
      name: "serviceInterest",
      label: "Servicio de interés",
      type: "select",
      required: true,
      placeholder: "Selecciona una opción",
      options: [
        "Acompañamiento individual",
        "Acompañamiento para parejas",
        "Acompañamiento familiar",
        "Quiero recibir orientación",
      ],
    },
    {
      name: "message",
      label: "Mensaje breve",
      type: "textarea",
      required: false,
      placeholder: "Cuéntanos únicamente cómo prefieres que te contacten.",
      helperText:
        "Evita compartir información clínica sensible en este primer contacto.",
    },
  ],
  visualSubmitLabel: "Canales oficiales próximamente",
  privacyNote:
    "La solicitud será habilitada cuando existan canales oficiales aprobados.",
};

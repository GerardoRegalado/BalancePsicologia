import type { LeadFormContent } from "@/types/content";

export const leadFormContent: LeadFormContent = {
  title: "Solicitud de cita",
  description:
    "Este espacio reunirá información clara para iniciar contacto con Balance Psicología.",
  fields: [
    {
      name: "name",
      label: "Nombre",
      type: "text",
      required: true,
    },
    {
      name: "phone",
      label: "Teléfono o WhatsApp",
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "Correo opcional",
      type: "email",
      required: false,
    },
    {
      name: "serviceInterest",
      label: "Servicio de interés",
      type: "select",
      required: true,
    },
    {
      name: "message",
      label: "Mensaje breve",
      type: "textarea",
      required: false,
    },
  ],
};

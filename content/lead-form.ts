import type { LeadFormContent } from "@/types/content";

export const leadFormContent: LeadFormContent = {
  title: "Solicitud de cita pendiente",
  description:
    "Placeholder editorial para una futura solicitud basica. En la subfase 1.1 no existe formulario funcional, envio de correo ni agenda real.",
  fields: [
    {
      name: "name",
      label: "Nombre",
      type: "text",
      required: true,
    },
    {
      name: "phone",
      label: "Telefono o WhatsApp",
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

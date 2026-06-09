import type { LeadFormContent } from "@/types/content";

export const leadFormContent: LeadFormContent = {
  title: "Cuéntame sobre tu proyecto",
  description:
    "Placeholder para un futuro formulario de leads. La implementación real deberá conectarse desde services/ y respetar validación, anti-spam y handoff comercial.",
  fields: [
    {
      name: "name",
      label: "Nombre",
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "Correo",
      type: "email",
      required: true,
    },
    {
      name: "projectType",
      label: "Tipo de proyecto",
      type: "select",
      required: true,
    },
    {
      name: "scope",
      label: "Objetivo o alcance",
      type: "textarea",
      required: true,
    },
  ],
};

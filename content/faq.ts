import type { FaqItem } from "@/types/content";

export const faqItems: FaqItem[] = [
  {
    question: "¿Dónde vive el contenido editable?",
    answer:
      "En esta base comienza en archivos TypeScript dentro de config y content para facilitar rebranding rápido y posterior migración a CMS.",
  },
  {
    question: "¿Cómo crecerá el panel administrativo?",
    answer:
      "La ruta /admin está reservada para integrar autenticación, formularios internos y gestión de media cuando el alcance lo justifique.",
  },
];

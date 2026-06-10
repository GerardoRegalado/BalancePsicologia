import type {
  TestimonialsSectionContent,
  TestimonialItem,
} from "@/types/content";

export const testimonialItems: TestimonialItem[] = [];

export const testimonialsSectionContent: TestimonialsSectionContent = {
  id: "testimonios",
  eyebrow: "Testimonios",
  title: "Experiencias compartidas con autorización",
  description:
    "Balance Psicología publicará experiencias reales únicamente cuando exista autorización clara y cuidado de privacidad.",
  emptyState: {
    title: "Testimonios disponibles próximamente",
    description:
      "Este espacio queda preparado para integrar experiencias reales cuando sean compartidas y autorizadas para uso público.",
  },
  items: testimonialItems,
};

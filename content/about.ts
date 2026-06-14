import type { AboutSectionContent } from "@/types/content";

export const aboutSectionContent: AboutSectionContent = {
  id: "nosotros",
  eyebrow: "Nosotros",
  title: "Nuestra filosofía",
  lead: "Creemos en la terapia como un proceso colaborativo, humano y cuidadoso. Balance Psicología busca ofrecer un espacio donde puedas hablar con calma, sentirte escuchado y ordenar lo que estás viviendo sin juicio.",
  body: "El acompañamiento se presenta con una mirada ética, cercana y respetuosa del ritmo de cada persona, priorizando la escucha, la claridad y un trabajo colaborativo.",
  images: [
    {
      src: "/media/about-hands-mug.png",
      alt: "Manos sosteniendo una taza en un ambiente cálido y tranquilo.",
    },
    {
      src: "/media/about-plant.png",
      alt: "Planta en maceta de barro dentro de un espacio sereno.",
    },
  ],
  callout: {
    title: "Acompañamiento con escucha cuidadosa",
    description:
      "Un enfoque orientado a claridad, contención y construcción de herramientas personales con expectativas cuidadosas.",
  },
};

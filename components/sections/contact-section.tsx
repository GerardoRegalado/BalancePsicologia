import { LandingSectionShell } from "@/components/sections/landing-section-shell";
import { landingContactContent } from "@/content/landing";

const contactPlaceholders = [
  "WhatsApp por confirmar",
  "Telefono por confirmar",
  "Correo por confirmar",
  "Redes por confirmar",
] as const;

export function ContactSection() {
  return (
    <LandingSectionShell
      {...landingContactContent}
      className="bg-surface-container-low"
    >
      <div className="grid gap-4 md:grid-cols-4">
        {contactPlaceholders.map((item) => (
          <div
            key={item}
            className="rounded-lg border border-outline-variant/70 bg-surface-container-lowest p-5 text-sm font-medium text-primary"
          >
            {item}
          </div>
        ))}
      </div>
    </LandingSectionShell>
  );
}

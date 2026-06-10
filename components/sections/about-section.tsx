import { LandingSectionShell } from "@/components/sections/landing-section-shell";
import { landingAboutContent } from "@/content/landing";

export function AboutSection() {
  return (
    <LandingSectionShell
      {...landingAboutContent}
      className="bg-surface-container-low"
    >
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="mt-10 min-h-52 rounded-lg bg-secondary-container/55" />
          <div className="min-h-64 rounded-lg bg-primary-fixed/70 shadow-atmospheric-sm" />
        </div>

        <div className="rounded-lg border border-outline-variant/70 bg-surface-container-lowest p-6 md:p-8">
          <h3 className="font-serif text-2xl font-medium text-on-surface">
            Un enfoque centrado en la persona
          </h3>
          <p className="mt-4 leading-8 text-on-surface-variant">
            Muy pronto compartiremos mas detalles sobre la forma de trabajo, el
            cuidado en cada sesion y la filosofia de Balance Psicologia.
          </p>
        </div>
      </div>
    </LandingSectionShell>
  );
}

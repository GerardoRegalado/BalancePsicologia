import { LandingSectionShell } from "@/components/sections/landing-section-shell";
import { landingTestimonialsContent } from "@/content/landing";

export function TestimonialsSection() {
  return (
    <LandingSectionShell
      {...landingTestimonialsContent}
      className="bg-surface-container-low"
    >
      <div className="rounded-xl border border-dashed border-outline-variant bg-surface-container-lowest p-8 text-center md:p-12">
        <p className="mx-auto max-w-2xl text-lg leading-8 text-on-surface-variant">
          Aquí se integrarán testimonios reales, anonimizados o firmados según
          autorización expresa. El estado actual evita publicar citas ficticias.
        </p>
      </div>
    </LandingSectionShell>
  );
}

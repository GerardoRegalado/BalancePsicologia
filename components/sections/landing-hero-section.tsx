import { Container } from "@/components/ui/container";
import { landingHeroContent } from "@/content/landing";

export function LandingHeroSection() {
  return (
    <section id="hero" className="scroll-mt-32 py-16 md:py-24">
      <Container className="grid items-center gap-12 md:grid-cols-[1fr_0.95fr]">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-5">
            <p className="inline-flex rounded-full border border-secondary-container bg-secondary-container/35 px-3 py-1.5 text-xs font-medium text-on-secondary-container">
              {landingHeroContent.eyebrow}
            </p>
            <h1 className="font-serif text-4xl leading-tight font-semibold text-balance text-on-surface md:text-5xl">
              {landingHeroContent.title}
            </h1>
            <p className="max-w-xl text-lg leading-8 text-on-surface-variant">
              {landingHeroContent.description}
            </p>
          </div>

          <p className="text-sm leading-6 text-on-surface-variant">
            {landingHeroContent.publicNote}
          </p>
        </div>

        <div
          aria-label="Ambiente sereno de consultorio"
          className="relative min-h-[360px] overflow-hidden rounded-xl bg-surface-container shadow-atmospheric md:min-h-[520px]"
        >
          <div className="absolute inset-5 rounded-lg border border-outline-variant/70 bg-surface-container-lowest/60" />
          <div className="absolute right-10 bottom-10 left-10 rounded-lg bg-primary/10 p-6">
            <p className="font-serif text-2xl text-primary">
              Un espacio tranquilo para conversar
            </p>
            <p className="mt-2 text-sm leading-6 text-on-surface-variant">
              Muy pronto compartiremos más detalles sobre el consultorio y la
              experiencia de atención.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

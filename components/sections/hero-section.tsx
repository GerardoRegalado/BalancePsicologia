import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import type { HeroContent } from "@/types/content";

type HeroSectionProps = {
  content: HeroContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="border-border border-b">
      <Container className="grid gap-12 py-20 lg:grid-cols-[1.3fr_0.7fr] lg:py-28">
        <div className="space-y-8">
          <div className="space-y-5">
            <p className="text-accent text-xs tracking-[0.35em] uppercase">
              {content.eyebrow}
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-balance md:text-6xl">
              {content.title}
            </h1>
            <p className="text-muted max-w-2xl text-lg leading-8">
              {content.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            {content.actions.map((action) => (
              <ButtonLink
                key={action.href}
                href={action.href}
                label={action.label}
                variant={action.variant}
              />
            ))}
          </div>
        </div>

        <div className="border-border bg-surface/90 grid gap-4 rounded-[2rem] border p-6 shadow-[0_20px_70px_rgba(16,32,52,0.08)]">
          {content.highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="border-border bg-background/70 rounded-3xl border p-5"
            >
              <p className="text-accent text-xs tracking-[0.3em] uppercase">
                {highlight.label}
              </p>
              <p className="text-muted mt-3 text-sm leading-7">
                {highlight.value}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

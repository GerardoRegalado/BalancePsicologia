import { Container } from "@/components/ui/container";
import type { FeatureSectionContent } from "@/types/content";

type CapabilityGridProps = {
  content: FeatureSectionContent;
};

export function CapabilityGrid({ content }: CapabilityGridProps) {
  return (
    <section id="structure" className="py-20">
      <Container className="space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-accent text-xs tracking-[0.35em] uppercase">
            {content.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {content.title}
          </h2>
          <p className="text-muted text-base leading-8">
            {content.description}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {content.items.map((item) => (
            <article
              key={item.title}
              className="border-border bg-surface/85 rounded-[1.75rem] border p-6 shadow-[0_16px_50px_rgba(16,32,52,0.06)]"
            >
              <p className="text-accent text-xs tracking-[0.3em] uppercase">
                {item.tag}
              </p>
              <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
              <p className="text-muted mt-4 text-sm leading-7">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

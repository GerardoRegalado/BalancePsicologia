import { LandingSectionShell } from "@/components/sections/landing-section-shell";
import { landingFaqContent, landingFaqItems } from "@/content/landing";

export function FaqSection() {
  return (
    <LandingSectionShell {...landingFaqContent}>
      <div className="grid gap-4">
        {landingFaqItems.map((item) => (
          <article
            key={item.title}
            className="rounded-lg border border-outline-variant/70 bg-surface-container-lowest p-6"
          >
            <h3 className="font-serif text-xl font-medium text-on-surface">
              {item.title}
            </h3>
            <p className="mt-3 leading-7 text-on-surface-variant">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </LandingSectionShell>
  );
}

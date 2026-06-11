import { LandingSectionShell } from "@/components/sections/landing-section-shell";
import { testimonialsSectionContent } from "@/content/testimonials";

export function TestimonialsSection() {
  const hasTestimonials = testimonialsSectionContent.items.length > 0;

  return (
    <LandingSectionShell
      id={testimonialsSectionContent.id}
      eyebrow={testimonialsSectionContent.eyebrow}
      title={testimonialsSectionContent.title}
      description={testimonialsSectionContent.description}
      className="bg-surface-container-low"
    >
      {hasTestimonials ? (
        <div className="grid gap-5 md:grid-cols-2">
          {testimonialsSectionContent.items.map((item) => (
            <article
              key={`${item.name}-${item.role}`}
              className="rounded-lg border border-outline-variant/60 bg-surface-container-lowest p-6 md:p-8"
            >
              <p className="text-base leading-8 text-on-surface-variant">
                “{item.quote}”
              </p>
              <div className="mt-6 border-t border-outline-variant/40 pt-4">
                <h3 className="text-sm font-bold text-on-surface">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs font-medium tracking-[0.12em] text-secondary uppercase">
                  {item.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-outline-variant bg-surface-container-lowest p-6 text-center md:p-12">
          <h3 className="font-serif text-xl font-medium text-on-surface md:text-2xl">
            {testimonialsSectionContent.emptyState.title}
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-on-surface-variant md:text-lg">
            {testimonialsSectionContent.emptyState.description}
          </p>
        </div>
      )}
    </LandingSectionShell>
  );
}

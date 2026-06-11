import { LandingSectionShell } from "@/components/sections/landing-section-shell";
import { faqSectionContent } from "@/content/faq";

export function FaqSection() {
  return (
    <LandingSectionShell
      id={faqSectionContent.id}
      eyebrow={faqSectionContent.eyebrow}
      title={faqSectionContent.title}
      description={faqSectionContent.description}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {faqSectionContent.items.map((item) => (
          <article
            key={item.question}
            className="rounded-lg border border-outline-variant/60 bg-surface-container-lowest p-5 md:p-8"
          >
            <h3 className="font-serif text-lg font-medium text-on-surface md:text-xl">
              {item.question}
            </h3>
            <p className="mt-3 leading-7 text-on-surface-variant">
              {item.answer}
            </p>
          </article>
        ))}
      </div>
    </LandingSectionShell>
  );
}

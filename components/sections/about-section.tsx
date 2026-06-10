import Image from "next/image";
import { LandingSectionShell } from "@/components/sections/landing-section-shell";
import { aboutSectionContent } from "@/content/about";

export function AboutSection() {
  return (
    <LandingSectionShell
      id={aboutSectionContent.id}
      eyebrow={aboutSectionContent.eyebrow}
      title={aboutSectionContent.title}
      description={aboutSectionContent.lead}
      className="bg-surface-container-low"
    >
      <div className="grid gap-12 md:grid-cols-[0.92fr_1.08fr] md:items-center lg:gap-16">
        <div className="grid grid-cols-2 gap-4 md:gap-5">
          {aboutSectionContent.images.map((image, index) => (
            <div
              key={image.src}
              className={
                index === 0
                  ? "relative mt-8 aspect-[3/4] overflow-hidden rounded-lg"
                  : "relative aspect-[3/4] overflow-hidden rounded-lg shadow-atmospheric-sm"
              }
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 22vw, 45vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="space-y-7">
          <p className="max-w-2xl text-base leading-8 text-on-surface-variant">
            {aboutSectionContent.body}
          </p>

          <div className="flex items-start gap-4 rounded-lg border border-primary/10 bg-surface-container-lowest p-4 shadow-atmospheric-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-container/15 text-primary">
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 20v-7m0 0C7.6 13 5 10.4 5 6c4.4 0 7 2.6 7 7Zm0 0c4.4 0 7-2.6 7-7-4.4 0-7 2.6-7 7Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-on-surface">
                {aboutSectionContent.callout.title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-on-surface-variant">
                {aboutSectionContent.callout.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </LandingSectionShell>
  );
}

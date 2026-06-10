import { comingSoonContent } from "@/content/coming-soon";

function BrandMark() {
  return (
    <svg
      aria-hidden="true"
      className="h-12 w-12 text-primary"
      fill="none"
      viewBox="0 0 48 48"
    >
      <path
        d="M24 39V22m0 0C13.6 22 8 16.4 8 8c10.4 0 16 5.6 16 14Zm0 0c10.4 0 16-5.6 16-14-10.4 0-16 5.6-16 14Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  );
}

export function ComingSoonSection() {
  return (
    <section className="relative flex min-h-[calc(100dvh-136px)] items-center justify-center overflow-hidden px-margin-mobile py-section-padding-lg text-center md:min-h-[calc(100dvh-104px)] md:px-gutter">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,var(--surface),var(--surface-container-low))] opacity-80" />

      <div className="animate-[fade-in-up_800ms_ease-out_forwards] mx-auto flex max-w-3xl flex-col items-center gap-stack-lg">
        <div className="flex flex-col items-center gap-stack-sm">
          <BrandMark />
          <p className="text-2xl font-medium text-primary">
            {comingSoonContent.brandName}
          </p>
        </div>

        <div className="flex max-w-2xl flex-col items-center gap-stack-md">
          <h1 className="max-w-3xl text-5xl leading-[1.12] font-semibold text-balance text-on-surface md:text-6xl">
            {comingSoonContent.title}
          </h1>
          <p className="max-w-xl text-lg leading-8 text-on-surface-variant">
            {comingSoonContent.description}
          </p>
        </div>

        <div className="my-stack-md h-px w-16 bg-outline-variant/60" />

        <p className="text-sm font-medium tracking-[0.18em] text-secondary">
          {comingSoonContent.location}
        </p>
      </div>
    </section>
  );
}

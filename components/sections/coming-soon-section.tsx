import { comingSoonContent } from "@/content/coming-soon";

function BrandMark() {
  return (
    <svg
      aria-hidden="true"
      className="h-12 w-12"
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
    <section className="relative flex flex-1 items-center justify-center overflow-hidden px-margin-mobile py-12 text-center md:px-gutter md:py-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,var(--surface),var(--surface-container-low))] opacity-80" />

      <div className="animate-[fade-in-up_800ms_ease-out_forwards] mx-auto flex max-w-3xl flex-col items-center gap-9 md:gap-10">
        <div
          className="flex flex-col items-center gap-3"
          style={{ color: "var(--primary)" }}
        >
          <BrandMark />
          <p className="text-2xl font-medium">{comingSoonContent.brandName}</p>
        </div>

        <div className="flex max-w-2xl flex-col items-center gap-5">
          <h1 className="max-w-3xl font-sans text-[2.5rem] leading-[1.14] font-semibold text-balance text-on-surface md:text-[3.25rem]">
            {comingSoonContent.title}
          </h1>
          <p className="max-w-xl text-lg leading-8 text-on-surface-variant">
            {comingSoonContent.description}
          </p>
        </div>

        <div className="h-px w-16 bg-outline-variant/60" />

        <p className="text-sm font-medium tracking-[0.18em] text-secondary">
          {comingSoonContent.location}
        </p>
      </div>
    </section>
  );
}

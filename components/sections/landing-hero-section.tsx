import Image from "next/image";
import { Container } from "@/components/ui/container";
import { heroContent } from "@/content/hero";
import type { ContentAction } from "@/types/content";

function HeroAction({ action }: { action: ContentAction }) {
  const className =
    action.variant === "primary"
      ? "inline-flex min-h-14 items-center justify-center rounded-md bg-primary px-8 py-4 text-sm font-semibold text-on-primary shadow-sm transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-primary-container focus-visible:ring-4 focus-visible:ring-primary/25 focus-visible:outline-none"
      : "inline-flex min-h-14 items-center justify-center gap-2 rounded-md border border-primary/20 bg-surface-container-lowest px-8 py-4 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-surface-container-low focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:outline-none";

  if (action.disabled) {
    return (
      <span
        aria-disabled="true"
        className={`${className} cursor-not-allowed opacity-70`}
      >
        <span
          aria-hidden="true"
          className="h-3.5 w-3.5 rounded-[0.2rem] border border-current"
        />
        {action.label}
      </span>
    );
  }

  return (
    <a
      href={action.href}
      className={className}
      target={action.external ? "_blank" : undefined}
      rel={action.external ? "noopener noreferrer" : undefined}
    >
      {action.variant === "secondary" ? (
        <span
          aria-hidden="true"
          className="h-3.5 w-3.5 rounded-[0.2rem] border border-current"
        />
      ) : null}
      <span className="md:hidden">{action.mobileLabel ?? action.label}</span>
      <span className="hidden md:inline">{action.label}</span>
    </a>
  );
}

export function LandingHeroSection() {
  return (
    <section id="hero" className="scroll-mt-32 pt-12 pb-20 md:pt-14 md:pb-28">
      <Container className="grid items-center gap-12 md:grid-cols-[1fr_0.95fr] lg:gap-16">
        <div className="mx-auto max-w-2xl space-y-8 text-center md:mx-0 md:text-left">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-secondary-container/60 bg-secondary-container/35 px-3 py-1.5 text-xs font-medium text-on-secondary-container">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-secondary"
              />
              {heroContent.eyebrow}
            </p>
            <h1 className="font-serif text-4xl leading-[1.08] font-semibold text-balance text-on-surface md:text-5xl">
              {heroContent.title}{" "}
              <span className="text-primary italic md:hidden">
                {heroContent.mobileTitleAccent ?? heroContent.titleAccent}
              </span>
              <span className="hidden text-primary italic md:inline">
                {heroContent.titleAccent}
              </span>
            </h1>
            <p className="mx-auto max-w-xl text-lg leading-8 text-on-surface-variant md:mx-0">
              {heroContent.description}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            {heroContent.actions.map((action) => (
              <HeroAction key={action.label} action={action} />
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md md:aspect-square md:max-w-none">
          <div className="absolute inset-0 rounded-xl bg-surface-container opacity-60 shadow-atmospheric md:-right-5 md:-bottom-5 md:left-5 md:top-5" />
          <Image
            src={heroContent.image.src}
            alt={heroContent.image.alt}
            fill
            priority
            sizes="(min-width: 768px) 48vw, calc(100vw - 40px)"
            className="relative rounded-xl object-cover shadow-atmospheric-sm"
          />
        </div>
      </Container>
    </section>
  );
}

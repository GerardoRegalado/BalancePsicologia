import Link from "next/link";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { heroContent } from "@/content/hero";

export function SiteHeader() {
  const primaryAction = heroContent.actions[0] ?? {
    label: "Solicitar cita",
    href: "#agenda",
    variant: "primary" as const,
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-surface/90 backdrop-blur-md">
      <Container className="relative flex min-h-16 items-center justify-between gap-gutter py-3 md:min-h-18 md:py-4">
        <div className="flex items-center justify-between gap-gutter">
          <Link
            href="/"
            className="font-serif text-xl leading-none font-medium text-primary transition-opacity hover:opacity-80 focus-visible:ring-4 focus-visible:ring-primary/25 focus-visible:outline-none md:text-2xl"
          >
            {siteConfig.defaultTitle}
          </Link>
        </div>

        <nav
          aria-label="Navegación pública"
          className="hidden items-center gap-8 text-sm text-on-surface-variant md:flex"
        >
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 transition-colors hover:text-primary focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:outline-none"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={primaryAction.href}
          className="hidden min-h-11 items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-container focus-visible:ring-4 focus-visible:ring-primary/25 focus-visible:outline-none md:inline-flex"
        >
          {primaryAction.label}
        </a>

        <MobileNavigation
          navigation={siteConfig.navigation}
          primaryAction={primaryAction}
        />
      </Container>
    </header>
  );
}

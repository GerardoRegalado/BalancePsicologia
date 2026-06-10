import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-outline-variant/55 bg-surface/90 backdrop-blur-md">
      <Container className="flex min-h-16 flex-col gap-3 py-3 md:min-h-18 md:flex-row md:items-center md:justify-between md:py-4">
        <div className="flex items-center justify-between gap-gutter">
          <Link
            href="/"
            className="font-serif text-xl leading-none font-medium text-primary transition-opacity hover:opacity-80 focus-visible:ring-4 focus-visible:ring-primary/25 focus-visible:outline-none"
          >
            {siteConfig.defaultTitle}
          </Link>
        </div>

        <nav
          aria-label="Navegacion publica"
          className="-mx-margin-mobile flex gap-5 overflow-x-auto px-margin-mobile pb-1 text-sm text-on-surface-variant md:mx-0 md:flex-wrap md:items-center md:justify-end md:gap-6 md:overflow-visible md:px-0 md:pb-0"
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
      </Container>
    </header>
  );
}

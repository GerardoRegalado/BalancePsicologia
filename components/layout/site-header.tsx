import type { Route } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { brandConfig } from "@/config/brand";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="border-outline-variant bg-surface/90 sticky top-0 z-20 border-b backdrop-blur">
      <Container className="flex h-18 items-center justify-between gap-gutter">
        <div>
          <p className="text-secondary text-xs font-semibold tracking-[0.2em] uppercase">
            {brandConfig.shortName}
          </p>
          <Link href="/" className="font-serif text-lg font-medium text-primary">
            {brandConfig.name}
          </Link>
        </div>

        <nav className="text-on-surface-variant hidden items-center gap-gutter text-sm md:flex">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href as Route}>
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}

"use client";

import { useState } from "react";
import type { NavigationItem } from "@/config/site";
import type { ContentAction } from "@/types/content";

type MobileNavigationProps = {
  navigation: readonly NavigationItem[];
  primaryAction: ContentAction;
};

export function MobileNavigation({
  navigation,
  primaryAction,
}: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const links = [{ label: "Inicio", href: "#hero" }, ...navigation];

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-primary transition-colors hover:bg-surface-container focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:outline-none"
      >
        <span className="sr-only">{isOpen ? "Cerrar menú" : "Abrir menú"}</span>
        <span aria-hidden="true" className="grid gap-1.5">
          <span className="block h-0.5 w-5 rounded-full bg-current" />
          <span className="block h-0.5 w-5 rounded-full bg-current" />
          <span className="block h-0.5 w-5 rounded-full bg-current" />
        </span>
      </button>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-t border-outline-variant/55 bg-surface px-margin-mobile py-6 shadow-atmospheric-sm"
        >
          <nav aria-label="Navegación móvil" className="flex flex-col gap-4">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-md px-2 py-2 font-serif text-2xl font-medium text-on-surface-variant transition-colors hover:text-primary focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:outline-none"
              >
                {item.label}
              </a>
            ))}
            <a
              href={primaryAction.href}
              onClick={closeMenu}
              className="mt-4 inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-container focus-visible:ring-4 focus-visible:ring-primary/25 focus-visible:outline-none"
            >
              {primaryAction.mobileLabel ?? primaryAction.label}
            </a>
          </nav>
        </div>
      ) : null}
    </div>
  );
}

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

describe("appointment flow component", () => {
  it("does not render inactive form controls", () => {
    const component = readFileSync(
      join(process.cwd(), "components/sections/appointment-section.tsx"),
      "utf8",
    );

    expect(component).not.toContain("<input");
    expect(component).not.toContain("<select");
    expect(component).not.toContain("<textarea");
    expect(component).not.toContain("disabled");
    expect(component).not.toContain('type="submit"');
  });

  it("keeps header and mobile navigation wired to the external primary action", () => {
    const header = readFileSync(
      join(process.cwd(), "components/layout/site-header.tsx"),
      "utf8",
    );
    const mobileNavigation = readFileSync(
      join(process.cwd(), "components/layout/mobile-navigation.tsx"),
      "utf8",
    );

    expect(header).toContain("href={primaryAction.href}");
    expect(header).toContain('target={primaryAction.external ? "_blank" : undefined}');
    expect(header).toContain(
      'rel={primaryAction.external ? "noopener noreferrer" : undefined}',
    );

    expect(mobileNavigation).toContain("href={primaryAction.href}");
    expect(mobileNavigation).toContain(
      'target={primaryAction.external ? "_blank" : undefined}',
    );
    expect(mobileNavigation).toContain(
      'rel={primaryAction.external ? "noopener noreferrer" : undefined}',
    );
    expect(mobileNavigation).toContain("onClick={closeMenu}");
  });
});

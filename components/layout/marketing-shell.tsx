import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";

type MarketingShellProps = {
  children: ReactNode;
};

export function MarketingShell({ children }: MarketingShellProps) {
  return (
    <div className="flex min-h-dvh flex-col bg-surface text-on-surface">
      <main className="flex flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

import type { ReactNode } from "react";
import { MarketingShell } from "@/components/layout/marketing-shell";

type MarketingLayoutProps = {
  children: ReactNode;
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return <MarketingShell>{children}</MarketingShell>;
}

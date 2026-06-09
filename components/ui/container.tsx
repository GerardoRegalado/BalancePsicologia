import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

export function Container({
  as: Component = "div",
  children,
  className,
}: ContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full max-w-6xl px-6 lg:px-8", className)}
    >
      {children}
    </Component>
  );
}

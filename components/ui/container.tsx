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
      className={cn(
        "max-w-container-max px-margin-mobile md:px-gutter mx-auto w-full",
        className,
      )}
    >
      {children}
    </Component>
  );
}

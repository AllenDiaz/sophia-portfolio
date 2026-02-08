import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article";
  variant?: "narrow" | "default" | "wide" | "full";
}

const SectionContainer = React.forwardRef<HTMLElement, SectionContainerProps>(
  ({ className, as: Component = "section", variant = "default", children, ...props }, ref) => {
    const maxWidths = {
      narrow: "max-w-3xl",
      default: "max-w-7xl",
      wide: "max-w-[90rem]",
      full: "max-w-full",
    };

    return (
      <Component
        ref={ref as any}
        className={cn(
          "mx-auto w-full px-4 py-12 md:px-6 md:py-16 lg:py-20",
          maxWidths[variant],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

SectionContainer.displayName = "SectionContainer";

export { SectionContainer };

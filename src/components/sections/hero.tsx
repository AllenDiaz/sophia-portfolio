import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/layout/section-container";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  variant?: "center" | "left";
  className?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  variant = "center",
  className,
}: HeroProps) {
  return (
    <SectionContainer
      className={cn(
        "py-20 md:py-24 lg:py-32",
        variant === "center" && "text-center",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto flex flex-col gap-6",
          variant === "center" ? "items-center max-w-4xl" : "items-start max-w-3xl"
        )}
      >
        {subtitle && (
          <p className="text-base font-medium text-[hsl(var(--primary))] md:text-lg">
            {subtitle}
          </p>
        )}
        
        <h1 className="text-4xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        
        {description && (
          <p className="max-w-2xl text-lg text-[hsl(var(--muted-foreground))] md:text-xl">
            {description}
          </p>
        )}
        
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
            {primaryCTA && (
              <Link href={primaryCTA.href}>
                <Button size="lg" className="group">
                  {primaryCTA.text}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            )}
            {secondaryCTA && (
              <Link href={secondaryCTA.href}>
                <Button variant="outline" size="lg">
                  {secondaryCTA.text}
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </SectionContainer>
  );
}

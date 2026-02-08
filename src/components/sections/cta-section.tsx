import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/layout/section-container";

interface CTASectionProps {
  title: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "default" | "gradient";
}

export function CTASection({
  title,
  description,
  buttonText = "Get Started",
  buttonHref = "/contact",
  variant = "gradient",
}: CTASectionProps) {
  return (
    <SectionContainer
      className={
        variant === "gradient"
          ? "bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))]"
          : "bg-[hsl(var(--muted))]"
      }
    >
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <h2
          className={
            variant === "gradient"
              ? "text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
              : "text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-4xl md:text-5xl"
          }
        >
          {title}
        </h2>
        
        {description && (
          <p
            className={
              variant === "gradient"
                ? "text-lg text-white/90 md:text-xl"
                : "text-lg text-[hsl(var(--muted-foreground))] md:text-xl"
            }
          >
            {description}
          </p>
        )}
        
        <div className="pt-4">
          <Link href={buttonHref}>
            <Button
              size="lg"
              variant={variant === "gradient" ? "accent" : "primary"}
              className="group"
            >
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}

import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";

interface AboutSectionProps {
  className?: string;
}

export function AboutSection({ className }: AboutSectionProps) {
  const { about } = siteConfig;

  return (
    <SectionContainer className={className} variant="default">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <Badge variant="secondary" className="text-sm">
                {about.subheading}
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-4xl md:text-5xl">
                {about.heading}
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
              {about.intro}
            </p>

            <p className="text-base leading-relaxed text-[hsl(var(--muted-foreground))]">
              {about.story}
            </p>
          </div>

          {/* Right Column - Highlights */}
          <div className="flex items-center">
            <div className="w-full space-y-6 rounded-2xl border-2 border-[hsl(var(--border))] bg-[hsl(var(--card))] p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">
                Professional Qualifications
              </h3>
              
              <ul className="space-y-4">
                {about.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--primary))]" />
                    <span className="text-base leading-relaxed text-[hsl(var(--foreground))]">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-lg bg-[hsl(var(--secondary))]/10 p-4">
                <p className="text-sm font-medium text-[hsl(var(--secondary))]">
                  Ready to transform your practice?
                </p>
                <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
                  Let's discuss how I can support your specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

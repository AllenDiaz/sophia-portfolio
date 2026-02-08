import * as React from "react";
import { GraduationCap, Puzzle, Clock, Heart, LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionContainer } from "@/components/layout/section-container";
import { siteConfig } from "@/config/site";

const iconMap: Record<string, LucideIcon> = {
  "graduation-cap": GraduationCap,
  puzzle: Puzzle,
  clock: Clock,
  heart: Heart,
};

interface WhyChooseSectionProps {
  title?: string;
  description?: string;
  className?: string;
}

export function WhyChooseSection({
  title = "Why Choose Dr. Sophia Gonzales?",
  description = "More than a virtual assistant—a dedicated partner in your practice's success",
  className,
}: WhyChooseSectionProps) {
  return (
    <SectionContainer className={className} variant="default">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto max-w-2xl text-lg text-[hsl(var(--muted-foreground))]">
              {description}
            </p>
          )}
        </div>

        {/* Why Choose Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {siteConfig.whyChoose.map((reason, index) => {
            const Icon = iconMap[reason.icon] || Heart;
            
            return (
              <Card 
                key={reason.title} 
                variant="elevated"
                className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] shadow-md transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{reason.title}</CardTitle>
                  <CardDescription className="text-base pt-2 leading-relaxed">
                    {reason.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto max-w-3xl rounded-2xl border-2 border-[hsl(var(--primary))]/20 bg-[hsl(var(--primary))]/5 p-8 text-center">
          <p className="text-lg font-medium text-[hsl(var(--foreground))]">
            Join the growing number of optometry practices that trust me with their administrative needs.
          </p>
          <p className="mt-2 text-base text-[hsl(var(--muted-foreground))]">
            Let's build a partnership that elevates your practice.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}

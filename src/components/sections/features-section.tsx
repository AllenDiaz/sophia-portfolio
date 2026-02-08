import * as React from "react";
import { Eye, Lock, Sliders, TrendingDown, LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionContainer } from "@/components/layout/section-container";
import { siteConfig } from "@/config/site";

const iconMap: Record<string, LucideIcon> = {
  eye: Eye,
  lock: Lock,
  sliders: Sliders,
  "trending-down": TrendingDown,
};

interface FeaturesSectionProps {
  title?: string;
  description?: string;
}

export function FeaturesSection({
  title = "Why Partner With Me?",
  description = "Specialized expertise and dedicated support for your optometry practice",
}: FeaturesSectionProps) {
  return (
    <SectionContainer>
      <div className="mx-auto max-w-5xl space-y-12">
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

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {siteConfig.features.map((feature) => {
            const Icon = iconMap[feature.icon] || Eye;
            
            return (
              <Card key={feature.title} variant="outlined" className="border-2">
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[hsl(var(--secondary))]/10">
                    <Icon className="h-7 w-7 text-[hsl(var(--secondary))]" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base pt-2">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}

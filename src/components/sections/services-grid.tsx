import * as React from "react";
import Link from "next/link";
import {
  Calendar,
  ShieldCheck,
  FileText,
  MessageCircle,
  Receipt,
  Briefcase,
  LucideIcon,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { SectionContainer } from "@/components/layout/section-container";
import { siteConfig } from "@/config/site";

const iconMap: Record<string, LucideIcon> = {
  calendar: Calendar,
  "shield-check": ShieldCheck,
  "file-text": FileText,
  "message-circle": MessageCircle,
  receipt: Receipt,
  briefcase: Briefcase,
};

interface ServicesGridProps {
  title?: string;
  description?: string;
  showCTA?: boolean;
}

export function ServicesGrid({
  title = "Services I Provide",
  description = "Comprehensive virtual assistant support tailored for optometry practices",
  showCTA = true,
}: ServicesGridProps) {
  return (
    <SectionContainer className="bg-[hsl(var(--muted))]">
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

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service) => {
            const Icon = iconMap[service.icon] || Briefcase;
            
            return (
              <Card key={service.id} variant="elevated" className="group hover:border-[hsl(var(--primary))] transition-colors">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(var(--primary))]/10">
                    <Icon className="h-6 w-6 text-[hsl(var(--primary))]" />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        {showCTA && (
          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center text-base font-medium text-[hsl(var(--primary))] transition-colors hover:underline"
            >
              View All Services Details
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </SectionContainer>
  );
}

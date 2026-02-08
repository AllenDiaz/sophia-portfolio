"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/layout/section-container";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface TestimonialsCarouselProps {
  title?: string;
  description?: string;
  className?: string;
}

export function TestimonialsCarousel({
  title = "What Optometrists Are Saying",
  description = "Trusted by optometry professionals across the country",
  className,
}: TestimonialsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 6000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = React.useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <SectionContainer className={cn("bg-[hsl(var(--muted))]/30", className)} variant="default">
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

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {siteConfig.testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-0 flex-[0_0_100%] pl-4 md:flex-[0_0_90%] lg:flex-[0_0_80%]"
                >
                  <Card variant="elevated" className="mx-auto h-full max-w-4xl">
                    <CardContent className="p-8 md:p-10 lg:p-12">
                      <div className="space-y-6">
                        {/* Quote Icon */}
                        <div className="flex justify-center">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--primary))]/10">
                            <Quote className="h-6 w-6 text-[hsl(var(--primary))]" />
                          </div>
                        </div>

                        {/* Testimonial Content */}
                        <blockquote className="text-center">
                          <p className="text-lg leading-relaxed text-[hsl(var(--foreground))] md:text-xl">
                            "{testimonial.content}"
                          </p>
                        </blockquote>

                        {/* Author Info */}
                        <div className="border-t border-[hsl(var(--border))] pt-6 text-center">
                          <p className="font-semibold text-[hsl(var(--foreground))]">
                            {testimonial.author}
                          </p>
                          <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
                            {testimonial.role}
                          </p>
                          <p className="mt-0.5 text-sm text-[hsl(var(--muted-foreground))]">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="h-10 w-10 rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all hover:scale-110 disabled:opacity-0"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="h-10 w-10 rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all hover:scale-110 disabled:opacity-0"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="mt-8 flex justify-center gap-2">
            {siteConfig.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === selectedIndex
                    ? "w-8 bg-[hsl(var(--primary))]"
                    : "w-2 bg-[hsl(var(--muted-foreground))]/30 hover:bg-[hsl(var(--muted-foreground))]/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

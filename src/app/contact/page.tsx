import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Hero } from "@/components/sections/hero";
import { ContactForm } from "@/components/sections/contact-form";
import { SectionContainer } from "@/components/layout/section-container";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { Mail, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | " + siteConfig.name,
  description: "Get in touch to discuss how professional virtual assistant services can streamline your optometry practice with expert support.",
};

export default function ContactPage() {
  return (
    <PageLayout>
      <Hero
        title="Let's Connect"
        description="Ready to enhance your optometry practice with professional virtual assistant support from a licensed optometrist? I'd love to discuss how I can help."
        variant="center"
      />

      <div className="grid gap-0 lg:grid-cols-5">
        {/* Contact Form - Takes up 3 columns */}
        <div className="lg:col-span-3">
          <ContactForm />
        </div>

        {/* Contact Info Sidebar - Takes up 2 columns */}
        <div className="bg-[hsl(var(--muted))] lg:col-span-2">
          <SectionContainer variant="full" className="h-full">
            <div className="space-y-8">
              {/* Contact Information */}
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[hsl(var(--primary))]/10">
                        <Mail className="h-5 w-5 text-[hsl(var(--primary))]" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-[hsl(var(--foreground))]">Email</p>
                        <a
                          href={`mailto:${siteConfig.contact.email}`}
                          className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                        >
                          {siteConfig.contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[hsl(var(--secondary))]/10">
                        <Phone className="h-5 w-5 text-[hsl(var(--secondary))]" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-[hsl(var(--foreground))]">Phone</p>
                        <a
                          href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                          className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                        >
                          {siteConfig.contact.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[hsl(var(--primary))]/10">
                        <Clock className="h-5 w-5 text-[hsl(var(--primary))]" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-[hsl(var(--foreground))]">
                          Business Hours
                        </p>
                        <p className="text-sm text-[hsl(var(--muted-foreground))]">
                          {siteConfig.contact.hours}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle className="text-xl">Response Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    I typically respond to all inquiries within 24 hours during business days. 
                    For urgent matters, please call directly.
                  </p>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle className="text-xl">Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <a
                      href="/services"
                      className="block text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                    >
                      → View All Services
                    </a>
                    <a
                      href="/about"
                      className="block text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                    >
                      → Learn About Me
                    </a>
                    <a
                      href="/"
                      className="block text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                    >
                      → Back to Home
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </SectionContainer>
        </div>
      </div>
    </PageLayout>
  );
}

import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Hero } from "@/components/sections/hero";
import { SectionContainer } from "@/components/layout/section-container";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/sections/cta-section";
import { siteConfig } from "@/config/site";
import { Calendar, ShieldCheck, FileText, MessageCircle, Receipt, Briefcase, LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | " + siteConfig.name,
  description: "Comprehensive virtual assistant services for optometry practices including scheduling, insurance verification, records management, and more.",
};

const iconMap: Record<string, LucideIcon> = {
  calendar: Calendar,
  "shield-check": ShieldCheck,
  "file-text": FileText,
  "message-circle": MessageCircle,
  receipt: Receipt,
  briefcase: Briefcase,
};

export default function ServicesPage() {
  return (
    <PageLayout>
      <Hero
        title="Virtual Assistant Services"
        description="Specialized support tailored for optometry practices. From patient scheduling to billing support, I handle the administrative details so you can focus on what matters most—patient care."
        variant="center"
      />

      <SectionContainer variant="narrow">
        <div className="space-y-12">
          {siteConfig.services.map((service, index) => {
            const Icon = iconMap[service.icon] || Briefcase;
            const isEven = index % 2 === 0;

            return (
              <Card key={service.id} variant="elevated">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg ${isEven ? 'bg-[hsl(var(--primary))]/10' : 'bg-[hsl(var(--secondary))]/10'}`}>
                      <Icon className={`h-7 w-7 ${isEven ? 'text-[hsl(var(--primary))]' : 'text-[hsl(var(--secondary))]'}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{service.name}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[hsl(var(--foreground))]">What I Can Do:</h4>
                    <ul className="space-y-2 text-[hsl(var(--muted-foreground))]">
                      {service.id === 'patient-scheduling' && (
                        <>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--primary))]" />
                            <span>Appointment calendar management and optimization</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--primary))]" />
                            <span>Patient appointment reminders and confirmations</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--primary))]" />
                            <span>Schedule coordination and conflict resolution</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--primary))]" />
                            <span>No-show tracking and follow-up</span>
                          </li>
                        </>
                      )}
                      {service.id === 'insurance-verification' && (
                        <>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--secondary))]" />
                            <span>Pre-visit insurance eligibility verification</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--secondary))]" />
                            <span>Benefits breakdown and coverage details</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--secondary))]" />
                            <span>Authorization requests and tracking</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--secondary))]" />
                            <span>Patient communication about coverage</span>
                          </li>
                        </>
                      )}
                      {service.id === 'records-management' && (
                        <>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--primary))]" />
                            <span>Electronic health records organization</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--primary))]" />
                            <span>Medical records requests and transfers</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--primary))]" />
                            <span>HIPAA-compliant document handling</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--primary))]" />
                            <span>Records retention and archiving</span>
                          </li>
                        </>
                      )}
                      {service.id === 'patient-communication' && (
                        <>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--secondary))]" />
                            <span>Professional phone and email correspondence</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--secondary))]" />
                            <span>Patient inquiry responses and follow-ups</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--secondary))]" />
                            <span>Appointment reminders and confirmations</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--secondary))]" />
                            <span>Test results communication coordination</span>
                          </li>
                        </>
                      )}
                      {service.id === 'billing-support' && (
                        <>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--primary))]" />
                            <span>Insurance claims preparation and submission</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--primary))]" />
                            <span>Payment posting and reconciliation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--primary))]" />
                            <span>Claims follow-up and denial management</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--primary))]" />
                            <span>Patient billing inquiries</span>
                          </li>
                        </>
                      )}
                      {service.id === 'practice-support' && (
                        <>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--secondary))]" />
                            <span>General administrative task management</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--secondary))]" />
                            <span>Vendor coordination and supply ordering</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--secondary))]" />
                            <span>Data entry and database maintenance</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--secondary))]" />
                            <span>Custom project support as needed</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </SectionContainer>

      <CTASection
        title="Don't see what you need?"
        description="I offer customized virtual assistant packages tailored to your practice's unique needs. Let's discuss how I can help."
        buttonText="Contact Me"
        buttonHref="/contact"
        variant="default"
      />
    </PageLayout>
  );
}

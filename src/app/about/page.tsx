import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Hero } from "@/components/sections/hero";
import { SectionContainer } from "@/components/layout/section-container";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CTASection } from "@/components/sections/cta-section";
import { siteConfig } from "@/config/site";
import { GraduationCap, Award, Clock, Shield, MessageSquare, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About | " + siteConfig.name,
  description: "Learn about Dr. Sophia Gonzales - Professional virtual assistant with specialized expertise in optometry practice management.",
};

export default function AboutPage() {
  return (
    <PageLayout>
      <Hero
        title="About Me"
        description="Dedicated to helping optometry practices thrive through professional virtual assistant services"
        variant="center"
      />

      {/* Bio Section */}
      <SectionContainer variant="narrow">
        <div className="space-y-6 text-lg text-[hsl(var(--muted-foreground))]">
          <p>
            Hello! I'm <strong className="font-semibold text-[hsl(var(--foreground))]">
            Dr. Sophia Gonzales</strong>, a professional virtual assistant specializing in optometry 
            practice management. With years of experience in healthcare administration and a deep 
            understanding of optometry practice workflows, I provide comprehensive administrative 
            support that allows practitioners to focus on what they do best—caring for patients.
          </p>
          <p>
            My background in optometry and business management gives me unique insight into the 
            specific challenges optometry practices face. From patient scheduling and insurance 
            verification to records management and billing support, I understand the intricacies 
            of eye care practice operations.
          </p>
          <p>
            I'm passionate about efficiency, accuracy, and confidentiality. My goal is to become 
            an extension of your practice—handling administrative tasks with the same care and 
            professionalism you provide to your patients.
          </p>
        </div>
      </SectionContainer>

      {/* Qualifications */}
      <SectionContainer className="bg-[hsl(var(--muted))]">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-4xl">
              Qualifications & Experience
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[hsl(var(--muted-foreground))]">
              Bringing specialized knowledge and professional certifications to support your practice
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <Card variant="elevated">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[hsl(var(--primary))]/10">
                  <GraduationCap className="h-7 w-7 text-[hsl(var(--primary))]" />
                </div>
                <CardTitle className="text-xl">Education</CardTitle>
                <CardDescription className="text-base pt-2">
                  <ul className="space-y-2">
                    <li>• Optometry Studies</li>
                    <li>• Business Administration</li>
                    <li>• Healthcare Management</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[hsl(var(--secondary))]/10">
                  <Award className="h-7 w-7 text-[hsl(var(--secondary))]" />
                </div>
                <CardTitle className="text-xl">Certifications</CardTitle>
                <CardDescription className="text-base pt-2">
                  <ul className="space-y-2">
                    <li>• HIPAA Compliance Certified</li>
                    <li>• Virtual Assistant Certified</li>
                    <li>• Practice Management</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[hsl(var(--primary))]/10">
                  <Clock className="h-7 w-7 text-[hsl(var(--primary))]" />
                </div>
                <CardTitle className="text-xl">Experience</CardTitle>
                <CardDescription className="text-base pt-2">
                  <ul className="space-y-2">
                    <li>• 5+ years in optometry</li>
                    <li>• 3+ years as VA</li>
                    <li>• Multiple practice types</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </SectionContainer>

      {/* Work Philosophy */}
      <SectionContainer>
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-4xl">
              How I Work
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[hsl(var(--muted-foreground))]">
              My approach to virtual assistant services
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(var(--secondary))]/10">
                <MessageSquare className="h-6 w-6 text-[hsl(var(--secondary))]" />
              </div>
              <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">
                Clear Communication
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Regular updates, prompt responses, and transparent collaboration. I keep you informed 
                every step of the way and ensure smooth coordination with your practice.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(var(--primary))]/10">
                <Shield className="h-6 w-6 text-[hsl(var(--primary))]" />
              </div>
              <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">
                Strict Confidentiality
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                HIPAA-compliant practices and unwavering commitment to patient privacy. Your practice 
                data and patient information are handled with the highest level of security.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(var(--secondary))]/10">
                <Heart className="h-6 w-6 text-[hsl(var(--secondary))]" />
              </div>
              <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">
                Dedicated Support
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                I treat your practice as my own. Reliable, detail-oriented, and committed to helping 
                your practice run smoothly while you focus on exceptional patient care.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      <CTASection
        title="Let's Work Together"
        description="Ready to enhance your practice with professional virtual assistant support? I'd love to discuss how I can help."
        buttonText="Schedule Consultation"
        buttonHref="/contact"
      />
    </PageLayout>
  );
}

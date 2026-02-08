import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Hero } from "@/components/sections/hero";
import { SectionContainer } from "@/components/layout/section-container";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CTASection } from "@/components/sections/cta-section";
import { siteConfig } from "@/config/site";
import { GraduationCap, Award, Clock, Shield, MessageSquare, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About | " + siteConfig.name,
  description: "Learn about Dr. Sophia Joy Gonzales - Licensed Optometrist offering virtual assistant services with clinical expertise and practice management skills.",
};

export default function AboutPage() {
  return (
    <PageLayout>
      <Hero
        title="About Me"
        description="Licensed Optometrist providing professional virtual assistant services to help optometry practices thrive"
        variant="center"
      />

      {/* Bio Section */}
      <SectionContainer variant="default">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left Column - Profile Image */}
            <div className="lg:col-span-2">
              <div className="relative aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/profile_picture.jpg"
                  alt="Dr. Sophia Joy Gonzales"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right Column - Bio Text */}
            <div className="lg:col-span-3 space-y-6 text-lg text-[hsl(var(--muted-foreground))]">
              <p>
                Hello! I'm <strong className="font-semibold text-[hsl(var(--foreground))]">
                Dr. Sophia Joy Gonzales</strong>, a Licensed Optometrist offering professional virtual 
                assistant services for optometry practices. With a Doctor of Optometry degree from Manila 
                Central University and 2+ years of clinical experience at Executive Optical, I bring both 
                clinical expertise and administrative proficiency to support your practice operations.
              </p>
              <p>
                My unique background combines hands-on optometry experience with practice management skills 
                gained from working at top institutions including Chinese General Hospital, Vision Science 
                Institute, and Resources for the Blind, Inc. I also served in administrative roles including 
                bookkeeping assistance and student guidance, giving me comprehensive insight into efficient 
                practice operations and patient care coordination.
              </p>
              <p>
                I understand the language of optometry—from optical terminology to insurance coding, from 
                patient education to practice workflows. Let me handle your administrative tasks with the 
                same precision and care that you provide to your patients, so you can focus on what you 
                do best: delivering excellent eye care.
              </p>
            </div>
          </div>
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
                    <li>• <strong>Doctor of Optometry</strong></li>
                    <li>• Manila Central University</li>
                    <li>• 2018-2024</li>
                    <li>• FDT Scholar (2018-2022)</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[hsl(var(--secondary))]/10">
                  <Award className="h-7 w-7 text-[hsl(var(--secondary))]" />
                </div>
                <CardTitle className="text-xl">Achievements</CardTitle>
                <CardDescription className="text-base pt-2">
                  <ul className="space-y-2">
                    <li>• Special Merit Award (2024)</li>
                    <li>• Licensed Optometrist</li>
                    <li>• MCU Scholars Org Officer</li>
                    <li>• SVOSH Officer (2023-24)</li>
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
                    <li>• Executive Optical (2+ yrs)</li>
                    <li>• Vision Science Institute</li>
                    <li>• Chinese General Hospital</li>
                    <li>• Resources for the Blind</li>
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
              My Approach to Virtual Assistance
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[hsl(var(--muted-foreground))]">
              How I deliver exceptional support for your practice
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
                Professional correspondence with patients and vendors, representing your practice with 
                the same care and expertise you provide. I understand optometry terminology and can 
                communicate complex concepts clearly.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(var(--primary))]/10">
                <Shield className="h-6 w-6 text-[hsl(var(--primary))]" />
              </div>
              <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">
                Clinical Understanding
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Unlike general virtual assistants, I bring real optometry knowledge to your practice. 
                From insurance coding to patient scheduling, I understand the unique workflows and 
                requirements of eye care practices.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(var(--secondary))]/10">
                <Heart className="h-6 w-6 text-[hsl(var(--secondary))]" />
              </div>
              <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">
                Reliable Support
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Dedicated, detail-oriented, and committed to helping your practice run smoothly. 
                I treat your practice operations with the same professionalism and attention to 
                detail that I bring to clinical work.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      <CTASection
        title="Let's Work Together"
        description="Ready to enhance your practice with professional virtual assistant support backed by optometry expertise? I'd love to discuss how I can help."
        buttonText="Get Started"
        buttonHref="/contact"
      />
    </PageLayout>
  );
}

import { PageLayout } from "@/components/layout/page-layout";
import { Hero } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { CTASection } from "@/components/sections/cta-section";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <PageLayout>
      {/* 1. Hero Section with CTA */}
      <Hero
        subtitle={siteConfig.tagline}
        title="Licensed Optometrist Specializing in Virtual Practice Support"
        description="Leverage my clinical expertise and administrative skills to streamline your optometry practice. Professional virtual assistant services combining optometry knowledge with efficient practice management—all while maintaining HIPAA compliance and protecting patient privacy."
        primaryCTA={{
          text: "Get Started",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "View Services",
          href: "/services",
        }}
        variant="center"
      />

      {/* 2. About/Introduction Section */}
      <AboutSection />

      {/* 3. Services Overview (Cards) */}
      <ServicesGrid />

      {/* 4. Why Choose Sophia Section */}
      <WhyChooseSection />

      {/* 5. Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* 6. CTA Section */}
      <CTASection
        title="Ready to streamline your practice?"
        description="Let's discuss how my optometry expertise can support your practice with professional virtual assistant services."
        buttonText="Get Started Today"
        buttonHref="/contact"
      />
    </PageLayout>
  );
}


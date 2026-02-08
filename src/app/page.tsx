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
        title="Professional Virtual Optometry Assistant Services"
        description="Specialized administrative support tailored for optometry practices. Let me handle the details so you can focus on patient care."
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
        description="Let's discuss how I can support your optometry practice with professional virtual assistant services."
        buttonText="Get Started Today"
        buttonHref="/contact"
      />
    </PageLayout>
  );
}


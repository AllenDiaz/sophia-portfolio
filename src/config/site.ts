/**
 * Site Configuration
 * Central configuration for Dr. Sophia Gonzales VA Optometry
 */

export const siteConfig = {
  name: "Dr. Sophia Gonzales",
  title: "Dr. Sophia Gonzales | Virtual Optometry Assistant Services",
  description: "Professional virtual assistant services specializing in optometry practice management, patient care coordination, and administrative support.",
  tagline: "Your Vision, My Mission",
  
  // Contact information
  contact: {
    email: "sophia@example.com",
    phone: "(555) 123-4567",
    hours: "Monday - Friday: 9:00 AM - 5:00 PM PST",
  },
  
  // Social links (optional)
  social: {
    linkedin: "",
    twitter: "",
  },
  
  // Services offered
  services: [
    {
      id: 'patient-scheduling',
      name: 'Patient Scheduling',
      description: 'Efficient appointment management and calendar coordination',
      icon: 'calendar',
    },
    {
      id: 'insurance-verification',
      name: 'Insurance Verification',
      description: 'Thorough insurance and benefits verification',
      icon: 'shield-check',
    },
    {
      id: 'records-management',
      name: 'Records Management',
      description: 'Secure and organized patient records administration',
      icon: 'file-text',
    },
    {
      id: 'patient-communication',
      name: 'Patient Communication',
      description: 'Professional phone and email correspondence',
      icon: 'message-circle',
    },
    {
      id: 'billing-support',
      name: 'Billing Support',
      description: 'Accurate billing and claims processing assistance',
      icon: 'receipt',
    },
    {
      id: 'practice-support',
      name: 'General Practice Support',
      description: 'Comprehensive administrative support for your practice',
      icon: 'briefcase',
    },
  ],
  
  // Navigation
  navigation: {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Services', href: '/services' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
    cta: { name: 'Get Started', href: '/contact' },
  },
  
  // Features/benefits
  features: [
    {
      title: 'Optometry Expertise',
      description: 'Specialized knowledge in optometry practice workflows and terminology',
      icon: 'eye',
    },
    {
      title: 'HIPAA Compliant',
      description: 'Strict adherence to healthcare privacy and security standards',
      icon: 'lock',
    },
    {
      title: 'Flexible Support',
      description: 'Customized virtual assistance tailored to your practice needs',
      icon: 'sliders',
    },
    {
      title: 'Cost Effective',
      description: 'Reduce overhead while maintaining high-quality administrative support',
      icon: 'trending-down',
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

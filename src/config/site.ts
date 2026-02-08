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
    email: "sjgonzales.opto@gmail.com",
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

  // About content
  about: {
    heading: 'About Dr. Sophia Gonzales',
    subheading: 'Your Dedicated Virtual Optometry Assistant',
    intro: "With over a decade of experience in healthcare administration and a specialized focus on optometry practices, I understand the unique challenges you face daily. My mission is to provide seamless, professional support that allows you to focus on what matters most—your patients.",
    highlights: [
      'Certified in Healthcare Administration',
      'HIPAA Privacy & Security Specialist',
      '10+ Years in Medical Office Management',
      'Specialized Optometry Practice Training',
    ],
    story: "After years of working in various healthcare settings, I discovered my passion for supporting optometry practices. I've seen firsthand how administrative burdens can detract from patient care. That's why I've dedicated myself to providing virtual assistance that's not just efficient, but truly understands the nuances of optometry practice management.",
  },

  // Why choose Sophia - more personal than features
  whyChoose: [
    {
      title: 'Optometry-Specific Expertise',
      description: "I don't just understand general healthcare—I specialize in optometry. From insurance coding to optical terminology, I speak your language.",
      icon: 'graduation-cap',
    },
    {
      title: 'Seamless Integration',
      description: 'I adapt to your existing systems and workflows. Whether you use Practice Management software or prefer traditional methods, I meet you where you are.',
      icon: 'puzzle',
    },
    {
      title: 'Reliable & Responsive',
      description: "When you need support, I'm just a message away. Fast response times and consistent availability you can count on during business hours.",
      icon: 'clock',
    },
    {
      title: 'Patient-Centered Approach',
      description: 'Every interaction reflects your practice values. I represent your brand with professionalism and empathy in every patient communication.',
      icon: 'heart',
    },
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      content: "Sophia has been a game-changer for our practice. Her attention to detail and understanding of optometry workflows freed up so much of my time. I can finally focus on patient care without worrying about administrative chaos.",
      author: "Dr. Michael Chen",
      role: "Optometrist, Vision Care Center",
      location: "Seattle, WA",
    },
    {
      id: 2,
      content: "Working with Sophia feels like having an in-office assistant who truly understands optometry—but without the overhead costs. Her insurance verification process is flawless, saving us countless hours of back-and-forth.",
      author: "Dr. Jennifer Martinez",
      role: "Owner, Martinez Eye Clinic",
      location: "Austin, TX",
    },
    {
      id: 3,
      content: "I was skeptical about hiring a virtual assistant, but Sophia proved me wrong within the first week. She's professional, knowledgeable, and has become an invaluable part of our team. Highly recommended!",
      author: "Dr. Robert Thompson",
      role: "Optometrist, ClearView Optometry",
      location: "Denver, CO",
    },
    {
      id: 4,
      content: "Sophia's patient communication skills are outstanding. Our patients consistently comment on how helpful and professional she is. She's elevated our practice's reputation while reducing my administrative burden significantly.",
      author: "Dr. Lisa Patel",
      role: "Owner, Patel Vision Associates",
      location: "Phoenix, AZ",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

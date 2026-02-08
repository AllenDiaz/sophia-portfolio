/**
 * Site Configuration
 * Central configuration for Dr. Sophia Gonzales VA Optometry
 */

export const siteConfig = {
  name: "Dr. Sophia Joy Gonzales",
  title: "Dr. Sophia Joy Gonzales | Licensed Optometrist & Virtual Practice Assistant",
  description: "Licensed Optometrist offering professional virtual assistant services for optometry practices. Combining clinical expertise with practice management skills to streamline administrative operations and patient care coordination.",
  tagline: "Your Vision, My Mission",
  
  // Contact information
  contact: {
    email: "sjgonzales.opto@gmail.com",
    phone: "+63 975-890-3753",
    hours: "Monday - Saturday: 9:00 AM - 7:00 PM PHT",
    location: "Valenzuela City, Metro Manila, Philippines",
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
      title: 'Licensed Professional',
      description: 'Doctor of Optometry degree with full professional licensure',
      icon: 'award',
    },
    {
      title: 'Clinical Excellence',
      description: '2+ years clinical experience at Executive Optical and top institutions',
      icon: 'star',
    },
    {
      title: 'Patient-Centered Care',
      description: 'Dedicated to fostering deeper understanding of eye health for every patient',
      icon: 'heart',
    },
    {
      title: 'Continuous Learning',
      description: 'Active participation in professional seminars and optometry conventions',
      icon: 'book-open',
    },
  ],

  // About content
  about: {
    heading: 'About Dr. Sophia Joy Gonzales',
    subheading: 'Licensed Optometrist & Virtual Practice Assistant',
    intro: "I'm a licensed optometrist offering professional virtual assistant services for optometry practices. With a Doctor of Optometry degree from Manila Central University and 2+ years of clinical experience at Executive Optical, I combine clinical expertise with administrative proficiency to provide comprehensive practice support that truly understands the optometry workflow.",
    highlights: [
      'Doctor of Optometry - Manila Central University (2018-2024)',
      'Licensed Optometrist - 2+ years at Executive Optical',
      'Administrative Experience - Bookkeeping & Practice Management',
      'FDT Scholar & Academic Excellence Award Winner',
    ],
    story: "What sets me apart from typical virtual assistants is my deep understanding of optometry. I've worked at prestigious institutions including Chinese General Hospital, Vision Science Institute, and Resources for the Blind, Inc., giving me comprehensive knowledge of eye care practices. My administrative experience in bookkeeping and student guidance, combined with my clinical background, means I can handle your practice management needs with the same precision I bring to patient care.",
  },

  // Why choose Sophia - more personal than features
  whyChoose: [
    {
      title: 'Comprehensive Clinical Training',
      description: "6 years of rigorous optometry education culminating in a Doctor of Optometry degree. Trained at top institutions including Chinese General Hospital and Vision Science Institute, ensuring thorough knowledge of modern eye care practices.",
      icon: 'graduation-cap',
    },
    {
      title: 'Proven Clinical Excellence',
      description: 'Academic distinction with Special Merit Award (2024) and FDT Scholarship recipient. Current optometrist at Executive Optical with 2+ years of hands-on patient care experience using advanced optical instruments.',
      icon: 'award',
    },
    {
      title: 'Problem-Solving Mindset',
      description: "Skilled in both clinical diagnostics and practice management. My experience ranges from patient care to administrative roles, giving me a holistic understanding of efficient eye care delivery.",
      icon: 'lightbulb',
    },
    {
      title: 'Commitment to Service',
      description: 'Active member and officer of professional organizations including JR. IPAO and SVOSH. Dedicated to continuous learning through regular attendance at optometry symposiums and conventions, ensuring I stay current with industry developments.',
      icon: 'users',
    },
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      content: "Dr. Sophia Joy Gonzales is an exceptional optometrist with strong clinical skills and excellent patient communication abilities. Her dedication to continuous learning and professional development is evident in her work. I highly recommend her services.",
      author: "Dr. Patricia Tagara",
      role: "Optometrist",
      location: "Metro Manila, Philippines",
    },
    {
      id: 2,
      content: "During her clinical rotation at our hospital, Dr. Gonzales demonstrated remarkable proficiency in comprehensive eye examinations and patient care. Her commitment to quality optometry services and her ability to work collaboratively make her a valuable professional in the field.",
      author: "Chinese General Hospital",
      role: "Clinical Training Site",
      location: "Manila, Philippines",
    },
    {
      id: 3,
      content: "Dr. Gonzales contributed significantly during her internship with our organization. Her understanding of visual impairments and compassionate approach to patient education truly stood out. She brings both technical expertise and genuine care to her practice.",
      author: "Resources for the Blind, Inc.",
      role: "Training Institution",
      location: "Quezon City, Philippines",
    },
    {
      id: 4,
      content: "As part of the Executive Optical team, Dr. Gonzales consistently demonstrates professional excellence in patient care and optical services. Her proficiency with optical instruments and ability to explain complex eye health concepts to patients make her an asset to our practice.",
      author: "Executive Optical",
      role: "Current Employer",
      location: "Philippines",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

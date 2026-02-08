/**
 * Service and Contact Types
 */

export type ServiceCategory = 
  | 'patient-scheduling'
  | 'insurance-verification'
  | 'records-management'
  | 'patient-communication'
  | 'billing-support'
  | 'practice-support';

export interface Service {
  id: ServiceCategory;
  name: string;
  description: string;
  icon: string;
  features?: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  practiceName?: string;
  message: string;
  serviceInterest?: ServiceCategory[];
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export type ContactFormStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
  recommendedFor: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  badge: 'Demo / Project' | 'Production Demo';
  description: string;
  extendedDescription: string;
  technologies: string[];
  imagePlaceholder: {
    theme: string;
    headline: string;
    sub: string;
    accent: string;
  };
  features: string[];
  linkText?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  target: string;
  priceNote: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ContactFormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  projectDetails: string;
}

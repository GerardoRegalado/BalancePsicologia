export type ContentAction = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type HighlightItem = {
  label: string;
  value: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  actions: ContentAction[];
  highlights: HighlightItem[];
};

export type FeatureItem = {
  tag: string;
  title: string;
  description: string;
};

export type FeatureSectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: FeatureItem[];
};

export type PricingPlan = {
  name: string;
  description: string;
  featured: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ServiceItem = {
  name: string;
  summary: string;
  outcome: string;
};

export type PackagePreview = {
  name: string;
  summary: string;
  bestFor: string;
};

export type TestimonialItem = {
  name: string;
  role: string;
  quote: string;
};

export type LeadFormField = {
  name: string;
  label: string;
  type: "text" | "email" | "textarea" | "select";
  required: boolean;
};

export type LeadFormContent = {
  title: string;
  description: string;
  fields: LeadFormField[];
};

export type ContentAction = {
  label: string;
  mobileLabel?: string;
  href: string;
  variant: "primary" | "secondary";
  disabled?: boolean;
  external?: boolean;
};

export type HighlightItem = {
  label: string;
  value: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  mobileTitleAccent?: string;
  description: string;
  actions: ContentAction[];
  highlights: HighlightItem[];
  image: {
    src: string;
    alt: string;
  };
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

export type EditorialImage = {
  src: string;
  alt: string;
};

export type AboutSectionContent = {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  body: string;
  images: EditorialImage[];
  callout: {
    title: string;
    description: string;
  };
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

export type ServiceCardItem = {
  title: string;
  description: string;
  icon: "individual" | "couple" | "family";
  tags: string[];
};

export type ServicesSectionContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: ServiceCardItem[];
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

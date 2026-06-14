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
  id: "individual" | "couple" | "family";
  name: string;
  price: string;
  description: string;
  icon: "individual" | "couple" | "family";
  tags: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqSectionContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: FaqItem[];
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
  detail: string;
  meta: string;
};

export type PackagesSectionContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  publicNote: string;
  items: PackagePreview[];
  note: {
    title: string;
    description: string;
  };
};

export type TestimonialItem = {
  name: string;
  role: string;
  quote: string;
};

export type TestimonialsSectionContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  emptyState: {
    title: string;
    description: string;
  };
  items: TestimonialItem[];
};

export type ContactChannel = {
  label: string;
  description: string;
  status: string;
  kind: "whatsapp" | "facebook" | "instagram" | "location";
};

export type ContactSectionContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  channels: ContactChannel[];
};

export type LocationSectionContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  clinicName: string;
  address: string;
  mapsUrl: string;
  ctaLabel: string;
};

export type FooterLinkItem = {
  label: string;
  href?: `#${string}`;
};

export type FooterContent = {
  navigation: FooterLinkItem[];
  legal: FooterLinkItem[];
  credit: {
    prefix: string;
    label: string;
    href: string;
  };
};

export type LeadFormField = {
  name: string;
  label: string;
  type: "text" | "email" | "textarea" | "select";
  required: boolean;
  placeholder: string;
  helperText?: string;
  options?: string[];
};

export type LeadFormContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  publicNote: string;
  aside: {
    title: string;
    description: string;
    points: {
      title: string;
      description: string;
    }[];
  };
  fields: LeadFormField[];
  visualSubmitLabel: string;
  privacyNote: string;
};

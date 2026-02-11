export enum SectionType {
  Hero = 'Hero',
  VSL = 'VSL',
  TrustSignals = 'TrustSignals',
  Gallery = 'Gallery',
  DoctorBio = 'DoctorBio',
  ProcessSteps = 'ProcessSteps',
  Testimonials = 'Testimonials',
  Pricing = 'Pricing',
  FAQ = 'FAQ',
  Location = 'Location'
}

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'tel' | 'email' | 'select' | 'number';
  placeholder?: string;
  required: boolean;
  options?: string[]; // For select type
  defaultValue?: string;
}

export interface Config {
  brand: {
    name: string;
    doctorName: string;
    city: string;
    logo: string;
    address: string;
    phone: string;
    whatsapp: string;
  };
  theme: {
    primary: string; // Hex color
    secondary: string; // Hex color
    accent: string;
  };
  integrations: {
    webhookUrl: string;
    pixelId?: string;
    analyticsId?: string;
    redirectUrl?: string;
  };
  copy: {
    hero: {
      eyebrow: string;
      headline: string;
      subheadline: string;
      cta: string;
    };
    vsl: {
      headline: string;
      vimeoId: string;
    };
    offers: {
      headline: string;
      items: { title: string; desc: string; icon: string }[];
    };
    gallery: {
      headline: string;
      images: { before: string; after: string; caption: string }[];
    };
    testimonials: {
      headline: string;
      items: { 
        name: string; 
        city: string; 
        text: string; 
        image: string; 
        rating: number;
        beforeImage?: string;
        afterImage?: string;
      }[];
    };
    pricing: {
      headline: string;
      benefitHeadline: string;
      points: string[];
      buttonText: string;
    };
    faq: {
      headline: string;
      questions: { q: string; a: string }[];
    };
  };
  leadForm: {
    headline: string;
    subheadline: string;
    fields: FormField[];
    buttonText: string;
  };
  sectionsOrder: SectionType[];
}
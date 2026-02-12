import { Config, SectionType } from './types';

export const APP_CONFIG: Config = {
  brand: {
    name: "Radiant Hair Clinic",
    doctorName: "Dr. Arvind Kashyap",
    city: "New Delhi",
    logo: "https://content.presentermedia.com/content/clipart/00001000/1783/blue_medical_symbol_pc_800_clr.png",
    address: "B-42, GK-1, Near M-Block Market, New Delhi 110048",
    phone: "+91-9876543210",
    whatsapp: "919876543210",
    locationImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop",
    googleMapsUrl: "https://maps.google.com/?q=B-42,+GK-1,+Near+M-Block+Market,+New+Delhi+110048",
  },
  theme: {
    primary: "#000000ff",
    secondary: "#d70000ff",
    accent: "#facbcbff",
    headlineHighlight: "#f08888ff",
    stars: "#edab03ff",
    footerText: "#d6d6d6ff",
  },
  integrations: {
    webhookUrl: "https://clients.spottt.com/webhook-test/client1",
    pixelId: "1234567890",
    redirectUrl: "/thank-you",
  },
  copy: {
    hero: {
      eyebrow: "Trusted by 5,000+ Patients Across India",
      headline: "Get Natural Looking Hair Back in Just",
      headlineHighlight: " 6 Hours",
      subheadline: "Advanced FUE Hair Transplant by Certified Surgeons in", // City appended in component
      cta: "Check My Graft Requirement",
    },
    vsl: {
      headline: "Watch how Dr. Arvind transforms lives using the FUE Gold Technique",
      vimeoId: "76979871",
    },
    offers: {
      headline: "Why Choose Radiant Hair Clinic?",
      items: [
        { title: "Natural Hairline", desc: "Our artistic hairline design ensures nobody can tell you had a transplant.", icon: "Sparkles" },
        { title: "Bio-Enhanced FUE", desc: "Faster healing and 98% graft survival rate for maximum density.", icon: "Zap" },
        { title: "No Hidden Costs", desc: "Pay only for the grafts you need. Affordable EMI options available.", icon: "CheckCircle" },
      ],
    },
    gallery: {
      headline: "Real Results, Real Confidence",
      images: [
        { before: "https://picsum.photos/seed/hair1b/600/400", after: "https://picsum.photos/seed/hair1a/600/400", caption: "After 6 Months - 3,500 Grafts" },
        { before: "https://picsum.photos/seed/hair2b/600/400", after: "https://picsum.photos/seed/hair2a/600/400", caption: "After 8 Months - 2,500 Grafts" },
      ],
    },
    testimonials: {
      headline: "What Our Patients Say",
      items: [
        {
          name: "Rahul Mehra",
          city: "Delhi",
          text: "I was very nervous about the pain, but Dr. Arvind and his team made it so comfortable. The results after 6 months are mind-blowing.",
          image: "https://picsum.photos/seed/p1/100/100",
          rating: 5,
          beforeImage: "https://picsum.photos/seed/r1b/300/300",
          afterImage: "https://picsum.photos/seed/r1a/300/300"
        },
        {
          name: "Sandeep Singh",
          city: "Chandigarh",
          text: "Best decision of my life. The Bio-Enhanced FUE technique is magic. No scars at all, and the density is exactly what I wanted.",
          image: "https://picsum.photos/seed/p2/100/100",
          rating: 5,
          beforeImage: "https://picsum.photos/seed/s1b/300/300",
          afterImage: "https://picsum.photos/seed/s1a/300/300"
        },
        {
          name: "Amit Kumar",
          city: "Gurgaon",
          text: "The consultation was very honest. They didn't push for more grafts than needed. The natural look is what matters the most.",
          image: "https://picsum.photos/seed/p3/100/100",
          rating: 5,
          beforeImage: "https://picsum.photos/seed/a1b/300/300",
          afterImage: "https://picsum.photos/seed/a1a/300/300"
        },
        {
          name: "Vikram Aditya",
          city: "Noida",
          text: "My hairline looks exactly how it was in my 20s. Extremely professional staff and top-notch hygiene standards.",
          image: "https://picsum.photos/seed/p4/100/100",
          rating: 5,
          beforeImage: "https://picsum.photos/seed/v1b/300/300",
          afterImage: "https://picsum.photos/seed/v1a/300/300"
        },
        {
          name: "Deepak Rawat",
          city: "Faridabad",
          text: "I compared 5 clinics in Delhi before choosing Radiant. Their FUE Gold technique is superior to everything else I saw.",
          image: "https://picsum.photos/seed/p5/100/100",
          rating: 5,
          beforeImage: "https://picsum.photos/seed/d1b/300/300",
          afterImage: "https://picsum.photos/seed/d1a/300/300"
        },
        {
          name: "Manish Joshi",
          city: "Dwarka",
          text: "Highly recommended for anyone worried about thinning hair. Dr. Arvind is a true artist with hair placement.",
          image: "https://picsum.photos/seed/p6/100/100",
          rating: 5,
          beforeImage: "https://picsum.photos/seed/m1b/300/300",
          afterImage: "https://picsum.photos/seed/m1a/300/300"
        }
      ]
    },
    pricing: {
      headline: "World-Class Hair Restoration",
      benefitHeadline: "Invest in your confidence with our premium features",
      points: [
        "Free PRP Session included for faster growth",
        "Post-op care kit for 3 months (No Extra Charge)",
        "Life-time Growth Warranty on every graft",
        "Free 1-on-1 Consultation with Senior Doctor",
        "0% Interest EMI options for all patients",
        "International Standard Hygiene & Safety"
      ],
      buttonText: "Get My Personal Treatment Plan"
    },
    faq: {
      headline: "Common Doubts Answered",
      questions: [
        { q: "Is it permanent?", a: "Yes, the hair transplanted from the donor area (back of the head) is genetically resistant to DHT and will grow for a lifetime." },
        { q: "Can I join office the next day?", a: "Most patients return to work within 48-72 hours. It's a minimally invasive procedure." },
        { q: "Will it look natural?", a: "100%. Our surgeons focus on the angle, depth, and direction of each hair to mimic your natural growth pattern." },
        { q: "Is the procedure painful?", a: "We use local anesthesia. You might feel a slight prick initially, but the rest of the 6-hour session is painless." },
      ],
    },
    footer: {
      description: "Premium Hair ij Excellence in",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Patient Care", href: "#" },
      ],
      disclaimer: "Disclaimer: Hair transplant is a surgical procedure. Results vary significantly between individuals based on donor area density, age, and medical history. Testimonials are shared with patient consent. Images are illustrative of our past results. Consult our experts for a personalized medical plan.",
    },
  },
  leadForm: {
    headline: "Calculate Your Transplant Requirement",
    subheadline: "Enter details to get a free graft analysis and doctor consultation.",
    fields: [
      { id: 'name', label: 'Your Full Name', type: 'text', placeholder: 'e.g. Rahul Sharma', required: true },
      { id: 'phone', label: 'WhatsApp Number', type: 'tel', placeholder: '10-digit mobile number', required: true },
      { id: 'age', label: 'Your Age', type: 'number', placeholder: 'e.g. 28', required: true },
      { id: 'city', label: 'Your Current City', type: 'text', placeholder: 'e.g. New Delhi', required: true },
      { id: 'grade', label: 'Baldness Grade', type: 'select', required: true, defaultValue: 'Just Consultation', options: ['Just Consultation', 'Stage 1-2 (Frontal)', 'Stage 3-4 (Crown)', 'Stage 5+ (Advanced)'] },
    ],
    buttonText: "Check My Eligibility Now",
  },
  sectionsOrder: [
    SectionType.Hero,
    SectionType.VSL,
    SectionType.TrustSignals,
    SectionType.Gallery,
    SectionType.Testimonials,
    SectionType.DoctorBio,
    SectionType.ProcessSteps,
    SectionType.Pricing,
    SectionType.FAQ,
    SectionType.Location,
  ],
};
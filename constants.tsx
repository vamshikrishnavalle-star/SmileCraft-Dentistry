
import React from 'react';
import { Service, Testimonial, FAQItem, GalleryItem } from './types';

export const CLINIC_DETAILS = {
  name: "GlowDent SmileCraft",
  address: "4th Floor, Pride Plaza, Near LB Nagar Metro Station, Hyderabad, 500074",
  phone: "+91 91234 56789",
  email: "hello@glowdent.com",
  bookingUrl: "https://calendly.com/vamshikrishnavalle/30min",
  hours: {
    weekdays: "08:00 AM - 07:00 PM",
    saturday: "09:00 AM - 04:00 PM"
  },
  whatsapp: "919123456789"
};

export const SERVICES: Service[] = [
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    description: 'Perfectly aligned teeth for a healthy, beautiful smile.',
    icon: null,
    longDescription: 'Our orthodontic treatments utilize state-of-the-art technology to correct malocclusions and tooth irregularities. Whether you opt for traditional ceramic braces or modern clear aligners like Invisalign, we use 3D digital scanning to map your entire treatment journey before we even start. This ensures precision in every movement of your teeth.',
    benefits: ['Bite correction', 'Improved speech', 'Easier cleaning'],
    costRange: '₹1,50,000+',
    process: ['Digital 3D Scan', 'Customized Treatment Plan', 'Alignment Progress Checks'],
    outcomes: 'Expect a perfectly symmetrical smile, corrected bite function (overbite/underbite resolution), and significantly improved long-term periodontal health due to easier maintenance of straight teeth.',
    preRequirements: 'A comprehensive oral health check is required to ensure no active decay or gum disease is present. Recent X-rays (OPG/Lateral Ceph) are necessary for diagnostic planning.'
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    description: 'Veneers, Whitening, and Smile Makeovers.',
    icon: null,
    longDescription: 'Cosmetic dentistry at GlowDent is where art meets science. Our porcelain veneers are ultra-thin shells custom-crafted to cover the front surface of teeth, correcting chips, gaps, or permanent stains. For those seeking immediate results, our Zoom! whitening can brighten your smile by up to 8 shades in a single session.',
    benefits: ['Instant confidence', 'Natural look', 'Long-lasting'],
    costRange: '₹25,000+',
    process: ['Smile Design Consult', 'Tooth Preparation', 'Final Artistic Bonding'],
    outcomes: 'You will achieve a "Hollywood" standard aesthetic that remains natural in appearance. Expectations include balanced tooth proportions, corrected color harmony, and a rejuvenated facial profile.',
    preRequirements: 'Patients must have stable gum health. We recommend a professional cleaning (scaling and polishing) at least one week prior to starting any cosmetic bonding or whitening procedure.'
  },
  {
    id: 'restoration',
    title: 'Dental Restoration',
    description: 'Repair and restore your natural teeth with precision.',
    icon: null,
    longDescription: 'Restorative dentistry focuses on functional integrity. We use high-grade biocompatible materials for crowns and bridges that replicate the light-reflecting properties of natural enamel. Our goal is to save the natural tooth structure whenever possible using advanced endodontic and restorative techniques.',
    benefits: ['Functional repair', 'Pain relief', 'Enamel protection'],
    costRange: '₹5,000+',
    process: ['Diagnostic Assessment', 'Decay Removal/Prep', 'Permanent Restoration Placement'],
    outcomes: 'Full restoration of chewing function, elimination of sensitivity or pain from decay, and prevention of adjacent teeth shifting. The restorations are designed to be indistinguishable from your natural teeth.',
    preRequirements: 'Detailed clinical examination and localized X-rays are required to assess the depth of decay or structural damage. Any underlying infections must be treated first.'
  },
  {
    id: 'pediatric',
    title: 'Pediatric Dentistry',
    description: 'Gentle and fun dental care for the little ones.',
    icon: null,
    longDescription: 'We specialize in "Fear-Free" dentistry for children. Our pediatric wing is designed to be engaging and non-intimidating. We focus on preventive care, including fluoride applications and dental sealants, while educating both child and parent on the importance of milk-tooth health for the development of permanent dentition.',
    benefits: ['Gentle care', 'Fun environment', 'Early prevention'],
    costRange: '₹1,500+',
    process: ['Positive Reinforcement Intro', 'Gentle Examination', 'Preventive Guidance'],
    outcomes: 'Maintenance of healthy primary teeth to ensure proper spacing for permanent teeth, early detection of orthodontic needs, and most importantly, the development of a positive, lifelong attitude toward dental health.',
    preRequirements: 'We ask parents to avoid using "scary" words before the visit. A light meal before the appointment is recommended, and please bring any previous dental records or lists of medications.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Brenda',
    age: '24',
    rating: 4.5,
    text: 'The best dental experience I\'ve ever had! The team was so professional, care and made me feel comfortable. Thanks GlowDent, Finally I love my smile!',
    procedure: 'Customer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    category: 'Veneers',
    before: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600',
    after: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=600',
    description: 'Full Porcelain Veneers',
    timeframe: '2 Weeks'
  },
  {
    id: '2',
    category: 'Invisalign',
    before: 'https://images.unsplash.com/photo-1593059080506-511a5aae4525?auto=format&fit=crop&q=80&w=600',
    after: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600',
    description: 'Clear Aligner Treatment',
    timeframe: '6 Months'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: '1',
    question: 'How long do porcelain veneers last?',
    answer: 'With proper care, porcelain veneers typically last between 10 to 15 years.',
    category: 'procedure'
  },
  {
    id: '2',
    question: 'Do you offer flexible payment options?',
    answer: 'Yes, we provide 0% interest financing plans and early payment discounts.',
    category: 'financial'
  },
  {
    id: '3',
    question: 'Is the consultation really free?',
    answer: 'Yes, our initial smile consultations are complimentary to help you understand your options.',
    category: 'practical'
  }
];

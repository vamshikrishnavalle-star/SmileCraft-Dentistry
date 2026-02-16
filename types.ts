
// Import React to provide types like ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  longDescription: string;
  benefits: string[];
  costRange: string;
  process: string[];
  outcomes: string;
  preRequirements: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age: string;
  rating: number;
  text: string;
  procedure: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  category: string;
  before: string;
  after: string;
  description: string;
  timeframe: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'procedure' | 'financial' | 'practical';
}

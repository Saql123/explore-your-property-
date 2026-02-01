
import { Property, Testimonial, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: 'home' },
  { label: 'Buy', href: 'buy' },
  { label: 'Rent', href: 'rent' },
  { label: 'Sell', href: 'sell' },
  { label: 'Agents', href: 'agents' },
  { label: 'Contact', href: 'contact' },
];

export const PROPERTIES: Property[] = [
  {
    id: '1',
    name: 'Parkview Heights',
    location: 'Sector 104, Noida',
    price: '₹2.85 Cr',
    beds: 4,
    baths: 3,
    sqft: '2,800',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    type: 'For Sale',
    description: 'Bright, modern interiors with generous living spaces in a family-friendly neighborhood.'
  },
  {
    id: '2',
    name: 'Oakwood Retreat',
    location: 'Sec 150, Noida',
    price: '₹4.25 Cr',
    beds: 5,
    baths: 4,
    sqft: '4,200',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1200',
    type: 'For Sale',
    description: 'Elegant design, expansive gardens, and the perfect blend of comfort and luxury.'
  },
  {
    id: 'b-1',
    name: 'Neon Sky Loft',
    location: 'Sector 104, Noida',
    price: '₹7.50 Cr',
    beds: 3,
    baths: 3,
    sqft: '3,200',
    image: 'https://images.unsplash.com/photo-1600607687940-47a04b629571?auto=format&fit=crop&q=80&w=1200',
    type: 'For Sale',
    description: 'High-end penthouse with 360-degree city views and premium finishes.'
  }
];

export const RENTAL_PROPERTIES: Property[] = [
  {
    id: 'r-1',
    name: 'Modern Studio 104',
    location: 'Sector 104, Noida',
    price: '₹45,000/mo',
    beds: 1,
    baths: 1,
    sqft: '850',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200',
    type: 'For Rent',
    description: 'Perfect for professionals, fully furnished with smart home features.'
  },
  {
    id: 'r-2',
    name: 'The Green Oasis',
    location: 'Hazipur, Noida',
    price: '₹85,000/mo',
    beds: 3,
    baths: 2,
    sqft: '1,900',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200',
    type: 'For Rent',
    description: 'Spacious family apartment with park view and 24/7 security.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Daniel S.',
    role: 'Homeowner',
    content: 'EYP made the entire home-buying process incredibly smooth. The agent was attentive, knowledgeable, and genuinely cared about our needs.',
    avatar: 'https://i.pravatar.cc/150?u=daniel'
  },
  {
    id: '2',
    name: 'Marcus H.',
    role: 'Real Estate Investor',
    content: "We've bought and sold properties before, but working with EYP was a game-changer. The service was fast, the advice was honest, and results spoke.",
    avatar: 'https://i.pravatar.cc/150?u=marcus'
  },
  {
    id: '3',
    name: 'Sarah L.',
    role: 'First-time Buyer',
    content: 'Very well done boys! You people work very transparently. Highly recommended for anyone looking for their dream home in Noida.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  }
];

export const AGENTS = [
  {
    id: 'a1',
    name: 'Varun Malhotra',
    role: 'Principal Consultant',
    image: 'https://image2url.com/r2/default/images/1769933260927-36ffa37c-3bbe-47b0-8177-67260abdf13d.png',
    specialty: 'Luxury Residential',
    phone: '072061 65093'
  },
  {
    id: 'a2',
    name: 'Saurav Mann',
    role: 'Investment Specialist',
    image: 'https://user1840.na.imgto.link/public/20260201/untitled-design-9.avif',
    specialty: 'Commercial Assets',
    phone: '072061 65000'
  },
  {
    id: 'a3',
    name: 'Priya Sharma',
    role: 'Client Relations',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    specialty: 'Resale & Leasing',
    phone: '072061 65088'
  }
];

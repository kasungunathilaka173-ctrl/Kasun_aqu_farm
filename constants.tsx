
import React from 'react';
import { 
  Fish, 
  Baby, 
  TrendingUp, 
  Leaf, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';
import { ServiceItem, FishProduct } from './types';

export const BUSINESS_NAME = "KASUN AQUA FARM";
export const ADDRESS = "No 352 1/A, Rathmalla, Katupotha, Kurunegala, Sri Lanka";
export const PHONE_NUMBERS = ["077-4760866", "077-6660571"];
export const EMAIL = "kasungunathilaka173@gmail.com";
export const WHATSAPP_LINK = "https://wa.me/94774760866";

// Point to the logo file you uploaded (save your logo as logo.png in the project folder)
export const LOGO_URL = "./logo.png"; 

export const SERVICES: ServiceItem[] = [
  {
    title: "Expert Breeding",
    description: "Selective breeding of high-end ornamental varieties ensuring genetic purity and vibrant colors.",
    icon: <Fish className="w-8 h-8" />
  },
  {
    title: "Fry Fish Supply",
    description: "Quality fry available for hobbyists and commercial growers to start their own aquatic journey.",
    icon: <Baby className="w-8 h-8" />
  },
  {
    title: "Local & Export Market",
    description: "We grow fish to market size for both local pet shops and international export demands.",
    icon: <TrendingUp className="w-8 h-8" />
  },
  {
    title: "Premium Fish Food",
    description: "Nutrient-rich feed formulated specifically for growth, immunity, and color enhancement.",
    icon: <Leaf className="w-8 h-8" />
  },
  {
    title: "Consultancy Services",
    description: "Professional guidance on farm setup, water quality management, and disease control.",
    icon: <MessageSquare className="w-8 h-8" />
  }
];

export const PRODUCTS: FishProduct[] = [
  {
    id: "1",
    name: "Red Lyretail Swordtail",
    category: "Swordtail",
    description: "Stunning vibrant red body with the signature lyretail fin shape. A classic and active addition to any community tank.",
    imageUrl: "https://images.unsplash.com/photo-1544551763-47a18411987c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    name: "Red Wag Lyretail Swordtail",
    category: "Swordtail",
    description: "Features a beautiful red body contrasted with deep black fins (wagtail) and an elegant lyretail extension.",
    imageUrl: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "3",
    name: "Kohaku Lyretail Swordtail",
    category: "Swordtail",
    description: "Rare and exquisite pattern featuring clear white and bright red patches, mirroring the prestigious Kohaku Koi pattern.",
    imageUrl: "https://images.unsplash.com/photo-1490159740764-219d717a653a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "4",
    name: "Balloon Molly Fish",
    category: "Molly",
    description: "Adorable rounded body shape with vibrant colors. These peaceful fish are known for their unique swimming style and hardy nature.",
    imageUrl: "https://images.unsplash.com/photo-1614102073832-030967418971?auto=format&fit=crop&q=80&w=800"
  }
];

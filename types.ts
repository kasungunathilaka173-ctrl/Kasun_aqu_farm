
import React from 'react';

export interface FishProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

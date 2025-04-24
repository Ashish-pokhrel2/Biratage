export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
}

export interface CulturalStory {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  link: string;
}

export interface QuickAccessItem {
  id: number;
  title: string;
  icon: string;
  link: string;
}

export interface CommunityPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  timestamp: string;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

export interface HeritageStats {
  count: number;
  label: string;
}
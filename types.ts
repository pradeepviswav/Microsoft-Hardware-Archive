export interface ProductLink {
  store: string;
  url: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  year: number;
  description: string;
  imageUrl: string;
  links: ProductLink[];
}

export interface Review {
  id: number;
  productId: number;
  author: string;
  rating: number; // 1-5
  text: string;
  date: string;
}

export type SortOption = 'name-asc' | 'name-desc' | 'year-desc' | 'year-asc';

export type Theme = 'light' | 'dark';

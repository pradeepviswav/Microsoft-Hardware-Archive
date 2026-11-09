export interface ProductLink {
  store: string;
  url: string;
}

export interface ProductSource {
  title: string;
  url: string;
  kind?: "Microsoft" | "Microsoft archive" | "Wikipedia";
}

export interface Product {
  id: number;
  name: string;
  category: string;
  year: number | null;
  description: string;
  imageUrl?: string;
  links: ProductLink[];
  addedAt?: string;
  source?: ProductSource;
  additionalSources?: ProductSource[];
  researchedAt?: string;
  storeListed?: boolean;
  imageKind?: "photo" | "diagram";
  imageNote?: string;
  specs?: Record<string, string>;
  imageCredit?: string;
  imageSource?: string;
  imageLicense?: string;
  dateLabel?: string;
}

export interface Review {
  id: number;
  productId: number;
  author: string;
  rating: number; // 1-5
  text: string;
  date: string;
}

export type SortOption = "name-asc" | "name-desc" | "year-desc" | "year-asc";

export type Theme = "light" | "dark";



// TEMPORARY MODEL
export interface Product {
  id?: number;
  name?: string;
  image?: string;
  price?: number;
  description?: string;
  variant?: string;
  subVariant?: string;
  quantity?: number; 
}


// NEW MODEL TO BE IMPLEMENTED

export interface ProductSize {
  size: string;
  price: number;
}

export interface ProductItem {
  id?: number;
  name?: string;
  image?: string;
  description?: string;
  quantity?: number;
  sizes?: ProductSize[];
}

export interface Category {
  name: string;
  items: ProductItem[];
}

export interface SubVariant {
  name: string;
  categories: Category[];
}

export interface Variant {
  variant: string;
  subVariants: SubVariant[];
}
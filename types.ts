
export interface Product {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  price: number;
  unit: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  discount?: number;
}

export interface Category {
  id: string;
  name: string;
  nameAr: string;
  icon: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type ViewState = 'HOME' | 'DETAILS' | 'CART' | 'ORDERS' | 'PROFILE' | 'AI_CHAT';

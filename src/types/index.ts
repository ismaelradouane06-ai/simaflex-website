// Product Types
export interface Product {
  id: string;
  name: string;
  category: 'mattress' | 'foam' | 'base' | 'pillow' | 'sofa';
  price: number;
  discountPrice?: number;
  description: string;
  shortDescription: string;
  image: string;
  images: string[];
  rating: number;
  reviewCount: number;
  sizes: Size[];
  thickness: string;
  firmness: 'soft' | 'medium' | 'firm';
  materials: string[];
  specifications: Specification[];
  composition: string;
  warranty: string;
  deliveryInfo: string;
  collection: string;
  featured?: boolean;
  bestseller?: boolean;
}

export interface Size {
  width: number;
  length: number;
  label: string;
  available: boolean;
  price?: number;
}

export interface Specification {
  label: string;
  value: string;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  title: string;
  content: string;
  verified: boolean;
  date: Date;
  image?: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
  size?: Size;
  price: number;
}

export interface Order {
  id: string;
  date: Date;
  items: CartItem[];
  total: number;
  status: 'confirmed' | 'preparing' | 'shipped' | 'in-delivery' | 'delivered';
  customerInfo: CustomerInfo;
  deliveryAddress: Address;
}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface Address {
  street: string;
  city: string;
  postalCode: string;
  country: string;
  province?: string;
}

export interface B2BQuote {
  id: string;
  company: string;
  contactName: string;
  phone: string;
  email: string;
  activity: string;
  productRequired: string;
  quantity: number;
  dimensions?: string;
  message: string;
  date: Date;
  status: 'pending' | 'in-progress' | 'quoted' | 'converted';
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  addresses: Address[];
  orders: Order[];
  createdAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: Date;
  category: string;
  tags: string[];
}

export interface MattelasFinder {
  weight?: number;
  height?: number;
  sleepPosition?: 'back' | 'side' | 'stomach';
  firmness?: 'soft' | 'medium' | 'firm';
  sleepType?: 'solo' | 'couple';
  budget?: number;
  material?: 'foam' | 'memory' | 'spring' | 'any';
}

import { Product } from '@/types';

// Mock product data - Replace with real products from database
export const products: Product[] = [
  {
    id: 'mat-001',
    name: 'Matelas Comfort Plus',
    category: 'mattress',
    price: 8500,
    description: 'Matelas confortable avec mousse haute densité et soutien optimal. Idéal pour un sommeil réparateur chaque nuit.',
    shortDescription: 'Mousse haute densité - Soutien optimal',
    image: '/images/products/matelas-comfort-plus.jpg',
    images: [
      '/images/products/matelas-comfort-plus.jpg',
      '/images/products/matelas-comfort-plus-2.jpg',
      '/images/products/matelas-comfort-plus-3.jpg',
    ],
    rating: 4.5,
    reviewCount: 42,
    sizes: [
      { width: 80, length: 190, label: '80x190', available: true },
      { width: 80, length: 200, label: '80x200', available: true },
      { width: 90, length: 190, label: '90x190', available: true },
      { width: 90, length: 200, label: '90x200', available: true },
      { width: 120, length: 190, label: '120x190', available: true },
      { width: 120, length: 200, label: '120x200', available: true },
      { width: 140, length: 190, label: '140x190', available: true },
      { width: 140, length: 200, label: '140x200', available: true },
      { width: 160, length: 190, label: '160x190', available: true },
      { width: 160, length: 200, label: '160x200', available: true },
      { width: 180, length: 190, label: '180x190', available: true },
      { width: 180, length: 200, label: '180x200', available: true },
    ],
    thickness: '20 cm',
    firmness: 'medium',
    materials: ['Mousse polyuréthane haute densité', 'Housse en coton'],
    specifications: [
      { label: 'Épaisseur', value: '20 cm' },
      { label: 'Densité', value: '30 kg/m³' },
      { label: 'Indépendance de couchage', value: 'Bonne' },
      { label: 'Thermorégulation', value: 'Oui' },
    ],
    composition: 'Base de mousse haute densité (20cm) avec housse en coton respirant',
    warranty: '5 ans',
    deliveryInfo: 'Livraison gratuite à Meknès et région. Délai: 2-3 jours ouvrables',
    collection: 'Essential',
    featured: true,
    bestseller: true,
  },
  {
    id: 'mat-002',
    name: 'Matelas Premium Memory Foam',
    category: 'mattress',
    price: 15000,
    discountPrice: 12000,
    description: 'Matelas haut de gamme avec technologie mémoire de forme. Épouse parfaitement votre corps pour un confort personnalisé.',
    shortDescription: 'Mémoire de forme - Confort adaptatif',
    image: '/images/products/matelas-memory.jpg',
    images: [
      '/images/products/matelas-memory.jpg',
      '/images/products/matelas-memory-2.jpg',
      '/images/products/matelas-memory-3.jpg',
    ],
    rating: 4.8,
    reviewCount: 87,
    sizes: [
      { width: 80, length: 190, label: '80x190', available: true },
      { width: 80, length: 200, label: '80x200', available: true },
      { width: 90, length: 190, label: '90x190', available: true },
      { width: 90, length: 200, label: '90x200', available: true },
      { width: 120, length: 190, label: '120x190', available: true },
      { width: 120, length: 200, label: '120x200', available: true },
      { width: 140, length: 190, label: '140x190', available: true },
      { width: 140, length: 200, label: '140x200', available: true },
      { width: 160, length: 190, label: '160x190', available: true },
      { width: 160, length: 200, label: '160x200', available: true },
      { width: 180, length: 190, label: '180x190', available: true },
      { width: 180, length: 200, label: '180x200', available: true },
    ],
    thickness: '25 cm',
    firmness: 'firm',
    materials: ['Mousse à mémoire de forme', 'Mousse de soutien', 'Housse premium'],
    specifications: [
      { label: 'Épaisseur', value: '25 cm' },
      { label: 'Couche mémoire', value: '8 cm' },
      { label: 'Densité', value: '35 kg/m³' },
      { label: 'Soulagement de pression', value: 'Excellent' },
    ],
    composition: '8cm mousse mémoire de forme + 15cm mousse haute densité + housse hypoallergénique',
    warranty: '10 ans',
    deliveryInfo: 'Livraison gratuite partout au Maroc. Délai: 3-5 jours ouvrables',
    collection: 'Premium',
    featured: true,
  },
  {
    id: 'mat-003',
    name: 'Matelas Ergonomic Pro',
    category: 'mattress',
    price: 22000,
    description: 'Matelas professionnel avec zones de soutien différenciées. Recommandé par les kinésithérapeutes pour un soutien orthopédique optimal.',
    shortDescription: 'Zones de soutien - Recommandé médicalement',
    image: '/images/products/matelas-ergonomic.jpg',
    images: [
      '/images/products/matelas-ergonomic.jpg',
      '/images/products/matelas-ergonomic-2.jpg',
    ],
    rating: 4.9,
    reviewCount: 156,
    sizes: [
      { width: 90, length: 190, label: '90x190', available: true },
      { width: 90, length: 200, label: '90x200', available: true },
      { width: 120, length: 190, label: '120x190', available: true },
      { width: 120, length: 200, label: '120x200', available: true },
      { width: 140, length: 190, label: '140x190', available: true },
      { width: 140, length: 200, label: '140x200', available: true },
      { width: 160, length: 190, label: '160x190', available: true },
      { width: 160, length: 200, label: '160x200', available: true },
      { width: 180, length: 190, label: '180x190', available: true },
      { width: 180, length: 200, label: '180x200', available: true },
    ],
    thickness: '28 cm',
    firmness: 'firm',
    materials: ['Mousse ergonomique', 'Ressorts ensachés', 'Housse premium'],
    specifications: [
      { label: 'Épaisseur', value: '28 cm' },
      { label: 'Type ressorts', value: 'Ensachés - 1000 ressorts' },
      { label: 'Zones de soutien', value: '7 zones' },
      { label: 'Ventilation', value: 'Excellent' },
    ],
    composition: 'Ressorts ensachés 1000 + 8cm mousse ergonomique + 5cm mousse mémoire',
    warranty: '15 ans',
    deliveryInfo: 'Livraison gratuite + assemblage gratuit. Délai: 3-5 jours',
    collection: 'Luxury',
    featured: false,
  },
];

/**
 * Get product by ID
 */
export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

/**
 * Get products by category
 */
export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

/**
 * Get featured products
 */
export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}

/**
 * Get bestsellers
 */
export function getBestsellerProducts(): Product[] {
  return products.filter(p => p.bestseller);
}

/**
 * Search products
 */
export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q)
  );
}

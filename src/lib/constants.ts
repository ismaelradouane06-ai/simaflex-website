// Company Information
export const COMPANY = {
  name: 'SIMAFLEX',
  description: 'Fabricant marocain spécialisé dans les matelas, mousse polyuréthane, literie et articles connexes',
  tagline: 'Le confort pensé pour votre sommeil.',
  phone: '[PHONE]',
  email: '[EMAIL]',
  address: '[ADDRESS]',
  city: 'Meknès',
  country: 'Morocco',
  whatsapp: '[WHATSAPP_NUMBER]',
};

// Languages
export const LANGUAGES = {
  fr: { name: 'Français', flag: '🇫🇷', code: 'fr' },
  ar: { name: 'العربية', flag: '🇲🇦', code: 'ar' },
  en: { name: 'English', flag: '🇬🇧', code: 'en' },
};

// Navigation Links
export const NAV_LINKS = [
  { label: 'Accueil', href: '/', key: 'home' },
  { label: 'Matelas', href: '/matelas', key: 'mattress' },
  { label: 'Mousse', href: '/mousse', key: 'foam' },
  { label: 'Sommiers', href: '/sommiers', key: 'base' },
  { label: 'Oreillers', href: '/oreillers', key: 'pillows' },
  { label: 'Salons', href: '/salons', key: 'sofas' },
  { label: 'Finder', href: '/matelas-finder', key: 'finder' },
  { label: 'Professionnels', href: '/b2b', key: 'b2b' },
  { label: 'Usine', href: '/usine', key: 'factory' },
  { label: 'À Propos', href: '/about', key: 'about' },
  { label: 'Blog', href: '/blog', key: 'blog' },
  { label: 'Contact', href: '/contact', key: 'contact' },
  { label: 'SAV', href: '/sav', key: 'warranty' },
];

// Product Categories
export const CATEGORIES = [
  { id: 'mattress', label: 'Matelas', icon: '🛏️' },
  { id: 'foam', label: 'Mousse Polyuréthane', icon: '🧴' },
  { id: 'base', label: 'Sommiers', icon: '📦' },
  { id: 'pillow', label: 'Oreillers & Accessoires', icon: '🛌' },
  { id: 'sofa', label: 'Salons & Divans', icon: '🛋️' },
];

// Firmness Levels
export const FIRMNESS_LEVELS = [
  { id: 'soft', label: 'Souple', description: 'Confortable et enveloppant' },
  { id: 'medium', label: 'Équilibré', description: 'Confort et soutien' },
  { id: 'firm', label: 'Ferme', description: 'Soutien optimum' },
];

// Mattress Sizes
export const MATTRESS_SIZES = [
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
];

// Price Ranges
export const PRICE_RANGES = [
  { min: 0, max: 5000, label: 'Moins de 5 000 DH' },
  { min: 5000, max: 10000, label: '5 000 - 10 000 DH' },
  { min: 10000, max: 20000, label: '10 000 - 20 000 DH' },
  { min: 20000, max: 50000, label: '20 000 - 50 000 DH' },
  { min: 50000, max: Infinity, label: 'Plus de 50 000 DH' },
];

// Mattress Collections
export const COLLECTIONS = [
  'Essential',
  'Premium',
  'Luxury',
  'Professional',
  'Custom',
];

import { type ClassValue, clsx } from 'clsx';

/**
 * Merge class names with clsx
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Format price in Moroccan Dirhams
 */
export function formatPrice(price: number, currency = 'DH'): string {
  return new Intl.NumberFormat('fr-MA', {
    style: 'currency',
    currency: 'MAD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Format date
 */
export function formatDate(date: Date | string, locale = 'fr-MA'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);
}

/**
 * Slugify text
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Get WhatsApp message link
 */
export function getWhatsAppLink(
  message: string,
  phoneNumber: string
): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

/**
 * Get mattress recommendation based on finder quiz
 */
export function getMattressRecommendation(answers: any): string[] {
  // This would contain logic to recommend products based on quiz answers
  // Returns array of product IDs
  return [];
}

/**
 * Calculate mattress height based on materials
 */
export function calculateMatressHeight(layers: any[]): number {
  return layers.reduce((sum, layer) => sum + (layer.thickness || 0), 0);
}

/**
 * Validate email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number (Moroccan)
 */
export function isValidPhoneNumber(phone: string): boolean {
  const phoneRegex = /^(?:\+212|0)[1-9]\d{8}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * Truncate text
 */
export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}

/**
 * Get discount percentage
 */
export function getDiscountPercentage(originalPrice: number, discountPrice: number): number {
  return Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
}

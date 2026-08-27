'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  locale?: string;
}

export default function Header({ locale = 'fr' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'Matelas', href: '/matelas' },
    { label: 'Mousse', href: '/mousse' },
    { label: 'Sommiers', href: '/sommiers' },
    { label: 'Oreillers', href: '/oreillers' },
    { label: 'Salons', href: '/salons' },
    { label: 'Finder', href: '/matelas-finder' },
    { label: 'Professionnels', href: '/b2b' },
    { label: 'Usine', href: '/usine' },
    { label: 'À Propos', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-light-gray shadow-subtle">
      {/* Top Bar */}
      <div className="hidden md:block bg-soft-beige py-2 px-4 text-center text-sm">
        <p>🇲🇦 Fabricant marocain de matelas - Qualité Premium - Livraison Gratuite</p>
      </div>

      {/* Main Header */}
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="text-2xl md:text-3xl font-serif font-bold text-primary hover:text-accent transition-colors">
            SIMAFLEX
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-sm font-medium text-primary hover:text-accent transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 hover:bg-soft-beige rounded-lg transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          {/* Cart */}
          <Link href="/cart" className="relative p-2 hover:bg-soft-beige rounded-lg transition-colors">
            <ShoppingCart size={20} />
            <span className="absolute top-1 right-1 w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center">
              0
            </span>
          </Link>

          {/* Account */}
          <Link href="/account" className="p-2 hover:bg-soft-beige rounded-lg transition-colors">
            <User size={20} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-soft-beige rounded-lg transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden border-t border-light-gray bg-white">
          <div className="container py-4 space-y-3">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="block py-2 text-primary hover:text-accent hover:pl-2 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="border-t border-light-gray bg-soft-beige py-4">
          <div className="container">
            <input
              type="text"
              placeholder="Rechercher un produit..."
              className="w-full px-4 py-3 rounded-lg border border-light-gray focus:outline-none focus:ring-2 focus:ring-accent"
              autoFocus
            />
          </div>
        </div>
      )}
    </header>
  );
}

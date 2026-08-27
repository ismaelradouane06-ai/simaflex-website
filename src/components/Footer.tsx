'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">SIMAFLEX</h3>
            <p className="text-gray-300 mb-6">
              Fabricant marocain de matelas, mousse polyuréthane et solutions de literie premium.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Produits</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/matelas" className="text-gray-300 hover:text-white transition-colors">
                  Matelas
                </Link>
              </li>
              <li>
                <Link href="/mousse" className="text-gray-300 hover:text-white transition-colors">
                  Mousse Polyuréthane
                </Link>
              </li>
              <li>
                <Link href="/sommiers" className="text-gray-300 hover:text-white transition-colors">
                  Sommiers
                </Link>
              </li>
              <li>
                <Link href="/oreillers" className="text-gray-300 hover:text-white transition-colors">
                  Oreillers & Accessoires
                </Link>
              </li>
              <li>
                <Link href="/salons" className="text-gray-300 hover:text-white transition-colors">
                  Salons & Divans
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/matelas-finder" className="text-gray-300 hover:text-white transition-colors">
                  Matelas Finder
                </Link>
              </li>
              <li>
                <Link href="/b2b" className="text-gray-300 hover:text-white transition-colors">
                  Professionnels
                </Link>
              </li>
              <li>
                <Link href="/usine" className="text-gray-300 hover:text-white transition-colors">
                  Notre Usine
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Conseils & Blog
                </Link>
              </li>
              <li>
                <Link href="/sav" className="text-gray-300 hover:text-white transition-colors">
                  SAV & Garantie
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Phone size={18} className="flex-shrink-0 text-accent" />
                <span className="text-gray-300">[PHONE]</span>
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="flex-shrink-0 text-accent" />
                <span className="text-gray-300">[EMAIL]</span>
              </div>
              <div className="flex gap-3">
                <MapPin size={18} className="flex-shrink-0 text-accent" />
                <span className="text-gray-300">[ADDRESS], Meknès</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>&copy; {currentYear} SIMAFLEX. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Conditions d'utilisation
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Plan du site
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

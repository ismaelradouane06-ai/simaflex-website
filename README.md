# SIMAFLEX - Premium E-Commerce Website

A modern, high-converting digital commerce platform for SIMAFLEX, a Moroccan manufacturer of mattresses, polyurethane foam, bedding, sofas and related products.

## Features

- 🛏️ Premium product catalog with advanced filtering
- 🧠 Interactive mattress recommendation quiz (Matelas Finder)
- ⚙️ Mattress configurator with size/dimension selection
- 📱 Mobile-first responsive design
- 🌍 Multi-language support (French, Arabic, English) with RTL support
- 💬 WhatsApp integration for easy customer contact
- 📊 Admin dashboard for product & order management
- 🏭 B2B professional solutions section
- 🔍 Strong technical SEO implementation
- ⚡ Optimized performance with WebP/AVIF images
- 🛒 Full e-commerce functionality (cart, checkout, order tracking)
- ⭐ Customer review system
- 📧 Newsletter subscription

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Internationalization**: next-intl
- **Notifications**: React Hot Toast
- **Language**: TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                      # Next.js 14 app directory
├── components/              # Reusable React components
├── lib/                     # Utility functions and helpers
├── styles/                  # Global styles
├── types/                   # TypeScript type definitions
├── data/                    # Mock data and product information
└── public/                  # Static assets
```

## Pages

- **Home** - Hero section with featured products
- **Mattresses (Matelas)** - Product catalog with filters
- **Polyurethane Foam (Mousse)** - Foam products
- **Bed Bases (Sommiers)** - Bed base selection
- **Pillows & Accessories** - Bedding accessories
- **Sofas & Lounges (Salons & Divans)** - Sofa products
- **Mattress Finder** - Interactive recommendation quiz
- **Mattress Configurator** - Custom size selection
- **B2B / Professionals** - Bulk orders and professional pricing
- **Factory (Notre Usine)** - Manufacturing capabilities
- **About** - Company information
- **Blog / Advice (Conseils)** - Sleep tips and guidance
- **Contact** - Customer contact form
- **Service & Warranty (SAV)** - Warranty information
- **Customer Account** - Order history and tracking

## Key Components

### Product Catalog
- Advanced filtering by category, price, size, firmness, material
- Product cards with rating and quick actions
- Lazy loading for performance

### Mattress Finder Quiz
7-question quiz to recommend perfect mattress based on:
- Weight and height
- Sleep position
- Firmness preference
- Solo or couple sleeping
- Budget
- Material preference

### WhatsApp Integration
- Floating WhatsApp button
- Pre-filled messages for products
- Quick contact CTA on every product

### Admin Dashboard
- Product management
- Order management
- Customer management
- Review moderation
- B2B quote requests
- Blog management

## SEO

- Semantic HTML5 structure
- Proper heading hierarchy (H1/H2/H3)
- Meta tags and descriptions
- Open Graph support
- Schema.org structured data (Product, Organization, LocalBusiness, FAQ)
- XML sitemap
- robots.txt
- Optimized images

## Mobile Optimization

- Sticky mobile navigation
- Sticky WhatsApp button
- Large touch-friendly buttons
- Fast product browsing
- Simplified checkout flow

## Performance

- Image optimization (WebP/AVIF)
- Lazy loading
- Code splitting
- Minimal JavaScript
- Core Web Vitals optimization
- Responsive image sizing

## Internationalization

Supported languages:
- 🇫🇷 French (default)
- 🇲🇦 Arabic (RTL support)
- 🇬🇧 English

Language switcher in header navigation.

## Configuration

Update the following files with actual SIMAFLEX data:

- `src/data/products.ts` - Product catalog
- `src/data/company.ts` - Company information
- `src/lib/constants.ts` - Contact info, phone numbers
- `public/` - Product images and assets

## License

All rights reserved © SIMAFLEX

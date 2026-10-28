# Laura's Beauty Studio — Official Website

A luxury, fully responsive, multi-page React website designed and developed for **Laura's Beauty Studio** in Cary, North Carolina.

## ✨ Features & Architecture

- **React 18 & Vite**: Ultra-fast build times, modular React architecture, and hot-module replacement.
- **Tailwind CSS 3**: Custom luxury color palette (`champagne`, `rosewood`, `cream`, `charcoal`), glassmorphism, and soft luxury shadows.
- **React Router 6 (Multi-Page Navigation)**:
  - **Home (`/`)**: Hero with brand crest, 4.9-star rating highlight, unhurried sanctuary philosophy, core service showcase, interactive curl guide (M, C, D curls), verified client testimonials (Sarah M. & Jessica T.), and Instagram live sneak peek.
  - **Services & Pricing (`/services`)**: Interactive category filtering (Lashes, Body Sculpting, Head Spa), technical note on high retention & curl shapes, and direct integration to PocketSuite booking.
  - **About Us (`/about`)**: Laura's story, values, sanitation standards, and official brand logo showcase with gold-embossed stationery mockup.
  - **Client Gallery (`/gallery`)**: Filterable transformations portfolio with zoomable lightbox modal and direct Instagram link.
  - **Contact & Location (`/contact`)**: Interactive inquiry message form, Google Maps link, phone click-to-call, and studio amenities guide (free parking & full wheelchair accessibility).
- **Interactive Booking Wizard Modal**:
  - Global step-by-step appointment scheduling with service selection, preferred dates/times, client details, and celebratory confetti.
  - Instant direct booking link to PocketSuite booking portal.
- **100% Mobile Responsive**:
  - Sticky glass navbar with animated slide-in mobile navigation drawer.
  - Touch-friendly action buttons, fluid typography, and mobile-optimized card layouts.

---

## 🎨 Custom Brand Logo Design

We created custom vector SVG and stationery branding assets for **Laura's Beauty Studio**:
1. **Vector Icon Crest (`/public/logo-icon.svg`)**: Intertwined calligraphic "L" monogram framed by delicate eyelash curves, botanical laurel flourishes, and champagne gold sparkle stars.
2. **Horizontal Full Logo (`/public/logo-full.svg`)**: Horizontal header logo featuring the gold crest emblem with elegant serif typography and tracking.
3. **Interactive React Component (`<Logo />`)**: Supports `horizontal`, `stacked`, and `icon` variants with dynamic light/dark theme adaptation.
4. **Photorealistic Stationery Mockup (`/public/logo-mockup.jpg`)**: Gold foil embossed logo mockup on textured cream linen cardstock.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Development
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run preview
```

---

## 📍 Studio Information
- **Location**: 2210 Gathering Park Circle, Cary, NC 27519
- **Phone**: (413) 404-3584
- **Instagram**: [@lauradoanart](https://www.instagram.com/lauradoanart)
- **Policy**: By Appointment Only

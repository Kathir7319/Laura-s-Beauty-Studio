import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Instagram, Calendar, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import Logo from './Logo';
import { STUDIO_INFO } from '../data/studioData';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-900 text-stone-300 pt-16 pb-8 border-t border-champagne-900/40 relative overflow-hidden">
      {/* Background ambient gold radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-champagne-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Info & Stacked Logo (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-4">
            <Logo variant="horizontal" theme="dark" iconSize={48} />
            <p className="text-sm text-stone-400 max-w-sm mt-3 leading-relaxed">
              Step into a welcoming sanctuary where your comfort and confidence are our top priorities. Dedicated, unhurried, luxury lash artistry, body sculpting, and relaxing head spa treatments.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-rosewood-700 text-champagne-300 flex items-center justify-center transition-all duration-300"
                aria-label="Instagram Profile"
              >
                <Instagram size={18} />
              </a>
              <a
                href={`tel:${STUDIO_INFO.phone}`}
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-rosewood-700 text-champagne-300 flex items-center justify-center transition-all duration-300"
                aria-label="Call Laura's Beauty Studio"
              >
                <Phone size={18} />
              </a>
              <button
                onClick={onOpenBooking}
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-rosewood-700 text-champagne-300 flex items-center justify-center transition-all duration-300"
                aria-label="Book appointment"
              >
                <Calendar size={18} />
              </button>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-white text-base tracking-wider uppercase font-medium">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider">
              <li>
                <Link to="/" className="text-stone-400 hover:text-champagne-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-stone-400 hover:text-champagne-300 transition-colors">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-400 hover:text-champagne-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-stone-400 hover:text-champagne-300 transition-colors">
                  Client Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-stone-400 hover:text-champagne-300 transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-white text-base tracking-wider uppercase font-medium">
              Core Offerings
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <Link to="/services#lashes" className="hover:text-champagne-300 transition-colors">
                  • Classic & Volume Lash Full Sets
                </Link>
              </li>
              <li>
                <Link to="/services#lashes" className="hover:text-champagne-300 transition-colors">
                  • Signature M, C & D Curl Lash Lifts
                </Link>
              </li>
              <li>
                <Link to="/services#body-sculpting" className="hover:text-champagne-300 transition-colors">
                  • Targeted Lipo Body Sculpting
                </Link>
              </li>
              <li>
                <Link to="/services#body-sculpting" className="hover:text-champagne-300 transition-colors">
                  • Radiofrequency Skin Tightening
                </Link>
              </li>
              <li>
                <Link to="/services#head-spa" className="hover:text-champagne-300 transition-colors">
                  • Japanese Scalp Head Spa Experience
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-white text-base tracking-wider uppercase font-medium">
              Studio & Hours
            </h4>
            
            <div className="space-y-3 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-champagne-400 shrink-0 mt-0.5" />
                <span>{STUDIO_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-champagne-400 shrink-0" />
                <a href={`tel:${STUDIO_INFO.phone}`} className="hover:text-white transition-colors">
                  {STUDIO_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Instagram size={16} className="text-champagne-400 shrink-0" />
                <a
                  href={STUDIO_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {STUDIO_INFO.instagram} (Portfolio)
                </a>
              </div>

              <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700/60 mt-2">
                <p className="text-[11px] font-semibold text-champagne-300 uppercase tracking-wider">
                  Hours & Policy:
                </p>
                <p className="text-xs text-stone-300 mt-1">
                  <strong>By Appointment Only</strong> to ensure dedicated time for every client.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with amenities & copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-[11px]">
            <span>⭐ 4.9-Star (70+ Reviews)</span>
            <span>•</span>
            <span>🚗 Free & Accessible On-Site Parking</span>
            <span>•</span>
            <span>♿ Full Wheelchair Accessibility</span>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-stone-400 text-center">
              © {STUDIO_INFO.copyrightYear} {STUDIO_INFO.name}. All Rights Reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

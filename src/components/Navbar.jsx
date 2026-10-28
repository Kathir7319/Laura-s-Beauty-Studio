import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Instagram, MapPin, Sparkles } from 'lucide-react';
import Logo from './Logo';
import { STUDIO_INFO } from '../data/studioData';

export default function Navbar({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Scroll detection for sticky shadow/transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services & Pricing', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Luxury Announcement Bar */}
      <div className="bg-charcoal-900 text-champagne-200 text-xs py-2 px-4 border-b border-champagne-900/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-[11px] sm:text-xs">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-champagne-400 font-medium">
              <Sparkles size={12} />
              ⭐ 4.9-Star Rated Studio (70+ Verified Client Reviews)
            </span>
            <span className="hidden md:inline text-stone-500">•</span>
            <span className="hidden md:inline text-stone-300">Cary, NC</span>
          </div>

          <div className="flex items-center gap-4 text-stone-300">
            <span className="hidden lg:inline text-stone-400">By Appointment Only</span>
            <a
              href={`tel:${STUDIO_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-champagne-300 transition-colors font-medium text-white"
            >
              <Phone size={12} className="text-champagne-400" />
              <span>{STUDIO_INFO.phoneDisplay}</span>
            </a>
            <a
              href={STUDIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-champagne-300 transition-colors flex items-center gap-1"
              aria-label="Instagram"
            >
              <Instagram size={12} />
              <span className="hidden sm:inline">@lauradoanart</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-md py-3'
            : 'bg-cream-50/95 backdrop-blur-sm py-4 border-b border-stone-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Logo variant="horizontal" iconSize={44} />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-xs uppercase tracking-[0.2em] font-medium transition-colors relative py-1 ${
                      isActive
                        ? 'text-rosewood-700 font-semibold'
                        : 'text-charcoal-800 hover:text-rosewood-600'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-rosewood-500 to-champagne-500 rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-rosewood-700 to-rosewood-800 hover:from-rosewood-800 hover:to-charcoal-900 text-white text-xs uppercase tracking-widest font-semibold shadow-soft hover:shadow-luxury transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar size={14} className="text-champagne-300" />
                <span>Book An Appointment</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenBooking}
                className="sm:hidden inline-flex items-center px-3 py-1.5 rounded-full bg-rosewood-700 text-white text-[11px] font-semibold tracking-wider"
              >
                Book
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-charcoal-900 hover:bg-stone-100 transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Responsive Navigation Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-charcoal-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed top-0 right-0 w-full max-w-sm h-full bg-cream-50 shadow-2xl flex flex-col justify-between overflow-y-auto p-6 border-l border-champagne-300">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-stone-200">
                <Logo variant="horizontal" iconSize={38} />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-stone-200/60 text-charcoal-800 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="py-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-2 text-base font-serif tracking-wider transition-colors ${
                        isActive
                          ? 'text-rosewood-700 font-semibold pl-2 border-l-2 border-rosewood-600'
                          : 'text-charcoal-800 hover:text-rosewood-600'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-stone-400 font-sans">→</span>
                  </NavLink>
                ))}
              </div>

              {/* Action Button inside Drawer */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-rosewood-700 hover:bg-rosewood-800 text-white font-medium text-sm shadow-md"
                >
                  <Calendar size={16} className="text-champagne-300" />
                  <span>Book An Appointment</span>
                </button>
              </div>
            </div>

            {/* Drawer Footer with Quick Contact */}
            <div className="pt-6 border-t border-stone-200 space-y-3 text-xs text-stone-600">
              <a
                href={`tel:${STUDIO_INFO.phone}`}
                className="flex items-center gap-2 text-charcoal-900 font-medium hover:text-rosewood-700"
              >
                <Phone size={15} className="text-rosewood-600 shrink-0" />
                <span>Call or Text: {STUDIO_INFO.phoneDisplay}</span>
              </a>

              <div className="flex items-start gap-2">
                <MapPin size={15} className="text-rosewood-600 shrink-0 mt-0.5" />
                <span>{STUDIO_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <Instagram size={15} className="text-rosewood-600 shrink-0" />
                <a
                  href={STUDIO_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-medium text-charcoal-900"
                >
                  Follow {STUDIO_INFO.instagram}
                </a>
              </div>

              <p className="text-[11px] text-stone-600 pt-2 italic">
                By Appointment Only • Free on-site parking
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

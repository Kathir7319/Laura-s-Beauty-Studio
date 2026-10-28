import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Award, ShieldCheck, CheckCircle2, Clock, Car, MapPin, ArrowRight } from 'lucide-react';
import { STUDIO_INFO, AMENITIES } from '../data/studioData';
import Logo from '../components/Logo';

export default function About({ onOpenBooking }) {
  return (
    <div className="space-y-20 pb-16">
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-champagne-100/60 to-cream-50 pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-champagne-200/60">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-champagne-300 text-xs font-semibold uppercase tracking-[0.2em] text-champagne-800 shadow-xs">
            <Sparkles size={14} className="text-champagne-600" />
            <span>Meet The Artist & Studio</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-medium text-charcoal-900">
            About Laura's Beauty Studio
          </h1>
          
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto">
            A bespoke sanctuary in Cary, North Carolina where clinical precision meets restorative tranquility.
          </p>
        </div>
      </section>

      {/* Main Story & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Profile */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Laura at Laura's Beauty Studio"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xs uppercase tracking-widest text-champagne-300 font-semibold">
                    Master Artist & Founder
                  </p>
                  <p className="font-serif text-2xl font-medium">
                    Laura Doan
                  </p>
                  <p className="text-xs text-stone-300 mt-1">
                    Certified Lash Master & Head Spa Specialist • Cary, NC
                  </p>
                </div>
              </div>

              {/* Floating emblem */}
              <div className="absolute -top-4 -right-4 glass-card p-3 rounded-2xl border border-champagne-300 shadow-luxury">
                <Logo variant="icon" iconSize={54} />
              </div>
            </div>
          </div>

          {/* Text Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-rosewood-700">
              <Heart size={14} className="fill-rosewood-600 text-rosewood-600" />
              <span>Dedicated & Unhurried</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal-900 leading-tight">
              Crafting Confidence Through Precision & Care
            </h2>

            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              <p>
                Welcome to <strong>Laura's Beauty Studio</strong>. Founded with the conviction that beauty services should never feel rushed or transactional, our Cary sanctuary is built around a single guiding principle: <em>your comfort and confidence are our top priorities</em>.
              </p>
              <p>
                Here, every appointment is scheduled with generous buffer time. You receive dedicated, one-on-one attention without overlapping clients or hurried consultations. Whether crafting custom volume lash sets with signature M, C, and D curl variations, shaping your silhouette with non-invasive lipo sculpting, or melting away cranial tension in our Japanese hydrotherapy head spa, every step is executed with thoughtful intention.
              </p>
              <p>
                We believe that true beauty care enhances your natural features while honoring your personal lifestyle. With over 70+ five-star verified reviews, we are proud to be Cary's trusted destination for transformative self-care.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-champagne-200">
                <h4 className="font-semibold text-charcoal-900 text-sm flex items-center gap-2">
                  <ShieldCheck size={16} className="text-rosewood-700" />
                  Medical-Grade Cleanliness
                </h4>
                <p className="text-xs text-stone-500 mt-1">
                  Autoclave sterilization, hospital-grade sanitation, and single-use disposables for complete peace of mind.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-champagne-200">
                <h4 className="font-semibold text-charcoal-900 text-sm flex items-center gap-2">
                  <Award size={16} className="text-rosewood-700" />
                  High-Retention Formulas
                </h4>
                <p className="text-xs text-stone-500 mt-1">
                  Hypoallergenic medical cyanoacrylates matched with precision isolation to guarantee weeks of wear.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-full bg-rosewood-700 hover:bg-rosewood-800 text-white font-medium text-xs uppercase tracking-widest shadow-md transition-all"
              >
                Schedule Your Sanctuary Visit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity & Logo Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-champagne-200 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rosewood-700">
                Visual Identity
              </span>
              <h3 className="font-serif text-3xl font-medium text-charcoal-900">
                The Laura's Beauty Studio Brand Seal
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Our bespoke logo weaves together the delicate curvature of an eyelash arc, botanical renewal laurels, and the signature calligraphic "L" monogram. Rendered in champagne gold and soft rosewood, the emblem reflects our commitment to understated luxury and elevated artistry.
              </p>
              <div className="p-4 rounded-2xl bg-cream-50 border border-champagne-200/80 flex items-center gap-4">
                <Logo variant="stacked" iconSize={56} />
                <div className="text-xs text-stone-500">
                  <p className="font-semibold text-charcoal-900">Official Brand Mark</p>
                  <p>Vector SVG geometry crafted for crisp display on all retina displays & mobile screens.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-champagne-300 shadow-luxury group">
                <img
                  src="/logo-mockup.jpg"
                  alt="Laura's Beauty Studio Gold Foil Embossed Logo Mockup"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-102"
                />
              </div>
              <p className="text-[11px] text-stone-500 text-center mt-2 italic">
                Metallic gold foil embossed logo stationery for Laura's Beauty Studio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Sanctuary Amenities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cream-100/90 rounded-3xl p-8 sm:p-14 border border-champagne-200">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-champagne-700">
              Stress-Free From Arrival To Departure
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-charcoal-900">
              Thoughtful Studio Amenities
            </h2>
            <p className="text-sm text-stone-600">
              Conveniently situated in Cary, NC at 2210 Gathering Park Circle with modern accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AMENITIES.map((amenity, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-champagne-200/90 shadow-soft">
                <div className="w-12 h-12 rounded-xl bg-champagne-100 text-champagne-800 flex items-center justify-center mb-4">
                  <CheckCircle2 size={22} />
                </div>
                <h3 className="font-semibold text-charcoal-900 text-sm mb-1.5">
                  {amenity.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {amenity.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

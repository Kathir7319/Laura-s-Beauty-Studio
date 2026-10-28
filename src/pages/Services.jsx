import React, { useState } from 'react';
import { 
  Sparkles, Calendar, Clock, Check, Info, ShieldCheck, 
  ExternalLink, ChevronRight, HelpCircle, ArrowRight 
} from 'lucide-react';
import { STUDIO_INFO, DETAILED_SERVICES, CURL_GUIDE } from '../data/studioData';

export default function Services({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedForEstimate, setSelectedForEstimate] = useState(['classic-full-set']);

  const filteredServices = activeCategory === 'all'
    ? DETAILED_SERVICES
    : DETAILED_SERVICES.filter(s => s.category === activeCategory);

  const toggleServiceEstimate = (id) => {
    if (selectedForEstimate.includes(id)) {
      if (selectedForEstimate.length > 1) {
        setSelectedForEstimate(selectedForEstimate.filter(item => item !== id));
      }
    } else {
      setSelectedForEstimate([...selectedForEstimate, id]);
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-champagne-100/60 to-cream-50 pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-champagne-200/60">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-champagne-300 text-xs font-semibold uppercase tracking-[0.2em] text-champagne-800 shadow-xs">
            <Sparkles size={14} className="text-champagne-600" />
            <span>Laura's Beauty Studio Menu</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-medium text-charcoal-900">
            Services & Pricing
          </h1>
          
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto">
            Meticulously customized treatments delivered with unhurried care. All appointments are private, one-on-one sessions in Cary, NC.
          </p>

          <div className="pt-2">
            <a
              href={STUDIO_INFO.pocketSuiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-charcoal-900 hover:bg-rosewood-800 text-champagne-200 text-xs font-semibold uppercase tracking-wider shadow-sm transition-all"
            >
              <span>👉 Click Here to Book on PocketSuite</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {[
            { id: 'all', label: 'All Treatments' },
            { id: 'lashes', label: 'Premium Lash Services' },
            { id: 'body', label: 'Advanced Body Contouring' },
            { id: 'head-spa', label: 'Rejuvenating Head Spa' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-rosewood-700 text-white shadow-soft'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={service.category}
              className="bg-white rounded-3xl p-7 border border-champagne-200/90 shadow-soft hover:shadow-luxury transition-all duration-300 flex flex-col justify-between relative"
            >
              {service.badge && (
                <div className="absolute top-5 right-5">
                  <span className="px-3 py-1 rounded-full bg-rosewood-100 text-rosewood-800 text-[10px] font-semibold uppercase tracking-wider">
                    {service.badge}
                  </span>
                </div>
              )}

              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-champagne-600 block mb-1">
                  {service.category === 'lashes' ? 'Lash Artistry' : service.category === 'body' ? 'Body Sculpting' : 'Head Spa'}
                </span>

                <h3 className="font-serif text-2xl font-medium text-charcoal-900">
                  {service.name}
                </h3>
                
                <p className="text-xs text-rosewood-700 font-medium mt-0.5">
                  {service.subtitle}
                </p>

                <div className="flex items-baseline gap-3 my-4 pb-4 border-b border-stone-100">
                  <span className="font-serif text-3xl font-semibold text-charcoal-900">
                    {service.price}
                  </span>
                  <div className="flex items-center gap-1 text-stone-500 text-xs">
                    <Clock size={13} />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-5">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-900">
                    What's Included:
                  </p>
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                      <div className="w-4 h-4 rounded-full bg-champagne-100 text-champagne-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={11} />
                      </div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {service.bestFor && (
                  <div className="p-3 rounded-xl bg-cream-100/70 border border-champagne-200/50 text-[11px] text-stone-600 mb-6">
                    <span className="font-semibold text-charcoal-900">Ideal For: </span>
                    {service.bestFor}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center gap-3">
                <button
                  onClick={() => onOpenBooking(service)}
                  className="flex-1 py-3 px-4 rounded-xl bg-charcoal-900 hover:bg-rosewood-800 text-white text-xs font-semibold uppercase tracking-wider text-center transition-colors shadow-sm"
                >
                  Book This Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNICAL NOTE ON M, C & D CURLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-champagne-50 via-white to-rosewood-50 rounded-3xl p-8 sm:p-12 border border-champagne-300 shadow-soft">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-rosewood-800">
              <Sparkles size={14} />
              <span>Studio Specialization Notice</span>
            </div>
            
            <h2 className="font-serif text-2xl sm:text-4xl font-medium text-charcoal-900">
              Technical Note: High-Retention Artistry
            </h2>
            
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              We specialize in advanced high-retention techniques and custom <strong>M, C, and D curl shapes</strong>. Retention isn't just about glue — it is a precise science of natural lash isolation, temperature and humidity control, surface contact alignment, and gentle aftercare education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {CURL_GUIDE.map((curl, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-champagne-200 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-rosewood-100 text-rosewood-800 font-serif font-bold text-xl flex items-center justify-center mb-3">
                  {curl.curl.split(' ')[0]}
                </div>
                <h3 className="font-medium text-charcoal-900 text-sm">{curl.curl}</h3>
                <p className="text-xs text-rosewood-700 font-medium mt-0.5">{curl.feature}</p>
                <p className="text-xs text-stone-600 mt-2">{curl.effect}</p>
                <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-champagne-700 font-medium">
                  {curl.retention}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING POLICY & POCKETSUITE CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-charcoal-900 text-white rounded-3xl p-8 sm:p-14 border border-champagne-400/40 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-champagne-900/40 border border-champagne-400/30 text-champagne-300 text-xs font-semibold uppercase tracking-widest">
              <ShieldCheck size={14} />
              <span>Studio Booking Policy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-white">
              Appointment-Only Sanctuary
            </h2>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-light">
              To guarantee an unhurried, luxury experience for every client, all services are available <strong>by appointment only</strong>. You can browse exact current pricing, check real-time availability, and secure your spot directly through our booking portal.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={STUDIO_INFO.pocketSuiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-champagne-400 to-champagne-500 hover:from-champagne-300 hover:to-champagne-400 text-charcoal-950 font-semibold text-xs uppercase tracking-widest shadow-glow hover:scale-105 transition-all duration-300"
              >
                <span>👉 Click Here to Book on PocketSuite</span>
                <ExternalLink size={15} />
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-stone-800 hover:bg-stone-700 text-white font-medium text-xs uppercase tracking-widest border border-stone-600 transition-all duration-300"
              >
                Request Custom Consultation
              </button>
            </div>

            <p className="text-xs text-stone-400 pt-2">
              Have questions prior to booking? Call or text Laura directly at{' '}
              <a href={`tel:${STUDIO_INFO.phone}`} className="text-champagne-300 underline font-medium">
                {STUDIO_INFO.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

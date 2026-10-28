import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, Star, Calendar, ArrowRight, ShieldCheck, 
  Car, Eye, Heart, CheckCircle2, ChevronRight, Phone, 
  Maximize2, Instagram, Award, Sparkle
} from 'lucide-react';
import { STUDIO_INFO, CORE_SERVICES, TESTIMONIALS, CURL_GUIDE, AMENITIES } from '../data/studioData';
import Logo from '../components/Logo';

export default function Home({ onOpenBooking }) {
  const [activeCurlTab, setActiveCurlTab] = useState('M Curl');

  return (
    <div className="space-y-20 sm:space-y-28 overflow-hidden pb-12">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Decorative Luxury Background Gradients */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-gradient-to-tr from-rosewood-100/60 via-champagne-100/40 to-cream-200/50 rounded-full blur-3xl opacity-75" />
          <div className="absolute top-10 right-10 w-80 h-80 bg-rosewood-200/30 rounded-full blur-2xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-champagne-200/40 rounded-full blur-2xl" />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-champagne-300 shadow-sm text-xs font-semibold uppercase tracking-[0.2em] text-champagne-800 animate-fadeIn">
            <Sparkles size={14} className="text-champagne-600" />
            <span>Cary, NC • Luxury Private Studio Sanctuary</span>
          </div>

          {/* Centered Brand Seal (Stacked Emblem) */}
          <div className="flex justify-center pt-2">
            <div className="p-3 rounded-full bg-white/80 shadow-soft border border-champagne-200/60">
              <Logo variant="stacked" iconSize={72} />
            </div>
          </div>

          {/* Headline & Subheadline */}
          <div className="space-y-5 max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-charcoal-900 leading-[1.12]">
              Redefining Your <br />
              <span className="italic font-normal text-rosewood-700 font-serif">
                Natural Beauty
              </span>
            </h1>
            
            <p className="text-base sm:text-xl text-stone-600 max-w-2xl mx-auto font-normal leading-relaxed">
              Professional eyelash extensions, non-invasive body sculpting, and relaxing head spa treatments tailored just for you in Cary, NC.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-rosewood-700 hover:bg-rosewood-800 text-white font-medium text-sm uppercase tracking-wider shadow-luxury hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <Calendar size={18} className="text-champagne-300" />
              <span>Schedule Your Visit</span>
            </button>

            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/90 hover:bg-white text-charcoal-900 font-medium text-sm uppercase tracking-wider border border-champagne-300 shadow-sm hover:border-champagne-500 hover:shadow-soft transition-all duration-300"
            >
              <span>Explore Services</span>
              <ArrowRight size={16} className="text-rosewood-600" />
            </Link>
          </div>

          {/* Key Highlights Banner (3 pillars) */}
          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
            <div className="glass-card p-4 rounded-2xl flex items-center gap-3.5 border border-champagne-200/80 shadow-soft">
              <div className="w-10 h-10 rounded-full bg-champagne-100 text-champagne-700 flex items-center justify-center shrink-0">
                <Star size={18} className="fill-champagne-600 text-champagne-600" />
              </div>
              <div>
                <p className="text-xs font-semibold text-charcoal-900 uppercase tracking-wider">
                  ⭐ 4.9-Star Rated
                </p>
                <p className="text-xs text-stone-500">70+ Verified Client Reviews</p>
              </div>
            </div>

            <div className="glass-card p-4 rounded-2xl flex items-center gap-3.5 border border-champagne-200/80 shadow-soft">
              <div className="w-10 h-10 rounded-full bg-rosewood-100 text-rosewood-700 flex items-center justify-center shrink-0">
                <Sparkles size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-charcoal-900 uppercase tracking-wider">
                  ✨ High Retention
                </p>
                <p className="text-xs text-stone-500">Signature M, C & D Curl Mastery</p>
              </div>
            </div>

            <div className="glass-card p-4 rounded-2xl flex items-center gap-3.5 border border-champagne-200/80 shadow-soft">
              <div className="w-10 h-10 rounded-full bg-stone-100 text-stone-700 flex items-center justify-center shrink-0">
                <Car size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-charcoal-900 uppercase tracking-wider">
                  🚗 Hassle-Free Parking
                </p>
                <p className="text-xs text-stone-500">Free & Accessible On-Site Parking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WELCOME & INTRODUCTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white via-cream-100/70 to-champagne-50/50 rounded-3xl p-8 sm:p-12 lg:p-16 border border-champagne-200 shadow-soft relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Story Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-rosewood-700 text-xs font-semibold uppercase tracking-[0.2em]">
                <Heart size={14} className="fill-rosewood-600 text-rosewood-600" />
                <span>Our Philosophy & Promise</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal-900 leading-tight">
                Why Choose <br />
                <span className="italic text-rosewood-700 font-serif">Laura's Beauty Studio?</span>
              </h2>

              <p className="text-base text-stone-600 leading-relaxed">
                Step into a welcoming sanctuary where your comfort and confidence are our top priorities. At Laura's Beauty Studio, we combine meticulous attention to detail with premium techniques to deliver stunning, long-lasting results. Whether you are looking to enhance your gaze, sculpt your confidence, or unwind with a deeply rejuvenating scalp treatment, we provide a dedicated, unhurried experience tailored entirely to you.
              </p>

              {/* Pillars with Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-rosewood-100 text-rosewood-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={15} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-charcoal-900">Unhurried Care</h4>
                    <p className="text-xs text-stone-500">Strictly by appointment only, guaranteeing 100% undivided attention.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-rosewood-100 text-rosewood-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={15} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-charcoal-900">High-Retention Tech</h4>
                    <p className="text-xs text-stone-500">Medical-grade bonds tailored to humidity for maximum lasting power.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-rosewood-100 text-rosewood-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={15} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-charcoal-900">Clean & Wheelchair Accessible</h4>
                    <p className="text-xs text-stone-500">Full accessibility and immaculate medical-grade sanitary protocols.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-rosewood-100 text-rosewood-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={15} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-charcoal-900">Zero Downtime Body Care</h4>
                    <p className="text-xs text-stone-500">Non-invasive lipo sculpting and ultrasound firming you can rely on.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-rosewood-800 hover:text-rosewood-900"
                >
                  <span>Learn more about Laura's story</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right Visual Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                {/* Main Image Frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
                    alt="Laura's Beauty Studio Treatment Space"
                    className="w-full h-[420px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs uppercase tracking-widest text-champagne-300 font-semibold">
                      Serene Atmosphere
                    </p>
                    <p className="font-serif text-lg font-medium">
                      Private, tranquil treatment suite designed for total relaxation.
                    </p>
                  </div>
                </div>

                {/* Floating Review Badge */}
                <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-2xl border border-champagne-300 shadow-luxury max-w-[240px] hidden sm:block">
                  <div className="flex items-center gap-1 text-champagne-600 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="fill-champagne-500" />
                    ))}
                  </div>
                  <p className="text-[11px] font-medium text-charcoal-900 italic">
                    "My lash extensions last longer than anywhere else!"
                  </p>
                  <p className="text-[10px] text-stone-500 mt-1 uppercase tracking-wider font-semibold">
                    — Sarah M., Verified Client
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR CORE SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-rosewood-700 text-xs font-semibold uppercase tracking-[0.2em]">
            <Sparkles size={14} />
            <span>Mastery & Specialization</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-charcoal-900">
            Our Core Services
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Three signature treatments crafted to elevate your daily glow, sculpted confidence, and mental serenity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl overflow-hidden border border-champagne-200/80 shadow-soft hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Badge */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-charcoal-900 text-xs font-semibold uppercase tracking-wider shadow-sm">
                      {service.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs text-champagne-300 font-medium">Starts from {service.priceFrom}</span>
                    <h3 className="font-serif text-2xl font-medium text-white mt-0.5">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="border-t border-stone-100 pt-4 space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-900">
                      Highlights:
                    </p>
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-stone-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-champagne-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 sm:p-7 pt-0 flex items-center justify-between gap-3 border-t border-stone-100">
                <Link
                  to={`/services#${service.id}`}
                  className="text-xs font-semibold uppercase tracking-wider text-rosewood-800 hover:text-rosewood-900 flex items-center gap-1"
                >
                  <span>Details</span>
                  <ChevronRight size={14} />
                </Link>

                <button
                  onClick={onOpenBooking}
                  className="px-4 py-2 rounded-xl bg-charcoal-900 hover:bg-rosewood-800 text-white text-xs font-semibold uppercase tracking-wider shadow-sm transition-colors"
                >
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TECHNICAL SPOTLIGHT: CURL ARTISTRY (M, C, D CURLS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-charcoal-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-champagne-400">
              Technical Note & Specialization
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
              Signature Curl Variations
            </h2>
            <p className="text-sm text-stone-400">
              Every eye shape is uniquely beautiful. We specialize in high-retention techniques and custom M, C, and D curl variations to create your bespoke lash look.
            </p>
          </div>

          {/* Curl Selection Tabs */}
          <div className="flex justify-center gap-3 mb-8">
            {CURL_GUIDE.map((curl) => (
              <button
                key={curl.curl}
                onClick={() => setActiveCurlTab(curl.curl)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeCurlTab === curl.curl
                    ? 'bg-gradient-to-r from-champagne-400 to-champagne-500 text-charcoal-950 shadow-glow font-bold scale-105'
                    : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700'
                }`}
              >
                {curl.curl}
              </button>
            ))}
          </div>

          {/* Active Curl Detail Box */}
          {(() => {
            const current = CURL_GUIDE.find((c) => c.curl === activeCurlTab) || CURL_GUIDE[0];
            return (
              <div className="max-w-2xl mx-auto bg-stone-800/60 border border-champagne-400/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
                <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                  <div className="w-20 h-20 rounded-2xl bg-charcoal-900 border border-champagne-400/40 flex items-center justify-center shrink-0 shadow-inner">
                    <span className="font-serif text-3xl font-bold text-champagne-400">
                      {current.curl.split(' ')[0]}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-medium text-white">
                      {current.curl}: {current.feature}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-300">
                      {current.effect}
                    </p>
                    <p className="text-xs text-champagne-300 font-medium">
                      ✨ {current.retention}
                    </p>
                  </div>
                </div>
              </div>
            );
          })()}

          <div className="text-center pt-8">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rosewood-700 hover:bg-rosewood-600 text-white text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <span>Consult on Your Ideal Curl Shape</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* 5. CLIENT TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-rosewood-700 text-xs font-semibold uppercase tracking-[0.2em]">
            <Star size={14} className="fill-rosewood-600 text-rosewood-600" />
            <span>Verified Client Feedback</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-charcoal-900">
            Loved by Cary Clients
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Real stories from clients who trust Laura's Beauty Studio for their lash extensions, body sculpting, and scalp therapy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-champagne-200 shadow-soft flex flex-col justify-between card-hover"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-champagne-600">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-champagne-500" />
                  ))}
                </div>

                <p className="font-serif text-sm text-charcoal-800 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-stone-100 mt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-charcoal-900 text-xs">
                    {t.author}
                  </h4>
                  <p className="text-[10px] text-stone-500">
                    {t.service} • {t.location}
                  </p>
                </div>
                {t.verified && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. INSTAGRAM PORTFOLIO SNEAK PEEK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rosewood-700">
              Live Transformations
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-medium text-charcoal-900 mt-1">
              Follow Us on Instagram
            </h2>
          </div>
          <a
            href={STUDIO_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-champagne-300 text-charcoal-900 hover:text-rosewood-700 text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow-soft transition-all"
          >
            <Instagram size={15} className="text-rosewood-600" />
            <span>{STUDIO_INFO.instagram}</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              src: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=600&q=80",
              title: "Volume Set • Cary Studio"
            },
            {
              src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=600&q=80",
              title: "Head Spa Hydrotherapy"
            },
            {
              src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
              title: "Classic Lash Definition"
            },
            {
              src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80",
              title: "Targeted Body Sculpting"
            }
          ].map((item, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-square border border-champagne-200">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 text-center text-white">
                <div>
                  <Instagram size={20} className="mx-auto mb-1 text-champagne-300" />
                  <p className="text-[11px] font-medium">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. STUDIO AMENITIES BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cream-100 rounded-3xl p-8 sm:p-12 border border-champagne-200">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900">
              Thoughtfully Designed for Your Comfort
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              We want your visit to be entirely stress-free from the moment you arrive in Cary, NC.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AMENITIES.map((amenity, idx) => (
              <div key={idx} className="bg-white/80 p-5 rounded-2xl border border-champagne-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-rosewood-100 text-rosewood-700 flex items-center justify-center mb-3">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="font-medium text-sm text-charcoal-900">
                  {amenity.title}
                </h4>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                  {amenity.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PRE-FOOTER CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-rosewood-800 via-rosewood-900 to-charcoal-900 rounded-3xl p-8 sm:p-14 text-white text-center relative overflow-hidden shadow-2xl border border-champagne-400/30">
          {/* Subtle logo watermark in background */}
          <div className="absolute right-6 -bottom-10 opacity-10 pointer-events-none">
            <Logo variant="stacked" iconSize={240} theme="dark" />
          </div>

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne-300">
              Book Your Transformation
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-white leading-tight">
              Ready to Experience Unhurried Luxury?
            </h2>
            <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
              Appointments fill quickly due to our private, dedicated client schedule. Reserve your spot today for eyelash extensions, body contouring, or the rejuvenating Japanese head spa.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-charcoal-900 hover:bg-champagne-100 font-medium text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-all duration-300"
              >
                Book An Appointment
              </button>

              <a
                href={STUDIO_INFO.pocketSuiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-rosewood-700/80 hover:bg-rosewood-700 text-white font-medium text-xs uppercase tracking-widest border border-champagne-400/40 transition-all duration-300"
              >
                👉 Book on PocketSuite
              </a>
            </div>

            <p className="text-xs text-stone-400 pt-2">
              📍 2210 Gathering Park Circle, Cary, NC 27519 • 📞 {STUDIO_INFO.phoneDisplay}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

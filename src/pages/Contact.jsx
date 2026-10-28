import React, { useState } from 'react';
import { 
  MapPin, Phone, Instagram, Calendar, Mail, Car, 
  ShieldCheck, CheckCircle2, Clock, Send, Sparkles, Navigation 
} from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export default function Contact({ onOpenBooking }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'Lashes',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-champagne-100/60 to-cream-50 pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-champagne-200/60">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-champagne-300 text-xs font-semibold uppercase tracking-[0.2em] text-champagne-800 shadow-xs">
            <Sparkles size={14} className="text-champagne-600" />
            <span>Connect & Visit</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-medium text-charcoal-900">
            Contact & Location
          </h1>
          
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto">
            Conveniently located in Cary, NC with stress-free parking and full wheelchair accessibility.
          </p>
        </div>
      </section>

      {/* Main Grid: Details + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Studio Information & Amenities (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Card */}
            <div className="bg-white rounded-3xl p-8 border border-champagne-200/90 shadow-soft space-y-6">
              <h2 className="font-serif text-2xl font-medium text-charcoal-900 border-b border-stone-100 pb-4">
                Studio Details
              </h2>

              <div className="space-y-5 text-sm">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-champagne-100 text-champagne-700 flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal-800">
                      Studio Address
                    </h3>
                    <p className="text-stone-700 font-medium mt-0.5">
                      {STUDIO_INFO.address}
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(STUDIO_INFO.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-rosewood-700 hover:text-rosewood-900 font-semibold mt-1"
                    >
                      <Navigation size={12} />
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-rosewood-100 text-rosewood-700 flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal-800">
                      Phone / Text
                    </h3>
                    <a
                      href={`tel:${STUDIO_INFO.phone}`}
                      className="text-stone-700 hover:text-rosewood-800 font-medium mt-0.5 block"
                    >
                      {STUDIO_INFO.phoneDisplay}
                    </a>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      Call or text anytime during appointment hours.
                    </p>
                  </div>
                </div>

                {/* Socials */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center shrink-0">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal-800">
                      Instagram Portfolio
                    </h3>
                    <a
                      href={STUDIO_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rosewood-700 hover:text-rosewood-900 font-medium mt-0.5 block"
                    >
                      {STUDIO_INFO.instagram}
                    </a>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      Follow us on Instagram @lauradoanart to see our latest client transformations.
                    </p>
                  </div>
                </div>

                {/* Hours & Policy */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal-800">
                      Hours & Scheduling
                    </h3>
                    <p className="text-stone-700 font-medium mt-0.5">
                      By Appointment Only
                    </p>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      Dedicated, unhurried time reserved exclusively for every client.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3.5 rounded-xl bg-rosewood-700 hover:bg-rosewood-800 text-white text-xs font-semibold uppercase tracking-widest transition-all shadow-md"
                >
                  Book An Appointment
                </button>
              </div>
            </div>

            {/* Studio Amenities Card */}
            <div className="bg-gradient-to-br from-champagne-50 to-cream-100 rounded-3xl p-8 border border-champagne-300 space-y-5">
              <h3 className="font-serif text-xl font-medium text-charcoal-900">
                Studio Amenities
              </h3>
              <p className="text-xs text-stone-600">
                We want your visit to be entirely stress-free from the moment you arrive:
              </p>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-champagne-200">
                  <div className="w-8 h-8 rounded-lg bg-champagne-100 text-champagne-800 flex items-center justify-center shrink-0">
                    <Car size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-900">
                      Hassle-Free Parking
                    </h4>
                    <p className="text-stone-600 mt-0.5 leading-relaxed">
                      Free parking lot, free street parking, and dedicated on-site spaces are available directly outside.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-champagne-200">
                  <div className="w-8 h-8 rounded-lg bg-champagne-100 text-champagne-800 flex items-center justify-center shrink-0">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-900">
                      Full Accessibility
                    </h4>
                    <p className="text-stone-600 mt-0.5 leading-relaxed">
                      Our facility features a wheelchair-accessible entrance, parking lot, and restroom facilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-champagne-200 shadow-soft">
              
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rosewood-700">
                      Send A Message
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900 mt-1">
                      Ask Laura A Question
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Have questions about lash curls, body sculpting suitability, or head spa services? Send us a note below.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Miller"
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-stone-50/50 text-charcoal-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rosewood-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(413) 404-3584"
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-stone-50/50 text-charcoal-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rosewood-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-stone-50/50 text-charcoal-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rosewood-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-2">
                        Service of Interest
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-stone-50/50 text-charcoal-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rosewood-500 text-sm"
                      >
                        <option value="Lashes">Eyelash Extensions & Lifts (M, C, D Curls)</option>
                        <option value="Body">Advanced Body Sculpting & RF Tightening</option>
                        <option value="HeadSpa">Rejuvenating Japanese Head Spa</option>
                        <option value="Multiple">Multiple Services / Full Makeover</option>
                        <option value="Other">General Inquiries</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-2">
                      Your Message or Consultation Details *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what look or goal you have in mind, your preferred dates, or any questions about our Cary studio..."
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-stone-50/50 text-charcoal-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rosewood-500 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-charcoal-900 hover:bg-rosewood-800 text-white text-xs font-semibold uppercase tracking-widest shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={15} />
                    <span>Send Inquiry To Laura</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-charcoal-900">
                    Message Received!
                  </h3>
                  <p className="text-sm text-stone-600 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Laura will review your inquiry regarding <strong>{formData.serviceInterest}</strong> and reply shortly.
                  </p>
                  <p className="text-xs text-stone-500">
                    For faster immediate booking, you can also use our PocketSuite portal.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-charcoal-900 text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

              {/* Map Preview Container */}
              <div className="mt-8 pt-6 border-t border-stone-100">
                <div className="rounded-2xl overflow-hidden border border-stone-200 bg-cream-100 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-rosewood-100 text-rosewood-700 flex items-center justify-center shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xs text-charcoal-900">
                        Gathering Park Circle, Cary, NC
                      </h4>
                      <p className="text-[11px] text-stone-500">
                        Direct ground floor access with dedicated parking
                      </p>
                    </div>
                  </div>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(STUDIO_INFO.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-white border border-stone-300 hover:border-champagne-500 text-charcoal-900 text-xs font-semibold shrink-0 shadow-xs transition-colors"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Sparkles, ExternalLink, Phone, ShieldCheck, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { STUDIO_INFO, DETAILED_SERVICES } from '../data/studioData';

export default function BookingModal({ isOpen, onClose, preselectedService = null }) {
  const [step, setStep] = useState(1);
  const [selectedServiceId, setSelectedServiceId] = useState(preselectedService?.id || 'classic-full-set');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('morning');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const selectedService = DETAILED_SERVICES.find(s => s.id === selectedServiceId) || DETAILED_SERVICES[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C39B64', '#DD9E93', '#DFCBAA', '#B0594B']
      });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-charcoal-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-3xl bg-cream-50 text-left shadow-2xl transition-all sm:my-8 w-full max-w-xl border border-champagne-300">
          
          {/* Top Banner */}
          <div className="bg-gradient-to-r from-rosewood-700 via-rosewood-800 to-charcoal-900 text-white p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-2 text-champagne-300 text-xs tracking-widest uppercase font-semibold">
              <Sparkles size={14} />
              <span>Dedicated Sanctuary</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium mt-1 text-white">
              Schedule Your Visit
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              Private, unhurried appointments in Cary, NC
            </p>
          </div>

          <div className="p-6 sm:p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Instant PocketSuite Option Banner */}
                <div className="rounded-2xl p-4 bg-gradient-to-br from-champagne-100 to-champagne-50 border border-champagne-300 text-charcoal-900">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-champagne-700">
                        Fastest Booking
                      </p>
                      <h4 className="font-serif font-semibold text-charcoal-900 text-base">
                        Book Directly on PocketSuite
                      </h4>
                      <p className="text-xs text-stone-600 mt-0.5">
                        Browse real-time calendar availability, instant pricing & secure your slot immediately.
                      </p>
                    </div>
                    <a
                      href={STUDIO_INFO.pocketSuiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-charcoal-900 hover:bg-rosewood-800 text-champagne-200 text-xs font-semibold shadow-sm transition-all"
                    >
                      <span>Book on Portal</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="border-t border-stone-200 w-full" />
                  <span className="bg-cream-50 px-3 text-[11px] font-medium uppercase tracking-wider text-stone-600 shrink-0">
                    Or Request Appointment Below
                  </span>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-2">
                    1. Choose Service
                  </label>
                  <select
                    value={selectedServiceId}
                    onChange={(e) => setSelectedServiceId(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-rosewood-500 text-sm"
                  >
                    <optgroup label="Eyelash Artistry">
                      <option value="classic-full-set">Classic Full Set — $130 (120 mins)</option>
                      <option value="volume-full-set">Volume Full Set — $175 (150 mins)</option>
                      <option value="lash-lift-tint">Lash Lift & Tint — $95 (60 mins)</option>
                      <option value="lash-infill">Lash Refill (2-3 Weeks) — $75-$95</option>
                    </optgroup>
                    <optgroup label="Advanced Body Contouring">
                      <option value="targeted-lipo-sculpting">Targeted Lipo Sculpting — $165 (75 mins)</option>
                      <option value="rf-skin-tightening">Skin Tightening & Cellulite Smoothing — $140</option>
                    </optgroup>
                    <optgroup label="Rejuvenating Head Spa">
                      <option value="scalp-relaxation-experience">Scalp Relaxation Experience — $125 (60 mins)</option>
                      <option value="deluxe-luxury-head-spa">Deluxe Herbal Scalp & Hair Ritual — $165 (90 mins)</option>
                    </optgroup>
                  </select>
                </div>

                {/* Preferred Date & Time Window */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-2">
                      2. Preferred Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-rosewood-500 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-2">
                      3. Preferred Time
                    </label>
                    <select
                      value={selectedTimeSlot}
                      onChange={(e) => setSelectedTimeSlot(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-rosewood-500 text-sm"
                    >
                      <option value="morning">Morning (9:00 AM – 12:00 PM)</option>
                      <option value="afternoon">Afternoon (12:00 PM – 4:00 PM)</option>
                      <option value="evening">Late Afternoon (4:00 PM – 7:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-3">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800">
                    4. Your Information
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-charcoal-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-rosewood-500 text-sm"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-charcoal-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-rosewood-500 text-sm"
                    />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-charcoal-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-rosewood-500 text-sm"
                  />
                  <textarea
                    rows={2}
                    placeholder="Any lash notes, curl preference (M/C/D), or sensitivities? (Optional)"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-charcoal-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-rosewood-500 text-sm"
                  />
                </div>

                {/* Policy reminder */}
                <div className="flex items-start gap-2 text-[11px] text-stone-500 bg-rosewood-50 p-3 rounded-xl border border-rosewood-100">
                  <ShieldCheck size={16} className="text-rosewood-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>By Appointment Only:</strong> We allocate dedicated time exclusively for you. Laura will verify your appointment time and send confirmation details.
                  </span>
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 rounded-xl text-stone-600 hover:text-charcoal-900 text-sm font-medium transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-rosewood-700 hover:bg-rosewood-800 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    Confirm Booking Request
                  </button>
                </div>
              </form>
            ) : (
              /* Success Confirmation */
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-rosewood-100 text-rosewood-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="font-serif text-2xl font-semibold text-charcoal-900">
                  Appointment Request Received!
                </h4>
                <p className="text-sm text-stone-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>! Laura has received your request for <strong>{selectedService?.name}</strong>.
                </p>

                <div className="bg-white p-4 rounded-2xl border border-champagne-300 text-left max-w-md mx-auto space-y-2 text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-champagne-600" />
                    <span>Requested Date: <strong>{selectedDate || 'Upcoming available'}</strong> ({selectedTimeSlot})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-champagne-600" />
                    <span>{STUDIO_INFO.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-champagne-600" />
                    <span>Questions? Call or text: <strong>{STUDIO_INFO.phoneDisplay}</strong></span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl bg-charcoal-900 text-white text-sm font-medium hover:bg-rosewood-800 transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Sparkles, Instagram, ExternalLink, X, ZoomIn, Eye, Calendar } from 'lucide-react';
import { GALLERY_ITEMS, STUDIO_INFO } from '../data/studioData';

export default function Gallery({ onOpenBooking }) {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-champagne-100/60 to-cream-50 pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-champagne-200/60">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-champagne-300 text-xs font-semibold uppercase tracking-[0.2em] text-champagne-800 shadow-xs">
            <Sparkles size={14} className="text-champagne-600" />
            <span>Client Transformations</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-medium text-charcoal-900">
            Studio Portfolio
          </h1>
          
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto">
            Explore recent eyelash extensions, body contouring results, and restorative Japanese head spa treatments performed at our Cary studio.
          </p>

          <div className="pt-2">
            <a
              href={STUDIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-champagne-300 hover:border-champagne-500 text-charcoal-900 text-xs font-semibold uppercase tracking-wider shadow-sm transition-all"
            >
              <Instagram size={14} className="text-rosewood-600" />
              <span>Follow @lauradoanart on Instagram</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {[
            { id: 'all', label: 'All Works' },
            { id: 'lashes', label: 'Eyelash Extensions' },
            { id: 'body', label: 'Body Contouring' },
            { id: 'head-spa', label: 'Head Spa & Scalp' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                filter === cat.id
                  ? 'bg-rosewood-700 text-white shadow-soft'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden border border-champagne-200 shadow-soft hover:shadow-luxury transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="p-3 rounded-full bg-white/90 text-charcoal-900 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn size={20} />
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-semibold uppercase tracking-wider text-charcoal-900 shadow-sm">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl font-medium text-charcoal-900">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  {item.description}
                </p>
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-rosewood-700 font-semibold uppercase tracking-wider text-[10px]">
                    Cary Studio
                  </span>
                  <span className="text-stone-400 group-hover:text-charcoal-900 transition-colors flex items-center gap-1">
                    <span>View Image</span>
                    <Eye size={12} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            className="fixed inset-0 bg-charcoal-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedImage(null)}
          />

          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-champagne-300">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                aria-label="Close image preview"
              >
                <X size={20} />
              </button>

              <div className="relative aspect-[16/10] bg-black">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-rosewood-700">
                    {selectedImage.tag}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-charcoal-900 mt-0.5">
                    {selectedImage.title}
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    {selectedImage.description}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSelectedImage(null);
                    onOpenBooking();
                  }}
                  className="px-6 py-3 rounded-full bg-rosewood-700 hover:bg-rosewood-800 text-white text-xs font-semibold uppercase tracking-wider shadow-sm shrink-0"
                >
                  Book Similar Look
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

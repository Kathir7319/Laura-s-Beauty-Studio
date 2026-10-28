export const STUDIO_INFO = {
  name: "Laura's Beauty Studio",
  tagline: "Redefining Your Natural Beauty",
  subheadline: "Professional eyelash extensions, non-invasive body sculpting, and relaxing head spa treatments tailored just for you in Cary, NC.",
  phone: "413-404-3584",
  phoneDisplay: "(413) 404-3584",
  address: "2210 Gathering Park Circle, Cary, NC 27519",
  city: "Cary, NC",
  instagram: "@lauradoanart",
  instagramUrl: "https://www.instagram.com/lauradoanart",
  pocketSuiteUrl: "https://pocketsuite.io", // Direct booking portal link
  rating: "4.9",
  reviewCount: "70+",
  hours: "By Appointment Only",
  hoursNote: "All services are scheduled by appointment only to guarantee an unhurried, private, and luxury experience for every client.",
  parking: "Free parking lot, free street parking, and dedicated on-site spaces available directly in front of the studio.",
  accessibility: "Fully wheelchair-accessible entrance, parking lot, and restroom facilities.",
  copyrightYear: 2026,
};

export const CORE_SERVICES = [
  {
    id: "lashes",
    title: "Eyelash Artistry",
    shortDesc: "Enhance your eyes with customized, high-retention eyelash extensions. From natural enhancements to bold drama, customized to your face and eye shape.",
    category: "Lashes",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=800&q=80",
    features: [
      "Classic, Hybrid & Volume Full Sets",
      "Signature M, C, and D Curl Variations",
      "High-Retention Medical-Grade Adhesives",
      "Lash Lift & Deep Nourishing Keratin Tint"
    ],
    priceFrom: "$120",
    duration: "90 - 150 mins",
    popular: true,
  },
  {
    id: "body-sculpting",
    title: "Advanced Body Contouring",
    shortDesc: "Achieve your personal wellness goals with advanced, non-invasive body contouring. Targeted lipo sculpting designed to shape your silhouette safely.",
    category: "Body",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    features: [
      "Targeted Lipo Sculpting Technology",
      "Ultrasonic Fat Cavitation & RF Skin Tightening",
      "Zero Downtime & Non-Invasive Procedures",
      "Customized Multi-Session Treatment Plans"
    ],
    priceFrom: "$150",
    duration: "60 - 90 mins",
    popular: false,
  },
  {
    id: "head-spa",
    title: "Rejuvenating Head Spa",
    shortDesc: "Melt away stress with our professional Japanese head spa and scalp treatments. Designed to promote scalp health, stimulate hair follicles, and provide deep relaxation.",
    category: "Head Spa",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
    features: [
      "Deep Scalp Micro-Exfoliation & Cleansing",
      "Continuous Warm Waterfall Halo Therapy",
      "Acupressure Neck & Shoulder Tension Relief",
      "Botanical Scalp Mask & High-Frequency Infusion"
    ],
    priceFrom: "$110",
    duration: "60 - 75 mins",
    popular: true,
  }
];

export const DETAILED_SERVICES = [
  // Eyelash Services
  {
    id: "classic-full-set",
    category: "lashes",
    name: "Classic Full Set",
    subtitle: "The Timeless Natural Look",
    price: "$130",
    duration: "120 mins",
    description: "Perfect for a clean, natural mascara-like enhancement. One premium extension is meticulously isolated and adhered to each of your healthy natural lashes.",
    details: [
      "1:1 individual eyelash extension application",
      "Custom curl styling (M, C, or D curl shapes)",
      "High-retention bond lasting 3 to 5 weeks between infills",
      "Complimentary lash cleanser starter kit"
    ],
    bestFor: "First-time lash clients, natural makeup lovers, everyday elegance",
  },
  {
    id: "volume-full-set",
    category: "lashes",
    name: "Volume Full Set",
    subtitle: "Fluffy, Full & Dimensional Glamour",
    price: "$175",
    duration: "150 mins",
    description: "Fuller, fluffier, and more dramatic lashes created by handcrafted lightweight fans applied to each natural lash for luxurious depth without weight.",
    details: [
      "Custom handmade 3D-6D featherlight volume fans",
      "Tailored styling: Doll Eye, Cat Eye, or Wispy Kim K effect",
      "Exceptional coverage for sparse or fine natural lashes",
      "Ultra-soft faux mink fibers with deep matte finish"
    ],
    bestFor: "Those wanting fullness, drama, photo-ready beauty, or camouflage for sparser lashes",
    badge: "Most Requested"
  },
  {
    id: "lash-lift-tint",
    category: "lashes",
    name: "Lash Lift & Tint",
    subtitle: "Low Maintenance Natural Curl & Color",
    price: "$95",
    duration: "60 mins",
    description: "Boosts and darkens your natural lashes from root to tip. Gives the appearance of longer, lifted lashes that open up your eyes without daily curling.",
    details: [
      "Gentle keratin-infused lifting solution",
      "Deep black or dark brown conditioning tint",
      "Results last 6 to 8 weeks with zero daily maintenance",
      "Safe for swimming, working out, and mascara wear after 24 hrs"
    ],
    bestFor: "Athletes, low-maintenance lifestyles, clients taking a break from extensions",
  },
  {
    id: "lash-infill",
    category: "lashes",
    name: "High-Retention Lash Refill (2-3 Weeks)",
    subtitle: "Maintain Your Flawless Fullness",
    price: "$75 - $95",
    duration: "60 - 75 mins",
    description: "We gently remove outgrown extensions, assess lash health, and replace new growth to restore your full, seamless look.",
    details: [
      "Cleansing lash foam bath",
      "Removal of twisted or outgrown extensions",
      "Fresh fan placement up to 100% full coverage",
      "Nano-mist bonding curing treatment"
    ],
    bestFor: "Existing clients maintaining their Classic or Volume sets every 2 to 3 weeks",
  },

  // Body Contouring Services
  {
    id: "targeted-lipo-sculpting",
    category: "body",
    name: "Targeted Lipo Sculpting",
    subtitle: "Non-Invasive Fat Reduction & Silhouette Shaping",
    price: "$165 / session",
    duration: "75 mins",
    description: "Non-invasive fat reduction and body shaping utilizing advanced ultrasound cavitation, laser lipo pads, and radiofrequency to break down stubborn fat cells safely with zero downtime.",
    details: [
      "Focus areas: Abdomen, Love Handles, Thighs, Upper Arms, or Back",
      "Ultrasound cavitation breaks down localized subcutaneous fat",
      "Multipolar RF promotes collagen synthesis and skin tightening",
      "Zero recovery time – resume your day immediately",
      "Package discounts available (3, 6, and 9 sessions)"
    ],
    bestFor: "Individuals near their target weight looking to tone stubborn areas and tighten skin",
    badge: "Client Favorite"
  },
  {
    id: "rf-skin-tightening",
    category: "body",
    name: "Skin Tightening & Cellulite Smoothing",
    subtitle: "Collagen Induction & Dermal Firming",
    price: "$140 / session",
    duration: "60 mins",
    description: "Advanced thermal RF technology stimulates deep dermal collagen regeneration to smooth skin laxity, reduce cellulite dimpling, and restore skin firmness.",
    details: [
      "Thermal energy reaches deep dermis without epidermal burns",
      "Noticeable firming and smoothing over sequential sessions",
      "Increases lymphatic drainage and local microcirculation",
      "Comfortable, warm sensation comparable to hot stone massage"
    ],
    bestFor: "Post-weight loss skin laxity, post-pregnancy firming, thigh/glute smoothing",
  },

  // Head Spa Services
  {
    id: "scalp-relaxation-experience",
    category: "head-spa",
    name: "Scalp Relaxation Experience",
    subtitle: "Deep Cleansing, Head Massage & Stress Relief",
    price: "$125",
    duration: "60 mins",
    description: "Deep cleansing, head massage, and stress relief. Melt away stress with our professional Japanese-inspired head spa and scalp treatments designed to purify the scalp and induce deep mindfulness.",
    details: [
      "Micro-camera scalp diagnostic & porosity analysis",
      "Organic botanical scalp exfoliation scrub & foaming wash",
      "Continuous circular warm waterfall hydrotherapy halo ring",
      "Acupressure massage targeting cranial stress points",
      "Blow dry rough-dry finish"
    ],
    bestFor: "Chronic stress, tension headaches, dry/itchy scalp, hair thinning, pure relaxation",
    badge: "Ultimate Bliss"
  },
  {
    id: "deluxe-luxury-head-spa",
    category: "head-spa",
    name: "Deluxe Herbal Scalp & Hair Ritual",
    subtitle: "Comprehensive Scalp Therapy + Neck & Shoulder Reflexology",
    price: "$165",
    duration: "90 mins",
    description: "An extended, immersive scalp sanctuary ritual featuring heated organic herbal steam, deep hair shaft repair, high-frequency stimulation, and soothing upper body tension relief.",
    details: [
      "Includes all features of the Scalp Relaxation Experience",
      "High-frequency scalp therapy to stimulate hair follicle circulation",
      "Warm herbal steam bath with bespoke aromatherapy oils",
      "Decollete, neck, and shoulder pressure point massage",
      "Silk protein deep conditioning hair mask"
    ],
    bestFor: "Anyone needing deep mental reset, self-care gifting, and intensive hair renewal",
  }
];

export const CURL_GUIDE = [
  {
    curl: "M Curl",
    feature: "Straight base with sharp upward lift",
    effect: "Dramatic eye-opening effect, ideal for hooded eyes or downward-pointing natural lashes.",
    retention: "Extremely high retention due to flat base surface contact."
  },
  {
    curl: "C Curl",
    feature: "Soft, natural curvature",
    effect: "The universal classic curl that resembles eyelash curler enhancement.",
    retention: "Super versatile, blends effortlessly with average natural lash curls."
  },
  {
    curl: "D Curl",
    feature: "Deep, dramatic circular curve",
    effect: "Doll-eye look with high visibility from the front, creates vibrant, open eyes.",
    retention: "Stunning lift that makes smaller eyes pop beautifully."
  }
];

export const TESTIMONIALS = [
  {
    quote: "Laura's attention to detail is unmatched! My lash extensions last longer than anywhere else I've been, and the studio is incredibly clean and welcoming.",
    author: "Sarah M.",
    location: "Cary, NC",
    service: "Volume Full Set (D Curl)",
    rating: 5,
    verified: true,
  },
  {
    quote: "The head spa treatment was pure heaven. I left feeling completely refreshed and stress-free. Highly recommend!",
    author: "Jessica T.",
    location: "Apex, NC",
    service: "Scalp Relaxation Experience",
    rating: 5,
    verified: true,
  },
  {
    quote: "The targeted lipo sculpting sessions have truly transformed my confidence. Laura is so knowledgeable, gentle, and explains every step. Plus, the studio parking is super easy!",
    author: "Elena R.",
    location: "Morrisville, NC",
    service: "Targeted Lipo Sculpting",
    rating: 5,
    verified: true,
  },
  {
    quote: "I've been going to Laura for over a year for my lashes and recently tried her head spa. Both are 10/10 luxury. She never rushes you, and you get her 100% undivided attention.",
    author: "Amanda K.",
    location: "Raleigh, NC",
    service: "Classic Full Set & Head Spa",
    rating: 5,
    verified: true,
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Wispy Volume Lash Set",
    category: "lashes",
    tag: "Volume • D Curl",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=800&q=80",
    description: "Fluffy wispy volume styling with high-retention bond."
  },
  {
    id: 2,
    title: "Japanese Head Spa Waterfall Ritual",
    category: "head-spa",
    tag: "Head Spa • Hydrotherapy",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
    description: "Continuous warm water halo ring with botanical scalp exfoliation."
  },
  {
    id: 3,
    title: "Natural Classic Lash Enhancement",
    category: "lashes",
    tag: "Classic • C Curl",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
    description: "Subtle, elegant individual lash placement mimicking perfect mascara."
  },
  {
    id: 4,
    title: "Non-Invasive Body Sculpting Session",
    category: "body",
    tag: "Body Contouring • RF",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    description: "Targeted cavitation & radiofrequency session for abdomen and waistline."
  },
  {
    id: 5,
    title: "M-Curl Lift & Liner Effect",
    category: "lashes",
    tag: "M-Curl • Fox Eye",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    description: "Sharp upward angle creating an instant lifted eyeliner appearance."
  },
  {
    id: 6,
    title: "Scalp Health & Aromatherapy Steam",
    category: "head-spa",
    tag: "Scalp Therapy • Steam",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80",
    description: "Warm steam infusion with organic essential oils and scalp massage."
  }
];

export const AMENITIES = [
  {
    icon: "Car",
    title: "Hassle-Free Parking",
    desc: "Free parking lot, free street parking, and dedicated on-site spaces available directly outside."
  },
  {
    icon: "Accessibility",
    title: "Full Accessibility",
    desc: "Wheelchair-accessible entrance, parking spaces, and fully compliant restroom facilities."
  },
  {
    icon: "Clock",
    title: "Dedicated Sanctuary",
    desc: "Scheduled strictly by appointment only so you receive unhurried, private, one-on-one care."
  },
  {
    icon: "ShieldCheck",
    title: "Hospital-Grade Hygiene",
    desc: "Medical-grade sterilization, single-use disposables, and pristine sanitary standards."
  }
];

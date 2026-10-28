import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({
  variant = 'horizontal', // 'horizontal' | 'stacked' | 'icon' | 'badge'
  theme = 'light', // 'light' | 'dark'
  className = '',
  iconSize = 44,
}) {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-charcoal-900';
  const subTextColor = isDark ? 'text-champagne-300' : 'text-champagne-600';
  const mutedTextColor = isDark ? 'text-stone-400' : 'text-stone-500';

  // Standalone Icon SVG
  const IconMark = ({ size = iconSize }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-300 group-hover:scale-105 shrink-0"
    >
      <defs>
        <linearGradient id={`goldGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5DFB8" />
          <stop offset="35%" stopColor="#C39B64" />
          <stop offset="70%" stopColor="#DFCBAA" />
          <stop offset="100%" stopColor="#8F6432" />
        </linearGradient>
        <linearGradient id={`roseGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2F0" />
          <stop offset="60%" stopColor="#F4DCD7" />
          <stop offset="100%" stopColor="#EABFB7" />
        </linearGradient>
      </defs>

      {/* Outer rim */}
      <circle
        cx="100"
        cy="100"
        r="94"
        fill={isDark ? '#221F1E' : '#FFFDFD'}
        stroke={`url(#goldGrad-${variant})`}
        strokeWidth="2.5"
      />
      {/* Dashed delicate accent circle */}
      <circle
        cx="100"
        cy="100"
        r="88"
        fill="none"
        stroke={`url(#goldGrad-${variant})`}
        strokeWidth="1"
        strokeDasharray="3 3"
        opacity="0.7"
      />
      {/* Soft inner glow */}
      <circle
        cx="100"
        cy="100"
        r="84"
        fill={`url(#roseGrad-${variant})`}
        opacity={isDark ? "0.2" : "0.55"}
      />

      {/* Lash flourishes & botanical arc */}
      <path
        d="M 40 105 C 40 65 65 38 95 34 C 80 46 66 68 64 96 C 62 120 74 142 90 156 C 60 150 40 132 40 105 Z"
        fill={`url(#goldGrad-${variant})`}
        opacity="0.9"
      />
      <path
        d="M 160 105 C 160 65 135 38 105 34 C 120 46 134 68 136 96 C 138 120 126 142 110 156 C 140 150 160 132 160 105 Z"
        fill={`url(#goldGrad-${variant})`}
        opacity="0.9"
      />

      {/* Stylized lash wisps */}
      <path
        d="M 85 40 Q 95 28 100 24 Q 105 28 115 40"
        fill="none"
        stroke={`url(#goldGrad-${variant})`}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 72 48 Q 85 36 92 31"
        fill="none"
        stroke={`url(#goldGrad-${variant})`}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M 128 48 Q 115 36 108 31"
        fill="none"
        stroke={`url(#goldGrad-${variant})`}
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Sparkle Stars */}
      <path
        d="M 100 16 Q 100 22 105 22 Q 100 22 100 28 Q 100 22 95 22 Q 100 22 100 16 Z"
        fill={`url(#goldGrad-${variant})`}
      />
      <path
        d="M 100 166 Q 100 170 103 170 Q 100 170 100 174 Q 100 170 97 170 Q 100 170 100 166 Z"
        fill={`url(#goldGrad-${variant})`}
        opacity="0.7"
      />

      {/* Monogram L */}
      <path
        d="M 85 62 C 87 56 94 54 99 54 C 104 54 107 57 107 63 C 107 72 98 84 89 101 C 77 122 73 135 73 143 C 73 150 78 153 87 153 C 98 153 113 147 129 135 C 132 133 134 135 133 138 C 122 149 105 157 91 157 C 76 157 66 149 66 137 C 66 126 71 110 82 89 C 89 74 96 64 96 59 C 96 57 94 56 92 56 C 87 56 82 61 80 65 Z"
        fill={`url(#goldGrad-${variant})`}
      />
      <path
        d="M 82 108 C 96 104 116 104 128 113 C 134 118 136 124 133 129 C 130 134 124 134 119 130 C 112 124 102 121 90 123"
        fill="none"
        stroke={`url(#goldGrad-${variant})`}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );

  if (variant === 'icon') {
    return (
      <Link to="/" className={`inline-block group ${className}`} aria-label="Laura's Beauty Studio">
        <IconMark size={iconSize} />
      </Link>
    );
  }

  if (variant === 'stacked') {
    return (
      <Link
        to="/"
        className={`inline-flex flex-col items-center text-center group ${className}`}
        aria-label="Laura's Beauty Studio Home"
      >
        <IconMark size={iconSize || 64} />
        <div className="mt-3">
          <span className={`block font-serif text-2xl tracking-[0.2em] font-semibold uppercase ${textColor}`}>
            Laura's
          </span>
          <span className={`block text-xs font-semibold tracking-[0.35em] uppercase mt-0.5 ${subTextColor}`}>
            Beauty Studio
          </span>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-champagne-400 to-transparent mx-auto mt-2 opacity-70" />
          <span className={`block text-[10px] tracking-[0.25em] uppercase mt-1 ${mutedTextColor}`}>
            Cary, North Carolina
          </span>
        </div>
      </Link>
    );
  }

  // Default: Horizontal Navbar Layout
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3.5 group select-none ${className}`}
      aria-label="Laura's Beauty Studio Home"
    >
      <IconMark size={iconSize || 46} />
      <div className="flex flex-col">
        <span
          className={`font-serif text-xl sm:text-2xl tracking-[0.16em] font-medium leading-none ${textColor} transition-colors group-hover:text-champagne-600`}
        >
          LAURA'S
        </span>
        <span
          className={`text-[10px] sm:text-[11px] font-semibold tracking-[0.32em] uppercase mt-1 leading-none ${subTextColor}`}
        >
          BEAUTY STUDIO
        </span>
        <span className={`text-[8px] sm:text-[9px] tracking-[0.2em] uppercase mt-1 leading-none ${mutedTextColor} hidden sm:block`}>
          LASHES • SCULPTING • HEAD SPA
        </span>
      </div>
    </Link>
  );
}

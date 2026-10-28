/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rosewood: {
          50: '#FDF8F7',
          100: '#FAF0EE',
          200: '#F4DCD7',
          300: '#EABFB7',
          400: '#DD9E93',
          500: '#C8786B',
          600: '#B0594B',
          700: '#924437',
          800: '#793B31',
          900: '#64342C',
        },
        champagne: {
          50: '#FBF9F5',
          100: '#F7F2E9',
          200: '#ECE1CD',
          300: '#DFCBAA',
          400: '#D0B286',
          500: '#C39B64',
          600: '#B28551',
          700: '#946B42',
          800: '#7A5739',
          900: '#644731',
        },
        cream: {
          50: '#FDFBF9',
          100: '#FAF6F2',
          200: '#F4ECE4',
          300: '#ECE0D3',
        },
        charcoal: {
          800: '#221F1E',
          900: '#171514',
          950: '#0E0D0C',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        accent: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(200, 120, 107, 0.08), 0 2px 6px -2px rgba(0, 0, 0, 0.04)',
        'luxury': '0 10px 40px -10px rgba(178, 133, 81, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 25px rgba(195, 155, 100, 0.3)',
      }
    },
  },
  plugins: [],
}

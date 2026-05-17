/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#FBF5E6',
          400: '#E5C158',
          DEFAULT: '#D4AF37', // Metallic Gold
          600: '#B8962A',
          700: '#997B1E',
        },
        charcoal: {
          950: '#050505',
          900: '#0A0A0A',
          800: '#121212',
          700: '#1A1A1A',
          600: '#262626',
        },
        gray: {
          light: '#F8F9FA',
          muted: '#8B8D98',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #E5C158 0%, #D4AF37 50%, #B8962A 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(212, 175, 55, 0.2)' },
          '100%': { boxShadow: '0 0 25px rgba(212, 175, 55, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}

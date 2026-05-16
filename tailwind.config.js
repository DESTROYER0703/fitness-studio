/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: '#CCFF00',
        charcoal: {
          900: '#0A0A0A',
          800: '#1A1A1A',
          700: '#2A2A2A',
        },
        gray: {
          light: '#F5F5F5',
          muted: '#A0A0A0',
        }
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        hanken: ['"Hanken Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

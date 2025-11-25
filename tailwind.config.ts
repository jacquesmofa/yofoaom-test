import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: '#0A1A3A',
        gold: '#D4A017',
        peach: '#F6C9B0',
        cream: '#FFF8F0',
        'darkmode-bg': '#0A1A3A',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        lux: '0 10px 40px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
} satisfies Config;

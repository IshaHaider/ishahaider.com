// tailwind.config.js
import scrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables dark mode with a 'dark' class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        '7px': '7px',
      },
      fontSize: {
        'xs': ['10px'],  // Font size 12px, line height 16px
        'sm': ['11px'],  // Font size 14px, line height 20px
        'base': ['13px'], // Font size 16px, line height 24px
        'lg': ['15px'],  // Font size 18px, line height 28px
        'xl': ['20px'],  // Font size 20px, line height 32px
        '2xl': ['24px'], // Font size 24px, line height 36px
        '3xl': ['30px'], // Font size 30px, line height 42px
        '4xl': ['36px'], // Font size 36px, line height 48px
      },
    },
  },
  plugins: [
    scrollbar,
  ],
};

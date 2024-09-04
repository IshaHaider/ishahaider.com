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
    },
  },
  plugins: [
    scrollbar,
  ],
};

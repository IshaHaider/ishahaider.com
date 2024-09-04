// tailwind.config.js
import scrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
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

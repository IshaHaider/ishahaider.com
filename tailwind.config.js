// tailwind.config.js
import scrollbar from 'tailwind-scrollbar';
// import 'pure-react-carousel/dist/react-carousel.es.css';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    scrollbar,
  ],
};

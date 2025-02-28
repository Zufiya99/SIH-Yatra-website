/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#0a192f",   // Dark Navy Blue (Background)
        Secondary: "#112240", // Slightly lighter blue (For sections)
        highlight: "#FFD700", // Gold (Text highlights)
        hoverEffect: "#64ffda" // Aqua Green (Hover effects)
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        avenir: ['Avenir LT Std', 'sans-serif'], // Fallback to sans-serif
      },
    },
  },
  plugins: [],
};


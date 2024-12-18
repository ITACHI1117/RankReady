/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Euclid':['Euclid-Circular-B', 'sans-serif'],
        'Euclid_Light':['src/index.css', 'sans-serif']
      }
    },
  },
  plugins: [],
}


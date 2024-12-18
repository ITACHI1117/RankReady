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
        'Euclid_Light':['Euclid-Circular-B-Light', 'sans-serif']
      },
      gradientColorStops: {
        indigo: '#6366F1',
        teal: '#14B8A6',
      },
    },
  },
  plugins: [],
}


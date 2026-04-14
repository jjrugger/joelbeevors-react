/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#E6D5B8',
        'secondary': '#2E3A4E',
        'tertiary': '#B35A38',
        'neutral': '#E6D5B8',
      },
      fontFamily: {
        'canterbury': ['"Canterbury"', 'serif'],
        'caudex': ['"Caudex"', 'serif'],
        'bebas': ['"Bebas Neue"', 'sans-serif'],
        'mono-tech': ['"Share Tech Mono"', 'monospace'],
        'inter': ['"Inter"', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

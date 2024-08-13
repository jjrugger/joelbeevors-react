/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'goth-orange': '#FF8243',
        'light-orange': '#ffc87c',
        'dark-gray': '#191919',
      },
      fontFamily: {
        'canterbury': ['"Canterbury"', 'serif'], 
        'caudex': ['"Caudex"', 'serif'], 
      },
      fontSize: {
        'title': '98px',
        'body': '48px',
      },
      overlayShaddow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

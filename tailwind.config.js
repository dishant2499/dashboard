/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        modifiedBlack: '#0C111D',
        modifiedGrey:'#667085',
        lightgrey: '#98A2B3',
      },
    },
  },
  plugins: [],
};

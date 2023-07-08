/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'PRIMARY' : '#FF0000',
        'SECONDARY': '#39FF14',
        'BLACK': '#1E1E1E',
        'YELLOW': '#F2BD00',
        'WHITE': '#FEFEFE',
        'GRAY_300': '#EEEEEE',
        'GRAY_400': '#FFFFFF',
        'GRAY_600': '#919191',
        'ERROR': '#BB2626',
        'ATTENTION': '#F2EA27',
        'GLASS': 'rgba(255, 255, 255, 0.45)',
        'BLACKT': 'rgba(0, 0, 0, 0.75)',
        'BLUE_LINK': '#0095E1',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
});
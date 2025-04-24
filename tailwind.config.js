/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'koratech-blue': '#00C4DA', // Updated color value
        'koratech-black': '#000000',
        'koratech-white': '#FFFFFF',
        'koratech-gray-light': '#F2F2F2',
        'koratech-gray-medium': '#808080',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        'custom1': ["NEXA SCRIPT", 'cursive'],
        'custom2': ["Niveau Grotesk", 'sans-serif']
      },
      transitionDuration: {
        '5000': '5000ms',
      },

    },
  },
  plugins: [],
}
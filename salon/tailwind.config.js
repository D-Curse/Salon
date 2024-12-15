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
      boxShadow: {
        customInset: "0 -25px 0 0 #001f3f",
      },
    },
  },
  plugins: [],
}
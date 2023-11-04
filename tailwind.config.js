/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "black": "#131313"
      },
      fontFamily: {
        "Oswald": ['Oswald', 'sans-serif'],
        "Bebas-Neue": ["Bebas-Neue", 'sans-serif']
      }
    },
    
  },
  plugins: [
    require('flowbite/plugin')
]
}
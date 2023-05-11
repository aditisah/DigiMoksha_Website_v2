/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'custom-green': '#9FCC3B'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}


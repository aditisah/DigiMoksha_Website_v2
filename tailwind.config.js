/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{html,js}',
  './components/**/*.{html,js}'],
  theme: {
    fontFamily: {
      sombra: ['Sombra Variable DEMO', 'sans-serif'],
      /* Add other font families here */
    },
    extend: {
      colors: {
        'custom-green': '#9FCC3B'
      },
      fontWeight: {
        'bold': 520
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}


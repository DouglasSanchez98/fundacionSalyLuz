/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'green-one': '#1d4a4b',
        'green-two': '#31706e',
        'orange-one': '#ea8028',
        // agrega aquí los colores que necesites
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
      montserrat:['"Montserrat"','sans-serif']
    },
    
  },
  plugins: [],
}


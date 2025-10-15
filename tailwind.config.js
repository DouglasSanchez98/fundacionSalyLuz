/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'green-one': '#0f425a',
        'green-two': '#31706e',
        'orange-one': '#cf9f46',
        'white-ice': '#faf5ee',
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


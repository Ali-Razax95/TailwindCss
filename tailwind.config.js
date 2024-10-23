/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens:{
      'sm':'375px',
      'sd':'550px',
      'md':'768px',
      'lg':'1024px',

    },
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(46.35% 478.71% at 50% 62.85%, #E3E3E3 0%, #D7FDF4 73.4%)',
      },
        colors: {
          'custom-teal': '#3E8180',
          'custom-or': '#E87F3F',
          'customWhite': '#FFFFFF',
        }
      

     

    },
  },
  plugins: [],
}


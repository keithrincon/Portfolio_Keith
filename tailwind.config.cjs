/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        deepBlue: '#00162b', // Custom color with the name "deepBlue"
        customRed: '#C3093B', //Custom color with the name "customRed"
        navyShade: '#1a2e41', // Custom color with the name "navyShade"
        royalBlue: '#2a4b9a', // Custom color with the name "royalBlue"
        goldenYellow: '#fcd700', // Custom color with the name "goldenYellow"
      },
    },
  },
  plugins: [],
};

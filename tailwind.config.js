module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Home-bg': "url('../public/home-food-bg.jpg')",
      },
      colors: {
        'charcoal': '#222222',
        'creamish': '#EAF2F4',
        'pastel': '#7BEA71',
        'pastel-hover': '#4FC844',
      },
      fontFamily: {
        heading: ['Dosis', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
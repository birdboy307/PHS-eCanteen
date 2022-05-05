module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cherry-red': '#D41435',
        'apple-red': '#FF002C',
        'charcoal': '#222222',
        'creamish': '#EAF2F4',
      },
      fontFamily: {
        heading: ['Dosis', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
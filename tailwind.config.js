module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        primary: '#e84545',
        secondary: '#2b2e4a'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

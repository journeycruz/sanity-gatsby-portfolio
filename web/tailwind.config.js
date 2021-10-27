module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
          'teal': '#66bdd1',
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

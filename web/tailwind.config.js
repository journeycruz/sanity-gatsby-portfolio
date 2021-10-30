module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
          'teal': '#66bdd1',
          'teal-500': '#61B4C7',
          'teal-900': '#57A2B3',
          'gray-550': '#93A2B3'
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#191930',
      'secondary': '#31304e',
      'third': '#27253d',
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

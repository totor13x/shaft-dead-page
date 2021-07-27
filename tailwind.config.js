module.exports = {
  separator: "_",
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: theme => ({
     ...theme('colors'),
     'primary': '#5e829e',
     'secondary': '#7f7184',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

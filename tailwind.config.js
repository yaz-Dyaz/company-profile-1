/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'color-pr': '#062939',
        'color-sc': '#C9D4C5',
        'color-th': '#FCF4F0',
      },
    },
  },
  variants: {},
  plugins: [],
};

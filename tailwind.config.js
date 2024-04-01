/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/customers/*.liquid",
    "./templates/*.liquid",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

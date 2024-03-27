/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      poppins: "Poppins, sans-serif",
    },
    extend: {
      colors: {
        primary: "#020420",
      },
    },
  },
  plugins: [],
};

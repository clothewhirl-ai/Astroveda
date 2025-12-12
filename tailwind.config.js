/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        gold: "#D4AF37",
      },
      backgroundImage: {
        stars: "url('/stars.png')",
      },
    },
  },
  plugins: [],
};

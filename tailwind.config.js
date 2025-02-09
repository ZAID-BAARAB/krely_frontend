/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pregular: ["Inter", "sans-serif"],
      },
      colors: {
        g10: "#E8E8E8",
        g20: "#F6F6F6",
        g30: "#D9D9D9",
        g40: "#9D9D9D",
        g50: "#696969",
        g60: "#3F3F3F",
      },
    },
  },
  plugins: [],
};

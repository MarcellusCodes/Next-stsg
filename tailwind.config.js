/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4e54c8",
        secondary: "#8f94fb",
      },
      fontFamily: {
        primary: ["Marvel", "sans-serif"],
      },
    },
  },
  plugins: [],
};

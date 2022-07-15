/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#DADBF4",
          100: "#CBCCEF",
          200: "#ABAEE5",
          300: "#8C90DB",
          400: "#6D72D2",
          500: "#4E54C8",
          600: "#353AA9",
          700: "#272C7E",
          800: "#1A1D54",
          900: "#0D0E29",
        },
        secondary: {
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#DEDFFE",
          400: "#B6BAFC",
          500: "#8F94FB",
          600: "#5960F9",
          700: "#232DF7",
          800: "#0812DA",
          900: "#060DA4",
        },
      },
      fontFamily: {
        primary: ["Marvel", "sans-serif"],
      },
    },
  },
  plugins: [],
};

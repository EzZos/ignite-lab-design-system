/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    fontSize : {
      xs: "0.875rem",
      sm: "1rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },
    colors : {
      "black": "#000",
      "white": "#FFF",
      "transparent": "transparent",
      "gray" : {
        900: "#121214",
        800: "#202024",
        400: "#7C7C8A",
        200: "#C4C4CC",
        100: "#E1E1E6"
      },
      "cyan": {
        500: "#81D8F7",
        300: "#9BE1FB"
      },
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      }
    },
  },
  plugins: [],
};

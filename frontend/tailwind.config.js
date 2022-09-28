/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        logocontainer: "1095px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors:{
        bordercolor: "#DDDFE2"
      }
    },
  },
  plugins: [],
};

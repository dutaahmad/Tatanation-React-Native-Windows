/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        exo: "Exo2-Regular.ttf",
        "exo-bold" : "Exo2-Bold.ttf",
        "exo-semibold" : "Exo2-SemiBold.ttf",
        "exo-extrabold" : "Exo2-ExtraBold.ttf",
        "exo-italic" : "Exo2-Italic.ttf",
        "exo-bold-italic" : "Exo2-BoldItalic.ttf",
        "exo-semibold-italic" : "Exo2-SemiBoldItalic.ttf",
        "exo-extrabold-italic" : "Exo2-ExtraBoldItalic.ttf",
        "exo-light" : "Exo2-Light.ttf",
        "exo-light-italic" : "Exo2-LightItalic.ttf",
        "exo-black": "Exo2-Black.ttf"
      }
    },
  },
  plugins: [],
};
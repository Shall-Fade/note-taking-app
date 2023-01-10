/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "kaushan-script": "Kaushan Script",
        "source-sans-pro": "Source Sans Pro",
      },
      colors: {
        white: "#fff",
        blue: "#312EB5",
        grey: "#1C1C1C",
        black: "#181818",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

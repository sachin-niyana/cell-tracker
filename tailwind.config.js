/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "3xxl": "32px",
        "4xxl": "40px",
        "6xxl": "64px",
      },

      backgroundImage: {
        "hero-bg": "url('./assets/images/background/png/home-bg.png')",
        bluegradient:
          "linear-gradient(7.95deg, #00B5D8 -3.4%, #000080 114.66%)",
      },
      colors: {
        "dark-blue": "#03045e",
        gray: "#959595",
        "light-gray": "#fafafa",
        sky: "#00b5d8",
      },
      boxShadow: {
        cellTrackerCard: " 0px 16px 25.3px 0px #00000014",
        workCard: "0px 16px 25.3px 0px #00000014",
      },
    },
  },
  plugins: [],
};

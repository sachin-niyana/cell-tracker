/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "2xxl": "28px",
        "3xxl": "32px",
        "4xxl": "40px",
        "6xxl": "64px",
      },

      backgroundImage: {
        hero: "url('./assets/images/background/png/home-bg.png')",
        tracking: "url('./assets/images/background/png/tracking-bg.png')",
        find: "url('./assets/images/background/png/find-bg.png')",
        bluegradient:
          "linear-gradient(7.95deg, #00B5D8 -3.4%, #000080 114.66%)",
        skygradient:
          "linear-gradient(7.95deg, rgba(0, 181, 216, 0.1) -3.4%, rgba(0, 0, 128, 0.1) 114.66%);",
      },
      colors: {
        "dark-blue": "#03045e",
        gray: "#959595",
        "light-gray": "#fafafa",
        sky: "#00b5d8",
        "light-sky": "#E5F8FB",
      },
      boxShadow: {
        cellTrackerCard: " 0px 16px 25.3px 0px #00000014",
        workCard: "0px 16px 25.3px 0px #00000014",
        helpCard: "0px 0px 24.6px 0px #00000059",
      },
    },
  },
  plugins: [],
};

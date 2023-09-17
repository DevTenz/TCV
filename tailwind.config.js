/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        show: "show 5s linear infinite",
      },
      keyframes: {
        show: {
          "0%": "mt-[-270px]",
          "5%": "mt-[-180px]",
          "33%": "mt-[-180px]",
          "38%": "mt-[-90px]",
          "66%": "mt-[-90px]",
          "71%": "mt-[0px]",
          "99.99%": "mt-[0px]",
          "100%": "mt-[-270px]",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/views/**/*.pug", "./src/components/**/*.pug"],
  theme: {
    extend: {
      width: {
        128: '32rem'
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["corporate"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};

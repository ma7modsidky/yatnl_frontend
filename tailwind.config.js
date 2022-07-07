/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#f79cdf",
        secondary: "#dd4523",
        bubbleGum: "#ff77e9",
        SS: "#ed217c",
      },
    },
  },
  plugins: [require("flowbite/plugin", "tailwindcss/forms")],
};

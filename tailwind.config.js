/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*/*.{js,jsx,ts,tsx}",
    "./src/**/*/*/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(253, 186, 140)",
        secondary: "#dd4523",
        bubbleGum: "#ff77e9",
        SS: "#ed217c",
      },
    },
  },
  plugins: [require("flowbite/plugin", "tailwindcss/forms")],
};

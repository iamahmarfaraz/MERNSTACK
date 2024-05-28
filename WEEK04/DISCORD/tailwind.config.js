/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
      },
      boxShadow: {
        'black': '0 4px 6px rgba(0, 0, 0, 1)',
        'black-md': '0 6px 10px rgba(0, 0, 0, 1)',
        'black-lg': '0 10px 20px rgba(0, 0, 0, 1)',
      },
      colors: {
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
      },},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        portGreen: "#07fb6b"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      }
    },
  },
  plugins: [],
}


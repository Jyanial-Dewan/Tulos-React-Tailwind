/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '86%': '86%'
      }
    },
    fontFamily:{
      special: ["Bebas Neue", "sans-serif"]
    }
  },
  plugins: [],
}

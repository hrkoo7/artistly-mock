/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f0f5ff",
          100: "#d6e4ff",
          200: "#adc8ff",
          300: "#84a9ff",
          400: "#6690ff",
          500: "#3366ff",  // primary
          600: "#274bdb",
          700: "#1a34b8",
          800: "#102694",
          900: "#091a7a"
        },
        accent: {
          100: "#ffe7ba",
          200: "#ffd591",
          300: "#ffc069",
          400: "#ffa940",
          500: "#fa8c16",
        }
      }
    }
  },
  plugins: [],
}

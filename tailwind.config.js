/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "color-bg": "#1f1f38",
      "color-bg-variant": "#2c2c62",
      "color-primary": "#4bd5ff",
      "color-primary-variant": "rgba(77, 181, 255, 0.4)",
      "color-light": "rgba(255, 255, 255, 0.6)",
      "color-white": "#fff",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

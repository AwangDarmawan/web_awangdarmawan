/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      space: ["Space Grotesk", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      netflix: ['"Bebas Neue"', "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],

},
      animation: {
        
        "spin-slow": "spin 3s linear infinite",
        wave: "wave 1.5s ease-in-out infinite",
      },

      keyframes: {
       

        blink: {
          "50%": {
            borderColor: "transparent",
          },
        },

        wave: {
          "0%,100%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(14deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
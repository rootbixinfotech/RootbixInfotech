/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif', "Arimo", "sans-serif"],
      },
      colors: {
        primary: {
          default: '#42A5F5',
        },
      },
      backgroundImage: {
        bg1: "url('/src/assets/bg1.jpg')",
        bg2: "url('/src/assets/bg2.jpg')",
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}


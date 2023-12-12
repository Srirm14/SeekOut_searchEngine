/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      colors:{
        "dark-800":"#25282C",
        "grey-200":"373737",
        "tealGreen-600":"50C3BC",
      }
    },
  },
  plugins: [],
};

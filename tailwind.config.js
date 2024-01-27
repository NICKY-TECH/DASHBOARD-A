/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        Lato: ["Lato"],
      },
      colors: {
        "bg-lightmode": "#fafafa",
        "border": "#A3A3A3",
        "hover-effect":"#8847",
        "bell-border":"#e5e5e5",
        "neutral":"#737373",
        "body-dark":"#212122",
        "element-dark":"#040200"
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

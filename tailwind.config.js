/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "tr-hover-bg": "rgba(77,101,147,.075)",
      },
      screens: {
        xsm: "420px",
      },
      boxShadow: {
        "shadow-1": "0 .125rem .25rem rgba(0,0,0,.075)",
        "shadow-2": "0 8px 16px rgba(134,154,192,.45)",
      },
    },
  },
  plugins: [],
};

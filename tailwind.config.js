module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rose: "#ff1d58",
        whiteFade: "#f9f9f9",
        blackFade: "#292929",
        navBg: "#06181f",
        coffe: "#442814",
      },
      fontFamily: {
        poppins: ["Poppins"],
        nunito: ["Nunito"],
        cursive: ["Hachi Maru Pop"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

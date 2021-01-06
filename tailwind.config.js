module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        kumbh: ["Kumbh", "sans-serif"],
      },
      colors: {
        gray: {
          100: "#f4f6f8",
          200: "#9daec2",
          300: "#6e8098",
        },
        violet: {
          100: "#939bf4",
          200: "#9e7f66",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

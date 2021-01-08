module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        kumbh: ["Kumbh Sans"],
      },
      colors: {
        gray: {
          100: "#f4f6f8",
          200: "#9daec2",
          300: "#6e8098",
        },
        violet: {
          100: "#939bf4",
          200: "#5964E0",
        },
      },
      backgroundImage: (theme) => ({
        "hero-pattern-mobile": "url('/assets/mobile/bg-pattern-header.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

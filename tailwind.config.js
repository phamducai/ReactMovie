// /** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],

  theme: {
    extend: {
      textShadow: {
        md: "2px 2px 4px rgb(0 0 0 / 45%);",
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
      },
    },
  },

  plugins: [],
  corePlugins: {
    preflight: false,
  },
  fontFamily: {},
};

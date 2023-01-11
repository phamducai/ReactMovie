/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "bg-btn": "rgba(246, 246, 246, 0.5)",
      },
      height: {
        200: "50rem",
        99: "49rem",
        120: "150rem",
        100: "100rem",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

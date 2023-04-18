/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        taskH3: "#c8781a",
        taskP: "#444",
        taskButton: "#fecc91",
        pill: "#ccc",
      },
    },
  },
  plugins: [],
};

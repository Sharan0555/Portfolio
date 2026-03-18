/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "ui-serif", "Georgia", "serif"],
        body: ["Figtree", "ui-sans-serif", "system-ui"],
      },
      colors: {
        ink: "#4b3628",
        paper: "#ffffff",
        card: "#f9f4ee",
        warm: {
          50: "#f7f3ee",
          100: "#efe6db",
          200: "#dbcdbd",
          300: "#c2ad98",
          400: "#9d846f",
          500: "#7a604a",
          600: "#634b39",
          700: "#4b3628",
        },
        navy: {
          100: "#f2e6da",
          500: "#4b3628",
          600: "#3c2a1f",
        },
        sage: {
          100: "#f1e6d9",
          500: "#b08964",
          600: "#9a6f4f",
        },
        amber: {
          100: "#f3e3d1",
          200: "#e7cfb6",
          400: "#d19b63",
          500: "#c48a52",
          600: "#b0743f",
        },
      },
      boxShadow: {
        card: "0 10px 28px rgba(75, 54, 40, 0.08)",
        "card-hover": "0 16px 36px rgba(75, 54, 40, 0.12)",
      },
    },
  },
  plugins: [],
};

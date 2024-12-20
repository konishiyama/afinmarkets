/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        google: "0 1px 6px 0 rgba(32, 33, 36, 0.278)",
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"],
      },
      colors: {
        base: "#222d2d",
        blueGray: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
        },
        boxShadow: "#2337504d",
        purple: "#873eff",
        palePurple: "#b381ff",
        bgPurple: "#F0F3FD",
        bgGray: "#F8F9FD",
      },
    },
  },
  plugins: [],
};

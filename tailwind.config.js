/** @type {import('tailwindcss').Config} */
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
        base: "#202124",
        light: "#5f6368ff",
        "indigo-shade": "#4B0082",
      },
      placeholderColor: {
        base: "#5f6368ff",
        red: "#EF4444",
      },
    },
  },
  plugins: [],
};

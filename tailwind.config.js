const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontSize: {
        default: ["16px", { lineHeight: "22px" }],
        xl: ["22px", { lineHeight: "32px" }],
      },
      colors: {
        amberOrange: "#FF9F0D",
        goldenBrown: "#AF872F",
        sandstone: "#BC9A6C",
        warmWhite: "#EDEAE3",
        mossGray: "#999966",
        romance: "#FAF7F2",
        white: "#FFFFFF",
        black: "#0D0D0D",
        darkLiver: "#4F4F4F",
        darkCharcoal: "#333333",
        oldSilver: "#828282",
        gainsboro: "#e0e0e0",
      },
      backgroundImage: {},
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        sans: ["Helvetica", "Arial", "sans-serif"],
        vibes: ["Great Vibes", "cursive"],
      },
    },
    screens: {
      mini: "520px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        sm: "20px",
        lg: "40px",
        xl: "60px",
      },
    },
  },
  plugins: [flowbite.plugin()],
};

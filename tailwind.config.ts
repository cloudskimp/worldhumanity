import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#20303C",
        ocean: {
          DEFAULT: "#0F4C5C",
          dark: "#0A3947",
          tint: "#E7F0F2",
        },
        marigold: {
          DEFAULT: "#E8A33D",
          soft: "#FBEED6",
        },
        heart: {
          DEFAULT: "#C43E3E",
          soft: "#F9E9E9",
        },
        paper: "#FAF8F3",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;

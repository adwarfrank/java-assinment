import type { Config } from "tailwindcss";

// Note: Tailwind CSS v4 primarily uses CSS-driven config via @theme.
// This file exists for tooling visibility and future extension.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./styles/**/*.{css}", "./lib/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF8000",
          blue: "#0057B8",
          white: "#FFFFFF",
          ink: "#0A1A33",
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(255,128,0,0.35)",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;

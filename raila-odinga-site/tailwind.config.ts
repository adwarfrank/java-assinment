import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./styles/**/*.{css}", "./public/**/*.svg"],
  theme: {
    extend: {
      colors: {
        orange: "#FF8000",
        blue: "#0057B8",
        textDark: "#0A1A33",
      },
    },
  },
  plugins: [typography],
} satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#f8fafc",
        border: "#e2e8f0",
        ink: "#0f172a",
        mutedBlue: "#305d7a",
        mutedGreen: "#2f6b50",
        amber: "#b7791f",
        danger: "#b42318"
      }
    }
  },
  plugins: []
};

export default config;

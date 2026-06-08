import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#0A0A0A",
        paper: "#F7F4EF",
        bone: "#EEE7DC",
        graphite: "#2C2C2C",
        muted: "#6B665F",
        line: "#D9D1C4"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(10,10,10,0.08)",
      }
    },
  },
  plugins: [],
};

export default config;

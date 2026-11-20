import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080808",
        panel: "#111111",
        bone: "#F5F3EF",
        mute: "#999999",
        gold: "#C6A56B",
      },
      fontFamily: {
        display: ["var(--f-display)", "serif"],
        sans: ["var(--f-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

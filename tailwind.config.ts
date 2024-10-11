import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./slices/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple: "#e9defa",
        yellow: "#fbfcdb",
        light: "#f4f2ef",
        medium: "#f1eeeb",
        dark: "#344955",
      },
      fontFamily: {
        primary: ["var(--font-montserrat)"],
        secondary: ["var(--font-source-code-pro)"]
      }
    },
  },
  plugins: [],
};
export default config;

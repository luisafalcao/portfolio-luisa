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
        purple: "var(--purple)",
        lightPurple: "var(--light-purple)",
        yellow: "var(--yellow)",
        light: "var(--light)",
        medium: "var(--medium)",
        dark: "var(--dark)",
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

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary) / <alpha-value>)",
        "primary-emphasis": "rgb(var(--primary-emphasis) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        "secondary-emphasis": "rgb(var(--secondary-emphasis) / <alpha-value>)",
      },
      backgroundColor: {
        primary: "rgb(var(--primary) / <alpha-value>)",
        "primary-emphasis": "rgb(var(--primary-emphasis) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        "secondary-emphasis": "rgb(var(--secondary-emphasis) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;

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
        "black": "#111111",
        "white": "#eeeeee",
        "light": "#bbbbbb",
        "dark": "#333333",
        "highlight": "#6c50a3",
      },
    },
  },
  plugins: [],
};
export default config;

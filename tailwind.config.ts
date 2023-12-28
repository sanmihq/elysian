import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        default: "rgba(106, 106, 106, 1)",
        gold: "rgba(250, 190, 125, 1)",
        faded: "rgba(248, 248, 248, 1)",
      },
      boxShadow: {
        custom: "0 10px 15px -3px rgba(250, 190, 125, 1)",
      },
    },
  },
  plugins: [],
};
export default config;

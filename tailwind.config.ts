import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryColor: "#0a0f28",
        secondaryColor: "#141a32",
        tertiaryColor: "#e5e5e5",
        primaryText: "#ffffff",
        titleText: "#fca311",
      },
    },
  },
  plugins: [],
};
export default config;

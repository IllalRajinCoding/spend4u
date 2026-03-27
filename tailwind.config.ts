import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "logo-scroll": "logo-scroll 28s linear infinite",
      },
      keyframes: {
        "logo-scroll": {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-50%,0,0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      screens: {
        tiny: "450px",
      },
    },
  },

  plugins: [],
} as Config;

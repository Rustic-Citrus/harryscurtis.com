import { type Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {}
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["nord --default"," abyss --prefersdark", "cupcake", "dracula"]
  }
} satisfies Config;

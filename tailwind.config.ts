import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f6f0f0",
        firstHeading: "#21243D",
        darkpink: "#F98585",
        buttonshadow: "#4141418A",
        myblack: "#000000",
        ptext: " #21243D",
        mywhite:"#FFFFFF",
        footerbg: "#FAF5F5",
        iconscolor: " #21243D",
        recentbg: "#F4E2E2",
        heroElipse: "#dfd8d8",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;

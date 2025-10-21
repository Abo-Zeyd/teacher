import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      display: ["group-hover"],
      fontFamily: {
        sans: ["Arial", "sans-serif"],
        Arial: ["Arial", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
        almarai: ["Almarai", "sans-serif"],
        changa: ["Changa", "sans-serif"],
        amiri: ["Amiri", "serif"],
        lateef: ["Lateef", "cursive"],
        "ibm-plex-sans-arabic": ["IBMPlexSansArabic", "sans-serif"],
        "noto-sans-arabic": ["NotoSansArabic", "sans-serif"],
      },
      colors: {
        'text': '#037353E',
        'background': '#f5f6fa',
        'primary': '#44444E',
        'secondary': '#715A5A',
        'accent': '#D3DAD9',
        muted: "#d7e6f5",

        // 'text': '#080708',
        // 'background': '#fcfcfc',
        // 'primary': '#867690',
        // 'secondary': '#bbc0b1',
        // 'accent': '#92a696',
      },
    },
  },
  plugins: [],
} satisfies Config;

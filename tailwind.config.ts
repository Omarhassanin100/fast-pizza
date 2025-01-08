import type { Config } from "tailwindcss";

export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Pizza: ["Roboto Mono", "sans-serif"],
    },
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        red: {
          50: '#fff5f5', // You can replace these values
          100: '#ffe3e3',
          200: '#ffc9c9',
          300: '#ffa8a8',
          400: '#ff8787',
          500: '#ff6b6b', // Default is #ef4444; replace with your desired value
          600: '#fa5252',
          700: '#f03e3e',
          800: '#e03131',
          900: '#c92a2a',
        },
        
      },
      height:{
        screen:'100dvh'
      }
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xs: {
          max: "550px",
        },
        xxs: {
          max: "420px",
        },
      },
      fontFamily: {
        mulish: [`var(--font-mulish)`, "manrope"],
        quicksand: [`var(--font-quicksand)`, "manrope"],
        lato: [`var(--font-lato)`, "manrope"],
        inter: [`var(--font-inter)`, "manrope"],
      },
      colors: {
        "brand-background": "#202937",
        "brand-lime": "#B5FBC4",
        "brand-peach": "#FBCEB5",
        "brand-nude": "#DCB5FB",
        "brand-blue": "#6951FF",
        "brand-orange": "#F8924A",
        "brand-green": "#B2FFAC",
        "brand-footer": "#BDCCFF",
        "brand-text": "#F9F9FB",
        "brand-accent": "#19FB05",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

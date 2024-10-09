import { Inter, Lato, Mulish, Quicksand } from "next/font/google";

export const mulish = Mulish({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  style: ["normal"],
  display: "auto",
  variable: "--font-mulish",
  preload: true,
  fallback: ["inter"],
  adjustFontFallback: true,
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
});

export const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal"],
  display: "auto",
  variable: "--font-lato",
  preload: true,
  fallback: ["inter"],
  adjustFontFallback: true,
  subsets: ["latin", "latin-ext"],
});

export const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  style: "normal",
  display: "auto",
  variable: "--font-quicksand",
  subsets: ["latin", "latin-ext", "vietnamese"],
  fallback: ["manrope"],
  preload: true,
  adjustFontFallback: true,
});

export const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  display: "auto",
  variable: "--font-inter",
  subsets: [
    "latin",
    "latin-ext",
    "vietnamese",
    "cyrillic",
    "cyrillic-ext",
    "greek-ext",
    "greek",
  ],
  fallback: ["manrope"],
  preload: true,
  adjustFontFallback: true,
});

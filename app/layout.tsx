import type { Metadata } from "next";
import "./globals.css";
import { inter, lato, mulish, quicksand } from "../font";
import Navbar from "@/components/navigations/navbar";
import Footer from "@/components/navigations/footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AnimeFreak",
  description: "my Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${mulish.className} ${quicksand.className} ${lato.className} ${inter.className} bg-brand-background pb-12`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

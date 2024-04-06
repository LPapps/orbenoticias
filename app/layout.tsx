import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./a_nav/page";
import Footer from "./aaaa_footer/page";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orbe Noticias",
  description: "by lp",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Nav />
        {children}
        </body>
    </html>
  );
}

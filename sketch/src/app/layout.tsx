import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Pricing from "./components/pricing";

const nunito = Nunito({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body className={nunito.className} style={{background:'white'}}>
        <Pricing/>
        {children}
        </body>
    </html>
    
  );
}

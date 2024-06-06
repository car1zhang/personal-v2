import type { Metadata } from "next";
import { IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const plex = IBM_Plex_Serif({ weight: ["500", "400", "300"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carl Zhang",
  description: "hi. my name is carl. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plex.className + " flex flex-col items-center justify-center bg-black text-white h-screen"}>

        {children}
      
      </body>
    </html>
  );
}

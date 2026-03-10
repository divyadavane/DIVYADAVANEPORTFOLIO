import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import Background from "@/components/Background";
import Sidebar from "@/components/Sidebar";
import CometCursor from "@/components/CometCursor";

export const metadata: Metadata = {
  title: "DIVYA DAVANE | Cosmic Portfolio",
  description: "Senior AI Developer, Full-Stack Architect & Data Analyst",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased selection:bg-white selection:text-black`}>
        <CometCursor />
        <Background />
        <Sidebar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}

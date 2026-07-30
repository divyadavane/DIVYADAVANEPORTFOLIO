import type { Metadata } from "next";
import { Space_Grotesk, Inter, Great_Vibes, Orbitron, Pinyon_Script, Rubik_Glitch, Michroma, Audiowide } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const pinyonScript = Pinyon_Script({
  variable: "--font-pinyon-script",
  weight: "400",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
});

const rubikGlitch = Rubik_Glitch({
  variable: "--font-rubik-glitch",
  weight: "400",
  subsets: ["latin"],
});

const michroma = Michroma({
  variable: "--font-michroma",
  weight: "400",
  subsets: ["latin"],
});

const audiowide = Audiowide({
  variable: "--font-audiowide",
  weight: "400",
  subsets: ["latin"],
});

import CyberneticGridShader from "@/components/ui/cybernetic-grid-shader";
import Sidebar from "@/components/Sidebar";
import BottomBar from "@/components/BottomBar";
import CometCursor from "@/components/CometCursor";

export const metadata: Metadata = {
  title: "Divya Davane | Cosmic Portfolio",
  description: "Senior AI Developer, Full-Stack Architect & Software Engineer",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Pinyon+Script&display=swap" rel="stylesheet" />
        <link href="https://db.onlinewebfonts.com/c/24e2ea8a4255869535e3168fd257684e?family=Glitch+Goblin" rel="stylesheet" type="text/css"/>
        <link href="https://db.onlinewebfonts.com/c/c57ab416834406de18c4480dbca44d12?family=valorax" rel="stylesheet" type="text/css"/>
        <link href="https://fonts.cdnfonts.com/css/combat-patriot" rel="stylesheet" type="text/css"/>
        <link href="https://fonts.cdnfonts.com/css/ethnocentric" rel="stylesheet" type="text/css"/>
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${greatVibes.variable} ${orbitron.variable} ${pinyonScript.variable} ${rubikGlitch.variable} ${michroma.variable} ${audiowide.variable} antialiased selection:bg-white selection:text-black snap-y snap-mandatory`}>
        <CometCursor />
        <CyberneticGridShader />
        <Sidebar />
        <BottomBar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}

"use client";

import { motion } from "framer-motion";
import { User, Briefcase, Award, Cpu, Home, Github, Linkedin, Sparkles } from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Home", href: "#" },
  { icon: User, label: "About", href: "#about" },
  { icon: Cpu, label: "Skills", href: "#skills" },
  { icon: Briefcase, label: "Experience", href: "#experience" },
  { icon: Award, label: "Projects", href: "#projects" },
];

export default function Sidebar() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <aside className="fixed left-0 top-0 z-[100] h-screen w-20 flex-col items-center justify-between py-8 hidden md:flex border-r border-white/10 bg-black/60 backdrop-blur-3xl">
      <div className="flex flex-col items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="font-display text-2xl font-black text-white text-glow-white brightness-150 relative"
        >
          D<span className="text-amber-500">.</span>
          <div className="absolute -top-2 -right-2 h-1 w-1 bg-white rounded-full animate-ping" />
        </motion.div>

        <nav className="flex flex-col gap-10">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHovered(item.label)}
              onMouseLeave={() => setHovered(null)}
            >
              <a href={item.href} className="text-white/40 transition-all hover:text-white hover:scale-125 block p-2 relative">
                <item.icon size={22} strokeWidth={1.5} />
                {hovered === item.label && (
                    <motion.div 
                        layoutId="nav-glow"
                        className="absolute inset-0 bg-white/10 blur-md rounded-full -z-10"
                    />
                )}
              </a>
              
              {/* Tooltip */}
              {hovered === item.label && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="absolute left-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-black shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                >
                  {item.label}
                  <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-white" />
                </motion.div>
              )}
            </div>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-10">
        <a href="https://github.com/divyadavane" target="_blank" className="text-white/30 hover:text-amber-400 transition-all hover:scale-110">
          <Github size={20} strokeWidth={1.5} />
        </a>
        <a href="https://www.linkedin.com/in/divyadavane/" target="_blank" className="text-white/30 hover:text-amber-400 transition-all hover:scale-110">
          <Linkedin size={20} strokeWidth={1.5} />
        </a>
        <Sparkles size={16} className="text-white/10 animate-pulse self-center" />
      </div>
    </aside>
  );
}

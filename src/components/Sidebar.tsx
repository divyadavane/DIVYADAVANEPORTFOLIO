"use client";

import { motion } from "framer-motion";
import { Home, User, Code2, Briefcase, Trophy, Mail, FileText, GraduationCap } from "lucide-react";
import MacOSDock from "./ui/mac-os-dock";
import { MagneticDock } from "./ui/magnetic-dock";

const navApps = [
  { 
    id: "home", 
    name: "Home", 
    href: "#",
    icon: (
      <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20">
        <Home size={32} strokeWidth={1.5} className="text-white" />
      </div>
    )
  },
  { 
    id: "about", 
    name: "About", 
    href: "#about",
    icon: (
      <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20">
        <User size={32} strokeWidth={1.5} className="text-white" />
      </div>
    )
  },
  { 
    id: "skills", 
    name: "Skills", 
    href: "#skills",
    icon: (
      <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20">
        <Code2 size={32} strokeWidth={1.5} className="text-white" />
      </div>
    )
  },
  { 
    id: "internships", 
    name: "Internships", 
    href: "#internships",
    icon: (
      <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20">
        <Briefcase size={32} strokeWidth={1.5} className="text-white" />
      </div>
    )
  },
  { 
    id: "education", 
    name: "Education", 
    href: "#education",
    icon: (
      <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20">
        <GraduationCap size={32} strokeWidth={1.5} className="text-white" />
      </div>
    )
  },
  { 
    id: "projects", 
    name: "Projects", 
    href: "#projects",
    icon: (
      <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20">
        <Trophy size={32} strokeWidth={1.5} className="text-white" />
      </div>
    )
  },
  { 
    id: "contact", 
    name: "Contact", 
    href: "#contact",
    icon: (
      <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20">
        <Mail size={32} strokeWidth={1.5} className="text-white" />
      </div>
    )
  },
  { 
    id: "resume", 
    name: "Resume", 
    href: "#resume",
    icon: (
      <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20">
        <FileText size={32} strokeWidth={1.5} className="text-white" />
      </div>
    )
  },
];

export default function Sidebar() {
  const handleAppClick = (appId: string) => {
    const app = navApps.find(a => a.id === appId);
    if (app) {
      window.location.hash = app.href;
    }
  };

  return (
    <motion.aside 
      initial={{ x: -100, opacity: 0, scale: 0.8 }}
      animate={{ 
        x: 0, 
        opacity: 1, 
        scale: 1,
      }}
      transition={{ 
        type: "spring", 
        stiffness: 120, 
        damping: 15, 
        delay: 0.5,
      }}
      // Moved even closer to the left edge as requested
      className="fixed left-4 top-1/2 -translate-y-1/2 z-[100] w-24 py-24 flex flex-col items-center justify-center hidden md:flex rounded-[3.5rem] bg-[#0c0c0c] border border-white/5 shadow-2lx"
    >
      <div className="flex flex-col items-center w-full">
        <MacOSDock 
          apps={navApps} 
          onAppClick={handleAppClick}
          orientation="vertical"
          className="bg-transparent border-none shadow-none"
        />
      </div>
    </motion.aside>
  );
}

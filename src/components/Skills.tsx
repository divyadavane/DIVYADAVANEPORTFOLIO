"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPython,
  SiGit,
  SiTensorflow,
  SiPytorch,
} from "react-icons/si";
import { FaCss3Alt, FaJava } from "react-icons/fa6";
import { TbSql } from "react-icons/tb";

const PowerBiLogo = ({ size = 40 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 1200 1600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="pbi0" x1="758" y1="0" x2="1448" y2="1507" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E6AD10" />
        <stop offset="1" stopColor="#C87E0E" />
      </linearGradient>
      <linearGradient id="pbi1" x1="525" y1="400" x2="1106" y2="1562" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F6D751" />
        <stop offset="1" stopColor="#E6AD10" />
      </linearGradient>
      <linearGradient id="pbi2" x1="200" y1="800" x2="520" y2="1582" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F9E589" />
        <stop offset="1" stopColor="#F6D751" />
      </linearGradient>
    </defs>
    <g transform="translate(-200)">
      <path
        d="m 1400,66.75 v 1466.5 c 0,36.86 -29.89,66.75 -66.75,66.75 H 916.75 C 879.885,1600 850,1570.11 850,1533.25 V 66.75 C 850,29.885 879.885,0 916.75,0 h 416.5 c 36.87,0 66.75,29.8849 66.75,66.75 z"
        fill="url(#pbi0)"
      />
      <path
        d="M 1075,466.667 V 1600 H 525 V 466.667 C 525,429.848 554.848,400 591.667,400 h 416.663 c 36.82,0 66.67,29.848 66.67,66.667 z"
        fill="url(#pbi1)"
      />
      <path
        d="m 200,866.667 v 666.663 c 0,36.82 29.848,66.67 66.667,66.67 H 750 V 866.667 C 750,829.848 720.152,800 683.333,800 H 266.667 C 229.848,800 200,829.848 200,866.667 Z"
        fill="url(#pbi2)"
      />
    </g>
  </svg>
);

type Skill = {
  name: string;
  icon: React.ReactNode;
  category: string;
  color: string;
};

const allSkills: Skill[] = [
  { name: "HTML", icon: <SiHtml5 size={42} />, category: "Frontend", color: "#E34F26" },
  { name: "CSS", icon: <FaCss3Alt size={42} />, category: "Frontend", color: "#1572B6" },
  { name: "JavaScript", icon: <SiJavascript size={40} className="rounded-sm" />, category: "Language", color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript size={40} className="rounded-sm" />, category: "Language", color: "#3178C6" },
  { name: "React", icon: <SiReact size={42} />, category: "Frontend", color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs size={42} />, category: "Frontend", color: "#FFFFFF" },
  { name: "Node.js", icon: <SiNodedotjs size={42} />, category: "Backend", color: "#5FA04E" },
  { name: "Express.js", icon: <SiExpress size={42} />, category: "Backend", color: "#FFFFFF" },
  { name: "Tailwind", icon: <SiTailwindcss size={42} />, category: "Frontend", color: "#06B6D4" },
  { name: "MongoDB", icon: <SiMongodb size={42} />, category: "Database", color: "#47A248" },
  { name: "MySQL", icon: <SiMysql size={42} />, category: "Database", color: "#4479A1" },
  { name: "Python", icon: <SiPython size={42} />, category: "Language", color: "#3776AB" },
  { name: "Java", icon: <FaJava size={42} />, category: "Language", color: "#ED8B00" },
  { name: "Git", icon: <SiGit size={42} />, category: "Tools", color: "#F05032" },
  { name: "Power BI", icon: <PowerBiLogo size={40} />, category: "Analysis", color: "#F2C811" },
  { name: "TensorFlow", icon: <SiTensorflow size={42} />, category: "Intelligence", color: "#FF6F00" },
  { name: "PyTorch", icon: <SiPytorch size={42} />, category: "Intelligence", color: "#EE4C2C" },
  { name: "SQL", icon: <TbSql size={44} strokeWidth={2.2} />, category: "Database", color: "#38BDF8" },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center py-24 px-6 relative overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-20 text-center flex flex-col items-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="w-fit mx-auto"
          >
            <h2 className="font-combat text-5xl md:text-7xl text-white uppercase tracking-tighter text-glow-white mb-4 animate-pulse">
              Core Arsenal
            </h2>
          </motion.div>
          <motion.p 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-[10px] font-black uppercase tracking-[0.5em] text-white/60 mx-auto"
          >
             Intelligence / Engineering / Analysis
          </motion.p>
        </div>

        {/* The Larger Box Container with Staggered Slide reveal */}
        <motion.div
           initial={{ opacity: 0, x: -100 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ 
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1] 
           }}
           viewport={{ once: true, margin: "-100px" }}
           className="relative rounded-[3rem] border border-white/10 bg-black/40 backdrop-blur-3xl p-10 lg:p-14 shadow-[0_0_80px_rgba(255,255,255,0.05)] overflow-hidden"
        >
          {/* Background Decorative Sparkles (Zap) */}
          <div className="absolute top-0 right-0 p-8 opacity-20">
             <Zap size={100} className="text-white animate-pulse" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {allSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ 
                   delay: idx * 0.08, // One-by-one from left
                   duration: 0.8,
                   type: "spring",
                   stiffness: 400,
                   damping: 20
                }}
                className="cursor-pointer"
              >
                <HoverBorderGradient className="p-0 border-none bg-transparent h-full w-full" containerClassName="w-full h-full aspect-[0.9/1]">
                  <div className="flex flex-col items-center justify-between h-full min-h-[160px] w-full p-6 text-center group">
                    {/* Icon Section */}
                    <div 
                      className="transition-all duration-300 group-hover:scale-115 flex items-center justify-center filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                      style={{ color: skill.color }}
                    >
                       {skill.icon}
                    </div>
                    
                    {/* Title Section */}
                    <div className="space-y-3">
                      <h3 className="font-display text-xl font-black text-white uppercase tracking-tight">
                        {skill.name}
                      </h3>
                      <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 transition-colors group-hover:border-white/20 group-hover:bg-white/10">
                        <span className="text-[8px] font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverBorderGradient>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Heavy Section Background Animations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[1000px] w-[2000px] bg-purple-500/5 blur-[250px] rounded-full -z-20 animate-pulse pointer-events-none" />
    </section>
  );
}

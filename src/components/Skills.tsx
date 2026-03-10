"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  BrainCircuit, 
  Zap,
  Globe,
  Sparkles,
  Cpu,
  Layers,
  Cloud
} from "lucide-react";

const skillCategories = [
  {
    title: "Intelligence",
    icon: BrainCircuit,
    color: "text-amber-400",
    glow: "shadow-[0_0_40px_rgba(245,158,11,0.3)]",
    skills: ["TensorFlow", "PyTorch", "Computer Vision", "NLP", "LLMs"],
    anim: "rotate-6"
  },
  {
    title: "Engineering",
    icon: Code2,
    color: "text-magenta-500",
    glow: "shadow-[0_0_40px_rgba(217,70,239,0.3)]",
    skills: ["Next.js", "React", "Node.js", "TypeScript", "Tailwind"],
    anim: "-rotate-6"
  },
  {
    title: "Vortex Ops",
    icon: Database,
    color: "text-purple-400",
    glow: "shadow-[0_0_40px_rgba(124,58,237,0.3)]",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS"],
    anim: "scale-110"
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-24 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-display text-5xl font-black text-white md:text-7xl uppercase"
          >
            CORE <span className="text-mega-glow brightness-125">ARSENAL</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            className="mt-6 h-1 mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_15px_purple]" 
          />
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2, duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -20, rotateY: 10 }}
              className={`glass p-12 rounded-[3.5rem] relative overflow-hidden group border-white/5 hover:border-purple-500/50 transition-all duration-700 bg-black/40 backdrop-blur-3xl ${category.glow}`}
            >
              <div className={`absolute -right-8 -top-8 opacity-[0.03] transition-all duration-1000 group-hover:scale-150 group-hover:rotate-[30deg] ${category.color}`}>
                <category.icon size={250} />
              </div>

              <div className="mb-10 flex items-center justify-between">
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: idx * 0.5 }}
                  className={`rounded-[2rem] bg-white/5 p-6 ${category.color} border border-white/10 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 shadow-2xl`}
                >
                  <category.icon size={36} />
                </motion.div>
                <div className="flex gap-2">
                    <Sparkles size={16} className="text-purple-500 animate-pulse" />
                    <Sparkles size={12} className="text-amber-400 animate-pulse delay-700" />
                </div>
              </div>
              
              <h3 className="font-display mb-8 text-3xl font-black text-white group-hover:text-purple-400 transition-colors uppercase tracking-tight">
                {category.title}
              </h3>
              
              <ul className="space-y-5">
                {category.skills.map((skill, sIdx) => (
                  <motion.li 
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (idx * 0.1) + (sIdx * 0.05) }}
                    className="flex items-center gap-4 text-sm font-bold text-slate-400 group-hover:text-white transition-colors"
                  >
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-600 to-magenta-500 shadow-[0_0_10px_purple]" />
                    {skill}
                  </motion.li>
                ))}
              </ul>

              {/* Orbital Glow Decoration */}
              <div className="absolute -bottom-10 -left-10 h-32 w-32 bg-purple-500/10 blur-[60px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Heavy Section Background Animations */}
      <motion.div 
         animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            opacity: [0.05, 0.1, 0.05]
         }}
         transition={{ duration: 15, repeat: Infinity }}
         className="absolute top-1/2 left-0 -z-10 h-[800px] w-[800px] bg-purple-900/10 blur-[200px] rounded-full" 
      />
    </section>
  );
}

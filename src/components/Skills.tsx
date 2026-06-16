"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  BrainCircuit, 
  Cpu, 
  Layers, 
  Cloud,
  Terminal,
  Grid,
  Zap,
  Layout,
  FileCode,
  Smartphone,
  Server,
  Workflow,
  GitGraph
} from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

type Skill = {
  name: string;
  icon: any;
  category: string;
};

const allSkills: Skill[] = [
  { name: "HTML", icon: <Layout size={40} />, category: "Frontend" },
  { name: "CSS", icon: <Grid size={40} />, category: "Frontend" },
  { name: "JavaScript", icon: <FileCode size={40} />, category: "Language" },
  { name: "TypeScript", icon: <FileCode size={40} />, category: "Language" },
  { name: "React", icon: <Smartphone size={40} />, category: "Frontend" },
  { name: "Next.js", icon: <Layout size={40} />, category: "Frontend" },
  { name: "Node.js", icon: <Server size={40} />, category: "Backend" },
  { name: "Express.js", icon: <Server size={40} />, category: "Backend" },
  { name: "Tailwind", icon: <Grid size={40} />, category: "Frontend" },
  { name: "MongoDB", icon: <Cloud size={40} />, category: "Database" },
  { name: "MySQL", icon: <Database size={40} />, category: "Database" },
  { name: "Python", icon: <Terminal size={40} />, category: "Language" },
  { name: "Java", icon: <Terminal size={40} />, category: "Language" },
  { name: "Git", icon: <GitGraph size={40} />, category: "Tools" },
  { name: "Power BI", icon: <Layers size={40} />, category: "Analysis" },
  { name: "TensorFlow", icon: <Cpu size={40} />, category: "Intelligence" },
  { name: "PyTorch", icon: <Workflow size={40} />, category: "Intelligence" },
  { name: "SQL", icon: <Database size={40} />, category: "Database" },
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
                    <div className="text-white transition-transform duration-500 group-hover:scale-110 group-hover:text-magenta-500">
                       {skill.icon}
                    </div>
                    
                    {/* Title Section */}
                    <div className="space-y-3">
                      <h3 className="font-display text-xl font-black text-white uppercase tracking-tight">
                        {skill.name}
                      </h3>
                      <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
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

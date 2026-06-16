"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, FileUser, Cpu, Brain, Code } from "lucide-react";
import Image from "next/image";

export default function About() {
  const strengths = ["Neural Architectures", "Material Tracing", "RAG Systems", "Scalable Backend"];
  const badges = ["Curious", "Data-Driven", "Impact-Oriented"];

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-24 px-6 relative overflow-hidden bg-black/20">
      <div className="mx-auto max-w-5xl relative z-10">
        <motion.h2
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="font-combat text-4xl md:text-6xl text-white uppercase tracking-tight mb-12 text-glow-white"
        >
          About Me
        </motion.h2>

        <motion.div
           initial={{ opacity: 0, y: 100, scale: 0.9 }}
           whileInView={{ opacity: 1, y: 0, scale: 1 }}
           transition={{ 
              duration: 1,
              ease: [0.16, 1, 0.3, 1] 
           }}
           viewport={{ once: true, margin: "-100px" }}
           className="relative"
        >
          {/* Main Profile Card - Premium Neumorphic Dark Style */}
          <div className="rounded-[3rem] border border-white/10 bg-slate-900/40 backdrop-blur-3xl overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.05)]">
            <div className="grid lg:grid-cols-[1.2fr_2fr] h-full">
              
              {/* Profile Image & Quick Info */}
              <div className="bg-white/[0.02] p-10 flex flex-col items-center justify-center border-r border-white/5 text-center">
                <div className="relative group">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-amber-500 via-magenta-500 to-purple-600 opacity-40 blur-xl group-hover:opacity-75 transition-opacity duration-500" />
                  <div className="relative h-64 w-64 rounded-full border-2 border-white/20 overflow-hidden bg-slate-800">
                     <Image 
                        src="/images/profile.jpg" 
                        alt="Divya Davane" 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                     />
                  </div>
                  {/* Exploration Badge */}
                  <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black/80 border border-white/10 px-4 py-1.5 rounded-full whitespace-nowrap"
                  >
                    <span className="text-[9px] font-black uppercase tracking-widest text-white flex items-center gap-2">
                       <Cpu size={10} className="text-amber-500" /> Currently: AI & ML Systems
                    </span>
                  </motion.div>
                </div>

                <div className="mt-12 space-y-2">
                  <h3 className="font-display text-2xl font-black text-white uppercase tracking-tight">Divya Davane</h3>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Neural Architect | Engineering Student</p>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-2">
                  {badges.map(badge => (
                    <span key={badge} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[9px] font-bold uppercase tracking-widest text-white/60">
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-white/5 w-full space-y-3">
                   <div className="flex items-center justify-center gap-2 text-[10px] text-white/40 font-bold uppercase tracking-widest">
                      <MapPin size={12} className="text-amber-500" /> Mumbai, India
                   </div>
                   <div className="flex items-center justify-center gap-2 text-[11px] text-white/60 font-medium lowercase tracking-wide">
                      <Mail size={12} className="text-magenta-500" /> divyadavane0@gmail.com
                   </div>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-12 lg:p-16 flex flex-col justify-center space-y-12">
                <div className="space-y-6">
                   <span className="text-[10px] font-black uppercase tracking-[0.5em] text-magenta-500 flex items-center gap-3">
                      <div className="h-px w-8 bg-magenta-500" /> Core Narrative
                   </span>
                   <p className="text-xl leading-relaxed text-slate-200 font-medium tracking-tight first-letter:text-5xl first-letter:font-black first-letter:text-white first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                     I’m an AI-focused engineering student passionate about building intelligent systems and solving real-world problems through technology. I enjoy working at the intersection of data, machine learning, and scalable backend systems.
                   </p>
                   <p className="text-lg leading-relaxed text-slate-400 font-normal">
                     Driven by curiosity and continuous learning, I explore modern tools and frameworks to create impactful applications. Whether it's designing efficient architectures or crafting seamless user experiences, I aim to build solutions that are both powerful and meaningful.
                   </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                   <div className="space-y-4">
                      <h4 className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-amber-500">
                         <Brain size={14} /> Core Intelligence
                      </h4>
                      <ul className="space-y-2">
                         {["Deep Learning", "Predictive Analysis", "LLM Integration", "RAG Pipeline"].map(skill => (
                           <li key={skill} className="text-[11px] font-bold text-white/50 uppercase tracking-widest flex items-center gap-2">
                             <div className="h-1 w-1 bg-white/20 rounded-full" /> {skill}
                           </li>
                         ))}
                      </ul>
                   </div>
                   <div className="space-y-4">
                      <h4 className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-white/60">
                         <Code size={14} /> Stack Mastery
                      </h4>
                      <ul className="space-y-2">
                         {["PyTorch / TensorFlow", "Next.js / TypeScript", "FastAPI / Docker", "Supabase / PostgreSQL"].map(skill => (
                           <li key={skill} className="text-[11px] font-bold text-white/50 uppercase tracking-widest flex items-center gap-2">
                             <div className="h-1 w-1 bg-white/20 rounded-full" /> {skill}
                           </li>
                         ))}
                      </ul>
                   </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                   <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="h-10 w-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center">
                           {i === 1 && <Cpu size={18} className="text-magenta-500" />}
                           {i === 2 && <Brain size={18} className="text-amber-500" />}
                           {i === 3 && <Code size={18} className="text-white" />}
                           {i === 4 && <div className="text-[8px] font-black text-white/40">+4</div>}
                        </div>
                      ))}
                      <div className="ml-6 flex flex-col">
                        <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest leading-none">Intelligence Engine</span>
                        <span className="text-[8px] font-bold text-white/30 uppercase tracking-[0.2em] mt-1">Multi-stack execution active</span>
                      </div>
                   </div>

                   <motion.a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative px-10 py-5 overflow-hidden rounded-full bg-white text-black font-black uppercase text-[11px] tracking-[0.2em] shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all flex items-center gap-4"
                   >
                      <div className="absolute inset-x-0 bottom-0 h-1 bg-amber-500 transition-transform origin-left scale-x-0 group-hover:scale-x-100 duration-500" />
                      <FileUser size={18} className="group-hover:rotate-12 transition-transform" />
                      View Resume
                   </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Extreme Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[1400px] bg-magenta-500/5 blur-[200px] rounded-full -z-20 animate-pulse pointer-events-none" />
    </section>
  );
}

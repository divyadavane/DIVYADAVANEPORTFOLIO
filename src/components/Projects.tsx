"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Rocket, Sparkles, Smartphone, Code, Cpu, Database } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const projects = [
  {
    title: "Chronos AI",
    tagline: "THE AI OPERATING SYSTEM FOR MODERN TEAMS",
    description: "A unified workspace integrating Groq-powered AI, task orchestration, and automated document lifecycles into a single platform.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js 15", "Groq AI", "Automation"],
    link: "https://chronosworkflow.vercel.app/",
    color: "from-amber-500/20 to-magenta-500/20",
    accent: "text-amber-400"
  },
  {
    title: "Artificial Consciousness",
    tagline: "NEURAL SIMULATION ENGINE",
    description: "Experimental research project simulating neural patterns and decision-making logic in synthetic consciousness models.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tags: ["Deep Learning", "Python", "Sims"],
    link: "https://atrificial-consciouness-simulator.vercel.app/",
    color: "from-purple-500/20 to-amber-500/20",
    accent: "text-purple-400"
  },
  {
    title: "Aperio",
    tagline: "AI-POWERED RECYCLING TRACEABILITY",
    description: "Intelligent traceability platform for recycled plastic materials — track every gram from collection to dispatch with NLP-driven data entry and carbon intelligence.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "AI/NLP", "Sustainability"],
    link: "https://aperio26.vercel.app/",
    color: "from-emerald-500/20 to-cyan-500/20",
    accent: "text-emerald-400"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-2 md:px-6 relative overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="mx-auto w-full max-w-[95rem] relative z-10">
        <ContainerScroll
          titleComponent={
            <div className="mb-10 md:mb-20 flex flex-col items-center justify-center text-center relative">
              <div className="flex flex-col items-center">
                <h2 className="font-combat text-5xl md:text-7xl text-white uppercase tracking-tight mb-2 text-glow-white">
                  SELECTED WORKS
                </h2>
                <div className="mt-4 h-1 w-32 bg-gradient-to-r from-amber-500 to-magenta-500 mx-auto" />
              </div>
              <Rocket className="hidden md:block absolute right-[-50px] md:right-[-100px] top-1/2 -translate-y-1/2 opacity-20 text-amber-500 rotate-45 animate-pulse" size={100} strokeWidth={1} />
            </div>
          }
        >
          {/* Big glass background panel */}
          <div
            className="relative rounded-[3.5rem] p-10 md:p-16 lg:p-24"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.09) 100%)",
              backdropFilter: "blur(60px) saturate(200%)",
              WebkitBackdropFilter: "blur(60px) saturate(200%)",
              border: "3px solid rgba(255,255,255,0.25)",
              boxShadow: "0 30px 100px rgba(0,0,0,0.6), inset 0 3px 0 rgba(255,255,255,0.22), inset 0 -3px 0 rgba(0,0,0,0.3), 0 0 60px rgba(236,72,153,0.15), 0 0 120px rgba(139,92,246,0.12), 0 0 200px rgba(59,130,246,0.08)",
            }}
          >
          {/* Top specular edge on background glass */}
          <div className="absolute top-0 left-10 right-10 h-[2px] rounded-full pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4) 15%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.4) 85%, transparent)"
            }}
          />
          <div className="grid gap-6 md:gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: "1200px" }}>
            {projects.map((project, idx) => (

              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.85, y: 60 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                   duration: 1.1, 
                   delay: 0.3 + (idx * 0.15),
                   ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{
                  y: -18,
                  rotateX: 4,
                  rotateY: idx === 0 ? 4 : idx === 2 ? -4 : 0,
                  scale: 1.03,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="group relative flex flex-col h-full cursor-pointer"
              >
                {/* ── Card Shell ── */}
                <div
                  className="relative flex flex-col h-full rounded-[2rem] overflow-hidden transition-all duration-500"
                  style={{
                    background: "rgba(8,8,16,0.85)",
                    border: "2px solid rgba(255,255,255,0.15)",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.5), 0 0 30px rgba(236,72,153,0.08), 0 0 60px rgba(139,92,246,0.06), 0 0 100px rgba(59,130,246,0.04)",
                  }}
                >
                  {/* Radial depth glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at 50% -10%, rgba(236,72,153,0.18) 0%, rgba(139,92,246,0.12) 40%, transparent 70%)"
                    }}
                  />

                  {/* Shine sweep */}
                  <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none z-10">
                    <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] transition-transform duration-[1000ms] ease-out group-hover:translate-x-[150%]" />
                  </div>

                  {/* Bottom-edge inner shadow for depth */}
                  <div className="absolute bottom-0 inset-x-0 h-24 rounded-b-[2rem] pointer-events-none"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.45), transparent)"
                    }}
                  />

                  {/* Image section */}
                  <div className="aspect-square overflow-hidden relative flex-shrink-0">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 opacity-65"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay`} />
                    {/* Glass overlay on image */}
                    <div className="absolute inset-0"
                      style={{
                        background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(5,5,15,0.7) 100%)"
                      }}
                    />
                    <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full border border-white/15"
                      style={{
                        background: "rgba(0,0,0,0.45)",
                        backdropFilter: "blur(10px)"
                      }}
                    >
                      <Sparkles size={10} className="text-amber-400" />
                      <span className="text-[8px] font-black text-white/80 tracking-tighter uppercase">Featured</span>
                    </div>
                    {project.tags.includes("React Native") && (
                      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/40"
                        style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(10px)" }}
                      >
                        <Smartphone size={10} className="text-emerald-400" />
                        <span className="text-[8px] font-black text-emerald-400 tracking-tighter uppercase">Mobile App</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-9 flex flex-col flex-grow relative z-10">
                    <span className={`text-[11px] font-black tracking-widest uppercase mb-3 ${project.accent}`}>
                      {project.tagline}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-glow-white transition-all duration-500">
                      {project.title}
                    </h3>
                    <p className="mb-8 text-sm md:text-base leading-relaxed font-medium"
                      style={{ color: "rgba(148,163,184,0.85)" }}
                    >
                      {project.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex gap-3 flex-wrap">
                        {project.tags.map(tag => (
                          <span
                            key={tag}
                            className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full transition-colors duration-300"
                            style={{
                              background: "rgba(255,255,255,0.06)",
                              border: "1px solid rgba(255,255,255,0.1)",
                              color: "rgba(255,255,255,0.45)"
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                        <a href={project.link} target="_blank" className="p-2 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 group/link">
                          <ExternalLink size={16} className="text-white/40 group-hover/link:text-white transition-colors duration-300" />
                        </a>
                    </div>
                  </div>
                </div>

                {/* 3D drop shadow layer beneath the card */}
                <div
                  className="absolute inset-x-4 -bottom-4 h-8 rounded-[2rem] opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-xl pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, #ec4899, #a855f7, #3b82f6)",
                    transform: "translateZ(-10px) scaleX(0.88)"
                  }}
                />
              </motion.div>
            ))}
          </div>
          </div>
        </ContainerScroll>
      </div>
      
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-purple-500/5 blur-[180px] rounded-full" />
      <div className="absolute top-1/3 left-1/4 -z-10 h-[400px] w-[400px] bg-pink-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-[400px] w-[400px] bg-blue-500/5 blur-[120px] rounded-full" />
    </section>
  );
}

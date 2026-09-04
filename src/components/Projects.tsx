"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";

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
  {
    title: "Cuely",
    tagline: "DIGITAL QUEUE MANAGEMENT OS",
    description: "Transforms physical wait times into seamless digital experiences with live virtual tokens, real-time alerts, and predictive wait estimation.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Queue OS", "Real-Time"],
    link: "https://cuely-digital-queue-management-app.vercel.app/",
    color: "from-blue-500/20 to-cyan-500/20",
    accent: "text-cyan-400"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="mx-auto w-full max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="mb-10 md:mb-14 flex flex-col items-center justify-center text-center relative">
          <div className="flex flex-col items-center">
            <span className="text-xs font-black tracking-widest text-amber-400 uppercase mb-2 flex items-center gap-1.5 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              <Sparkles size={12} className="text-amber-400" />
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="font-combat text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight mb-2 text-glow-white">
              SELECTED WORKS
            </h2>
            <div className="mt-2 h-1 w-24 bg-gradient-to-r from-amber-500 to-magenta-500 mx-auto rounded-full" />
          </div>
        </div>

        {/* Compact Glass Container */}
        <div
          className="relative rounded-3xl p-5 md:p-8 lg:p-10"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.06) 100%)",
            backdropFilter: "blur(40px) saturate(180%)",
            WebkitBackdropFilter: "blur(40px) saturate(180%)",
            border: "1.5px solid rgba(255,255,255,0.18)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5), inset 0 2px 0 rgba(255,255,255,0.15), 0 0 50px rgba(236,72,153,0.08)",
          }}
        >
          {/* Top specular edge */}
          <div
            className="absolute top-0 left-8 right-8 h-[1px] rounded-full pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.4) 80%, transparent)"
            }}
          />

          {/* 2x2 Grid of Compact Cards */}
          <div className="grid gap-5 md:gap-6 md:grid-cols-2" style={{ perspective: "1000px" }}>
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + (idx * 0.1),
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{
                  y: -8,
                  rotateX: 2,
                  rotateY: idx % 2 === 0 ? 2 : -2,
                  scale: 1.015,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="group relative flex flex-col h-full cursor-pointer"
              >
                {/* Card Shell */}
                <div
                  className="relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    background: "rgba(10, 10, 20, 0.85)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.45), 0 0 20px rgba(236,72,153,0.05)",
                  }}
                >
                  {/* Radial depth glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at 50% 0%, rgba(236,72,153,0.15) 0%, rgba(139,92,246,0.1) 50%, transparent 80%)"
                    }}
                  />

                  {/* Shine sweep */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none z-10">
                    <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] transition-transform duration-[900ms] ease-out group-hover:translate-x-[150%]" />
                  </div>

                  {/* Image section: Compact aspect ratio */}
                  <div className="h-44 sm:h-48 overflow-hidden relative flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay`} />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(8,8,18,0.9) 100%)"
                      }}
                    />
                    <div
                      className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-white/15"
                      style={{
                        background: "rgba(0,0,0,0.55)",
                        backdropFilter: "blur(8px)"
                      }}
                    >
                      <Sparkles size={10} className="text-amber-400" />
                      <span className="text-[8px] font-bold text-white/90 tracking-wider uppercase">Live Demo</span>
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="p-5 sm:p-6 flex flex-col flex-grow relative z-10">
                    <span className={`text-[10px] font-bold tracking-widest uppercase mb-1.5 ${project.accent}`}>
                      {project.tagline}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white mb-2 group-hover:text-amber-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="mb-5 text-xs sm:text-sm leading-relaxed text-slate-300/85 font-normal line-clamp-2">
                      {project.description}
                    </p>

                    <div className="mt-auto pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                      <div className="flex gap-2 flex-wrap">
                        {project.tags.map(tag => (
                          <span
                            key={tag}
                            className="text-[9px] font-medium tracking-wide px-2 py-0.5 rounded-md"
                            style={{
                              background: "rgba(255,255,255,0.06)",
                              border: "1px solid rgba(255,255,255,0.1)",
                              color: "rgba(255,255,255,0.6)"
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/15 hover:border-white/30 text-white/70 hover:text-white transition-all duration-300 flex items-center gap-1.5 text-xs font-semibold shrink-0"
                      >
                        <span className="hidden sm:inline text-[10px] uppercase tracking-wider">Visit</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Subtle bottom drop glow */}
                <div
                  className="absolute inset-x-6 -bottom-2 h-4 rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-lg pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, #ec4899, #a855f7, #3b82f6)"
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-purple-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 -z-10 h-[300px] w-[300px] bg-pink-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-[300px] w-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
}

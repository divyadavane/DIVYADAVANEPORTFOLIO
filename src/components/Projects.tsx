"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Rocket, Sparkles, Smartphone, Code, Cpu, Database } from "lucide-react";

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
    title: "Supply Chain AI",
    tagline: "HIGH-PRECISION MATERIAL TRACING",
    description: "Hybrid inference engine leveraging Featherless.ai and a locally fine-tuned Qwen2.5-0.5B model for 100% factual RAG retrieval.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    tags: ["Hybrid LLM", "Python", "RAG"],
    link: "https://supply-chains-tracing.vercel.app/",
    color: "from-blue-500/20 to-purple-500/20",
    accent: "text-blue-400"
  },
  {
    title: "DVH Travel Planner",
    tagline: "REACT NATIVE INTELLIGENT COMPANION",
    description: "A cross-platform travel assistant that curates personalized itineraries and provides real-time trip optimizations via integrated AI.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
    tags: ["React Native", "Expo", "AI"],
    link: "#",
    color: "from-emerald-500/20 to-teal-500/20",
    accent: "text-emerald-400"
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
    title: "Banking with AI",
    tagline: "PREDICTIVE FINANCIAL INTELLIGENCE",
    description: "Modern financial platform integrated with AI-driven insights for financial management and security.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "AI APIs", "JWT"],
    link: "https://bankingwith-ai.vercel.app/",
    color: "from-magenta-500/20 to-amber-500/20",
    accent: "text-magenta-400"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-20 flex items-center justify-between">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl font-black tracking-tight md:text-6xl text-white mb-2 uppercase"
            >
              SELECTED <span className="text-glow-white brightness-150 text-white">WORKS</span>
            </motion.h2>
            <div className="mt-4 h-1 w-24 bg-gradient-to-r from-amber-500 to-magenta-500" />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="hidden md:block"
          >
            <Rocket className="text-amber-500/20 rotate-45 animate-pulse" size={150} strokeWidth={1} />
          </motion.div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.85, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                 duration: 1, 
                 delay: idx * 0.15,
                 ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ y: -15, scale: 1.05 }}
              className="group relative flex flex-col h-full bg-slate-900/40 rounded-[2.5rem] border border-white/5 overflow-hidden backdrop-blur-3xl hover:border-amber-500/40 transition-all duration-700 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-125 opacity-70 grayscale-0"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay`} />
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <Sparkles size={10} className="text-amber-500" />
                    <span className="text-[8px] font-black text-white/80 tracking-tighter uppercase">Featured</span>
                </div>

                {/* React Native Indicator for Travel Planner */}
                {project.tags.includes("React Native") && (
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/80 px-3 py-1 rounded-full border border-emerald-500/50">
                     <Smartphone size={10} className="text-emerald-400" />
                     <span className="text-[8px] font-black text-emerald-400 tracking-tighter uppercase">Mobile App</span>
                  </div>
                )}
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-black tracking-widest uppercase ${project.accent}`}>
                    {project.tagline}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-black text-white mb-4 group-hover:text-glow-white transition-all duration-500">
                  {project.title}
                </h3>
                <p className="mb-8 text-sm text-slate-400 leading-relaxed font-medium">
                  {project.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex gap-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-slate-950 transition-all hover:scale-110 hover:shadow-[0_0_20px_white]"
                    >
                      {project.title === "DVH Travel Planner" ? <Code size={20} /> : <ExternalLink size={20} />}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-amber-500/5 blur-[150px] rounded-full" />
    </section>
  );
}

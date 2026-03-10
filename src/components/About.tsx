"use client";

import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { label: "AI Models", value: "15+", color: "text-amber-400" },
    { label: "Full-Stack Ops", value: "30+", color: "text-magenta-500" },
    { label: "Accuracy", value: "98%", color: "text-white" },
  ];

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square w-full max-w-md mx-auto"
            >
              {/* Nebula Graphic with Golden Accents */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-magenta-500/20 via-amber-500/10 to-transparent blur-3xl animate-pulse" />
              <div className="relative h-full w-full rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-3xl overflow-hidden nebula-glow group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30" />
                <div className="flex h-full flex-col items-center justify-center p-12 text-center">
                  <span className="font-display text-7xl font-black text-white mix-blend-overlay group-hover:scale-110 transition-transform duration-500">AI</span>
                  <div className="mt-4 h-1 w-16 bg-gradient-to-r from-magenta-500 to-amber-500 shadow-[0_0_15px_#f59e0b]" />
                  <p className="mt-6 text-[10px] font-black uppercase tracking-[0.5em] text-white/40">Neural Architect</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-10">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500"
              >
                The Architecture of Mind
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display mt-4 text-4xl font-black text-white md:text-6xl uppercase leading-none"
              >
                PIONEERING <br /> <span className="text-glow-white brightness-200 text-white">INTELLIGENCE.</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed text-slate-300 font-medium"
            >
              I am a results-driven technologist specializing in the intersection of 
              <span className="text-white font-bold"> Human Logic</span> and <span className="text-amber-400 font-bold"> High-Performance Computing</span>. 
              My work focuses on building scalable systems that thrive in the <span className="text-magenta-400">Cosmic Flux</span> of big data.
            </motion.p>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/5">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  <p className={`font-display text-4xl font-black ${stat.color}`}>{stat.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 h-96 w-96 bg-purple-500/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
}

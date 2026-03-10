"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const letters = "DIVYA DAVANE".split("");
  const containerRef = useRef(null);
  
  return (
    <section ref={containerRef} className="relative flex min-h-screen flex-col items-center justify-center px-6 overflow-hidden">
      {/* Dynamic Cursor Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         <motion.div 
            className="absolute h-[800px] w-[800px] rounded-full bg-purple-500/10 blur-[180px]"
            animate={{
              x: [0, 150, -150, 0],
              y: [0, -150, 150, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
         />
      </div>

      {/* Cosmic Center Glow - Extreme Intensity */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none z-0">
        <div className="h-[50vh] w-[90vw] bg-gradient-to-r from-transparent via-magenta-500/20 to-transparent blur-[150px]" />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute h-[40vh] w-[40vh] md:h-[60vh] md:w-[60vh] rounded-full bg-white/10 blur-[120px]"
        />
      </div>

      <div className="z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative inline-block"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="font-display mb-8 text-[12px] font-black tracking-[1.2em] text-white/90 uppercase text-glow-white"
          >
          Digital Architect • AI Specialist • Data Analyst
          </motion.p>

          <div className="flex flex-col items-center relative">
            <h1 className="text-huge font-display font-black text-white selection:bg-white selection:text-black leading-none py-10">
              {letters.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, scale: 0.7, filter: "blur(15px)" }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  whileHover={{ 
                    scale: 1.3, 
                    color: "#fff",
                    textShadow: "0 0 80px rgba(255, 255, 255, 1), 0 0 120px rgba(217, 70, 239, 1)",
                    transition: { duration: 0.1 }
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block text-mega-glow brightness-[5] drop-shadow-[0_0_40px_rgba(255,255,255,1)]"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>
            
            {/* Extreme Bloom Layers */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none -z-10 flex items-center justify-center">
                <div className="h-32 w-[110%] bg-white/20 blur-[100px] rounded-full animate-pulse" />
                <div className="absolute h-10 w-[100%] bg-white/30 blur-[40px] rounded-full" />
            </div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 2, duration: 2 }}
              className="mt-6 h-[4px] w-[30rem] md:w-[60rem] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_60px_rgba(255,255,255,1)]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 1 }}
          className="mt-24 flex flex-col items-center gap-10"
        >
          <div className="max-w-2xl space-y-6">
             <p className="text-sm font-bold tracking-[0.6em] uppercase leading-relaxed text-white/70 text-center text-glow-white">
              Cultivating Intelligence in the <span className="text-white brightness-150">Luminous</span> Void
            </p>
            <div className="flex justify-center gap-8">
                {["Next.js", "React", "Framer Motion", "PyTorch"].map(tag => (
                   <span key={tag} className="text-[10px] font-black tracking-[0.4em] uppercase text-white/40 border-b border-white/10 pb-1">{tag}</span>
                ))}
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <motion.button
              whileHover={{ 
                scale: 1.15, 
                backgroundColor: "rgba(255,255,255,1)", 
                color: "#000",
                boxShadow: "0 0 80px rgba(255,255,255,1)"
              }}
              className="px-16 py-6 bg-white/5 backdrop-blur-xl rounded-full border border-white/40 text-[12px] font-black uppercase tracking-[0.5em] text-white transition-all duration-700"
            >
              Enter The Universe
            </motion.button>

            <motion.a
              href="/resume.pdf"
              download="Divya_Davane_Resume.pdf"
              whileHover={{ 
                scale: 1.15, 
                backgroundColor: "rgba(124,58,237,0.2)", 
                borderColor: "rgba(217,70,239,0.8)",
                boxShadow: "0 0 40px rgba(124,58,237,0.4)"
              }}
              className="px-12 py-6 bg-white/5 backdrop-blur-xl rounded-full border border-white/20 text-[12px] font-black uppercase tracking-[0.5em] text-white transition-all duration-700 flex items-center gap-3"
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Extreme Orbiting Particles */}
      <div className="absolute top-1/3 right-1/4 h-3 w-3 rounded-full bg-white shadow-[0_0_30px_white] animate-[orbit_12s_linear_infinite]" />
      <div className="absolute bottom-1/4 left-1/4 h-2 w-2 rounded-full bg-magenta-500 shadow-[0_0_20px_#d946ef] animate-[orbit_18s_linear_infinite]" style={{ animationDirection: 'reverse' }} />

      {/* High-Impact Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 25, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-white"
      >
        <ArrowDown size={48} strokeWidth={1} className="drop-shadow-[0_0_20px_white]" />
      </motion.div>
    </section>
  );
}

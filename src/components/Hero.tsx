"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { GlowCard } from "@/components/ui/spotlight-card";
import { HyperText } from "@/components/ui/hyper-text";
import { AnimatedText } from "@/components/ui/animated-shiny-text";

export default function Hero() {
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
          <div className="relative inline-block">

          <div className="flex flex-col items-center relative w-full mt-4 z-[9999]">
              <AnimatedText 
                text="Divya Davane"
                textClassName="text-[120px] md:text-[180px] font-combat font-normal leading-none pointer-events-none drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] tracking-tighter uppercase"
                gradientColors="linear-gradient(90deg, #222, #fff, #222)"
                gradientAnimationDuration={3}
                className="pt-10 pb-0"
              />
            
            {/* Extreme Bloom Layers */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none -z-10 flex items-center justify-center">
                <div className="h-64 w-[110%] bg-white/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute h-20 w-[100%] bg-white/20 blur-[60px] rounded-full" />
            </div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 2, duration: 2 }}
              className="mt-2 h-[4px] w-[30rem] md:w-[60rem] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_60px_rgba(255,255,255,1)]"
            />

            <div className="mt-4 flex flex-col items-center justify-center">
              <HyperText 
                duration={1500}
                delay={3500}
                className="text-[40px] md:text-[52px] font-glitch tracking-[0.05em] text-white/90 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              >
                An Aspiring Software Engineer and Data Analyst
              </HyperText>
              
              {/* The Line Below Tagline */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 5.5, duration: 1.5, ease: "easeOut" }}
                className="mt-6 h-[2px] w-[20rem] md:w-[45rem] bg-gradient-to-r from-transparent via-magenta-500 to-transparent shadow-[0_0_30px_rgba(217,70,239,0.5)]"
              />

              {/* The Professional Manifesto Line */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 6.5, duration: 1.5 }}
                className="mt-8 text-[12px] md:text-[15px] font-display font-medium text-white/40 uppercase tracking-[0.4em] leading-relaxed max-w-[45rem] text-center"
              >
                Designing AI-driven systems, high-performance backends, and seamless user journeys.
              </motion.p>
            </div>
          </div>
        </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 1 }}
            className="mt-12 flex flex-col items-center"
          >
            <div className="flex flex-wrap justify-center gap-8">
              <GlowCard 
                customSize={true} 
                borderRadius={60} 
                className="w-fit h-fit rounded-full border border-white/10"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-14 py-5 text-[18px] md:text-[22px] font-normal tracking-normal text-white/90 bg-transparent font-combat uppercase"
                >
                  Enter the Universe
                </motion.button>
              </GlowCard>

              <GlowCard 
                 customSize={true} 
                 borderRadius={60} 
                 glowColor="purple"
                 className="w-fit h-fit rounded-full border border-white/5"
              >
                <motion.a
                  href="/resume.pdf"
                  download="Divya_Davane_Resume.pdf"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-12 py-5 text-[18px] md:text-[22px] font-normal tracking-normal text-white/50 bg-transparent flex items-center gap-3 transition-colors hover:text-white/80 font-combat uppercase"
                >
                  Download CV
                </motion.a>
              </GlowCard>
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

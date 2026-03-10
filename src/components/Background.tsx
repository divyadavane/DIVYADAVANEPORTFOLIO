"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#030014]">
      {/* Cinematic Swirling Vortex (Visible, No Blur) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-screen scale-110"
        src="https://assets.mixkit.co/videos/preview/mixkit-galaxy-swirling-in-the-cosmos-23145-large.mp4"
      />

      {/* Moving Black Hole Element */}
      <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center">
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 360],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="relative h-[50vh] w-[50vh] flex items-center justify-center"
        >
          {/* Event Horizon */}
          <div className="absolute inset-0 rounded-full bg-black shadow-[0_0_80px_20px_rgba(124,58,237,0.4),inset_0_0_100px_black] border border-white/5" />
          
          {/* Accretion Disk Glow */}
          <div className="absolute h-[110%] w-[110%] rounded-full bg-gradient-to-tr from-purple-600/20 via-transparent to-magenta-500/20 blur-3xl animate-pulse" />
          
          {/* Swirling Inner Accretion */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 rounded-full border-2 border-white/5 border-t-purple-500/40 border-r-transparent blur-[2px]"
          />
        </motion.div>
      </div>

      {/* Starfield Layer (Twinkling) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="animate-star absolute rounded-full bg-white bg-opacity-80"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              '--duration': `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 5}s`,
            } as any}
          />
        ))}
      </div>

      {/* Comet Layer */}
      <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden">
        <div className="animate-comet absolute top-0 left-0 h-px w-[200px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_20px_white]" />
        <div className="animate-comet absolute top-1/4 -left-1/4 h-px w-[150px] bg-gradient-to-r from-transparent via-magenta-400 to-transparent shadow-[0_0_15px_rgba(217,70,239,0.5)]" style={{ animationDelay: '4s' }} />
      </div>

      {/* Water Ripple / Fluid Distortion Layer */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-10 mix-blend-overlay">
        <svg className="h-full w-full">
          <filter id="water-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" />
          </filter>
          <rect width="100%" height="100%" filter="url(#water-filter)" fill="rgba(124,58,237,0.1)" />
        </svg>
      </div>

      {/* Nebula Gradients (Purple & Gold) */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-[10%] left-[-5%] h-[70%] w-[70%] rounded-full bg-purple-900/40 blur-[150px] animate-nebula" />
        <div className="absolute bottom-[10%] right-[-5%] h-[60%] w-[60%] rounded-full bg-magenta-900/30 blur-[120px] animate-nebula delay-2000" />
        <div className="absolute top-[30%] right-[10%] h-[40%] w-[40%] rounded-full bg-amber-500/10 blur-[100px] animate-nebula delay-1000" />
      </div>

      {/* Vignette & Depth */}
      <div className="absolute inset-0 z-40 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.8)]" />
    </div>
  );
}

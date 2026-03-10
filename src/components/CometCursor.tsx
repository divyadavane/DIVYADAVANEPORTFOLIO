"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CometCursor() {
  const [mounted, setMounted] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <>
      {/* Main Comet Head - Silver Shiny */}
      <motion.div
        style={{
          translateX: springX,
          translateY: springY,
        }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-4 w-4 rounded-full bg-white shadow-[0_0_15px_2px_rgba(255,255,255,0.8),0_0_30px_5px_rgba(124,58,237,0.4)] border border-slate-300" />
        
        {/* Silver Core */}
        <div className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-slate-100" />
      </motion.div>

      {/* Glowing Trail */}
      <motion.div
        style={{
          translateX: springX,
          translateY: springY,
        }}
        className="fixed top-0 left-0 z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-24 w-24 rounded-full bg-white/5 blur-2xl border border-white/5 animate-pulse" />
      </motion.div>

      {/* Trailing Comet Particles */}
      {[...Array(5)].map((_, i) => (
        <TrailingParticle key={i} x={cursorX} y={cursorY} delay={i * 0.05} />
      ))}
    </>
  );
}

function TrailingParticle({ x, y, delay }: { x: any; y: any; delay: number }) {
  const pX = useSpring(x, { damping: 15, stiffness: 100 });
  const pY = useSpring(y, { damping: 15, stiffness: 100 });

  return (
    <motion.div
      style={{
        translateX: pX,
        translateY: pY,
      }}
      className="fixed top-0 left-0 z-[9997] pointer-events-none -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div 
        animate={{ scale: [1, 0], opacity: [0.5, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, delay }}
        className="h-1.5 w-1.5 rounded-full bg-slate-300 blur-[1px]" 
      />
    </motion.div>
  );
}

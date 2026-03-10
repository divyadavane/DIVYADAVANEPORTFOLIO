"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 z-[1000] bg-gradient-to-r from-purple-600 via-magenta-500 to-amber-500 origin-left shadow-[0_0_15px_rgba(217,70,239,0.5)]"
      style={{ scaleX }}
    />
  );
}

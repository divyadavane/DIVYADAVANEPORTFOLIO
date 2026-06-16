"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface LineShadowTextProps {
  children: string;
  shadowColor?: string;
  className?: string;
}

export const LineShadowText = ({
  children,
  shadowColor = "black",
  className,
}: LineShadowTextProps) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <span
      ref={containerRef}
      className={cn(
        "relative inline-block",
        className,
      )}
    >
      {children}
      <motion.span
        initial={{ scale: 1 }}
        animate={isInView ? { 
           x: [0, 4, -4, 0],
           y: [0, -2, 2, 0]
        } : {}}
        transition={{ 
           duration: 5, 
           repeat: Infinity, 
           ease: "easeInOut" 
        }}
        className="absolute left-[0.03em] top-[0.03em] -z-10 select-none text-transparent"
        style={{
          WebkitTextStroke: `0.02em ${shadowColor}`,
          maskImage: `linear-gradient(to bottom, transparent 1px, black 1px)`,
          maskSize: "100% 3px",
          opacity: 0.5
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};

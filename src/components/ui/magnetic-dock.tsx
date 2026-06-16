'use client';

import React, {
  useState,
  useRef,
  useContext,
  createContext,
  useEffect,
  useCallback
} from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring
} from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

// shared mouse position
const MouseContext = createContext({ x: 0, y: 0 });

interface DockIconProps {
  icon: React.ReactNode;
  href?: string;
}

// individual icon with magnetic effect
function DockIcon({ icon, href }: DockIconProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mouse = useContext(MouseContext);
  const distance = useMotionValue(Infinity);

  useEffect(() => {
    if (!ref.current || mouse.x === 0) {
      distance.set(Infinity);
      return;
    }
    const iconRect = ref.current.getBoundingClientRect();
    const containerRect = ref.current.parentElement?.getBoundingClientRect();
    if (!containerRect) return;

    const iconCenterX = iconRect.left + iconRect.width / 2;
    const mouseXAbsolute = containerRect.left + mouse.x;
    distance.set(Math.abs(mouseXAbsolute - iconCenterX));
  }, [mouse, distance]);

  const size = useTransform(distance, [0, 150], [56, 40]);
  const springSize = useSpring(size, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.a
      href={href}
      target="_blank"
      ref={ref}
      style={{ width: springSize, height: springSize }}
      className="rounded-full bg-white/10 hover:bg-white/20 border border-white/5 flex items-center justify-center text-white cursor-pointer transition-colors"
    >
      {icon}
    </motion.a>
  );
}

// main horizontal bottom dock
export function MagneticDock({ className = "" }: { className?: string }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX } = e;
    const { left } = containerRef.current.getBoundingClientRect();
    setPos({ x: clientX - left, y: 0 });
  };

  const onMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  return (
    <MouseContext.Provider value={pos}>
      <div
        ref={containerRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={`flex h-20 items-center justify-center gap-4 px-6 rounded-3xl bg-transparent ${className}`}
      >
        <DockIcon href="https://github.com/divyadavane" icon={<Github size={20} />} />
        <DockIcon href="https://linkedin.com/in/divyadavane" icon={<Linkedin size={20} />} />
        <DockIcon href="https://twitter.com/divyadavane" icon={<Twitter size={20} />} />
        <DockIcon href="mailto:contact@divyadavane.com" icon={<Mail size={20} />} />
      </div>
    </MouseContext.Provider>
  );
}

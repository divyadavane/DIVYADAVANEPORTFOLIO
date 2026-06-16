"use client";

import React, { useId } from 'react';
import { cn } from "@/lib/utils";

export type GlowButtonProps = {
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
};

const GlowButton = ({ children = 'Register', className, icon }: GlowButtonProps) => {
  const id = useId().replace(/:/g, '');
  const filters = {
    unopaq: `unopaq-${id}`,
    unopaq2: `unopaq2-${id}`,
    unopaq3: `unopaq3-${id}`,
  };

  return (
    <div className={cn("relative group cursor-pointer h-[80px] w-full max-w-[200px] flex items-center justify-center", className)}>
      {/* SVG Filters */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter width="300%" x="-100%" height="300%" y="-100%" id={filters.unopaq}>
          <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 9 0" />
        </filter>
        <filter width="300%" x="-100%" height="300%" y="-100%" id={filters.unopaq2}>
          <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 3 0" />
        </filter>
        <filter width="300%" x="-100%" height="300%" y="-100%" id={filters.unopaq3}>
          <feColorMatrix values="1 0 0 0.2 0 0 1 0 0.2 0 0 0 1 0.2 0 0 0 0 2 0" />
        </filter>
      </svg>

      {/* Button Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Outer Glow Layer */}
        <div 
          className="absolute inset-0 -z-20 opacity-30 group-hover:opacity-60 transition-opacity duration-500 overflow-hidden"
          style={{ filter: `blur(1.5em) url(#${filters.unopaq})` }}
        >
          <div 
            className="absolute inset-[-150%] animate-[speen_10s_linear_infinite]"
            style={{ 
              background: 'linear-gradient(90deg, #f50 30%, #0000 50%, #05f 70%)',
            }}
          />
        </div>

        {/* Middle Glow Layer */}
        <div 
          className="absolute inset-[-4px] -z-10 opacity-40 group-hover:opacity-80 transition-opacity duration-300 overflow-hidden rounded-2xl"
          style={{ 
            filter: `blur(0.25em) url(#${filters.unopaq2})`,
          }}
        >
          <div 
            className="absolute inset-[-150%] animate-[speen_8s_linear_infinite]"
            style={{ 
              background: 'linear-gradient(90deg, #f95 20%, #0000 45% 55%, #59f 80%)',
            }}
          />
        </div>

        {/* Button Surface */}
        <div 
          className="relative w-full h-full bg-[#111215]/80 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-2 p-2 group-hover:bg-[#1a1c21] group-hover:border-white/20 transition-all duration-300 overflow-hidden"
        >
           {/* Inner Animated Border (Pulsing) */}
           <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-[-1px] border border-white/20 rounded-2xl animate-pulse" />
           </div>

           {icon && <div className="text-white group-hover:scale-110 group-hover:text-amber-400 transition-all duration-500">{icon}</div>}
           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-colors">
              {children}
           </span>
        </div>
      </div>
    </div>
  );
};

export { GlowButton };

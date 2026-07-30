import React, { ButtonHTMLAttributes } from "react";

interface RealismButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function RealismButton({
  text,
  className = "",
  ...props
}: RealismButtonProps) {
  return (
    <button
      className={`group relative inline-flex items-center justify-center rounded-xl p-[1px] font-medium text-white shadow-2xl transition-all duration-300 ease-out hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/50 ${className}`}
      {...props}
    >
      {/* Outer border gradient layer */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 via-white/5 to-white/10 opacity-70 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-green-400/60 group-hover:via-green-500/20 group-hover:to-green-400/40" />
      
      {/* Inner background layer with radial glow */}
      <div className="relative flex h-full w-full items-center justify-center rounded-xl bg-zinc-950 px-6 py-3 shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)] transition-all duration-300">
        <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_50%_-20%,rgba(34,197,94,0.15),transparent_70%)] opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:bg-[radial-gradient(circle_at_50%_-20%,rgba(34,197,94,0.45),transparent_70%)]" />
        
        {/* Shine sweep effect */}
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-30deg] transition-transform duration-700 ease-out group-hover:translate-x-[150%]" />
        </div>
        
        {/* Text */}
        <span className="relative z-10 text-sm font-semibold tracking-wide text-zinc-100 drop-shadow-md">
          {text}
        </span>
      </div>
    </button>
  );
}

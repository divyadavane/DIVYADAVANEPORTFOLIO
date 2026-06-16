"use client";

import { motion } from "framer-motion";
import { Github, Layout, Linkedin, Mail, ArrowUpRight, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 overflow-hidden border-t border-white/5 bg-black/80 py-24 px-6 backdrop-blur-3xl">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 grid gap-16 md:grid-cols-2">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-display text-[15vw] font-black text-white/[0.04] absolute -top-32 -left-12 pointer-events-none select-none leading-none uppercase"
            >
              DIVYA
            </motion.h2>
            
            <div className="relative pt-12">
              <h3 className="font-display text-5xl font-black text-white mb-8 uppercase leading-tight">
                TRANSCENDING <br />
                THE <span className="text-glow-white brightness-200 text-white">VOID.</span>
              </h3>
              <p className="text-slate-400 max-w-sm mb-12 text-sm font-medium leading-relaxed">
                Available for elite collaborations at the frontier of AI, full-stack architecture, and cosmic web design.
              </p>
              
              <div className="flex gap-6">
                <a 
                    href="mailto:divyadavane13@gmail.com" 
                    className="group relative flex items-center gap-4 bg-white px-10 py-4 rounded-full transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]"
                >
                  <Mail size={20} className="text-black" />
                  <span className="text-xs font-black text-black uppercase tracking-[0.4em]">Establish Contact</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:items-end justify-center gap-16">
            <div className="flex gap-10">
              {[
                { icon: Github, href: "https://github.com/divyadavane", label: "GitHub", color: "hover:bg-amber-500" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/divyadavane/", label: "LinkedIn", color: "hover:bg-magenta-500" },
                { icon: Layout, href: "https://leetcode.com/u/Divya_Davane/", label: "LeetCode", color: "hover:bg-white" },
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank"
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className={`h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 ${social.color} group-hover:text-black group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-2xl`}>
                    <social.icon size={24} strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">{social.label}</span>
                </a>
              ))}
            </div>

            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-6 text-white/30 hover:text-white transition-all duration-500"
            >
              <span className="text-xs font-black uppercase tracking-[0.5em]">Ascend to Heavens</span>
              <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center transition-all group-hover:border-white group-hover:bg-white group-hover:text-black group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                <ArrowUpRight size={22} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>

        <div className="mt-32 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-[11px] font-black uppercase tracking-widest text-white/40">
                © {currentYear} Divya Davane.
            </p>
            <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/20">
                Synthesized in the heart of a Dying Star
            </p>
          </div>
          <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-white/30">
            Coded with <Heart size={12} className="text-magenta-500 fill-magenta-500 animate-pulse" /> by <span className="text-white brightness-125">Antigravity</span>
            <Sparkles size={12} className="text-amber-500 ml-2" />
          </div>
        </div>
      </div>
      
      {/* Footer Void Glow */}
      <div className="absolute bottom-[-100px] left-1/2 -z-10 h-[400px] w-[80%] -translate-x-1/2 bg-purple-500/10 blur-[150px] rounded-full" />
    </footer>
  );
}

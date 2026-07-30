"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Layout, Linkedin, Mail, ArrowUpRight, Heart, Sparkles } from "lucide-react";
import FooterContactForm from "@/components/FooterContactForm";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#0a192f] text-white border-t border-[#1e3a5f]/60 pt-20 pb-12 px-6"
    >
      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Top Section: Left Branding & Socials + Right Premium Navy Contact Form */}
        <div className="grid gap-12 lg:grid-cols-12 items-start mb-16">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 relative pt-2">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 0.04, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-display text-[14vw] lg:text-[100px] font-black text-white absolute -top-16 -left-6 pointer-events-none select-none leading-none uppercase tracking-tighter"
            >
              DIVYA
            </motion.h2>
            
            <div className="relative z-10">
              <h3
                className="font-combat text-4xl lg:text-5xl text-white uppercase leading-tight tracking-tight mb-4"
              >
                TRANSCENDING <br />
                THE <span className="text-slate-400">VOID.</span>
              </h3>

              <p className="text-slate-300 max-w-md mb-8 text-sm font-inter leading-relaxed">
                Available for select freelance collaborations, AI engineering, and full-stack software development.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <a 
                  href="mailto:divyadavane0@gmail.com" 
                  className="inline-flex items-center gap-2 bg-white text-[#0a192f] hover:bg-slate-200 px-6 py-2.5 rounded-md transition-colors text-xs font-semibold"
                >
                  <Mail size={16} />
                  <span>divyadavane0@gmail.com</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 items-center">
                {[
                  { icon: Github, href: "https://github.com/divyadavane", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/divyadavane/", label: "LinkedIn" },
                  { icon: Layout, href: "https://leetcode.com/u/Divya_Davane/", label: "LeetCode" },
                ].map((social) => (
                  <a 
                    key={social.label}
                    href={social.href} 
                    target="_blank"
                    className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-xs font-medium"
                  >
                    <social.icon size={18} strokeWidth={1.5} />
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Footer Contact Form (7 cols) */}
          <div className="lg:col-span-7 flex justify-start lg:justify-end">
            <FooterContactForm />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1e3a5f]/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-xs"
          >
            <span>Back to top</span>
            <div className="h-6 w-6 rounded-full border border-[#1e3a5f] flex items-center justify-center">
              <ArrowUpRight size={12} />
            </div>
          </button>

          <p className="text-xs text-slate-400">
            © {currentYear} Divya Davane. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            Coded with <Heart size={12} className="text-red-400 fill-red-400" /> by Divya Davane
            <Sparkles size={12} className="text-amber-400" />
          </div>
        </div>

      </div>
    </footer>
  );
}

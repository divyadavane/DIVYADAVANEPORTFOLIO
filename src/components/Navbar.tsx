"use client";

import { motion } from "framer-motion";
import { Github, Layout, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

const socials = [
  { icon: Github, href: "https://github.com/divyadavane", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/divyadavane/", label: "LinkedIn" },
  { icon: Layout, href: "https://leetcode.com/u/Divya_Davane/", label: "LeetCode" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full px-6 py-4">
      <div className="mx-auto max-w-7xl">
        <div className="glass flex items-center justify-between rounded-full px-8 py-3">
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display text-xl font-bold tracking-tighter"
          >
            DIVYA<span className="text-sky-400">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium text-slate-400 transition-colors hover:text-sky-400"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4 border-l border-white/10 pl-6">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="text-slate-400 hover:text-white"
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="text-slate-200 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mt-4 flex flex-col items-center gap-4 rounded-3xl py-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-200"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 flex gap-6 border-t border-white/10 pt-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

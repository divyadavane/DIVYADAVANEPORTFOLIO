"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { Internships } from "@/components/Internships";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative scroll-smooth">
      <ScrollProgress />
      
      {/* Global Entry Animation for the entire page */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="snap-start h-screen w-full">
          <Hero />
        </div>
        
        <div className="snap-start h-screen w-full overflow-y-auto custom-scrollbar">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <About />
          </motion.div>
        </div>

        <div className="snap-start h-screen w-full overflow-y-auto custom-scrollbar">
          <Skills />
        </div>

        <div className="snap-start w-full">
          <Internships />
        </div>

        <div className="snap-start h-screen w-full overflow-y-auto custom-scrollbar">
          <Experience />
        </div>

        <div className="snap-start h-screen w-full overflow-y-auto custom-scrollbar">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Projects />
          </motion.div>
        </div>

        <div className="snap-start w-full">
          <Footer />
        </div>
      </motion.div>
    </div>
  );
}

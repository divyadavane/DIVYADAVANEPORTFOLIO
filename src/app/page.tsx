"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  return (
    <div className="relative">
      <ScrollProgress />
      
      {/* Global Entry Animation for the entire page */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <Hero />
        
        {/* Wrap sections in motion containers for consistent scroll behavior */}
        <section className="relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <About />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <Skills />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <Experience />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <Projects />
          </motion.div>
        </section>

        <Footer />
      </motion.div>
    </div>
  );
}

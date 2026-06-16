'use client';

import { motion } from "framer-motion";
import { MagneticDock } from "./ui/magnetic-dock";

export default function BottomBar() {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.8 }}
      className="fixed bottom-8 left-4 z-[100] hidden md:block" // Perfectly aligned to the left edge
    >
      <MagneticDock />
    </motion.div>
  );
}

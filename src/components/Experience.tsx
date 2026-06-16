"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Calendar, 
  MapPin, 
  Trophy, 
  Star,
  Zap,
  Target,
  GraduationCap,
  Award,
  Sparkles,
  Globe,
  Milestone
} from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    title: "Data Science Intern",
    company: "Proton Shala",
    period: "Feb 2024 - Mar 2024",
    location: "Remote",
    description: "Spearheaded advanced data modeling and feature engineering initiatives for predictive analytics modules.",
    highlights: ["Increased model accuracy by 12%", "Automated ETL pipelines"],
    accent: "purple"
  },
  {
    title: "AI Development Intern",
    company: "Global Tech Solutions",
    period: "June 2023 - Aug 2023",
    location: "Pune, India",
    description: "Engineered computer vision algorithms for real-time object detection and classification systems.",
    highlights: ["Reduced latency by 20%", "Deployed scalable inference"],
    accent: "magenta"
  },
];

const achievements = [
  {
    title: "Top 1% Global Ranking",
    description: "Consistently ranked in the top percentile of competitive AI challenges on Kaggle and LeetCode.",
    icon: Target,
    color: "text-purple-400"
  },
  {
    title: "Open Source Champion",
    description: "Contributed critical optimizations to several high-profile Python data libraries.",
    icon: Zap,
    color: "text-white"
  },
  {
    title: "2nd Place - Oscillations Paper",
    description: "Achieved runner-up position for research paper on advanced signal processing at a National Level Presentation.",
    icon: Award,
    color: "text-purple-500"
  },
];

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "100%"]);

  return (
    <section id="education" ref={containerRef} className="py-32 px-6 relative overflow-hidden">
      <div className="mx-auto max-w-4xl relative z-10">
        {/* Only Education & Achievements (Universal Board) */}
        <div className="space-y-24">
            <div className="relative">
              <div className="mb-16">
                <motion.h2
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="font-display text-5xl font-black text-white md:text-6xl uppercase text-right"
                >
                  SYSTEM <span className="text-mega-glow brightness-125">WINS</span>
                </motion.h2>
                <div className="mt-6 h-1 w-32 bg-purple-600 ml-auto shadow-[0_0_15px_purple]" />
              </div>

              <div className="grid gap-8">
                {achievements.map((achievement, idx) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    whileHover={{ scale: 1.05, x: -10 }}
                    className="glass p-10 rounded-[3rem] flex items-center gap-10 group hover:border-purple-500/50 transition-all duration-700 bg-black/60 backdrop-blur-3xl"
                  >
                    <div className={`h-16 w-16 min-w-[4rem] rounded-2xl bg-white/5 flex items-center justify-center ${achievement.color} group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 shadow-xl`}>
                      <achievement.icon size={30} />
                    </div>
                    <div>
                      <h4 className="font-display text-2xl font-black text-white mb-3 uppercase tracking-tight group-hover:text-purple-400 transition-colors">{achievement.title}</h4>
                      <p className="text-base text-slate-400 leading-relaxed font-medium max-w-sm">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Academic Universe Board */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-[4rem] bg-gradient-to-br from-purple-600 to-indigo-900 p-16 text-white shadow-[0_0_100px_rgba(124,58,237,0.3)] border border-white/20"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay" />
              <div className="absolute -right-16 -top-16 opacity-30 text-white animate-nebula">
                <GraduationCap size={400} />
              </div>
              
              <div className="relative z-10">
                <div className="mb-10 inline-flex items-center gap-3 rounded-2xl bg-black/40 px-6 py-2 text-[12px] font-black uppercase tracking-[0.4em] text-white border border-white/10 backdrop-blur-md">
                  <Star size={16} fill="currentColor" className="text-amber-400" />
                  ACADEMIC PEAK
                  <Sparkles size={14} className="animate-pulse" />
                </div>
                
                <h3 className="font-display text-5xl font-black text-white mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] uppercase tracking-tight">
                  Mumbai University
                </h3>
                <p className="mb-14 text-2xl font-bold text-white/90 leading-tight">
                  Vidyavardhinis College of <br /> Engineering & Technology
                </p>
                
                <div className="flex items-end justify-between">
                  <div className="space-y-4">
                    <p className="text-[12px] font-black uppercase tracking-[0.6em] text-white/60">Final Meta Score</p>
                    <div className="flex items-baseline gap-4">
                        <span className="text-7xl font-black text-white drop-shadow-2xl">9.1</span>
                        <span className="text-2xl font-black text-white/40 uppercase tracking-widest">CGPA</span>
                    </div>
                  </div>
                  <motion.div 
                     animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                     transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                     className="h-28 w-28 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_50px_white] relative"
                  >
                    <Trophy size={48} />
                    <Star size={12} className="absolute top-2 right-2 animate-ping" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Trophy,
  Star,
  GraduationCap,
  Award,
  Sparkles,
  Code,
  Crown,
  Users,
} from "lucide-react";
import { useRef } from "react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import TiltedCard from "@/components/ui/TiltedCard";

const achievements = [
  {
    title: "Winner – Oscillations National Technical Research Paper",
    description: "Won the Oscillations National Technical Research Paper Presentation, India (2026).",
    icon: Crown,
    color: "#f59e0b",
    glowColor: "rgba(245, 158, 11, 0.4)",
    tag: "WINNER 2026",
    image: "/images/winner-trophy.png",
  },
  {
    title: "2nd Place – Oscillations National Paper Presentation",
    description: "NeuroRender: Rendering Thoughts into Images — National Paper Presentation, India (Apr 2025).",
    icon: Award,
    color: "#a855f7",
    glowColor: "rgba(168, 85, 247, 0.4)",
    tag: "2ND PLACE 2025",
    image: "/images/neurorender.png",
  },
  {
    title: "Creative Head – VCET National Students Data Corps",
    description: "Leading creative initiatives for the National Students Data Corps at VCET (Jun 2024 – Present).",
    icon: Users,
    color: "#ffffff",
    glowColor: "rgba(255, 255, 255, 0.25)",
    tag: "LEADERSHIP",
    image: "/images/creative-head.png",
  },
  {
    title: "400+ LeetCode Problems Solved",
    description: "Solved over 400 problems on LeetCode, strengthening DSA and problem-solving skills.",
    icon: Code,
    color: "#22c55e",
    glowColor: "rgba(34, 197, 94, 0.4)",
    tag: "DSA MASTERY",
    image: "/images/leetcode.png",
  },
];

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "100%"]);

  return (
    <section
      id="education"
      ref={containerRef}
      className="py-32 px-6 relative overflow-hidden"
    >
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="space-y-24">
          <div className="relative">
            <div className="mb-16">
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="font-combat text-5xl md:text-7xl text-white uppercase tracking-tight text-center text-glow-white"
              >
                SYSTEM WINS
              </motion.h2>
              <div className="mt-6 h-1 w-32 bg-purple-600 mx-auto shadow-[0_0_15px_purple]" />
            </div>

            {/* Achievement TiltedCards in a 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
              {achievements.map((achievement, idx) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: idx * 0.15,
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    className="flex flex-col items-center"
                  >
                    <TiltedCard
                      imageSrc={achievement.image}
                      altText={achievement.title}
                      captionText={achievement.title}
                      containerHeight="360px"
                      containerWidth="100%"
                      imageHeight="340px"
                      imageWidth="100%"
                      rotateAmplitude={12}
                      scaleOnHover={1.08}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={true}
                      overlayContent={
                        <div className="flex flex-col justify-end h-full w-full p-5 rounded-[15px] bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                          {/* Tag */}
                          <span
                            className="mb-2 self-start inline-block rounded-full px-3 py-0.5 text-[9px] font-bold tracking-[0.25em] uppercase backdrop-blur-md"
                            style={{
                              background: `${achievement.glowColor}`,
                              color: achievement.color,
                              border: `1px solid ${achievement.color}40`,
                            }}
                          >
                            {achievement.tag}
                          </span>

                          {/* Title */}
                          <h4
                            className="text-sm md:text-base text-white leading-snug mb-1.5 font-bold"
                            style={{ fontFamily: "var(--font-audiowide)" }}
                          >
                            {achievement.title}
                          </h4>

                          {/* Description */}
                          <p className="text-[11px] text-slate-300/80 leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      }
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Academic Universe Board with Floating Animation & BorderGlow */}
          <motion.div
            animate={{ y: [-12, 12, -12] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-4xl mx-auto"
          >
            <SpotlightCard
              spotlightColor="rgba(192, 132, 252, 0.25)"
              className="w-full rounded-[40px] border border-white/10 shadow-[0_0_50px_rgba(124,58,237,0.15)] bg-gradient-to-br from-white/[0.05] via-transparent to-purple-500/[0.05] backdrop-blur-md"
            >
              <div className="relative overflow-hidden rounded-[40px] p-10 md:p-14 text-white">
                {/* Background Watermark Graduation Cap */}
                <div className="absolute -right-10 -top-10 opacity-15 text-white pointer-events-none">
                  <GraduationCap size={320} strokeWidth={1.2} />
                </div>

                <div className="relative z-10">
                  {/* Academic Peak Pill Tag */}
                  <div className="mb-8 inline-flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white border border-white/15 backdrop-blur-md">
                    <Star
                      size={14}
                      className="text-amber-400 fill-amber-400"
                    />
                    <span>ACADEMIC PEAK</span>
                    <Sparkles
                      size={13}
                      className="text-purple-300 animate-pulse"
                    />
                  </div>

                  {/* College Titles */}
                  <h3 
                    className="text-3xl md:text-5xl font-black text-white mb-3 uppercase tracking-tight drop-shadow-md"
                    style={{ fontFamily: "var(--font-michroma)" }}
                  >
                    MUMBAI UNIVERSITY
                  </h3>
                  <p className="mb-12 text-base md:text-xl font-medium text-slate-300 leading-snug max-w-lg">
                    Vidyavardhinis College of Engineering & Technology
                  </p>

                  {/* Meta Score & Glowing Trophy Badge */}
                  <div className="flex items-end justify-between pt-4">
                    <div>
                      <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-2">
                        FINAL META SCORE
                      </p>
                      <div className="flex items-baseline gap-3">
                        <span className="text-5xl md:text-6xl font-black text-white drop-shadow-lg">
                          9.1
                        </span>
                        <span className="text-lg md:text-xl font-bold text-slate-500 uppercase tracking-widest">
                          CGPA
                        </span>
                      </div>
                    </div>

                    <motion.div
                      animate={{
                        scale: [1, 1.08, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.95)] relative shrink-0"
                    >
                      <Trophy size={36} className="text-black" />
                      <Star
                        size={10}
                        className="absolute bottom-3 right-3 text-amber-500 fill-amber-500 animate-ping"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

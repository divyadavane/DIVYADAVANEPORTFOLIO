"use client";
import React, { useRef } from "react";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  BarChart3,
  Brain,
  Cpu,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const internships = [
  {
    id: "godrej",
    title: "Data Analytics Intern",
    company: "Godrej Industries Ltd.",
    location: "Mumbai, India",
    date: "Jan 2025 – Mar 2025",
    icon: BarChart3,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
    description: [
      "Analysed large-scale sales and supply-chain datasets using Python (Pandas, NumPy) and SQL to surface actionable business insights.",
      "Built interactive Power BI dashboards tracking KPIs — revenue, inventory turnover, and regional sales — for senior stakeholders.",
      "Automated ETL pipelines to reduce manual data-cleaning effort by ~40%, improving reporting cycle time.",
    ],
    color: "#0a0a14",
    rotation: "rotate-2",
  },
  {
    id: "ai-virtual",
    title: "AI and Data Skilled Intern",
    company: "Virtual Internship",
    location: "Mumbai, India",
    date: "Virtual Internship",
    icon: Brain,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop",
    description: [
      "Implemented ML algorithms (Linear/Logistic Regression, Decision Trees); performed data cleaning and preprocessing.",
      "Developed Python scripts for automated data handling and pipeline execution.",
    ],
    color: "#0f0f1b",
    rotation: "-rotate-2",
  },
  {
    id: "vcet",
    title: "Data Science & Deep Learning Intern",
    company: "Fellowship, VCET",
    location: "Mumbai, India",
    date: "Jun 2023 – Jul 2023",
    icon: Cpu,
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2865&auto=format&fit=crop",
    description: [
      "Performed EDA with Pandas, Matplotlib, Seaborn; developed CNN and RNN/LSTM models using TensorFlow/PyTorch.",
      "Applied transfer learning (VGG, ResNet, BERT) on limited datasets to improve model accuracy.",
    ],
    color: "#141424",
    rotation: "rotate-0",
  },
];

export const Internships = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="internships" className="py-32 px-6 relative overflow-hidden" ref={containerRef}>
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-4 px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-sm"
          >
            Professional Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-combat text-4xl md:text-6xl text-white uppercase tracking-tight mb-6 text-glow-white"
          >
            Internships
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>

        <div className="w-full relative mt-20">
          {/* Single Box for All Internships */}
          <div className="relative rounded-3xl border border-purple-500/30 bg-transparent backdrop-blur-3xl shadow-2xl overflow-hidden animated-border-glow">
            <div className="p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
                {internships.map((item, i) => {
                  const Icon = item.icon;
                  
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.15 }}
                    >
                      <article className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-slate-900/40 backdrop-blur-xl hover:border-purple-500/40 transition-all duration-300">
                        <div className="p-6">
                          {/* Header */}
                          <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-500/30 shrink-0">
                              <Icon className="w-6 h-6 text-purple-400" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-display text-lg md:text-xl font-black text-white uppercase tracking-tight mb-1">
                                {item.title}
                              </h3>
                              <p className="text-purple-400 font-bold text-xs uppercase tracking-[0.2em]">
                                {item.company}
                              </p>
                            </div>
                          </div>

                          {/* Meta info */}
                          <div className="flex flex-wrap gap-3 mb-4">
                            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                              <Calendar className="w-3.5 h-3.5 text-amber-500" />
                              <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">{item.date}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                              <MapPin className="w-3.5 h-3.5 text-purple-400" />
                              <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">{item.location}</span>
                            </div>
                          </div>

                          {/* Image */}
                          <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4 group shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </div>

                          {/* Description */}
                          <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500 mb-3 block">
                              Responsibilities
                            </span>
                            <ul className="space-y-2">
                              {item.description.map((desc, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2"
                                >
                                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-purple-500 shrink-0" />
                                  <span className="text-slate-200 font-medium tracking-tight text-xs leading-relaxed">{desc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </article>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

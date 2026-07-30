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
import { motion } from "framer-motion";

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
    id: "pratinik",
    title: "Machine Learning Intern",
    company: "Pratinik Infotech",
    location: "Work From Home",
    date: "2025",
    icon: Brain,
    image: "/images/pratinik-ml.png",
    description: [
      "Developed and fine-tuned Machine Learning models for predictive analysis and pattern recognition using Python and PyTorch.",
      "Engineered automated data preprocessing pipelines, feature selection methods, and model evaluation benchmarks.",
      "Collaborated remotely with senior tech leads to integrate ML inference endpoints into scalable applications.",
    ],
    color: "#0f0f1b",
    rotation: "rotate-1",
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
            className="mb-4 px-4 py-1 rounded-full border border-[#123d73]/60 bg-[#061a33]/70 text-[#9cc7ff] text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-sm"
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
          <div className="w-24 h-1 bg-[#001f3f] rounded-full shadow-[0_0_24px_rgba(0,31,63,0.9)]" />
        </div>

        <div className="w-full relative mt-20">
          {/* Single Box with Original Blue Border & Navy Glow for All Internships */}
          <div className="relative rounded-3xl border border-[#123d73]/70 bg-transparent backdrop-blur-3xl shadow-2xl overflow-hidden internship-navy-glow">
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
                      <article className="relative overflow-hidden rounded-2xl transition-all duration-300 group">
                        <div className="absolute z-[-1] overflow-hidden h-full w-full rounded-2xl blur-[2px] 
                                        before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-60
                                        before:bg-[conic-gradient(#000,#402fb5_5%,#000_38%,#000_50%,#cf30aa_60%,#000_87%)] before:transition-all before:duration-2000
                                        group-hover:before:rotate-[-120deg] before:animate-[spin_4s_linear_infinite]">
                        </div>
                        <div className="absolute z-[-1] overflow-hidden h-full w-full rounded-2xl blur-[1px] 
                                        before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[82deg]
                                        before:bg-[conic-gradient(rgba(0,0,0,0),#18116a,rgba(0,0,0,0)_10%,rgba(0,0,0,0)_50%,#6e1b60,rgba(0,0,0,0)_60%)] before:transition-all before:duration-2000
                                        group-hover:before:rotate-[-98deg] before:animate-[spin_3s_linear_infinite_reverse]">
                        </div>
                        <div className="relative bg-[#020b18]/95 rounded-2xl p-6">
                          {/* Header */}
                          <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 rounded-xl bg-[#0b2f5b]/70 border border-[#1d5a9f]/60 shrink-0">
                              <Icon className="w-6 h-6 text-[#9cc7ff]" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-display text-lg md:text-xl font-black text-white uppercase tracking-tight mb-1">
                                {item.title}
                              </h3>
                              <p className="text-[#9cc7ff] font-bold text-xs uppercase tracking-[0.2em]">
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
                              <MapPin className="w-3.5 h-3.5 text-[#9cc7ff]" />
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
                                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#1d5a9f] shrink-0" />
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



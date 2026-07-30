"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertTriangle, Loader2 } from "lucide-react";

// ╔══════════════════════════════════════════════════════════════════╗
// ║  🔑 PASTE YOUR WEB3FORMS ACCESS KEY BELOW                      ║
// ║  Get your free key at: https://web3forms.com                    ║
// ║  Sign up with: divyadavane0@gmail.com                           ║
// ╚══════════════════════════════════════════════════════════════════╝
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

const PROJECT_TYPES = [
  "Web Development",
  "UI/UX Design",
  "Full Stack Build",
  "Consulting",
  "Other",
];

const BUDGET_RANGES = [
  "< $500",
  "$500 – $2,000",
  "$2,000 – $5,000",
  "$5,000+",
];

// ── Corner Bracket decoration ──
function CornerBrackets() {
  const corners = [
    "top-0 left-0 border-t-2 border-l-2",
    "top-0 right-0 border-t-2 border-r-2",
    "bottom-0 left-0 border-b-2 border-l-2",
    "bottom-0 right-0 border-b-2 border-r-2",
  ];
  return (
    <>
      {corners.map((pos, i) => (
        <div
          key={i}
          className={`absolute w-6 h-6 ${pos} pointer-events-none`}
          style={{
            borderColor: i % 2 === 0 ? "#00fff0" : "#ff00ff",
            opacity: 0.7,
          }}
        />
      ))}
    </>
  );
}

// ── Scanline overlay ──
function ScanlineOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-20 opacity-[0.03]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.08) 2px, rgba(255,255,255,0.08) 4px)",
        animation: "scanline-scroll 8s linear infinite",
      }}
    />
  );
}

export default function CyberpunkContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg("⚠ Required fields: Name, Email, and Message.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setErrorMsg("⚠ Invalid email format.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    if (!validate()) return;

    setStatus("loading");

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: "New Freelance Inquiry from Portfolio",
        from_name: form.name,
        name: form.name,
        email: form.email,
        "Project Type": form.projectType || "Not specified",
        "Budget Range": form.budget || "Not specified",
        message: form.message,
        botcheck: "", // honeypot
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setErrorMsg(data.message || "Transmission failed. Try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Check your connection.");
      setStatus("error");
    }
  };

  // ── Input styles ──
  const inputBase =
    "w-full bg-black/40 text-cyan-50 placeholder:text-white/20 font-mono text-sm px-4 py-3.5 rounded-lg border border-cyan-400/30 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 focus:shadow-[0_0_20px_rgba(0,255,255,0.25)] hover:border-cyan-400/50";
  const labelBase =
    "block text-[11px] font-bold tracking-[0.25em] uppercase mb-2 text-cyan-300/70 font-mono";
  const selectBase = `${inputBase} appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%2300fff0%22%20d%3D%22M2%204l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_12px_center]`;

  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 px-4 md:px-8 overflow-hidden flex flex-col items-center justify-center"
      style={{ background: "#0a0a0f" }}
    >
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,240,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,240,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "grid-drift 20s linear infinite",
        }}
      />
      <ScanlineOverlay />

      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-14 relative z-10"
      >
        <h2
          className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-3 cyberpunk-glitch-heading cursor-default select-none"
          style={{
            fontFamily: "var(--font-orbitron), monospace",
            color: "#fff",
            textShadow:
              "0 0 10px rgba(0,255,240,0.6), 0 0 40px rgba(0,255,240,0.2), 2px 2px 0 rgba(255,0,255,0.4), -2px -2px 0 rgba(0,255,240,0.3)",
          }}
        >
          Hire Me
        </h2>
        <p
          className="text-sm md:text-base font-mono tracking-widest uppercase"
          style={{ color: "rgba(0,255,240,0.45)" }}
        >
          // Freelance Inquiry Terminal
        </p>
      </motion.div>

      {/* Form container */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl z-10"
      >
        {/* HUD container */}
        <div
          className="relative rounded-2xl p-8 md:p-12"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,255,240,0.04) 0%, rgba(0,0,0,0.6) 40%, rgba(255,0,255,0.03) 100%)",
            backdropFilter: "blur(30px) saturate(150%)",
            WebkitBackdropFilter: "blur(30px) saturate(150%)",
            border: "1px solid rgba(0,255,240,0.15)",
            boxShadow:
              "0 0 60px rgba(0,255,240,0.06), 0 0 120px rgba(255,0,255,0.04), inset 0 1px 0 rgba(0,255,240,0.12)",
          }}
        >
          <CornerBrackets />
          <ScanlineOverlay />

          <AnimatePresence mode="wait">
            {status === "success" ? (
              /* ── Success state ── */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center py-16 gap-6 text-center"
              >
                <div
                  className="rounded-full p-4"
                  style={{
                    background: "rgba(0,255,240,0.1)",
                    boxShadow: "0 0 40px rgba(0,255,240,0.3), 0 0 80px rgba(0,255,240,0.1)",
                  }}
                >
                  <CheckCircle size={48} style={{ color: "#00fff0" }} />
                </div>
                <h3
                  className="text-2xl md:text-3xl font-black uppercase tracking-wider"
                  style={{
                    fontFamily: "var(--font-orbitron), monospace",
                    color: "#00fff0",
                    textShadow: "0 0 20px rgba(0,255,240,0.5)",
                  }}
                >
                  Message Transmitted ✓
                </h3>
                <p className="text-white/50 font-mono text-sm max-w-xs">
                  Your inquiry has been received. I&apos;ll respond within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setForm({ name: "", email: "", projectType: "", budget: "", message: "" });
                  }}
                  className="mt-4 font-mono text-xs uppercase tracking-widest px-6 py-2 rounded border transition-all duration-300 hover:bg-cyan-400/10"
                  style={{ color: "#00fff0", borderColor: "rgba(0,255,240,0.3)" }}
                >
                  [New Inquiry]
                </button>
              </motion.div>
            ) : (
              /* ── Form state ── */
              <motion.form
                key="form"
                ref={formRef}
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {/* Honeypot (spam protection) */}
                <input type="hidden" name="botcheck" style={{ display: "none" }} />

                {/* Name + Email row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="cf-name" className={labelBase}>
                      Name <span style={{ color: "#ff00ff" }}>*</span>
                    </label>
                    <input
                      id="cf-name"
                      type="text"
                      name="name"
                      required
                      placeholder="John Connor"
                      value={form.name}
                      onChange={handleChange}
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label htmlFor="cf-email" className={labelBase}>
                      Email <span style={{ color: "#ff00ff" }}>*</span>
                    </label>
                    <input
                      id="cf-email"
                      type="email"
                      name="email"
                      required
                      placeholder="connor@skynet.io"
                      value={form.email}
                      onChange={handleChange}
                      className={inputBase}
                    />
                  </div>
                </div>

                {/* Project Type + Budget row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="cf-project" className={labelBase}>
                      Project Type
                    </label>
                    <select
                      id="cf-project"
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className={selectBase}
                    >
                      <option value="" disabled>
                        Select type...
                      </option>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t} className="bg-[#0a0a0f] text-cyan-50">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="cf-budget" className={labelBase}>
                      Budget Range
                    </label>
                    <select
                      id="cf-budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className={selectBase}
                    >
                      <option value="" disabled>
                        Select budget...
                      </option>
                      {BUDGET_RANGES.map((b) => (
                        <option key={b} value={b} className="bg-[#0a0a0f] text-cyan-50">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="cf-message" className={labelBase}>
                    Message <span style={{ color: "#ff00ff" }}>*</span>
                  </label>
                  <textarea
                    id="cf-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe your project, goals, and timeline..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputBase} resize-none`}
                  />
                </div>

                {/* Error message */}
                {(status === "error" || errorMsg) && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-mono"
                    style={{
                      background: "rgba(255,0,100,0.1)",
                      border: "1px solid rgba(255,0,100,0.3)",
                      color: "#ff3366",
                    }}
                  >
                    <AlertTriangle size={16} />
                    {errorMsg}
                  </motion.div>
                )}

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group relative w-full md:w-auto font-mono text-sm font-bold uppercase tracking-[0.2em] px-10 py-4 rounded-sm overflow-hidden transition-all duration-500 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                      background:
                        status === "loading"
                          ? "rgba(0,255,240,0.15)"
                          : "rgba(0,255,240,0.08)",
                      border: "1.5px solid rgba(0,255,240,0.5)",
                      color: "#00fff0",
                      boxShadow: "0 0 20px rgba(0,255,240,0.1)",
                    }}
                    onMouseEnter={(e) => {
                      if (status !== "loading") {
                        e.currentTarget.style.boxShadow =
                          "0 0 40px rgba(0,255,240,0.3), inset 0 0 30px rgba(0,255,240,0.08)";
                        e.currentTarget.style.background = "rgba(0,255,240,0.15)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (status !== "loading") {
                        e.currentTarget.style.boxShadow = "0 0 20px rgba(0,255,240,0.1)";
                        e.currentTarget.style.background = "rgba(0,255,240,0.08)";
                      }
                    }}
                  >
                    {status === "loading" ? (
                      <span className="flex items-center justify-center gap-3">
                        <Loader2 size={18} className="animate-spin" />
                        Transmitting...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-3">
                        <Send size={16} />
                        Transmit Inquiry
                      </span>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Ambient glow beneath form */}
        <div
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 rounded-full blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(0,255,240,0.12) 0%, rgba(255,0,255,0.06) 60%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes grid-drift {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }
        @keyframes scanline-scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .cyberpunk-glitch-heading:hover {
          animation: glitch-flicker 0.3s ease-in-out;
        }
        @keyframes glitch-flicker {
          0%,
          100% {
            text-shadow: 0 0 10px rgba(0, 255, 240, 0.6),
              0 0 40px rgba(0, 255, 240, 0.2), 2px 2px 0 rgba(255, 0, 255, 0.4),
              -2px -2px 0 rgba(0, 255, 240, 0.3);
          }
          20% {
            text-shadow: -3px 0 rgba(255, 0, 255, 0.8), 3px 0 rgba(0, 255, 240, 0.8),
              0 0 30px rgba(250, 255, 0, 0.3);
          }
          40% {
            text-shadow: 2px 0 rgba(0, 255, 240, 0.8), -2px 0 rgba(255, 0, 255, 0.8),
              0 0 60px rgba(0, 255, 240, 0.4);
          }
          60% {
            text-shadow: -1px 2px rgba(255, 0, 255, 0.6), 1px -1px rgba(0, 255, 240, 0.6),
              0 0 20px rgba(250, 255, 0, 0.2);
          }
          80% {
            text-shadow: 3px 1px rgba(0, 255, 240, 0.7), -3px -1px rgba(255, 0, 255, 0.7),
              0 0 50px rgba(0, 255, 240, 0.3);
          }
        }
      `}</style>
    </section>
  );
}

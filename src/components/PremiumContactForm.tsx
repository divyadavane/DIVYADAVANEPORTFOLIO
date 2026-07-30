"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║  🔑 WEB3FORMS ACCESS KEY                                                ║
// ║  Paste your Web3Forms Access Key below.                                 ║
// ║  Get your free key at: https://web3forms.com (using divyadavane0@gmail.com) ║
// ╚══════════════════════════════════════════════════════════════════════════╝
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

interface FormInputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FloatingInput({ id, name, label, type = "text", required = false, value, onChange }: FormInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const isFloating = isFocused || value.length > 0;

  return (
    <div className="relative pt-6 pb-2">
      {/* Floating Label */}
      <motion.label
        htmlFor={id}
        initial={false}
        animate={{
          y: isFloating ? -24 : 0,
          scale: isFloating ? 0.85 : 1,
          color: isFocused ? "#c9a961" : "rgba(255, 255, 255, 0.4)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute left-0 top-6 origin-left pointer-events-none uppercase tracking-[0.2em] font-medium text-[11px]"
        style={{ fontFamily: "'Ethnocentric', 'COMBAT PATRIOT', var(--font-orbitron), sans-serif" }}
      >
        {label} {required && <span className="text-[#c9a961] ml-0.5">*</span>}
      </motion.label>

      {/* Underline Input */}
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full bg-transparent text-white font-inter text-sm py-1 outline-none border-none tracking-wide"
      />

      {/* Base Hairline Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10" />

      {/* Animated Gold Underline */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#c9a961]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />
    </div>
  );
}

interface FloatingSelectProps {
  id: string;
  name: string;
  label: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function FloatingSelect({ id, name, label, options, value, onChange }: FloatingSelectProps) {
  const [isFocused, setIsFocused] = useState(false);
  const isFloating = isFocused || value.length > 0;

  return (
    <div className="relative pt-6 pb-2">
      {/* Floating Label */}
      <motion.label
        htmlFor={id}
        initial={false}
        animate={{
          y: isFloating ? -24 : 0,
          scale: isFloating ? 0.85 : 1,
          color: isFocused ? "#c9a961" : "rgba(255, 255, 255, 0.4)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute left-0 top-6 origin-left pointer-events-none uppercase tracking-[0.2em] font-medium text-[11px]"
        style={{ fontFamily: "'Ethnocentric', 'COMBAT PATRIOT', var(--font-orbitron), sans-serif" }}
      >
        {label}
      </motion.label>

      {/* Underline Select */}
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full bg-transparent text-white font-inter text-sm py-1 outline-none border-none tracking-wide appearance-none cursor-pointer pr-6"
        style={{
          backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath fill='%3Ac9a961' d='M0 0l5 6 5-6z'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 4px center",
        }}
      >
        <option value="" disabled className="bg-[#0a0a0a] text-white/50">
          Select option...
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-[#0a0a0a] text-white">
            {opt}
          </option>
        ))}
      </select>

      {/* Base Hairline Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10" />

      {/* Animated Gold Underline */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#c9a961]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />
    </div>
  );
}

interface FloatingTextareaProps {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function FloatingTextarea({ id, name, label, required = false, value, onChange }: FloatingTextareaProps) {
  const [isFocused, setIsFocused] = useState(false);
  const isFloating = isFocused || value.length > 0;

  return (
    <div className="relative pt-6 pb-2">
      {/* Floating Label */}
      <motion.label
        htmlFor={id}
        initial={false}
        animate={{
          y: isFloating ? -24 : 0,
          scale: isFloating ? 0.85 : 1,
          color: isFocused ? "#c9a961" : "rgba(255, 255, 255, 0.4)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute left-0 top-6 origin-left pointer-events-none uppercase tracking-[0.2em] font-medium text-[11px]"
        style={{ fontFamily: "'Ethnocentric', 'COMBAT PATRIOT', var(--font-orbitron), sans-serif" }}
      >
        {label} {required && <span className="text-[#c9a961] ml-0.5">*</span>}
      </motion.label>

      {/* Underline Textarea */}
      <textarea
        id={id}
        name={name}
        required={required}
        rows={4}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full bg-transparent text-white font-inter text-sm py-1 outline-none border-none tracking-wide resize-none"
      />

      {/* Base Hairline Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10" />

      {/* Animated Gold Underline */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#c9a961]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />
    </div>
  );
}

export default function PremiumContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg("Please complete all required fields.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setErrorMsg("Please enter a valid email address.");
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
        botcheck: "",
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
        setErrorMsg(data.message || "Transmission failed. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please verify your connection.");
      setStatus("error");
    }
  };

  return (
    <div className="w-full bg-[#000000] text-white py-16 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto"
      >
        {/* Section Heading */}
        <div className="mb-14 text-left">
          <h2
            className="text-3xl md:text-5xl font-bold uppercase tracking-[0.25em] text-white mb-4"
            style={{ fontFamily: "'Ethnocentric', 'COMBAT PATRIOT', var(--font-orbitron), sans-serif" }}
          >
            Hire Me
          </h2>
          <p className="text-white/40 text-xs font-inter uppercase tracking-[0.3em] mb-4">
            Freelance &amp; Contract Inquiries
          </p>

          {/* Animated Gold Draw Line */}
          <div className="relative h-[1px] w-full bg-white/10 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-[#c9a961]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
            />
          </div>
        </div>

        {/* Form Container */}
        <AnimatePresence mode="wait">
          {status === "success" ? (
            /* Minimal Luxury Confirmation State */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="py-20 px-8 text-center border border-white/10 rounded-sm bg-black"
            >
              {/* Minimal Animated Checkmark */}
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-[#c9a961]" viewBox="0 0 52 52">
                  <motion.circle
                    cx="26"
                    cy="26"
                    r="23"
                    fill="none"
                    stroke="#c9a961"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                  <motion.path
                    fill="none"
                    stroke="#c9a961"
                    strokeWidth="2"
                    d="M14 27l7 7 16-16"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
                  />
                </svg>
              </div>

              <h3
                className="text-xl md:text-2xl font-bold uppercase tracking-[0.3em] text-[#c9a961] mb-3"
                style={{ fontFamily: "'Ethnocentric', 'COMBAT PATRIOT', var(--font-orbitron), sans-serif" }}
              >
                Message Received
              </h3>
              <p className="text-white/50 font-inter text-sm max-w-sm mx-auto leading-relaxed">
                Thank you for your inquiry. I will review your details and respond within 24 hours.
              </p>

              <button
                onClick={() => {
                  setStatus("idle");
                  setForm({ name: "", email: "", projectType: "", budget: "", message: "" });
                }}
                className="mt-8 text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-[#c9a961] transition-colors duration-300 border-b border-transparent hover:border-[#c9a961] pb-1 font-inter"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            /* Luxury Form */
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Honeypot Spam Protection */}
              <input type="hidden" name="botcheck" style={{ display: "none" }} />

              {/* Name & Email Row */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
              >
                <FloatingInput
                  id="p-name"
                  name="name"
                  label="Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
                <FloatingInput
                  id="p-email"
                  name="email"
                  label="Email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </motion.div>

              {/* Project Type & Budget Range Row */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
              >
                <FloatingSelect
                  id="p-project"
                  name="projectType"
                  label="Project Type"
                  options={PROJECT_TYPES}
                  value={form.projectType}
                  onChange={handleChange}
                />
                <FloatingSelect
                  id="p-budget"
                  name="budget"
                  label="Budget Range"
                  options={BUDGET_RANGES}
                  value={form.budget}
                  onChange={handleChange}
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <FloatingTextarea
                  id="p-message"
                  name="message"
                  label="Project Details"
                  required
                  value={form.message}
                  onChange={handleChange}
                />
              </motion.div>

              {/* Error State */}
              {errorMsg && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400/90 text-xs font-inter tracking-wide py-1"
                >
                  ⚠ {errorMsg}
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pt-6"
              >
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group w-full md:w-auto px-12 py-4 bg-black border border-[#c9a961]/40 text-[#c9a961] hover:bg-[#c9a961] hover:text-black transition-colors duration-400 tracking-[0.3em] uppercase text-xs font-bold select-none disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: "'Ethnocentric', 'COMBAT PATRIOT', var(--font-orbitron), sans-serif" }}
                >
                  <AnimatePresence mode="wait">
                    {status === "loading" ? (
                      <motion.span
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                        className="inline-block"
                      >
                        Sending...
                      </motion.span>
                    ) : (
                      <motion.span key="normal" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        Submit Inquiry
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

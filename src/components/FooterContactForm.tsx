"use client";

import React, { useState } from "react";

// ============================================================================
// 🔑 WEB3FORMS ACCESS KEY
// Sign up for free at https://web3forms.com with divyadavane0@gmail.com
// Paste your Access Key below:
// ============================================================================
const WEB3FORMS_ACCESS_KEY = "6218abc0-5cd2-4081-a56e-d0242bcbee71";

const ethnocentricFont = {
  fontFamily: "'Ethnocentric', 'COMBAT PATRIOT', var(--font-orbitron), sans-serif",
};

export default function FooterContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New message from portfolio footer",
          from_name: form.name,
          email: form.email,
          message: form.message,
          botcheck: "", // Honeypot field for spam protection
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
      } else {
        setErrorMessage(data.message || "Failed to send message. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please try again later.");
      setStatus("error");
    }
  };

  return (
    <div
      className="w-full max-w-xl text-white p-8 md:p-10 rounded-2xl bg-[#0d1b2a] border border-[#1e3a5f]/60 shadow-xl"
    >
      <h3
        className="text-xl md:text-2xl font-bold mb-2 text-white uppercase tracking-wider"
        style={ethnocentricFont}
      >
        LET'S WORK TOGETHER
      </h3>
      <p className="text-slate-400 text-sm mb-6 font-inter">
        Have a project in mind? Send me a message below.
      </p>

      {status === "success" ? (
        <div className="py-10 text-center">
          <p
            className="text-emerald-400 font-medium text-sm md:text-base mb-4 uppercase tracking-wide"
            style={ethnocentricFont}
          >
            Thanks! I'll get back to you soon.
          </p>
          <button
            onClick={() => {
              setForm({ name: "", email: "", message: "" });
              setStatus("idle");
            }}
            className="text-sm text-slate-400 underline hover:text-white transition-colors"
            style={ethnocentricFont}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Honeypot field for spam bots */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
          />

          <div>
            <label
              htmlFor="footer-name"
              className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-widest"
              style={ethnocentricFont}
            >
              NAME <span className="text-slate-400">*</span>
            </label>
            <input
              id="footer-name"
              type="text"
              name="name"
              required
              placeholder="YOUR NAME"
              value={form.name}
              onChange={handleChange}
              style={ethnocentricFont}
              className="w-full bg-[#06101e] text-white text-sm px-4 py-3.5 rounded-lg border border-[#1e3a5f]/80 focus:border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-300 transition-colors placeholder:text-slate-600 tracking-wider"
            />
          </div>

          <div>
            <label
              htmlFor="footer-email"
              className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-widest"
              style={ethnocentricFont}
            >
              EMAIL <span className="text-slate-400">*</span>
            </label>
            <input
              id="footer-email"
              type="email"
              name="email"
              required
              placeholder="YOU@EXAMPLE.COM"
              value={form.email}
              onChange={handleChange}
              style={ethnocentricFont}
              className="w-full bg-[#06101e] text-white text-sm px-4 py-3.5 rounded-lg border border-[#1e3a5f]/80 focus:border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-300 transition-colors placeholder:text-slate-600 tracking-wider"
            />
          </div>

          <div>
            <label
              htmlFor="footer-message"
              className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-widest"
              style={ethnocentricFont}
            >
              MESSAGE <span className="text-slate-400">*</span>
            </label>
            <textarea
              id="footer-message"
              name="message"
              required
              rows={4}
              placeholder="HOW CAN I HELP YOU?"
              value={form.message}
              onChange={handleChange}
              style={ethnocentricFont}
              className="w-full bg-[#06101e] text-white text-sm px-4 py-3.5 rounded-lg border border-[#1e3a5f]/80 focus:border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-300 transition-colors placeholder:text-slate-600 resize-none tracking-wider"
            />
          </div>

          {errorMessage && (
            <p className="text-red-400 text-xs md:text-sm font-medium pt-1" style={ethnocentricFont}>
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            style={ethnocentricFont}
            className="w-full bg-white text-[#0a192f] text-sm font-bold py-4 px-6 rounded-lg hover:bg-slate-200 transition-colors uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
          </button>
        </form>
      )}
    </div>
  );
}

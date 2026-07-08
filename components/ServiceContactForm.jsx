"use client";
import { useState } from "react";

const SERVICE_OPTIONS = [
  "Buyer Representation",
  "Seller Representation",
  "Renter Representation",
  "Landlord Representation",
  "Other",
];

const inputClass =
  "w-full bg-white/[0.07] border border-pale-blue/20 rounded-[6px] px-4 py-3 text-cream placeholder:text-pale-blue/50 text-[15px] focus:outline-none focus:border-gold/60 transition-colors duration-150";

const labelClass = "block text-xs font-semibold tracking-[0.14em] text-pale-blue mb-2";

export default function ServiceContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  function set(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div className="w-[72px] h-[72px] rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center mx-auto mb-6">
          <span className="text-gold text-2xl font-bold">✓</span>
        </div>
        <h3 className="font-display font-medium text-[clamp(28px,3vw,38px)] text-cream mb-3">
          Message received.
        </h3>
        <p className="text-pale-blue text-lg">
          I&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 min-[640px]:grid-cols-2 gap-5">
      {/* Name */}
      <div>
        <label className={labelClass}>Full Name *</label>
        <input
          required
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={set("name")}
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <label className={labelClass}>Email Address *</label>
        <input
          required
          type="email"
          placeholder="you@email.com"
          value={form.email}
          onChange={set("email")}
          className={inputClass}
        />
      </div>

      {/* Phone */}
      <div>
        <label className={labelClass}>Phone Number</label>
        <input
          type="tel"
          placeholder="(000) 000-0000"
          value={form.phone}
          onChange={set("phone")}
          className={inputClass}
        />
      </div>

      {/* Service */}
      <div>
        <label className={labelClass}>I&apos;m interested in</label>
        <select
          value={form.service}
          onChange={set("service")}
          className={`${inputClass} appearance-none cursor-pointer`}
        >
          <option value="" disabled className="bg-navy">
            Select a service
          </option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s} className="bg-navy">
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="min-[640px]:col-span-2">
        <label className={labelClass}>Message (optional)</label>
        <textarea
          rows={4}
          placeholder="Tell me a little about what you're looking for…"
          value={form.message}
          onChange={set("message")}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Actions */}
      <div className="min-[640px]:col-span-2 flex flex-col min-[500px]:flex-row gap-4 items-start min-[500px]:items-center justify-between pt-2">
        {/* Schedule button — replace # with your Calendly link */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold tracking-[0.05em] text-gold no-underline hover:text-gold/80 transition-colors duration-150"
        >
          Book a 15-min call directly →
        </a>

        <button
          type="submit"
          disabled={status === "loading"}
          className="font-bold text-[15px] tracking-[0.05em] text-ink bg-gold rounded-[7px] px-10 py-4 cursor-pointer transition-colors duration-150 hover:bg-gold-hover disabled:opacity-60 whitespace-nowrap"
        >
          {status === "loading" ? "Sending…" : "Send Message"}
        </button>
      </div>

      {status === "error" && (
        <p className="min-[640px]:col-span-2 text-sm text-red-400 mt-1">
          Something went wrong. Please email me directly at cadebarone00@gmail.com.
        </p>
      )}
    </form>
  );
}

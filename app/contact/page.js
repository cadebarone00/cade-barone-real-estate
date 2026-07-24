"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

const LOOKING_FOR_OPTIONS = ["Buying", "Selling", "Renting", "Landlord", "Just looking"];

const inputClass =
  "w-full bg-white border border-border-input rounded-[7px] px-[14px] py-3 text-ink placeholder:text-grey-text/60 text-[15px] focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(194,161,77,0.18)] transition-colors duration-150";

const labelClass = "block text-xs font-semibold tracking-[0.1em] text-grey-text mb-2";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "" });
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

  return (
    <>
      <Nav />
      <main>
        <section className="bg-navy">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(28px,3.5vw,44px)] text-center">
            <FadeUp>
              <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-[10px]">
                DALLAS REAL ESTATE · CONTACT
              </div>
              <h1 className="m-0 font-display font-medium tracking-[0.05em] text-[clamp(36px,4.8vw,58px)] leading-[1.04] text-cream">
                LET&apos;S TALK
              </h1>
            </FadeUp>
          </div>
        </section>

        <section className="bg-cream">
          <div className="max-w-[560px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(56px,7vw,96px)]">
            {status === "success" ? (
              <FadeUp>
                <div className="text-center py-10">
                  <h2 className="font-display font-medium tracking-[0.05em] text-[clamp(28px,3vw,38px)] text-ink mb-3">
                    Thank you — talk soon.
                  </h2>
                  <p className="text-grey-text text-lg">
                    I&apos;ll reach out within one business day.
                  </p>
                </div>
              </FadeUp>
            ) : (
              <FadeUp>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className={labelClass}>Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={set("name")}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Phone</label>
                    <input
                      type="tel"
                      placeholder="(000) 000-0000"
                      value={form.phone}
                      onChange={set("phone")}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Email *</label>
                    <input
                      required
                      type="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={set("email")}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>What are you looking for?</label>
                    <select
                      required
                      value={form.service}
                      onChange={set("service")}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      {LOOKING_FOR_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-1 font-bold text-[15px] tracking-[0.05em] text-ink bg-gold rounded-[7px] py-[15px] cursor-pointer transition-colors duration-150 hover:bg-gold-hover disabled:opacity-60"
                  >
                    {status === "loading" ? "Sending…" : "Send Message"}
                  </button>

                  {status === "error" && (
                    <p className="text-sm text-red-600">
                      Something went wrong. Please email me directly at
                      cadebarone00@gmail.com.
                    </p>
                  )}
                </form>
              </FadeUp>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

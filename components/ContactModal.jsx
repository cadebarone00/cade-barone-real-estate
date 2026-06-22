"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ContactModalContext = createContext(null);

export function ContactModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const open = () => {
    setSubmitted(false);
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <ContactModalContext.Provider value={{ open }}>
      {children}
      <div
        className={`fixed inset-0 z-[100] ${
          isOpen ? "flex" : "hidden"
        } items-center justify-center p-6 bg-ink/60 backdrop-blur-sm`}
        onClick={(e) => {
          if (!e.target.closest("[data-modal-card]")) close();
        }}
      >
        <div
          data-modal-card
          className="w-full max-w-[560px] bg-cream rounded-2xl shadow-[0_30px_80px_rgba(22,32,47,0.35)] overflow-hidden"
        >
          <div className="bg-navy px-[38px] pt-[30px] pb-[26px] relative">
            <div className="text-xs font-semibold tracking-[0.18em] text-gold mb-2.5">
              BOOK A CALL
            </div>
            <h2 className="font-display font-medium text-[32px] tracking-[0.02em] text-cream leading-[1.1] m-0">
              LET&apos;S <em className="italic">talk</em>
            </h2>
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-5 right-[22px] w-[34px] h-[34px] rounded-full border border-cream-deep/30 bg-transparent text-cream-deep text-lg leading-none cursor-pointer flex items-center justify-center"
            >
              &times;
            </button>
          </div>

          {submitted ? (
            <div className="px-[38px] pt-12 pb-[52px] text-center">
              <div className="font-display text-[26px] text-navy mb-2.5">
                Thank you — talk soon.
              </div>
              <p className="m-0 text-grey-text text-[15px] leading-[1.6]">
                Your message is on its way. I&apos;ll reach out within one
                business day to set up your 15-minute intro call.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="px-[38px] pt-[30px] pb-[38px] flex flex-col gap-4"
            >
              <div className="flex gap-4 flex-wrap">
                <label className="flex-1 min-w-[180px] flex flex-col gap-1.5 text-xs font-semibold tracking-[0.1em] text-grey-text">
                  FIRST NAME
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="text-[15px] text-ink px-[14px] py-3 border border-border-input rounded-[7px] bg-white outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(194,161,77,0.18)]"
                  />
                </label>
                <label className="flex-1 min-w-[180px] flex flex-col gap-1.5 text-xs font-semibold tracking-[0.1em] text-grey-text">
                  PHONE
                  <input
                    name="phone"
                    type="tel"
                    placeholder="(210) 000-0000"
                    className="text-[15px] text-ink px-[14px] py-3 border border-border-input rounded-[7px] bg-white outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(194,161,77,0.18)]"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-1.5 text-xs font-semibold tracking-[0.1em] text-grey-text">
                EMAIL
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  className="text-[15px] text-ink px-[14px] py-3 border border-border-input rounded-[7px] bg-white outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(194,161,77,0.18)]"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-xs font-semibold tracking-[0.1em] text-grey-text">
                WHAT ARE YOU LOOKING FOR?
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell me a little about your move — budget, timing, neighborhoods…"
                  className="text-[15px] text-ink px-[14px] py-3 border border-border-input rounded-[7px] bg-white outline-none resize-y focus:border-gold focus:shadow-[0_0_0_3px_rgba(194,161,77,0.18)]"
                />
              </label>
              <button
                type="submit"
                className="mt-1 font-bold text-[15px] tracking-[0.05em] text-ink bg-gold rounded-[7px] py-[15px] cursor-pointer transition-colors duration-150 hover:bg-gold-hover"
              >
                Request my intro call
              </button>
            </form>
          )}
        </div>
      </div>
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) {
    throw new Error("useContactModal must be used within a ContactModalProvider");
  }
  return ctx;
}

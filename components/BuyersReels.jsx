"use client";

import { useEffect, useState } from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const REELS = [
  { tag: "DALLAS CONDOS", title: "Uptown + Victory Park", sub: "$550K budget · 378 likes" },
  { tag: "INSIDE A 1-BED", title: "Bishop Arts tour", sub: "Listed for $619K · 207 likes" },
  { tag: "FIRST-TIME BUYER", title: "Lakewood walkthrough", sub: "Closing day · 294 likes" },
];

export default function BuyersReels() {
  const [reel, setReel] = useState(null);

  useEffect(() => {
    if (reel === null) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setReel(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [reel]);

  const active = reel === null ? null : REELS[reel];

  return (
    <>
      <div className="grid grid-cols-1 min-[640px]:grid-cols-3 gap-[clamp(20px,3vw,40px)] max-w-[320px] min-[640px]:max-w-[1000px] mx-auto">
        {REELS.map((r, i) => (
          <button
            key={r.title}
            onClick={() => setReel(i)}
            className="appearance-none bg-transparent border-0 p-0 m-0 text-left cursor-pointer block relative rounded-[14px] overflow-hidden shadow-[0_14px_36px_rgba(22,32,47,0.16)]"
          >
            <ImagePlaceholder label="Drop a reel still" className="w-full aspect-[9/16]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,32,47,0.05),rgba(22,32,47,0)_30%,rgba(22,32,47,0)_55%,rgba(22,32,47,0.78))] pointer-events-none" />
            <div className="absolute top-[14px] right-[14px] w-[34px] h-[34px] rounded-full bg-white/[0.92] flex items-center justify-center font-extrabold text-sm text-ink pointer-events-none">
              ♪
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[62px] h-[62px] rounded-full bg-cream/[0.92] flex items-center justify-center pointer-events-none">
              <span className="block border-y-[11px] border-y-transparent border-l-[18px] border-l-navy ml-[5px]" />
            </div>
            <div className="absolute left-[18px] right-[18px] bottom-[18px] text-left pointer-events-none">
              <div className="text-xs font-bold tracking-[0.16em] text-gold">{r.tag}</div>
              <div className="font-display text-lg text-cream mt-1">{r.title}</div>
              <div className="text-[13px] text-pale-blue-2 mt-0.5">{r.sub}</div>
            </div>
          </button>
        ))}
      </div>

      <div
        className={`fixed inset-0 z-[120] ${
          active ? "flex" : "hidden"
        } items-center justify-center p-6 bg-ink/[0.78] backdrop-blur-md`}
        onClick={(e) => {
          if (!e.target.closest("[data-lb-card]")) setReel(null);
        }}
      >
        <div data-lb-card className="w-full max-w-[360px]">
          <div className="relative rounded-2xl overflow-hidden bg-ink aspect-[9/16] flex items-center justify-center shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[74px] h-[74px] rounded-full bg-cream/[0.95] flex items-center justify-center">
              <span className="block border-y-[13px] border-y-transparent border-l-[22px] border-l-navy ml-1.5" />
            </div>
            <div className="absolute left-[22px] right-[22px] bottom-6">
              <div className="text-xs font-bold tracking-[0.16em] text-gold">{active?.tag}</div>
              <div className="font-display text-[22px] text-cream mt-1.5">{active?.title}</div>
              <div className="text-sm text-pale-blue mt-1">{active?.sub}</div>
            </div>
            <button
              onClick={() => setReel(null)}
              aria-label="Close"
              className="absolute top-4 right-4 w-9 h-9 rounded-full border-0 bg-ink/60 text-white text-xl cursor-pointer z-[2] flex items-center justify-center"
            >
              &times;
            </button>
          </div>
          <a
            href="#"
            className="block text-center mt-[18px] text-sm font-bold tracking-[0.08em] no-underline bg-gold text-ink py-[13px] rounded-lg"
          >
            Watch on TikTok →
          </a>
        </div>
      </div>
    </>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import SnowParticles from "./SnowParticles";

export default function Hero() {
  const layer1 = useRef<SVGSVGElement>(null);
  const layer2 = useRef<SVGSVGElement>(null);
  const layer3 = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (layer1.current) layer1.current.style.transform = `translateY(${y * 0.08}px)`;
        if (layer2.current) layer2.current.style.transform = `translateY(${y * 0.16}px)`;
        if (layer3.current) layer3.current.style.transform = `translateY(${y * 0.28}px)`;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-deep-navy to-mountain-near" />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Radial glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-ice-400/[0.04] rounded-full blur-[100px]" />

      {/* Floating code snippet (lab motif) */}
      <div
        className="absolute top-[15%] right-[8%] font-mono text-[11px] text-ice-400/[0.06] leading-relaxed hidden lg:block select-none pointer-events-none"
        style={{ animation: "float 8s ease-in-out infinite" }}
      >
        <pre>{`const lab = {
  experiments: [],
  prototype: async (idea) => {
    const result = await build(idea);
    return iterate(result);
  }
};`}</pre>
      </div>

      <div
        className="absolute bottom-[30%] left-[6%] font-mono text-[10px] text-terminal/[0.05] leading-relaxed hidden lg:block select-none pointer-events-none"
        style={{ animation: "float 10s ease-in-out infinite 2s" }}
      >
        <pre>{`> deploying to prod...
✓ tests passed (47/47)
✓ build optimized
✓ live in 2.3s`}</pre>
      </div>

      {/* Snow */}
      <SnowParticles />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-mono text-terminal text-xs sm:text-sm mb-8 tracking-[0.2em]">
          {"// creative_software_lab"}
        </p>

        {/* Logo as hero centerpiece */}
        <div className="flex justify-center mb-6">
          <Image
            src="/snow-labs-logo-only.png"
            alt="Snow Labs — Build · Prototype · Ship"
            width={320}
            height={175}
            className="w-48 sm:w-56 md:w-72 lg:w-80 object-contain drop-shadow-[0_8px_48px_rgba(74,179,204,0.25)]"
            priority
          />
        </div>

        <p className="font-body text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          Turning ideas into reality. We build, we experiment, we ship.
        </p>

        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-8 py-3 border border-ice-400/30 text-ice-400 font-mono text-xs sm:text-sm rounded-full hover:bg-ice-400/10 hover:border-ice-400/60 transition-all duration-300 group"
        >
          Explore Our Work
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>

      {/* Mountain layers */}
      <div className="absolute bottom-0 left-0 right-0 h-[250px] sm:h-[300px]">
        {/* Layer 1 — furthest, lightest */}
        <svg
          ref={layer1}
          className="absolute bottom-0 w-full will-change-transform"
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          style={{ height: "100%" }}
        >
          <path
            d="M0,300 C100,300 180,170 300,210 C420,250 480,110 600,170 C720,230 800,90 960,150 C1120,210 1200,130 1320,170 C1380,190 1420,240 1440,210 L1440,300 Z"
            fill="#1A3040"
          />
        </svg>

        {/* Layer 2 — middle */}
        <svg
          ref={layer2}
          className="absolute bottom-0 w-full will-change-transform"
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          style={{ height: "90%" }}
        >
          <path
            d="M0,300 C60,300 100,210 200,230 C300,250 380,130 500,190 C620,250 680,150 820,200 C960,250 1020,120 1160,180 C1300,240 1360,170 1440,210 L1440,300 Z"
            fill="#1A3028"
          />
        </svg>

        {/* Layer 3 — closest, darkest */}
        <svg
          ref={layer3}
          className="absolute bottom-0 w-full will-change-transform"
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          style={{ height: "75%" }}
        >
          <path
            d="M0,300 C80,300 120,240 220,255 C320,270 380,195 500,225 C620,255 700,195 840,225 C980,255 1040,205 1180,230 C1320,255 1380,225 1440,245 L1440,300 Z"
            fill="#0F1E26"
          />
        </svg>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
          scroll
        </span>
        <div className="w-5 h-8 border border-text-muted/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-ice-400/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}

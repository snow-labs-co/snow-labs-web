"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import SnowParticles from "./SnowParticles";
import CloudVeil from "./CloudVeil";

export default function Hero() {
  const layer0 = useRef<SVGSVGElement>(null);
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
        if (layer0.current) layer0.current.style.transform = `translateY(${y * 0.04}px)`;
        if (layer1.current) layer1.current.style.transform = `translateY(${y * 0.09}px)`;
        if (layer2.current) layer2.current.style.transform = `translateY(${y * 0.18}px)`;
        if (layer3.current) layer3.current.style.transform = `translateY(${y * 0.30}px)`;
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

      {/* Cloud veil — hides snow particles appearing at top edge */}
      <CloudVeil />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-mono text-terminal text-xs sm:text-sm mb-8 tracking-[0.2em]">
          {"// creative_software_lab"}
        </p>

        {/* Logo as hero centerpiece */}
        <div className="flex justify-center mb-4">
          <Image
            src="/snow-labs-logo-only.png"
            alt="Snow Labs — Build · Prototype · Ship"
            width={320}
            height={183}
            className="w-48 sm:w-56 md:w-72 lg:w-80 object-contain drop-shadow-[0_8px_48px_rgba(74,179,204,0.25)]"
            priority
          />
        </div>

        {/* Company name */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ice-50 tracking-widest uppercase mb-2">
          Snow Labs
        </h1>
        <p className="font-mono text-xs sm:text-sm tracking-[0.3em] text-ice-400 uppercase mb-8">
          Build · Prototype · Ship
        </p>

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
      <div className="absolute bottom-0 left-0 right-0 h-[280px] sm:h-[360px]">
        {/* Alpenglow — moonlight glow above the ridgeline */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 75% 45% at 50% 58%, rgba(44,109,140,0.13) 0%, transparent 68%)",
          }}
        />

        {/* Layer 0 — ghost haze, barely-there atmospheric far range */}
        <svg
          ref={layer0}
          className="absolute bottom-0 w-full will-change-transform"
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          style={{ height: "100%" }}
        >
          <path
            d="M0,300 L0,232 L88,216 L168,202 L238,194 L298,198 L356,174 L410,158 L466,168 L520,142 L566,122 L604,135 L640,106 L676,89 L708,102 L742,74 L775,88 L808,69 L840,82 L872,66 L904,84 L948,72 L998,92 L1052,76 L1106,98 L1160,82 L1216,104 L1272,89 L1332,112 L1392,96 L1440,116 L1440,300 Z"
            fill="#1C3B52"
            fillOpacity="0.42"
          />
        </svg>

        {/* Layer 1 — far dramatic range with dominant peaks */}
        <svg
          ref={layer1}
          className="absolute bottom-0 w-full will-change-transform"
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          style={{ height: "100%" }}
        >
          <defs>
            <linearGradient id="grad-far" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#243F52" />
              <stop offset="100%" stopColor="#1A3244" />
            </linearGradient>
          </defs>
          <path
            d="M0,300 L0,248 L54,238 L114,226 L174,236 L234,208 L290,190 L347,202 L404,176 L459,156 L503,168 L547,130 L579,112 L611,127 L645,91 L677,71 L709,85 L741,54 L769,69 L797,47 L825,63 L857,50 L889,72 L931,58 L981,78 L1037,62 L1089,84 L1141,66 L1195,89 L1254,72 L1314,94 L1374,78 L1440,99 L1440,300 Z"
            fill="url(#grad-far)"
          />
          {/* Snow caps on 4 dominant peaks */}
          <g fill="#D4EEF5" fillOpacity="0.42">
            <polygon points="797,47 782,70 812,70" />
            <polygon points="857,50 842,73 872,73" />
            <polygon points="741,54 726,77 756,77" />
            <polygon points="931,58 916,81 946,81" />
          </g>
        </svg>

        {/* Layer 2 — mid range, forest-green tinted */}
        <svg
          ref={layer2}
          className="absolute bottom-0 w-full will-change-transform"
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          style={{ height: "88%" }}
        >
          <defs>
            <linearGradient id="grad-mid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1C3228" />
              <stop offset="100%" stopColor="#152020" />
            </linearGradient>
          </defs>
          <path
            d="M0,300 L0,268 L60,258 L121,248 L183,256 L246,238 L306,225 L363,235 L420,215 L477,200 L523,211 L569,189 L614,173 L651,185 L689,163 L725,149 L761,163 L799,146 L841,159 L887,143 L943,159 L1001,143 L1059,159 L1114,169 L1171,151 L1229,171 L1287,156 L1347,173 L1440,183 L1440,300 Z"
            fill="url(#grad-mid)"
          />
        </svg>

        {/* Layer 3 — near foothills, darkest */}
        <svg
          ref={layer3}
          className="absolute bottom-0 w-full will-change-transform"
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          style={{ height: "72%" }}
        >
          <path
            d="M0,300 L0,258 L70,252 L141,244 L214,252 L288,236 L361,243 L434,226 L507,233 L580,219 L654,226 L727,211 L801,219 L874,206 L947,213 L1021,201 L1094,209 L1168,197 L1241,206 L1315,195 L1440,205 L1440,300 Z"
            fill="#0E1C16"
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

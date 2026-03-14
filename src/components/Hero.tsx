"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SnowParticles from "./SnowParticles";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleDuration: number;
  delay: number;
}

export default function Hero() {
  const [stars, setStars] = useState<Star[]>([]);

  const moonRef = useRef<HTMLDivElement>(null);
  const auroraRef = useRef<HTMLDivElement>(null);
  const layer0 = useRef<SVGSVGElement>(null);
  const layer1 = useRef<SVGSVGElement>(null);
  const layer2 = useRef<SVGSVGElement>(null);
  const layer3 = useRef<SVGSVGElement>(null);
  const layer4 = useRef<SVGSVGElement>(null);
  const fogRef = useRef<HTMLDivElement>(null);
  const cabinRef = useRef<HTMLDivElement>(null);

  /* ── Generate stars client-side ── */
  useEffect(() => {
    setStars(
      Array.from({ length: 100 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 55,
        size: 1 + Math.random() * 1.5,
        opacity: 0.3 + Math.random() * 0.5,
        twinkleDuration: 3 + Math.random() * 5,
        delay: Math.random() * 8,
      }))
    );
  }, []);

  /* ── Parallax ── */
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (moonRef.current)
          moonRef.current.style.transform = `translateY(${y * 0.05}px)`;
        if (auroraRef.current)
          auroraRef.current.style.transform = `translateY(${y * 0.03}px)`;
        if (layer0.current)
          layer0.current.style.transform = `translateY(${y * 0.03}px)`;
        if (layer1.current)
          layer1.current.style.transform = `translateY(${y * 0.07}px)`;
        if (layer2.current)
          layer2.current.style.transform = `translateY(${y * 0.13}px)`;
        if (layer3.current)
          layer3.current.style.transform = `translateY(${y * 0.21}px)`;
        if (layer4.current)
          layer4.current.style.transform = `translateY(${y * 0.30}px)`;
        if (fogRef.current)
          fogRef.current.style.transform = `translateY(${y * 0.15}px)`;
        if (cabinRef.current)
          cabinRef.current.style.transform = `translate(-50%,0) translateY(${y * 0.25}px)`;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* ── Deep sky gradient ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020810] via-[#06152A] to-[#0C2438]" />

      {/* ── Starfield ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        {stars.map((s) => (
          <div
            key={s.id}
            className="absolute rounded-full bg-white star-shimmer"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size,
              height: s.size,
              "--star-base": s.opacity,
              animationDuration: `${s.twinkleDuration}s`,
              animationDelay: `${s.delay}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* ── Moon ── */}
      <div ref={moonRef} className="absolute top-[14%] left-[18%] will-change-transform">
        <div className="relative">
          {/* Wide atmospheric halo */}
          <div
            className="absolute rounded-full"
            style={{
              width: 320,
              height: 320,
              top: -148,
              left: -148,
              background:
                "radial-gradient(circle, rgba(180,210,235,0.05) 0%, transparent 65%)",
            }}
          />
          {/* Tight halo */}
          <div
            className="absolute rounded-full"
            style={{
              width: 120,
              height: 120,
              top: -48,
              left: -48,
              background:
                "radial-gradient(circle, rgba(210,230,245,0.1) 0%, transparent 55%)",
            }}
          />
          {/* Disc */}
          <div
            className="rounded-full"
            style={{
              width: 34,
              height: 34,
              background:
                "radial-gradient(circle at 35% 35%, #F0F4F8, #C8D8E8)",
              boxShadow:
                "0 0 30px rgba(200,220,240,0.25), 0 0 60px rgba(200,220,240,0.1)",
            }}
          />
        </div>
      </div>

      {/* ── Aurora Borealis ── */}
      <div
        ref={auroraRef}
        className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform"
      >
        <div className="aurora-band aurora-band-1" />
        <div className="aurora-band aurora-band-2" />
        <div className="aurora-band aurora-band-3" />
      </div>

      {/* ── Dot grid ── */}
      <div className="absolute inset-0 dot-grid opacity-15 z-[1]" />

      {/* ── Floating code snippets (lab motif) ── */}
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
        className="absolute bottom-[38%] left-[6%] font-mono text-[10px] text-terminal/[0.05] leading-relaxed hidden lg:block select-none pointer-events-none"
        style={{ animation: "float 10s ease-in-out infinite 2s" }}
      >
        <pre>{`> deploying to prod...
✓ tests passed (47/47)
✓ build optimized
✓ live in 2.3s`}</pre>
      </div>

      {/* ── Snow ── */}
      <SnowParticles />

      {/* ── Top edge fade (masks snow spawn) ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[60px] pointer-events-none z-[6]"
        style={{ background: "linear-gradient(to bottom, #020810 30%, transparent)" }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-mono text-terminal text-xs sm:text-sm mb-8 tracking-[0.2em]">
          {"// creative_software_lab"}
        </p>

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

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ice-50 tracking-widest uppercase mb-2">
          Snow Labs
        </h1>
        <p className="font-mono text-xs sm:text-sm tracking-[0.3em] text-ice-400 uppercase mb-8">
          Build · Prototype · Ship
        </p>

        <p className="font-body text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          An idea lab for concepts born in-house and select outside submissions.
          We prototype fast, build with feedback, and ship products we believe
          deserve to exist.
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

      {/* ══════════════════════════════════════════
          MOUNTAIN SCENE
          ══════════════════════════════════════════ */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] sm:h-[380px] md:h-[420px]">
        {/* Moonlight spill on peaks */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 45% 55% at 18% 25%, rgba(180,210,235,0.04) 0%, transparent 70%)",
          }}
        />

        {/* ── Layer 0 — Distant atmospheric haze ── */}
        <svg
          ref={layer0}
          className="absolute bottom-0 w-full will-change-transform"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          style={{ height: "100%" }}
        >
          <path
            d="M0,400 L0,295 Q120,278 240,288 Q360,265 480,252 Q600,240 660,220 Q720,200 780,215 Q840,230 960,218 Q1080,206 1200,222 Q1320,238 1440,225 L1440,400Z"
            fill="#162A3E"
            fillOpacity="0.35"
          />
        </svg>

        {/* ── Layer 1 — Far dramatic peaks ── */}
        <svg
          ref={layer1}
          className="absolute bottom-0 w-full will-change-transform"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          style={{ height: "95%" }}
        >
          <defs>
            <linearGradient id="peak-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1E3A52" />
              <stop offset="100%" stopColor="#152C42" />
            </linearGradient>
          </defs>
          {/* Main range — dramatic central peak cluster */}
          <path
            d="M0,400 L0,305 L45,298 L95,285 L145,275 L195,282 L245,260 L295,242 L335,255 L375,228 L410,210 L440,222 L475,192 L510,170 L535,182 L570,148 L598,125 L620,138 L650,108 L678,85 L698,98 L722,68 L742,52 L758,62 L778,42 L795,55 L818,72 L842,62 L868,78 L895,92 L925,82 L958,98 L995,108 L1035,98 L1072,112 L1110,125 L1150,115 L1195,130 L1240,142 L1285,132 L1330,148 L1380,155 L1440,162 L1440,400Z"
            fill="url(#peak-grad)"
          />
        </svg>

        {/* ── Atmospheric fog between ranges ── */}
        <div
          ref={fogRef}
          className="absolute left-0 right-0 pointer-events-none will-change-transform hero-fog"
          style={{ bottom: "32%", height: "18%" }}
        />

        {/* ── Layer 2 — Mid-range, forest green ── */}
        <svg
          ref={layer2}
          className="absolute bottom-0 w-full will-change-transform"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          style={{ height: "72%" }}
        >
          <defs>
            <linearGradient id="forest-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1A3228" />
              <stop offset="100%" stopColor="#12241E" />
            </linearGradient>
          </defs>
          <path
            d="M0,400 L0,285 L40,278 L82,268 L128,258 L172,265 L218,248 L268,235 L318,245 L368,228 L418,215 L462,225 L508,208 L558,195 L608,205 L658,188 L708,178 L752,188 L798,175 L848,168 L898,178 L948,165 L998,175 L1048,162 L1098,172 L1148,180 L1198,168 L1248,182 L1298,188 L1348,178 L1398,190 L1440,195 L1440,400Z"
            fill="url(#forest-grad)"
          />
        </svg>

        {/* ── Layer 3 — Near foothills, dense treeline ── */}
        <svg
          ref={layer3}
          className="absolute bottom-0 w-full will-change-transform"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          style={{ height: "48%" }}
        >
          <defs>
            <linearGradient id="hill-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0E1C16" />
              <stop offset="100%" stopColor="#091410" />
            </linearGradient>
          </defs>
          <path
            d="M0,400 L0,295 L80,288 L160,278 L240,285 L320,272 L400,278 L480,265 L560,272 L640,260 L720,268 L800,255 L880,262 L960,250 L1040,258 L1120,248 L1200,255 L1280,245 L1360,252 L1440,248 L1440,400Z"
            fill="url(#hill-grad)"
          />
        </svg>

        {/* ── Layer 4 — Valley floor ── */}
        <svg
          ref={layer4}
          className="absolute bottom-0 w-full will-change-transform"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          style={{ height: "28%" }}
        >
          <path
            d="M0,400 L0,348 L120,342 L240,350 L360,340 L480,346 L600,336 L720,342 L840,332 L960,340 L1080,330 L1200,338 L1320,332 L1440,340 L1440,400Z"
            fill="#060E0A"
          />
        </svg>

        {/* ── Cabin in the valley ── */}
        <div
          ref={cabinRef}
          className="absolute bottom-[9%] left-[52%] z-[2]"
          style={{ transform: "translate(-50%,0)" }}
        >
          {/* Wide ambient glow */}
          <div
            className="absolute rounded-full"
            style={{
              width: 160,
              height: 100,
              top: -40,
              left: -72,
              background:
                "radial-gradient(ellipse, rgba(237,160,32,0.05) 0%, transparent 70%)",
            }}
          />
          {/* Tight warm glow */}
          <div
            className="absolute rounded-full"
            style={{
              width: 50,
              height: 35,
              top: -10,
              left: -18,
              background:
                "radial-gradient(ellipse, rgba(237,160,32,0.12) 0%, transparent 60%)",
            }}
          />
          <div className="relative">
            {/* Roof */}
            <svg
              width="18"
              height="9"
              viewBox="0 0 18 9"
              className="block mx-auto"
            >
              <polygon points="9,0 0,9 18,9" fill="#0A1612" />
            </svg>
            {/* Walls + window */}
            <div className="w-[16px] h-[8px] mx-auto bg-[#0D1914] flex items-center justify-center">
              <div
                className="w-[3px] h-[3px] rounded-[0.5px]"
                style={{
                  backgroundColor: "rgba(237,160,32,0.75)",
                  boxShadow:
                    "0 0 4px rgba(237,160,32,0.6), 0 0 12px rgba(237,160,32,0.25)",
                }}
              />
            </div>
            {/* Chimney */}
            <div className="absolute -top-[5px] right-[2px] w-[3px] h-[7px] bg-[#0A1612]" />
            {/* Chimney smoke */}
            <div className="absolute -top-[12px] right-[2px] w-[3px] h-[3px]">
              <div className="chimney-smoke" />
              <div className="chimney-smoke" style={{ animationDelay: "1.5s" }} />
              <div className="chimney-smoke" style={{ animationDelay: "3s" }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
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

"use client";

import { useState, useEffect } from "react";

interface Particle {
  id: number;
  left: string;
  size: number;
  fallDuration: number;
  driftDuration: number;
  delay: number;
  opacity: number;
}

export default function SnowParticles({ count = 60 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: 2 + Math.random() * 3,
        fallDuration: 12 + Math.random() * 18,
        driftDuration: 3 + Math.random() * 6,
        delay: Math.random() * 20,
        opacity: 0.15 + Math.random() * 0.45,
      }))
    );
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
      {particles.map((p) => (
        <div
          key={p.id}
          className="snow-fall-wrapper"
          style={{
            left: p.left,
            animationDuration: `${p.fallDuration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          <div
            className="snow-particle"
            style={{
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animationDuration: `${p.driftDuration}s`,
              animationDelay: `${p.delay * 0.3}s`,
            }}
          />
        </div>
      ))}
    </div>
  );
}

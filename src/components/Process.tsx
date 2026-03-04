import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Ideate",
    code: "brainstorm()",
    description:
      "We start with your idea — whether it's a napkin sketch or a detailed spec. Through structured brainstorming sessions, we explore possibilities and define the vision together.",
  },
  {
    number: "02",
    title: "Prototype",
    code: "build.fast()",
    description:
      "We move fast. Working prototypes emerge within days, not months. We leverage the best tools available — including the latest AI tooling for agentic development — to compress iteration cycles and get tangible results in your hands quickly.",
  },
  {
    number: "03",
    title: "Iterate",
    code: "refine(feedback)",
    description:
      "Real users, real feedback, real improvements. We iterate rapidly based on what works and what doesn't, continuously refining the experience.",
  },
  {
    number: "04",
    title: "Ship",
    code: "deploy(prod)",
    description:
      "Production-grade code, clean architecture, comprehensive testing. We don't just prototype — we deliver software that's built to last and scale.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-dark-surface">
      {/* Circuit divider */}
      <div className="absolute top-0 left-0 right-0 -translate-y-1/2">
        <div className="section-divider max-w-5xl mx-auto">
          <div className="node" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <p className="terminal-header mb-3">{"> our_process"}</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ice-50 mb-6">
            From Concept to <span className="text-forest-300">Code</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mb-16 leading-relaxed">
            Speed matters. We prototype rapidly, iterate relentlessly, and ship
            with confidence. We leverage the best tools available — including
            cutting-edge AI for agentic development — to move faster at every
            step. Every project follows this rhythm.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 150}>
              <div className="relative group">
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-[1px]">
                    <div className="w-full h-full bg-gradient-to-r from-ice-400/25 to-ice-400/5" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-ice-400/20" />
                  </div>
                )}

                <div className="relative z-10">
                  {/* Big number */}
                  <span className="font-display text-7xl md:text-8xl font-extrabold text-ice-400/[0.06] leading-none select-none">
                    {step.number}
                  </span>

                  {/* Title & code */}
                  <h3 className="font-display text-2xl font-bold text-ice-50 -mt-6 mb-1 group-hover:text-ice-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-mono text-xs text-terminal/70 mb-4 tracking-wider">
                    {step.code}
                  </p>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

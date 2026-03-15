import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

type Project = {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  approach: string;
  tech: string[];
  highlights: string[];
  color: string;
  image?: string;
  stage?: string;
  progress?: string[];
};

const projects: Project[] = [
  {
    name: "StatBook",
    slug: "statbook",
    tagline: "Play-by-play stat tracking for multi-sport teams",
    description:
      "Cross-platform stat tracker enabling coaches and statisticians to record, analyze, and export game statistics in real time. Built with a pluggable sport engine architecture supporting volleyball, baseball, and softball.",
    approach:
      "Started from a volleyball-only prototype, then designed a sport-agnostic plugin architecture. Each new sport plugs in without touching core logic — baseball was added in days, not weeks.",
    tech: ["Flutter", "Dart", "Riverpod", "Drift (SQLite)", "GoRouter"],
    highlights: [
      "Multi-sport plugin architecture",
      "Offline-first with sync",
      "Live game tracking",
      "PDF & CSV export",
    ],
    color: "#38BDF8",
    image: "/projects/statbook-sneak-peak.png",
  },
  {
    name: "MyPace",
    slug: "mypace",
    tagline: "Health & wellness tracking designed for older adults",
    description:
      "Cross-platform mobile app that makes nutrition, exercise, and walking program tracking simple and accessible. Built with a focus on usability — large text, clear navigation, and minimal cognitive load for older adult users.",
    approach:
      "Prototyped the core loop (log a meal, track a walk) in days, tested with real users in the target demographic, then iterated on font sizes, tap targets, and information density until the experience felt effortless.",
    tech: ["React Native", "Expo", "TypeScript", "Zustand", "SQLite"],
    highlights: [
      "USDA food database integration",
      "12-week walking program",
      "Accessibility-first design",
      "Offline-capable",
    ],
    color: "#34D399",
    image: "/projects/mypace-sneak-peak.png",
  },
  {
    name: "Trust Us",
    slug: "trust-us",
    tagline: "Tiered agent-to-agent security platform in active design",
    description:
      "Trust Us is an in-progress platform for secure agent-to-agent communication built around Google's A2A protocol. Current work is focused on the Level 1 MVP: defining the registry, API-key handshake flow, and package architecture before implementation starts.",
    approach:
      "The project has moved beyond brainstorming into concrete system design. The MVP scope is locked, the tiered business model is mapped, and the diagrams and package boundaries are ready for the first Node + TypeScript implementation pass.",
    tech: ["Node.js", "TypeScript", "Express 5", "Vitest", "@a2a-js/sdk"],
    highlights: [
      "Level 1 MVP scoped",
      "Registry API mapped",
      "Handshake flow diagrammed",
      "L2/L3 hooks planned",
    ],
    color: "#F59E0B",
    stage: "Planning + system design",
    progress: [
      "Level 1 MVP defined around registry + API-key handshake",
      "4 architecture diagrams completed for the core flows",
      "SDK/server workspace structure planned in detail",
      "Paid L2/L3 security tiers designed as future hooks",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      {/* Circuit divider */}
      <div className="absolute top-0 left-0 right-0 -translate-y-1/2">
        <div className="section-divider max-w-5xl mx-auto">
          <div className="node" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <p className="terminal-header mb-3">{"> our_projects"}</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ice-50 mb-4">
            Built in the <span className="text-ice-400">Lab</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mb-16 leading-relaxed">
            These are ideas Snow Labs chose to pursue in-house, from live
            products to active builds still taking shape. We prototype fast, get
            real feedback, iterate hard, and commit only to the ideas that earn
            a place in the lab.
          </p>
        </ScrollReveal>

        <div className="space-y-16">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={100}>
              <div
                className={`glass-card group overflow-hidden flex flex-col ${
                  i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* Image area */}
                <div className="md:w-[45%] relative overflow-hidden bg-card-surface/50">
                  {project.image ? (
                    <div
                      className="aspect-[16/10] relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}06, ${project.color}03)`,
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.name} screenshot`}
                        fill
                        className="object-contain object-top p-3"
                        sizes="(max-width: 768px) 100vw, 45vw"
                      />
                      <div
                        className="absolute inset-x-0 bottom-0 h-8 pointer-events-none"
                        style={{
                          background: `linear-gradient(to top, ${project.color}12, transparent)`,
                        }}
                      />
                    </div>
                  ) : (
                    <div
                      className="aspect-[16/10] relative overflow-hidden p-6 md:p-8"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}12, ${project.color}04)`,
                      }}
                    >
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at top right, ${project.color}18, transparent 55%)`,
                        }}
                      />
                      <div className="relative h-full rounded-2xl border border-white/8 bg-midnight/45 p-5 md:p-6 flex flex-col">
                        <p
                          className="font-mono text-[10px] tracking-[0.18em] uppercase"
                          style={{ color: `${project.color}CC` }}
                        >
                          Current Progress
                        </p>
                        <h4 className="font-display text-2xl text-ice-50 mt-3">
                          {project.stage}
                        </h4>
                        <div
                          className="mt-4 h-px"
                          style={{
                            background: `linear-gradient(90deg, ${project.color}50, transparent)`,
                          }}
                        />
                        <ul className="mt-5 space-y-3">
                          {project.progress?.map((item) => (
                            <li key={item} className="flex gap-3 text-sm text-text-secondary">
                              <span
                                className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                                style={{ backgroundColor: project.color }}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="mt-auto pt-5 font-mono text-[10px] tracking-[0.14em] text-text-muted uppercase">
                          trust-us // lab status snapshot
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="md:w-[55%] p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <p
                      className="font-mono text-xs tracking-wider"
                      style={{ color: project.color }}
                    >
                      {`> ${project.slug.toUpperCase()}`}
                    </p>
                    <div
                      className="flex-1 h-[1px]"
                      style={{
                        background: `linear-gradient(90deg, ${project.color}30, transparent)`,
                      }}
                    />
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-bold text-ice-50 mb-1">
                    {project.name}
                  </h3>
                  <p
                    className="text-sm italic mb-4"
                    style={{ color: `${project.color}CC` }}
                  >
                    {project.tagline}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Approach callout */}
                  <div className="bg-midnight/40 border-l-2 border-terminal/30 px-4 py-3 rounded-r-lg mb-5">
                    <p className="font-mono text-[10px] text-terminal/70 mb-1 tracking-wider">
                      APPROACH
                    </p>
                    <p className="text-text-secondary text-xs leading-relaxed">
                      {project.approach}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-3 py-1 rounded-full border border-card-border text-text-muted hover:border-ice-400/30 hover:text-ice-300 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-text-secondary"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: project.color }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

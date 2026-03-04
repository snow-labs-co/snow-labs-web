import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    name: "Kismet Coffee Roasters",
    slug: "kismet",
    tagline: "A complete e-commerce experience for specialty coffee",
    description:
      "Custom-built headless e-commerce platform replacing a legacy Square Online store. Features real-time inventory, subscription management, secure card payments, and a mobile-first design that captures the warmth of the Kismet brand.",
    approach:
      "Rapid prototype of the storefront in under two weeks, iterated on checkout UX with real barista feedback, and shipped a production site that outperforms the original in every metric.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Square API", "Vercel"],
    highlights: [
      "Headless Square integration",
      "Subscription management",
      "Real-time inventory",
      "Mobile-first responsive",
    ],
    color: "#D4956A",
    image: "/projects/kismet-sneak-peak.png",
  },
  {
    name: "StatLine",
    slug: "statline",
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
            These aren&apos;t client projects — they&apos;re our own ideas, built in-house
            using the same process we bring to every engagement: prototype fast,
            get real feedback, iterate hard, ship clean.
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
                  <div
                    className="aspect-[16/10] relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}08, ${project.color}04)`,
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />
                    {/* Subtle color-matched overlay at bottom for blending */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-12 pointer-events-none"
                      style={{
                        background: `linear-gradient(to top, ${project.color}18, transparent)`,
                      }}
                    />
                  </div>
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

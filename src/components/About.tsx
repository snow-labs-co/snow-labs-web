import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    icon: "💡",
    title: "Idea Building",
    code: "IDEA_BUILDING",
    description:
      "We help you take a concept from napkin sketch to working prototype, facilitating structured brainstorming and rapid ideation. Whether you have a rough concept or a detailed spec, we bring the creative energy to shape your vision.",
  },
  {
    icon: "🧪",
    title: "Internal Lab",
    code: "INTERNAL_LAB",
    description:
      "We don't just build for clients — we build our own ideas too, following the same rapid-prototype-iterate-ship process. Kismet, StatBook, and MyPace are all Snow Labs experiments turned real products.",
  },
  {
    icon: "🔧",
    title: "Software Contracting",
    code: "CONTRACTING",
    description:
      "We deliver production-ready software for clients, with a focus on clean architecture, maintainability, and results. From mobile apps to full-stack web platforms, we build software that lasts.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-dark-surface">
      {/* Circuit-line divider top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-1/2">
        <div className="section-divider max-w-5xl mx-auto">
          <div className="node" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <p className="terminal-header mb-3">{"> our_mission"}</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ice-50 mb-6">
            Where Ideas
            <br />
            Become <span className="text-forest-300">Reality</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mb-16 leading-relaxed">
            Snow Labs is a creative software lab dedicated to turning ideas into
            reality. We build for clients — and we build for ourselves. Every
            internal product we&apos;ve shipped started as a rough idea run through
            the same rapid-prototype-iterate-ship process we bring to every
            engagement. As a software contractor we partner with organizations
            to deliver high-quality, custom software on a project basis.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.code} delay={i * 150}>
              <div className="glass-card p-8 h-full group hover:-translate-y-1">
                <div className="text-4xl mb-5">{pillar.icon}</div>
                <p className="font-mono text-terminal text-xs mb-2 tracking-wider">
                  {`> ${pillar.code}`}
                </p>
                <h3 className="font-display text-xl font-bold text-ice-50 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

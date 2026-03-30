import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    icon: "💡",
    title: "Idea Intake",
    code: "IDEA_INTAKE",
    description:
      "Great products can start on our whiteboard or arrive through an outside submission. We pressure-test raw concepts, sharpen the strongest ones, and decide which ideas are worth turning into real products.",
  },
  {
    icon: "🧪",
    title: "Lab Portfolio",
    code: "LAB_PORTFOLIO",
    description:
      "Kismet, StatBook, and MyPace reflect how Snow Labs operates: we build in-house, iterate quickly, and stay selective about what earns time, focus, and a permanent place in the lab.",
  },
  {
    icon: "🔧",
    title: "Revenue-Aligned Builds",
    code: "REV_SHARE",
    description:
      "When we accept an external idea, the original submitter stays close to the feedback loop while Snow Labs keeps final authority over features, pricing, and maintenance. Every accepted submission includes an agreed fair-market revenue share for the life of the project.",
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
            Snow Labs is an idea lab dedicated to turning promising concepts into
            real products. Some start inside the company. Others come from
            outside submitters whose ideas we choose to build. In every case we
            brainstorm hard, prototype fast, gather feedback, and ship with
            intention. When we take on an external submission, the submitter
            stays involved in the feedback process, while Snow Labs retains
            final say on features, pricing, and long-term maintenance. Accepted
            submissions always include an agreed fair-market share of project
            revenue for the lifetime of the product.
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

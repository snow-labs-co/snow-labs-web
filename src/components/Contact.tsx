"use client";

import { useState, type FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full bg-midnight/50 border border-card-border rounded-lg px-4 py-3 text-ice-50 font-body placeholder:text-text-muted/50 focus:outline-none focus:border-ice-400/40 focus:shadow-[0_0_0_3px_rgba(56,189,248,0.06)] transition-all duration-300";

  return (
    <section id="contact" className="relative py-24 md:py-32">
      {/* Circuit divider */}
      <div className="absolute top-0 left-0 right-0 -translate-y-1/2">
        <div className="section-divider max-w-5xl mx-auto">
          <div className="node" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <p className="terminal-header mb-3">{"> contact"}</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ice-50 mb-4">
            Start a <span className="text-forest-300">Conversation</span>
          </h2>
          <p className="text-text-secondary text-lg mb-12 leading-relaxed">
            Have an idea? Let&apos;s talk about how we can bring it to life.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="glass-card p-8 md:p-10">
            {status === "sent" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-terminal/10 border border-terminal/20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-terminal"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-ice-50 mb-2">
                  Message Sent
                </h3>
                <p className="text-text-secondary">
                  We&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-mono text-[10px] text-text-muted tracking-[0.15em] mb-2 block">
                    NAME
                  </label>
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="font-mono text-[10px] text-text-muted tracking-[0.15em] mb-2 block">
                    EMAIL
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="font-mono text-[10px] text-text-muted tracking-[0.15em] mb-2 block">
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us how you would like to work with us..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3.5 bg-ice-400/10 border border-ice-400/30 text-ice-400 font-mono text-sm rounded-lg hover:bg-ice-400/20 hover:border-ice-400/60 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "sending" ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 border border-ice-400/50 border-t-ice-400 rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Send Message →"
                  )}
                </button>

                {status === "error" && (
                  <p className="text-red-400 text-sm text-center font-mono">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

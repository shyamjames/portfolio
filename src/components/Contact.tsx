import { profile } from "@/data/portfolio";
import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-primary-theme neu-inset-sm px-2.5 py-1 rounded-md">
            // 05
          </span>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-main tracking-tight">
            Let&apos;s Talk
          </h2>
          <div className="h-px bg-[var(--color-border)] flex-1 ml-2"></div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="neu-card p-6 md:p-10">
          <div className="max-w-2xl">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-main mb-3">
              Got an ambitious problem to solve?
            </h3>
            <p className="text-base text-main leading-relaxed mb-8">
              Open to full-time engineering roles, technical collaboration, and select freelance projects where software has to actually hold up under real-world conditions.
            </p>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href={`mailto:${profile.email}`}
                className="neu-btn-primary px-6 py-3.5 text-xs md:text-sm"
              >
                ✉ {profile.email}
              </a>
              {profile.socials.resume && (
                <a
                  href={profile.socials.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neu-btn-secondary px-5 py-3.5 text-xs md:text-sm"
                >
                  Download Resume ↗
                </a>
              )}
            </div>

            {/* Social Profiles Grid */}
            <div className="pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center gap-4 font-mono text-xs">
              <span className="text-muted">Connect:</span>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="neu-btn-secondary px-4 py-2 text-xs"
              >
                GitHub ↗
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="neu-btn-secondary px-4 py-2 text-xs"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

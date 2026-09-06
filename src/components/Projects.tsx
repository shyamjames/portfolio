import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 md:px-8 max-w-5xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-primary-theme neu-inset-sm px-2.5 py-1 rounded-md">
          // 02
        </span>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-main tracking-tight">
          Selected Work
        </h2>
        <div className="h-px bg-[var(--color-border)] flex-1 ml-2"></div>
      </div>
      <p className="font-mono text-xs md:text-sm text-muted mb-8">
        Tested in the wild. Built to endure locked-down networks, institutional workflows, and real users.
      </p>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, idx) => (
          <div
            key={p.title}
            className="neu-card p-6 md:p-7 flex flex-col justify-between"
          >
            <div>
              {/* Card Top Meta */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs text-primary-theme neu-inset-sm px-2.5 py-0.5 rounded">
                  PROJECT_{String(idx + 1).padStart(2, "0")}
                </span>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg neu-btn-secondary text-xs flex items-center justify-center hover:text-primary-theme"
                  title="View Project"
                >
                  ↗
                </a>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl md:text-2xl text-main mb-2 tracking-tight">
                {p.title}
              </h3>

              {/* Subtitle / Context */}
              {p.subtitle && (
                <div className="mb-4">
                  <span className="inline-block font-mono text-[11px] text-primary-theme neu-inset-sm px-2.5 py-1 rounded-md">
                    {p.subtitle}
                  </span>
                </div>
              )}

              {/* Description */}
              <p className="text-sm text-main leading-relaxed mb-6">
                {p.description}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-4 border-t border-[var(--color-border)]">
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] text-main neu-inset-sm px-2.5 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

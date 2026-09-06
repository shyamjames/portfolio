import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-xs text-primary-theme neu-inset-sm px-2.5 py-1 rounded-md">
          // 04
        </span>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-main tracking-tight">
          Experience &amp; Leadership
        </h2>
        <div className="h-px bg-[var(--color-border)] flex-1 ml-2"></div>
      </div>

      {/* Timeline List */}
      <div className="space-y-6">
        {experience.map((e) => (
          <div
            key={e.role + e.company}
            className="neu-card p-6 md:p-7 relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <span className="font-mono text-xs text-primary-theme tracking-wider uppercase">
                  {e.company}
                </span>
                <h3 className="font-display font-bold text-lg md:text-xl text-main">
                  {e.role}
                </h3>
              </div>
              <span className="font-mono text-xs text-muted neu-inset-sm px-3 py-1 rounded-md self-start sm:self-center">
                {e.period}
              </span>
            </div>
            <p className="text-sm text-main leading-relaxed mt-2">
              {e.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

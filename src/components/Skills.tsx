import { skills } from "@/data/portfolio";
import ScrollReveal from "@/components/ScrollReveal";

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-primary-theme neu-inset-sm px-2.5 py-1 rounded-md">
            // 03
          </span>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-main tracking-tight">
            What I Work With
          </h2>
          <div className="h-px bg-[var(--color-border)] flex-1 ml-2"></div>
        </div>
      </ScrollReveal>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((group, idx) => (
          <ScrollReveal key={group.category} delay={idx * 120} className="h-full">
            <div className="neu-card p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-primary-theme neu-inset-sm px-2 py-0.5 rounded">
                    [STACK_{idx + 1}]
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
                </div>
                <h3 className="font-display font-bold text-lg text-main mb-4">
                  {group.category}
                </h3>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-xs text-main neu-inset-sm px-3 py-2 rounded-lg flex items-center gap-2 hover:text-primary-theme transition-colors"
                    >
                      <span className="text-primary-theme font-bold">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

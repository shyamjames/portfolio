import { about } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-xs text-primary-theme neu-inset-sm px-2.5 py-1 rounded-md">
          // 01
        </span>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-main tracking-tight">
          About Me
        </h2>
        <div className="h-px bg-[var(--color-border)] flex-1 ml-2"></div>
      </div>

      {/* Main Bio Card */}
      <div className="neu-flat rounded-2xl p-6 md:p-8 mb-8 border border-[var(--card-border)]">
        <p className="text-base md:text-lg text-main leading-relaxed">
          {about.bio}
        </p>
      </div>

      {/* Highlights Grid (2x2) */}
      <div className="grid sm:grid-cols-2 gap-5">
        {about.highlights.map((item, idx) => (
          <div
            key={idx}
            className="neu-card p-5 md:p-6 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-primary-theme neu-inset-sm px-2 py-0.5 rounded">
                [{String(idx + 1).padStart(2, "0")}]
              </span>
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]/60"></span>
            </div>
            <p className="text-sm text-main leading-relaxed">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

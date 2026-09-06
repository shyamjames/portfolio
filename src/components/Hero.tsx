import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
      <div className="neu-card p-6 md:p-10">
        {/* Terminal / Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF2157] inline-block shadow-sm"></span>
            <span className="w-3 h-3 rounded-full bg-[#FE9900] inline-block shadow-sm"></span>
            <span className="w-3 h-3 rounded-full bg-[#00A63D] inline-block shadow-sm"></span>
            <span className="ml-2 font-mono text-xs text-muted tracking-wide">
              shyam@archlinux:~$ whoami
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-primary-theme neu-inset-sm px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#00A63D] animate-pulse"></span>
            <span>available_for_work</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-8 space-y-4">
          <p className="font-mono text-xs md:text-sm text-primary-theme tracking-widest uppercase font-semibold">
            // Software Developer &amp; Builder
          </p>
          <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-main tracking-tight">
            {profile.name}
          </h1>
          <p className="font-mono text-sm sm:text-base text-muted leading-relaxed">
            {profile.role}
          </p>
        </div>

        {/* Tactile Inset Pitch Box */}
        <div className="mt-8 p-5 md:p-6 rounded-xl neu-inset border border-[var(--card-border)]">
          <p className="font-mono text-xs text-muted uppercase tracking-wider mb-2">
            [ core_philosophy ]
          </p>
          <p className="text-sm md:text-base text-main leading-relaxed">
            I build software that fixes an actual daily annoyance for actual people —
            a device-sync tool that survives a locked-down campus network, a platform a
            university now uses to evaluate exam scripts, a freelance system that keeps a
            logistics team&apos;s shipments straight.{" "}
            <span className="font-bold text-primary-theme">
              I care less about the stack and more about whether the thing works when someone depends on it.
            </span>
          </p>
        </div>

        {/* CTAs and quick specs */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[var(--color-border)]">
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="neu-btn-primary px-5 py-3 text-xs md:text-sm"
            >
              Explore Projects →
            </a>
            <a
              href="#contact"
              className="neu-btn-secondary px-5 py-3 text-xs md:text-sm"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs text-muted">
            <span className="neu-inset-sm px-2.5 py-1 rounded-md">
              LOC: Kochi, IN
            </span>
            <span className="neu-inset-sm px-2.5 py-1 rounded-md">
              OS: Arch Linux
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

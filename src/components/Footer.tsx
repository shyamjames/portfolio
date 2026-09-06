import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="mt-12 py-8 px-4 md:px-8 max-w-5xl mx-auto w-full border-t border-[var(--color-border)]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00A63D]"></span>
          <span>© {new Date().getFullYear()} {profile.name}. All systems normal.</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="neu-inset-sm px-2.5 py-1 rounded">
            DESIGN: NEUMORPHIC
          </span>
          <span className="neu-inset-sm px-2.5 py-1 rounded">
            STACK: NEXT.JS
          </span>
        </div>
      </div>
    </footer>
  );
}

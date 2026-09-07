"use client";

import { useState, useEffect } from "react";
import FpsCounter from "@/components/FpsCounter";

const links = [
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  };

  return (
    <header className="sticky top-4 z-50 px-4 md:px-8 max-w-7xl mx-auto w-full">
      <nav className="neu-flat rounded-2xl px-5 sm:px-6 py-3.5 flex items-center justify-between border border-[var(--card-border)]">
        {/* Brand */}
        <a
          href="#home"
          className="flex items-center gap-2.5 sm:gap-3 text-main hover:text-primary-theme transition-colors"
        >
          <span className="w-8 h-8 rounded-lg neu-inset flex items-center justify-center font-display font-bold text-xs text-primary-theme">
            SJ
          </span>
          <span className="font-display font-bold text-sm tracking-wider uppercase">
            Shyam James
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-mono neu-inset-sm text-[#00A63D]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A63D] animate-pulse"></span>
            online
          </span>
        </a>

        {/* Desktop Links & Controls */}
        <div className="hidden md:flex items-center gap-2 text-xs font-mono">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3 py-1.5 rounded-lg text-muted hover:text-primary-theme hover:neu-sm transition-all duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-4 w-px bg-[var(--color-border)] mx-1"></div>

          {/* Live Browser FPS */}
          <FpsCounter className="hidden sm:inline-flex" />

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="neu-btn-secondary px-3 py-1.5 text-xs flex items-center gap-1.5"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <span>{theme === "dark" ? "☀" : "☾"}</span>
            <span className="font-mono text-[11px]">{theme === "dark" ? "light" : "dark"}</span>
          </button>

          <a
            href="#contact"
            className="neu-btn-primary px-3.5 py-1.5 text-xs ml-1"
          >
            let&apos;s talk
          </a>
        </div>

        {/* Mobile menu toggle & quick theme switch */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-xl neu-btn-secondary text-xs flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <button
            className="w-9 h-9 rounded-xl neu-btn-secondary text-sm flex items-center justify-center"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="md:hidden mt-2 p-4 rounded-2xl neu-flat border border-[var(--card-border)] flex flex-col gap-2 font-mono text-xs">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-2.5 rounded-xl text-main hover:neu-inset-sm transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="neu-btn-primary px-4 py-2 text-center text-xs mt-2"
          >
            let&apos;s talk
          </a>
        </div>
      )}
    </header>
  );
}

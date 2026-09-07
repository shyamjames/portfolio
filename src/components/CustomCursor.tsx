"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Target mouse position
  const mousePos = useRef({ x: -100, y: -100 });
  // Lerped ring position
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only run on desktop devices with a fine pointer (mouse)
    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasPointer) return;

    setMounted(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if hovering over clickable element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive =
          target.closest("a, button, [role='button'], input, textarea, select, .neu-card, .neu-btn-primary, .neu-btn-secondary") !== null;
        setHovered(isInteractive);
      }
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Smooth RAF loop for the trailing ring
    let animId: number;
    const lerpSpeed = 0.18;

    const render = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpSpeed;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpSpeed;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [visible]);

  if (!mounted) return null;

  return (
    <>
      {/* Central Micro Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full pointer-events-none z-[99999] transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        } ${hovered ? "scale-75 bg-[var(--color-primary)]" : "bg-[var(--color-primary)]"}`}
        style={{ willChange: "transform" }}
      />

      {/* Trailing Tactile Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[99998] rounded-full transition-[width,height,margin,border-color,background-color,opacity,transform] duration-200 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        } ${
          hovered
            ? "-ml-5 -mt-5 w-10 h-10 border border-[var(--color-primary)] bg-[var(--color-primary)]/10 shadow-[0_0_12px_rgba(20,184,166,0.25)]"
            : clicked
            ? "-ml-3 -mt-3 w-6 h-6 border-2 border-[var(--color-primary)] bg-[var(--color-primary)]/20"
            : "-ml-3.5 -mt-3.5 w-7 h-7 border border-[var(--color-primary)]/50 bg-transparent"
        }`}
        style={{ willChange: "transform" }}
      />
    </>
  );
}

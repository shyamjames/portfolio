"use client";

import { useEffect, useState } from "react";

export default function FpsCounter({ className = "" }: { className?: string }) {
  const [fps, setFps] = useState<number>(60);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const calculateFps = (now: number) => {
      frameCount++;
      const delta = now - lastTime;

      if (delta >= 600) {
        const currentFps = Math.round((frameCount * 1000) / delta);
        setFps(currentFps);
        frameCount = 0;
        lastTime = now;
      }

      animId = requestAnimationFrame(calculateFps);
    };

    animId = requestAnimationFrame(calculateFps);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  const getStatusColor = () => {
    if (fps >= 55) return "bg-[#00A63D]";
    if (fps >= 30) return "bg-[#FE9900]";
    return "bg-[#FF2157]";
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[11px] neu-inset-sm text-muted select-none ${className}`}
      title="Live Browser Rendering Performance"
    >
      <span className={`w-1.5 h-1.5 rounded-full ${getStatusColor()}`}></span>
      <span>{fps} FPS</span>
    </span>
  );
}

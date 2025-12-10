"use client";

import { useEffect, useState } from "react";

interface ExperienceCounterProps {
  from?: number;
  to: number;
  label: string;
}

export function ExperienceCounter({ from = 0, to, label }: ExperienceCounterProps) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    let frame: number;
    const start = performance.now();
    const duration = 1200; // ms

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const current = from + (to - from) * progress;
      setValue(Math.round(current));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [from, to]);

  return (
    <div className="space-y-1">
      <span className="block text-2xl font-semibold md:text-3xl">{value}</span>
      <span className="text-xs text-neutral-500 md:text-sm">{label}</span>
    </div>
  );
}

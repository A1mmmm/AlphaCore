import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/70 bg-white/80 p-6 shadow-sm backdrop-blur",
        className
      )}
      {...props}
    />
  );
}

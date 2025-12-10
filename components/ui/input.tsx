import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-11 w-full rounded-full border border-border/80 bg-white/70 px-4 text-sm outline-none ring-offset-0 placeholder:text-neutral-400 focus:border-accent focus:ring-2 focus:ring-accent/40",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

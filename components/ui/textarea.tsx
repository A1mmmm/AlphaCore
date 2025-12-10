import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-[120px] w-full rounded-2xl border border-border/80 bg-white/70 px-4 py-3 text-sm outline-none ring-offset-0 placeholder:text-neutral-400 focus:border-accent focus:ring-2 focus:ring-accent/40",
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

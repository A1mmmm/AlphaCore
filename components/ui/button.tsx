"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm md:text-base",
  lg: "h-12 px-7 text-base md:text-lg",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
          variant === "primary" &&
            "bg-accent text-white shadow-sm hover:bg-accent/90",
          variant === "ghost" &&
            "bg-transparent text-foreground hover:bg-muted",
          sizeClasses[size as keyof typeof sizeClasses],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

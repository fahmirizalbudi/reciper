import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for merging tailwind classes safely
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-subtle focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary: "bg-primary-base text-white shadow-[0_8px_20px_rgb(234,88,12,0.2)] hover:shadow-[0_12px_25px_rgb(234,88,12,0.3)] hover:-translate-y-[1px]",
      secondary:
        "bg-white text-text-primary shadow-[0_4px_15px_rgb(0,0,0,0.05)] hover:shadow-[0_8px_20px_rgb(0,0,0,0.08)] hover:-translate-y-[1px] hover:bg-surface-muted",
      ghost: "text-text-muted hover:text-text-primary hover:bg-surface-muted",
    };

    const sizes = {
      sm: "h-9 px-3",
      md: "h-11 px-6",
      lg: "h-12 px-8 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

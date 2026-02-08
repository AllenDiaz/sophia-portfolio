import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, label, helperText, required, id, ...props }, ref) => {
    const inputId = id || `input-${label?.replace(/\s+/g, '-').toLowerCase()}`;
    
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-2 block text-sm font-medium text-[hsl(var(--foreground))]"
          >
            {label}
            {required && <span className="ml-1 text-[hsl(var(--error))]">*</span>}
          </label>
        )}
        <input
          type={type}
          id={inputId}
          className={cn(
            "flex h-11 w-full rounded-md border border-[hsl(var(--input))] bg-[hsl(var(--background))] px-4 py-2 text-base text-[hsl(var(--foreground))] transition-colors",
            "file:border-0 file:bg-transparent file:text-sm file:font-medium",
            "placeholder:text-[hsl(var(--muted-foreground))]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-[hsl(var(--error))] focus-visible:ring-[hsl(var(--error))]",
            className
          )}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          required={required}
          {...props}
        />
        {helperText && !error && (
          <p id={`${inputId}-helper`} className="mt-1.5 text-sm text-[hsl(var(--muted-foreground))]">
            {helperText}
          </p>
        )}
        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 text-sm text-[hsl(var(--error))]" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };

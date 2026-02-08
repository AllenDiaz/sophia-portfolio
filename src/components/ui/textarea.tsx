import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
  helperText?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, label, helperText, required, id, ...props }, ref) => {
    const textareaId = id || `textarea-${label?.replace(/\s+/g, '-').toLowerCase()}`;
    
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="mb-2 block text-sm font-medium text-[hsl(var(--foreground))]"
          >
            {label}
            {required && <span className="ml-1 text-[hsl(var(--error))]">*</span>}
          </label>
        )}
        <textarea
          id={textareaId}
          className={cn(
            "flex min-h-[120px] w-full rounded-md border border-[hsl(var(--input))] bg-[hsl(var(--background))] px-4 py-2 text-base text-[hsl(var(--foreground))] transition-colors",
            "placeholder:text-[hsl(var(--muted-foreground))]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-[hsl(var(--error))] focus-visible:ring-[hsl(var(--error))]",
            className
          )}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
          required={required}
          {...props}
        />
        {helperText && !error && (
          <p id={`${textareaId}-helper`} className="mt-1.5 text-sm text-[hsl(var(--muted-foreground))]">
            {helperText}
          </p>
        )}
        {error && (
          <p id={`${textareaId}-error`} className="mt-1.5 text-sm text-[hsl(var(--error))]" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };

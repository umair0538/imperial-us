"use client";

import {
  forwardRef,
  TextareaHTMLAttributes,
} from "react";

interface Props
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const Textarea = forwardRef<
  HTMLTextAreaElement,
  Props
>(({ label, error, className, ...props }, ref) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">
        {label}
      </label>

      <textarea
        ref={ref}
        className={`
          w-full
          rounded-lg
          border
          px-4
          py-3
          outline-none
          transition
          focus:ring-2
          ${className ?? ""}
        `}
        {...props}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
});

Textarea.displayName = "Textarea";

export default Textarea;
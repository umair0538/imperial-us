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
      <label className="block text-sm font-medium text-zinc-200">
        {label}
      </label>

      <textarea
        ref={ref}
        className={`
          w-full
          rounded-lg
          border
          border-zinc-700
          bg-[#181818]
          px-4
          py-3
          text-white
          outline-none
          transition
          focus:border-[#C8A24B]
          focus:ring-2
          focus:ring-[#C8A24B]/20
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
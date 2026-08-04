"use client";

import {
  forwardRef,
  InputHTMLAttributes,
} from "react";

interface CheckboxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Checkbox = forwardRef<
  HTMLInputElement,
  CheckboxProps
>(({ label, error, className, ...props }, ref) => {
  return (
    <div className="space-y-2">
      <label className="flex cursor-pointer items-center gap-3">
        <input
          ref={ref}
          type="checkbox"
          className={`
            h-5
            w-5
            rounded
            border
            border-zinc-600
            bg-zinc-900
            accent-[#C8A24B]
            focus:ring-2
            focus:ring-[#C8A24B]
            ${className ?? ""}
          `}
          {...props}
        />

        <span className="text-sm text-zinc-200">
          {label}
        </span>
      </label>

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;
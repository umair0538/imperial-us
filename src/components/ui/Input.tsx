"use client";

import { forwardRef, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="space-y-2">

        <label className="block text-sm font-medium">
          {label}
        </label>

        <input
          ref={ref}
          {...props}
          className="
            w-full
            rounded-lg
            border
            px-4
            py-3
            outline-none
            transition
          "
        />

        {error && (
          <p className="text-sm text-red-500">
            {error}
          </p>
        )}

      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
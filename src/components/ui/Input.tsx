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

        <label className="block text-sm font-medium text-zinc-300">
          {label}
        </label>

        <input
          ref={ref}
          {...props}
          className="
            w-full
            rounded-lg
            border
            border-zinc-700
            bg-[#111]
            px-4
            py-3
            outline-none
            transition
            focus:border-[#C8A24B]
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
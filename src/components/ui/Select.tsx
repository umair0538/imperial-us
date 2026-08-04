"use client";

import {
  forwardRef,
  SelectHTMLAttributes,
} from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  error?: string;
}

const Select = forwardRef<
  HTMLSelectElement,
  SelectProps
>(
  (
    {
      label,
      options,
      error,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-zinc-200">
          {label}
        </label>

        <select
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
            disabled:cursor-not-allowed
            disabled:opacity-50
            ${className ?? ""}
          `}
          {...props}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        {error && (
          <p className="text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
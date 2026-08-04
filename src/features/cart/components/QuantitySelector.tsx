"use client";

import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  disabled?: boolean;
}

export default function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
  disabled = false,
}: QuantitySelectorProps) {
  return (
    <div className="inline-flex items-center rounded-lg border border-zinc-700 bg-zinc-900 overflow-hidden">
      <button
        type="button"
        disabled={disabled || quantity <= 1}
        onClick={onDecrease}
        className="flex h-10 w-10 items-center justify-center transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40 p-0"
      >
        <Minus size={16} />
      </button>

      <div className="flex h-10 min-w-[50px] items-center justify-center border-x border-zinc-700 text-sm font-medium">
        {quantity}
      </div>

      <button
        type="button"
        disabled={disabled}
        onClick={onIncrease}
        className="flex h-10 w-10 items-center justify-center transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40 p-0"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
"use client";

interface Props {
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export default function PlaceOrderButton({
  loading = false,
  disabled = false,
  onClick,
}: Props) {
  return (
    <button
      type="submit"
      disabled={disabled || loading}
      onClick={onClick}
      className="
        mt-8
        w-full
        rounded-lg
        bg-[#C8A24B]
        px-5
        py-4
        font-medium
        tracking-widest
        text-black
        transition
        hover:opacity-90
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
    >
      {loading ? "Processing..." : "PLACE ORDER"}
    </button>
  );
}
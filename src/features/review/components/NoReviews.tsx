import { Star } from "lucide-react";

export default function NoReviews() {
  return (
    <div className="rounded-xl border border-zinc-800 bg-[#111111] px-8 py-16 text-center">

      <Star
        className="mx-auto text-[#C8A24B]"
        size={40}
      />

      <h3 className="mt-6 font-serif text-2xl text-white">
        No Reviews Yet
      </h3>

      <p className="mx-auto mt-4 max-w-lg text-zinc-500">
        Be the first customer to share your
        experience with this watch.
      </p>

    </div>
  );
}
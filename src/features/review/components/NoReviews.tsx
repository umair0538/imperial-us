import { Star } from "lucide-react";

export default function NoReviews() {
  return (
    <div className="rounded-xl border px-8 py-16 text-center">

      <Star
        className="mx-auto"
        size={40}
      />

      <h3 className="mt-6 font-serif text-2xl">
        No Reviews Yet
      </h3>

      <p className="mx-auto mt-4 max-w-lg">
        Be the first customer to share your
        experience with this watch.
      </p>

    </div>
  );
}
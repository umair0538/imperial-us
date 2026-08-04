interface Props {
  title: string;
  description?: string;
  state: "completed" | "current" | "upcoming";
  isLast?: boolean;
}

export default function TimelineItem({
  title,
  description,
  state,
  isLast = false,
}: Props) {
  const circleClasses = {
    completed: "bg-green-500",
    current: "bg-[#C8A24B]",
    upcoming: "bg-zinc-700",
  };

  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className={`h-4 w-4 rounded-full ${circleClasses[state]}`}
        />

        {!isLast && (
          <div className="mt-2 h-full w-px bg-zinc-700" />
        )}
      </div>

      <div className="pb-8">
        <h3 className="font-medium text-white">
          {title}
        </h3>

        {description && (
          <p className="mt-1 text-sm text-zinc-400">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
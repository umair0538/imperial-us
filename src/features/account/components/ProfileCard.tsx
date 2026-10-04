"use client";

import { User } from "lucide-react";

import type { UserProfile } from "../types/profile";

interface Props {
  profile: UserProfile;
}

export default function ProfileCard({
  profile,
}: Props) {
  return (
    <section className="rounded-xl border p-8">

      <div className="flex flex-col items-center">

        <div
          className="
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            border
          "
        >
          <User
            size={42}
          />
        </div>

        <h2 className="mt-6 text-2xl font-serif">
          {profile.first_name} {profile.last_name}
        </h2>

        <p className="mt-2">
          {profile.email}
        </p>

        <p className="mt-2 text-sm">
          Member since{" "}
          {new Date(profile.created_at).toLocaleDateString(
            "en-PK",
            {
              month: "long",
              year: "numeric",
            }
          )}
        </p>

      </div>

      <div className="my-8 border-t border-zinc-800" />

      <div className="grid grid-cols-2 gap-6">

        <StatCard
          label="Orders"
          value={profile.total_orders.toString()}
        />

        <StatCard
          label="Status"
          value="Active"
        />

      </div>

      <button
        className="
          mt-8
          w-full
          rounded-lg
          border
          px-5
          py-3
          transition
          hover:[background-color:var(--gold)]
        "
      >
        Edit Profile
      </button>

    </section>
  );
}

interface StatCardProps {
  label: string;
  value: string;
}

function StatCard({
  label,
  value,
}: StatCardProps) {
  return (
    <div className="rounded-lg p-5 text-center">

      <p className="text-sm">
        {label}
      </p>

      <p className="mt-2 text-2xl font-semibold">
        {value}
      </p>

    </div>
  );
}
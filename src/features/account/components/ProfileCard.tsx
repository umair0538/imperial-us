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
    <section className="rounded-xl border border-zinc-800 bg-[#111111] p-8">

      <div className="flex flex-col items-center">

        <div
          className="
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            bg-[#1b1b1b]
            border
            border-zinc-700
          "
        >
          <User
            size={42}
            className="text-zinc-400"
          />
        </div>

        <h2 className="mt-6 text-2xl font-serif text-white">
          {profile.first_name} {profile.last_name}
        </h2>

        <p className="mt-2 text-zinc-400">
          {profile.email}
        </p>

        <p className="mt-2 text-sm text-zinc-500">
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
          border-[#C8A24B]
          px-5
          py-3
          text-[#C8A24B]
          transition
          hover:bg-[#C8A24B]
          hover:text-black
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
    <div className="rounded-lg bg-[#181818] p-5 text-center">

      <p className="text-sm text-zinc-500">
        {label}
      </p>

      <p className="mt-2 text-2xl font-semibold text-white">
        {value}
      </p>

    </div>
  );
}
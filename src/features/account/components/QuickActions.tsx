"use client";

import Link from "next/link";
import {
  ShoppingBag,
  User,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const actions = [
  {
    title: "My Orders",
    description: "View your order history",
    href: "/account/orders",
    icon: ShoppingBag,
  },
  {
    title: "Edit Profile",
    description: "Update your information",
    href: "/account/profile",
    icon: User,
  },
  {
    title: "Addresses",
    description: "Manage shipping addresses",
    href: "/account/addresses",
    icon: MapPin,
  },
  {
    title: "Warranty",
    description: "View your warranties",
    href: "/account/warranty",
    icon: ShieldCheck,
  },
];

export default function QuickActions() {
  return (
    <section className="rounded-xl border border-zinc-800 bg-[#111111] p-8">

      <h2 className="mb-8 font-serif text-2xl">
        Quick Actions
      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        {actions.map((action) => {

          const Icon = action.icon;

          return (
            <Link
              key={action.href}
              href={action.href}
              className="
                rounded-xl
                border
                border-zinc-800
                p-6
                transition
                hover:border-[#C8A24B]
                hover:bg-[#181818]
              "
            >
              <Icon
                className="mb-4 text-[#C8A24B]"
                size={28}
              />

              <h3 className="text-lg font-medium">
                {action.title}
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                {action.description}
              </p>

            </Link>
          );

        })}

      </div>

    </section>
  );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  ShoppingBag,
  User,
  MapPin,
  ShieldCheck,
  LogOut,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    href: "/account",
    icon: LayoutDashboard,
  },
  {
    title: "My Orders",
    href: "/account/orders",
    icon: ShoppingBag,
  },
  {
    title: "Profile",
    href: "/account/profile",
    icon: User,
  },
  {
    title: "Addresses",
    href: "/account/addresses",
    icon: MapPin,
  },
  {
    title: "Warranty",
    href: "/account/warranty",
    icon: ShieldCheck,
  },
];

export default function AccountSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-24 h-fit rounded-xl border border-zinc-800 bg-[#111111] p-6">

      <h2 className="mb-8 font-serif text-2xl">
        My Account
      </h2>

      <nav className="space-y-2">
        <div className="flex-1">

        {menu.map((item) => {

          const Icon = item.icon;

          const active =
            pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                active
                  ? "bg-[#C8A24B] text-black"
                  : "text-zinc-300 hover:bg-zinc-900"
              }`}
            >
              <Icon size={18} />

              {item.title}
            </Link>
          );

        })}

        </div>
      </nav>

      <div className="mt-10 border-t border-zinc-800 pt-6">

        <button
          className="
            flex
            w-full
            items-center
            gap-3
            rounded-lg
            px-4
            py-3
            text-red-400
            transition
            hover:bg-red-500/10
          "
        >
          <LogOut size={18} />

          Logout
        </button>

      </div>

    </aside>
  );
}
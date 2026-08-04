import type { ReactNode } from "react";

import AccountSidebar from "@/features/account/components/AccountSidebar";

interface Props {
  children: ReactNode;
}

export default function AccountLayout({
  children,
}: Props) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-25">

      <div className="grid gap-10 lg:grid-cols-[260px_1fr]">

        <AccountSidebar />

        <main>{children}</main>

      </div>

    </div>
  );
}
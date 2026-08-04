"use client";

import ProfileCard from "./ProfileCard";
import RecentOrders from "./RecentOrders";
import QuickActions from "./QuickActions";
import { useAccount } from "../hooks/useAccount";
import { UserProfile } from "../types/profile";

interface Order {

  id: string;

  order_number: string;

  status: string;

  total: number;

  created_at: string;

}

interface Props {
  profile: UserProfile;
  recentOrders: Order[];
}

export default function Dashboard() {

  const {
    dashboard,
    isLoading,
  } = useAccount();

  if (isLoading) {
    return (
      <div className="py-20 text-center">
        Loading profile...
      </div>
    );
  }

  if (!dashboard) {
    return (
      <div className="py-20 text-center">
        Couldn't load
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <ProfileCard
        profile={dashboard.profile}
      />

      <RecentOrders
        orders={dashboard.recentOrders}
      />

      <QuickActions />

    </div>
  );
}
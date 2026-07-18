"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  User,
  PlusCircle,
  ListOrdered,
  Users,
  ShieldCheck,
} from "lucide-react";

import UseRole from "@/provider/UseRole";

const SidebarNavigation = () => {
  const { role, isLoading, isAuthenticated } = UseRole();
  const pathname = usePathname();

  // Loading
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-40">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  // Unauthorized
  if (!isAuthenticated || !role) {
    return (
      <div className="flex flex-col items-center justify-center h-40 text-center">
        <h2 className="text-2xl font-bold text-red-500">Unauthorized</h2>
        <p className="mt-2 text-gray-500">
          Please login to access the dashboard.
        </p>
      </div>
    );
  }

  let menuItems = [];

  switch (role) {
    case "ADMIN":
      menuItems = [
        { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
        { label: "Manage Users", href: "/dashboard/users", icon: Users },
        {
          label: "System Approvals",
          href: "/dashboard/approvals",
          icon: ShieldCheck,
        },
      ];
      break;

    case "LANDLORD":
      menuItems = [
        { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
        {
          label: "Add Property",
          href: "/dashboard/add-property",
          icon: PlusCircle,
        },
        {
          label: "My Listings",
          href: "/dashboard/my-properties",
          icon: ListOrdered,
        },
      ];
      break;

    case "TENANT":
      menuItems = [
        { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
        {
          label: "My Bookings",
          href: "/dashboard/bookings",
          icon: ListOrdered,
        },
      ];
      break;

    default:
      menuItems = [];
  }

  return (
    <nav className="space-y-1">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
              isActive
                ? "bg-secondary text-white"
                : "hover:bg-slate-900 hover:text-white"
            }`}
          >
            <Icon className="w-4 h-4" />
            {item.label}
          </Link>
        );
      })}

      <Link
        href="/profile"
        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
          pathname === "/profile"
            ? "bg-secondary text-white"
            : "hover:bg-slate-900 hover:text-white"
        }`}
      >
        <User className="w-4 h-4" />
        My Profile
      </Link>
    </nav>
  );
};

export default SidebarNavigation;

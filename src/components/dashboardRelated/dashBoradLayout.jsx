"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  User,
  Home as HomeIcon,
  PlusCircle,
  ListOrdered,
  Users,
  ShieldCheck,
} from "lucide-react";

const UseRole = () => {
  return "ADMIN"; 
};

const SidebarNavigation = () => {
  const role = UseRole();
  const pathname = usePathname();

  const getMenuItems = () => {
    switch (role) {
      case "ADMIN":
        return [
          { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
          { label: "Manage Users", href: "/dashboard/users", icon: Users },
          {
            label: "System Approvals",
            href: "/dashboard/approvals",
            icon: ShieldCheck,
          },
        ];
      case "LANDLORD":
        return [
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
      case "TENANT":
      default:
        return [
          { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
          {
            label: "My Bookings",
            href: "/dashboard/bookings",
            icon: ListOrdered,
          },
        ];
    }
  };

  const menuItems = getMenuItems();

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

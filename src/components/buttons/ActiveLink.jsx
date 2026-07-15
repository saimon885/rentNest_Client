"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition-all duration-200 rounded-xl px-3 py-2 flex items-center w-full ${
        isActive
          ? "bg-secondary/10 text-secondary font-bold shadow-xs"
          : "text-neutral/70 hover:bg-base-200 hover:text-neutral"
      }`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;

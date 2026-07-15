"use client";
import UseAuth from "@/provider/Useauth";
import { LogIn, LogOut } from "lucide-react";
import Link from "next/link";
import React from "react";

const LogInLogOutBTN = () => {
  const { user } = UseAuth();
  console.log(user);
  return (
    <div>
      <Link href="/login">
        {user?.email ? (
          <button className="btn btn-primary btn-md font-bold shadow-sm px-5 rounded-xl flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all">
            <LogOut className="w-4 h-4" /> LogOut
          </button>
        ) : (
          <button className="btn btn-primary btn-md font-bold shadow-sm px-5 rounded-xl flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all">
            <LogIn className="w-4 h-4" /> Sign In
          </button>
        )}
      </Link>
    </div>
  );
};

export default LogInLogOutBTN;

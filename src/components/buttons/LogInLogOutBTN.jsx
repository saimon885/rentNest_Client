"use client";
import UseAuth from "@/provider/Useauth";
import { LogIn, LogOut } from "lucide-react";
import Link from "next/link";
import React from "react";
import Swal from "sweetalert2";

const LogInLogOutBTN = () => {
  const { user, logOutUser } = UseAuth();

  const handleLogOUt = async () => {
    try {
      await logOutUser();
      localStorage.removeItem("accessToken");
      Swal.fire({
        title: "Logged Out!",
        text: "You have been successfully logged out.",
        icon: "success",
        confirmButtonColor: "#3085d6",
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message || "Logout failed",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div>
      {user?.email ? (
        <button
          onClick={() => handleLogOUt()}
          className="btn btn-primary btn-md font-bold shadow-sm px-5 rounded-xl flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <LogOut className="w-4 h-4" /> LogOut
        </button>
      ) : (
        <Link
          href="/login"
          className="btn btn-primary btn-md font-bold shadow-sm px-5 rounded-xl flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <LogIn className="w-4 h-4" /> Sign In
        </Link>
      )}
    </div>
  );
};

export default LogInLogOutBTN;

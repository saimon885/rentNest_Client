import React from "react";
import ActiveLink from "../buttons/ActiveLink";
import {
  LogIn,
  Menu,
  Home,
  Building2,
  Info,
  HomeModernIcon,
} from "lucide-react";
import Link from "next/link";
import UseAuth from "@/provider/Useauth";
import LogInLogOutBTN from "../buttons/LogInLogOutBTN";

const Navbar = () => {
  //   const { user } = UseAuth();
  //   console.log(user);
  const navLinks = (
    <>
      <li>
        <ActiveLink href="/">
          <span className="flex items-center gap-2 font-medium ">
            <Home className="w-4 h-4 text-secondary" /> Home
          </span>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink href="/properties">
          <span className="flex items-center gap-2 font-medium ">
            <Building2 className="w-4 h-4 text-secondary" /> Properties
          </span>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink href="/about">
          <span className="flex items-center gap-2 font-medium">
            <Info className="w-4 h-4 text-secondary" /> About Us
          </span>
        </ActiveLink>
      </li>
    </>
  );

  return (
    <div className="drawer z-50">
      <input id="rentnest-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-100/90 backdrop-blur-md shadow-sm px-4 lg:px-10 border-b border-base-200 sticky top-0 w-full z-40 transition-all duration-300">
          <div className="navbar-start">
            {/* Drawer Open Button for Mobile */}
            <label
              htmlFor="rentnest-drawer"
              role="button"
              className="btn btn-ghost btn-circle lg:hidden hover:bg-base-200"
            >
              <Menu className="w-5 h-5 text-neutral" />
            </label>

            {/* Professional Brand Logo */}
            <Link href="/">
              <div className="flex items-center gap-2 group cursor-pointer select-none">
                <div className="bg-primary text-primary-content p-2 rounded-xl shadow-md group-hover:scale-105 transition-all duration-300">
                  <Building2 className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black text-primary tracking-tight leading-none">
                    Rent<span className="text-secondary">Nest</span>
                  </span>
                  <span className="text-[10px] font-bold text-neutral/40 tracking-widest uppercase mt-0.5">
                    Marketplace
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
          </div>

          {/* Right Side Action Button */}
          <div className="navbar-end">
            <LogInLogOutBTN></LogInLogOutBTN>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Drawer */}
      <div className="drawer-side">
        <label
          htmlFor="rentnest-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-6 w-72 min-h-full bg-base-100 text-base-content flex flex-col justify-between shadow-2xl border-r border-base-200">
          <div>
            {/* Sidebar Logo Header */}
            <div className="flex items-center gap-2 border-b border-base-200 pb-5 mb-6">
              <div className="bg-primary text-primary-content p-2 rounded-xl">
                <Building2 className="w-6 h-6 text-secondary" />
              </div>
              <span className="text-xl font-black text-primary tracking-tight">
                Rent<span className="text-secondary">Nest</span>
              </span>
            </div>

            {/* Sidebar Links */}
            <ul className="menu menu-vertical gap-2 p-0">{navLinks}</ul>
          </div>

          {/* Sidebar Footer Sign In Button */}
          <div className="pt-4 border-t border-base-200">
            <Link href="/login">
              <button className="btn btn-primary w-full font-bold rounded-xl flex items-center justify-center gap-2">
                <LogIn className="w-4 h-4" /> Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

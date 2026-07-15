import React from "react";
import Link from "next/link";
import { Home, LogOut, Menu } from "lucide-react";
import SidebarNavigation from "@/components/dashboardRelated/dashBoradLayout";

const DashboardLayout = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open min-h-screen bg-base-200">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col min-h-screen">
        <header className="navbar bg-base-100 border-b border-base-300 px-4 lg:px-8 h-16 min-h-16 sticky top-0 z-10">
          <div className="flex-1 gap-2">
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-ghost btn-sm btn-square drawer-button lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </label>
            <span className="text-sm font-bold text-neutral hidden sm:inline-block">
              Portal
            </span>
          </div>

          <div className="flex-none gap-4">
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content w-8 h-8 rounded-full ring ring-offset-base-100 ring-offset-2 ring-primary/20">
                <span className="text-xs font-semibold">U</span>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-grow p-4 lg:p-8">
          <div className="max-w-7xl mx-auto w-full">{children}</div>
        </main>
      </div>

      <div className="drawer-side z-20">
        <label
          htmlFor="dashboard-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <aside className="w-64 bg-slate-950 text-slate-200 border-r border-slate-900 flex flex-col justify-between p-6 min-h-full">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <Link href={"/"}>
                <h1 className="text-xl font-black text-white tracking-tight">
                  Rent<span className="text-secondary">Nest</span>
                </h1>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">
                  Dashboard
                </p>
              </Link>
            </div>

            <SidebarNavigation />
          </div>

          <div className="border-t border-slate-900 pt-6 space-y-1">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold hover:bg-slate-900 hover:text-white transition-all"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-rose-400 hover:bg-rose-950/30 hover:text-rose-300 transition-all text-left">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;

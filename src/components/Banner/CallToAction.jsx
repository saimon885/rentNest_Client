import React from "react";
import Link from "next/link";
import { PlusCircle } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-10 max-w-7xl mx-auto px-4 lg:px-12">
      <div className="bg-slate-950 text-white p-8 md:p-12 rounded-2xl border border-slate-900 shadow-xl flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-0 w-48 h-48 bg-secondary/10 rounded-full blur-2xl"></div>

        <div className="text-center md:text-left z-10">
          <h2 className="text-xl md:text-2xl font-black tracking-tight text-white">
            Earn Money From Your Property?
          </h2>
          <p className="text-xs text-slate-400 mt-2 max-w-md">
            List your apartment, room, or commercial space on RentNest and reach
            thousands of verified tenants instantly.
          </p>
        </div>

        <Link
          href="/signin"
          className="btn btn-secondary btn-md font-bold shadow-md rounded-xl flex items-center gap-2 px-6 transition-transform active:scale-95 shrink-0 z-10"
        >
          <PlusCircle className="w-4 h-4" /> Start Renting Out
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;

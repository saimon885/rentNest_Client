import React from "react";
import Link from "next/link";
import {
  User,
  Mail,
  KeyRound,
  ShieldCheck,
  Building2,
  CheckCircle2,
} from "lucide-react";
import Register from "@/components/Form/Register";

const RegisterPage = () => {
  return (
    <div className="min-h-[90vh] max-w-6xl mx-auto my-6 lg:my-12 w-full bg-base-200 border border-base-300 rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
      {/* Left Column: Perfect Visual & Info Section */}
      <div className="hidden lg:flex lg:w-[45%] relative bg-slate-950 text-white p-12 flex-col justify-between overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/80 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
          alt="Luxury Architecture Visual"
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />

        {/* Logo */}
        <div className="flex items-center gap-2 relative z-20">
          <div className="bg-secondary p-2 rounded-xl text-white shadow-md">
            <Building2 className="w-5 h-5" />
          </div>
          <span className="text-xl font-black tracking-tight">
            Rent<span className="text-secondary">Nest</span>
          </span>
        </div>

        {/* Info */}
        <div className="relative z-20 flex flex-col gap-4 max-w-sm">
          <h2 className="text-2xl font-black leading-tight text-white">
            Discover Verified Rental Properties Instantly.
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Create an account configuration tailored exactly to your
            goals—whether you want to rent premier spots or list your
            properties.
          </p>
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex items-center gap-2 text-[11px] text-slate-300 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />{" "}
              Zero Hidden Platform Fees
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-300 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />{" "}
              Dedicated User Analytics Dashboard
            </div>
          </div>
        </div>

        <div className="relative z-20 text-[10px] text-slate-500 font-medium">
          © {new Date().getFullYear()} RentNest. All rights reserved.
        </div>
      </div>

      {/* Right Column: Clean Form Container */}
      <div className="w-full lg:w-[55%] flex items-center justify-center p-6 md:p-12 bg-base-100">
        <div className="w-full max-w-md flex flex-col gap-5">
          <div className="flex flex-col gap-1.5 text-center lg:text-left">
            {/* Logo on small screen only */}
            <div className="flex lg:hidden items-center gap-2 justify-center mb-2">
              <div className="bg-secondary p-1.5 rounded-lg text-white">
                <Building2 className="w-4 h-4" />
              </div>
              <span className="text-base font-black">RentNest</span>
            </div>
            <h1 className="text-xl font-black text-primary tracking-tight">
              Create an Account
            </h1>
            <p className="text-xs text-neutral/60">
              Join our unified property real estate network today.
            </p>
          </div>

          <Register></Register>

          <div className="divider my-0 text-[10px] font-bold text-neutral/30 uppercase">
            Already Registered?
          </div>

          <div className="text-center text-xs text-neutral/60 font-medium">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-secondary font-bold hover:underline"
            >
              Sign In Instead
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

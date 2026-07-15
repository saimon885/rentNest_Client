import React from "react";
import {
  Search,
  MapPin,
  Home,
  ShieldCheck,
  Star,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="relative bg-base-100 overflow-hidden border-b border-base-200">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 -z-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-12 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Headline & Interactive Filter */}
          <div className="lg:col-span-7 flex flex-col gap-4 text-center lg:text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-secondary/10 text-secondary py-1 px-3 rounded-full font-semibold text-[11px] uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Verified
                Marketplace
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-primary tracking-tight leading-tight">
              Find & List Rental <br className="hidden sm:inline" />
              Properties With <span className="text-secondary">Ease</span>
            </h1>

            <p className="text-sm text-neutral/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Discover premium apartments, modern studios, and family houses
              across Bangladesh. Seamless landlord-tenant workflows backed by
              secure payments.
            </p>

            {/* Micro-Search / Filter Engine */}
            <div className="w-full max-w-2xl mx-auto lg:mx-0 bg-base-200 p-2 rounded-xl shadow-sm border border-base-300 grid grid-cols-1 sm:grid-cols-12 gap-2 mt-2">
              <div className="sm:col-span-5 flex items-center gap-2 px-3 py-2 bg-base-100 rounded-lg border border-base-300">
                <MapPin className="w-4 h-4 text-secondary shrink-0" />
                <input
                  type="text"
                  placeholder="Enter city or area..."
                  className="bg-transparent text-xs w-full outline-none text-neutral font-medium"
                />
              </div>

              <div className="sm:col-span-4 flex items-center gap-2 px-3 py-2 bg-base-100 rounded-lg border border-base-300">
                <Home className="w-4 h-4 text-secondary shrink-0" />
                <select className="bg-transparent text-xs w-full outline-none text-neutral font-medium cursor-pointer">
                  <option value="">Property Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="studio">Studio</option>
                </select>
              </div>

              <button className="sm:col-span-3 btn btn-primary btn-sm h-full font-bold rounded-lg flex items-center justify-center gap-1.5 shadow-sm transition-transform active:scale-95">
                <Search className="w-3.5 h-3.5" /> Search
              </button>
            </div>

            {/* Quick Minimalist Trust Badges */}
            <div className="flex items-center justify-center lg:justify-start gap-6 border-t border-base-200 pt-5 mt-3 max-w-md mx-auto lg:mx-0">
              <div>
                <h4 className="text-lg font-extrabold text-primary leading-none">
                  10K+
                </h4>
                <p className="text-[11px] text-neutral/50 font-medium mt-1">
                  Properties
                </p>
              </div>
              <div className="h-6 w-px bg-base-300"></div>
              <div>
                <h4 className="text-lg font-extrabold text-primary leading-none">
                  5K+
                </h4>
                <p className="text-[11px] text-neutral/50 font-medium mt-1">
                  Happy Tenants
                </p>
              </div>
              <div className="h-6 w-px bg-base-300"></div>
              <div>
                <h4 className="text-lg font-extrabold text-primary leading-none flex items-center gap-1">
                  4.9
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
                </h4>
                <p className="text-[11px] text-neutral/50 font-medium mt-1">
                  Trust Score
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Live Preview Floating Interface */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative w-full h-[360px] bg-base-200 rounded-2xl overflow-hidden border border-base-300 shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Featured Luxury Rental Listing"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

              {/* Floating Live Pricing Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-base-100/90 backdrop-blur-md p-3 rounded-xl border border-white/20 flex justify-between items-center shadow-md">
                <div>
                  <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                    Premium Listing
                  </p>
                  <h3 className="text-sm font-bold text-primary truncate max-w-[180px]">
                    Gulshan Luxury Duplex
                  </h3>
                </div>
                <Link
                  href="/properties"
                  className="btn btn-primary btn-sm rounded-lg font-bold px-3 flex items-center gap-1"
                >
                  Explore <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

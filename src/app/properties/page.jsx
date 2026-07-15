import React from "react";
import { Search } from "lucide-react";
import PropertiesCard from "@/components/card/PropertiesCard";

const Properties = async () => {
  const data = await fetch("http://rent-nest-a-4.vercel.app/api/properties");
  const result = await data.json();
  console.log(result);

  return (
    <div className="bg-base-100 min-h-screen pb-20">
      <div className="bg-slate-950 pt-12 pb-24 px-6 relative border-b border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Browse <span className="text-secondary">Properties</span>
            </h1>
            <p className="text-sm text-slate-400 mt-2">
              Find the perfect home from our verified listings across
              Bangladesh.
            </p>
          </div>

          <div className="w-full md:w-96 bg-base-100 p-1.5 rounded-xl flex items-center shadow-lg">
            <input
              type="text"
              placeholder="Search by location or name..."
              className="w-full bg-transparent text-sm px-4 outline-none text-neutral font-medium"
            />
            <button className="btn btn-secondary btn-sm h-full rounded-lg px-4">
              <Search className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <div className="bg-base-100 p-4 rounded-xl border border-base-200 shadow-sm flex justify-between items-center mb-6">
          <span className="text-sm font-bold text-neutral">
            Showing{" "}
            <span className="text-secondary">{result?.data?.length || 0}</span>{" "}
            properties
          </span>
          <div className="text-xs font-semibold text-neutral/60">
            Sort by:{" "}
            <span className="text-primary cursor-pointer border-b border-primary/30 pb-0.5">
              Newest First
            </span>
          </div>
        </div>

        {result?.data && result.data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {result.data.map((property) => (
              <PropertiesCard
                key={property.id || property._id}
                property={property}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-base-200 rounded-2xl border border-base-300 border-dashed">
            <h3 className="text-lg font-bold text-primary">
              No Properties Found
            </h3>
            <p className="text-sm text-neutral/60 mt-1">
              Please check back later or try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;

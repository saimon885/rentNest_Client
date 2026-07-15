import React from "react";

const loading = () => {
  return (
    <div className="bg-base-100 min-h-screen pb-20">
      {/* Header Skeleton */}
      <div className="bg-slate-950 pt-12 pb-24 px-6 border-b border-slate-900 animate-pulse">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-3 w-full md:w-1/3">
            <div className="h-8 bg-slate-800 rounded-lg w-3/4"></div>
            <div className="h-4 bg-slate-800 rounded-lg w-full"></div>
          </div>
          <div className="w-full md:w-96 h-12 bg-slate-800 rounded-xl"></div>
        </div>
      </div>

      {/* Grid Content Skeleton */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        {/* Top Counter Bar Skeleton */}
        <div className="bg-base-100 p-4 rounded-xl border border-base-200 shadow-sm flex justify-between items-center mb-6 animate-pulse">
          <div className="h-5 bg-base-300 rounded w-32"></div>
          <div className="h-4 bg-base-300 rounded w-24"></div>
        </div>

        {/* Property Cards Skeleton Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, idx) => (
            <div
              key={idx}
              className="card bg-base-200 border border-base-300 rounded-xl overflow-hidden shadow-sm animate-pulse"
            >
              {/* Image Skeleton */}
              <div className="h-48 bg-base-300 w-full"></div>

              {/* Content Box Skeleton */}
              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <div className="h-3 bg-base-300 rounded w-24"></div>
                  <div className="h-3 bg-base-300 rounded w-8"></div>
                </div>

                <div className="h-5 bg-base-300 rounded w-5/6 mt-1"></div>

                <div className="flex gap-4 my-1 bg-base-100 p-2 rounded-lg">
                  <div className="h-4 bg-base-300 rounded w-12"></div>
                  <div className="h-4 bg-base-300 rounded w-12"></div>
                </div>

                <div className="h-px bg-base-300 my-1"></div>

                <div className="flex justify-between items-center mt-1">
                  <div className="h-6 bg-base-300 rounded w-20"></div>
                  <div className="h-8 bg-base-300 rounded-lg w-16"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default loading;

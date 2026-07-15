import React from "react";

const loading = () => {
  return (
    <div className="bg-base-100 min-h-screen pb-20 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column Skeleton */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Main Image Banner Skeleton */}
            <div className="h-[300px] md:h-[450px] w-full rounded-2xl bg-base-300"></div>

            {/* Gallery Thumbnails Skeleton */}
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, idx) => (
                <div
                  key={idx}
                  className="h-20 md:h-28 rounded-xl bg-base-300"
                ></div>
              ))}
            </div>

            {/* Title & Meta Skeleton */}
            <div className="flex flex-col gap-3">
              <div className="h-4 bg-base-300 rounded w-1/4"></div>
              <div className="h-8 bg-base-300 rounded w-3/4"></div>
            </div>

            {/* Core Features Specs Strip Skeleton */}
            <div className="grid grid-cols-3 gap-4 bg-base-200 p-4 rounded-xl border border-base-300">
              <div className="h-10 bg-base-300 rounded"></div>
              <div className="h-10 bg-base-300 rounded"></div>
              <div className="h-10 bg-base-300 rounded"></div>
            </div>

            {/* Description Paragraph Skeleton */}
            <div className="flex flex-col gap-3">
              <div className="h-5 bg-base-300 rounded w-24"></div>
              <div className="bg-base-200/50 p-4 rounded-xl border border-base-300/60 flex flex-col gap-2">
                <div className="h-4 bg-base-300 rounded w-full"></div>
                <div className="h-4 bg-base-300 rounded w-full"></div>
                <div className="h-4 bg-base-300 rounded w-2/3"></div>
              </div>
            </div>

            {/* Amenities Grid Skeleton */}
            <div className="flex flex-col gap-3">
              <div className="h-5 bg-base-300 rounded w-20"></div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[...Array(4)].map((_, idx) => (
                  <div key={idx} className="h-9 bg-base-300 rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Sidebar Booking Widget) Skeleton */}
          <div className="lg:col-span-4">
            <div className="bg-base-200 p-5 rounded-2xl border border-base-300 flex flex-col gap-5">
              {/* Pricing Spec */}
              <div className="flex flex-col gap-2">
                <div className="h-3 bg-base-300 rounded w-16"></div>
                <div className="h-7 bg-base-300 rounded w-32"></div>
              </div>

              <div className="h-px bg-base-300"></div>

              {/* Input Fields Fields */}
              <div className="flex flex-col gap-3">
                <div className="h-4 bg-base-300 rounded w-28"></div>
                <div className="flex flex-col gap-2">
                  <div className="h-9 bg-base-100 rounded-xl border border-base-300"></div>
                  <div className="h-9 bg-base-100 rounded-xl border border-base-300"></div>
                </div>
              </div>

              {/* Action Trigger Button */}
              <div className="h-11 bg-base-300 rounded-xl mt-1"></div>

              <div className="h-px bg-base-300"></div>

              {/* Creator Metadata Account strip */}
              <div className="flex items-center gap-3 bg-base-100 p-3 rounded-xl border border-base-300/80">
                <div className="w-9 h-9 bg-base-300 rounded-lg shrink-0"></div>
                <div className="flex flex-col gap-1.5 w-full">
                  <div className="h-3 bg-base-300 rounded w-20"></div>
                  <div className="h-4 bg-base-300 rounded w-32"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;

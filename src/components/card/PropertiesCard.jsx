import React from "react";
import Link from "next/link";
import {
  MapPin,
  BedDouble,
  Bath,
  Square,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const PropertiesCard = ({ property }) => {
  // Destructuring your JSON fields safely
  const {
    title,
    location,
    pricePerMonth,
    isAvailable,
    category,
    images,
    amenities,
  } = property;

  // Safely grab the first image, or use a placeholder if empty
  const defaultImage =
    images?.[0] ||
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80";

  return (
    <div className="card bg-base-100 shadow-sm border border-base-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden group">
      {/* Property Image & Badges */}
      <figure className="relative h-52 w-full overflow-hidden bg-base-200">
        <img
          src={defaultImage}
          alt={title}
          className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-110"
        />

        {/* Availability Badge */}
        <div
          className={`absolute top-3 right-3 badge font-bold shadow-sm border-0 ${isAvailable ? "badge-secondary text-white" : "badge-neutral text-neutral-content"}`}
        >
          {isAvailable ? "Available" : "Rented"}
        </div>

        {/* Category Tag */}
        <div className="absolute top-3 left-3 bg-base-100/90 backdrop-blur-sm text-[10px] px-2 py-1 rounded-md font-bold text-primary uppercase tracking-wider shadow-sm">
          {category?.name || "Property"}
        </div>
      </figure>

      {/* Card Body */}
      <div className="card-body p-5 gap-3">
        {/* Location & Title */}
        <div>
          <div className="flex items-center gap-1.5 text-xs text-neutral/60 mb-1 font-medium">
            <MapPin className="w-3.5 h-3.5 text-secondary" />
            <span className="truncate">{location}</span>
          </div>
          <h2
            className="card-title text-base font-extrabold text-primary truncate"
            title={title}
          >
            {title}
          </h2>
        </div>

        {/* Quick Specs (Mocking beds/baths as they are not in your JSON, using amenities instead for visual balance) */}
        <div className="flex justify-between items-center text-[11px] font-semibold text-neutral/70 bg-base-200/50 p-2.5 rounded-lg border border-base-200">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-secondary/70" /> Verified
          </span>
          <span className="flex items-center gap-1">
            ✨ {amenities?.length || 0} Amenities
          </span>
          <span className="flex items-center gap-1">
            <Square className="w-3.5 h-3.5 text-secondary/70" /> Spacious
          </span>
        </div>

        <div className="divider my-0 h-px"></div>

        {/* Price & Action Button */}
        <div className="card-actions justify-between items-center">
          <div>
            <span className="text-xl font-black text-primary">
              ৳{pricePerMonth?.toLocaleString("en-IN")}
            </span>
            <span className="text-[10px] text-neutral/50 font-medium ml-1 uppercase">
              / Month
            </span>
          </div>

          <Link href={`/properties/${property.id}`}>
            <button className="btn btn-primary btn-sm rounded-lg font-bold text-xs gap-1.5 px-4 shadow-sm">
              Details <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertiesCard;

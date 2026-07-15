import React from "react";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  ShieldCheck,
  Calendar,
  User,
  Wifi,
  Wind,
  Car,
  Dumbbell,
} from "lucide-react";

const PropertyDetailsCard = ({ property }) => {
  const {
    title,
    description,
    location,
    pricePerMonth,
    price,
    beds,
    baths,
    sqft,
    images = [],
    image,
    amenities = [],
    category,
    isAvailable,
    landlord,
  } = property;

  const displayPrice = pricePerMonth || price;
  const mainImage = images && images.length > 0 ? images[0] : image;
  const propertyType = category?.name || property.type || "Apartment";

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-12 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Gallery & Core Details */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-md border border-base-300 bg-base-200">
            <img
              src={
                mainImage ||
                "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
              }
              alt={title}
              className="object-cover w-full h-full"
            />
            {isAvailable !== false && (
              <div className="absolute top-4 right-4 badge badge-secondary font-bold px-3 py-2">
                Available
              </div>
            )}
          </div>

          {images && images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {images.map((imgUrl, index) => (
                <div
                  key={index}
                  className="h-20 md:h-28 rounded-xl overflow-hidden border border-base-300 bg-base-200 cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src={imgUrl}
                    alt={`${title} gallery ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-wider">
              <span>{propertyType}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {location}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-primary leading-tight">
              {title}
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-4 bg-base-200 p-4 rounded-xl border border-base-300 text-center font-semibold text-neutral text-xs md:text-sm">
            <div className="flex flex-col items-center gap-1">
              <Bed className="w-4 h-4 text-secondary" />
              <span>{beds || 3} Bedrooms</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Bath className="w-4 h-4 text-secondary" />
              <span>{baths || 2} Bathrooms</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Square className="w-4 h-4 text-secondary" />
              <span>{sqft || 1450} Sq Ft</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold text-primary border-l-4 border-secondary pl-2">
              Description
            </h3>
            <p className="text-sm text-neutral/80 leading-relaxed bg-base-200/50 p-4 rounded-xl border border-base-300/60">
              {description || "No description provided for this listing."}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold text-primary border-l-4 border-secondary pl-2">
              Amenities
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {amenities.length > 0 ? (
                amenities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-base-200 px-3 py-2 rounded-lg border border-base-300 text-xs font-medium text-neutral"
                  >
                    <ShieldCheck className="w-4 h-4 text-secondary shrink-0" />
                    <span className="capitalize">{item}</span>
                  </div>
                ))
              ) : (
                <>
                  <div className="flex items-center gap-2 bg-base-200 px-3 py-2 rounded-lg border border-base-300 text-xs font-medium text-neutral">
                    <Wifi className="w-4 h-4 text-secondary" /> Free WiFi
                  </div>
                  <div className="flex items-center gap-2 bg-base-200 px-3 py-2 rounded-lg border border-base-300 text-xs font-medium text-neutral">
                    <Wind className="w-4 h-4 text-secondary" /> Air Condition
                  </div>
                  <div className="flex items-center gap-2 bg-base-200 px-3 py-2 rounded-lg border border-base-300 text-xs font-medium text-neutral">
                    <Car className="w-4 h-4 text-secondary" /> Parking Space
                  </div>
                  <div className="flex items-center gap-2 bg-base-200 px-3 py-2 rounded-lg border border-base-300 text-xs font-medium text-neutral">
                    <Dumbbell className="w-4 h-4 text-secondary" /> Gym Access
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Booking Request Card */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 bg-base-200 p-5 rounded-2xl border border-base-300 shadow-sm flex flex-col gap-4">
            <div>
              <p className="text-[10px] font-bold text-neutral/50 uppercase tracking-wider">
                Rental Price
              </p>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-2xl font-black text-secondary">
                  ৳
                  {displayPrice
                    ? displayPrice.toLocaleString("bn-BD")
                    : "২০,০০০"}
                </span>
                <span className="text-xs text-neutral/60 font-medium">
                  / month
                </span>
              </div>
            </div>

            <div className="divider my-0"></div>

            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold text-primary uppercase tracking-wider">
                Select Rental Dates
              </h4>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-neutral/60">
                  Check-in Date
                </label>
                <div className="flex items-center gap-2 bg-base-100 border border-base-300 px-3 py-2 rounded-xl">
                  <Calendar className="w-4 h-4 text-secondary shrink-0" />
                  <input
                    type="date"
                    className="bg-transparent text-xs w-full outline-none font-medium cursor-pointer text-neutral"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-neutral/60">
                  Check-out Date
                </label>
                <div className="flex items-center gap-2 bg-base-100 border border-base-300 px-3 py-2 rounded-xl">
                  <Calendar className="w-4 h-4 text-secondary shrink-0" />
                  <input
                    type="date"
                    className="bg-transparent text-xs w-full outline-none font-medium cursor-pointer text-neutral"
                  />
                </div>
              </div>
            </div>

            <button className="btn btn-primary w-full font-bold rounded-xl mt-2 transition-transform active:scale-95 shadow-md">
              Request Rental
            </button>

            <div className="divider my-0"></div>

            {/* Landlord Info Summary */}
            <div className="flex items-center gap-3 bg-base-100 p-3 rounded-xl border border-base-300/80">
              <div className="bg-secondary/10 p-2 rounded-lg text-secondary shrink-0">
                <User className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] font-bold text-neutral/40 uppercase tracking-widest">
                  Listed By Landlord
                </p>
                <h4 className="text-xs font-bold text-primary truncate">
                  {landlord?.name || "Verified Property Owner"}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsCard;

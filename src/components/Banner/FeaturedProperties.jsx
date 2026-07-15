import React from "react";
import Link from "next/link";
import { Building2, Star, ArrowRight } from "lucide-react";

const FeaturedProperties = () => {
  const dummyProperties = [
    {
      id: 1,
      title: "Modern Studio Apartment",
      location: "Banani, Dhaka",
      price: "৳২৫,০০০",
      beds: 2,
      baths: 2,
      type: "Studio",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      title: "Family Luxury Duplex",
      location: "Gulshan, Dhaka",
      price: "৳৬৫,০০০",
      beds: 4,
      baths: 3,
      type: "Apartment",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      title: "Cozy Minimalist House",
      location: "Dhanmondi, Dhaka",
      price: "৳৩৫,০০০",
      beds: 3,
      baths: 2,
      type: "House",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <section className="py-12 bg-base-100 max-w-7xl mx-auto px-4 lg:px-12">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-primary">
            Featured Properties
          </h2>
          <p className="text-xs text-neutral/60 mt-1">
            Handpicked verified rental options just for you.
          </p>
        </div>
        <Link
          href="/properties"
          className="btn btn-ghost btn-sm text-secondary font-bold flex items-center gap-1 hover:bg-transparent p-0"
        >
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyProperties.map((property) => (
          <div
            key={property.id}
            className="card bg-base-200 shadow-sm border border-base-300 hover:shadow-md transition-all rounded-xl overflow-hidden group"
          >
            <figure className="relative h-48 w-full overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="badge badge-secondary absolute top-3 right-3 text-[10px] font-bold">
                Available
              </div>
            </figure>
            <div className="card-body p-4 gap-1.5">
              <div className="flex justify-between items-center text-[10px] font-bold text-neutral/50 uppercase">
                <span>
                  {property.type} • {property.location}
                </span>
                <span className="flex items-center gap-0.5">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" /> 4.8
                </span>
              </div>
              <h3 className="card-title text-base font-extrabold text-primary truncate">
                {property.title}
              </h3>
              <div className="flex gap-4 text-xs text-neutral/70 font-semibold my-1 bg-base-100 p-2 rounded-lg">
                <span>🛏️ {property.beds} Beds</span>
                <span>🚿 {property.baths} Baths</span>
              </div>
              <div className="divider my-1"></div>
              <div className="card-actions justify-between items-center">
                <div>
                  <span className="text-lg font-black text-secondary">
                    {property.price}
                  </span>
                  <span className="text-[10px] text-neutral/60">/mo</span>
                </div>
                <Link
                  href={`/properties/${property.id}`}
                  className="btn btn-primary btn-sm rounded-lg font-bold text-xs"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;

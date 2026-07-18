import PropertyDetailsCard from "@/components/card/propertyDetailsCard";
import React from "react";

const propertyDetails = async ({ params }) => {
  const { slug } = await params;
  let result = null;

  try {
    const res = await fetch(`http://localhost:5000/api/properties/${slug}`);
    if (res.ok) {
      result = await res.json();
    }
  } catch (error) {
    console.error("Error fetching property details:", error);
  }

  if (!result || !result.data) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] bg-base-100">
        <div className="text-center p-8 bg-base-200 rounded-2xl border border-base-300 max-w-sm">
          <h3 className="text-lg font-bold text-primary">Property Not Found</h3>
          <p className="text-xs text-neutral/60 mt-1">
            The property listing you are trying to access does not exist or has
            been removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-base-100 min-h-screen">
      <PropertyDetailsCard property={result.data} />
    </div>
  );
};

export default propertyDetails;

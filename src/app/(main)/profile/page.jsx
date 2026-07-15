"use client";
import UseAxiosSecure from "@/provider/UseAxiosSecure";
import React, { useEffect, useState } from "react";

const ProfileSkeleton = () => {
  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-base-200 rounded-2xl animate-pulse border border-base-300">
      <div className="h-7 bg-base-300 rounded-lg w-3/4 mb-4"></div>
      <div className="h-4 bg-base-300 rounded-lg w-1/2"></div>
    </div>
  );
};

const Profile = () => {
  const axiosSecure = UseAxiosSecure();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axiosSecure.get("/api/auth/me");
        setUserData(response.data.data || response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [axiosSecure]);

  if (isLoading) {
    return <ProfileSkeleton />;
  }

  if (!userData) {
    return (
      <div className="max-w-md mx-auto my-10 p-6 bg-base-200 rounded-2xl border border-dashed border-error/50 text-center">
        <p className="text-sm font-bold text-error">
          Failed to load profile data.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-base-200 border border-base-300 rounded-2xl shadow-sm">
      <div className="flex flex-col gap-4">
        <div>
          <span className="text-[10px] font-bold text-neutral/50 uppercase tracking-wider block mb-1">
            Account Type
          </span>
          <span className="badge badge-secondary font-bold text-xs px-3 py-2.5 rounded-lg">
            {userData?.role}
          </span>
        </div>

        <div>
          <span className="text-[10px] font-bold text-neutral/50 uppercase tracking-wider block mb-0.5">
            Full Name
          </span>
          <h1 className="text-xl font-black text-neutral tracking-tight">
            {userData?.name}
          </h1>
        </div>

        <div>
          <span className="text-[10px] font-bold text-neutral/50 uppercase tracking-wider block mb-0.5">
            Email Address
          </span>
          <p className="text-sm text-neutral/80 font-medium">
            {userData?.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

"use client";

import { useEffect, useState } from "react";
import UseAxiosSecure from "./UseAxiosSecure";

const UseRole = () => {
  const axiosSecure = UseAxiosSecure();

  const [role, setRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const res = await axiosSecure.get("/api/auth/me");

        setRole(res.data.data?.role || res.data.role);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Error fetching role:", error);

        setRole(null);

        if (error.response?.status === 401) {
          setIsAuthenticated(false);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchRole();
  }, [axiosSecure]);

  return {
    role,
    isLoading,
    isAuthenticated,
  };
};

export default UseRole;

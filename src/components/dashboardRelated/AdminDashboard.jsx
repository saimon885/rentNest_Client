"use client";

import { useEffect, useState } from "react";
import UseAxiosSecure from "@/provider/UseAxiosSecure";
import UseRole from "@/provider/UseRole";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"];

const AdminDashboard = () => {
  const axiosSecure = UseAxiosSecure();
  const { role, isLoading, isAuthenticated } = UseRole();

  const [stats, setStats] = useState(null);
  const [loadingStats, setLoadingStats] = useState(true);

  useEffect(() => {
    if (role !== "ADMIN") return;

    const fetchStats = async () => {
      try {
        const res = await axiosSecure.get("/api/admin/states");
        setStats(res.data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoadingStats(false);
      }
    };

    fetchStats();
  }, [role, axiosSecure]);

  // Loading
  if (isLoading || (role === "ADMIN" && loadingStats)) {
    return (
      <div className="flex justify-center items-center h-40">Loading...</div>
    );
  }

  // Unauthorized
  if (!isAuthenticated || !role) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold text-red-500">Unauthorized</h2>
        <p>Please login first.</p>
      </div>
    );
  }

  // Other Roles
  if (role !== "ADMIN") {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <div className="bg-white shadow-lg rounded-xl p-10 text-center">
          <h1 className="text-3xl font-bold">Welcome {role}</h1>

          <p className="text-gray-500 mt-3">
            Your dashboard is under development.
          </p>
        </div>
      </div>
    );
  }

  const userChart = [
    {
      name: "Admin",
      value: stats.TotalAdmin,
    },
    {
      name: "Landlord",
      value: stats.TotalLandLord,
    },
    {
      name: "Tenant",
      value: stats.TotalTenant,
    },
  ];

  const rentalChart = [
    {
      name: "Pending",
      value: stats.pendingRentalRequest,
    },
    {
      name: "Approved",
      value: stats.approvedRentalRequest,
    },
    {
      name: "Completed",
      value: stats.completedRentalRequest,
    },
  ];

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card title="Total Users" value={stats.totalUsers} />

        <Card title="Properties" value={stats.totalProperty} />

        <Card title="Categories" value={stats.totalCategory} />

        <Card title="Revenue" value={`৳ ${stats.totalAmount}`} />

        <Card title="Rental Requests" value={stats.totalRentalRequest} />

        <Card title="Reviews" value={stats.totalReview} />
      </div>

      {/* Charts */}

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow p-5 h-[350px]">
          <h2 className="font-bold mb-4">User Distribution</h2>

          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={userChart}
                dataKey="value"
                nameKey="name"
                outerRadius={110}
                label
              >
                {userChart.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow p-5 h-[350px]">
          <h2 className="font-bold mb-4">Rental Requests</h2>

          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={rentalChart}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="value" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

function Card({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h3 className="text-gray-500 text-sm">{title}</h3>

      <h2 className="text-3xl font-bold mt-2">{value}</h2>
    </div>
  );
}

export default AdminDashboard;

"use client";

import React from "react";
import { User, Mail, KeyRound, ShieldCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import UseAuth from "@/provider/Useauth";

const Register = () => {
  const { createUser } = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      role: "TENANT",
      password: "",
    },
  });

  const onSubmit = async (formData) => {
    console.log("Registration Process Started:", formData.email);
    try {
      const userCredential = await createUser(
        formData.email,
        formData.password,
      );
      console.log(
        "Firebase Account Created Successfully:",
        userCredential?.user,
      );
      const response = await axios.post(
        "https://rent-nest-a-4.vercel.app/api/auth/register",
        formData,
      );

      const result = response.data;
      console.log("Database Sync Successful:", result);
    } catch (error) {
      console.error(
        "Registration Pipeline Failed:",
        error.message || error.response?.data,
      );
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3.5">
        {/* Full Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold text-neutral/60 uppercase tracking-wider">
            Full Name
          </label>
          <div className="flex items-center gap-2 bg-base-200 border border-base-300 px-3 py-2.5 rounded-xl focus-within:border-secondary transition-colors">
            <User className="w-4 h-4 text-neutral/40 shrink-0" />
            <input
              type="text"
              placeholder="enter your name"
              className="bg-transparent text-xs w-full outline-none text-neutral font-medium"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters long",
                },
              })}
            />
          </div>
          {errors.name && (
            <span className="text-[10px] text-error font-bold px-1">
              {errors.name.message}
            </span>
          )}
        </div>

        {/* Email Address */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold text-neutral/60 uppercase tracking-wider">
            Email Address
          </label>
          <div className="flex items-center gap-2 bg-base-200 border border-base-300 px-3 py-2.5 rounded-xl focus-within:border-secondary transition-colors">
            <Mail className="w-4 h-4 text-neutral/40 shrink-0" />
            <input
              type="email"
              placeholder="your@gmail.com"
              className="bg-transparent text-xs w-full outline-none text-neutral font-medium"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              })}
            />
          </div>
          {errors.email && (
            <span className="text-[10px] text-error font-bold px-1">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Account Marketplace Role */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold text-neutral/60 uppercase tracking-wider">
            Account Marketplace Role
          </label>
          <div className="flex items-center gap-2 bg-base-200 border border-base-300 px-3 py-2.5 rounded-xl focus-within:border-secondary transition-colors">
            <ShieldCheck className="w-4 h-4 text-neutral/40 shrink-0" />
            <select
              className="bg-transparent text-xs w-full outline-none text-neutral font-semibold cursor-pointer select-sm p-0 h-auto"
              {...register("role", { required: "Role is required" })}
            >
              <option value="TENANT">Tenant (Look for Property)</option>
              <option value="LANDLORD">Landlord (List Property)</option>
            </select>
          </div>
          {errors.role && (
            <span className="text-[10px] text-error font-bold px-1">
              {errors.role.message}
            </span>
          )}
        </div>

        {/* Secure Password */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold text-neutral/60 uppercase tracking-wider">
            Secure Password
          </label>
          <div className="flex items-center gap-2 bg-base-200 border border-base-300 px-3 py-2.5 rounded-xl focus-within:border-secondary transition-colors">
            <KeyRound className="w-4 h-4 text-neutral/40 shrink-0" />
            <input
              type="password"
              placeholder="saimon"
              className="bg-transparent text-xs w-full outline-none text-neutral font-medium"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />
          </div>
          {errors.password && (
            <span className="text-[10px] text-error font-bold px-1">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full font-bold rounded-xl mt-2 shadow-sm transition-transform active:scale-95 text-xs h-11 text-white"
        >
          Register Account
        </button>
      </form>
    </div>
  );
};

export default Register;

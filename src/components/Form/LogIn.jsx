"use client";

import UseAuth from "@/provider/Useauth";
import { KeyRound, Mail } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter, useSearchParams } from "next/navigation";

const LogIn = () => {
  const { signInUser } = UseAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (formData) => {
    try {
      await signInUser(formData.email, formData.password);

      await axios.post(
        "https://rent-nest-a-4.vercel.app/api/auth/login",
        formData,
      );
      Swal.fire({
        title: "Login Successful!",
        text: "Welcome back!",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push(from);
        }
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.response?.data?.message || error.message || "Login failed",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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

        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-center">
            <label className="text-[11px] font-bold text-neutral/60 uppercase tracking-wider">
              Password
            </label>
            <a
              href="#"
              className="text-[11px] font-bold text-secondary hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <div className="flex items-center gap-2 bg-base-200 border border-base-300 px-3 py-2.5 rounded-xl focus-within:border-secondary transition-colors">
            <KeyRound className="w-4 h-4 text-neutral/40 shrink-0" />
            <input
              type="password"
              placeholder="password..."
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

        <button
          type="submit"
          className="btn btn-primary w-full font-bold rounded-xl mt-2 shadow-sm transition-transform active:scale-95 text-xs h-11 text-white"
        >
          Sign In Account
        </button>
      </form>
    </div>
  );
};

export default LogIn;

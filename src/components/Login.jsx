import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!data) {
      throw new Error("Data is null");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Sign in to your PopX account
        </h2>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div className="relative">
            <label
              htmlFor="email"
              className="absolute left-3 top-[-16px] bg-white text-purple-500 p-1 text-sm font-semibold pointer-events-none"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              {...register("email", { required: "Email is required" })}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              placeholder="Enter email address"
            />

            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
                maxLength: {
                  value: 20,
                  message: "Password must be at most 20 characters long",
                },
              })}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
                maxLength: {
                  value: 20,
                  message: "Password must be at most 20 characters long",
                },
              })}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              placeholder="Enter password"
            />
            <label
              htmlFor="password"
              className="absolute left-3 top-[-16px] bg-white text-purple-500 p-1 text-sm font-semibold pointer-events-none"
            >
              Password
            </label>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={true}
            className="w-full bg-gray-400  text-white font-medium py-2 px-4 rounded-lg  cursor-not-allowed "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

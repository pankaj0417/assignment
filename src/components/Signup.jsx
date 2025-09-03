import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm md:max-w-lg bg-white p-8 rounded-2xl shadow-md">
        {/* Heading */}
        <h2 className="md:text-3xl text-xl text-center  font-bold text-gray-900 pb-12">
          Create your PopX account
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div className="relative">
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              placeholder="Enter full name"
            />
            <label
              htmlFor="name"
              className="absolute left-3 top-[-16px] bg-white text-purple-500 p-1 text-sm font-semibold pointer-events-none"
            >
              Full Name
            </label>

            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="relative">
            <input
              id="number"
              {...register("number", { required: "Number is required" })}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              placeholder="Enter phone number"
            />
            <label
              htmlFor=""
              className="absolute left-3 top-[-16px] bg-white text-purple-500 p-1 text-sm font-semibold pointer-events-none"
            >
              Phone Number
            </label>

            {errors.number && (
              <p className="text-red-500 text-xs mt-1">
                {errors.number.message}
              </p>
            )}
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              placeholder="Enter email address"
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-[-16px] bg-white text-purple-500 p-1 text-sm font-semibold pointer-events-none"
            >
              Email Address
            </label>

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
          <div className="relative">
            <input
              type="text"
              id="text"
              {...register("company")}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              placeholder="Enter company name"
            />
            <label
              htmlFor="company"
              className="absolute left-3 top-[-16px] bg-white text-purple-500 p-1 text-sm font-semibold pointer-events-none"
            >
              Company Name
            </label>

            {errors.company && (
              <p className="text-red-500 text-xs mt-1">
                {errors.company.message}
              </p>
            )}
          </div>
          <div>
            <p className="text-center">
              Are you an agency? <span className="font-semibold text-red-500">*</span>
            </p>
            <div className="flex justify-center items-center mt-2">
              <input
                type="radio"
                id="agencyYes"
                value="yes"
                {...register("agency", { required: "Please select an option" })}
                className="mr-2"
              />
              <label htmlFor="agencyYes" className="text-sm font-semibold mr-4">
                Yes
              </label>

              <input
                type="radio"
                id="agencyNo"
                value="no"
                {...register("agency", { required: "Please select an option" })}
                className="mr-2"
              />
              <label htmlFor="agencyNo" className="text-sm font-semibold">
                No
              </label>
            </div>

            {errors.agency && (
              <p className="text-red-500 text-center text-xs mt-1">
                {errors.agency.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-purple-800 active:bg-purple-800 cursor-pointer  transition-all duration-300"
          > <Link to="/account"> Create Account </Link>
           
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-md shadow-sm p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            welcome to PopX{" "}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>

        <div className="space-y-4">
            <button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-medium py-3 px-4 rounded-lg  corsor-pointer transition-all duration-300">
          <Link to="/signup">
              Create Account
          </Link>
            </button>

          <button className="w-full bg-purple-300 hover:bg-purple-400  text-black font-medium py-3 px-4 rounded-lg transition-all duration-300 corsor-pointer">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

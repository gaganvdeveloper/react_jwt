import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 px-6">
      <h1 className="text-9xl font-extrabold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Error: Something went wrong...
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Unauthorized event noticed. Please log in again.
      </p>
      <NavLink
        onClick={() => {
          sessionStorage.clear();
          localStorage.clear();
        }}
        to="/"
        className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
      >
        Click Here to Login
      </NavLink>
    </div>
  );
};

export default Error;

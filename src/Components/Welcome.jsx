import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Welcome = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-0 z-40 bg-white shadow-lg transition-transform duration-300 md:relative md:translate-x-0 md:w-64 p-6 flex flex-col items-start space-y-6 md:block`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-2xl text-blue-700 md:hidden"
        >
          &times;
        </button>
        <h1 className="text-3xl text-center font-extrabold text-blue-700 mb-6">
          User Management
        </h1>

        {/* Sidebar Links */}
        <div className="flex flex-col w-full space-y-4">
          <NavLink
            to="/create"
            className={({ isActive }) =>
              `w-full px-6 py-3 text-lg font-medium rounded-lg shadow-md transition-all duration-300 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 hover:bg-blue-100"
              }`
            }
          >
            Create Account
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `w-full px-6 py-3 text-lg font-medium rounded-lg shadow-md transition-all duration-300 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 hover:bg-blue-100"
              }`
            }
          >
            Login
          </NavLink>
        </div>
      </div>

      {/* Hamburger Button (visible only on small screens) */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 left-4 text-2xl text-blue-700 md:hidden"
      >
        &#9776;
      </button>

      {/* Main Content Area */}
      <div className="flex-1 p-8 md:ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default Welcome;

import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div>
      <h1>UserDashboard</h1>
      <nav>
        <NavLink to="create">Create Account</NavLink>
        <NavLink to="all">All Accounts</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default UserDashboard;

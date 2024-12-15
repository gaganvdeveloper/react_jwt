import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <h1>AdminDashboard</h1>
      <NavLink to="create">Create Accounts</NavLink>
      <NavLink to="all">All Accounts</NavLink>
      <Outlet />
    </div>
  );
};

export default AdminDashboard;

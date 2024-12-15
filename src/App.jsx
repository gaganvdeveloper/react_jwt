import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateAccount from "./Components/CreateAccount";
import Login from "./Components/Login";
import Welcome from "./Components/Welcome";
import UserDashboard from "./Components/UserComponents/UserDashboard";
import AdminDashboard from "./Components/AdminComponents/AdminDashboard";
import AllAccounts from "./Components/SecuredComponents/AllAccounts";
import Error from "./Components/Error";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
      children: [
        {
          path: "/create",
          element: <CreateAccount />,
        },
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/user",
          element: <UserDashboard />,
          children: [
            {
              path: "all",
              element: <AllAccounts />,
            },
            {
              path: "create",
              element: <CreateAccount />,
            },
          ],
        },
        {
          path: "/admin",
          element: <AdminDashboard />,
          children: [
            {
              path: "all",
              element: <AllAccounts />,
            },
            {
              path: "create",
              element: <CreateAccount />,
            },
          ],
        },
      ],
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;

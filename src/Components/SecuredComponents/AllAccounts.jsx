import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const AllAccounts = () => {
  const [reload, setReload] = useState(false);
  const [display, setDisplay] = useState(false);

  const [users, setUsers] = useState([]);

  const nav = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    console.log(sessionStorage.getItem("role"));
    console.log(window.location.href.indexOf("/admin"));

    if (
      (window.location.href.indexOf("admin") !== -1 &&
        sessionStorage.getItem("role") === "USER") ||
      (window.location.href.indexOf("user") !== -1 &&
        sessionStorage.getItem("role") === "ADMIN")
    ) {
      console.log(" 403 Forbiden ->  Access Denied");
      setDisplay(false);
      setReload(false);
      const e = { msg: "Forbiden" };
      throw e;
    }

    if (sessionStorage.getItem("role") === "ADMIN") {
      axios
        .get("http://localhost:8080/users/emp", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data);
          setUsers(response.data);
          setDisplay(true);
        })
        .catch((error) => {
          console.log(error);
          nav("/");
        });
    } else if (sessionStorage.getItem("role") === "USER") {
      axios
        .get("http://localhost:8080/users/std", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data);
          setUsers(response.data);
          setDisplay(true);
        })
        .catch((error) => {
          console.log(error);
          nav("/");
        });
    }
  }, [reload, nav, display]);

  return (
    <div>
      <h1>AllAccounts</h1>

      {display && (
        <div>
          Hello
          {users.map((u, index) => {
            return <div key={index}>{u}</div>;
          })}
        </div>
      )}
      <br />
      <br />
      <br />
      <NavLink
        onClick={() => {
          sessionStorage.clear();
          localStorage.clear();
        }}
        to="/"
        className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
      >
        Logout
      </NavLink>
    </div>
  );
};

export default AllAccounts;

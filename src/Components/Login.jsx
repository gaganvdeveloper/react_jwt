import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    console.log(token);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/login", formData)
      .then((response) => {
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("role", response.data.body.role);
        nav(("/" + response.data.body.role).toLowerCase());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 px-4">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-extrabold text-blue-700 mb-8 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>

          {/* Create Account Link */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">
              Don't have an account?{" "}
            </span>
            <NavLink
              to="/create"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Create Account
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import NavLink for routing

const CreateAccount = () => {
  const nav = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    console.log(token);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/save", formData)
      .then((response) => {
        console.log(response.data);
        nav("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 px-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-extrabold text-blue-700 mb-8 text-center">
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name */}
          <div className="flex flex-col">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-600"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your first name"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-600"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your last name"
            />
          </div>

          {/* Username */}
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Choose a username"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
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

          {/* Phone */}
          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-600"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
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
              placeholder="Create a password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">
            Already have an account?{" "}
            <NavLink
              to="/"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Login
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;

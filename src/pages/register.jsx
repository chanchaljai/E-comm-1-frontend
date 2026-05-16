import React, { useState } from "react";

const Register = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // API Call Here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >

        <h2 className="text-3xl font-bold text-center mb-6">
          Register
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">
            Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg outline-none"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg outline-none"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg outline-none"
            required
          />
        </div>

        {/* Role */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">
            Role
          </label>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg outline-none"
          >
            <option value="user">
              User
            </option>

            <option value="admin">
              Admin
            </option>
          </select>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Register
        </button>

      </form>

    </div>
  );
};

export default Register;
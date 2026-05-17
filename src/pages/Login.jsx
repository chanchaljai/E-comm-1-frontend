import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", form);

      const { token, user } = res.data;

      // store token
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      setMsg("Login successful");

      // 👇 ROLE BASED REDIRECT
      if (user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }

    } catch (error) {
      setMsg(error?.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <div className="bg-white p-6 rounded shadow-md w-80">

        <h1 className="text-2xl font-bold text-center mb-2">
          Login
        </h1>

        {msg && (
          <p className="text-center text-sm text-blue-600 mb-3">
            {msg}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-gray-800 text-white p-2 rounded"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;
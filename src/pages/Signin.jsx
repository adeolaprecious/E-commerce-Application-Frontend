import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo1 from '../assets/images/logo1.png';
import { toast } from 'react-toastify';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loginUser = () => {
    if (!email || !password) {
      toast.warn("Please enter your email and password.");
      return;
    }

    const oldUser = { email, password };
    setLoading(true);

    axios.post("https://e-commerce-application-backend-u42p.onrender.com/user/login", oldUser)
      .then((res) => {
        console.log("Response:", res.data);

        if (res.data.message === "Login successful") {
          toast.success("Welcome back!");
          localStorage.setItem("token", res.data.user.token);
          navigate("/home");
        } else {
          toast.error(res.data.message || "Invalid credentials");
        }
      })
      .catch((err) => {
        console.error("Error:", err.response ? err.response.data : err);
        toast.error("Login failed. Please check your email or password.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8" style={{ backgroundColor: '#fbf6ef' }}>
        <div className="flex flex-col items-center" style={{ marginTop: '-20px' }}>
          <img src={logo1} alt="Logo" className="w-20 mb-2" />
          <h2 className="text-2xl font-semibold text-center mb-6">Welcome back</h2>
        </div>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                className="w-4 h-4"
                onChange={(e) => setShowPassword(e.target.checked)}
              />
              Show password
            </label>
            <Link to="/forgot-password" className="text-sm text-amber-600 hover:underline">
              Forgot password?
            </Link>
          </div>
          
          <button
            type="button"
            className={`w-full py-2 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition ${loading ? 'bg-amber-400 cursor-not-allowed' : 'bg-amber-600 hover:bg-amber-700'}`}
            onClick={loginUser}
            disabled={loading}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                  ></path>
                </svg>
                Signing in...
              </>
            ) : (
              "Sign in"
            )}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-slate-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-amber-600 hover:underline font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
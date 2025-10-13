import React, { useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import logo1 from '../assets/images/logo1.png'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const loginUser = () => {
    const oldUser = { email, password }
    axios.post("https://e-commerce-application-backend-u42p.onrender.com/user/login", oldUser)
      .then((res) => {
        console.log("Response:", res.data);

        if (res.data.message === "Login successful") {
          alert("Welcome back!");
          // localStorage.token = res.data.user.token
          localStorage.setItem("token", res.data.user.token);
          // ✅ Redirect to dashboard, not "/"
          navigate("/home");
        } else {
          alert(res.data.message || "Invalid credentials");
        }
      })
      .catch((err) => {
        console.error("Error:", err.response ? err.response.data : err);
        alert("Login failed. Please check your email or password.");
      });
  }

  return (
    <>
      <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8" style={{ backgroundColor: '#fbf6ef' }}>
          <div className="flex flex-col items-center" style={{ display: "flex", flexDirection: "column", marginTop: '-20px' }}>
            <img src={logo1} alt="" className=" w-20 item-center" style={{ marginBottom: '-15px', alignContent: 'center' }} />
            <h2 className="text-2xl font-semibold text-center mb-6">Welcome back</h2>
          </div>

          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1"> Email </label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-300" required onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
              <input type="password" id="password" name="password" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-300" required onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="w-4 h-4" /> Remember me
              </label>
              <a href="#" className="text-sm text-amber-600">Forgot password?</a>
            </div>

            <button type="button" className="w-full py-2 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-700" onClick={loginUser}>Sign in</button>
          </form>
          <p className="mt-4 text-center text-sm text-slate-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-amber-600 hover:underline font-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Signin



import React from 'react'
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <>
       <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Welcome back</h2>

        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1"> Email </label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-300" required />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <input type="password" id="password" name="password" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-300" required/>
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="w-4 h-4" /> Remember me
            </label>
            <a href="#" className="text-sm text-amber-600">Forgot password?</a>
          </div>

          <button type="submit" className="w-full py-2 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-700">Sign in</button>
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



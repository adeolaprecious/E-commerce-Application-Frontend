import React from "react";

const Signup =()=> {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Create account</h2>

        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">First name</label>
            <input type="text" id="name" name="Firstname" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-300" required/>
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">Last name</label>
            <input type="text" id="name" name="lastName" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-300" required/>
          </div>

          <div className="mb-4">
            <label htmlFor="signup-email" className="block text-sm font-medium mb-1" > Email</label>
            <input type="email" id="signup-email" name="email" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-300" required />
          </div>

          <div className="mb-4">
            <label htmlFor="signup-password" className="block text-sm font-medium mb-1" > Password </label>
            <input type="password" id="signup-password" name="password" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-300" required/>
          </div>
          <button type="submit" className="w-full py-2 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-700" > Create account</button>
        </form>
        <p className="mt-4 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <a href="/signin" className="text-amber-600 font-medium"> Sign in</a>
        </p>
      </div>
    </div>
  );
}

export default Signup
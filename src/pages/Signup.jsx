import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import logo1 from '../assets/images/logo1.png';
import { toast } from 'react-toastify';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addUsers = () => {
    if (!firstName || !lastName || !email || !password) {
      toast.warn("Please fill in all fields.");
      return;
    }

    const newUser = { firstName, lastName, email, password };
    setLoading(true);

    axios.post('https://e-commerce-application-backend-u42p.onrender.com/user/register', newUser)
     
      .then((res) => {
        console.log('Response:', res.data);

        if (res.data.message?.includes("successful")) {
          toast.success("🎉 Registration successful! Please check your email or login.");
          setAllUsers([...allUsers, newUser]);
          navigate("/signin");
        } else {
          toast.info(res.data.message || "Account created successfully!");
          navigate("/signin");
        }
      })
      .catch((err) => {
        console.error("Error:", err.response ? err.response.data : err);

        if (err.response) {
          if (err.response.status === 409) {
            toast.error("User already exists. Please sign in instead.");
            navigate("/signin");
          } else if (err.response.status === 400) {
            toast.error("Invalid details. Please check your inputs.");
          } else if (err.response.status === 500) {
            toast.error("Server error. Please try again later.");
          } else {
            toast.error(err.response.data.message || "Signup failed, try again later.");
          }
        } else {
          toast.error("Network error. Please check your internet connection.");
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="bg-gradient-to-b from-slate-100 to-slate-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md shadow-lg rounded-2xl p-8" style={{ backgroundColor: '#fbf6ef' }}>
        <div className="flex flex-col items-center" style={{ marginTop: '-20px' }}>
          <img src={logo1} alt="Logo" className="w-20 mb-2" />
          <h2 className="text-2xl font-semibold text-center mb-5">Create account</h2>
        </div>

        <form>
          <div className="mb-4">
            <label htmlFor="firstname" className="block text-sm font-medium mb-1">First name</label>
            <input type="text" id="firstname" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
              onChange={(e) => setFirstName(e.target.value)} required />
          </div>

          <div className="mb-4">
            <label htmlFor="lastname" className="block text-sm font-medium mb-1">Last name</label>
            <input type="text" id="lastname" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
              onChange={(e) => setLastName(e.target.value)} required />
          </div>

          <div className="mb-4">
            <label htmlFor="signup-email" className="block text-sm font-medium mb-1">Email</label>
            <input type="email" id="signup-email" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
              onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="mb-4">
            <label htmlFor="signup-password" className="block text-sm font-medium mb-1">Password</label>
            <input type="password" id="signup-password" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
              onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <button
            type="button"
            className={`w-full py-2 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition ${loading ? 'bg-amber-400 cursor-not-allowed' : 'bg-amber-600 hover:bg-amber-700'}`}
            onClick={addUsers}
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
                Signing up...
              </>
            ) : (
              "Sign up"
            )}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link to="/signin" className="text-amber-600 font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

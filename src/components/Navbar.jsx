import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../assets/images/logo1.png";
import ChatBot from "../components/ChatBot";
import { toast } from "react-toastify";
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem("token"))
  );
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "token") setIsAuthenticated(Boolean(e.newValue));
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    toast.info("Logged out");
    navigate("/signin");
  };

  // 🔍 Handle AI Search Suggestions
  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);
    if (!value.trim()) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/ai/search", {
        query: value,
      });
      setSuggestions(res.data.suggestions || []);
      setShowDropdown(true);
    } catch (error) {
      console.error("AI search error:", error);
    }
  };

  const handleSelectSuggestion = (text) => {
    setQuery(text);
    setShowDropdown(false);
    navigate(`/search?query=${encodeURIComponent(text)}`);
  };

  return (
    <>
      <nav
        className="shadow-md px-6 py-2 flex justify-between items-center text-amber-500 w-full"
        style={{ backgroundColor: "#fbf6ef", position: "fixed", zIndex: 50 }}
      >
        {/* Logo */}
        <Link to="/home" className="flex items-center">
          <img src={logo1} alt="Logo" className="h-14 md:h-20" />
        </Link>

        {/* 🔍 AI Smart Search */}
        <div className="relative w-full max-w-xl mx-4 hidden md:block">
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            onFocus={() => query && setShowDropdown(true)}
            placeholder="Ask AI to find products... (e.g. amber dresses under ₦20,000)"
            className="w-full px-5 py-2 rounded-full border border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-700"
          />
          {showDropdown && suggestions.length > 0 && (
            <ul className="absolute z-50 bg-white border border-amber-200 mt-1 rounded-xl shadow-lg w-full max-h-60 overflow-y-auto">
              {suggestions.map((item, i) => (
                <li
                  key={i}
                  onClick={() => handleSelectSuggestion(item)}
                  className="px-4 py-2 hover:bg-amber-100 cursor-pointer text-gray-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        <ChatBot />

        {/* Menu Button for Mobile */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Menu Items */}
        <ul
          className={`flex-col md:flex-row md:flex md:items-center md:space-x-8 absolute md:static bg-[#fbf6ef] left-0 w-full md:w-auto transition-all duration-300 ease-in-out ${
            isOpen
              ? "top-[90px] opacity-100"
              : "top-[-400px] opacity-0 md:opacity-100"
          }`}
          style={{ fontSize: "20px" }}
        >
          <li className="py-2 md:py-0 text-center">
            <Link to="/home" className="hover:text-amber-800">
              Home
            </Link>
          </li>
          <li className="py-2 md:py-0 text-center">
            <Link to="/product" className="hover:text-amber-800">
              Products
            </Link>
          </li>
          <li className="py-2 md:py-0 text-center">
            <Link to="/order" className="hover:text-amber-800">
              Order
            </Link>
          </li>

          {/* Right-side buttons */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-5 py-4 md:py-0 justify-center md:ml-6">
            <Link to="/cart" className="text-2xl text-center">
              🛒
            </Link>
            <div className="flex space-x-3">
              {!isAuthenticated ? (
                <>
                  <Link to="/signin">
                    <button
                      type="button"
                      className="w-32 h-10 rounded-full bg-amber-600 text-white font-medium hover:bg-amber-700 transition-all"
                    >
                      Sign In
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button
                      type="button"
                      className="w-32 h-10 rounded-full border border-amber-600 text-amber-600 font-medium hover:bg-amber-600 hover:text-white transition-all"
                    >
                      Sign Up
                    </button>
                  </Link>
                </>
              ) : (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-32 h-10 rounded-full bg-amber-800 text-white font-medium hover:bg-red-600 transition-all"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

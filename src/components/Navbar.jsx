import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/images/logo1.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="shadow-md px-6 py-4 flex justify-between items-center text-amber-500"
      style={{ backgroundColor: '#fbf6ef' }}
    >
      <Link to="/home" className="flex items-center">
        <img src={logo1} alt="Logo" className="h-14 md:h-20" />
      </Link>
      <button
        className="md:hidden text-3xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✖' : '☰'}
      </button>
      <ul
        className={`flex-col md:flex-row md:flex md:items-center md:space-x-8 absolute md:static bg-[#fbf6ef] left-0 w-full md:w-auto transition-all duration-300 ease-in-out ${
          isOpen ? 'top-[90px] opacity-100' : 'top-[-400px] opacity-0 md:opacity-100'
        }`}
        style={{ fontSize: '20px' }}
      >
        <li className="py-2 md:py-0 text-center">
          <Link to="/home" className="hover:text-blue-500">Home</Link>
        </li>
        <li className="py-2 md:py-0 text-center">
          <Link to="/product" className="hover:text-blue-500">Products</Link>
        </li>
        <li className="py-2 md:py-0 text-center">
          <Link to="/order" className="hover:text-blue-500">Order</Link>
        </li>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-5 py-4 md:py-0 justify-center md:ml-6">
          <Link to="/cart" className="text-2xl text-center">🛒</Link>
          <Link to="/signin" className="text-xl text-center md:hidden">👤</Link>

          <div className="flex space-x-3">
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
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;


// const token = localStorage.getItem('token');
// {token ? (
//   <button onClick={() => {localStorage.removeItem('token'); window.location.href = '/signin';}}>
//     Sign Out
//   </button>
// ) : (
//   <>
//     <Link to="/signin">Sign In</Link>
//     <Link to="/signup">Sign Up</Link>
//   </>
// )}

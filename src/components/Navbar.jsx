// import React from 'react'
// import { Link } from 'react-router-dom'
import logo1 from '../assets/images/logo1.png'

// const Navbar = () => {
//   return (
//     <>

//         <nav style={{backgroundColor: '#fbf6ef', display: 'flex', justifyContent: 'space-between', alignContent:"center"}} >
//             <Link to = "/" > <img src={logo1} alt="" /></Link>
//             < ul className='text-amber-500' style={{listStyle: 'none'}}>
//                 <li style={{ display:"inline-block", margin: "10px"}} ><Link to = "/" >Home </Link> </li>
//                 <li style={{ display:"inline-block", margin: "10px"}}> <Link to = "/">About</Link></li>
//                 <li style={{ display:"inline-block", margin: "10px"}}><Link to = "/">Contact</Link></li>
//                 <li style={{ display:"inline-block", margin: "10px"}}><Link to = "/services">Services</Link></li>
//                 <li style={{ display:"inline-block", margin: "10px"}}><Link to = "/signup">Sign Up</Link></li>
//                 <li style={{ display:"inline-block", margin: "10px"}}><Link to = "/signin">Sign In</Link></li>
                    
//             </ul>
//         </nav>
//     </>
//   )
// }

// export default Navbar


import { Link } from "react-router-dom";
// import { useSelector } from "react-redux"; // if using Redux for cart

const Navbar = () => {
  // Example: cart count from Redux store
//   const cartCount = useSelector(state => state.cart.items.length);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
        <img src={logo1} alt="" />
      </Link>

      {/* Links */}
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
        <li><Link to="/shop" className="hover:text-blue-500">Shop</Link></li>
        <li><Link to="/categories" className="hover:text-blue-500">Categories</Link></li>
        <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
      </ul>

      {/* Right Side: Search + Cart + User */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          className="border rounded-md px-3 py-1 focus:outline-blue-500"
        />

        {/* Cart */}
        <Link to="/cart" className="relative">
          {/* <span className="text-2xl">🛒</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
              {cartCount}
            </span>
          )} */}
        </Link>

        {/* User */}
        <Link to="/login" className="text-xl">👤</Link>
      </div>
    </nav>
  );
};

export default Navbar;

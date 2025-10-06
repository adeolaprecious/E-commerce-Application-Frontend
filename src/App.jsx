import React from "react";
import { Routes, Route} from "react-router-dom";
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Home from "./pages/Home"
import Products from "./pages/Products"
import Landingpage from "./pages/Landingpage";

const App = () => {
  let token = localStorage.getItem("token");
  // const isAuthenticated = () => { return !!localStorage.getItem("token"); };
  return (
    <>
    <Navbar/>
       <Routes>
          <Route path="/home" element={token?<Home />:<Navigate to="/signin"/>} />
          <Route path="/" element={<Landingpage/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path= "/signin" element ={<Signin/>}/>
          <Route path= "/products" element ={<Products/>}/>
          {/* <Route path= "/home" element ={<Home/>}/> */}
          <Route path= "/cart" element ={<Cart/>}/>
          <Route path= "/order" element ={<Order/>}/>

          
          
        </Routes>
    </>
  )
}

export default App



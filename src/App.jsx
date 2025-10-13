import React from "react";
import { Routes, Route ,Navigate} from "react-router-dom";
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Home from "./pages/Home"
import Product from "./pages/Product"
import Landingpage from "./pages/Landingpage";

const App = () => {
  return (
    <>
    <Navbar/>
       <Routes>
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} /> 
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} /> 
          <Route path="/order" element={<ProtectedRoute><Order /></ProtectedRoute>} /> 

          <Route path="/" element={<Landingpage/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path= "/signin" element ={<Signin/>}/>
          <Route path= "/product" element ={<Product/>}/>
        </Routes>
    </>
  )
}
export default App



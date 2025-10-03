import React from "react";
import { Routes, Route} from "react-router-dom";
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Navbar from "./components/Navbar";

const App = () => {
  // let token = localStorage.getItem("token");
  return (
    <>
    <Navbar/>
       <Routes>
          {/* <Route path="/dashboard" element={token?<Herosection />:<Navigate to="/signin"/>} /> */}
          <Route path="/signup" element={<Signup/>} />
          <Route path= "/signin" element ={<Signin/>}/>

        </Routes>
    </>
  )
}

export default App


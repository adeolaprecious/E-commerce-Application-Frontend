import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import logo1 from '../assets/images/logo1.png'

const Signup = () => {
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName ] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [allUsers, setAllUsers] = useState([])
  const navigate = useNavigate()

  const addUsers = () => {
    let newUser = { firstName, lastName, email, password,}
    axios.post('https://e-commerce-application-backend-u42p.onrender.com/user/register', newUser)
      .then((res) => {
        console.log('Response:', res.data);
        alert(res.data.message || "Signup successful! Please login");

        setAllUsers([...allUsers, newUser]);
        navigate("/signin");

      })
      .catch((err) => {
        console.error("Error:", err.response ? err.response.data : err);;
        alert("Signup failed, try again later");

      })
  };

  return (
    < div className="bg-gradient-to-b from-slate-100 to-slate-100 min-h-screen flex items-center justify-center" >
      <div className="w-full max-w-md shadow-lg rounded-2xl p-8" style={{backgroundColor:'#fbf6ef'}}>
        <div className="flex flex-col items-center" style={{display: "flex", flexDirection:"column", marginTop:'-20px'}}>
          <img src={logo1} alt="" className=" w-20 item-center" style={{marginBottom:'-15px', alignContent:'center'}}/>
          <h2 className="text-2xl font-semibold text-center mb-5">Create account</h2>
        </div>

        <form>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium mb-1">First name</label>
            <input type="text" id="name" name="firstname" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-300" required onChange={(e) => setfirstName(e.target.value)} />
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last name</label>
            <input type="text" id="name" name="lastName" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-300" required  onChange={(e) => setlastName(e.target.value)} />
          </div>

          <div className="mb-4">
            <label htmlFor="signup-email" className="block text-sm font-medium mb-1" > Email</label>
            <input type="email" id="signup-email" name="email" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-300" required onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="mb-4">
            <label htmlFor="signup-password" className="block text-sm font-medium mb-1" > Password </label>
            <input type="password" id="signup-password" name="password" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-300" required onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="button" className="w-full py-2 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-700" onClick={addUsers}> Create account</button>
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
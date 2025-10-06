import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from '../assets/images/logo1.png'

const Landingpage = () => {
    return (
        <>

             <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen flex items-center justify-center">
                    <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8" style={{ backgroundColor: '#fbf6ef' }}>
                       <div className="flex flex-col items-center" style={{ display: "flex", flexDirection: "column", marginTop: '-20px' }}>
                        <img src={logo1} alt="" className=" w-20 item-center" style={{ marginBottom: '-15px', alignContent: 'center' }} />
                        <h2 className="text-2xl font-semibold text-center mb-6 text-amber-500">Welcome to <b>DIVA</b></h2>
                      </div>
                       <div className="flex gap-4">
                    <button type="button" className="w-full py-2 rounded-lg bg-amber-500 text-white font-medium hover:bg-amber-700">
                        <Link to="/signin">Sign In</Link>
                    </button>
                    <button type="button" className="w-full py-2 rounded-lg bg-amber-500 text-white font-medium hover:bg-amber-700">
                        <Link to="/signup">Sign Up</Link>
                    </button>
                </div>
            
                    </div>
                  </div>
        </>
    )
}

export default Landingpage
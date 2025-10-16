import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from '../assets/images/logo1.png'

const Landingpage = () => {
    return (
        <>
            <div className="font-sans text-gray-800">
                <section className="bg-amber-500 text-white py-20 px-6 flex flex-col items-center text-center" style={{ minHeight: "80vh" }}>
                    <h1 className="text-5xl font-extrabold mb-4">Welcome to Diva</h1>
                    <p className="text-lg mb-8 max-w-xl">
                        Discover your next favorite product — trendy, affordable, and made just for you.
                    </p>
                        <div className="w-200 max-w-md bg-white shadow-lg rounded-2xl p-8" style={{ backgroundColor: '#fbf6ef' }}>
                            <div className="flex flex-col items-center" style={{ display: "flex", flexDirection: "column", marginTop: '-20px' }}>
                                <img src={logo1} alt="" className=" w-20 item-center" style={{ marginBottom: '-15px', alignContent: 'center' }} />
                                <h2 className="text-2xl font-semibold text-center mb-6 text-amber-500">Welcome to <b>DIVA</b></h2>
                            </div>
                            <div className="flex gap-4">
                                <button type="button" className="w-full py-2 font-semibold rounded-lg bg-amber-500 text-white hover:bg-amber-400">
                                    <Link to="/signin">Sign In</Link>
                                </button>
                                <button type="button" className="w-full py-2 rounded-lg bg-amber-500 text-white font-medium hover:bg-amber-400">
                                    <Link to="/signup">Sign Up</Link>
                                </button>
                            </div>

                        </div>
                </section>

                <section className="py-16 px-6 bg-gray-50 text-center">
                    <h2 className="text-3xl font-bold text-amber-600 mb-10">Featured Products</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5">
                                <img
                                    src={`https://via.placeholder.com/300x200?text=Product+${item}`}
                                    alt={`Product ${item}`}
                                    className="rounded-xl mb-4"
                                />
                                <h3 className="text-lg font-semibold mb-2">Product {item}</h3>
                                <p className="text-gray-500 mb-3">$29.99</p>
                                <button className="bg-amber-500 text-white py-2 px-4 rounded-full hover:bg-amber-600">
                                    <Link to="/signup"> Add to Cart</Link>
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-16 px-6 text-center bg-white">
                    <h2 className="text-3xl font-bold text-amber-600 mb-10">What Our Customers Say</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { name: "Tolu A.", text: "Diva has the best styles! Fast delivery too!" },
                            { name: "Amaka K.", text: "I love how affordable the products are. 10/10!" },
                            { name: "John D.", text: "Excellent service and great quality. Highly recommend." },
                        ].map((t, i) => (
                            <div
                                key={i}
                                className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition"
                            >
                                <p className="text-gray-700 italic mb-4">“{t.text}”</p>
                                <h4 className="font-bold text-amber-600">{t.name}</h4>
                            </div>
                        ))}
                    </div>
                </section>

                <footer className="bg-gray-900 text-gray-300 py-8 text-center">
                    <div className="mb-4">
                        <a href="#" className="mx-3 hover:text-amber-500">
                            Home
                        </a>
                        <a href="#" className="mx-3 hover:text-amber-500">
                            Shop
                        </a>
                        <a href="#" className="mx-3 hover:text-amber-500">
                            Contact
                        </a>
                    </div>
                    <p className="text-sm">
                        © {new Date().getFullYear()} Diva. All Rights Reserved.
                    </p>
                </footer>
            </div>

        </>
    )
}

export default Landingpage
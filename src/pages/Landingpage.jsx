import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from '../assets/images/logo1.png'
import Footer from '../components/Footer'

const Landingpage = () => {
    return (
        <>
            <div className="font-sans text-gray-800">
        
                <section className="bg-amber-500 text-white flex flex-col justify-center items-center text-center py-20 px-6 min-h-[80vh]">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
                        Welcome to Diva
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
                        Discover your next favorite product — trendy, affordable, and made just for you.
                    </p>

                    <div className="w-full sm:w-[90%] md:w-[400px] bg-[#fbf6ef] shadow-lg rounded-2xl p-6 sm:p-8">
                        <div className="flex flex-col items-center mb-6 -mt-4">
                            <img
                                src={logo1}
                                alt="Diva Logo"
                                className="w-20 mb-3"
                            />
                            <h2 className="text-xl sm:text-2xl font-semibold text-amber-500">
                                Welcome to <b>DIVA</b>
                            </h2>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/signin"
                                className="w-full py-2 font-semibold rounded-lg bg-amber-500 text-white hover:bg-amber-400 transition"
                            >
                                Sign In
                            </Link>
                            <Link
                                to="/signup"
                                className="w-full py-2 rounded-lg bg-amber-500 text-white font-medium hover:bg-amber-400 transition"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </section>


                <section className="py-16 px-6 bg-gray-50 text-center">
                    <h2 className="text-3xl font-bold text-amber-600 mb-10">Featured Products</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                id: 1,
                                name: "Amber Glow Dress",
                                price: 4900.99,
                                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTurclzBs1s-N2dtbOvgw-bSmAvIs-F0puwbw&s"
                            },
                            {
                                id: 2,
                                name: "Classic Handbag",
                                price: 5900.99,
                                image: "https://img.freepik.com/free-photo/bag-hanging-from-furniture-item-indoors_23-2151073506.jpg?semt=ais_incoming&w=740&q=80"
                            },
                            {
                                id: 3,
                                name: "Trendy Sneakers",
                                price: 6900.99,
                                image: "https://img-1.kwcdn.com/product/fancy/7e0f4232-2172-419a-b19f-00e3ccf488fc.jpg?imageView2/2/w/1300/q/80/format/webp"
                            },
                        ].map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="rounded-xl mb-4 w-full h-48 object-cover"
                                />
                                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                                <p className="text-gray-500 mb-3">₦{product.price.toFixed(2)}</p>
                                <button className="bg-amber-500 text-white py-2 px-4 rounded-full hover:bg-amber-600 transition">
                                    <Link to="/signup">Add to Cart</Link>
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
                <Footer />
            </div>

        </>
    )
}

export default Landingpage
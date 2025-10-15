import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from '../components/ProductItem';
import { useCart } from '../context/useCart';
// import ProductList from '../components/ProductList';

const API_BASE_URL = 'https://e-commerce-application-backend-u42p.onrender.com';
const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Optional: Use Cart Context to demonstrate integration
    const { cartTotalItems } = useCart(); 

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Node.js route: GET /api/products
                const response = await axios.get(`${API_BASE_URL}/api/products`);
                setProducts(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch products:", err);
                setError("Failed to load products. Please check the server connection.");
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div className="text-center mt-20 text-xl">Loading products...</div>;
    }

    if (error) {
        return <div className="text-center mt-20 text-red-600 font-semibold">{error}</div>;
    }

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6 text-center text-amber-600">
                Featured Products ({cartTotalItems} items in cart) 
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.length > 0 ? (
                    products.map(product => (
                        <ProductItem key={product._id} product={product} />
                    ))
                ) : (
                    <p className="col-span-4 text-center text-gray-500">
                        No products found. Add some to your database!
                    </p>
                )}
            </div>
        </div>
    );
}

export default Home;
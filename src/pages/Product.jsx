import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from '../components/ProductItem';
import Loader from '../components/Loader';

const API_BASE_URL = 'https://e-commerce-application-backend-u42p.onrender.com';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/products`);
                setProducts(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch all products:", err);
                setLoading(false);
            }
        };

        fetchAllProducts();
    }, []);

    if (loading) {
        return <Loader />
    }

    return (
        <>
            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-extrabold mb-8 text-center text-amber-500">
                    Product Catalog
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map(product => (
                        <ProductItem key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Products;
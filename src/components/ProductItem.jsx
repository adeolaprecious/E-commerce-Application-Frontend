import React from 'react';
import { useCart } from '../context/useCart';


const ProductItem = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product._id, 1);
        console.log(`Added product ${product.name} to cart!`);
    };

    return (
        <>
            <div className="bg-[#fbf6ef] border border-[#f0e8dd] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-5 flex flex-col items-center w-full max-w-sm">
                <div className="w-full h-48 overflow-hidden rounded-xl mb-4">
                    <img src={product.image || "placeholder.png"} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"/>
                </div>
                <div className="flex flex-col gap-2 text-center mb-4 h-40">
                    <h3 className="text-lg font-semibold text-amber-600 leading-tight">{product.name}</h3>
                    <p className="text-sm text-amber-800 opacity-80 line-clamp-2">{product.description}</p>
                    <span className="text-xs font-medium text-amber-700 bg-amber-100 px-3 py-1 rounded-full w-fit mx-auto">{product.category}</span>
                    <p className="text-2xl font-bold text-amber-600 mt-2">₦{product.price.toFixed(2)}</p>
                    <p className={`text-sm ${product.stock > 0 ? "text-amber-500" : "text-red-500"}`}>{product.stock > 0 ? `In stock: ${product.stock}` : "Out of Stock"}</p>
                </div>
                <button onClick={handleAddToCart} className={`w-full py-2.5 rounded-xl font-semibold transition-colors duration-300 ${product.stock > 0 ? "bg-amber-600 text-white hover:bg-amber-700" : "bg-gray-300 text-gray-600 cursor-not-allowed" }`}disabled={product.stock === 0}>
                    {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                </button>
            </div>

        </>
    );
};

export default ProductItem;
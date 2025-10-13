// 📁 src/components/ProductItem.jsx

import React from 'react';
import { useCart } from '../context/useCart';
// Assume you'll implement a context or Redux action for adding to cart
// import { useCart } from '../context/CartContext'; 

const ProductItem = ({ product }) => {
       const { addToCart } = useCart(); // 👈 Destructure the function

    const handleAddToCart = () => {
        // Implement logic to add this product to the cart (e.g., call addToCart(product._id))
         addToCart(product._id, 1); 
        console.log(`Added product ${product.name} to cart!`);
    };

    return (
        <div className="border rounded-lg shadow-md p-4 flex flex-col items-center" style={{ backgroundColor: '#fbf6ef' }}>
            <img 
                src={product.imageUrl || 'placeholder.png'} 
                alt={product.name} 
                className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold text-center">{product.name}</h3>
            <p className="text-xl font-bold text-amber-600">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500 mb-4">In stock: {product.stock}</p>
            <button 
                onClick={handleAddToCart}
                className="w-full py-2 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-700 disabled:bg-gray-400"
                disabled={product.stock === 0}
            >
                {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
            
        </div>
    );
};

export default ProductItem;
import React from 'react';
import { useCart } from '../context/useCart';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'https://e-commerce-application-backend-u42p.onrender.com';

const Cart = () => {
    const { cart, loading, fetchCart, removeFromCart } = useCart();
    const navigate = useNavigate();

    const getAuthHeader = () => {
        const token = localStorage.getItem('token');
        return { headers: { Authorization: `Bearer ${token}` } };
    };

    const calculateTotal = () => {
        if (!cart || !cart.items) return 0;
        return cart.items.reduce((sum, item) =>
            sum + (item.product.price * item.quantity), 0
        );
    };

    const handleCheckout = async () => {
        if (!cart || cart.items.length === 0) return;
        try {
            await axios.post(`${API_BASE_URL}/api/orders`, {}, getAuthHeader());
            alert("Order placed successfully! Redirecting to orders page.");
            await fetchCart();
            navigate('/order');

        } catch (error) {
            console.error("Checkout failed:", error);
            alert("Checkout failed. Please try again.");
        }
    };

    if (loading) return <div className="text-center mt-20 text-xl">Loading cart...</div>;
    if (!cart || cart.items.length === 0) {
        return (
            <div className="text-center mt-20 p-5">
                <h2 className="text-3xl font-semibold mb-3">Your Cart is Empty 🛒</h2>
                <p className="text-gray-600">Go find some great products!</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-8 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8 text-center">Your Shopping Cart</h1>
            <div className="space-y-4">
                {cart.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 border rounded-lg bg-white shadow-sm">
                        <div className="flex items-center space-x-4">
                            <img src={item.product.image || 'placeholder.png'} alt={item.product.name} className="w-16 h-16 object-cover rounded" />
                            <div>
                                <h3 className="font-semibold">{item.product.name}</h3>
                                <p className="text-sm text-gray-600">${item.product.price.toFixed(2)} x {item.quantity}</p>
                            </div>
                        </div>
                        <div className="font-bold text-lg text-amber-600">
                            ${(item.product.price * item.quantity).toFixed(2)}
                        </div>
                        <button
                            onClick={() => removeFromCart(item.product._id)}
                            className="text-red-500 hover:text-red-700 font-semibold text-sm"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-8 pt-4 border-t-2 border-amber-600 flex justify-between items-center">
                <span className="text-2xl font-bold">Total:</span>
                <span className="text-3xl font-extrabold text-amber-600">${calculateTotal().toFixed(2)}</span>
            </div>

            <button
                onClick={handleCheckout}
                className="w-full mt-6 py-3 rounded-lg bg-amber-600 text-white font-semibold text-lg hover:bg-amber-700 transition duration-200"
            >
                Proceed to Checkout
            </button>
        </div>
    );
}

export default Cart;
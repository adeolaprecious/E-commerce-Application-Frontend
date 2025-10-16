import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { CartContext } from './cartContextStore';
const API_BASE_URL = 'https://e-commerce-application-backend-u42p.onrender.com';

export const CartProvider = ({ children }) => {
    // const [cart, setCart] = useState(null);
    const [cart, setCart] = useState({ items: [] });
    const [loading, setLoading] = useState(true);

    // --- Helper Function ---
    const getAuthHeader = () => {
        const token = localStorage.getItem('token');
        if (!token) return null;
        return { headers: { Authorization: `Bearer ${token}` } };
    };

    const fetchCart = useCallback(async () => {
        const headers = getAuthHeader();
        if (!headers) {
            setLoading(false);
            setCart({ items: [] });
            return;
        }

        try {
            const response = await axios.get(`${API_BASE_URL}/api/cart`, headers);
            setCart(response.data);
        } catch (error) {
            console.error("Failed to fetch cart:", error);
            setCart({ items: [] });
        } finally {
            setLoading(false);
        }
    }, []);

    const addToCart = async (productId, quantity = 1) => {
        const headers = getAuthHeader();
        if (!headers) {
            alert("Please sign in to add items to your cart.");
            return;
        }

        try {
            const response = await axios.post(`${API_BASE_URL}/api/cart`, { productId, quantity }, headers);
            setCart(response.data);
            alert('Item added to cart!');
        } catch (error) {
            console.error("Failed to add to cart:", error.response ? error.response.data : error);
            alert("Failed to add item to cart. Please try again.");
        }
    };

    // --- Remove from Cart (Delete) ---
    const removeFromCart = async (productId) => {
        const headers = getAuthHeader();
        if (!headers) {
            alert("Please sign in to manage your cart.");
            return;
        }

        try {
            const response = await axios.delete(`${API_BASE_URL}/api/cart/${productId}`, headers);
            setCart(response.data);
            alert("Item removed from cart.");
        } catch (error) {
            console.error("Failed to remove from cart:", error.response ? error.response.data : error);
            alert("Failed to remove item from cart.");
        }
    };

    const cartTotalItems = cart ? cart.items.reduce((sum, item) => sum + item.quantity, 0) : 0;

    useEffect(() => {
        fetchCart();
    }, [fetchCart]);

    const value = {
        cart,
        loading,
        cartTotalItems,
        fetchCart,
        addToCart,
        removeFromCart,
    };

    return (
        <>
            <CartContext.Provider value={value}>
                {children}
            </CartContext.Provider>
        </>
    );
};
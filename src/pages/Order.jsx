import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const API_BASE_URL = 'https://e-commerce-application-backend-u42p.onrender.com';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAuthHeader = () => {
        const token = localStorage.getItem('token');
        return { headers: { Authorization: `Bearer ${token}` } };
    };

    useEffect(() => {
        const fetchOrders = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setLoading(false);
                return;
            }
            try {
                const response = await axios.get(`${API_BASE_URL}/api/orders`, getAuthHeader());
                setOrders(response.data);
            } catch (err) {
                console.error("Failed to fetch orders:", err.response ? err.response.data : err);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) {
        return <div className="text-center mt-20 text-xl">Loading order history...</div>;
    }

    if (orders.length === 0) {
        return (
            <div className="text-center mt-20 p-5">
                <h2 className="text-3xl font-semibold mb-3">No Orders Found</h2>
                <p className="text-gray-600">Start shopping and place your first order!</p>
            </div>
        );
    }

    return (
        <>
            <div className="container mx-auto p-8 max-w-5xl">
                <h1 className="text-3xl font-bold mb-8 text-center text-amber-600">Your Order History</h1>
                <div className="space-y-6">
                    {orders.map(order => (
                        <div key={order._id} className="border-4 border-amber-100 rounded-xl p-6 shadow-lg bg-white">
                            <div className="flex justify-between items-center border-b pb-3 mb-3">
                                <h2 className="text-xl font-bold">Order ID: <span className="text-gray-600 text-sm">{order._id.substring(0, 12)}...</span></h2>
                                <p className={`font-semibold px-3 py-1 rounded-full text-white ${order.status === 'delivered' ? 'bg-green-500' : 'bg-yellow-500'}`}>
                                    {order.status.toUpperCase()}
                                </p>
                            </div>
                            <p className="text-lg font-bold mb-3">Total: <span className="text-2xl text-amber-600">${order.total.toFixed(2)}</span></p>
                            <p className="text-sm text-gray-500 mb-4">
                                Date Placed: {moment(order.createdAt).format('MMMM Do YYYY, h:mm a')}
                            </p>

                            <div className="space-y-2 border-t pt-3">
                                <h3 className="font-semibold text-gray-700">Items:</h3>
                                {order.items.map((item, index) => (
                                    <div key={index} className="flex justify-between text-sm pl-4">
                                        <span className="text-gray-800">{item.product.name}</span>
                                        <span className="font-medium">{item.quantity} x ${item.product.price.toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Order;
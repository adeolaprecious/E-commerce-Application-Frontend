import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:4950/api/orders", {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setOrders(res.data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">My Orders</h1>
      {orders.map(order => (
        <div key={order._id} className="border p-4 mb-4 rounded">
          <h2>Order #{order._id}</h2>
          <p>Status: {order.status}</p>
          <p>Total: ${order.total}</p>
        </div>
      ))}
    </div>
  );
};

export default Orders;

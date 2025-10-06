import React, { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState(null);

  const fetchCart = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://localhost:4950/api/cart", {
      headers: { Authorization: `Bearer ${token}` }
    });
    setCart(res.data);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Your Cart</h1>
      {cart?.items?.map(item => (
        <div key={item.product._id} className="flex justify-between border-b py-2">
          <span>{item.product.name}</span>
          <span>{item.quantity}</span>
        </div>
      ))}
      <button className="bg-green-600 text-white px-4 py-2 mt-4 rounded">
        Checkout
      </button>
    </div>
  );
};

export default Cart;

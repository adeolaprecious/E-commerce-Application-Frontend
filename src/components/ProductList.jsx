import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 👇 Just replace this URL for testing
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {products.map(product => (
        <div key={product.id} className="border rounded-lg p-4 shadow">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover mb-3"
          />
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-gray-700">${product.price}</p>
          <button className="bg-amber-500 text-white px-4 py-2 rounded mt-3 hover:bg-amber-600">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

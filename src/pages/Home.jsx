import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4950/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-8 grid grid-cols-3 gap-6">
      {products.map(p => (
        <div key={p._id} className="border p-4 rounded-lg">
          <h2 className="text-lg font-bold">{p.name}</h2>
          <p>${p.price}</p>
  ;        <button className="bg-amber-600 text-white px-4 py-2 rounded mt-2">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;

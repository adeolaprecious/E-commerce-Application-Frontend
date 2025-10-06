import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const { id } = useParams(); // get product id from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4950/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p className="p-6">Loading product...</p>;

  return (
    <div className="p-6 flex flex-col md:flex-row gap-10">
      {/* Product Image */}
      <div className="flex-1">
        <img
          src={product.image || "https://via.placeholder.com/400"}
          alt={product.name}
          className="w-full max-w-md object-contain border rounded-lg shadow"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-xl text-blue-600 font-semibold mb-4">${product.price}</p>
        <p className="text-gray-600 mb-6">{product.description || "No description available."}</p>
        <p className="text-sm text-gray-500 mb-6">
          {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
        </p>

        {/* Add to Cart Button */}
        <button
          disabled={product.stock === 0}
          className={`py-2 px-6 rounded text-white font-medium ${
            product.stock > 0 ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {product.stock > 0 ? "Add to Cart" : "Sold Out"}
        </button>
      </div>
    </div>
  );
};

export default Products;

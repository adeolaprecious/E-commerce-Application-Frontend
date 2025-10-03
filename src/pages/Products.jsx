// import { useEffect, useState } from "react";
// import axios from "axios";

// const Products = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/products")
//       .then(res => setProducts(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div>
//       <h1 className="text-xl font-bold mb-4">Products</h1>
//       <table className="w-full border">
//         <thead>
//           <tr className="bg-gray-200">
//             <th>Name</th>
//             <th>Price</th>
//             <th>Stock</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map(p => (
//             <tr key={p._id} className="border-b">
//               <td>{p.name}</td>
//               <td>${p.price}</td>
//               <td>{p.stock}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Products;

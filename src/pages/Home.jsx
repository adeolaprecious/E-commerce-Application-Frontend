// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// const Home = () => {
//      const [products, setProducts] = useState([]);

//   useEffect(() => {
//     API.get('/products')
//       .then(res => setProducts(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <>
//        <div style={{ padding: 20 }}>
// //       <h1>Products</h1>
// //       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
//       {products.map(p => (
//           <div key={p._id} style={{ border: '1px solid #ddd', padding: 12 }}>
//             {p.image && <img src={`http://localhost:5000${p.image}`} alt={p.name} style={{ width: '100%', height: 140, objectFit: 'cover' }} />}
//             <h3>{p.name}</h3>
//             <p>${p.price}</p>
//             <Link to={`/product/${p._id}`}>View</Link>
//           </div>
//         ))}
//       </div>
//     </div>

//     </>
//   )
// }

// export default Home

// // import React, { useEffect, useState } from 'react';
// // import API from '../api';
// // import { Link } from 'react-router-dom';

// // export default function Home() {
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     API.get('/products')
// //       .then(res => setProducts(res.data))
// //       .catch(err => console.error(err));
// //   }, []);

// //   return (
// //     <div style={{ padding: 20 }}>
// //       <h1>Products</h1>
// //       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
// //         {products.map(p => (
// //           <div key={p._id} style={{ border: '1px solid #ddd', padding: 12 }}>
// //             {p.image && <img src={`http://localhost:5000${p.image}`} alt={p.name} style={{ width: '100%', height: 140, objectFit: 'cover' }} />}
// //             <h3>{p.name}</h3>
// //             <p>${p.price}</p>
// //             <Link to={`/product/${p._id}`}>View</Link>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

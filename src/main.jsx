import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom' 
import { CartProvider } from './context/CartContext.jsx' // 👈
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import { configureStore } from '@reduxjs/toolkit'
// import { Provider } from 'react-redux' 
// import counterReducer  from './redux/Navbar'

// let store = configureStore({
//   reducer : {counterReducer}
// })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider> 
          <App/>
          <ToastContainer position="top-right" autoClose={3000} />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)

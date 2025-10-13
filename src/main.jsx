import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom' 
import { CartProvider } from './context/CartContext.jsx' // 👈
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
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)

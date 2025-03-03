import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Orders from "./pages/Orders";

function App() {
  return (
    <React.StrictMode>
      <CartProvider>
        <Router>
          <div>
            <Header />
            {/* Aquí puedes agregar el resto de tu aplicación */}
            <main className="container mx-auto p-4">
              <p>Bienvenido a mi e-commerce. ¡Explora nuestros productos!</p>
            </main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </React.StrictMode>
  );
}

export default App;

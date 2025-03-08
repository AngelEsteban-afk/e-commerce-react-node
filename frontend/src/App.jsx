import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
// import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Carrito from "./pages/Carrito";
import Checkout from "./pages/Checkout";
import IniciarSesion from "./pages/Login";
import Registrarse from "./pages/Register";
import Orders from "./pages/Orders";
import Productos from "./pages/Productos";
import AddProductForm from "./components/AddProductForm";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/productos" element={<Productos />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/iniciar-sesion" element={<IniciarSesion />} />{" "}
          <Route path="/add-product" element={<AddProductForm />} />
          {/* Nueva ruta */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

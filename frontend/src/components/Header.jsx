import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Título o logo */}
        <h1 className="text-2xl font-bold">E-commerce</h1>

        {/* Botones de navegación */}
        <nav className="space-x-4 flex items-center">
          <Link to="/" className="hover:text-blue-400 transition duration-300">
            Inicio
          </Link>
          <Link
            to="/productos"
            className="hover:text-blue-400 transition duration-300"
          >
            Productos
          </Link>
          <Link
            to="/carrito"
            className="hover:text-blue-400 transition duration-300"
          >
            Carrito
          </Link>
          <Link
            to="/iniciar-sesion"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300"
          >
            Iniciar Sesión
          </Link>
          <Link
            to="/registrarse"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition duration-300"
          >
            Registrarse
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

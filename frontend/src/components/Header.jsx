import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mi E-commerce</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300">
          Iniciar Sesión
        </button>
      </div>
    </header>
  );
};

export default Header;

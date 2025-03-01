import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          setError("La respuesta de la API no es un array");
        }
      } catch (error) {
        setError("Error al cargar los productos");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!Array.isArray(products)) {
    return <div>No se encontraron productos.</div>;
  }

  return (
    <div>
      <h1>Productos</h1>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;

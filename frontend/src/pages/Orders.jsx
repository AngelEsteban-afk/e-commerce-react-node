import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]); // Estado para almacenar los pedidos
  const [error, setError] = useState(""); // Estado para manejar errores
  const navigate = useNavigate(); // Hook para redirigir al usuario

  // Función para obtener los pedidos del usuario
  const fetchOrders = async () => {
    try {
      // Obtener el token de localStorage
      const token = localStorage.getItem("token");

      // Verificar si el token existe
      if (!token) {
        // Redirigir al usuario a la página de inicio de sesión si no hay token
        navigate("/login");
        return;
      }

      // Hacer la solicitud al backend para obtener los pedidos
      const response = await fetch("/api/orders", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Enviar el token en el encabezado
        },
      });

      // Verificar si la respuesta es exitosa
      if (!response.ok) {
        throw new Error("Error al obtener los pedidos");
      }

      // Convertir la respuesta a JSON y actualizar el estado
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      // Manejar errores
      setError("Error al cargar los pedidos");
      console.error(error);
    }
  };

  // Ejecutar fetchOrders cuando el componente se monta
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Mis Pedidos</h1>

      {/* Mostrar mensaje de error si hay algún problema */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Mostrar la lista de pedidos */}
      {orders.length === 0 ? (
        <p>No tienes pedidos.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order._id}>
              <h2>{order.productName}</h2>
              <p>${order.total}</p>
              <p>Fecha: {new Date(order.createdAt).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;

import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, dispatch } = useCart();

  // Función para eliminar un producto del carrito
  const handleRemoveItem = (itemId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { _id: itemId } });
  };

  // Función para vaciar el carrito
  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item._id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px 0",
              }}
            >
              <h2>{item.name}</h2>
              <p>${item.price}</p>
              <button onClick={() => handleRemoveItem(item._id)}>
                Eliminar
              </button>
            </div>
          ))}
          <button
            onClick={handleClearCart}
            style={{
              marginTop: "20px",
              backgroundColor: "red",
              color: "white",
            }}
          >
            Vaciar Carrito
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;

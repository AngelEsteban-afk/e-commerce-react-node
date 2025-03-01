import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51QxuhACNsOUkz8loAF3JFCg2iPD0eioK2igpL97g2pNDrIafGa3Rrhh4q3pOSeJPyUoMYcEoG2sH77DIRXmVO42H00373zD9cj"
);

const cardElementOptions = {
  style: {
    base: {
      fontSize: "16px",
      color: "#424770",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#9e2146",
    },
  },
};

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { token, error } = await stripe.createToken(cardElement);

      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }

      const response = await fetch("/api/payments/process", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: token.id }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
      } else {
        setError("Error al procesar el pago");
      }
    } catch (error) {
      setError("Error al procesar el pago");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={cardElementOptions} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {success && (
        <div style={{ color: "green" }}>Pago procesado correctamente</div>
      )}
      <button type="submit" disabled={!stripe || loading}>
        {loading ? "Procesando..." : "Pagar"}
      </button>
    </form>
  );
};

export default Checkout;

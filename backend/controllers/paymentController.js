import Stripe from "stripe";
import Order from "../models/Order.js";

// Configurar Stripe con tu clave secreta
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Procesar un pago
export const processPayment = async (req, res) => {
  const { orderId, token } = req.body;
  const userId = req.user.id; // Obtener el ID del usuario autenticado

  try {
    // Verificar que el pedido exista y pertenezca al usuario
    const order = await Order.findOne({ _id: orderId, user: userId });
    if (!order) {
      return res.status(404).json({ message: "Pedido no encontrado" });
    }

    // Crear un cargo con Stripe
    const charge = await stripe.charges.create({
      amount: order.total * 100, // Stripe espera el monto en centavos
      currency: "usd",
      source: token.id, // Token de la tarjeta generado en el frontend
      description: `Pago del pedido ${order._id}`,
    });

    // Actualizar el estado del pedido a "Pagado"
    order.status = "Pagado";
    order.paymentId = charge.id; // Guardar el ID del pago de Stripe
    await order.save();

    res.json({ message: "Pago procesado correctamente", order });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al procesar el pago", error: error.message });
  }
};

// Reembolsar un pago (solo para administradores)
export const refundPayment = async (req, res) => {
  const { orderId } = req.body;

  try {
    // Verificar que el pedido exista
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Pedido no encontrado" });
    }

    // Verificar que el pedido tenga un ID de pago de Stripe
    if (!order.paymentId) {
      return res
        .status(400)
        .json({ message: "Este pedido no tiene un pago asociado" });
    }

    // Crear un reembolso con Stripe
    const refund = await stripe.refunds.create({
      charge: order.paymentId,
    });

    // Actualizar el estado del pedido a "Reembolsado"
    order.status = "Reembolsado";
    await order.save();

    res.json({ message: "Reembolso procesado correctamente", refund });
  } catch (error) {
    res.status(500).json({
      message: "Error al procesar el reembolso",
      error: error.message,
    });
  }
};

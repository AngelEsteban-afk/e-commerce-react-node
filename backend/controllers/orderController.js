import Order from "../models/Order.js";
import Product from "../models/Product.js";
import User from "../models/User.js";

// Crear un nuevo pedido
export const createOrder = async (req, res) => {
  const { products, total } = req.body;
  const userId = req.user.id; // Obtener el ID del usuario autenticado

  try {
    // Verificar que el usuario exista
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Verificar que los productos existan y tengan suficiente stock
    for (const item of products) {
      const product = await Product.findById(item.product);
      if (!product) {
        return res
          .status(404)
          .json({ message: `Producto ${item.product} no encontrado` });
      }
      if (product.stock < item.quantity) {
        return res.status(400).json({
          message: `Stock insuficiente para el producto ${product.name}`,
        });
      }
    }

    // Crear el pedido
    const order = new Order({
      user: userId,
      products: products.map((item) => ({
        product: item.product,
        quantity: item.quantity,
      })),
      total,
    });

    // Guardar el pedido
    await order.save();

    // Actualizar el stock de los productos
    for (const item of products) {
      const product = await Product.findById(item.product);
      product.stock -= item.quantity;
      await product.save();
    }

    res.status(201).json(order);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear el pedido", error: error.message });
  }
};

// Obtener todos los pedidos del usuario
export const getOrdersByUser = async (req, res) => {
  const userId = req.user.id; // Obtener el ID del usuario autenticado

  try {
    const orders = await Order.find({ user: userId }).populate(
      "products.product",
      "name price"
    );
    res.json(orders);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener los pedidos", error: error.message });
  }
};

// Obtener un pedido por ID
export const getOrderById = async (req, res) => {
  const orderId = req.params.id;
  const userId = req.user.id; // Obtener el ID del usuario autenticado

  try {
    const order = await Order.findOne({ _id: orderId, user: userId }).populate(
      "products.product",
      "name price"
    );
    if (!order) {
      return res.status(404).json({ message: "Pedido no encontrado" });
    }
    res.json(order);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener el pedido", error: error.message });
  }
};

// Actualizar el estado de un pedido (solo para administradores)
export const updateOrderStatus = async (req, res) => {
  const orderId = req.params.id;
  const { status } = req.body;

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Pedido no encontrado" });
    }

    order.status = status;
    await order.save();

    res.json(order);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al actualizar el pedido", error: error.message });
  }
};

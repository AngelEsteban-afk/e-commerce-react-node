import express from "express";
import {
  createOrder,
  getOrdersByUser,
  getOrderById,
  updateOrderStatus,
} from "../controllers/orderController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Rutas protegidas por autenticación
router.post("/", authMiddleware, createOrder); // Crear un pedido
router.get("/", authMiddleware, getOrdersByUser); // Obtener todos los pedidos del usuario
router.get("/:id", authMiddleware, getOrderById); // Obtener un pedido por ID
router.put("/:id/status", authMiddleware, updateOrderStatus); // Actualizar el estado de un pedido

export default router;

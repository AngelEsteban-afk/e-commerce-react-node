import express from "express";
import {
  processPayment,
  refundPayment,
} from "../controllers/paymentController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Rutas protegidas por autenticación
router.post("/process", authMiddleware, processPayment); // Procesar un pago
router.post("/refund", authMiddleware, refundPayment); // Reembolsar un pago
router.post("/process", processPayment);

export default router;

import express from "express";
import { body } from "express-validator"; // Importa express-validator
import { register, login } from "../controllers/authController.js"; // Importa los controladores

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post(
  "/register",
  [
    // Validaciones con express-validator
    body("name").notEmpty().withMessage("Nombre es requerido"),
    body("email").isEmail().withMessage("Email inválido"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("La contraseña debe tener al menos 6 caracteres"),
  ],
  register // Usa el controlador register
);

// Ruta para iniciar sesión
router.post("/login", login); // Usa el controlador login

export default router;

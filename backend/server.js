import express from "express";
import cors from "cors"; // Importa el paquete cors
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import {
  productRoutes,
  authRoutes,
  orderRoutes,
  paymentRoutes,
} from "./routes"; // Importa las rutas desde un archivo index.js

// Cargar variables de entorno
dotenv.config();

// Conectar a la base de datos
connectDB();

// Crear la aplicación Express
const app = express();

// Configurar CORS
app.use(
  cors({
    origin: ["http://localhost:5173", "https://tudominio.com"], // Permite solicitudes desde el frontend
    credentials: true, // Permite enviar cookies y encabezados de autenticación
  })
);

// Middleware para parsear JSON y datos de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use("/api/products", productRoutes);
app.use("/api/users", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payments", paymentRoutes);

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);

  if (err.name === "ValidationError") {
    return res
      .status(400)
      .json({ message: "Error de validación", errors: err.errors });
  }

  if (err.name === "UnauthorizedError") {
    return res.status(401).json({ message: "No autorizado" });
  }

  res.status(500).json({ message: "Algo salió mal" });
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
